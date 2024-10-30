import { schedule } from 'node-cron';
import { sendDailyCasts } from './neynar/utils';

const sendCastsCronJobTime = '21 1 17 * * *'; // at 17:01 every day

export const initializeCronJobs = () => {
  sendCastsCronJob();
};

const sendCastsCronJob = () => {
  schedule(sendCastsCronJobTime, async () => {
    try {
      await sendDailyCasts();
    } catch (e) {
      console.error('sendCastsCronJob error', e);
    }
  });
};
