import { Prisma, PrismaClient, ProjectType } from '@prisma/client';
import * as XLSX from 'xlsx';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

interface Row {
  Category: string;
  ['Project Name']: string;
  Image: string;
}

const getSpace = (): Prisma.SpaceUncheckedCreateInput => ({
  title: 'Optimism (OP)',
  description:
    'OP is a Layer 2 Optimistic Rollup network designed to utilize the strong security guarantees of Ethereum while reducing its cost and latency.',
});

const getPoll = (): Prisma.PollUncheckedCreateInput => ({
  title: 'RetroPGF 3',
  ends_at: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // in 15 days
  space_id: 1,
});

const getCollections = () => [
  { name: 'Infrastructure', poll_id: 1, parent_collection_id: null },
  { name: 'Governance', poll_id: 1, parent_collection_id: null },
  { name: 'DeFi', poll_id: 1, parent_collection_id: null },
  {
    name: 'NFT Platforms',
    poll_id: 1,
    parent_collection_id: null,
  },
  {
    name: 'Oracles',
    poll_id: 1,
    parent_collection_id: null,
  },
  {
    name: 'Privacy Solutions',
    poll_id: 1,
    parent_collection_id: null,
  },
  {
    name: 'Layer 2 Solutions',
    poll_id: 1,
    parent_collection_id: null,
  },
  {
    name: 'Cross-Chain Solutions',
    poll_id: 1,
    parent_collection_id: null,
  },
  {
    name: 'Web3 Browsers/Extensions and Wallets',
    poll_id: 1,
    parent_collection_id: null,
  },
  {
    name: 'Identity and Authentication Solutions',
    poll_id: 1,
    parent_collection_id: null,
  },
  {
    name: 'Web3 Gaming & Virtual Worlds',
    poll_id: 1,
    parent_collection_id: null,
  },
  {
    name: 'Web3 Communication & Social Platforms',
    poll_id: 1,
    parent_collection_id: null,
  },
];

const subProjects = [
  { name: 'Aragon Client', parentId: 33 },
  { name: 'Aragon Connnect', parentId: 33 },
  { name: 'Aragon Voice', parentId: 33 },
  { name: 'Aragon Agreements', parentId: 33 },
  { name: 'Aragon Court', parentId: 33 },
  { name: 'Aragon Fundraising', parentId: 33 },
  { name: 'Aragon SDK', parentId: 33 },
  { name: 'ANT', parentId: 33 },
  { name: 'Lens', parentId: 67 },
  { name: 'Merch', parentId: 67 },
  { name: 'Aave Flash Loans', parentId: 67 },
  { name: 'Aave Safety Module', parentId: 67 },
  { name: 'Aave Governance', parentId: 67 },
  { name: 'Aave Token (AAVE)', parentId: 67 },
];

const descriptions = [
  'This is a decentralized oracle network that provides real-world data to smart contracts on the blockchain. It allows blockchains to interact with external data sources and systems in a secure, trustless way.',
  'Our project enables the creation and management of decentralized organizations on Ethereum. It provides tools for governance, fundraising, payroll, accounting, and collaboration while maintaining transparency through blockchain technology.',
  "We are a decentralized finance protocol that allows users to generate the DAI stablecoin by locking collateral into Maker's smart contract system. DAI aims to maintain price stability against the US dollar while being supported by decentralized collateral.",
  'This is a web browser that blocks ads and trackers by default while allowing users to earn rewards for viewing opt-in ads. It aims to improve online privacy while creating a new web ecosystem tied to its Basic Attention Token.',
  'We offer blockchain-based identity verification for KYC and authentication. It allows users to control their personal information while providing verified credentials to service providers. The goal is a secure, private identity system using blockchain and biometrics.',
  'This project is a sharded multichain network that allows external blockchains to operate seamlessly together. Its main chain coordinates security and consensus among the parachains that connect to it.',
  'We provide on-chain governance tools for DAOs on the Harmony blockchain. It enables coordination, voting, and funding management across a decentralized organization.',
  'Our project is a decentralized exchange protocol on Ethereum that uses liquidity pools and an algorithmic market maker to enable token swaps without an order book. Users provide liquidity and earn fees from trades.',
  'This is a decentralized storage network powered by a blockchain and native cryptocurrency. Participants earn tokens for providing storage capacity and retrieving files on the network. It aims to be a distributed alternative to centralized cloud storage.',
  'We allow users to establish a unique identity on the blockchain while keeping personal information private. It uses cryptographic attestations for identity verification and credit scoring without exposing sensitive data publicly.',
];

const addSubProjects = async () => {
  for (const subProject of subProjects) {
    await prisma.project.create({
      data: {
        name: subProject.name,
        parentId: subProject.parentId,
        type: ProjectType.project,
        description:
          descriptions[Math.floor(Math.random() * descriptions.length)],
        url: 'Some url',
        poll_id: 1,
      },
    });
  }
};

async function addDescriptions() {
  const res = await prisma.project.findMany({
    select: { id: true },
    // where: { id: { gt: 0 } },
  });

  const ids = res.map((item) => item.id);

  for (const el of ids) {
    await prisma.project.update({
      where: { id: el },
      data: {
        description:
          descriptions[Math.floor(Math.random() * descriptions.length)],
      },
    });
  }
  // ids.forEach(async (el) => {
  // });
}

async function insertDataFromExcel() {
  const workbook = XLSX.readFile('./fdp-min.xlsx');
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData: Row[] = XLSX.utils.sheet_to_json(worksheet, { raw: false });

  for (let i = 40; i < jsonData.length; i++) {
    const row = jsonData[i];
    // console.log(row);
    // if (i > 30) return;
    const collection = await prisma.project.findFirst({
      where: {
        name: row.Category.split('')
          .filter((c) => c !== ':')
          .join(''),
      },
    });

    if (!collection) {
      throw new Error(`Collection with id ${row.Category} not found`);
    }

    await prisma.project.create({
      data: {
        name: row['Project Name'],
        image: row.Image,
        description: 'Description',
        url: 'Some url',
        parentId: collection.id,
        poll_id: 1,
        type: ProjectType.project,
      },
    });
  }
}

const main = async () => {
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  });

  await prisma.$connect();

  // const space = getSpace();
  // await prisma.space.create({
  //   data: space,
  // });

  // // add poll
  // const poll = getPoll();
  // await prisma.poll.create({
  //   data: poll,
  // });

  // // add collections
  // const collections = getCollections();
  // for (const collection of collections) {
  //   await prisma.project.create({
  //     data: {
  //       name: collection.name,
  //       // image: row.Image,
  //       description: 'Description',
  //       url: 'Some url',
  //       parentId: collection.parent_collection_id,
  //       poll_id: collection.poll_id,
  //       type: ProjectType.collection,
  //     },
  //   });
  // }
  // collections.forEach(async (collection) => {
  // });
  // await prisma.collection.createMany({
  //   data: collections,
  // });

  // add projects
  // await insertDataFromExcel();

  // await addDescriptions();

  await addSubProjects();

  await prisma.$disconnect();
};

void main();
