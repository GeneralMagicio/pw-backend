import { createThirdwebClient } from 'thirdweb';
import { optimismSepolia } from 'thirdweb/chains';

const secretKey = `sZwr_L_mxe40oDxFWPB2qzVozB8Jn_1ree4aOqEDzVQ_-cwxoqkuFyISSEk5eXyvbji0EwoKdLpBCE7A-eGdRw`;
export const chain = optimismSepolia;

export const thirdwebClient = createThirdwebClient({
  secretKey,
});
