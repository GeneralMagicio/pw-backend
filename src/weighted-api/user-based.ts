import {
  checkAttestationValidity,
  getAllAttestations,
} from './eas/attest-utils';
import { EASNetworks, SCHEMA_UID } from './eas/eas';
import {
  AttestationMetadata,
  CategoriesListName,
  List,
  addWeightToCategory,
  addWeightToProject,
  cloneObjects,
  getVoteWeight,
  initializeCategoryTotalNumbers,
  initializeWeightList,
  sortWeightedList,
} from './utils';
// import { chain } from 'src/thirdweb';
import { getRankingDistribution } from './algo';
import axios from 'axios';
import { BadgeData } from 'src/utils/badges/readBadges';

const chain = { id: 10 };
const readAllAttestations = async (address: string) => {
  if (!SCHEMA_UID) throw Error('Please enter an schema UID');
  const attestations = await getAllAttestations(
    SCHEMA_UID,
    EASNetworks[chain.id].gqlUrl,
    { attester: { equals: address } },
  );

  return attestations;
};

export const getRankingForUser = async (
  getBadgesFromDb: (
    disposableAddress: string,
  ) => Promise<BadgeData | undefined>,
  address: string,
) => {
  const attestations = await readAllAttestations(address);

  console.log('all attestations:', attestations);
  const totalNumbers = await initializeCategoryTotalNumbers();

  // TODO: You can use object cloning and only do it once
  const holderWeightList: List = {
    weightList: await initializeWeightList(),
    type: 'holder',
  };
  // TODO: You can use object cloning and only do it once
  const [
    badgeHolderWeightList,
    recipientWeightList,
    delegateWeightList,
  ]: List[] = [
    {
      weightList: cloneObjects(holderWeightList.weightList),
      type: 'badgeholder',
    },
    {
      weightList: cloneObjects(holderWeightList.weightList),
      type: 'recipient',
    },
    {
      weightList: cloneObjects(holderWeightList.weightList),
      type: 'delegate',
    },
  ];

  const lists: List[] = [
    holderWeightList,
    badgeHolderWeightList,
    recipientWeightList,
    delegateWeightList,
  ];

  // console.log('reaching here?', attestations);
  for (const attestation of attestations) {
    if (!checkAttestationValidity(attestation)) continue;

    // console.log('Attester is', attestation.attester);
    const badges = await getBadgesFromDb(attestation.attester);
    if (!badges) continue;
    // console.log('Attester has this badge', badges);

    // console.log('attestation', attestation);
    let metadata: AttestationMetadata;
    try {
      const { data } = await axios.get<AttestationMetadata>(
        attestation.listMetadataPtr,
      );
      metadata = data;
    } catch (e) {
      continue;
    }

    // console.log('metadata for attestation', metadata, attestation);

    const rankingDistribution = getRankingDistribution(
      metadata.listContent.length,
      totalNumbers[attestation.listName],
    );

    for (let i = 0; i < metadata.listContent.length; i++) {
      const project = metadata.listContent[i];
      const rankWeight = rankingDistribution[i];

      for (const list of lists) {
        const coefficient = getVoteWeight(badges, list.type);
        // console.log('Coeff is', coefficient);
        // const coefficient = 1;

        if (attestation.listName === CategoriesListName) {
          console.log('Adding weight to:', {
            uid: project.RPGF3_Application_UID,
            weight: coefficient * rankWeight,
          });
          list.weightList = addWeightToCategory(
            project.RPGF3_Application_UID,
            coefficient * rankWeight,
            list.weightList,
          );
        } else {
          list.weightList = addWeightToProject(
            attestation.listName,
            project.RPGF3_Application_UID,
            coefficient * rankWeight,
            list.weightList,
          );
        }

        // console.log(
        //   'Giving it to wtl with weight',
        //   coefficient * rankWeight,
        //   'for project:',
        //   project.RPGF3_Application_UID,
        // );
      }
    }
  }

  // printLists(lists);

  // console.log(lists);

  return lists
    .map((list) => sortWeightedList(list))
    .map((list) => aggregateCategories(list))
    .filter((list) => list.list[0].weight !== 0);
};

const aggregateCategories = (list: List) => {
  const aggregated = [];

  for (const category of list.weightList) {
    for (const project of category.projects) {
      aggregated.push({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        name: project.metadata.name,
        category: category.categoryName,
        weight: project.weight * category.weight,
      });
    }
  }

  return {
    type: list.type,
    list: aggregated.sort((a, b) => b.weight - a.weight),
  };
};

// void main();
