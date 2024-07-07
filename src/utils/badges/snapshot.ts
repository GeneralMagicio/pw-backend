import { productionSnapshots } from './production-snapshot';
import { testAddresses } from './test-snapshots';

export const snapshots =
  process.env.NODE_ENV === 'production'
    ? [...productionSnapshots]
    : [...productionSnapshots, ...testAddresses];
