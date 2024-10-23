import neynarClient from './neynarClient';

const farcasterSignerUUID = process.env.FARCASTER_SIGNER_UUID!;

export const sendDelegationCast = async (props?: {
  username: string;
  delegatorsCount: number;
}) => {
  const { username = '@ramramez', delegatorsCount = 5 } = props || {};
  await neynarClient.publishCast(
    farcasterSignerUUID,
    `Hey @${username} 👋

${delegatorsCount} people have delegated to you in the last 12 hours 🥳

They want you to vote on their behalf in the @Optimism Retro Funding 6 Round. Go to  https://app.pairwise.vote/ and rank the projects!`,
  );
};
