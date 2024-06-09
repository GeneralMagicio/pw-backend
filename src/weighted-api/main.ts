import { optimismSepolia } from 'thirdweb/chains';
import {
  checkAttestationValidity,
  getAllAttestations,
} from './eas/attest-utils';
import { EASNetworks, SCHEMA_UID } from './eas/eas';
import {
  AttestationMetadata,
  List,
  addWeightToList,
  cloneObjects,
  getRankingDistribution,
  getVoteWeight,
  initializeWeightList,
  sortWeightedList,
} from './utils';
import axios from 'axios';
import { BadgeData } from 'src/utils/badges/readBadges';

const readAllAttestations = async () => {
  const chain = optimismSepolia;
  const attestations = await getAllAttestations(
    SCHEMA_UID,
    EASNetworks[chain.id].gqlUrl,
  );

  return attestations;
};

export const calculateWeightedLists = async (
  getBadgesFromDb: (
    disposableAddress: string,
  ) => Promise<BadgeData | undefined>,
) => {
  const attestations = await readAllAttestations();

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

    for (let i = 0; i < metadata.listContent.length; i++) {
      const project = metadata.listContent[i];
      const rankWeight = getRankingDistribution(
        i + 1,
        metadata.listContent.length,
      );

      for (const list of lists) {
        const coefficient = getVoteWeight(badges, list.type);

        // console.log(
        //   'Giving it to wtl with weight',
        //   coefficient * rankWeight,
        //   'for project:',
        //   project.RPGF3_Application_UID,
        // );

        list.weightList = addWeightToList(
          attestation.listName,
          project.RPGF3_Application_UID,
          coefficient * rankWeight,
          list.weightList,
        );
      }
    }
  }

  // printLists(lists);

  return lists.map((list) => sortWeightedList(list));
};

// void main();
