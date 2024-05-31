import axios from 'axios';

type Attestation = {
  listName: string;
  listMetadataPtrType: number; // Assuming uint256 is represented as number
  listMetadataPtr: string;
  // projects: string[];
  // proof: string[];
};

interface DecodedDataItemValue {
  name: string;
  type: string;
  value: string;
}

interface DecodedDataItem {
  name: string;
  type: string;
  signature: string;
  value: DecodedDataItemValue;
}

interface GroupByAttestationItem {
  id: string;
  decodedDataJson: string; // This will be parsed into DecodedDataArray
  // Add other properties here if they exist
}

interface GraphQlResponse {
  data: {
    groupByAttestation: GroupByAttestationItem[];
  };
}

// TODO: better type safety
export const getAllAttestations = async (
  schemaId: string,
  gqlUrl: string,
): Promise<Attestation[]> => {
  const query = `
  query AllAttestationsQuery($where: AttestationWhereInput) {
    groupByAttestation(
      where: $where,
      by: [id, decodedDataJson]
    ) {
      id
      decodedDataJson
    }
  }
`;

  const { data: gqlData } = await axios.post<GraphQlResponse>(gqlUrl, {
    query: query,
    operationName: 'AllAttestationsQuery',
    variables: {
      where: {
        revocable: { equals: true },
        revoked: { equals: false },
        schemaId: {
          equals: schemaId,
        },
        // attester: { equals: address },
      },
      by: null,
    },
  });

  const temp = gqlData.data.groupByAttestation.map(
    ({ decodedDataJson, ...item }) => ({
      ...item,
      decodedDataJson: JSON.parse(decodedDataJson) as DecodedDataItem[],
    }),
  );

  console.log('temp is', temp);

  const attestations: Attestation[] = [];

  temp.forEach(({ decodedDataJson }) => {
    const attestation: any = {};
    for (const field of decodedDataJson) {
      console.log('field', field);
      attestation[field.name] = field.value.value;
    }
    attestations.push(attestation);
  });

  console.log('attestations:', attestations);

  return attestations;
};

// TODO: Check if we do want to let this attestation be part of the ranking
export const checkAttestationValidity = (attestation: Attestation) => {
  if (
    attestation.listName === 'root' ||
    attestation.listName === 'Pairwise Categories'
  )
    return false;

  return true;
};
