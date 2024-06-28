import { optimismSepolia } from 'thirdweb/chains';
import { type Address } from 'viem';

export type EASConfig = {
  EASDeployment: Address;
  SchemaRegistry: Address;
};

interface Config extends EASConfig {
  explorer: string;
  gqlUrl: string;
}

export const EASNetworks: Record<number, Config> = {
  // Optimism
  10: {
    EASDeployment: '0x4200000000000000000000000000000000000021',
    SchemaRegistry: '0x4200000000000000000000000000000000000020',
    explorer: 'https://optimism.easscan.org',
    gqlUrl: 'https://optimism.easscan.org/graphql',
  },
  // Optimism Sepolia
  [optimismSepolia.id]: {
    EASDeployment: '0x4200000000000000000000000000000000000021',
    SchemaRegistry: '0x4200000000000000000000000000000000000020',
    explorer: `https://optimism-sepolia.blockscout.com`,
    gqlUrl: 'https://optimism-sepolia.easscan.org/graphql',
  },
};

export const SCHEMA_UID = process.env.SCHEMA_UID;
