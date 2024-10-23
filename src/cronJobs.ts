import { schedule } from 'node-cron';
import { sendDelegationCast } from './neynar/functions';

const fetchDelegationsCronJobTime =
  process.env.FETCH_DELEGATIONS_CRONJOB_EXPRESSION || '11 11 */4 * * *'; // every four hours
const sendCastsCronJobTime =
  process.env.SEND_CASTS_CRONJOB_EXPRESSION || '21 21 */4 * * *'; // every four hours

export const initializeCronJobs = async () => {
  fetchDelegationsCronJob();
  sendCastsCronJob();
};

const fetchDelegationsCronJob = () => {
  schedule(fetchDelegationsCronJobTime, async () => {
    console.log('fetchDelegationsCronJobTime');
  });
};

const sendCastsCronJob = () => {
  schedule(sendCastsCronJobTime, async () => {
    await sendDelegationCast();
  });
};
