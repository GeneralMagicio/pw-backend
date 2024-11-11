import { schedule } from 'node-cron';
import {
  sendDailyDelegationCasts,
  sendDailyThankYouCast,
} from './neynar/utils';

const sendCastsCronJobTime = '21 1 22 * * *'; // at 22:01 Tehran time every day

export const initializeCronJobs = () => {
  sendCastsCronJob();
};

const sendCastsCronJob = () => {
  schedule(
    sendCastsCronJobTime,
    async () => {
      try {
        await sendDailyDelegationCasts();
        await sendDailyThankYouCast();
      } catch (e) {
        console.error('sendCastsCronJob error', e);
      }
    },
    {
      timezone: 'Asia/Tehran',
    },
  );
};
