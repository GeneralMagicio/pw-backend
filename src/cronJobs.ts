import { schedule } from 'node-cron';
import { sendCastsFor12Hours } from './neynar/utils';

const sendCastsCronJobTime =
  process.env.SEND_CASTS_CRONJOB_EXPRESSION || '21 21 0,12 * * *'; // at 00:21 and 12:21 every day

export const initializeCronJobs = () => {
  sendCastsCronJob();
};

const sendCastsCronJob = () => {
  schedule(sendCastsCronJobTime, async () => {
    try {
      await sendCastsFor12Hours();
    } catch (e) {
      console.error('sendCastsCronJob error', e);
    }
  });
};
