import { optimismSepolia } from 'thirdweb/chains';
import {
  checkAttestationValidity,
  getAllAttestations,
} from './eas/attest-utils';
import { EASNetworks, SCHEMA_UID } from './eas/eas';
import {
  AttestationMetadata,
  addWeightToList,
  getRankingDistribution,
  getVoteWeight,
  initializeWeightList,
} from './utils';
import axios from 'axios';

const readAllAttestations = async () => {
  const chain = optimismSepolia;
  const attestations = await getAllAttestations(
    SCHEMA_UID,
    EASNetworks[chain.id].gqlUrl,
  );

  return attestations;
};

const main = async () => {
  const attestations = await readAllAttestations();

  // TODO: You can use object cloning and only do it once
  let [
    holderWeightList,
    // badgeHolderWeightList,
    // recipientWeightList,
    // delegateWeightList,
  ] = await Promise.all([
    initializeWeightList(),
    // initializeWeightList(),
    // initializeWeightList(),
    // initializeWeightList(),
  ]);

  console.log('reaching here?', attestations);
  for (const attestation of attestations) {
    if (!checkAttestationValidity(attestation)) continue;

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

    console.log('metadata for attestation', metadata, attestation);

    for (let i = 0; i < metadata.listContent.length; i++) {
      const project = metadata.listContent[i];
      const coefficient = getVoteWeight(1, 'holder');
      const rankWeight = getRankingDistribution(
        i + 1,
        metadata.listContent.length,
      );

      // console.log(
      //   'Giving it to wtl with weight',
      //   coefficient * rankWeight,
      //   'for project:',
      //   project.RPGF3_Application_UID,
      // );

      holderWeightList = addWeightToList(
        attestation.listName,
        project.RPGF3_Application_UID,
        coefficient * rankWeight,
        holderWeightList,
      );
    }
  }

  // for (const category of holderWeightList) {
  //   console.log(
  //     '************* Category:',
  //     category.categoryName,
  //     '*************',
  //   );
  //   for (const project of category.children) {
  //     console.log('************* Project:', project.weight, '*************');
  //   }
  // }
};

void main();
