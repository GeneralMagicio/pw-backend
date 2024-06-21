import { optimism, optimismSepolia } from 'thirdweb/chains';
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
  process.env.EAS_SCHEMA_UID ||
  '0x8c12749f56c911dbc13a6a6685b6964c3ea03023f246137e9c53ba97974e4b75';

const getActiveChain = (chain?: string) => {
  switch (chain) {
    case 'optimism':
      return optimism;
    case 'optimism-sepolia':
      return optimismSepolia;
    default:
      return optimismSepolia;
  }
};

export const activeChain = getActiveChain(process.env.ACTIVE_CHAIN);
