import { createThirdwebClient } from 'thirdweb';
import { optimism } from 'thirdweb/chains';

const secretKey = `uC3ZLlukCCFS0NdSQKjmHjCaZ5wEXhK__ujBT26QZDRjA6KePBU-L-bjnUnHyKKDNNXpqUIi_k_2w7ZfhXXyBg`;
export const chain = optimism;

export const thirdwebClient = createThirdwebClient({
  secretKey,
});
