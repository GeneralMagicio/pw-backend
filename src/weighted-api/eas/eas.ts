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

export const SCHEMA_UID =
  '0x3e3e2172aebb902cf7aa6e1820809c5b469af139e7a4265442b1c22b97c6b2a5';
