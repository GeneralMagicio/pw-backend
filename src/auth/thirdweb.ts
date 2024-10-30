import { createThirdwebClient } from 'thirdweb';
import { optimism, optimismSepolia } from 'thirdweb/chains';

const secretKey = process.env.SECRET_KEY;

if (!secretKey) throw new Error('No Third Web Secret Key');

export const chain =
  process.env.ACTIVE_CHAIN === 'optimism' ? optimism : optimismSepolia;

export const thirdwebClient = createThirdwebClient({
  secretKey,
});
