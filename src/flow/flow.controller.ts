import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  ForbiddenException,
  Get,
  InternalServerErrorException,
  Logger,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { FlowService } from './flow.service';
import { PrismaService } from 'src/prisma.service';
import { ApiBody, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { VoteProjectsDTO } from './dto/voteProjects.dto';
import { VoteCollectionsDTO } from './dto/voteCollections.dto';
import { AuthedReq } from 'src/utils/types/AuthedReq.type';
import { PairsResult } from './dto/pairsResult';
import { sortProjectId } from 'src/utils';
import {
  BudgetDto,
  ConnectFarcasterDto,
  ConnectWorldIdDto,
  DelegateBudgetFarcasterDto,
  DelegateFarcasterDto,
  RemoveLastVoteDto,
  RevokeDelegationDto,
  SetCoIDto,
} from './dto/bodies';
import { Prisma, ProjectType } from '@prisma/client';
import { badgeholders } from 'src/rpgf5-data-import/badgeholders';
import { verifySignature } from 'src/utils/badges';
import axios from 'axios';
import { FarcasterMetadata, FarcasterUserByFid } from './types';
import { verifyCloudProof } from 'src/utils/world-coin';
import {
  CollectionResponse,
  delegateStatusExample,
  delegateStatusExample2,
  exampleFarcasterUserByFid,
  ProjectResponse,
} from './dto/responses';

// export const getAllProjects = (category: number) => {
//   switch (category) {
//     case 2:
//       return projects.filter(
//         (el) => el['applicationCategory'] === 'ETHEREUM_CORE_CONTRIBUTIONS',
//       );
//     case 3:
//       return projects.filter(
//         (el) => el['applicationCategory'] === 'OP_STACK_TOOLING',
//       );
//     case 1:
//       return projects.filter(
//         (el) =>
//           el['applicationCategory'] === 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
//       );
//     default:
//       throw new Error(`Invalid category id ${category}`);
//   }
// };

@Controller({ path: 'flow' })
export class FlowController {
  private readonly logger = new Logger(FlowController.name);
  constructor(
    private readonly flowService: FlowService,
    private readonly prismaService: PrismaService,
  ) {}

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Used for pinning an JSON object to IPFS (used in attestations)',
  })
  @ApiBody({
    schema: {
      type: 'object',
      title: 'json',
      example: { json: { name: 'John' } },
    },
    description: 'json object that you want to pin to IPFS',
  })
  @Post('/pinJSONToIPFS')
  async pinJSONToIPFS(@Body('json') json: object) {
    const hash = await this.flowService.pinJSONToIPFS(json);

    return hash;
  }

  // @Get('/isLastLayerCollection')
  // async isLastLayerCollection(@Query('cid') collectionId?: number) {
  //   return this.flowService.isLastLayerCollection(collectionId || null);
  // }

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Returns the list of categories',
  })
  @ApiResponse({
    type: [CollectionResponse],
    status: 200,
    description: 'List of categories',
  })
  @Get('/collections')
  async getCollections(
    @Req() { userId }: AuthedReq, // @Query('cid') parentId?: number,
  ) {
    const collections = await this.flowService.getCollections(userId, null);

    return collections;
  }

  @UseGuards(AuthGuard)
  @ApiQuery({
    name: 'cid',
    description: 'Parent id of the collections',
    required: true,
  })
  @ApiOperation({
    summary: 'Returns the projects in a collection',
  })
  @ApiResponse({
    type: [ProjectResponse],
    status: 200,
    description: 'List of projects',
  })
  @Get('/projects')
  async getProjects(
    @Req() { userId }: AuthedReq,
    @Query('cid') parentId?: number,
  ) {
    if (!parentId) throw new BadRequestException('Please provide a valid cid');
    const projects = await this.flowService.getProjects(
      parentId || null,
      userId,
    );
    return projects;
  }

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Used to mark a project as Conflict of Interest',
  })
  @ApiBody({
    type: SetCoIDto,
    description: 'Project id',
  })
  @UseGuards(AuthGuard)
  @Post('/mark-CoI')
  async markCoI(@Req() { userId }: AuthedReq, @Body() { pid }: SetCoIDto) {
    await this.flowService.setCoI(userId, pid);
    return 'Success';
  }

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Used for a pairwise vote between two projects',
  })
  @ApiBody({
    type: VoteProjectsDTO,
    examples: {
      1: {
        summary: 'Sample Post Body',
        value: {
          project1Id: 10,
          project2Id: 20,
          pickedId: 10,
          project1Stars: 4,
          project2Stars: 2,
        },
      },
    },
  })
  @Post('/projects/vote')
  async voteProjects(
    @Req() { userId }: AuthedReq,
    @Body()
    {
      project1Id,
      project2Id,
      pickedId,
      project1Stars,
      project2Stars,
    }: VoteProjectsDTO,
  ) {
    const promises = [];
    const [id1, id2] = sortProjectId(project1Id, project2Id);
    if (project1Stars)
      promises.push(
        this.flowService.setRating(project1Id, userId, project1Stars),
      );
    if (project2Stars)
      promises.push(
        this.flowService.setRating(project2Id, userId, project2Stars),
      );
    promises.push(this.flowService.voteForProjects(userId, id1, id2, pickedId));

    await Promise.all(promises);
  }

  // @UseGuards(AuthGuard)
  // @ApiOperation({
  //   summary: 'Used for a pairwise vote between two collections',
  // })
  // @Get('/ballot')
  // async getBallot(
  //   @Req() { userId }: AuthedReq,
  //   @Query('cid') collectionId: number,
  // ) {
  //   if (!collectionId)
  //     throw new BadRequestException('You need to supply a collection id');
  //   const ranking = await this.flowService.getRanking(userId, collectionId);

  //   const ballot: AgoraBallotPost = { projects: [] };

  //   ballot.projects = ranking.map((el) => ({
  //     project_id: el.project.RF6Id!,
  //     allocation: (el.share * 100).toFixed(3),
  //     impact: el.stars === null ? 3 : el.stars,
  //   }));

  //   // Add spam projects for staging:

  //   const spams = getAllProjects(collectionId)
  //     .filter(
  //       (el) => !ballot.projects.find((item) => item.project_id === el.id),
  //     )
  //     .map((item) => ({ project_id: item.id, allocation: `0`, impact: 3 }));

  //   ballot.projects = [...ballot.projects, ...spams];

  //   return ballot;
  // }

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary:
      'Used for analytics. Called when a ballot is successfully submitted to Optimism',
  })
  @Post('/ballot/success')
  async successBallot(@Req() { userId }: AuthedReq) {
    await this.prismaService.user.update({
      where: {
        id: userId,
      },
      data: {
        ballotSuccess: 1,
      },
    });

    return 'Success';
  }

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Used to prove ownership of a farcaster account',
  })
  @ApiBody({
    type: ConnectFarcasterDto,
    required: true,
    examples: {
      1: {
        description:
          'All three properties should be given by the Farcaster QR code sign-in',
        value: {
          address: '0x143c777F650aD8v00942D497EE67845774427198',
          signature:
            '0x1430x143c777F650aD8v00942D497EE67845774427198c777F0x143c777F650a0x143c777F650aD8v00942D497EE67845774427198D8v00942D497EE67845774427198650aD8v00942D497EE67845774427198',
          message: 'Signing in to Pairwise.vote',
        },
      },
    },
  })
  @Post('/connect/farcaster')
  async connectFarcaster(
    @Req() { userId }: AuthedReq,
    @Body() { address, message, signature }: ConnectFarcasterDto,
  ) {
    const isValid = verifySignature(message, signature, address);
    if (!isValid) throw new ForbiddenException('Invalid signature');

    const fid = Number(message.split('fid/')[1]);

    if (isNaN(fid))
      throw new InternalServerErrorException("Can't find the fid");

    const { data } = await axios.get<FarcasterUserByFid>(
      `https://client.warpcast.com/v2/user-by-fid?fid=${fid}`,
    );

    await this.prismaService.farcasterConnection.upsert({
      where: {
        userId,
      },
      create: {
        metadata: data.result.user,
        userId: userId,
      },
      update: {
        metadata: data.result.user,
        userId: userId,
      },
    });

    return 'Success';
  }

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Proxy to farcaster user by username endpoint',
  })
  @ApiResponse({
    schema: {},
    example: exampleFarcasterUserByFid,
  })
  @Get('/farcaster/user-by-username')
  async farcasterUserByUsername(@Query('username') username: string) {
    const res = await axios.get<FarcasterUserByFid>(
      `https://client.warpcast.com/v2/user-by-username?username=${username}`,
    );
    return res.data;
  }

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Proxy to farcaster user by fid endpoint',
  })
  @ApiResponse({
    schema: {},
    example: exampleFarcasterUserByFid,
  })
  @Get('/farcaster/user-by-fid')
  async farcasterUserByFid(@Query('username') username: string) {
    const res = await axios.get<FarcasterUserByFid>(
      `https://client.warpcast.com/v2/user-by-fid?username=${username}`,
    );
    return res.data;
  }

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Status of incoming/outgoing delegations',
  })
  @ApiResponse({
    status: 200,
    description: 'User has complete delegation profile',
    example: delegateStatusExample,
  })
  @ApiResponse({
    status: 2001,
    description: 'User with partial delegation profile',
    example: delegateStatusExample2,
  })
  @Get('/delegate/status')
  async delegateStatus(@Req() { userId }: AuthedReq) {
    const [collectionDelegations, budgetDelegation] = await Promise.all([
      this.prismaService.collectionDelegation.findMany({
        select: { collectionId: true, metadata: true },
        where: { userId },
      }),
      this.prismaService.budgetDelegation.findUnique({
        select: { metadata: true },
        where: { userId },
      }),
    ]);

    const budgetDelegationMetadata =
      budgetDelegation?.metadata as FarcasterMetadata;

    let result: any = {
      fromYou: {
        collections: collectionDelegations.map((el) => {
          const metadata = el.metadata as FarcasterMetadata;
          return {
            ...el,
            metadata: {
              username: metadata.username,
              profileUrl: metadata.pfp.url,
            },
          };
        }),
        budget: budgetDelegation
          ? {
              ...budgetDelegation,
              metadata: {
                username: budgetDelegationMetadata.username,
                profileUrl: budgetDelegationMetadata.pfp.url,
              },
            }
          : null,
      },
    };

    const res = await this.prismaService.farcasterConnection.findUnique({
      select: { metadata: true },
      where: { userId },
    });

    if (res) {
      const fid = (res.metadata as FarcasterMetadata).fid;
      const [res2, res3] = await Promise.all([
        this.prismaService.collectionDelegation.findMany({
          select: { metadata: true, collectionId: true },
          where: { target: `${fid}` },
        }),
        this.prismaService.budgetDelegation.findMany({
          select: { metadata: true },
          where: { target: `${fid}` },
        }),
      ]);

      result = {
        ...result,
        toYou: {
          collections: res2.map((el) => {
            const metadata = el.metadata as FarcasterMetadata;
            return {
              ...el,
              metadata: {
                username: metadata.username,
                profileUrl: metadata.pfp.url,
              },
            };
          }),
          budget: res3.map((el) => {
            const metadata = el.metadata as FarcasterMetadata;
            return {
              ...el,
              metadata: {
                username: metadata.username,
                profileUrl: metadata.pfp.url,
              },
            };
          }),
        },
      };
    }

    return result;
  }

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Used to delegate a category to a farcaster account',
  })
  @Post('/delegate/farcaster')
  async delegateFarcaster(
    @Req() { userId }: AuthedReq,
    @Body() { collectionId, targetUsername }: DelegateFarcasterDto,
  ) {
    let data: FarcasterUserByFid;
    try {
      const res = await axios.get<FarcasterUserByFid>(
        `https://client.warpcast.com/v2/user-by-username?username=${targetUsername}`,
      );
      data = res.data;
    } catch (e) {
      console.error(e);
      throw new ForbiddenException('Username invalid');
    }

    if (collectionId === -1) {
      await this.flowService.delegateBudgetFarcaster(userId, data.result.user);
    } else {
      try {
        await this.prismaService.collectionDelegation.create({
          data: {
            userId,
            platform: 'FARCASTER',
            target: `${data.result.user.fid}`,
            metadata: data.result.user,
            collectionId: collectionId,
          },
        });
      } catch (e: unknown) {
        if (
          e instanceof Prisma.PrismaClientKnownRequestError &&
          e.code === 'P2002'
        ) {
          throw new ConflictException(
            'collection is already delegated for the user',
          );
        }
      }
    }

    return 'Success';
  }

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Used to delegate the budget decision to a farcaster account',
  })
  @Post('/delegate/budget/farcaster')
  async delegateBudgetFarcaster(
    @Req() { userId }: AuthedReq,
    @Body() { targetUsername }: DelegateBudgetFarcasterDto,
  ) {
    let data: FarcasterUserByFid;
    try {
      const res = await axios.get<FarcasterUserByFid>(
        `https://client.warpcast.com/v2/user-by-username?username=${targetUsername}`,
      );
      data = res.data;
    } catch (e) {
      console.error(e);
      throw new ForbiddenException('Username invalid');
    }

    try {
      await this.prismaService.budgetDelegation.create({
        data: {
          userId,
          platform: 'FARCASTER',
          target: `${data.result.user.fid}`,
          metadata: data.result.user,
        },
      });
    } catch (e: unknown) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2002'
      ) {
        throw new ConflictException(
          'collection is already delegated for the user',
        );
      }
    }

    return 'Success';
  }

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Set total budget & category percentages',
  })
  @ApiBody({
    type: BudgetDto,
    examples: {
      1: {
        value: {
          budget: 4500000,
          allocationPercentages: [0.5, 0.2, 0.3],
        },
      },
    },
  })
  @Post('/budget')
  async setTotalBudget(
    @Req() { userId }: AuthedReq,
    @Body() { budget, allocationPercentages }: BudgetDto,
  ) {
    const [budgetDelegation, topCollections] = await Promise.all([
      this.prismaService.budgetDelegation.findUnique({
        where: { userId },
      }),
      this.prismaService.project.findMany({
        where: { parentId: null, type: 'collection' },
      }),
    ]);

    if (budgetDelegation)
      throw new ForbiddenException('Budget decision already delegated');

    if (topCollections.length !== allocationPercentages.length)
      throw new ForbiddenException(
        'You must specify a percentage for exactly each category',
      );

    if (allocationPercentages.reduce((acc, curr) => (acc += curr), 0) !== 1)
      throw new ForbiddenException('Summation of percentages must equal 1');

    await Promise.all([
      this.prismaService.user.update({
        where: { id: userId },
        data: {
          budget,
        },
      }),
      ...topCollections.map((c, i) =>
        this.prismaService.share.update({
          where: {
            userId_projectId: {
              userId,
              projectId: c.id,
            },
          },
          data: { share: allocationPercentages[i] },
        }),
      ),
    ]);
    return 'Success';
  }

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Revoke a delegation',
  })
  @ApiBody({
    type: RevokeDelegationDto,
    description:
      'Pass collectionId = -1 for the budget and for other categories, simply use their id',
  })
  @Post('/delegate/revoke')
  async revokeDelegation(
    @Req() { userId }: AuthedReq,
    @Body() { collectionId }: RevokeDelegationDto,
  ) {
    if (collectionId === -1) {
      await this.prismaService.budgetDelegation.delete({
        where: { userId },
      });
    } else {
      await this.prismaService.collectionDelegation.delete({
        where: { userId_collectionId: { collectionId, userId } },
      });
    }

    return 'Success';
  }

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Used to prove ownership of a world coin account',
  })
  @ApiBody({
    description: 'Proof is returned by the World coin QR sign-in flow',
    type: ConnectWorldIdDto,
  })
  @Post('/connect/wid')
  async connectWorldId(
    @Req() { userId }: AuthedReq,
    @Body() { proof }: ConnectWorldIdDto,
  ) {
    const appId = process.env.WORLD_APP_ID as `app_${string}`;
    const actionId = process.env.WORLD_ACTION_ID;

    console.log('proof', proof);

    if (!appId || !actionId)
      throw new InternalServerErrorException(
        'App id or Action id not available',
      );

    const response = await verifyCloudProof(proof, appId, actionId);

    console.log('response', response);

    if (!response.success)
      throw new ForbiddenException('Invalid World id proof');

    await this.prismaService.worldIdConnection.upsert({
      where: {
        userId,
      },
      create: {
        metadata: {},
        userId: userId,
      },
      update: {
        metadata: {},
        userId: userId,
      },
    });

    return 'Success';
  }

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'status of to which platforms user is connected',
  })
  @ApiResponse({
    description: 'No account has been connected thus far',
    status: 200,
    example: {
      farcaster: null,
      worldId: null,
    },
  })
  @ApiResponse({
    description: 'Has connected to both farcaster and world id',
    status: 2001,
    example: {
      farcaster: { metadata: exampleFarcasterUserByFid.result.user },
      worldId: { metadata: {} },
    },
  })
  @Get('/connect/status')
  async getConnectStatus(@Req() { userId }: AuthedReq) {
    const [farcasterConnection, worldCoinConnection] = await Promise.all([
      this.prismaService.farcasterConnection.findUnique({
        select: { metadata: true },
        where: { userId },
      }),
      this.prismaService.worldIdConnection.findUnique({
        select: { metadata: true },
        where: { userId },
      }),
    ]);

    return {
      farcaster: farcasterConnection,
      worldId: worldCoinConnection,
    };
  }

  // @ApiOperation({
  //   summary: 'Used for a pairwise vote between two collections',
  // })
  // @Get('/temp/finishers')
  // async findFinishers() {
  //   const allUsers = await this.prismaService.user.findMany();

  //   let count = 0;

  //   const progresses = [];

  //   for (let i = 0; i < allUsers.length; i++) {
  //     const user = allUsers[i];

  //     const userId = user.id;
  //     const res = await this.prismaService.vote.findFirst({
  //       where: {
  //         userId: userId,
  //       },
  //       include: { project1: true },
  //     });
  //     if (!res) progresses.push({ userAddress: user.address, progress: 0 });
  //     const parentCollection = res?.project1.parentId;

  //     const [collection, votes, projects, allStars, projectCoIs] =
  //       await Promise.all([
  //         this.prismaService.project.findUnique({
  //           where: {
  //             id: parentCollection || -1,
  //             type: ProjectType.collection,
  //           },
  //           select: { name: true, id: true },
  //         }),
  //         this.prismaService.vote.findMany({
  //           where: {
  //             userId: userId,
  //             project1: { parentId: parentCollection },
  //             project2: { parentId: parentCollection },
  //           },
  //         }),
  //         this.prismaService.project.findMany({
  //           where: {
  //             parentId: parentCollection || -1,
  //           },
  //         }),
  //         this.flowService.getUserProjectStars(userId, parentCollection || -1),
  //         this.prismaService.projectCoI.findMany({
  //           where: {
  //             project: { parentId: parentCollection },
  //             userId,
  //           },
  //         }),
  //       ]);

  //     // projects except those with conflict of interest
  //     const allProjects = projects
  //       .filter((item) => !projectCoIs.find((el) => el.projectId === item.id))
  //       .sort((a, b) =>
  //         (a.implicitCategory || '').localeCompare(b.implicitCategory || ''),
  //       );

  //     const projectStars = allStars.filter(
  //       (item) => !projectCoIs.find((el) => el.projectId === item.projectId),
  //     );

  //     const allVotes = votes.filter(
  //       (item) =>
  //         !projectCoIs.find(
  //           (el) =>
  //             el.projectId === item.project1Id ||
  //             el.projectId === item.project2Id,
  //         ),
  //     );

  //     const realProgress = this.flowService.calculateProgress(
  //       allVotes,
  //       projectStars,
  //       allProjects,
  //     );

  //     count++;
  //     console.log('Done:', count / allUsers.length);
  //     progresses.push({ userAddress: user.address, progress: realProgress });
  //   }

  //   return progresses
  //     .filter((el) => el.progress * 3 >= 1)
  //     .filter((el) =>
  //       badgeholders
  //         .map((item) => item.toLowerCase())
  //         .includes(el.userAddress.toLowerCase()),
  //     );
  // }

  // @UseGuards(AuthGuard)
  // @ApiOperation({
  //   summary: 'Used for a pairwise vote between two collections',
  // })
  // @Post('/collections/vote')
  // async voteCollections(
  //   @Req() { userId }: AuthedReq,
  //   @Body() { collection1Id, collection2Id, pickedId }: VoteCollectionsDTO,
  // ) {
  //   const [id1, id2] = sortProjectId(collection1Id, collection2Id);
  //   return await this.flowService.voteForCollections(
  //     userId,
  //     id1,
  //     id2,
  //     pickedId,
  //   );
  // }

  @ApiOperation({
    summary: 'Deletes the last vote by the user in a category',
  })
  @UseGuards(AuthGuard)
  @Post('/pairs/back')
  async removeLastVote(
    @Req() { userId }: AuthedReq,
    @Body() { collectionId }: RemoveLastVoteDto,
  ) {
    if (collectionId === null) return this.flowService.undo(userId, null);

    const progressStatus = await this.flowService.getCollectionProgressStatus(
      userId,
      collectionId,
    );

    if (progressStatus !== 'WIP')
      throw new ForbiddenException(
        "You can only go back in a collection that's WIP or WIP-Threshold",
      );

    await this.flowService.undo(userId, collectionId);

    return 'Success';
  }

  @ApiQuery({ name: 'cid', description: 'collection id of the pairs' })
  @ApiQuery({
    name: 'pid',
    description: 'project id of the project that you want it in the pair',
  })
  @ApiResponse({
    type: PairsResult,
    status: 200,
    description: 'Returns a pair of comparisons + progress data',
  })
  @ApiOperation({
    summary: 'Returns the next pair for a pairwise vote',
  })
  @UseGuards(AuthGuard)
  @Get('/pairs-for-project')
  async getPairsForProject(
    @Req() { userId }: AuthedReq,
    @Query('cid') collectionId?: number,
    @Query('pid') projectId?: number,
  ) {
    if (!collectionId) throw new BadRequestException('Please provide a cid');
    if (!projectId)
      throw new BadRequestException('Please provide a project id');

    const pairs: PairsResult = await this.flowService.getPairs(
      userId,
      collectionId,
      projectId,
    );

    return pairs;
  }

  @ApiQuery({ name: 'cid', description: 'collection id of the pairs' })
  @ApiResponse({
    type: PairsResult,
    status: 200,
    description: 'Returns a pair of comparisons + progress data',
  })
  @ApiOperation({
    summary: 'Returns the next pair for a pairwise vote',
  })
  @UseGuards(AuthGuard)
  @Get('/pairs')
  async getPairs(
    @Req() { userId }: AuthedReq,
    @Query('cid') collectionId?: number,
  ) {
    if (!collectionId) throw new BadRequestException('Please provide a cid');

    const pairs = await this.flowService.getPairs(
      userId,
      collectionId,
      undefined,
    );

    return pairs;
  }

  @ApiQuery({
    name: 'cid',
    description:
      'Collection id of the ranking (skip if you look for top level collections)',
    required: false,
  })
  @ApiOperation({
    summary:
      'Returns the ranking within the projects/collections of a parent collection',
  })
  @ApiResponse({
    status: 200,
    description: `There are 6 progress statuses:\n
                  1- Pending: No votes has been cast in the collection\n
                  2- WIP: some votes has been cast in the collection\n
                  4- Finished: The collection has passed the threshold and automatically marked finished\n
                  5- Attested: The collection has been attested to the EAS\n
                  6- Delegated: The collection is delegated to another user`,
    example: {
      progress: 'Pending',
      name: 'root',
      share: 1,
      id: -1,
      budget: 5000000,
      ranking: [
        {
          userId: 2,
          projectId: 1,
          share: 0.34,
          project: {
            id: 1,
            name: 'Governance Infrastructure & Tooling 2',
          },
          stars: null,
        },
        {
          userId: 2,
          projectId: 2,
          share: 0.33,
          project: {
            id: 2,
            name: 'Governance Analytics',
          },
          stars: null,
        },
        {
          userId: 2,
          projectId: 3,
          share: 0.33,
          project: {
            id: 3,
            name: 'Governance Leadership',
          },
          stars: null,
        },
      ],
    },
  })
  @UseGuards(AuthGuard)
  @Get('/ranking')
  async getRanking(
    @Req() { userId }: AuthedReq,
    @Query('cid') collectionId?: number,
  ) {
    // const isLastLayerCollection = await this.flowService.isLastLayerCollection(
    //   collectionId || null,
    // );

    // if (collectionId && isLastLayerCollection) {
    //   const item = await this.flowService.isCollectionFinished(
    //     userId,
    //     collectionId,
    //   );

    //   if (!item)
    //     throw new ForbiddenException(
    //       'There is no ranking for un-finished collections',
    //     );
    // }

    const [ranking, share, collection, progress, budgetRes] = await Promise.all(
      [
        this.flowService.getRanking(userId, collectionId || null),
        collectionId
          ? this.prismaService.share.findUnique({
              where: { userId_projectId: { userId, projectId: collectionId } },
            })
          : 1,
        this.prismaService.project.findFirst({
          where: { id: collectionId || -1 },
        }),
        this.flowService.getCollectionProgressStatus(
          userId,
          collectionId || -1,
        ),
        this.prismaService.user.findUnique({
          where: { id: userId },
          select: { budget: true },
        }),
      ],
    );

    const result = {
      ranking,
      progress,
      name: collection?.name || 'root',
      share,
      id: collection?.id || -1,
    };

    if (collectionId) return result;
    else return { ...result, budget: budgetRes?.budget };
  }

  // @UseGuards(AuthGuard)
  // @Post('/reset')
  // async resetVotes(@Req() { userId }: AuthedReq, @Body('cid') cid: number) {
  //   await this.prismaService.vote.deleteMany({
  //     where: {
  //       userId: userId,
  //       OR: [
  //         {
  //           project1: {
  //             parentId: cid,
  //           },
  //         },
  //         {
  //           project2: {
  //             parentId: cid,
  //           },
  //         },
  //       ],
  //     },
  //   });
  //   await this.prismaService.projectStar.deleteMany({
  //     where: {
  //       userId: userId,
  //       project: {
  //         parentId: cid,
  //       },
  //     },
  //   });
  // }

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary:
      'Use it at your own risk for testing. It will remove all the data associated with your account',
  })
  @ApiResponse({ status: 200, description: 'All your voting data is removed' })
  @Get('/dangerouslyRemoveData')
  async removeMydata(@Req() { userId }: AuthedReq) {
    // for (let i = 2; i < 9; i++) {
    // const user = await this.prismaService.user.findFirst({
    //   select: { id: true },
    //   where: { address: '0x9cb5129b4c710dB85F1dcd4071CB5f777e5B7612' },
    // });

    // // console.log(user?.id);

    // if (user && !userId) {
    //   userId = user?.id;
    //   console.log(user.id);
    // } else if (!user && !userId) return;

    // userId = 448;

    await this.prismaService.vote.deleteMany({
      where: { userId: userId },
    });
    await this.prismaService.projectStar.deleteMany({
      where: { userId: userId },
    });
    await this.prismaService.projectCoI.deleteMany({
      where: { userId: userId },
    });
  }
}
