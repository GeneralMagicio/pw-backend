import { parse as json2csv } from 'json2csv';
import * as fs from 'fs';
import axios from 'axios';

interface Profile {
  bannerImageUrl: string;
  profileImageUrl: string;
  id: string;
}

interface ContributionLink {
  description: string;
  type: string;
  url: string;
}

interface FundingSource {
  type: string;
  currency: string;
  amount: string;
  description: string;
}

interface JsonObject {
  id: string;
  displayName: string;
  contributionDescription: string;
  impactDescription: string;
  bio: string;
  websiteUrl: string;
  applicantType: string;
  impactCategory: string[];
  prelimResult: string;
  reportReason: string;
  includedInBallots: number;
  lists: string[];
  contributionLinks: ContributionLink[];
  fundingSources: FundingSource[];
  impactMetrics: string[];
  github: string[];
  packages: string[];
  profile: Profile;
}

// const jsonArray: JsonObject[] = [
//   {
//     id: '0xeb7d879d09a9077dc3cf8cdbee26e17bcc00f19750a7c6f137ab9a3ef703139a',
//     displayName: '👑 King of the Degens 🎩 - Farcaster Frame Game',
//     contributionDescription:
//       "I'm Corbin Page (https://warpcast.com/corbin.eth) and my team and I look for fun new ways to onboard folks into web3 and the Optimism ecosystem. This quarter we built a novel crypto game using Farcaster Frames and streaming $DEGEN tokens. We had over 870 players across two Seasons and more than 1.5M DEGEN distributed to them. Notable our churn was really low with over half the players playing over 5 times despite the .001 ETH entry price on Base. \n\nKing of the Degens is an Onchain RPG with real crypto stakes built on Farcaster. Up in the castle, the King and 9 court members are being streamed $DEGEN points in real-time. A player can **⚔️ STORM THE CASTLE ⚔️** to join the court by paying 0.001 ETH, which is swapped for $DEGEN and put in the Treasury for all to share.",
//     impactDescription: '',
//     bio: "I'm Corbin Page (https://warpcast.com/corbin.eth) and my team and I look for fun new ways to onboard folks into web3 and the Optimism ecosystem. This quarter we built a novel crypto game using Farcaster Frames and streaming $DEGEN tokens. We had over 870 players across two Seasons and more than 1.5M DEGEN distributed to them. Notable our churn was really low with over half the players playing over 5 times despite the .001 ETH entry price on Base. \n\nKing of the Degens is an Onchain RPG with real crypto stakes built on Farcaster. Up in the castle, the King and 9 court members are being streamed $DEGEN points in real-time. A player can **⚔️ STORM THE CASTLE ⚔️** to join the court by paying 0.001 ETH, which is swapped for $DEGEN and put in the Treasury for all to share.",
//     websiteUrl: 'degen.game/kotd',
//     applicantType: 'PROJECT',
//     impactCategory: ['Social'],
//     prelimResult: 'Keep',
//     reportReason: '',
//     includedInBallots: 0,
//     lists: [],
//     contributionLinks: [
//       {
//         description: '0x12BE8ef11d78a09bE19Fe8680cdA0538Aef87E9c',
//         type: '8453',
//         url: 'https://basescan.org/address/0x12BE8ef11d78a09bE19Fe8680cdA0538Aef87E9c',
//       },
//       {
//         description: '0x40Ec213312B4BFE20BAA68f7a3899115350A6607',
//         type: '8453',
//         url: 'https://basescan.org/address/0x40Ec213312B4BFE20BAA68f7a3899115350A6607',
//       },
//     ],
//     fundingSources: [
//       {
//         type: 'Revenue',
//         currency: 'USD',
//         amount: 'Under 250k',
//         description:
//           "There's a small fee on each game transaction. This revenue will likely go into a protocol DAO.",
//       },
//     ],
//     impactMetrics: [],
//     github: ['https://github.com/corbinpage/kotd-contracts-public'],
//     packages: [],
//     profile: {
//       bannerImageUrl:
//         'https://storage.googleapis.com/op-atlas/6c77ce81-7908-437b-98e3-06b971a2ed5b.png',
//       profileImageUrl:
//         'https://storage.googleapis.com/op-atlas/d275ec51-6e3a-416b-aee5-1cdc16c4c6c2.png',
//       id: '0xeb7d879d09a9077dc3cf8cdbee26e17bcc00f19750a7c6f137ab9a3ef703139a',
//     },
//   },
// ];

// Filter out object or array fields
const filterJsonArray = (jsonArray: FilteredJsonObject[]) =>
  jsonArray.map((item) => {
    const filteredItem: { [key: string]: any } = {};
    let key: keyof FilteredJsonObject;
    for (key in item) {
      if (typeof item[key] === 'string' || typeof item[key] === 'number') {
        filteredItem[key] = item[key];
      }
    }
    return filteredItem;
  });

interface FilteredJsonObject extends Omit<JsonObject, 'impactCategory'> {
  initialCategory: string;
  recategorization: string;
  details: string;
}

export const main = async () => {
  const baseUrl = `https://round4-api-eas.retrolist.app/projects`;
  const { data: jsonObjects } = await axios.get<JsonObject[]>(baseUrl);
  let count = 0;
  console.log('Fetching all projects done');

  const totalProjects: FilteredJsonObject[] = [];
  for (const project of jsonObjects) {
    const { data: projectDetails } = await axios.get<JsonObject>(
      `${baseUrl}/${project.id}`,
    );

    totalProjects.push({
      ...projectDetails,
      initialCategory: project.impactCategory[0],
      recategorization: project.impactCategory[0],
      details: `${baseUrl}/${project.id}`,
    });

    console.log('Fetching', count++, 'project details done');
    // if (count > 20) break;
  }

  const filteredArray = filterJsonArray(totalProjects);
  // Convert JSON to CSV
  const csv = json2csv(filteredArray);

  // Write CSV to a file
  fs.writeFileSync('output.csv', csv);
  console.log('CSV file has been written successfully.');
};
