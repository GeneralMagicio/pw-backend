export const projects = [
  {
    id: '0x04d4b89e72e276bebc4bb4359145bc89e12f64a1edb1d85e97a5aa9c65660da5',
    applicationId:
      '0x04d4b89e72e276bebc4bb4359145bc89e12f64a1edb1d85e97a5aa9c65660da5',
    projectId:
      '0x53499d3243b2c26b1f09d49f911a9d9300d29b2196576d417cf852ac9e8dfe4c',
    category: 'Utility',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: {
      name: 'zenbit.eth',
      description:
        ' Zenbit.eth is an organization focused on Research, Development, and Innovation (R&D&I) for public goods in cities',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/ec00baf5-be52-41e7-9618-c4091db66257.png',
      organizationCoverImageUrl: '',
      socialLinks: {
        website: ['https://zenbit.mx', 'https://github.com/zenbitETH'],
        farcaster: ['https://warpcast.com/zenbit'],
        twitter: 'https://x.com/zenbitMX',
        mirror: 'https://mirror.xyz/zenbit.eth',
      },
      team: ['212738'],
    },
    name: 'OPcity stack',
    description:
      "The OP City Stack is a comprehensive research initiative focused on exploring the operation of the OP Stack and testing the capabilities of the Canon Fault Proofs Virtual Machine (Canon Fault Proofs VM). Through practical deployments, benchmarking, and innovative proposals, this project seeks to push the boundaries of Optimistic Rollup performance and functionality, contributing to the broader goal of Ethereum scalability.\n\nThe project covers several key areas. First, the Node & Rollup Setup involved detailed documentation of the deployment process for both an L1 node (Holesky testnet) and an L2 rollup using the OP Stack. To address RPC calls limitations, the project transitioned from relying on a remote virtual machine and third-party RPC services to a local environment. This shift improved performance reliability and security.\n\nIn the OP Stack Version Benchmarking, multiple test deployments were conducted to compare the OP Stack versions V4.0.0 (Canyon) and V7.0.0 (Fjord). Significant findings from these tests included a 75% reduction in total gas fees when upgrading from V4.0.0 to V7.0.0. Additionally, a comparison of calldata versus data blob methods revealed that using data blobs resulted in a 60% reduction in resource usage, demonstrating the efficiency gains of advanced data handling techniques.\n\nFor the Proposed Changes to Fault Proofs, the project explored integrating the OP Stack's Canon Fault Proofs VM with the opML's Multi-Phase Fault Proof protocol. The proposed modifications included developing a state transition function model to handle merkelized decision trees or neural network outputs. The project also focused on analyzing memory management strategies for handlig large datasets required by machine learning models, and enhancing syscalls and I/O operations to optimize the ML-driven data processing. To ensure system integrity, formal verification, and error analysis were implemented. Additionally, simulations were developed to evaluate the system's performance under real-world operational conditions.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/f9feb4b3-ff72-43c5-b3b5-008aa6ec8f45.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/ed478c5a-8181-465d-a02f-b2b5d72bf44f.png',
    socialLinks: {
      website: ['https://zenbit.mx', 'https://badges.zenbit.mx/'],
      farcaster: ['https://warpcast.com/zenbit'],
      twitter: 'https://x.com/zenbitMX/status/1731886578673254564',
      mirror: 'https://mirror.xyz/zenbit.eth/',
    },
    team: null,
    github: [
      {
        url: 'https://github.com/zenbitETH/OPcity',
        name: 'OP City',
        description:
          'This repository documents the research and development efforts for the OP City project.',
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://github.com/zenbitETH/OPcity/blob/main/README.md',
        name: 'Proposed modifications to the Canon Fault Proofs VM',
        description:
          "Research the compatibility of the OP stack's Canon Fault Proof VM with the opML's Multi-Phase Fault Proof protocol. The goal is to implement a custom Fault Dispute Game that manages the challenges related to data availability states from the L2 rollup and the computation results from the Deep Neural Networks (DNN) of the multi-phase opML. ",
      },
      {
        url: 'https://github.com/zenbitETH/OPcity/blob/main/Op-stack-research/Test-deployments/node01_V4.0.0.md',
        name: 'Test Deployment 1 (OP stack V4.0.0 / December 2023)',
        description:
          "An explorative evaluation was conducted from December 4th to 11th, assessing the OP Stack's operational cost performance in a testnet environment, focusing on gas spending by the batcher and proposer components.",
      },
      {
        url: 'https://github.com/zenbitETH/OPcity/blob/main/Op-stack-research/Test-deployments/node02_V7.0.0.md',
        name: 'Test Deployment 2 (OP stack V7.0.0 - Call Data) / June 2024',
        description:
          'In June 2024, a 20-day test deployment was conducted using OP Stack V7.0.0 with a Calldata configuration. This test followed multiple network updates and optimizations, significantly impacting rollup operation costs.',
      },
      {
        url: 'https://github.com/zenbitETH/OPcity/blob/main/Op-stack-research/Test-deployments/node03_V7.0.0.md',
        name: 'Test Deployment 3 (OP stack V7.0.0 - Data Blobs) / June 2024',
        description:
          'Documentation of a third test deployment comparing the performance of OP Stack using Calldata versus Data Blobs for data posting. This test demonstrated the efficiency and cost-saving benefits of using Data Blobs.',
      },
      {
        url: 'https://github.com/zenbitETH/OPcity/blob/main/node-setup/Holesky/geth.md',
        name: 'Guide to setup a Geth on a Holesky node',
        description:
          'A step-by-step guide for configuring Geth as the Execution Layer on a Holesky node.',
      },
      {
        url: 'https://github.com/zenbitETH/OPcity/blob/main/node-setup/Holesky/prysm.md',
        name: 'Guide to setup a Prysm on a Holesky node',
        description:
          'This guide provides instructions for configuring Prysm as the Consensus Layer on a Holesky node.',
      },
      {
        url: 'https://github.com/zenbitETH/OPcity/blob/main/node-setup/Op-stack/op-setup.md',
        name: 'Guide to setup and deploy a Rollup from the OP stack',
        description:
          'A comprehensive guide detailing the steps to configure and deploy a rollup from the OP Stack repository on a Holesky node.',
      },
      {
        url: 'https://github.com/zenbitETH/OPcity/blob/main/node-setup/Op-stack/dashboard-setup.md',
        name: 'Guide to generate data visualization from Rollup activity',
        description:
          'This document outlines the setup of a dashboard for visualizing data from node and rollup performance.',
      },
      {
        url: 'https://github.com/zenbitETH/OPcity/blob/main/Canon-FPVM/dev.md',
        name: 'Guide to interact with Fault Proofs VM',
        description:
          'This document explains the practical concepts of the Canon Fault Proofs VM used in the OP Stack, including steps to interact with the dispute mechanism.',
      },
      {
        url: 'https://mirror.xyz/zenbit.eth/atHQ_Nz1--bQbY6Vx7NzYO-aOtXibcQi70aLl_WhTzY',
        name: 'OP City: Research compilation',
        description:
          'This article compiles research conducted at Zenbit, focusing on the theoretical and practical aspects of the OP Stack and Canon Fault Proofs VM. It includes insights into their implementation, performance benchmarks, and potential future enhancements.',
      },
      {
        url: 'https://github.com/zenbitETH/OPcity/milestones',
        name: 'OPcity Milestones',
        description:
          'List of milestones we aim to achieve during the research and development of the OPcity Stack. It contains the commits, pull requests, and contributions made at each stage and sets a guideline for future ',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: null,
          link: null,
          amount: '24850',
          date: '',
          details: null,
        },
        {
          grant: null,
          link: null,
          amount: '1535',
          date: '',
          details: null,
        },
        {
          grant: 'token-house-mission',
          link: 'https://app.charmverse.io/op-grants/page-1306815702055122',
          amount: '30000',
          date: '2024-05-08',
          details:
            "Research the compatibility of the OP stack's Canon Fault Proof VM with the opML's Multi-Phase Fault Proof protocol. Proposed during Season 5 and approved during Cycle 22.",
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
      ],
      statement: [
        {
          answer:
            "OP City researches the capabilities of the OP Stack by testing and enhancing the Canon Fault Proofs VM to handle disputes related to block states and machine learning inferences from opML. We focused on integrating the Canon Fault Proofs VM with opML's Multi-Phase Fault Proof protocol to optimize performance and efficiency. This effort contributed to the OP Stack's scalability and cost-effectiveness, significantly reducing gas fees. Additionally, by transitioning from a remote virtual machine and third-party RPC services to a local node setup, we addressed RPC call limitations, enhancing the reliability and security of OP Stack deployments.\n\nWhile expanding our knowledge about the OP stack, we made a version benchmark from December 2023 to June 2024, comparing the Operation cost between V4.0.0 and V7.0.0.0 and then comparing the call data and data blobs' performance to identify the optimal configuration test for deploying the OP stack in a local environment. ",
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            'Multiple developers and researchers worldwide have accessed our tooling and progress through the Zenbit Discord server, where our findings are shared with a broader community. Specifically, university students in Querétaro, México, contributed to the Zenbit project and have since used the OP City repository to facilitate technology transfer within their institutions. This has benefited our immediate team and enabled other researchers and developers to build upon our work, further advancing OP chain technology.\n\nSeed Gov Delegation reflected our opinions and security concerns about the Protocol Upgrade #7: Fault Proofs update by voting with abstention during its approval ballot. These concerns were later confirmed after the Granite upgrade announcement, which tackled multiple issues found after the audits made by third-party organizations.\n\nhttps://gov.optimism.io/t/final-protocol-upgrade-7-fault-proofs/8161/42\n\nhttps://gov.optimism.io/t/upgrade-proposal-10-granite-network-upgrade/8733',
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0x1547a722f7731b439b97428c31925100ef49ae443e32f5bba766268c296a3379',
    applicationId:
      '0x1547a722f7731b439b97428c31925100ef49ae443e32f5bba766268c296a3379',
    projectId:
      '0xa9860e1ba61461740831e00d03eb22660e47e8e9087b2ea2e4441f21210fb786',
    category: 'Social',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: {
      name: 'Be Part Of Art Collective',
      description:
        "The Be Part Of Art Collective has one goal. Build and maintain the first infinite art canvas. A neverending art canvas that connects people through art. Imagine it as a giant puzzle that hadn't been designed yet. It starts with one piece and keep growing by adding new art by different artists. On this canvas it's not only about the artist's art but also about how he can merge his/her art with the art that already exists on the canvas. ",
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/dbddfc21-a8c4-42b9-b7cc-f29707c04ef9.png',
      organizationCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/bfb32a2a-dd80-44e6-b9f5-219700b8ee29.png',
      socialLinks: {
        website: ['Bepartofart.com'],
        farcaster: [],
        twitter: null,
        mirror: null,
      },
      team: ['413209'],
    },
    name: 'Be Part Of Art',
    description:
      "In a time where the world is divided, I feel it is time to build projects that connect. In a time where everyone is focusing on themselves, I feel it is time to build projects that focus on collaboration. \n\nBe Part Of Art is a one of a kind art project. It is a blank infinite art canvas that invites graphic artists from around the world to contribute and collaborate with each other to create something that has never been done before. An artwork that is never finished, an artwork that is always growing into something bigger. An artwork that evolves as time goes by. \n\nI imagine it as a digital \"cave painting\"... A place where you can see art, the artists and life merge into something that will be forever available to mankind.\n\nDo you have what it takes to Be Part Of Art? \n\nIn this first stage of the project I'd like to do a bit more research about the technical requirements and technical feasibility of the project. Find the initial group of artists to create the first piece and spend time planning the next phases. \n\nI'd like to spend some time brainstorming with different artists to see how they feel about the project and if they would want to collaborate. Since this all takes time I'd like to request an initial capital to cover the costs so I can focus on this project and the research full-time. ",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/53ee4bea-4882-4f2c-8f71-2b6d747a28b2.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/8fd63b00-4bcd-447a-9e9b-7bfd805f3242.png',
    socialLinks: {
      website: ['Www.Bepartofart.com'],
      farcaster: [],
      twitter: null,
      mirror: null,
    },
    team: [
      {
        fid: 413209,
        object: 'user',
        pfp_url: 'https://i.imgur.com/uGlCyiv.jpg',
        profile: {
          bio: {
            text: 'Sharing my passion for technology, personal growth and creating financial freedom on a daily basis.',
          },
        },
        username: 'starchildtv',
        power_badge: false,
        display_name: 'StarChildTV',
        active_status: 'inactive',
        verifications: ['0x5d6f3d0c92d0564151357b0863e55e9ed4631b8d'],
        follower_count: 9,
        custody_address: '0x13fbf75c6b61fb44bf24316e9409ad01cfd3a52c',
        following_count: 76,
        verified_addresses: {
          eth_addresses: ['0x5d6f3d0c92d0564151357b0863e55e9ed4631b8d'],
          sol_addresses: [],
        },
      },
    ],
    github: [],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [],
      revenue: [],
    },
    pricingModel: 'freemium',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
      ],
      statement: [
        {
          answer:
            "There hasn't been any impact yet because I have only recently decided to start working on this project again. With the initial funding I will make sure do the research needed to decide if this project has any marit and what the best way will be moving forward.\n\n",
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            "1. Digital Artists \n2. Consumers that love art\n3. The OP Stack \n\nFor digital artists it's a new way to showcase their work and skills. It will not be easy to claim a spot on the canvas, it will require winning multiple voting rounds and convincing the community you are the right fit for that spot. But once you do, your work will be there forever. \n\nFor people that love art, it will be a new way to interact with it. Not only being able to decide how the canvas should move forward by voting, they'll also be able to buy their favorite pieces of the canvas to gift to their friends or family or keep for themselves.\n\nThe OP stack will have a new innovative way to display it's strength, this time not rooted in DeFi. I feel a lot of people are not yet comfortable with blockchain and/or DeFi and because of that they aren't using the OP stack yet. With this project the OP stack will be able to show how a blockchain can be used to keep track of ownership of the first infinite art canvas. \n\n\n\n\n\n\n\n",
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0x29689510e5add50d929566fcbb78a8f85fac28545928859f97ce6c5ca3c97da1',
    applicationId:
      '0x29689510e5add50d929566fcbb78a8f85fac28545928859f97ce6c5ca3c97da1',
    projectId:
      '0x8c76c13d8d0e63a7de499d47b9da5a4495d1151c0b2003c92379f41f14e404c0',
    category: 'Utility',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: {
      name: 'Kroma',
      description: '',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/8db1b63b-ea9f-435b-bcb0-34417a1a9c97.png',
      organizationCoverImageUrl: '',
      socialLinks: {
        website: ['https://kroma.network'],
        farcaster: [],
        twitter: 'https://x.com/kroma_network',
        mirror: '',
      },
      team: ['602876', '217355', '662916'],
    },
    name: 'Permissionless ZK Fault Proof System',
    description:
      "Kroma is the first OP Stack rollup to feature an active, permissionless ZK Fault Proof system. This system allowed anyone to become a validator, who submits checkpoint outputs to L1 and validates them, thereby enabling the decentralized settlement of Kroma on L1.\n\nAdditionally, it reduced the costs associated with resolving disputes between different checkpoint outputs. It identifies the disputed point at the block level using multiple segments instead of bisection, requiring far fewer transactions. Moreover, it doesn’t necessitate storing large amounts of preimage oracle data on-chain, as verification can be achieved through ZK proofs. Operationally, we enhanced the ZK prover by reducing proof generation time using Tachyon, a Kroma original, GPU accelerated ZK backend library written in C++.\n\nHowever, there were several limitations in the existing system:\n- Maintaining the zkEVM circuit was challenging.\n- It did not guarantee that the execution of transactions was based on the batch data posted by the sequencer.\n- Compatibility with the interface of Optimism's DisputeGame was not considered.\n\nTo overcome these limitations, the Kroma team is developing an advanced ZK Fault Proof system using a zkVM. By using zkVM instead of zkEVM, no additional maintenance efforts are required for the ZK circuit. The new proving scheme ensures that transaction execution is based on the batch data posted by the sequencer. Additionally, the contract for dispute challenges will implement the interface of Optimism’s DisputeGame, making it fully compatible with Optimism's system. We anticipate that this could become one of the various dispute game types in the multi-proof system.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/55912c35-0fb3-4e6a-aa15-b234e260e314.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/8b5cceaf-96c6-435a-9192-a233c8615ba8.png',
    socialLinks: {
      website: ['https://kroma.network/'],
      farcaster: ['https://warpcast.com/kroma-network'],
      twitter: 'https://x.com/kroma_network',
      mirror: null,
    },
    team: [
      {
        fid: 602876,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/93911237-0aae-41a8-fa65-21e99bfe5700/rectcrop3',
        profile: {
          bio: {
            text: 'Hans from Kroma',
          },
        },
        username: '0xhans',
        power_badge: false,
        display_name: 'Hans',
        active_status: 'inactive',
        verifications: [],
        follower_count: 7,
        custody_address: '0x2cb92bb3f7e974477dcb34d07d70ea56b4a9a2a1',
        following_count: 62,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
      {
        fid: 217355,
        object: 'user',
        pfp_url: 'https://i.imgur.com/MgnbgkC.jpg',
        profile: {
          bio: {
            text: 'Blockchain Software Engineer @kroma-network | Researcher | Interested in Layer 2 & Account Abstraction',
          },
        },
        username: 'sm-stack',
        power_badge: false,
        display_name: 'sm-stack',
        active_status: 'inactive',
        verifications: ['0x4bcfd2d2d6ff6f86d2e012e62cf90649f05f4713'],
        follower_count: 66,
        custody_address: '0x9204074ca42a8dec8100073cb301dec6dd7d0697',
        following_count: 148,
        verified_addresses: {
          eth_addresses: ['0x4bcfd2d2d6ff6f86d2e012e62cf90649f05f4713'],
          sol_addresses: [],
        },
      },
      {
        fid: 662916,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/aec7a067-7122-48fd-23dd-8cc18a5c0b00/rectcrop3',
        profile: {
          bio: {
            text: 'Optimistic Rollup utilizing zkEVM 🌐 | Built on the Superchain 🟢🔴\nhttps://kroma.network/',
          },
        },
        username: 'kroma-network',
        power_badge: false,
        display_name: 'Kroma(✳️_✳️)',
        active_status: 'inactive',
        verifications: [],
        follower_count: 877,
        custody_address: '0x940ed4f9c1bbdc209111efea58d1e88c2618d9ae',
        following_count: 2,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        url: 'https://github.com/kroma-network/kroma',
        name: 'kroma',
        description: 'Main repo of Kroma client',
      },
      {
        url: 'https://github.com/kroma-network/kona',
        name: 'kroma-kona',
        description:
          'Fork of kona for a newly designed zkVM based Fault Proof system.',
      },
      {
        url: 'https://github.com/kroma-network/go-ethereum',
        name: 'kroma-geth',
        description:
          "Repo of Kroma's execution engine which is a fork of op-geth",
      },
      {
        url: 'https://github.com/kroma-network/sp1',
        name: 'kroma-sp1',
        description:
          'Fork of SP1 for a newly designed zkVM based Fault Proof system.',
      },
      {
        url: 'https://github.com/kroma-network/tachyon',
        name: 'tachyon',
        description: 'Tachyon is a Modular ZK Backend, powered by GPU.',
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://specs.kroma.network/fault-proof/challenge.html',
        name: 'Spec of ZK Fault Proof System (based on zkEVM)',
        description: 'Specification of ZK Fault Proof system. ',
      },
      {
        url: 'https://specs.kroma.network/experimental/zk-fault-dipute-game/overview.html',
        name: 'Spec of ZK Fault Dispute Game (based on zkVM)',
        description: 'Specification of ZK Fault Dispute Game',
      },
      {
        url: 'https://github.com/kroma-network/kroma/blob/dev/audits/2023_09_Kroma_Security_Audit_ChainLight.pdf',
        name: 'Audit report of ZK Fault Proof System by ChainLight',
        description: 'Audit report of ZK Fault Proof system by ChainLight',
      },
      {
        url: 'https://x.com/l2beat/status/1704133308043673886',
        name: 'The first OP Stack rollup with active fault proof system',
        description:
          'This is the twitter by L2Beat that Kroma is the first OP Stack rollup with active fault proof system.',
      },
      {
        url: 'https://redash.mgmt.kroma.network/public/dashboards/kmqvkZuevFrOWORPipzkrs3YywUSfFkF5AvkDCp3?org_slug=default',
        name: 'Metrics for validator of Kroma',
        description:
          "This is the metrics for Kroma's validator system, which includes the number of validators, rewards, and output submission delay.",
      },
      {
        url: 'https://blog.kroma.network/about-the-first-successful-challenge-on-kroma-mainnet-aeca715b05d7',
        name: 'Article about the first successful challenge of Kroma',
        description:
          'An article about the first successful challenge of Kroma mainnet. ',
      },
      {
        url: 'https://github.com/kroma-network/tachyon/blob/main/tachyon/zk/plonk/halo2/README.md',
        name: 'Benchmarks of Tachyon and Halo2',
        description:
          'Benchmarks of Tachyon and Halo2 for three main circuits: Tachyon, Privacy-scaling-explorations and Scroll.',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: null,
          link: null,
          amount: '5m-10m',
          date: '2022',
          details: '',
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Work on core components of the OP Stack, including client implementations, modules, and modifications.',
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
      ],
      statement: [
        {
          answer:
            'Kroma has developed a permissionless ZK Fault Proof system based on the OP Stack, utilizing Scroll’s zkEVM. It has demonstrated that assets on OP Stack-based chain can be secured in a decentralized manner with ZK proof. Kroma has brought the OP Stack closer to decentralization and showcased the potential of using ZK proof for a Fault Proof system. Furthermore, this approach can contribute to a multi-proof system as a type of dispute game, enabling a more robust fault proof mechanism within the OP Stack. Moreover, when generating ZK proof becomes faster by utilizing Tachyon, it can enable the transition of the OP Stack to ZK rollups.',
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            'Since the mainnet launch, over 360 accounts have been registered as validators at peak, and more than 8,700 checkpoint outputs have been submitted. Thanks to these decentralized validators, assets up to $30 million are securely stored on Kroma.\n\nOn April 1, the first incorrect checkpoint output was submitted on the mainnet. This marked the first challenge on mainnet within an optimistic rollup, and it was successfully resolved using our ZK Fault Proof system, securing the assets on Kroma. This demonstrated that our development can effectively secure assets on the OP Stack chain.\n\nAdditionally, we have improved our Fault Proof system. One of the main challenges we faced was the lengthy time required to generate a ZK proof for a single block. With our optimized modular ZK backend, Tachyon, we achieved a 150% increase in ZK proof generation speed, resulting in a 33% reduction in operational costs for the ZK prover.',
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0x2b5b44d0e98599b5c877792367dcd0ed8f8f849fb267812a936897aa17baa6c4',
    applicationId:
      '0x2b5b44d0e98599b5c877792367dcd0ed8f8f849fb267812a936897aa17baa6c4',
    projectId:
      '0x314a419355259f8afede37756c7d603a7d7f0f9a9e77b8b2d6a7b165548eb629',
    category: 'DeFi',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: {
      name: 'Derive (Formerly Lyra)',
      description:
        'Derive L2 is an Ethereum rollup built using the OP stack and is the home of the Derive Protocol. It is a permissionless smart contract platform that boosts the performance of Ethereum whilst inheriting its security. Derive Network enables users to trade options, spot, and perpetuals on a self-custodial, modular, and performant technology stack. Derive operates as a leading DeFi derivatives exchange, providing tools for traders to manage risk, speculate on price movements, and earn yield through various strategies.',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/8a25c755-15c3-4446-b180-3d37b79cc67f.png',
      organizationCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/1477d7fb-aa13-4357-8a9f-3496f13cf474.png',
      socialLinks: {
        website: ['https://www.derive.xyz/'],
        farcaster: ['https://warpcast.com/lyra.eth'],
        twitter: 'https://x.com/derivexyz',
        mirror: 'https://blog.derive.xyz/derive/',
      },
      team: ['230590', '257725'],
    },
    name: 'Derive (Formerly Lyra) OP Custom Gas Limit Research',
    description:
      'Derive is one of the first op-stack rollups, pushing the limits of gas usage with a custom gas implementation that led to the identification and patching of a GETH client bug. The team aims to fully utilize the maximum GETH gas throughput, crucial for delivering trustless, on-chain portfolio margin. Derive has processed over 400,000 trading transactions, consuming over 1 trillion gas.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/454e843a-a2e1-480d-93d6-4dde35464baa.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/a772aa2d-b98e-4b9a-91c5-532d04f4e26a.png',
    socialLinks: {
      website: ['https://www.derive.xyz/'],
      farcaster: ['https://warpcast.com/lyra.eth'],
      twitter: 'https://x.com/derivexyz',
      mirror: 'https://blog.derive.xyz/derive/',
    },
    team: null,
    github: [],
    packages: [],
    links: [
      {
        url: 'https://github.com/ethereum-optimism/optimism/pull/11169#pullrequestreview-2188753413',
        name: 'fix(op-batcher): support new fjord maxRLPBytesPerChannelFjord via rollup chain spec #11169',
        description:
          'PR from Conduit to Optimism to fix issues uncovered while testing max gas implementation on Derive',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: null,
          link: null,
          amount: '99379',
          date: '',
          details: null,
        },
        {
          grant: 'token-house-mission',
          link: 'https://app.charmverse.io/op-grants/derive-formerly-lyra-chain-intent-3b-9106030612947877',
          amount: '500000',
          date: '2024-08-30',
          details:
            'Intent 3B: Support the Superchain - incentivize activity on Derive L2 and support a builders grant program on Derive L2 to grow activity and users of the Superchain. This grant is to the Derive organization and not related specifically to this RPGF but included for transparency',
        },
        {
          grant: 'foundation-mission',
          link: 'https://gov.optimism.io/t/gf-phase-0-proposal-lyra-finance/202?page=2',
          amount: '3000000',
          date: '2022-05-31',
          details:
            "Phase 0 grant to support liquidity and bulders on Derive's (formerly Lyra) V1, an option AMM that was the second protocol to deploy on OP mainnet. This grant was to the Derive organization for a previous version and not related to the specific RPGF but included for transparency",
        },
        {
          grant: 'token-house-mission',
          link: 'https://app.charmverse.io/op-grants/cycle-15-final-3608022895948242',
          amount: '210000',
          date: '2023-09-20',
          details:
            'Derive received a growth experiments grant to launch Derive L2 (formerly Lyra) and bootstrap liquidity and technical integrations. This grant was to the Derive organization for a previous version and not related to the specific RPGF but included for transparency ',
        },
        {
          grant: null,
          link: null,
          amount: '1m-5m',
          date: '2021',
          details: 'pre-seed round',
        },
        {
          grant: null,
          link: null,
          amount: '1m-5m',
          date: '2022',
          details:
            'strategic round https://blog.derive.xyz/lyra-raises-strategic-round/\n',
        },
      ],
      revenue: [],
    },
    pricingModel: 'freemium',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
      ],
      statement: [
        {
          answer:
            'Derive is one of first op-stack rollups to deploy and is one of few pushing the limits of gas. Derive has been working on improvements to the custom gas implementation and in doing so, pushed the GETH client to limit of 400m gas per block enabling Conduit to find and patch this bug: https://github.com/ethereum-optimism/optimism/pull/11169#pullrequestreview-2188753413\n\nDerive intends to be one of the few L2s using the MAX geth gas throughput overtime given the computational intensity of derivatives and delivering trustless, on-chain, portfolio margin in the most capital efficient way possible. to date, we have had > 400k transactions just from trading and > 1 Trillion Gas consumed https://explorer.lyra.finance/address/0xeB8d770ec18DB98Db922E9D83260A585b9F0DeAD',
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            'Derive’s work pushing the limits of Max gas has benefited two main groups:\n\n1. **OP superchains** can now operate at a higher gas throughput without encountering a bug that could potentially cause a reorg in the event they publish in a block too much data (10MB), so increasing over 40Mgas would have been unsafe for chains that are heavy calldata. \n2. **End users** - improvements to max geth gas enhance end user experience by allowing OP stack chains to operate at a higher throughput and increase speed of execution which allows greater capital efficiency and transparency for those operating on chain by allowing more data to be published per block transaction',
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0x3142a5d468f9c6cd587619a0fccf73dc77835149f1ca31e579cb51501dcfd285',
    applicationId:
      '0x3142a5d468f9c6cd587619a0fccf73dc77835149f1ca31e579cb51501dcfd285',
    projectId:
      '0xf04c2c47624bc0191001f655e147986439541493ee06e5ec5b8576d26d26d057',
    category: 'Social',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: {
      name: 'Rentality',
      description:
        'Rentality is an innovative project aimed at tokenizing real assets – cars. We transformed the car rental business process from web2 to web3',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/500276b5-67df-434d-a96b-56b00ebbb81c.png',
      organizationCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/c6d3c01f-ba67-4f71-ab5e-2eea8e6759ee.png',
      socialLinks: {
        website: ['https://app.rentality.xyz/', 'https://rentality.xyz/'],
        farcaster: ['https://warpcast.com/rentality'],
        twitter: 'https://x.com/Rentality_Info',
        mirror: 'https://mirror.xyz/0x263660F0ab0014e956d42f85DccD918bBa2Df587',
      },
      team: ['631453'],
    },
    name: 'Rentality',
    description: 'Transforming the future of car rentals with blockchain',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/c6b7ce00-ff3c-4bbb-90a1-6cce594896e3.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/ef7d6609-1026-4387-b1f4-9ca108fc4c1b.png',
    socialLinks: {
      website: ['https://app.rentality.xyz/'],
      farcaster: ['https://warpcast.com/rentality'],
      twitter: 'https://x.com/Rentality_Info',
      mirror: 'https://mirror.xyz/0x263660F0ab0014e956d42f85DccD918bBa2Df587',
    },
    team: [
      {
        fid: 361453,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/177015b7-f7fe-460d-9026-7fc10be89000/original',
        profile: {
          bio: {
            text: '',
          },
        },
        username: 'avt',
        power_badge: false,
        display_name: 'Oleksandr',
        active_status: 'inactive',
        verifications: ['0xa120cc0b555b7d914e487b1e892c714569023ce4'],
        follower_count: 9,
        custody_address: '0x0f741d5fcff7d7cba5a9ed04c66b3a9eb3fe0127',
        following_count: 87,
        verified_addresses: {
          eth_addresses: ['0xa120cc0b555b7d914e487b1e892c714569023ce4'],
          sol_addresses: [],
        },
      },
      {
        fid: 631453,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/29be9fe4-a0db-40c0-3718-1c75a156ba00/original',
        profile: {
          bio: {
            text: 'Rentality',
          },
        },
        username: 'badk0m',
        power_badge: false,
        display_name: 'Alex Kom',
        active_status: 'inactive',
        verifications: [
          '0x823a315c84753d82eff5f6db38ca99b17f9dadf1',
          '0x823a315c84753d82eff5f6db38ca99b17f9dadf1',
          '0x823a315c84753d82eff5f6db38ca99b17f9dadf1',
        ],
        follower_count: 13,
        custody_address: '0x49e13be7f0a2a038ba6862a6c43742401f983828',
        following_count: 84,
        verified_addresses: {
          eth_addresses: [
            '0x823a315c84753d82eff5f6db38ca99b17f9dadf1',
            '0x823a315c84753d82eff5f6db38ca99b17f9dadf1',
            '0x823a315c84753d82eff5f6db38ca99b17f9dadf1',
          ],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        url: 'https://github.com/Rentality-xyz/Rentality-demo-contracts',
        name: null,
        description: null,
      },
    ],
    packages: [],
    links: [],
    contracts: [
      {
        address: '0xd4d818B32412384BD62BAD36AAcfa23053Fe2Ca9',
        deploymentTxHash:
          '0xa77131a06a7c4fafb13b060ccbbdaf0bf05e554845470484813ddddc23c6506c',
        deployerAddress: '0x32a1171296E7633027A091a2d4Ad9b908620B6ED',
        verificationProof:
          '0x56c252b8fa95961fdc869ff811db57027d26153bc2b16626501d2f21bbb79a31540eb4701dd5b70497f6a3ed7c75779a7b9bd744190be116ce657568c90b73821b',
        chainId: 8453,
      },
    ],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [],
      revenue: [],
    },
    pricingModel: 'freemium',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Work on core components of the OP Stack, including client implementations, modules, and modifications.',
      ],
      statement: [
        {
          answer:
            'We believe that our project can make a significant contribution to the OP blockchain ecosystem. We estimate that in 3 months after MVP we will have around 1,500 active users of the service and over 16,000 transactions per month. We will attract more than 80,000 customers who will make more than 2,000,000 transactions every month by the end of 2027, we plan to grow by 40% per month. \nWe plan to actively engage the community to increase the TVL of our platform and blockchain in the next release. Our strategy involves raising a minimum of 5 million from the community. These funds will be directed to the mass purchase of cars. We believe that group investment is a more affordable and efficient way to get a car. For example, one person cannot always afford to buy a car for 100,000, but a thousand people united by our service can easily collect the required amount.',
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            'The web3 community lacks quality services, which are usual for web2. Rentality is a project from the direction of RWA (Real World Assets), which offers car rental and tokenization services. Our experience allows us to build a new trend in web3 - the transformation of RWS (Real Word Services) services, which will later become a benchmark for the entire web3 direction. The entire web3 community gets access to the convenient services they are usually using web2, thereby bringing web3 closer to mass adoption. We eliminate intermediaries between the guest and the host, creating a fair price for the community.\nExample\nWhen booking a car on web2, both the guest and the host pay for the services and commissions of various intermediaries, from Google and financial institutions to Turo, which operates with an inefficient monopoly structure. These commissions significantly affect the price of the product. ',
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0x37df31043d401a09c24ba1066e602ff34c2906ac92397040b5b90694d74eb8d7',
    applicationId:
      '0x37df31043d401a09c24ba1066e602ff34c2906ac92397040b5b90694d74eb8d7',
    projectId:
      '0x28a18006a584489339f6d5266a7585f1c8cbabcb89b2f52e15866e974bcfe802',
    category: 'Utility',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: null,
    name: 'Fault Dispute Game Audit Contest',
    description:
      'The Fault Dispute Game Audit Contest was run from July 15-29th to secure the Superchain by looking for bugs in the Fault Dispute Game contracts.\n\nAfter learning that the OP Labs Audit Framework led to a decision to not fund an audit for the Fault Dispute Game (because the safeguards around it were carefully audited), this project was initiated to bring the top security talent in the space together to secure this crucial piece of infrastructure.\n\nThe result was a two week contest featuring legends like samczsun (the GOAT of whitehats), cts (founder of Zellic), Riley Holterhus (Spearbit Lead Security Researcher), pwning.eth (3rd place on Immunefi all time leaderboard), xuwinnie (winner of the largest audit contest pot of all time), as well as 1000+ other researchers.\n\nThis format proved very effective. The contest uncovered 5 High severity vulnerabilities, as well as 11 Medium severity issues and numerous smaller improvements. These findings spurred the Granite network upgrade (https://gov.optimism.io/t/upgrade-proposal-10-granite-network-upgrade/8733).\n\nMy role was to bring the full audit from idea to completion with the best possible results and minimal time commitment from the OP Labs team. This included:\n- Identifying that this was an important issue for Superchain security, writing the Mission Request, applying, and securing the funding to run the contest.\n- Determining the optimal format to use the funds to find bugs. After discussing an on chain CTF format, decided with OP Labs team that a contest (with some added features) would work best.\n- Negotiating with contest platforms to get the most appealing deal. In the end, Code4rena hosted the contest at zero fee (their typical fee would be 60k OP on a contest of this size).\n- Recruiting top auditors to focus their full time attention on this contest. Selected folks specifically who had the relevant skills for the codebase and worked with them to put together a deal.\n- Took the role of OP Labs representative in organizing the contest: writing scoping documents, organizing the contest repo, putting together ideas to focus researcher attention on the right areas of the codebase, hosting a livestream to walk through the codebase at kickoff, etc.\n- Answering all participant questions during the contest to ensure every valid idea was fully explored.\n- Judging the contest, reviewing all submissions, deduplicating issues, assessing the validity (with the support of OP Labs on final decisions), and putting together the final issues list for the OP Labs team to fix.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/35161dab-61be-49b8-8502-9accf8cc7629.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/48dba596-8cea-4efb-903d-aec2e284e279.png',
    socialLinks: {
      website: [],
      farcaster: [],
      twitter: 'https://x.com/zachobront',
      mirror: null,
    },
    team: [
      {
        fid: 5882,
        object: 'user',
        pfp_url: 'https://i.imgur.com/w1imp0V.jpg',
        profile: {
          bio: {
            text: 'bug huntooor',
          },
        },
        username: 'obront',
        power_badge: false,
        display_name: 'obront',
        active_status: 'inactive',
        verifications: [],
        follower_count: 26,
        custody_address: '0x4ac17bf46fff1d6174403c43e7a96413aa102869',
        following_count: 62,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
    ],
    github: [],
    packages: [],
    links: [
      {
        url: 'https://code4rena.com/reports/2024-07-optimism',
        name: 'Audit Report',
        description:
          'This is the final audit report that was the result of the contest. This was passed to the OP Labs team to work on fixes to ensure the security of the system.',
      },
      {
        url: 'https://gov.optimism.io/t/upgrade-proposal-10-granite-network-upgrade/8733',
        name: 'Granite Network Upgrade',
        description:
          'This is the proposal for the Granite Network Upgrade, written by the OP Labs team. Multiple of the serious issues that spurred the upgrade were the result of this contest.',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: 'token-house-mission',
          link: 'https://app.charmverse.io/op-grants/the-op-fault-proof-ctf-39249094150592323',
          amount: '50000',
          date: '2024-05-14',
          details:
            'This grant included two portions: 200k OP was paid out immediately to fund rewards for contest participants, the other 50k was a builders grant for me for organizing, negotiating with platforms, marketing the contest, recruiting auditors, answering auditor questions, and judging.',
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Security audits specifically on the OP Stack or its components.',
      ],
      statement: [
        {
          answer:
            "The most important feature for the OP Stack shipped this year has been Fault Proofs. They moved the chain from Stage 0 to Stage 1 decentralization, and solidified the OP Stack as a full featured rollup stack for other teams to build on. The security of this feature is paramount to the trust in the system.\n\nWhile OP Labs has traditionally been responsible for audits, there are times when their audit framework doesn't match with the security priorities of the community. This contest represents the community filling this gap with a successful security engagement.\n\nThe results speak for themselves:\n- 5 High severity vulnerabilities found, multiple of which would have required using the safeguards to freeze the bridge to secure funds\n- 11 Medium severity issues, as well as numerous smaller fixes\n- One of the main drivers of the Granite Network Upgrade, which majorly upgrades the security of OP Mainnet (and, eventually, the rest of the Superchain)",
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            "There are three groups who have benefitted most from this work:\n\n1) Users: While the safeguards on the bridge should be sufficient to protect funds, most users with large amounts of funds on Optimism would prefer that the contracts secure their funds and not need to rely on the Security Council. This contest helped resolve multiple vulnerabilities that would have required Security Council interference to keep funds safe.\n\n2) OP Token Holders: A Security Council override to freeze the bridge would have caused major damage to OP's reputation, and likely would have caused a major reduction in OP's token value.\n\n3) Superchain: The rest of the Superchain will be using these contracts, and may not have the diligence in safeguards that OP Mainnet has. Having more secure contracts keeps these chains safe.",
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0x3d99c996bf2979b7ff827a4b2b2c56c65580bc75854ac41b30f034465801f301',
    applicationId:
      '0x3d99c996bf2979b7ff827a4b2b2c56c65580bc75854ac41b30f034465801f301',
    projectId:
      '0x5606763865e540ae9ff0c58f206a708f58ea117c08d8d8d1e74f768abeff084c',
    category: 'Cross Chain',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: {
      name: 'Moved Network',
      description:
        "Moved is a high-performance optimistic rollup solution built on the Optimism OP Stack, utilizing the Move smart contract language, designed to unlock Ethereum's full potential. By leveraging the power of optimistic rollups and the efficiency of Move, Moved enables fast, secure, and cost-effective transactions on the Ethereum network.",
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/88bd6479-8ded-472a-9c59-3a40d414ddae.png',
      organizationCoverImageUrl: '',
      socialLinks: {
        website: ['https://moved.network'],
        farcaster: [],
        twitter: 'https://x.com/MovedNetwork',
        mirror: '',
      },
      team: ['831955'],
    },
    name: 'Moved Network',
    description:
      "We're building the next generation Ethereum L2 blockchain on Optimism OP Stack that supports the most secure Move smart contract language. Our goal is to help the security and parallel execution of Move meet Ethereum’s vast liquidity.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/4088a7f3-ba0f-4ec6-a6bc-ff4caaf666eb.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/68088c9d-248f-4b4c-b8b7-1e8c52c5569a.png',
    socialLinks: {
      website: ['https://moved.network'],
      farcaster: [],
      twitter: 'https://x.com/MovedNetwork',
      mirror: null,
    },
    team: [
      {
        fid: 831955,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/318838ba-fea5-4e14-c963-e0782709f200/rectcrop3',
        profile: {
          bio: {
            text: '',
          },
        },
        username: 'bulenttastan',
        power_badge: false,
        display_name: 'Bulent',
        active_status: 'inactive',
        verifications: [],
        follower_count: 5,
        custody_address: '0x54633b3682ea01ee110cd0da8d8c1157a1f6f2a8',
        following_count: 5,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
    ],
    github: [],
    packages: [],
    links: [
      {
        url: 'https://www.crunchbase.com/organization/moved-network',
        name: 'Crunchbase',
        description: 'Company investor profile',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: null,
          link: null,
          amount: 'under-1m',
          date: '2024',
          details:
            'Received some of the pre-seed investment from 4 VCs and 2 angels. The rounds is still open for more investment.',
        },
      ],
      revenue: [],
    },
    pricingModel: 'pay_to_use',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Work on core components of the OP Stack, including client implementations, modules, and modifications.',
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
      ],
      statement: [
        {
          answer:
            "Moved Network provides smart contracts for alternative VMs to be executed on the OP Stack and Superchain in the future. Almost all the smart contracts on OP Stack runs on EVM and we start providing access to Move smart contract execution.\n\nWe also started working on a zkMove implementation that will be used for ZK proof. As it turns out, it's easier to port ZK computation on a Move contract than a Solidity contract, because the Move bytecodes are a lot more similar to assembly language than the EVM bytecodes which makes them easier to transform into ZK computation language.",
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            'We believe bringing in Move smart contracts will make OP Stack a lot more secure, because Solidity has vulnerabilities which are solved in Move language.\n\nAnother benefit is with ZK proof the withdrawal times will be a lot shorter, currently in a few minutes and in the future in one block time when the underlying ZK computation speeds up. But still a few minutes is much better than 7 days.',
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0x3fe005facaaa824b2fd2190be9a1fa124577580dbcdf91f85308725161a79990',
    applicationId:
      '0x3fe005facaaa824b2fd2190be9a1fa124577580dbcdf91f85308725161a79990',
    projectId:
      '0x7333cac46b20999de07f4d7be5146c10a30f19586907bd2ce986b81af340cb97',
    category: 'Utility',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: {
      name: 'optimism-java',
      description:
        '# Introduction\nWe continue to build open source public goods to help the Ethereum and Optimism community get better and better.\n\n## Our Works\nWe have currently developed two important components of core OP Stack protocol:\n\n- [Hildr](https://github.com/optimism-java/hildr) is an optimism rollup node written in Java.\n\n- [Op-besu](https://github.com/optimism-java/op-besu) is an optimism execution client written in Java, a fork of [Besu](https://github.com/hyperledger/besu).\n\nIn addition, we have also developed OP Stack related tools.\n\n- [Blob-archiver-rs](https://github.com/optimism-java/blob-archiver-rs) is a service to archive and allow querying of all historical blobs from the beacon chain written in Rust.\n\n- [Superproof](https://github.com/optimism-java/dispute-explorer-frontend) is a fault proof explorer to visualize dispute game progress and statistics.\n\nMeanwhile, we also contributed in other community projects.\n\n- [Shisui](https://github.com/optimism-java/shisui) is an ethereum portal network client written in Go.\n\n- [Mev-share-java](https://github.com/optimism-java/mev-share-java) is a Java client library for Flashbots MEV-share Matchmaker.',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/9b5ba58e-c9ff-4b21-8b4c-4ab561b27b6b.png',
      organizationCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/b849eed4-c5b3-484e-b376-db756fb9e697.png',
      socialLinks: {
        website: ['https://optimism-java.github.io'],
        farcaster: [],
        twitter: 'https://x.com/optimism_java',
        mirror: '',
      },
      team: ['754190', '451368', '193400'],
    },
    name: 'hildr',
    description:
      'Hildr is an OP Stack consensus client written in Java 21. \n\nWe are OptimismJ who continue to build open source public goods to help the Ethereum and Optimism community get better and better. Our main work is on OP Stack core protocols and ecosystem tools and libraries. You can view more detailed information on our official [website](https://optimism-java.github.io) .',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/d304db21-cc7e-4236-8a63-a2a5161c4aee.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/2d30ac8c-806b-4332-b596-c8b5faadc032.png',
    socialLinks: {
      website: ['https://optimism-java.github.io/hildr-docs'],
      farcaster: [],
      twitter: 'https://x.com/optimism_java',
      mirror: null,
    },
    team: null,
    github: [
      {
        url: 'https://github.com/optimism-java/hildr',
        name: '',
        description: '',
      },
    ],
    packages: [
      {
        url: 'https://github.com/optimism-java/hildr/pkgs/container/hildr',
        name: null,
        description: null,
      },
      {
        url: 'https://github.com/optimism-java/hildr/releases/tag/v0.4.4',
        name: null,
        description: null,
      },
    ],
    links: [
      {
        url: 'https://www.opensource.observer/project/hildr-optimism-java',
        name: '',
        description: '',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: null,
          link: null,
          amount: '62608.95',
          date: '',
          details: null,
        },
        {
          grant: 'token-house-mission',
          link: 'https://app.charmverse.io/op-grants/page-4923039239406415',
          amount: '25000',
          date: '2023-07-05',
          details: '',
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Work on core components of the OP Stack, including client implementations, modules, and modifications.',
      ],
      statement: [
        {
          answer:
            '### The Importance of Client Diversity\nThe best explanation is [here](https://clientdiversity.org/)\n\n### The impact of hildr\nOur client, Hildr, is currently the only continuously maintained alternative consensus client and has been upgraded to the latest Granite hardfork of the OP Stack. We continue to promote the [decentralized development of OP Stack](https://gov.optimism.io/t/collective-intents-season-5/6883#intent-1-progress-towards-technical-decentralization-2). Similar to the approach taken by Consensys within the Ethereum community, we provide Java infrastructure in the OP Stack community to facilitate the use and integration of OP Stack for chain operators, dApp companies, developers, and end users utilizing Java technology.',
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            '- All users utilizing Java infrastructure, such as centralized exchanges (CEX), decentralized applications (Dapp), RaaS providers, and RPC providers, can run our client, Hildr, to utilize and integrate the OP Stack. \n- In addition to supporting the OP mainnet and the Sepolia testnet, our client, Hildr, also accommodates other members of the superchain. Users from all superchain member chains can obtain the state of the chain by running their own Hildr client in a trustless manner. \n- Our client has been integrated into the OP Stack interoperability test tool project, which can be found [here](https://github.com/ethpandaops/optimism-package). All developers who engage with or study the OP Stack can leverage our client, Hildr, within this tool to conduct their tests.',
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0x41275977def21cc80eaddabfc98c04cf02df9c92c918070437d9619a8151b9f5',
    applicationId:
      '0x41275977def21cc80eaddabfc98c04cf02df9c92c918070437d9619a8151b9f5',
    projectId:
      '0x60f8ab8d1ae00182f9afaf6ec35213a200ed8ac21d39b24a9794f2ba21f6aa59',
    category: 'Utility',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: {
      name: 'Test in Prod (soon to be Sunnyside Labs)',
      description:
        "Test in Prod is a core development team of Optimism Collective. Test in Prod will soon to be rebranded to 'Sunnyside Labs'.",
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/5354c3c3-da28-4097-bb82-b89b630a3d3e.png',
      organizationCoverImageUrl: '',
      socialLinks: {
        website: ['testinprod.io', 'github.com/testinprod-io'],
        farcaster: [],
        twitter: 'https://x.com/testinprod_io',
        mirror: 'https://mirror.xyz/testinprod-io.eth',
      },
      team: ['811328', '849695', '284703', '849643', '849704'],
    },
    name: 'Delta Network Upgrade',
    description:
      'Delta is the second OP Stack Network Upgrade that activates Span Batches, which reduces up to 97% of the fixed L1 cost of OP Chains. With the initial idea of Protolambda, Test in Prod built & deployed the Delta Network Upgrade across all OP Chain Mainnets. Thanks to Delta, we could see more OP Chains in production, as it reduced the minimal annual operating cost from 165 ETH to 5 ETH (97%). Delta is effective for low-active chains, but active chains, such as Zora, are saving up to 30% of fixed L1 costs with Span Batches.\n\nFor the Superchain’s success, reducing the fixed on-chain cost is important. Chain Governors have to take risks for the fixed costs, and it’s difficult to launch an OP Chain if it’s unbearable. Since the deployment of Delta in February 2024, we saw a fast growth in the number of OP Chains, and Delta was one of the big enablers because the risk of Chain Governor went down from 165 ETH/year to 5 ETH/year.\n\nDelta was also a meaningful upgrade as it was the first network upgrade written by the external core dev team from OP Labs, showing that the OP Stack protocol development started to get decentralized.\n\nSince Retro Funding round 3, Test in Prod has worked on the following:\n- Fix bugs in the Span Batches code.\n- Conduct failure mode analysis & plan out the contingency plans with OP Labs.\n- Deploy to Sepolia, monitor, and fix codes.\n- Write & post a Governance Proposal for upgrades.\n- Deploy to all Superchain Mainnets & monitoring.\n\n---\nHere are the commentaries for Delta Network Upgrade:\n\nAndrew (CEO of Conduit): Delta lowered the barriers for Chain Governors by lowering the fixed costs. It made it easier to onboard Chain Governors, and existing customers were happy about the savings. Appreciate their work!',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/a9c34ac0-aeee-441b-baf2-7c2db4147068.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/62e367cb-373a-46f7-a1ca-39ac8a50262c.png',
    socialLinks: {
      website: [
        'https://gov.optimism.io/t/final-upgrade-proposal-3-delta-network-upgrade/7310',
        'https://testinprod.io',
      ],
      farcaster: [],
      twitter: 'https://x.com/testinprod_io',
      mirror: 'https://mirror.xyz/testinprod-io.eth',
    },
    team: null,
    github: [
      {
        url: 'https://github.com/testinprod-io/span-batch-research',
        name: "Research repository to measure Span Batches' impact.",
        description:
          'In this repository, Test in Prod conducted backtesting against all OP Chains to measure its impact.',
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://gov.optimism.io/t/final-upgrade-proposal-3-delta-network-upgrade/7310',
        name: 'Delta Upgrade Governance Proposal',
        description:
          'This is a Governance proposal for Delta Upgrade. It contains the general information, contingency plans, and Q&As with delegates.',
      },
      {
        url: 'https://op-tip.notion.site/Span-Batch-Design-Docs-b85e599a47774dcdb8171cc84cab2476?pvs=4',
        name: 'Span Batch Design Docs',
        description:
          'This document contains the technical design & expected results of Span Batches.',
      },
      {
        url: 'https://github.com/ethereum-optimism/optimism/issues/7454',
        name: 'Delta Upgrade Issue Tracker',
        description:
          'This Github issue tracker contains tickets & PRs for Delta Upgrade.',
      },
      {
        url: 'https://vote.optimism.io/proposals/64861580915106728278960188313654044018229192803489945934331754023009986585740',
        name: 'Voting Page for Delta Upgrade',
        description:
          'This is a voting page for Delta upgrade. It contains the comments from the delegates for Delta.',
      },
      {
        url: 'https://x.com/opmichael_eth/status/1761185096101494852',
        name: 'Shout Out Tweet from OP Michael.',
        description:
          "This shout out post from OP Michael contains what is Delta Upgrade & why it's meaningful.",
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: null,
          link: null,
          amount: '273293.03',
          date: '',
          details: null,
        },
        {
          grant: 'foundation-grant',
          link: 'https://gov.optimism.io/t/welcoming-test-in-prod-to-the-optimism-collective/6944',
          amount: '5000000',
          date: '2023-08-30',
          details:
            'This is a core dev commitment grant for Test in Prod. 4 years vesting & one year cliff.',
        },
        {
          grant: null,
          link: null,
          amount: '1m-5m',
          date: '2022',
          details: 'Initial friends & family rounds to kick off Test in Prod.',
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
        'Work on core components of the OP Stack, including client implementations, modules, and modifications.',
      ],
      statement: [
        {
          answer:
            'Delta (Span Batches) reduces up to 97% of the fixed L1 cost of OP Chains. With the initial idea of Protolambda, Test in Prod built & deployed the Delta Network Upgrade across all OP Chain Mainnets. Thanks to Delta, we could see more OP Chains in production, as it reduced the minimal annual operating cost from 165 ETH to 5 ETH (97%).\n\nDelta is also a meaningful upgrade as it was the first network upgrade written by the external core dev team from OP Labs, showing that the OP Stack protocol development started to get decentralized.',
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            'Delta benefits the Chain Governors the most, especially prospective governors or those who govern low-active chains. Chain Governors have to take risks for the fixed costs when they deploy an OP Chain, and it’s difficult to launch one if it’s unbearable. Since the deployment of Delta in February 2024, we saw a fast growth in the number of OP Chains, and Delta was one of the significant enablers because the risk of Chain Governor went down from 165 ETH/year to 5 ETH/year.\n\nDelta is most effective for low-active chains, but active chains, such as Zora, save up to 30% of fixed L1 costs with Span Batches.\n\n---\nHere are the commentaries for Delta Network Upgrade:\n\nAndrew (CEO of Conduit): Delta lowered the barriers for Chain Governors by lowering the fixed costs. It made it easier to onboard Chain Governors, and existing customers were happy about the savings. Appreciate their work!',
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0x417e4e0fab598eee0958d618dfa22dc4ad60eaaa659b811c4780da1df7c7aad6',
    applicationId:
      '0x417e4e0fab598eee0958d618dfa22dc4ad60eaaa659b811c4780da1df7c7aad6',
    projectId:
      '0x7d69da70e6453a7abb641a770cad602c0a7893186cb20f990efe22c0cb248115',
    category: 'Utility',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: {
      name: 'optimism-java',
      description:
        '# Introduction\nWe continue to build open source public goods to help the Ethereum and Optimism community get better and better.\n\n## Our Works\nWe have currently developed two important components of core OP Stack protocol:\n\n- [Hildr](https://github.com/optimism-java/hildr) is an optimism rollup node written in Java.\n\n- [Op-besu](https://github.com/optimism-java/op-besu) is an optimism execution client written in Java, a fork of [Besu](https://github.com/hyperledger/besu).\n\nIn addition, we have also developed OP Stack related tools.\n\n- [Blob-archiver-rs](https://github.com/optimism-java/blob-archiver-rs) is a service to archive and allow querying of all historical blobs from the beacon chain written in Rust.\n\n- [Superproof](https://github.com/optimism-java/dispute-explorer-frontend) is a fault proof explorer to visualize dispute game progress and statistics.\n\nMeanwhile, we also contributed in other community projects.\n\n- [Shisui](https://github.com/optimism-java/shisui) is an ethereum portal network client written in Go.\n\n- [Mev-share-java](https://github.com/optimism-java/mev-share-java) is a Java client library for Flashbots MEV-share Matchmaker.',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/9b5ba58e-c9ff-4b21-8b4c-4ab561b27b6b.png',
      organizationCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/b849eed4-c5b3-484e-b376-db756fb9e697.png',
      socialLinks: {
        website: ['https://optimism-java.github.io'],
        farcaster: [],
        twitter: 'https://x.com/optimism_java',
        mirror: '',
      },
      team: ['754190', '451368', '193400'],
    },
    name: 'op-besu',
    description:
      'Op-besu is an OP Stack execution client written in Java 21. \n\nWe are OptimismJ who continue to build open source public goods to help the Ethereum and Optimism community get better and better. Our main work is on OP Stack core protocols and ecosystem tools and libraries. You can view more detailed information on our official [website](https://optimism-java.github.io) .',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/500dc76f-858e-4de3-985d-81056e23780b.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/c8255b9c-d41f-4d6b-8fa3-8c33194d752d.png',
    socialLinks: {
      website: ['https://optimism-java.github.io/op-besu-docs'],
      farcaster: [],
      twitter: 'https://x.com/optimism_java',
      mirror: null,
    },
    team: null,
    github: [
      {
        url: 'https://github.com/optimism-java/op-besu',
        name: '',
        description: '',
      },
    ],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: 'token-house-mission',
          link: 'https://app.charmverse.io/op-grants/op-besu-an-op-stack-execution-client-based-on-hyperledger-besu-2818630304747294',
          amount: '50000',
          date: '2024-05-09',
          details: '',
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Work on core components of the OP Stack, including client implementations, modules, and modifications.',
      ],
      statement: [
        {
          answer:
            '### The Importance of Client Diversity\nThe best explanation is [here](https://clientdiversity.org/)\n\n### The impact of op-besu\nOur client, op-besu, is currently a continuously maintained alternative execution client that has been upgraded to the latest Granite hard fork of the OP Stack. We continue to promote the [decentralized development of OP Stack](https://gov.optimism.io/t/collective-intents-season-5/6883#intent-1-progress-towards-technical-decentralization-2). Similar to the initiatives undertaken by ConsenSys within the Ethereum community, we provide Java infrastructure in the OP Stack community to assist chain operators, dApp companies, developers, and end users who utilize Java technology in seamlessly using and integrating with OP Stack.',
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            '- All users utilizing Java infrastructure, such as centralized exchanges (CEX), decentralized applications (Dapp), RaaS providers, and RPC providers, can run our client, op-besu, to utilize and integrate the OP Stack. \n- In addition to supporting the OP Sepolia testnet, our client, op-besu, also accommodates other members of the superchain. Users from all superchain member chains can obtain the state of the chain by running their own op-besu client in a trustless manner. \n- Our client has been integrated into the OP Stack interoperability test tool project, which can be found [here](https://github.com/ethpandaops/optimism-package). All developers who engage with or study the OP Stack can leverage our client, op-besu, within this tool to conduct their tests.',
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0x41e9bd84d87b85a4190e4ce47865b14733f12e803cf97c0300d89b75c9bf0c32',
    applicationId:
      '0x41e9bd84d87b85a4190e4ce47865b14733f12e803cf97c0300d89b75c9bf0c32',
    projectId:
      '0x52d9a9709aeb50c10afb0f67a35f1a538bc6897c9f45161d39c37fd566fbe19a',
    category: 'DeFi',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: null,
    name: 'Orderly Network',
    description:
      'Orderly Network is a combination of an orderbook-based trading infrastructure and a robust liquidity layer offering perpetual futures. Unlike traditional platforms, Orderly doesn’t have a front end; instead, it operates at the core of the ecosystem, providing essential services to projects built on top of it.\n\nBuilt on top of the OP Stack, Orderly Chain settles trades across multiple blockchains leveraging its asset management vaults for user deposits. These asset vaults are currently deployed across Arbitrum, OP Mainnet, Base, Polygon POS and Mantle. \n\nOrderly has 12 brokers built on top of its infrastructure currently - 11/12 of these are deployed to the OP and Base mainnet asset vaults. These brokers/projects include WOOFi Pro, LogX, SharpeAI, Bitoro, EMDX, Ascendex, CoolWallet and more. Orderly has an additional 10+ projects in the "integration underway" stage and/or on testnet to deploy in the coming months. \n\nDetails on Orderly OP Stack can be found on our explorer: \nhttps://explorer.orderly.network/\n\nOrderly overall TVL: $38.5m\nTVL Breakdown in OP & Base - \nOptimism Mainnet TVL: $8,608,017\nBase TVL: $1,348,071\n\nUp to date statistics can be found at: \nhttps://dune.com/orderly_network/orderly-dashboard\n\nTeam Members and Roles: 45+ Team members across 10+ countries.\nCore contributors: Ran (CEO), Terence (CTO), Arjun (COO), Bryan (Product), Slava (Product), Amine (Product), Midoji (BD & Product), Aurora (BD), Henry (Institutional BD), Drew (Marketing), Brandon (Social & Content Marketing), Irene (Growth Marketing)\n\n\n',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/76ccd2c5-0225-4e7f-a2c7-e5541d3b46e4.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/3039461d-66da-43e6-bd08-ec5bc721c37c.png',
    socialLinks: {
      website: ['orderly.network'],
      farcaster: ['https://warpcast.com/orderly'],
      twitter: '@orderlynetwork',
      mirror: null,
    },
    team: [
      {
        fid: 341567,
        object: 'user',
        pfp_url: 'https://i.imgur.com/wJRxzF8.jpg',
        profile: {
          bio: {
            text: 'The permissionless liquidity layer for Web3 trading 🟣\n\nA single, shared orderbook across all blockchains powered by LayerZero Labs, settled on the OP stack.',
          },
        },
        username: 'orderly',
        power_badge: false,
        display_name: 'OrderlyNetwork',
        active_status: 'inactive',
        verifications: [],
        follower_count: 64,
        custody_address: '0xc5c10592e6ee2e5aedd464b3601700c9fb78ad2f',
        following_count: 75,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        url: 'https://github.com/OrderlyNetwork/contract-evm',
        name: null,
        description: null,
      },
    ],
    packages: [
      {
        url: 'https://www.npmjs.com/package/@orderly.network/hooks',
        name: null,
        description: null,
      },
    ],
    links: [],
    contracts: [
      {
        address: '0x816f722424B49Cf1275cc86DA9840Fbd5a6167e9',
        deploymentTxHash:
          '0x7792fcca87a2da230c67a71ed5063a89794e4a680dfa281f31ab2aa63902b4d9',
        deployerAddress: '0x43E3E4d002BA65c6a26d2e4c998b46e427370e6c',
        verificationProof:
          '0xd91b5d96b1bf76b007aa4d0db4305ca827de74f6bba08bcacb308042fae5f4f2776499f92595ad99c6ed308f5ec90a0eb83942b4707c58a4a312b74bbb1664bf1c',
        chainId: 10,
      },
      {
        address: '0x816f722424B49Cf1275cc86DA9840Fbd5a6167e9',
        deploymentTxHash:
          '0x9ef5c9a2591e754e9801af1bb318abc966ac704b47002f1a9ab59e2ef5d28cd9',
        deployerAddress: '0x43E3E4d002BA65c6a26d2e4c998b46e427370e6c',
        verificationProof: '0x0',
        chainId: 8453,
      },
      {
        address: '0x173B47eDBeCa665125edc24C509bfE545CDA60a9',
        deploymentTxHash:
          '0x69968dac1999c5d5a50fff92e997f04dc95838c7591c0e36892dbfefc7020f36',
        deployerAddress: '0x295e0fC7ab0F86df5597F38c9568a2da217E6673',
        verificationProof:
          '0xb297ce79e77b28def6f16b6f575683d41c2d69e859e661bfa27cf7920fb24def50c59fc61c23d7bc7407d5dbc89bf51d34f9dea38f1465bc7a3da708eb5e59391c',
        chainId: 8453,
      },
      {
        address: '0x173B47eDBeCa665125edc24C509bfE545CDA60a9',
        deploymentTxHash:
          '0xee45013725d7a5cd45127ebfe7f05d63993b85a5634a9c8e8df3657946e3d5d6',
        deployerAddress: '0x295e0fC7ab0F86df5597F38c9568a2da217E6673',
        verificationProof: '0x0',
        chainId: 10,
      },
    ],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: null,
          link: null,
          amount: '44000',
          date: '',
          details: null,
        },
      ],
      revenue: [],
    },
    pricingModel: 'freemium',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
        'Work on core components of the OP Stack, including client implementations, modules, and modifications.',
        'Security audits specifically on the OP Stack or its components.',
      ],
      statement: [
        {
          answer:
            'Orderly is a custom OP Stack chain that acts as a decentralised clearing house alongside a unified orderbook for perpetual trading. An Omnichain settlement layer for DeFi. \n\nThe Orderly OP stack as surpassed 21.493M transactions on the chain leverages Celestia for Data Availability. \n\nThe Orderly OP stack connects to an off chain matching engine as well as asset management smart contract vaults on multiple other EVM chains, enabling users to be able to deposit and withdraw collateral on the chain of their choice, trade perpetuals on over 20+ different "brokers" and/or retail facing front ends whilst settling every trade on the Orderly OP stack every block. In order to do this, the Orderly OP stack is directly integrated with the LayerZero network to enable clear cross chain messaging between chains - This is responsible for approx 25-30% of all messages on LayerZero directly to the Orderly OP Stack. ',
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            'Orderly powers 21+ different perpetual trading interfaces from WOOFi Pro, LogX, Bitoro, Unibot perps, OX Markets to name just a few. All of these perp dexs are able to allow their users to have a real time trading experience, settled via the Orderly OP Stack every single block. Using this, Orderly process anywhere from 100m-1bn in 24hr trading volume across the 21+ builders who have integrated the stack. \n\nAn overview of the metrics can be found here:\nhttps://dune.com/orderly_network/orderly-dashboard\n\nOrderly OP Stack Block Explorer here:\nhttps://explorer.orderly.network/\n\nDetails on the Omnichain Settlement Layer:\nhttps://medium.com/@orderlynetwork/introducing-orderly-app-chain-powering-orderly-omnichain-settlement-layer-170d6c890029\n\n',
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0x54d4b15fc19bb1d56a611e650d54847ee6fbc24cc19ed3ecb464a4269268270e',
    applicationId:
      '0x54d4b15fc19bb1d56a611e650d54847ee6fbc24cc19ed3ecb464a4269268270e',
    projectId:
      '0x834139065d671234f9a922e6b55c33cc45ece1316cfc6e477b07488b76ce27c2',
    category: 'Utility',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: null,
    name: 'Fault Proofs security research',
    description:
      'Optimism initially launched with single-shot fraud proofs (now called fault proofs).  I audited the architecture and implementation, and performed extensive research on risks associated with fraud proofs.  In the course of this research I found many vulnerabilities and implemented PoC exploits to demonstrate them.  Optimism did not have a bounty program at the time of this audit so I submitted the results without asking for compensation.\n\nAfter coordinating the disclosure with the OP team, I disclosed my research, Optimistic Time Travel: https://medium.com/infinitism/optimistic-time-travel-6680567f1864\n\nThe results led to the conclusion that single shot fraud proofs are unsafe and should be replaced with interactive fraud proofs.  The vulnerable implementation was disabled.  The architecture was redesigned and interactive fault proofs were introduced in an upgrade earlier this year: https://gov.optimism.io/t/final-protocol-upgrade-7-fault-proofs/8161/1\n\nWhile the research was published in 2022, its impact happened in 2024 when optimism upgraded to the new and safer fault proofs architecture.  Hence I\'m submitting this security research in the OP stack research category "Security audits specifically on the OP Stack or its components".',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/4fc318f8-c806-4663-af90-75872fc29720.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/a725797c-f76a-4803-8a6e-942d32c678ca.png',
    socialLinks: {
      website: [
        'https://medium.com/infinitism/optimistic-time-travel-6680567f1864',
      ],
      farcaster: [],
      twitter: 'https://x.com/yoavw/status/1505581539081568261',
      mirror: null,
    },
    team: [
      {
        fid: 637270,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/1e1822c3-06bb-42c1-ed61-0f6e431a3500/rectcrop3',
        profile: {
          bio: {
            text: 'Security @ Ethereum',
          },
        },
        username: 'yoav.eth',
        power_badge: false,
        display_name: 'yoav.eth',
        active_status: 'inactive',
        verifications: ['0xdb5781a835b60110298ff7205d8ef9678ff1f800'],
        follower_count: 7,
        custody_address: '0xb4adc7e29e816775bb658e03d8bc265c6de9e05f',
        following_count: 65,
        verified_addresses: {
          eth_addresses: ['0xdb5781a835b60110298ff7205d8ef9678ff1f800'],
          sol_addresses: [],
        },
      },
    ],
    github: [],
    packages: [],
    links: [
      {
        url: 'https://medium.com/infinitism/optimistic-time-travel-6680567f1864',
        name: 'Optimistic time travel (the research itself)',
        description:
          'This research demonstrated systemic issues with single-shot fraud proofs and suggested switching to interactive fraud proofs.  Subsequently the vulnerable architecture has been disabled, and interactive fraud proofs were implemented: https://gov.optimism.io/t/final-protocol-upgrade-7-fault-proofs/8161',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Security audits specifically on the OP Stack or its components.',
      ],
      statement: [
        {
          answer:
            'The project discovered severe issues with the previous fraud proofs implementation.  It resulted in the vulnerable implementation getting deprecated, and led to developing a safer one: https://gov.optimism.io/t/final-protocol-upgrade-7-fault-proofs/8161/1\n\nThe project therefore contributed to the evolution of the OP stack, towards a more secure and decentralized network.',
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            "All OP Stack users benefit from having a safe implementation of fault proofs.\n- The vulnerable implementation would have put user funds at risk, as demonstrated in the article.\n- Having no fault proofs would expose users to risks such as a sequencer bug resulting in irregular state changes, including unauthorized withdrawal to L1.\n\nAll OP users enjoy better security as a result of security research such as this project.\n\nThe project can't take credit for the extensive work done by the OP team to implement the new fault proofs implementation, but it contributed by showing what needs fixing and suggesting a way forward.",
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0x5886472cf166ffa3671aa8c9bc303f8644e1ad90d67a53aec0f97eb6c9e6844d',
    applicationId:
      '0x5886472cf166ffa3671aa8c9bc303f8644e1ad90d67a53aec0f97eb6c9e6844d',
    projectId:
      '0x20c5765632f669a3d5167f95cc7963d7bbf060b68e4621d0c9091b7f7e1b26ab',
    category: 'DeFi',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: {
      name: 'Zotto',
      description: '',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/273c1263-c85e-4308-baf7-bff2f041e4b7.png',
      organizationCoverImageUrl: '',
      socialLinks: {
        website: [],
        farcaster: [],
        twitter: '',
        mirror: '',
      },
      team: ['849758'],
    },
    name: 'Zotto',
    description:
      'Zotto is an automated perpDEX and memecoin aggregator to snipe and sell tokens at lightning speed. The platform allows each trader to tailor its custom strategies for auto-buy/sell based on predefined conditions set by onchain intents. These smart agents are fully customizable, multi-condition, asynchronous, cross-chain, and non-custodial. \n',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/7a7824ce-cdff-4ca2-a917-fbce0d3d5e47.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/00ca0aac-7555-48af-aa37-015b68ac777d.png',
    socialLinks: {
      website: ['https://zotto.ai/'],
      farcaster: [],
      twitter: 'https://x.com/zottoAI',
      mirror: null,
    },
    team: [
      {
        fid: 849758,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/866f9b30-4995-4f93-19e8-ce819cfdf200/rectcrop3',
        profile: {
          bio: {
            text: 'Zotto.ai founder',
          },
        },
        username: 'poolinstructor',
        power_badge: false,
        display_name: 'PoolInstructor',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0xa91e27413c542129afe099b2ce586493d283a17f',
        following_count: 0,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
    ],
    github: [],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: null,
          link: null,
          amount: 'under-1m',
          date: '2024',
          details:
            'Zotto closed a $500K angel round and has now just launched its $2M seed raise. Our cap table includes Ankr, Frax, Nuffle Labs, HyperLane, Dewhales Capital, Nebulae, County Cap, Luganodes, and more..',
        },
      ],
      revenue: [],
    },
    pricingModel: 'freemium',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
      ],
      statement: [
        {
          answer:
            "Zotto has created a automation engine live on Base, designed to be leveraged by any OP Stack chain and developer. Our first use case focuses on automating perpetual, spot, and DeFi trading on Base through the Zotto app. \n\nWe're also developing APIs and SDKs to enable integration of our engine across the broader ecosystem, automating a wide range of tasks. We're already in discussions with RaaS providers to natively integrate automation into various rollups. This not only strengthens the OP Stack ecosystem but opens up new opportunities for developers to make automation a core feature of their on-chain activities.\n\n",
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            "The biggest beneficiaries of our work on the OP Stack have been developers and DeFi projects that require automation for their on-chain activities. For example, we've helped Orderly with the first fully automated perp trading. Our advancements are increasing user activity as it no longer requires manual intervention to initiate trades and create volume on-chain.\n\nWe are integrating the engine with various DEX and DeFi protocols to offer a new way to interact with their platform.",
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0x5a41dd6db9348adfcd8bb0bb0a391a44ac7797094183d536edc8d5677aa985fa',
    applicationId:
      '0x5a41dd6db9348adfcd8bb0bb0a391a44ac7797094183d536edc8d5677aa985fa',
    projectId:
      '0x842f92e1a555fdbc6f0be1640997d1a6f6a96af3c19b5a035b649d806608ad19',
    category: 'Utility',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: {
      name: 'Kroma',
      description: '',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/8db1b63b-ea9f-435b-bcb0-34417a1a9c97.png',
      organizationCoverImageUrl: '',
      socialLinks: {
        website: ['https://kroma.network'],
        farcaster: [],
        twitter: 'https://x.com/kroma_network',
        mirror: '',
      },
      team: ['602876', '217355', '662916'],
    },
    name: 'Native Account Abstraction on OP Stack',
    description:
      "Kroma Network has implemented Native Account Abstraction on the OP Stack and is currently operating a public devnet called Pioneer Alpha, which is open for anyone to test. Compared to ERC-4337, which relies on off-chain components, Native Account Abstraction offers advantages such as lower gas fees for users (approximately 40% reduction) and a more consistent experience for builders. Because of these benefits, we believe that Account Abstraction should be enshrined within the protocol, and we have been continuously working towards this goal.\n\nOne of the most important aspects is conducting all development processes in an open environment, and making it easy for anyone to test. To achieve this, Kroma team launched the public devnet Pioneer Alpha, which incorporates RIP-7560, RIP-7711, and RIP-7712 into the OP Stack. Additionally, we have developed an RIP-7560 compatible bundler in Golang, based on Stackup's bundler, and provide a Blockscout page and scripts that allow anyone to easily verify and test these implementations.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/f4561652-9847-4c8c-b744-43d0d91f0a4e.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/82a98589-84af-48d9-abd8-854ece2661a0.png',
    socialLinks: {
      website: ['https://docs.pioneer.kroma.network/'],
      farcaster: ['https://warpcast.com/kroma-network'],
      twitter: 'https://x.com/kroma_network',
      mirror: null,
    },
    team: null,
    github: [
      {
        url: 'https://github.com/kroma-network/7560-optimism',
        name: '7560-optimism',
        description:
          'OP Stack consensus client with necessary predeploy contracts for Native Account Abstraction, which is used in Pioneer Alpha.',
      },
      {
        url: 'https://github.com/kroma-network/7560-geth',
        name: '7560-geth',
        description:
          'OP Stack go-ethereum client with Native Account Abstraction, which is used in Pioneer Alpha.',
      },
      {
        url: 'https://github.com/kroma-network/rip7560-bundler',
        name: '7560-bundler',
        description: 'RIP-7560 compatible bundler at Pioneer Alpha.',
      },
      {
        url: 'https://github.com/kroma-network/rip7560-scripts',
        name: 'rip7560-scripts',
        description:
          'Simple scripts to test the functionalities of Native Account Abstraction at Pioneer Alpha.',
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://docs.pioneer.kroma.network/',
        name: 'Pioneer Alpha Docs',
        description: 'Full documentation about Pioneer Alpha',
      },
      {
        url: 'https://blog.kroma.network/deep-dive-into-pioneer-alpha-7fce8433dd97',
        name: 'Technical Deep Dive in Pioneer Alpha',
        description:
          'Article that demonstrates how Pioneer Alpha implements Native Account Abstraction and shows a replayable gas benchmark results between a Native AA transaction and ERC-4337 UserOp. ',
      },
      {
        url: 'https://blockscout.pioneer.kroma.network/',
        name: 'Pioneer Alpha Explorer',
        description:
          'Blockscout Explorer for simplified monitoring of RIP-7560 transactions.',
      },
      {
        url: 'https://github.com/ethereum-optimism/specs/discussions/202',
        name: 'Discussions on optimism specs GitHub',
        description:
          'Open discussion page on bringing Native Account Abstraction on OP Stack.',
      },
      {
        url: 'https://www.youtube.com/watch?v=2CINj63Akp0',
        name: 'Presentations',
        description:
          'Presentation video about Native Account Abstraction on OP Stack at Optimistic Gathering (EthCC).',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: null,
          link: null,
          amount: '5m-10m',
          date: '2022',
          details: '',
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
        'Work on core components of the OP Stack, including client implementations, modules, and modifications.',
      ],
      statement: [
        {
          answer:
            'While our work on the OP Stack has not yet reached a production level where it can deliver widespread benefits, it has already been invaluable to researchers and builders focused on AA. Our extensive R&D efforts have created a public platform for experimentation, such as our public Devnet Pioneer Alpha, where new concepts can be tested and validated. This environment, supported by [a dedicated group of 30 active members](https://t.me/rip7560_pioneer), has become a vital testing ground for gas benchmarks and the implementation of additional RIPs, such as RIP-7711 and RIP-7712. These contributions have supported the early-stage development and understanding of how Native AA can be effectively integrated into the OP Stack, laying the groundwork for future advancements in the space.',
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
        {
          answer:
            "Our project has been at the forefront of exploring Native Account Abstraction on the OP Stack. Our intention is to create a public platform for various experiments on Native AA, fostering exploration within the ecosystem. To support this goal, we launched a public Devnet, allowing anyone to engage with Native AA. This space, Pioneer Alpha, also includes an open-source bundler compatible with RIP-7560 and a native tracer integrated into the geth client, both essential tools for facilitating these tests.\n\nWe've conducted some experiments ourselves, including gas benchmarks, which showed that gas fees under RIP-7560 are reduced to 62% compared to ERC-4337, and the implementation of additional RIPs. \n\n![img](https://native-aa-gas-benchmark.s3.ap-northeast-2.amazonaws.com/benchmark.png)\n\nAs a part of our exploration, we implemented RIP-7711 to prevent DoS attacks to sequencer, and developed the RIP-7712 NonceManager predeploy contract to enable 2D nonce functionality for smart accounts.",
          question:
            'How has your project advanced the development of the OP Stack?',
        },
      ],
    },
  },
  {
    id: '0x6190ca70e5196f582a65d1f73236eff346b72cd922df3305da001bd34c17c348',
    applicationId:
      '0x6190ca70e5196f582a65d1f73236eff346b72cd922df3305da001bd34c17c348',
    projectId:
      '0x1ea2fc7183a8ad244a97ecc287ca922209274c11dd9e991a04315e8399e118fc',
    category: 'Utility',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: {
      name: 'Test in Prod (soon to be Sunnyside Labs)',
      description:
        "Test in Prod is a core development team of Optimism Collective. Test in Prod will soon to be rebranded to 'Sunnyside Labs'.",
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/5354c3c3-da28-4097-bb82-b89b630a3d3e.png',
      organizationCoverImageUrl: '',
      socialLinks: {
        website: ['testinprod.io', 'github.com/testinprod-io'],
        farcaster: [],
        twitter: 'https://x.com/testinprod_io',
        mirror: 'https://mirror.xyz/testinprod-io.eth',
      },
      team: ['811328', '849695', '284703', '849643', '849704'],
    },
    name: 'Asterisc',
    description:
      "Asterisc is an alternative fault-proof VM running RISC-V—initial code written by Protolambda. TiP, in collaboration with OP Labs, built and deployed Asterisc to OP Sepolia. Asterisc can allow a multi-proof system to OP Chains for better security and provide a future-proof alternative for MIPS (Cannon) as Asterisc runs RISC-V.\n\nThe multi-proof system was OP Stack's long-awaited vision and a crucial component of Stage 2 because it keeps the system sane when the primary implementation breaks. For that reason, Ethereum has long supported multi-client implementations, and in L2, we need a multi-proof system to fully achieve them.\n\nTest in Prod has been supporting OP Stack to pioneer the multi-client system. We helped execution clients diversify with OP Erigon and have also been working on fault-proof systems diversify with Asterisc.\n\nWe have been working on the following:\n- Upon Protolambda’s initial implementation, we finished implementing all required opcodes & fixed bugs.\n- Built test suites to run Asterisc against OP Sepolia & OP Mainnet.\n- Ran all blocks of OP Sepolia with Asterisc to verify its deployability on OP Sepolia.\n- Deployed Asterisc to OP Sepolia with cold path.\n- Implementing a different memory structure from Cannon using Radix trie so that Asterisc can save the system when there’s a problem with existing memory implementation.\n\n---\nHere are the commentaries for Asterisc:\n\nClabby (Senior Software Engineer from OP Labs): Asterisc is critical to the OP Stack’s multi-proof roadmap, serving as the compliment to cannon in the landscape of FPVMs. After the rollout of multi-proofs, it will add redundancy to the virtual machine component that runs the fault proof programs, reducing the likelihood of critical impact in the event of an issue with either the on-chain or off-chain FPVM implementations.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/a0697193-268a-411b-afba-8dee1ccb89b3.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/22dc56e6-a5af-4388-84fa-5d47485a6bd5.png',
    socialLinks: {
      website: [
        'https://github.com/ethereum-optimism/asterisc',
        'https://testinprod.io',
      ],
      farcaster: [],
      twitter: 'https://x.com/testinprod_io',
      mirror: 'https://mirror.xyz/testinprod-io.eth',
    },
    team: null,
    github: [
      {
        url: 'https://github.com/ethereum-optimism/asterisc',
        name: 'Asterisc Github Repository',
        description: '',
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://x.com/Optimism/status/1801329290329604312',
        name: 'Live interview on Optimism Twitter for fault-proof & Asterisc promotion.',
        description: '',
      },
      {
        url: 'https://x.com/Optimism/status/1800256934597304799',
        name: 'Shout-out tweet from Optimism for fault-proof design contributions.',
        description: '',
      },
      {
        url: 'https://github.com/ethereum-optimism/asterisc/blob/master/deployments/README.md#asterisc-stage-14-deployment-information',
        name: 'Asterisc Sepolia deployment informations for Stage 1.4 project.',
        description: '',
      },
      {
        url: 'https://github.com/ethereum-optimism/asterisc/tree/master/op-e2e',
        name: 'e2e test suite for Asterisc',
        description: '',
      },
      {
        url: 'https://gist.github.com/pcw109550/3adfc45bc9bee6b13562bf8d1c6d9f26',
        name: 'A log of Asterisc game on Sepolia.',
        description: '',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: null,
          link: null,
          amount: '273293.03',
          date: '',
          details: null,
        },
        {
          grant: 'foundation-grant',
          link: 'https://gov.optimism.io/t/welcoming-test-in-prod-to-the-optimism-collective/6944',
          amount: '5000000',
          date: '2023-08-30',
          details:
            'This is a core dev commitment grant for Test in Prod. 4 years vesting & one year cliff.',
        },
        {
          grant: null,
          link: null,
          amount: '1m-5m',
          date: '2022',
          details: 'Initial friends & family rounds to kick off Test in Prod.',
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
        'Work on core components of the OP Stack, including client implementations, modules, and modifications.',
      ],
      statement: [
        {
          answer:
            "Asterisc allows a multi-proof system to OP Chains for better security and provide a future-proof alternative for MIPS (Cannon) as Asterisc runs RISC-V.\n\nThe multi-proof system was OP Stack's long-awaited vision and a crucial component of Stage 2 rollup because it keeps the system sane when the primary implementation breaks. For that reason, Ethereum has long supported multi-client implementations, and in L2, we need a multi-proof system to fully achieve them.\n\nTest in Prod has been supporting OP Stack to pioneer the multi-client system. We helped execution clients diversify with OP Erigon and have also been working on fault-proof systems diversify with Asterisc.",
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            'Asterisc benefits the Collective the most because it opens the door for Stage 2 rollup with the multi-proof system. \n\nAsterisc also benefits developers because it allows them to run RISC-V programs on OP Chains when their programs are not compilable to MIPS or inefficient on MIPS.\n\n---\nHere are the commentaries for Asterisc:\n\nClabby (Senior Software Engineer from OP Labs): Asterisc is critical to the OP Stack’s multi-proof roadmap, serving as the compliment to cannon in the landscape of FPVMs. After the rollout of multi-proofs, it will add redundancy to the virtual machine component that runs the fault proof programs, reducing the likelihood of critical impact in the event of an issue with either the on-chain or off-chain FPVM implementations.',
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0x6272a864b7793e1a0ac1b8a2767366f56e8234cb969a7e9f3f21cd70d374a357',
    applicationId:
      '0x6272a864b7793e1a0ac1b8a2767366f56e8234cb969a7e9f3f21cd70d374a357',
    projectId:
      '0x7c2460f0e048edd08abb4279db8fc5318168145672399cb37c9f19c9381d5273',
    category: 'Utility',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: {
      name: 'EthStorage',
      description: '',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/aff6e73e-f3f5-49e7-8c25-707738dd526a.png',
      organizationCoverImageUrl: '',
      socialLinks: {
        website: [],
        farcaster: [],
        twitter: '',
        mirror: '',
      },
      team: ['245756', '498701', '438493'],
    },
    name: 'Dynamic Inbox Contract For OP Stack',
    description:
      'This feature aims to allow the batch inbox to be a contract, enabling customized batch submission conditions such as:\n\nRequiring the batch transaction to be signed by a quorum of sequencers in a decentralized sequencing network; or\nMandating that the batch transaction call a BLOB storage contract (e.g., EthStorage) with a long-term storage fee, which is then distributed to data nodes that prove BLOB storage over time.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/fa88a614-4de4-4ae0-9363-0b819540724c.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/6560734b-a095-4659-94ea-0e6dfa8373f6.png',
    socialLinks: {
      website: [],
      farcaster: [],
      twitter: null,
      mirror: null,
    },
    team: null,
    github: [
      {
        url: 'https://github.com/blockchaindevsh/optimism',
        name: 'changes for genesis inbox contract',
        description:
          'op-node & op-batcher changes: https://github.com/blockchaindevsh/optimism/compare/5137f3b74c6ebcac4f0f5a118b0f4909df03aec6...02e3b7248f1b590a2adf1f81488829760fa2ba03\n\n',
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://github.com/ethereum-optimism/specs/pull/284',
        name: 'spec for dynamic inbox contract',
        description:
          "Besides genesis inbox contract, we've also specified the required changes for dynamic inbox contract.",
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: 'token-house-mission',
          link: 'https://app.charmverse.io/op-grants/page-36156815313550994',
          amount: '30000',
          date: '2023-05-09',
          details:
            'During the process, we added the feature of genesis inbox contract to OP Stack. And after further discussing with Mark, we find it more valuable to allow existing OP Stack instances to migrate the inbox from EOA to contract.',
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
      ],
      statement: [
        {
          answer:
            'This feature aims to allow the batch inbox to be a contract, enabling customized batch submission conditions such as:\n\n1. Enable a decentralized sequencing network (such as Based rollup), which requires the batch transaction to be signed by a quorum of sequencers; or\n2. Mandate that the batch transaction call a BLOB storage contract (e.g., EthStorage) with a long-term storage fee, which is then distributed to data nodes that prove BLOB storage over time.\n\nFor the specific advancements, we have proposed a spec here:\n\nhttps://github.com/ethereum-optimism/specs/pull/284\n\nwhich receives positive feedback from Mark Tynes.\n\nIn addition, we have completed a reference implementation:\n\n1. [example inbox contract for EthStorage](https://github.com/blockchaindevsh/es-op-batchinbox/blob/main/src/BatchInbox.sol)\n2. [op-node & op-batcher changes](https://github.com/blockchaindevsh/optimism/compare/5137f3b74c6ebcac4f0f5a118b0f4909df03aec6...02e3b7248f1b590a2adf1f81488829760fa2ba03)',
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            'Quarkchain L2 has deployed a OP Stack testnet using the genesis inbox contract feature to permanently store BLOBs on EthStorage Network: https://github.com/ethstorage/pm/blob/main/L2/testnet_usage.md\n\nAnd after discussing with Mark, we think it can be more valuable to make it possible for existing OP Stack instances to also migrate to inbox contract, thus "Dynamic Inbox Contract". The next step is to add the feature to the official OP Stack upgrade in the future.',
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0x6605b6f2cb8bad86dd1d82061b0fb7333a6b8d31b9f8c05a2f47cb7d76d0b14f',
    applicationId:
      '0x6605b6f2cb8bad86dd1d82061b0fb7333a6b8d31b9f8c05a2f47cb7d76d0b14f',
    projectId:
      '0xbea008dac0a4a2d2cc88ed14468f7ce06b1a13d43ead38f31df3ca5f6d70d12e',
    category: 'Utility',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: {
      name: 'optimism-java',
      description:
        '# Introduction\nWe continue to build open source public goods to help the Ethereum and Optimism community get better and better.\n\n## Our Works\nWe have currently developed two important components of core OP Stack protocol:\n\n- [Hildr](https://github.com/optimism-java/hildr) is an optimism rollup node written in Java.\n\n- [Op-besu](https://github.com/optimism-java/op-besu) is an optimism execution client written in Java, a fork of [Besu](https://github.com/hyperledger/besu).\n\nIn addition, we have also developed OP Stack related tools.\n\n- [Blob-archiver-rs](https://github.com/optimism-java/blob-archiver-rs) is a service to archive and allow querying of all historical blobs from the beacon chain written in Rust.\n\n- [Superproof](https://github.com/optimism-java/dispute-explorer-frontend) is a fault proof explorer to visualize dispute game progress and statistics.\n\nMeanwhile, we also contributed in other community projects.\n\n- [Shisui](https://github.com/optimism-java/shisui) is an ethereum portal network client written in Go.\n\n- [Mev-share-java](https://github.com/optimism-java/mev-share-java) is a Java client library for Flashbots MEV-share Matchmaker.',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/9b5ba58e-c9ff-4b21-8b4c-4ab561b27b6b.png',
      organizationCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/b849eed4-c5b3-484e-b376-db756fb9e697.png',
      socialLinks: {
        website: ['https://optimism-java.github.io'],
        farcaster: [],
        twitter: 'https://x.com/optimism_java',
        mirror: '',
      },
      team: ['754190', '451368', '193400'],
    },
    name: 'blob-archiver-rs',
    description:
      'Blob-archiver-rs is a service to archive and allow querying of all historical blobs from the beacon chain written in Rust.\n\nWe are OptimismJ who continue to build open source public goods to help the Ethereum and Optimism community get better and better. Our main work is on OP Stack core protocols and ecosystem tools and libraries. You can view more detailed information on our official website https://optimism-java.github.io .',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/c42c7205-45f2-4541-a522-9575e70d19ae.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/648ed09d-2f51-4800-9d18-8d1bfda30f75.png',
    socialLinks: {
      website: ['https://optimism-java.github.io/blob-archiver-rs-docs'],
      farcaster: [],
      twitter: 'https://x.com/optimism_java',
      mirror: null,
    },
    team: null,
    github: [
      {
        url: 'https://github.com/optimism-java/blob-archiver-rs',
        name: '',
        description: '',
      },
    ],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: 'token-house-mission',
          link: 'https://app.charmverse.io/op-grants/blob-archiver-rs-a-robust-blob-archiver-service-in-rust-6388430437756178',
          amount: '10000',
          date: '2024-05-09',
          details: '',
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Work on core components of the OP Stack, including client implementations, modules, and modifications.',
      ],
      statement: [
        {
          answer:
            'Due to the fact that Blobs are retained on the mainnet for only 18 days, long-term Blob persistent storage is a crucial element for Rollup. At present, the OP Stack offers specialized support for a [Blob archiver](https://docs.optimism.io/builders/node-operators/management/blobs#configure-a-blob-archiver-archive-nodes), while Base provides a Go [implementation](https://github.com/base-org/blob-archiver) of this service. The Blob-archiver-rs is designed in accordance with the OP Stack and fully replicates the functions of the Go implementation. Currently, it supports both local file storage and AWS S3.',
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            '- All users utilizing Rust infrastructure, such as centralized exchanges (CEX), decentralized applications (Dapp), RaaS providers, and RPC providers, can run blob-archiver-rs, to utilize and integrate the OP Stack. \n- All Superchain members using OP Stack, as well as chains that fork OP Stack, can use the Blob-archiver-rs service to store Blob data for a long time.',
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0x78d76c8cd58f4334478c84da3080a9bd721c8463b1d3ff6d8f838821637419bb',
    applicationId:
      '0x78d76c8cd58f4334478c84da3080a9bd721c8463b1d3ff6d8f838821637419bb',
    projectId:
      '0xbcd609d06165ef58ca295b05c1c5a7bcbd500cc673f3fc4cbcb7b10774890b4a',
    category: 'Utility',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: {
      name: 'Borderless Developers Programme',
      description:
        "WHO WE ARE\nB<>rder/ess is a web3 not-for-profit started in 2022 that raises the next generation of web3 builders, Protocol builders, Smart Contract Developers, On-chain analysts, Cyber Security experts, Product Designers, and UX creatives from today's universities. \n\nWHAT WE DO\nWe do this through our (Proof of Work) PoWs;\n1. Building physical hubs on Campuses\n2. Organising quarterly Cipher Sessions\n3. Hosting web3 events\n4. Providing Crypto Education and Finance training in our communities\n5. Offering mentorship in different digital skill-set\n6. Establishing Campus Tech Clubs and\n7. Launching tech projects.\n\nOur most recent Impact Report with Opstack\nhttps://mirror.xyz/karlagod.eth/nVxg3z3Uk3N756UFdfydoyj21NCPBaZWpaHRuT9QTQI",
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/128790ad-24f8-4bb1-a6e0-57a7976ab484.png',
      organizationCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/4a1e8271-7bdf-4262-892e-086bfc6c579d.png',
      socialLinks: {
        website: ['https://borderless.cryptosmartnow.io/'],
        farcaster: ['https://warpcast.com/karlagod'],
        twitter: 'https://x.com/borderlessdev',
        mirror:
          'https://mirror.xyz/karlagod.eth/nVxg3z3Uk3N756UFdfydoyj21NCPBaZWpaHRuT9QTQI',
      },
      team: ['318515'],
    },
    name: 'B<>rder/ess OPstack Cipher Sessions',
    description:
      'Borderless holds Opstack Cipher Sessions in partnership with Superchains in the Optimism Ecosystem to provide education and inspiration resources aimed at producing developers every quarter who are competent in building solutions on the Superchain in a 4 Phase strategy:\n\nGoal 1: B<>rder/ess Web3 Tech Clubs and Integrations (Community & User Education Strategy on interacting with the Optimism Superchain ecosystem)\nGoal 2: OPstack Themed Developer Programme and Dev Bootcamp (Education)\nGoal 3: OPstack Themed Hackathons and Event (Deployment)\nGoal 4: Certification and Business Dev Mentorship (Go to Market strategies)\n\nThis strategy brought;\n\n- Builders\n- Users\n- Products\n- Marketing\n- Updates and contributions to OPstack deployment documentation and Repos.\n\n\nPlease read our latest impact report with OPstack in the Lisk Superchain here\nhttps://mirror.xyz/karlagod.eth/nVxg3z3Uk3N756UFdfydoyj21NCPBaZWpaHRuT9QTQI',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/6276bdf0-ffbc-407d-bb5f-5401600ada70.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/33a91e1b-2237-464a-bf5a-079f93889cf1.png',
    socialLinks: {
      website: [
        'https://borderless.cryptosmartnow.io/',
        'https://www.notion.so/B-rder-ess-3-0-Byte-Onchain-dea61442c60243c4b1ba43f69009372f',
      ],
      farcaster: ['https://warpcast.com/karlagod'],
      twitter: 'https://x.com/borderlessdev',
      mirror:
        'https://mirror.xyz/karlagod.eth/nVxg3z3Uk3N756UFdfydoyj21NCPBaZWpaHRuT9QTQI',
    },
    team: [
      {
        fid: 318515,
        object: 'user',
        pfp_url: 'https://i.imgur.com/4PE1Bzx.jpg',
        profile: {
          bio: {
            text: 'I build public goods💚\nBuilding B<>rde/ess Devs\nBusiness Developer🕴🏽\nMusic Artist, rapper, songwriter 🎤',
          },
        },
        username: 'karlagod',
        power_badge: false,
        display_name: 'KarlaGod',
        active_status: 'inactive',
        verifications: ['0x9dcba70b2dfe5807e2a847e065ebb666791f8b8a'],
        follower_count: 117,
        custody_address: '0x3cef7b010da55e1dbda3f164a990812d5781b383',
        following_count: 94,
        verified_addresses: {
          eth_addresses: ['0x9dcba70b2dfe5807e2a847e065ebb666791f8b8a'],
          sol_addresses: [
            'EvJjZqWMEG3JfhF5cCHpomZw2p5WfWdzmwp6kSfpgbiS',
            'A5Ga4nzGc9iC3dWrSSB5NuCauhi965TYQP7AAo8X1ow5',
          ],
        },
      },
    ],
    github: [],
    packages: [],
    links: [
      {
        url: 'https://mirror.xyz/karlagod.eth/nVxg3z3Uk3N756UFdfydoyj21NCPBaZWpaHRuT9QTQI',
        name: 'B<>rder/ess Impact Report with OPstack & Lisk Superchain',
        description:
          'We designed a Cipher Session that transitions web2 developers and business owners into the Optimism Superchain ecosystem.\n\nThis resulted in 22 Developers and 4 projects launching on the Optimism ecosystem between April 2024 and August 2024.',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.',
        'Work on core components of the OP Stack, including client implementations, modules, and modifications.',
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
      ],
      statement: [
        {
          answer:
            "**1. Increased Dev Familiarity with OP Stack:**\nExposure to New web2 Developers: At leats 22 web2 developers, 90% of whom were not previously familiar with OPstack or web3 now build with OPstack.\n\n**2. Increased Practical Applications:**\ni. Project Hacks and Deployments:\nAt least 4 New projects on the Lisk Superchain, built using OP Stack from the Cipher Session.\n\nii. New Smart Contract Development Styles:\nA student built a savings contract and used the Maths library to do the decimal place calculation interest for users, bypassing the temporary need for an oracle.\n\nWe've documented new Contract structures for Child/Parent contract development style for OPstack.\n\niii. New Protocol ideas like Co-operative protocols, Savings protocols introduced.\n\n**3 Updated Documentation and Educational Resources:**\n24 hours of extensive documentation and educational content, including video recordings, presentations, and tutorials, all tailored to the OP Stack and repurposed to short-form contents.\n",
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            '**1.  OP Stack Benefits**\ni. Adoption and Use Cases: Our work has expanded OP Stack’s reach by introducing it to new developers and businesses currently building on the Superchain, increasing the number of active projects and use cases built on OP Stack.\n\nii. Content and Documentation: The creation of educational content, documentation, and resources tailored to the OP Stack has enriched the Opstack ecosystem. These resources make it easier for future developers to learn and start building with OPstack.\n\niii. Web2 Devs Transitioning to web3\nOpstack being the first building blocks for indie devs and new experiments.\n\n**2. Superchain Benefits**\ni. Expansion of Developer/User Base: Our work increased the number of active contributors to the Lisk Superchain by 22 devs and 100+ users.\n\nii. Utility through Businesses: Our work increased the utility of the Lisk Superchain to a broader audience of businesses who wanted to expand their, payment, marketing and other business processes on-chain.\n',
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0x7ee54d5d8514a8be9172e4ce0dfb54cc3eba6cf57c88b85e76262dc307178832',
    applicationId:
      '0x7ee54d5d8514a8be9172e4ce0dfb54cc3eba6cf57c88b85e76262dc307178832',
    projectId:
      '0x5492d1d4695dcf3cce3c31eb9883535d34da6c85a4978b384c0ecb0f3b17fbe9',
    category: 'Utility',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: {
      name: 'Upnode',
      description:
        'Upnode provides an infrastructure for launching a full-stack OP Stack chain.',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/6fa57494-f966-451b-8f33-deea359565df.png',
      organizationCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/a687b332-8d00-4a50-a371-df7096b702bc.png',
      socialLinks: {
        website: ['https://upnode.org'],
        farcaster: [],
        twitter: 'https://x.com/upnodeIntern',
        mirror: null,
      },
      team: ['328679', '394600', '849514'],
    },
    name: 'Alt-DA Server & Translation Hub',
    description:
      'An Optimism Alt-DA server enables OP Stack chains to use third-party data availability providers with an on-chain translation system that converts Keccak256 commitments into provider-specific CIDs (content identifier hashes).\n\nThis Alt-DA server uses Keccak256 commitments instead of generic commitments, providing a security advantage. The challenging contract for Keccak256 commitments is well-implemented, audited, and battle-tested, whereas generic commitments often lack an approved challenging logic. This Keccak256 commitments approach is approved for joining the Superchain, as seen in the Redstone chain.\n\nCurrent supported data availability providers:\n- Celestia\n- IPFS\n- Arweave\n- File\n\nFor the technical specifications, please refer to the grant proposal: https://app.charmverse.io/op-grants/plasmada-translation-hub-1014033406866528',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/dcad57db-c8dc-4a36-a833-053e1734b344.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/7e38488c-729a-4a0a-80b1-890c81fa555a.png',
    socialLinks: {
      website: [],
      farcaster: [],
      twitter: null,
      mirror: null,
    },
    team: null,
    github: [
      {
        url: 'https://github.com/upnodedev/op-alt-da',
        name: 'Optimism Alt-DA',
        description:
          'An Optimism Alt-DA server enables OP Stack chains to use third-party data availability providers with an on-chain translation system that converts Keccak256 commitments into provider-specific CIDs (content identifier hashes).',
      },
      {
        url: 'https://github.com/upnodedev/op-alt-da-contract',
        name: 'Optimism Alt-DA Translation Hub Contract',
        description:
          'A smart contract for on-chain translation system that converts Keccak256 commitments into provider-specific CIDs (content identifier hashes).',
      },
    ],
    packages: [],
    links: [],
    contracts: [
      {
        address: '0x2F77fDf77E5a13092D08028188B40b691c41FbDe',
        deploymentTxHash:
          '0x680eb33738f5c619b51205f083eb5c84968c6fea971953f322ef334a3b1b1719',
        deployerAddress: '0x394A04a79143F162af51F3FEF5290dd30D0B67De',
        verificationProof:
          '0x1eb037880728603a89895e6c9e5127d4a7af8b3869efb5e35d4ca65c98a25af22e96711645583265abf57c2c1170ea6e9a378c400841c09f5d3b6284a6679e9d1b',
        chainId: 10,
      },
    ],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: 'token-house-mission',
          link: 'https://app.charmverse.io/op-grants/plasmada-translation-hub-1014033406866528',
          amount: '15000',
          date: '2024-05-09',
          details: 'PlasmaDA Translation Hub Cycle 22 Season 5',
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.',
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
      ],
      statement: [
        {
          answer:
            'An Optimism Alt-DA server enables OP Stack chains to use third-party data availability providers with an on-chain translation system that converts Keccak256 commitments into provider-specific CIDs (content identifier hashes).\n\nThis Alt-DA server uses Keccak256 commitments instead of generic commitments, providing a security advantage. The challenging contract for Keccak256 commitments is well-implemented, audited, and battle-tested, whereas generic commitments often lack an approved challenging logic. This Keccak256 commitments approach is approved for joining the Superchain, as seen in the Redstone chain.\n\nCurrent supported data availability providers:\n- Celestia\n- IPFS\n- Arweave\n- File',
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            "OP Stack chain operator benefits from our Alt-DA server implementation by having an easy and secure way to use third-party DA in their OP Stack chain with approved security in the data availability challenging logic available for Keccak256 commitment, which is approved for joining the superchain.\n\nWithout our Alt-DA implementation, OP Stack chains using generic commitments will lack the necessary data availability challenging logic required for Superchain integration.\n\nData availability providers benefit from our solution by having third-party integrate their DA with the OP Stack chain in a way that's approved for the Superchain.\n\nOP Labs gains from our technology by having a different view on integrating third-party DA without compromising security.",
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0x8f96355ae6573c6c606e2f5a71155344cc42afc853adc4f84933dc7cd00b2e9f',
    applicationId:
      '0x8f96355ae6573c6c606e2f5a71155344cc42afc853adc4f84933dc7cd00b2e9f',
    projectId:
      '0xd2c2e6a44a7e28aaa9e3f324ac6f0bd963501250af6be842ea8e036b60fc1e08',
    category: 'Utility',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: null,
    name: 'OP Stack Chains: Economics, Adoption and Activity Overview Dune Dashboards and Research',
    description:
      'sealaunch is onchain intel team dedicated in-depth onchain and Dune research for chains, protocols and dApps building on Ethereum, namely on the OP Stack. This project offers a comprehensive view of OP rollups that range from economic metrics benchmark, onchain activity cross-chain but also OP rollup specific and features that highlight the diversity of the OP Stack. Currently on the Top #10 Wizards on Dune.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/01d213eb-35fa-4485-9844-c38a816b0f67.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/76b97430-0103-4219-8003-018f11f1814f.png',
    socialLinks: {
      website: ['https://sealaunch.xyz/'],
      farcaster: ['https://warpcast.com/sealaunch'],
      twitter: 'https://x.com/sealaunch_',
      mirror: null,
    },
    team: [
      {
        fid: 11032,
        object: 'user',
        pfp_url: 'https://i.imgur.com/JJhA7OA.jpg',
        profile: {
          bio: {
            text: 'We are onchain data explorers\n \nsealaunch.xyz\nhttps://dune.com/sealaunch\nhttps://sealaunch.substack.com \nhttps://twitter.com/sealaunch_',
          },
        },
        username: 'sealaunch',
        power_badge: false,
        display_name: 'sealaunch.xyz',
        active_status: 'inactive',
        verifications: ['0x2462ff59e08d60ed5bd737caaa667f5fe435c358'],
        follower_count: 610,
        custody_address: '0x6b9770b771227f23dcc4cc4e0ddc0985ce7196ba',
        following_count: 472,
        verified_addresses: {
          eth_addresses: ['0x2462ff59e08d60ed5bd737caaa667f5fe435c358'],
          sol_addresses: [],
        },
      },
    ],
    github: [],
    packages: [],
    links: [
      {
        url: 'https://dune.com/sealaunch/rollups-profits',
        name: 'L2 Rollups Economics (P&L) - Optimism, Arbitrum, Base, zKsync, Zora Network',
        description:
          'We built a series of dashboards that give a cross-chain overview of the chains built on the OP Stack. This onchain data research works as a public good as it allows anyone to have a deep understanding of the economics, DEX activity, NFT activity and standard usage across rollups to better benchmark and understand the growth of the OP growth as an ecosytem.',
      },
      {
        url: 'https://dune.com/sealaunch/dex-cross-chain-metrics',
        name: 'DEX Overview - Cross-chain metrics',
        description: '',
      },
      {
        url: 'https://dune.com/sealaunch/nft-usage-evms',
        name: 'NFTs held per wallet - Cross chain analysis',
        description: '',
      },
      {
        url: 'https://dune.com/sealaunch/base-overview',
        name: 'Base Overview ',
        description:
          'We developed Dune dashboards for multiple OP rollups (Base, Zora and Mode) to build deeper data analysis specific to each rollup individual use-cases and adoption. Combined all these dune data research is a public good resource for these teams to highlight creators (e.g: Leaderboards of Zora Protocol Creators), understand main dApps (e.g.: Base DEX overview) or initial traction (e.g: Mode dashboard).',
      },
      {
        url: 'https://dune.com/sealaunch/dex-metrics-on-base',
        name: 'DEX metrics on Base - Top DEXs used and token pairs traded',
        description: '',
      },
      {
        url: 'https://dune.com/sealaunch/base-nfts-primary-market-mints',
        name: 'Base NFTs Primary Market (Mints)',
        description: '',
      },
      {
        url: 'https://dune.com/sealaunch/mode-network',
        name: 'MODE - The Modular DeFi L2',
        description: '',
      },
      {
        url: 'https://dune.com/sealaunch/zora-network',
        name: 'Zora Network - Protocol Overview',
        description: '',
      },
      {
        url: 'https://dune.com/sealaunch/zora-protocol-rewards',
        name: 'Zora Protocol Rewards',
        description: '',
      },
      {
        url: 'https://dune.com/sealaunch/zora-protocol-unclaimed-rewards',
        name: 'Zora Protocol Unclaimed Rewards',
        description:
          'The Zora specific Unclaimed Rewards Dune dashboard and analysis allowed us to identify a total of this protocol rewards unclaimed by Zora creators of ~746 ETH ($2,7M). We have reached out to some of the top wallet owners and $200k of Zora rewards were claimed because of our analysis. It continues to be used as a onchain data tool by Zora creators for "forgotten" balance on their Zora protocol accounts.',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
      ],
      statement: [
        {
          answer:
            'Our dashboards have helped Optimism, Base, Zora and Mode teams have onchain data resources and dashboards that help understand and highlight not only what is happening on their rollup specifically, but also on the OP stack as a whole. The cross-chain data research helps shows the diversity and success of these chains. Our data shows a thriving OP stack that helps attracts new builders looking to develop on a stack with verifiable adoption and activity.',
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            'Directly, it served dev and leadership teams of Base, Zora and Mode to use onchain data to prove a track record and showcase adoption. As well, as a granular understanding of activity on their L2s when comparing with other EVM L2s and other OP rollups. Additionally for Zora Creators specifically, our research on a Zora feature like its protocol rewards and as a direct result of our action of contacting creators with unclaimed rewards, benefited [companies and individual creators to claim their forgotten funds](https://x.com/sealaunch_/status/1802817823829368971) and a resource that is still available for any Zora account to check.\nIndirectly, all this onchain data resources can benefit builders that want to identify underserved users or verticals on a dynamic ecosytem like the OP Stack.',
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0x902bf20692598d573b33cf7d5006c2c5e488ecc7fbe4b972d67846e9fde5e65a',
    applicationId:
      '0x902bf20692598d573b33cf7d5006c2c5e488ecc7fbe4b972d67846e9fde5e65a',
    projectId:
      '0xf00518dc6abc147a7c46675cb76946afdd16868d7d4ab4689df0c48467158c26',
    category: 'Utility',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: {
      name: 'brainbot/Shutter',
      description: '',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/d7e880ed-d48a-4329-97a9-75f21d815def.png',
      organizationCoverImageUrl: '',
      socialLinks: {
        website: [],
        farcaster: [],
        twitter: '',
        mirror: '',
      },
      team: ['316218', '358280'],
    },
    name: 'Deployment of the Shutterized Optimism (SHOP) testnet.',
    description:
      "Shutter is a threshold encryption protocol with a wide variety of applications, including: malicious MEV prevention, censorship resistance, voting integrity, and gaming fairness. Most relevant for the OP Stack ecosystem is that we have built and deployed a dedicated OP Stack L2 testnet Shutterized Optimism (SHOP) with an in-protocol threshold encrypted mempool and are looking into generalizing this solution to more advanced cryptography primitives as well as deploying it across OP Stack networks.\n\nThe Shutterized Optimism testnet L2 launch on Sepolia marks the availability of a Shutterized encrypted mempool for the OP Stack, aiming to prevent front-running and provide a censorship-resistant trading environment.\n\nShutterized OP Stack L2s bring a host of benefits, including:\n\n* Enhanced trading safety and profitability by mitigating front-running.\n* Added (real-time) censorship resistance.\n* Reduced trust assumptions in sequencers through transaction encryption.\n* Potential compliance and regulatory benefits by limiting the sequencer's ability to manipulate transactions.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/6f475f6f-302e-4550-bff3-d77818728e62.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/7b830942-f99a-4f31-8938-ae1c671a6e42.png',
    socialLinks: {
      website: [
        'https://shutter.network/',
        'https://linktr.ee/ShutterNetwork',
        'https://blog.shutter.network/',
      ],
      farcaster: ['https://warpcast.com/shutter'],
      twitter: 'https://x.com/ShutterNetwork',
      mirror: null,
    },
    team: [
      {
        fid: 316218,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/640d4f8c-3010-4e02-f829-9fce174a5200/rectcrop3',
        profile: {
          bio: {
            text: 'Shutter protects you against sandwich attacks and voting whales. Join the movement to Shut Down Unfair Systems in crypto.',
          },
        },
        username: 'shutter',
        power_badge: false,
        display_name: 'Shutter',
        active_status: 'inactive',
        verifications: [],
        follower_count: 86,
        custody_address: '0x94827ef4f7b9f31a01a9e546b34e1adbce7e9c4d',
        following_count: 85,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
      {
        fid: 358280,
        object: 'user',
        pfp_url: 'https://i.imgur.com/NkyTUdc.jpg',
        profile: {
          bio: {
            text: 'COTABE - COllaborating To A Better Earth\n\n#ReFi, #DAOs, #impact investing, #social businesses, #behavioral science, #community.\n\nFundraising for Public Goods.',
          },
        },
        username: 'cotabe',
        power_badge: false,
        display_name: 'Cotabe',
        active_status: 'inactive',
        verifications: ['0xe64113140960528f6af928d7ca4f45d192286a7a'],
        follower_count: 24,
        custody_address: '0xf898e7f9e3aac2086fabd46e8609d0ab6154504e',
        following_count: 124,
        verified_addresses: {
          eth_addresses: ['0xe64113140960528f6af928d7ca4f45d192286a7a'],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        url: 'https://github.com/shutter-network/op-geth',
        name: 'OP Geth with encrypted mempool',
        description:
          'Fork of OP-Geth that includes the encrypted mempool integration into the state transition function\n',
      },
      {
        url: 'https://github.com/shutter-network/shopdemo',
        name: 'SHOP Demo dapp',
        description:
          'Shutter Optimism Demo dapp to showcase encrypted transactions on the shutterized Optimism testnet.',
      },
      {
        url: 'https://github.com/shutter-network/contracts',
        name: 'Shutter EVM Smart Contracts',
        description: 'Contracts for the encrypted mempool integration',
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://blog.shutter.network/shutterized-op-stack-testnet-shop-now-live-on-sepolia/',
        name: 'Deployment of the SHOP testnet blog post.',
        description:
          'This blog post has all the technical information, resources, links, a demo, reasoning and future steps.',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: 'token-house-mission',
          link: 'https://app.charmverse.io/op-grants/generalized-mempool-encryption-interface-for-op-stack-chains-and-deployment-of-a-mempool-encrypted-op-stack-testnet-using-threshold-encryption-8763406955381605',
          amount: '50000',
          date: '2024-05-08',
          details:
            'The scope and funding of this grant goes beyond only launching a Shuterized Optimism testnet. It also includes:\n* Measuring and evaluating the testnet.\n* Define a generalized mempool encryption interface.\n* Release the mainnet Shutterized Optimism.\n* Create a report.',
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Work on core components of the OP Stack, including client implementations, modules, and modifications.',
      ],
      statement: [
        {
          answer:
            'The Shutterized Optimism testnet L2 launch on Sepolia marks the availability of a Shutterized encrypted mempool for the OP Stack, aiming to prevent front-running and provide a censorship-resistant trading environment. \n\nThis is an important milestone for Shutter and, more importantly, for base layer neutrality on L2s. We are moving towards mainnet deployment and our collaboration with Mode. \n',
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            '- "The Optimism Developer Advisory Board views encrypted mempools as an important research area that can lead to better technical decentralization." This is a quote from brockelmore (https://gov.optimism.io/t/ready-to-vote-implement-a-prototype-of-an-op-stack-chain-with-mempool-encryption/7448/19?u=cotabe) from a post where the Developer Advisory Board voted unanimously to accept a Mission request to implement a Prototype of an OP Stack Chain with Mempool encryption. Brainbot/Shutter is executing this mission.\n\n- Mode (https://x.com/modenetwork/status/1757085779564609759) and other OP stack chains have expressed interest in getting shutterized to prevent censorship, front-running, and sandwich attacks. \n\nUltimately, end user are the prospective prime beneficiaries, because they will benefit from the front-running protection and real time censorship resistance.\n',
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0x907ab6a3f6b6e724797e52051ac04eb23025462f8d06866ee541c90681e0ec17',
    applicationId:
      '0x907ab6a3f6b6e724797e52051ac04eb23025462f8d06866ee541c90681e0ec17',
    projectId:
      '0xa88844cea135382e3484e39c3172033437121b35ca0bc8b10b9b8253984876b5',
    category: 'Utility',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: {
      name: 'Ethereum Attestation Service (EAS)',
      description:
        'Infrastructure public good for making attestations onchain or offchain about anything. \nPermissionless. Tokenless. Free to Use. Over 1M attestations have been made on the Superchain from entities like Coinbase, Gitcoin, and OP.\n\nEAS is natively integrated into OP Bedrock and linked by two predeploy addresses ensuring standardization across the Superchain for making attestations:\nhttps://github.com/ethereum-optimism/optimism/tree/3542398896d9faca6b379fe67e3985d722cf80b6/packages/contracts-bedrock/src/EAS\n\nPredeploy Addresses on OP Bedrock:\n- SchemaRegistry: 0x420....020\n- EAS: 0x420....021\n\nDid you know? The following schemas are used by OP for retro funding projects & applications:\nhttps://docs.optimism.io/chain/identity/schemas\n- Project & Organization Identifiers\n- Organization metadata\n- Project metadata\n- Retro Funding application\n- Retro Funding application approval/rejection\n- Retro Funding Rewards\n- Retro Funding badgeholders\n- Retro Funding Governance contribution\n- Governance Contribution',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/8a52a407-196f-440d-86b4-1e8e1b31c132.png',
      organizationCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/2c05a16b-8bdf-4a00-a5c6-68346dcd4d97.png',
      socialLinks: {
        website: ['https://attest.org'],
        farcaster: ['https://warpcast.com/~/channel/eas'],
        twitter: 'https://twitter.com/eas_eth',
        mirror: 'https://mirror.xyz/0xeee68aECeB4A9e9f328a46c39F50d83fA0239cDF',
      },
      team: ['9848'],
    },
    name: 'Ethereum Attestation Service (EAS)',
    description:
      'EAS is an infrastructure public good for making attestations onchain or offchain about anything. Attestations are digital signatures on structured pieces of data used to build more trust online and onchain. Over 1M+ attestations have been made in the Superchain from over 14k+ unique attesters.\n\nEAS is natively integrated into OP Bedrock and linked by two predeploy addresses:\nhttps://github.com/ethereum-optimism/optimism/tree/3542398896d9faca6b379fe67e3985d722cf80b6/packages/contracts-bedrock/src/EAS',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/e74ff6ef-578b-4dcb-b155-e663822b2f94.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/a447bb2c-d43d-433c-b66c-2506c12858f4.png',
    socialLinks: {
      website: ['https://attest.org', 'https://docs.attest.org'],
      farcaster: ['https://warpcast.com/~/channel/eas'],
      twitter: 'https://twitter.com/eas_eth',
      mirror: 'https://mirror.xyz/0xeee68aECeB4A9e9f328a46c39F50d83fA0239cDF',
    },
    team: [
      {
        fid: 9848,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/52721fff-e0a3-4ad8-c0cd-fe6e6aa74500/original',
        profile: {
          bio: {
            text: 'Core team @ Ethereum Attestation Service. Product person with some salty dev & design skills. \n\nhttps://attest.org\n\nChat: https://warpcast.com/~/channel/eas',
          },
        },
        username: 'bap',
        power_badge: true,
        display_name: 'bryce.base.eth',
        active_status: 'inactive',
        verifications: ['0x3e95b8e249c4536fe1db2e4ce5476010767c0a05'],
        follower_count: 755,
        custody_address: '0x6c425623823ab8500b3d10f9b15816364545ca86',
        following_count: 98,
        verified_addresses: {
          eth_addresses: ['0x3e95b8e249c4536fe1db2e4ce5476010767c0a05'],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        url: 'https://github.com/ethereum-attestation-service/eas-contracts',
        name: 'Ethereum Attestation Service',
        description:
          'This is the primary repo for all things Ethereum Attestation Service.',
      },
    ],
    packages: [
      {
        url: 'https://www.npmjs.com/package/@ethereum-attestation-service/eas-contracts',
        name: null,
        description: null,
      },
    ],
    links: [
      {
        url: 'https://docs.optimism.io/chain/addresses#op-mainnet-l2',
        name: 'EAS Predeploy Addresses on Optimism',
        description:
          'EAS is natively integrated into the OP Stack linked by two predeploy addresses. You can see the official contract addresses on the OP docs.\n\nOP Github with EAS natively integrated into Bedrock:\nhttps://github.com/ethereum-optimism/optimism/tree/3542398896d9faca6b379fe67e3985d722cf80b6/packages/contracts-bedrock/src/EAS\n\nPredeploy Addresses:\nSchemaRegistry: 0x4200000000000000000000000000000000000020\nEAS: 0x4200000000000000000000000000000000000021',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: null,
          link: null,
          amount: '219758',
          date: '',
          details: null,
        },
        {
          grant: null,
          link: null,
          amount: '44061',
          date: '',
          details: null,
        },
        {
          grant: 'foundation-mission',
          link: 'https://app.charmverse.io/op-grants/page-4929520669085159',
          amount: '50000',
          date: '2023-08-07',
          details:
            'This grant was awarded for continued enhancements of the EAS Attestation Explorer, an application built on top of the EAS contracts. ',
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
      ],
      statement: [
        {
          answer:
            'EAS is **[natively integrated into the OP Stack](https://github.com/ethereum-optimism/optimism/tree/36f093a10da09496c3ef5a706cd494a4e2a9b9bd/packages/contracts-bedrock/src/EAS)** for making onchain and offchain attestations.\n\nWhen a new chain joins the Superchain, **EAS is automatically included at Genesis via two predeploys**, standardizing schema registration and attestations for all builders.\n\nThis infra enables the Superchain to decentralize beyond money and assets, enabling use cases in provenance, authenticity, reputation, voting systems, and beyond.\n\n**Superchain  Stats (Oct 2023 - Aug 2024):**\n\n-   **1M+** attestations\n-   **572K+** unique addresses received attestations \n-  **14K** attesters\n    \n**OP Bedrock predeploys:**\n\n-   SchemaRegistry: [0x4200...0020](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000020)\n    \n-   EAS: [0x4200...00021](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000021)\n',
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            '## Attestations are rapidly being adopted across the Superchain\n\nSuperchain builders creating more trustful experiences in their products:\n-   **Coinbase:** Launched “Coinbase Verifications” for verified user attestations\n-   **Optimism:** Uses attestations for various Retro Funding use cases\n-   **Gitcoin Passport:** Built an oracle to attest to passport stamps & scores onchain\n-   **Centrifuge:** Integrated CB verifications for RWA lending markets\n-   **Devfolio:** - Launched an onchain quadratic voting system for Onchain Summer\n-   **Superhack:** - 69 teams developed novel use cases using EAS predeploys\n-   **ETHGlobal:** - Used attestations for in-person hacker interactions\n\n## EAS is critical infra for Retro Funding\n [**Several schemas are used by Optimism for Retro Funding**](https://docs.optimism.io/chain/identity/schemas): \n- Project/org identifiers and metadata\n- Applications, approvals, and rewards\n- Badgeholders & governance contributions',
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0x94af5fe205fbdfd29913aa243514bb6d3e2e1fe121aa2bd984f5eadbedbad751',
    applicationId:
      '0x94af5fe205fbdfd29913aa243514bb6d3e2e1fe121aa2bd984f5eadbedbad751',
    projectId:
      '0x3787feef9d17b0d7db30c90fb419f1e8b0587a60bc3031fd9452b1ef1ab77680',
    category: 'Utility',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: {
      name: 'brainbot/Shutter',
      description: '',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/d7e880ed-d48a-4329-97a9-75f21d815def.png',
      organizationCoverImageUrl: '',
      socialLinks: {
        website: [],
        farcaster: [],
        twitter: '',
        mirror: '',
      },
      team: ['316218', '358280'],
    },
    name: 'Feasibility study for Front-running protection via shielded mempool for the OP Stack using threshold encryption',
    description:
      'Shutter is a threshold encryption protocol with a wide variety of applications, including: malicious MEV prevention, censorship resistance, voting integrity, and gaming fairness.\n\nShielded Trading is currently the main focus of Shutter Network. We aim to provide a solution for front-running prevention and real-time censorship resistance through transaction encryption using threshold cryptography-based distributed key generation (DKG). An encrypted mempool prevents the parts of MEV that are considered malicious (front-running, sandwich attacks) while leaving the distribution of the benign types of MEV (arbitrage, liquidations).\n\nShutter performed a feasibility study for Front-running protection via shielded mempool for the OP Stack using threshold encryption (https://gov.optimism.io/t/shutterized-optimism-an-encrypted-mempool-for-the-op-stack/). The resulting document serves as a requirements and technical architecture document for a threshold encryption-based front-running protection mechanism for the OP Stack and Bedrock codebase, capitalizing on the capabilities of the Shutter Network.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/1126620e-157b-49ae-aee8-2f3bcb6e4574.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/84db88db-e6ab-4c71-842d-104715b9d889.png',
    socialLinks: {
      website: [
        'https://shutter.network/',
        'https://linktr.ee/ShutterNetwork',
        'https://blog.shutter.network/',
      ],
      farcaster: ['https://warpcast.com/shutter'],
      twitter: 'https://x.com/ShutterNetwork',
      mirror: null,
    },
    team: [
      {
        fid: 316218,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/640d4f8c-3010-4e02-f829-9fce174a5200/rectcrop3',
        profile: {
          bio: {
            text: 'Shutter protects you against sandwich attacks and voting whales. Join the movement to Shut Down Unfair Systems in crypto.',
          },
        },
        username: 'shutter',
        power_badge: false,
        display_name: 'Shutter',
        active_status: 'inactive',
        verifications: [],
        follower_count: 86,
        custody_address: '0x94827ef4f7b9f31a01a9e546b34e1adbce7e9c4d',
        following_count: 85,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
      {
        fid: 358280,
        object: 'user',
        pfp_url: 'https://i.imgur.com/NkyTUdc.jpg',
        profile: {
          bio: {
            text: 'COTABE - COllaborating To A Better Earth\n\n#ReFi, #DAOs, #impact investing, #social businesses, #behavioral science, #community.\n\nFundraising for Public Goods.',
          },
        },
        username: 'cotabe',
        power_badge: false,
        display_name: 'Cotabe',
        active_status: 'inactive',
        verifications: ['0xe64113140960528f6af928d7ca4f45d192286a7a'],
        follower_count: 24,
        custody_address: '0xf898e7f9e3aac2086fabd46e8609d0ab6154504e',
        following_count: 124,
        verified_addresses: {
          eth_addresses: ['0xe64113140960528f6af928d7ca4f45d192286a7a'],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        url: 'https://github.com/shutter-network/shutter',
        name: 'Shutter Network Repo',
        description:
          'This repository contains Shutter, a threshold encryption based front-running protection system for L2s.',
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://gov.optimism.io/t/shutterized-optimism-an-encrypted-mempool-for-the-op-stack/6387/4',
        name: 'Shutterized Optimism – An Encrypted Mempool for the OP Stack (feasibility study)',
        description:
          'This document serves as a requirements and technical architecture document for a threshold encryption-based front-running protection mechanism for the OP Stack and Bedrock codebase, capitalizing on the capabilities of the Shutter Network. The mechanism targets the reduction of front-running and MEV-related exploits in the Ethereum DeFi ecosystem by adopting a shielded mempool using threshold encryption.\n\nBy integrating this mechanism, we foresee OP Stack-based rollups becoming more secure and efficient layers, attracting safer trading for DeFi users, more robust censorship resistance, and increased profitability. Moreover, the sequencer operators will be able to claim immunity from front-running and censoring transactions by design, while retaining their ability to collect and/or distribute back-running related MEV.\n\nDecentralized Sequencer and MEVA designs are largely orthogonal to this proposal and complement it well.\n\nTable of Contents\n1. Executive Summary\n2. Table of Contents\n3. Introduction and Goals\n3.1. Problem Statement\n3.1.1. Malicious MEV and Censorship\n3.1.2. MEV and Censorship on Layer 2 (L2)\n3.1.3. Regulatory Implications\n3.2. MEV mitigation solutions overview\n3.3. OP Stack\n3.4 Shutter Network\n4. Participant Requirements\n4.1 End User\n4.2 Dapp Project\n4.3 Optimism Rollup Node\n4.4 Optimism Sequencer\n5.  Component Requirements\n5.1 Functional Requirements\n5.1.1 Optimism Rollup Node\n5.1.2 Optimism Sequencer Node\n5.1.3 Keyper\n5.1.4 Front End Library\n5.2 Non-functional Requirements\n6. Technical Architecture of Shutterized Optimism\n6.1 Overview\n6.2 Components\n6.2.1 Keyper Set\n6.2.2 Sequencer\n6.2.3 System Contracts\n6.2.4 Client Library\n6.3 Code Modifications\n6.3.1 Shutter Inbox Contract\n6.3.2 Keyper Set Contract\n6.3.3 Key Broadcast Contract\n6.3.4 Engine API\n6.3.5 op-node\n6.3.6 op-geth\n6.4 User Interaction\n6.5 Interaction With Decentralized Sequencers\n6.6 Finality Assumption\n6.7 Potential Issues and Solutions\n6.7.1 Liveness Failures\n6.7.2 Latency\n6.7.3 Sequencer Side-Channel Attack\n7. Design Options\n7.1 Block or Transaction Keys\n8. Future Considerations\n9. Conclusion',
      },
      {
        url: 'https://shutternetwork.discourse.group/t/the-viability-of-integrating-an-encrypted-mempool-as-proposed-by-shutter-into-the-op-stack/112?ref=blog.shutter.network',
        name: 'Assessing economic and IT feasibility.',
        description:
          'This post delves into the financial setbacks users endure due to MEV on Ethereum. Leveraging this data, we’ve extrapolated that around 20,000 transactions per week on Optimism could potentially reap the benefits of encryption. ',
      },
      {
        url: 'https://youtu.be/fO6zecX_6E8?ref=blog.shutter.network',
        name: 'Mock demonstration video.',
        description:
          'A demonstration of a mock rollup sequencer with a shutterized encrypted mempool showcasing a DeFi transaction.',
      },
      {
        url: 'https://shutterprotodao.discourse.group/t/decision-template-for-encrypted-mempool-integration-in-op-stack/113?ref=blog.shutter.network',
        name: 'Decision template for Encrypted Mempool Integration in OP Stack.',
        description:
          'This is a decision-making framework for future implementations of encrypted Mempool in the OP Stack.',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: 'token-house-mission',
          link: 'https://gov.optimism.io/t/draft-gf-phase-1-proposal-front-running-protection-via-shielded-mempool-for-op-stack-using-threshold-encryption/5036',
          amount: '30000',
          date: '2023-03-20',
          details:
            'Shutter Network was a recipient of a Cycle 10 grant for a feasibility study to implement front-running and censorship protection via a shielded/encrypted mempool by threshold encrypting transactions until they’re signed by the sequencer.\n\nReport of grant deliverables in the link.',
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
      ],
      statement: [
        {
          answer:
            'The feasibility study performed by brainbot serves as a requirements and technical architecture document for a threshold encryption-based front-running protection mechanism for the OP Stack and Bedrock codebase. \n\nThe resulting report (https://gov.optimism.io/t/shutterized-optimism-an-encrypted-mempool-for-the-op-stack/6387?ref=blog.shutter.network) provides a blueprint for OP Stack-based rollups to integrate mempol encryption becoming more secure and efficient layers, attracting safer trading for DeFi users, more robust censorship resistance, and increased profitability. Moreover, the sequencer operators will be able to claim immunity from front-running and censoring transactions by design, while retaining their ability to collect and/or distribute back-running related MEV.\n\nDecentralized Sequencer and MEVA designs are largely orthogonal to this proposal and complement it well.\n',
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            'The research has attracted the interest of several Optimism stakeholders, including the Developer Advisory Board, which voted unanimously to accept a Mission request to implement the research (https://gov.optimism.io/t/ready-to-vote-implement-a-prototype-of-an-op-stack-chain-with-mempool-encryption/7448/19?u=cotabe), and Mode, whom we partner with to launch the Shutterized Mode testnet to prevent censorship, front-running, and sandwich attacks. \n\nThis is especially relevant for the decentralization of the sequencer and to mitigate regulatory risks; for example, the Markets in Crypto-Assets Regulation MICA may treat front running and other types of MEV as “market abuse” (https://twitter.com/paddi_hansen/status/1795084797238256110)',
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0x95b0f6f25851da3d3ba17d4cd71e0925b7d234c1db32d5937c846d74ab62fb03',
    applicationId:
      '0x95b0f6f25851da3d3ba17d4cd71e0925b7d234c1db32d5937c846d74ab62fb03',
    projectId:
      '0x5742c7b3f7096fb9dd7a82cc62a4fda1e72aad9bdba9818c0d953fc82be9903d',
    category: 'Utility',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: {
      name: 'Spearbit/Cantina Security Services',
      description:
        'Incubated by Spearbit Labs, Cantina.xyz is a marketplace bringing together over 100 experienced security professionals and teams. We provide a wide range of code review and audit services to web3 clients, aiming to fortify the blockchain ecosystem. Our mission is to deliver top-tier security audits, continuous monitoring, advisory, and incident response services, ensuring organizations’ smart contracts and systems are thoroughly secured before deployment.\n\nWe have an established track record within the Optimism ecosystem, having successfully conducted multiple audits, including those for the Merkle Trie and Automation components. Our services align closely with Optimism’s goals by providing essential, high-quality security auditing and incident response solutions. ',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/1fba12f4-e663-47bf-92e5-63bb94c210c9.png',
      organizationCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/c8ac89b6-5f38-4aa1-8d43-5b797bdcacfb.png',
      socialLinks: {
        website: ['https://spearbit.com/', 'http://cantina.xyz'],
        farcaster: [],
        twitter: 'https://x.com/SpearbitDAO',
        mirror: 'https://spearbit.mirror.xyz/',
      },
      team: ['850761', '542384'],
    },
    name: 'Cantina.xyz - OP Stack Audits',
    description:
      'Cantina.xyz is a marketplace incubated by Spearbit Labs, bringing together over 100 experienced security professionals and teams. We provide a wide range of code review and audit services to web3 clients, aiming to fortify the blockchain ecosystem. Our mission is to deliver top-tier security audits, continuous monitoring, advisory, and incident response services, ensuring organizations’ smart contracts and systems are thoroughly secured before deployment.\n\n\nWe have an established track record within the Optimism ecosystem, having successfully conducted multiple audits, including those for the OP Stack. Our services align closely with Optimism’s goals by providing essential, high-quality security auditing and incident response solutions. ',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/2214b43d-e761-4d05-a3e2-6a83128bab65.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/812335c7-28b8-48e0-8d55-b3ddda4e4e6e.png',
    socialLinks: {
      website: ['https://cantina.xyz/', 'https://spearbit.com/'],
      farcaster: [],
      twitter: 'https://x.com/cantinaxyz',
      mirror: 'https://cantina.mirror.xyz/',
    },
    team: null,
    github: [],
    packages: [],
    links: [
      {
        url: 'https://cantina.xyz/portfolio/c185d7eb-d80b-49d4-8141-44e122c6fee4',
        name: 'OP Stack Audit 1',
        description:
          'We conducted a security audit for the OP Stack. The audit was carried out between January 22, 2024, and February 5, 2024, by two primary security researchers, cccz and Jeiwan, along with an associate researcher, Christos Pap. The audit did not uncover any critical, high, or medium-risk vulnerabilities. However, seven low-risk and seven informational issues were identified. None of these issues were fixed, but the team acknowledged all.\n\nThe audit also evaluated gas optimizations, and no concerns were noted.\n\nKey Audit Results:\n\n    Critical Risk: 0 issues\n    High Risk: 0 issues\n    Medium Risk: 0 issues\n    Low Risk: 7 issues (acknowledged, not fixed)\n    Informational: 7 issues (acknowledged, not fixed)\n    Gas Optimizations: No issues\n\nWe can provide the report upon request.',
      },
      {
        url: 'https://cantina.xyz/portfolio/db3f43ae-ffa4-4d5a-8316-707e0cb6700d',
        name: 'Optimism EAS Audit',
        description:
          'We conducted a security audit for Optimism’s EAS. From August 22 to August 25, 2023. This audit, categorized under Cantina Reviews, was led by the senior security researcher 0xRajeev, with junior researcher Christos Pap assisting.\n\nThe audit found no critical, high, or medium-risk vulnerabilities. However, it uncovered five low-risk issues, of which two were fixed, and three were acknowledged. Additionally, five informational issues were identified, with four being fixed and one acknowledged. Importantly, five gas optimization opportunities were highlighted, and all were addressed and fixed.\n\nKey Audit Results:\nCritical Risk: 0 issues\nHigh Risk: 0 issues\nMedium Risk: 0 issues\nLow Risk: 5 issues (2 fixed, 3 acknowledged)\nInformational: 5 issues (4 fixed, 1 acknowledged)\nGas Optimizations: 5 issues (all fixed)\n\nWe can provide the report upon request.',
      },
      {
        url: 'https://cantina.xyz/competitions/d47f8096-8858-437d-a9f5-2fe85ac9b95e',
        name: 'Optimism Safe Extensions Competition',
        description:
          'Cantina.xyz participated in and was awarded in the Optimism Safe Extensions competition. This competition, held between May 6, 2024, and May 10, 2024, focused on reviewing the security of Safe Modules and the Safe Guard for the Security Council Safe, which handles upgrades to OP Mainnet and other chains within the Superchain.\n\nOur participation involved analyzing key components like the LivenessModule, LivenessGuard, and DeputyGuardianModule, deployed on Sepolia. Our review contributed to ensuring that these critical systems were free from vulnerabilities such as:\n\n    Bypassing authorization.\n    Bricking the Safe, which could prevent transaction execution.\n\nWe can provide the report upon request.',
      },
      {
        url: 'https://github.com/spearbit/portfolio/blob/master/pdfs/OptimismDrippie-Spearbit-Security-Review.pdf',
        name: 'Optimism Drippie Security Review',
        description:
          'The Optimism Drippie Security Review, carried out in October 2022, focused on auditing Drippie, a system designed to manage automated contract interactions. Drippie allows for conditional, automated execution of smart contract calls, referred to as "drips." These can be triggered based on specific conditions (called "dripchecks") and executed at set intervals. Drips can also transfer ETH, making the system useful for maintaining sufficient balances in addresses. The review specifically focused on ensuring the security of the system without reliance on external automation services, thus compartmentalizing trust assumptions.\n\nFindings:\n\n    Medium Risk:\n        Permitting Multiple Drip Calls Per Block: This vulnerability could potentially allow multiple drips to be executed within the same block, which was flagged as a security risk.\n\n    Low Risk:\n        Version Bump to Latest: The code was using outdated versions, and upgrading was recommended.\n        DoS from External Calls in Drippie.executable / Drippie.drip: External calls could be used to perform a denial-of-service attack.\n        Use call.value over transfer in withdrawETH: For better handling of ETH transfers, the use of call.value was recommended over transfer.\n        Input Validation Checks for Drippie.create: The lack of proper input validation could lead to unexpected behaviors.\n        Ownership Initialization and Transfer Safety in setOwner: Recommendations were made to improve safety checks when initializing and transferring ownership.\n        Unchecked Return and Handling of Non-standard Tokens in AssetReceiver: The contract didn’t adequately handle non-standard token behaviors.',
      },
      {
        url: 'https://cantina.xyz/portfolio/a18b37fe-425b-4a7c-b0b9-b11eaa24ee85',
        name: 'Security Audit for Omni-x',
        description:
          'The audit for Omni-x focused on reviewing the security of the Omni X Multisender, an omnichain gas top-up tool built for the Optimism ecosystem. This tool allows users to send gas between OP Stack chains and other EVM-compatible chains using LayerZero v2, promoting more efficient gas fee management. The audit ensures the system’s robustness as Omni X expands its infrastructure, improving cross-chain interactions within Optimism. The audit scope was small, involving a 2-3 day engagement to ensure security before the mainnet launch.',
      },
      {
        url: 'https://github.com/decentxyz?q=&type=all&language=&sort=',
        name: 'Security Audit for Decent.xyz',
        description:
          "For Decent.xyz we focused on securing its cross-chain transaction and swap protocols, enabling seamless transfers across L2s, L3s, and the broader OP stack. Decent.xyz provides an efficient way for users to swap tokens while executing smart contract functions, reducing friction in cross-chain interactions. The audit enhanced the project's safety and scalability.",
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: null,
          link: null,
          amount: '400000',
          date: '',
          details: null,
        },
        {
          grant: null,
          link: null,
          amount: '145000',
          date: '',
          details: null,
        },
        {
          grant: null,
          link: null,
          amount: '1m-5m',
          date: '2023',
          details: 'Seed funding we received.',
        },
      ],
      revenue: [],
    },
    pricingModel: 'pay_to_use',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Security audits specifically on the OP Stack or its components.',
      ],
      statement: [
        {
          answer:
            "Cantina/Spearbit has advanced the development of the OP Stack by providing critical security audits and reviews to ensure the robustness and safety of its components. Our team has conducted multiple audits of the OP Stack, including security reviews of Optimism's EAS, which are crucial for cross-chain functionality and gas optimization. Through these audits, we have identified vulnerabilities, suggested optimizations, and collaborated with Optimism team to ensure that the OP Stack is secure and resilient.\n\nAdditionally, our continuous monitoring, advisory services, and incident response support help maintain the OP Stack's reliability, safeguarding its smart contracts and infrastructure.\n",
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            'The primary beneficiaries of our work on the OP Stack have been developers and projects building within the Optimism ecosystem, as well as the broader Optimism community. By conducting thorough security audits, we have ensured that developers can deploy secure smart contracts, reducing the risk of exploits and vulnerabilities.\n\nProjects like Omni-x and Decent.xyz, which rely on cross-chain capabilities and transaction efficiency, have directly benefited from our security reviews, enabling them to operate safely and scale their solutions across multiple chains.\n\nOur work has enhanced trust and reliability in the OP Stack, making it safer for both developers and users.',
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0x9932b50339f36c2327df7eac42965014d561c7401e6fdf50550727ad228f56f2',
    applicationId:
      '0x9932b50339f36c2327df7eac42965014d561c7401e6fdf50550727ad228f56f2',
    projectId:
      '0x66cce776ce6eaa99192120fc25b91ecc7b98e03210a08f0d3bfda82f542d3e1a',
    category: 'Utility',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: null,
    name: 'OP ENS Gateway by Opti.Domains',
    description:
      "Opti.Domains has developed an ENS Gateway implementation for OP Stack chains that supports various proofs, including those from L2OutputOracle, Dispute Game, and Anchor State. The appropriate proof is automatically selected based on the configuration of the OP Stack chain.\n\nThe Opti.Domains ENS Gateway automatically upgrades in response to the OP Stack's transition from L2OutputOracle to Dispute Game, requiring no manual intervention or updates to the verifier contract or gateway server.\n\nThe ENS Gateway, specifically the EVMGateway, enables trustless cross-chain data retrieval for ENS names deployed on Layer 2 networks like Optimism with a CCIP Gateway. When an ENS name lookup occurs, the resolver reverts with OffchainLookup containing the gateway URL. The client then contacts the gateway, which returns the requested data. This data is passed to a callback function on the resolver for verification before being returned to the client as the final result of the name lookup.\n\nOur ENS Gateway has a mechanism to ensure liveliness even in the event that the respected dispute game type has suddenly changed, as seen in the recent proposal, 'Upgrade Proposal #10: Granite Network Upgrade,' by storing a backup dispute game type and only trusting its anchor state.\n\nOpti.Domains has also developed social verification and attestation to EAS in collaboration with Bored Town. We are on our way to scaling ENS to OP. We have contributed to the ENS OP Gateway development, which is currently under review by ENS core developers.\n\nThe Namespace team has expressed interest and reached out to us with questions about using our OP ENS Gateway. Additionally, several teams have participated in discussions regarding the development of our OP ENS Gateway.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/8f6ad6e0-029a-4f59-b1d2-c7885248b99a.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/135853fe-2393-4a0a-a959-044ff973fcf0.png',
    socialLinks: {
      website: ['https://opti.domains'],
      farcaster: ['https://warpcast.com/optidomains.eth'],
      twitter: 'https://x.com/optidomains',
      mirror: null,
    },
    team: [
      {
        fid: 328679,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/249df6fc-9146-4686-bfca-d0697b5b3100/original',
        profile: {
          bio: {
            text: 'Just another dev',
          },
        },
        username: 'chomtana.eth',
        power_badge: false,
        display_name: 'Chomtana',
        active_status: 'inactive',
        verifications: [
          '0xf01dd015bc442d872275a79b9cae84a6ff9b2a27',
          '0x5f4bcccb5c2cbb01c619f5cfed555466e31679b6',
        ],
        follower_count: 27,
        custody_address: '0xf4c9386954e0380b53fd5ea4c3bc0bc5e058b0cf',
        following_count: 82,
        verified_addresses: {
          eth_addresses: [
            '0xf01dd015bc442d872275a79b9cae84a6ff9b2a27',
            '0x5f4bcccb5c2cbb01c619f5cfed555466e31679b6',
          ],
          sol_addresses: [],
        },
      },
      {
        fid: 452279,
        object: 'user',
        pfp_url: 'https://i.imgur.com/HzSd1nL.png',
        profile: {
          bio: {
            text: 'Superchain ENS L2 Domains | Connecting social profiles and wallet addresses to superchain and ENS | OP Grantee',
          },
        },
        username: 'optidomains.eth',
        power_badge: false,
        display_name: 'Opti.Domains',
        active_status: 'inactive',
        verifications: [
          '0x8b6c27ec466923fad66ada94c78aa320ea876969',
          '0x771deedc295e13728af514a761dc7082fcccec96',
          '0xef9f1a1ac2051adc4aafc67b78d5d0df959f0d8d',
        ],
        follower_count: 8,
        custody_address: '0x038b46cf28738552577b3614012865b82781cf47',
        following_count: 66,
        verified_addresses: {
          eth_addresses: [
            '0x8b6c27ec466923fad66ada94c78aa320ea876969',
            '0x771deedc295e13728af514a761dc7082fcccec96',
            '0xef9f1a1ac2051adc4aafc67b78d5d0df959f0d8d',
          ],
          sol_addresses: [],
        },
      },
      {
        fid: 394600,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/c0fd3b12-ec64-4d77-f83b-c1c36aa41c00/original',
        profile: {
          bio: {
            text: "I'm Petch nice to meet you all.",
          },
        },
        username: 'poonpetch',
        power_badge: false,
        display_name: 'Poonpetch.29',
        active_status: 'inactive',
        verifications: ['0x8abbbae6cf196701b9d4be696cdd418560e5fca3'],
        follower_count: 21,
        custody_address: '0x115a588b55d7ef0647ac993dc8c888a362962c5d',
        following_count: 93,
        verified_addresses: {
          eth_addresses: ['0x8abbbae6cf196701b9d4be696cdd418560e5fca3'],
          sol_addresses: [],
        },
      },
      {
        fid: 468611,
        object: 'user',
        pfp_url: 'https://i.imgur.com/dypJ3AO.jpg',
        profile: {
          bio: {
            text: 'Hello',
          },
        },
        username: 'chinapanda',
        power_badge: false,
        display_name: 'Chinapanda',
        active_status: 'inactive',
        verifications: ['0x1a29ece825678e276eb46a1ed1b804c916f064b6'],
        follower_count: 8,
        custody_address: '0xfe63d137443163ec67e3ae4858b48a860024aee9',
        following_count: 74,
        verified_addresses: {
          eth_addresses: ['0x1a29ece825678e276eb46a1ed1b804c916f064b6'],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        url: 'https://github.com/Opti-domains/ens-diamond-resolver-v1',
        name: '',
        description: '',
      },
      {
        url: 'https://github.com/Opti-domains/modular-ens-contracts',
        name: '',
        description: '',
      },
      {
        url: 'https://github.com/Opti-domains/dispute-game-lookup',
        name: 'Dispute Game Lookup Contract',
        description:
          'A library to look up the latest dispute game and check the expiration date.',
      },
      {
        url: 'https://github.com/Opti-domains/optidomains-ens-contracts',
        name: '',
        description: '',
      },
      {
        url: 'https://github.com/Opti-domains/evmgateway',
        name: 'Opti.Domains ENS Gateway',
        description:
          'Contributed to the ENS Gateway development for OP Verifier contracts and OP Gateway',
      },
    ],
    packages: [
      {
        url: 'https://www.npmjs.com/package/@optidomains/rainbowkit',
        name: null,
        description: null,
      },
      {
        url: 'https://www.npmjs.com/package/@optidomains/wagmi',
        name: null,
        description: null,
      },
      {
        url: 'https://www.npmjs.com/package/@optidomains/wagmi-core',
        name: null,
        description: null,
      },
      {
        url: 'https://www.npmjs.com/package/@optidomains/passport-discord',
        name: null,
        description: null,
      },
    ],
    links: [
      {
        url: 'https://discuss.ens.domains/t/op-fault-proof-upgrade-break-op-verifier-and-op-gateway-implementation-in-the-evm-gateway/18973',
        name: 'Discussion in the ENS DAO about the impact of Fault Proof on the ENS Gateway',
        description:
          'We opened a discussion and started the contribution long before the merge happened in the OP Mainnet.',
      },
      {
        url: 'https://github.com/ensdomains/evmgateway/pull/45',
        name: 'Pull Request to the Official EVM Gateway',
        description:
          'Opened a pull request to merge our OP ENS Gateway implementation with the official EVM Gateway repository.',
      },
    ],
    contracts: [
      {
        address: '0xB02EDc247246ACD78294c62F403B3e64D5917031',
        deploymentTxHash:
          '0xd2135285201773ee33c8e67f1b1d94cf2dccda141cd49fa9ce24db8f9da8271f',
        deployerAddress: '0x888811AC3DC01628eBD22b1Aa01a35825aD997e8',
        verificationProof:
          '0xbf7d6aad8cff557ff2d821cc79619f976c617f1fa9039de111cbc37908f4233d07a91079c46be162b85d14924c62a12a8e3eae470e5319a22e7bae0c8205f5d11c',
        chainId: 10,
      },
      {
        address: '0xB02EDc247246ACD78294c62F403B3e64D5917031',
        deploymentTxHash:
          '0x9aa99938d9383700de6a3862c5b9146eca8bd1c1904afa222c1e1c6d931f52b9',
        deployerAddress: '0x888811AC3DC01628eBD22b1Aa01a35825aD997e8',
        verificationProof: '0x0',
        chainId: 8453,
      },
      {
        address: '0xB02ED980693e14E082F0A3A33060046Ae8495EB2',
        deploymentTxHash:
          '0xfdc6f5a7f705db75e4d2d26df0531b2de127278555ba34feac4938316a88ffaa',
        deployerAddress: '0x888811AC3DC01628eBD22b1Aa01a35825aD997e8',
        verificationProof: '0x0',
        chainId: 10,
      },
      {
        address: '0xB02ED980693e14E082F0A3A33060046Ae8495EB2',
        deploymentTxHash:
          '0xdf8fb5f5426e65be6cbce171ef364658eb629d86388130cf0a2c976da7eb5ee4',
        deployerAddress: '0x888811AC3DC01628eBD22b1Aa01a35825aD997e8',
        verificationProof: '0x0',
        chainId: 8453,
      },
      {
        address: '0x888811225d6751A0cf8a9F7fa6a77f4F1EF69DC9',
        deploymentTxHash:
          '0xd311bfcd0d07b60d82c6184a6771234786dd8b61ad4cbfd433520f3f551932ad',
        deployerAddress: '0x888811AC3DC01628eBD22b1Aa01a35825aD997e8',
        verificationProof: '0x0',
        chainId: 10,
      },
      {
        address: '0x88881190D24e8ecA11F0262972cff8081b2AFc45',
        deploymentTxHash:
          '0x8f3b7264fbe4e0e706c80b2c8d2d3174d0a8d761089186b73a23109491476b7f',
        deployerAddress: '0x888811AC3DC01628eBD22b1Aa01a35825aD997e8',
        verificationProof: '0x0',
        chainId: 10,
      },
      {
        address: '0x888811225d6751A0cf8a9F7fa6a77f4F1EF69DC9',
        deploymentTxHash:
          '0xdaf855961076f8b41b104b8c923906cbe7236a9cea9f47c3afbd33eedbc4521f',
        deployerAddress: '0x888811AC3DC01628eBD22b1Aa01a35825aD997e8',
        verificationProof: '0x0',
        chainId: 8453,
      },
      {
        address: '0x88881190D24e8ecA11F0262972cff8081b2AFc45',
        deploymentTxHash:
          '0x06d0b9cc8b2902f55f0bf5fcf27fe604b214155872bc01929f673c6e1cc9609c',
        deployerAddress: '0x888811AC3DC01628eBD22b1Aa01a35825aD997e8',
        verificationProof: '0x0',
        chainId: 8453,
      },
    ],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: null,
          link: null,
          amount: '22117',
          date: '',
          details: null,
        },
        {
          grant: null,
          link: null,
          amount: '9070',
          date: '',
          details: null,
        },
        {
          grant: 'token-house-mission',
          link: 'https://gov.optimism.io/t/ready-gf-phase-1-proposal-opti-domains-interoperable-domain-name-for-the-op-stack/5510',
          amount: '50000',
          date: '2023-04-09',
          details: '',
        },
        {
          grant: 'token-house-mission',
          link: 'https://app.charmverse.io/op-grants/opti-domains-ens-l2-development-9893299892995353',
          amount: '50000',
          date: '2024-05-09',
          details: '',
        },
      ],
      revenue: [],
    },
    pricingModel: 'freemium',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
      ],
      statement: [
        {
          answer:
            "Opti.Domains has developed an ENS Gateway implementation for OP Stack chains that supports various proofs, including those from L2OutputOracle, Dispute Game, and Anchor State. The appropriate proof is automatically selected based on the configuration of the OP Stack chain.\n\nThe Opti.Domains ENS Gateway automatically upgrades in response to the OP Stack's transition from L2OutputOracle to Dispute Game, requiring no manual intervention or updates to the verifier contract or gateway server.\n\nOur ENS Gateway has a mechanism to ensure liveliness even in the event that the respected dispute game type has suddenly changed, as seen in the recent proposal, 'Upgrade Proposal #10: Granite Network Upgrade,' by storing a backup dispute game type and only trusting its anchor state.",
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            '- Teams building an ENS identity and infrastructure on OP Stack chains do not need to reimplement the gateway and verifier while having a fully verifiable and decentralized way to launch their identity with ENS subdomains or similar solutions.\n- ENS Labs benefit from not having to spend man-days researching and developing the EVM Gateway on OP Stack chains.\n- The Namespace team has expressed interest and reached out to us with questions about using our OP ENS Gateway. Additionally, several teams have participated in discussions regarding the development of our OP ENS Gateway.',
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0x9b70e4a6f08471455d1d674f4e430da7b4fd43848002b47d1b6e1c1a1e0a36db',
    applicationId:
      '0x9b70e4a6f08471455d1d674f4e430da7b4fd43848002b47d1b6e1c1a1e0a36db',
    projectId:
      '0x52d53d44856f5a356053e55e3ad339d7207486b0210fe48aa2c1a0ec79c55d9c',
    category: 'CeFi',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: {
      name: "Louie's Kingdom",
      description: 'The dream team',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/c31efc70-9663-443c-a3ed-501ba694b1e6.png',
      organizationCoverImageUrl: null,
      socialLinks: {
        website: [],
        farcaster: [],
        twitter: null,
        mirror: null,
      },
      team: ['4289', '191212'],
    },
    name: 'Test Project',
    description: 'This new',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/9f096f4a-099d-44e6-bbe8-262f3af73ee0.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/decabfe9-ebc2-4e01-89ff-1028dab807ca.png',
    socialLinks: {
      website: [],
      farcaster: [],
      twitter: null,
      mirror: null,
    },
    team: null,
    github: [''],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: 'token-house-mission',
          link: 'https://retrofunding.optimism.io/projects/0xb8ea29378df33c1bcb64c221a1e2e342a99d3fad8233dcec94eddd137a3eab05/grants',
          amount: '10000',
          date: '2023-05-22',
          details: '',
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
      ],
      statement: [
        {
          answer:
            'ddd projectprojectprojectprojectproject\nMy project is good project\nMy project is good project\nMy project is good project\nMy project is good project\nMy project is good project\nMy project is good projectMy project is good project',
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            'My project is good project\nMy project is good project\nMy project is good project\nMy project is good project\nMy project is good project\nMy project is good project\nMy project is good project\nMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project i',
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0xa36ae760edb91ba8bfcc2b52b664fb4731ec09b78033b1bbec9d83d167d590e8',
    applicationId:
      '0xa36ae760edb91ba8bfcc2b52b664fb4731ec09b78033b1bbec9d83d167d590e8',
    projectId:
      '0x9b6e73ac9e887b808c56aba853cfadad39df635d11bd5a9d6697f2e2658f4b5c',
    category: 'Utility',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: null,
    name: 'OP Stack Individual contributions',
    description: 'Web 3 enthusiast and indie developer. ',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/872bb13b-ee5e-41fc-baab-2c35063af98e.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/69471b4a-baca-4669-8bc8-dd3e040a94f5.png',
    socialLinks: {
      website: ['https://github.com/kelreel'],
      farcaster: ['https://warpcast.com/kelreel'],
      twitter: 'https://x.com/0x_kir',
      mirror: null,
    },
    team: [
      {
        fid: 391850,
        object: 'user',
        pfp_url: 'https://i.imgur.com/68Orx3h.jpg',
        profile: {
          bio: {
            text: '',
          },
        },
        username: 'kelreel',
        power_badge: false,
        display_name: 'KRL 🥑',
        active_status: 'inactive',
        verifications: ['0xf8502395e0eab3a8381f941a1e550e1e5478eaf5'],
        follower_count: 670,
        custody_address: '0xcdfa9544fc48dfaef23d964b3e2f36e0cf16eca7',
        following_count: 611,
        verified_addresses: {
          eth_addresses: ['0xf8502395e0eab3a8381f941a1e550e1e5478eaf5'],
          sol_addresses: ['2NBCwFugeEP5qsEvgy9WF9vHVb9N4veZr6ydyRzcNfUv'],
        },
      },
    ],
    github: [],
    packages: [],
    links: [
      {
        url: 'https://github.com/ethereum-optimism/ecosystem/pull/213',
        name: '[OP-Ecosystem repo] app template fixes and new styles',
        description:
          'Refactoring and improving the layout of the application template. Fix configs and improve chain connection (wagmi).',
      },
      {
        url: 'https://github.com/ethereum-optimism/ecosystem/pull/193',
        name: '[OP-Ecosystem repo]  fix wallet connect, docs, env, examples',
        description:
          'Wallet connection fix, env and some documentation update.',
      },
      {
        url: 'https://github.com/ethereum-optimism/scaffold-op/pull/4',
        name: '[Scaffold-op repo]: responsive components',
        description: 'Application template better responsiveness, fix links.',
      },
      {
        url: 'https://github.com/ethereum-optimism/scaffold-op/pull/3',
        name: '[Scaffold-op repo]: update docs & contributing',
        description: '',
      },
      {
        url: 'https://github.com/base-org/web/pull/372',
        name: '[base-web repo]: fix layout',
        description: '',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Services for deploying and hosting an OP Chain.',
        'Work on core components of the OP Stack, including client implementations, modules, and modifications.',
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
      ],
      statement: [
        {
          answer:
            'My contributions to the codebase:\n- improved template app design & layouts (op-scaffold, ecosystem/app)\n- fixed wallet connection errors, interactions with rpc (wagmi) in some places (op-scaffold, ecosystem/app)\n- small fixes related to the superchain console (ecosystem)\n- improved env and documentation\n\nDetails are in the project links.',
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            'New and current app developers on the OP stack will be able to scaffold new applications faster, with a better initial code base and past bugs fixed. Updated documentation details will help resolve issues more quickly when creating new applications.',
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0xa5446a9856ac6e5de47d9a75c9b5633f60a40c07fe23297863b794ca8842984c',
    applicationId:
      '0xa5446a9856ac6e5de47d9a75c9b5633f60a40c07fe23297863b794ca8842984c',
    projectId:
      '0x66a3f6245dc3ac966d3ed9dd8c076a723cfc3aaaf5ea3721c634d46c3be46331',
    category: 'Cross Chain',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: {
      name: 'Wonderland',
      description: '',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/ec7c1348-9ce1-4672-bec7-1839943e2ec2.png',
      organizationCoverImageUrl: '',
      socialLinks: {
        website: [],
        farcaster: [],
        twitter: '',
        mirror: '',
      },
      team: ['17851', '19867'],
    },
    name: 'opUSDC',
    description:
      'Bridged USDC Standard for the OP Stack allows for an efficient and modular solution for expanding the Bridged USDC Standard across the Optimism ecosystem.\nChain operators can use the Bridged USDC Standard for the OP Stack to get bridged USDC on their OP Stack chain while also providing the optionality for Circle to seamlessly upgrade bridged USDC to native USDC and retain existing supply, holders, and app integrations.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/783c8899-4a1c-45e8-9d97-35977c6c68b7.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/6730b8ba-2008-4aad-b1fa-61e2060d0c48.png',
    socialLinks: {
      website: ['https://defi.sucks/'],
      farcaster: [],
      twitter: 'https://x.com/DeFi_Wonderland',
      mirror: null,
    },
    team: [
      {
        fid: 17851,
        object: 'user',
        pfp_url: 'https://i.imgur.com/fTM4LF9.jpg',
        profile: {
          bio: {
            text: 'Architect @ Wonderland\nhttps://defi.sucks',
          },
        },
        username: 'skeletor',
        power_badge: false,
        display_name: 'Skeletor Spaceman ',
        active_status: 'inactive',
        verifications: [],
        follower_count: 42,
        custody_address: '0x5d32584b7069c3401f5cb74231a4e562d7436b0b',
        following_count: 9,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
      {
        fid: 19867,
        object: 'user',
        pfp_url: 'https://i.imgur.com/54w3Fqu.jpg',
        profile: {
          bio: {
            text: 'Researcher at @DeFi_Wonderland and OP delegate w/ @SEEDLatam\n\nProudly OP Citizen.',
          },
        },
        username: 'joxes',
        power_badge: false,
        display_name: 'Joxes',
        active_status: 'inactive',
        verifications: [],
        follower_count: 55,
        custody_address: '0xe6f8a2cf77c2122d309b9375102b6f09334c2867',
        following_count: 49,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        url: 'https://github.com/defi-wonderland/opUSDC',
        name: 'opUSDC',
        description:
          'The Bridged USDC Standard in the OP Stack repository. This repository includes the referenced implementation, setup guide, tests, audit, and more.',
      },
    ],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
      ],
      statement: [
        {
          answer:
            'To date, the primary beneficiaries of this implementation have been chain operators like Worldchain and Lisk, along with RaaS providers, who have been informed about the implementation and have currently conducted internal tests in preparation for launch. However, it is important to note that the implementation is still awaiting its first mainnet deployment by a chain operator for full use.',
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
        {
          answer:
            'opUSDC sets the standard for deploying the [Bridged USDC standard](https://www.circle.com/en/bridged-usdc) to any OP Stack Chain. Before opUSDC, chain operators were limited to non-standard USDC implementations, which caused liquidity fragmentation when Circle deployed its official version (USDC.e vs. native USDC). Now, as part of the [core features available](https://docs.optimism.io/builders/chain-operators/features/bridged-usdc-standard) to OP Stack Chain Operators, anyone can deploy a Bridged USDC version, which includes:\n\n- A factory implementation for one-click deployment on Ethereum and targeted OP Stack Chain.\n- A seamless migration flow for tokens, in this case, to native USDC, in coordination with Circle.\n- The ability to claim funds after the migration process is completed as well as other edge cases.\n\nThis referenced implementation also contributes to the development of custom token bridges for OP Stack Chains, particularly for those interested in the flows introduced.',
          question:
            'How has your project advanced the development of the OP Stack?',
        },
      ],
    },
  },
  {
    id: '0xa61bcee8283f00abfca8890d602ea9542a75c925f43e05d85cb4e017c60f8017',
    applicationId:
      '0xa61bcee8283f00abfca8890d602ea9542a75c925f43e05d85cb4e017c60f8017',
    projectId:
      '0x353abbe13c196db288730b62e7a6d8f2755ee968681a67bc7d5e381621ad211a',
    category: 'Utility',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: null,
    name: 'xuwinnie.review',
    description: 'Security Researcher.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/23976744-db3b-49b9-b5d4-3b629a28dd3a.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/f7905adc-4525-4ea2-bc64-925690c7069c.png',
    socialLinks: {
      website: ['xuwinnie.review'],
      farcaster: [],
      twitter: 'https://x.com/xuwinniexu',
      mirror: null,
    },
    team: null,
    github: [
      {
        url: 'https://github.com/xuwinnie/reports',
        name: '',
        description: '',
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://github.com/code-423n4/2024-07-optimism-findings/issues/36',
        name: 'C4 H-01: Invalid DISPUTED_L2_BLOCK_NUMBER is passed to VM',
        description:
          'An attacker can counter a valid output claim by providing a trace containing one block after the original claim. To be fixed in the Granite Network Upgrade.',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [],
      revenue: [],
    },
    pricingModel: 'freemium',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Security audits specifically on the OP Stack or its components.',
      ],
      statement: [
        {
          answer:
            '- Performed a security audit on the OP Stack Fault Proof implementation through Code4rena.\n- Identified *C4 H-01: Invalid DISPUTED_L2_BLOCK_NUMBER is passed to VM.* This bug enables an attacker to counter a valid output claim by providing a trace containing one block after the original claim.\n- One of the two High Severity issues to be fixed in the upcoming [Granite Network Upgrade](https://gov.optimism.io/t/upgrade-proposal-10-granite-network-upgrade/8733), and the only directly exploitable one.\n- The first and the only reasercher to identify this issue during a series of third-party security audits.\n',
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            'Protocols & Users on OP Stack, Fault Proof Game participants. \n- If this bug remains unfixed, valid state transition could be disputed, and chain-level liveness issue could occur.\n- Malicious actor can steal the bond from honest dispute game participants.',
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0xbbea5a9a59dc71358d4a4e687630a8a461efc17e56054f36e8c75246520a4199',
    applicationId:
      '0xbbea5a9a59dc71358d4a4e687630a8a461efc17e56054f36e8c75246520a4199',
    projectId:
      '0xe2f742ea351ea741e95f8cf4b2434317d8365c532b97601e8a27854003c2e396',
    category: 'Utility',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: {
      name: 'Code4rena',
      description:
        'Code4rena invented the competitive audit, we’ve run 400+ of them, and we’re obsessed with delivering highest security outcomes.',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/ff3072d8-6d76-456e-8f16-b2ea5f7ea961.png',
      organizationCoverImageUrl: null,
      socialLinks: {
        website: ['https://code4rena.com'],
        farcaster: ['https://warpcast.com/code4rena'],
        twitter: 'https://x.com/code4rena',
        mirror: null,
      },
      team: ['18354', '19716'],
    },
    name: 'Code4rena',
    description:
      'Code4rena invented the competitive audit, we’ve run 400+ of them, and we’re obsessed with delivering highest security outcomes.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/953058ce-5e96-4711-b9df-afa02b1a3fca.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/1cf54e6c-50be-43c1-bce2-edc112c41c97.png',
    socialLinks: {
      website: ['https://code4rena.com'],
      farcaster: ['https://warpcast.com/code4rena'],
      twitter: 'https://x.com/code4rena',
      mirror: null,
    },
    team: [
      {
        fid: 18354,
        object: 'user',
        pfp_url: 'https://i.imgur.com/2yJEyW1.jpg',
        profile: {
          bio: {
            text: '@code4rena cofounder',
          },
        },
        username: 's0ck.eth',
        power_badge: false,
        display_name: 'Sock',
        active_status: 'inactive',
        verifications: [
          '0x9a68f7d67275e0feffb4a714c2db8ba248f53595',
          '0xcfe6628bbf2a0c1d82e6b75d94135c2d28a91ce1',
        ],
        follower_count: 481,
        custody_address: '0xcfe6628bbf2a0c1d82e6b75d94135c2d28a91ce1',
        following_count: 310,
        verified_addresses: {
          eth_addresses: [
            '0x9a68f7d67275e0feffb4a714c2db8ba248f53595',
            '0xcfe6628bbf2a0c1d82e6b75d94135c2d28a91ce1',
          ],
          sol_addresses: [],
        },
      },
      {
        fid: 19716,
        object: 'user',
        pfp_url: 'https://i.imgur.com/d3uFYKW.jpg',
        profile: {
          bio: {
            text: 'Code4rena.com co-founder. Securityalliance.org contributor. Lover of books, poetry, collective knowledge graphs, and aligning on a big vision.',
          },
        },
        username: 'picnic',
        power_badge: true,
        display_name: 'Picnic',
        active_status: 'inactive',
        verifications: [
          '0x5c5e182d9a8a414743131b850f26005b716a0887',
          '0xb48900c539cbacab1c15ccd3814b4175352b5a02',
        ],
        follower_count: 2300,
        custody_address: '0x35b9b6b28b1b59f2be9c29f21c7d9bbd715fa3cf',
        following_count: 658,
        verified_addresses: {
          eth_addresses: [
            '0x5c5e182d9a8a414743131b850f26005b716a0887',
            '0xb48900c539cbacab1c15ccd3814b4175352b5a02',
          ],
          sol_addresses: [],
        },
      },
    ],
    github: [],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: null,
          link: null,
          amount: '5m-10m',
          date: '2022',
          details:
            'These funds covered operations for 3 years and were essential in getting Code4rena to where it is today.\n\nSharing in the interest of transparent disclosure, but this funding technically is not part of the current entity that houses Code4rena, which is a wholly owned subsidiary of Zellic.',
        },
      ],
      revenue: [],
    },
    pricingModel: 'freemium',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Security audits specifically on the OP Stack or its components.',
      ],
      statement: [
        {
          answer:
            'In May 2024, Zach Obront contacted us regarding an opportunity to help secure Optimism fault proofs.\n\nWe\'ve been long been interested in helping secure Optimism, so we proposed a unique format aimed to maximize participation of top talent:\n\n- Anyone could compete to gain a share of a pool of 200k $OP.\n- Four elite security researchers vie for the 200k $OP _plus_ an $80k side pool.\n- Anyone who beat the elites would gain the title "Dark Horse" and earn bonus awards.\n\nIn the spirit of public goods:\n\n- Code4rena waived our fees for these services, which would have been 60k $OP + $24k USDC.\n- We fundraised the $80k USDC side pool with generous support from Base, Mode, Frax, Conduit, PoolTogether, and Metis.\n- We heavily promoted the competition on social media and personally.\n\nThe end result delivered considerable value: 5 high severity and 11 medium severity issues, as can be seen in the [audit report detailing the community’s findings](https://code4rena.com/reports/2024-07-optimism).\n',
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            'All Superchain users and builders benefit from a more secure stack.\n\nFurther, the ecosystem will benefit long-term from the precedent set by this approach in its ability to maximize the attention of top security researchers in a cost-effective way while securing public goods.',
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0xc8a03780dc632e8fad9356662e52723f5e6cff9ba457c0f29e15653c2d26fe7c',
    applicationId:
      '0xc8a03780dc632e8fad9356662e52723f5e6cff9ba457c0f29e15653c2d26fe7c',
    projectId:
      '0x28a8b14613c3a5790b2d0c7b7d32384ecd187b3b86fc66ba9d9244944d20b422',
    category: 'Cross Chain',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: null,
    name: 'Sherlock',
    description:
      "Sherlock's audit process is revolutionary in the space, providing protocols with the focus, collaboration, and assurance of a traditional audit, alongside the breadth of security expert participation from an audit contest. Simply put, Sherlock finds more critical/high-severity bugs in less time than other audits. In addition, Sherlock is the only audit provider to offer bug bounty and exploit coverage to all customers.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/15c503f7-2dfe-4e10-a510-59ffcd8d490d.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/f3f1218f-c0ab-4307-bc4d-f8785b54adbf.png',
    socialLinks: {
      website: ['https://www.sherlock.xyz/'],
      farcaster: [],
      twitter: 'https://x.com/sherlockdefi',
      mirror: null,
    },
    team: [
      {
        fid: 588414,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/3db29464-f4ed-42fc-2647-5877014e9400/rectcrop3',
        profile: {
          bio: {
            text: 'Sherlock',
          },
        },
        username: 'glory-eth',
        power_badge: false,
        display_name: 'Glory-eth',
        active_status: 'inactive',
        verifications: [],
        follower_count: 3,
        custody_address: '0x8eda3b1ff8e63dea9df58f3fa7653036ed23d35c',
        following_count: 71,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        url: 'https://github.com/sherlock-protocol/sherlock-v2-core',
        name: 'Sherlock',
        description: '',
      },
    ],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: 'foundation-mission',
          link: 'https://app.charmverse.io/op-grants/page-11949409404374878',
          amount: '200000',
          date: '2024-05-15',
          details: '',
        },
        {
          grant: 'foundation-mission',
          link: 'https://app.charmverse.io/op-grants/page-8451256064211878',
          amount: '200000',
          date: '2023-09-20',
          details: '',
        },
        {
          grant: null,
          link: null,
          amount: '1m-5m',
          date: '2022',
          details: '',
        },
      ],
      revenue: [],
    },
    pricingModel: 'pay_to_use',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Security audits specifically on the OP Stack or its components.',
      ],
      statement: [
        {
          answer:
            "Sherlock has significantly advanced the development of the OP Stack through three dedicated audit contests focused on critical components of the Optimism infrastructure. Specifically, Sherlock conducted two separate contests for the Bedrock update, which plays a pivotal role in enhancing the scalability and efficiency of the OP Stack. In the first contest, Sherlock's security experts identified 13 Medium and 3 High vulnerabilities. The second contest further uncovered 6 Medium and 3 High vulnerabilities. By identifying and helping to remediate these vulnerabilities, Sherlock has ensured that the Bedrock update is robust, secure, and ready for deployment, ultimately contributing to the stability and security of the entire OP Stack. Additionally, Sherlock ran an audit contest for Optimism Fault Proofs, a critical element of the Optimism architecture, further securing the OP Stack against potential exploits.",
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            'The entire Optimism ecosystem has benefited from Sherlock\'s rigorous audit processes, with the most significant impact felt by any Layer 2 (L2) solution within the Superchain. By securing the Bedrock update, Sherlock has indirectly ensured the security of every L2 built upon this foundation. Essentially, our audits have vetted the very "bricks" from which these L2s are constructed, providing a secure base that underpins the growth and stability of the broader Optimism ecosystem. This has not only reduced the risk of vulnerabilities across the ecosystem but also enhanced the overall trust and confidence in the security of projects leveraging the OP Stack.',
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0xd33479c5420a69c1ce3c8ba955593a63dcd454feeac43a4de417aa0bb793980a',
    applicationId:
      '0xd33479c5420a69c1ce3c8ba955593a63dcd454feeac43a4de417aa0bb793980a',
    projectId:
      '0xfad78fad680d407f81e7fd46632b4b4936676d1776a5cbf02694b94698495746',
    category: 'Utility',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: {
      name: 'Succinct',
      description:
        'Succinct is building SP1: a blazing-fast, general-purpose zkVM. SP1 enables any developer to create real-world ZKP applications by simply writing Rust, with state of the art performance. ',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/d0fa60ed-6768-4950-b1a3-d939070b1141.png',
      organizationCoverImageUrl: '',
      socialLinks: {
        website: ['https://succinct.xyz/'],
        farcaster: [],
        twitter: 'https://twitter.com/SuccinctLabs',
        mirror: '',
      },
      team: ['5323'],
    },
    name: 'OP Succinct: Full ZK Validity Proving of OP Stack Rollups with SP1',
    description:
      'OP Succinct combines OP Stack, a battle-tested, modular rollup framework, with SP1, a blazing-fast zkVM, to enable any OP Stack rollup to be fully proven with ZKPs. ',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/55feffd8-8eb4-42f9-a46a-d01336ce9c0f.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/87d02689-101f-4ee0-83d2-8720fad3073c.png',
    socialLinks: {
      website: ['https://www.succinct.xyz/'],
      farcaster: [],
      twitter: 'https://twitter.com/SuccinctLabs',
      mirror: null,
    },
    team: null,
    github: [
      {
        url: 'https://github.com/succinctlabs/op-succinct',
        name: 'OP Succinct',
        description:
          'Upgrade any OP Stack chain to use ZKPs using SP1 in 1 hour.',
      },
      {
        url: 'https://github.com/succinctlabs/sp1',
        name: 'SP1',
        description:
          'A blazing fast, general-purpose zkVM that makes ZKPs accessible to any developer.',
      },
    ],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: 'foundation-mission',
          link: 'https://github.com/ethereum-optimism/ecosystem-contributions/issues/76',
          amount: '15000',
          date: '2023-07-25',
          details: '',
        },
        {
          grant: null,
          link: null,
          amount: 'above-50m',
          date: '2024',
          details: 'Raised a seed and series A funding round from Paradigm.',
        },
      ],
      revenue: [],
    },
    pricingModel: 'freemium',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
      ],
      statement: [
        {
          answer:
            "**Background:** Succinct is building SP1: a blazing-fast, general-purpose zkVM. SP1 enables *any developer* to create real-world ZKP applications by **simply writing Rust**, with state of the art performance. \n\nOP Succinct shows how to use SP1 to add *full type-1 ZK validity proofs* to any OP Stack rollup in < 2000 lines of code. Historically, zkEVM rollups have been difficult to build, requiring specialized cryptography expertise that makes customization + maintainability hard. This integration shows how combining SP1's magical developer experience for ZKPs + OP Stack yields a ZK rollup with the *best of all worlds*.\n\nWith OP Succinct, it is easy to upgrade any OP Stack chain to use ZKPs. Deployment takes < 1 hour and you get:\n* 1-2 hour finality secured by ZKPs (a huge gain over the 7 day delay of traditional OP stack)\n* Cost-effective proving (avg. 0.5-1 cent per transaction)\n* Excellent devex for rollup teams, with unlimited customization (in Rust) and easy maintainability\n",
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            "**Optimism Collective:** From day 1, Optimism designed OP Stack to be modular--with the goal of adding ZKP validity proofs once the technology was ready. SP1, with it's easy developer experience and fast performance, makes ZKPs ready for mainstream usage. OP Succinct integrates SP1 into the OP Stack to fulfill this original vision of a fully ZK proven OP Stack chain. The SP1 proofs of OP's STF also serve as a foundation for more scalable interoperability in the Superchain.\n\n**Broader Ethereum community:** All application or rollup developer in the Ethereum ecosystem benefit by having a simple and maintainable option for a fully type-1 zkEVM rollup that is performant, cheap and customizable. Existing OP stack chains can leverage OP Succinct for faster finality with ZKPs. New rollups can use OP Succinct as a viable option for deploying a ZK rollup.\n\nBroadly, OP Succinct shows the path to the endgame of Ethereum scaling where every rollup is a ZK rollup.",
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0xd42d5fa61ac3f9488e7b5c5fd24709d9d2b130750a9e06df868fe0bf3d14b849',
    applicationId:
      '0xd42d5fa61ac3f9488e7b5c5fd24709d9d2b130750a9e06df868fe0bf3d14b849',
    projectId:
      '0x9151666888d0ca532a529be98a50d2eb992988117e202163f865fa9a27eb7149',
    category: 'Utility',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: null,
    name: 'Solady',
    description:
      "Solady is an open-source repository containing highly-optimized Solidity snippets. It offers efficient implementations of commonly-used libraries, such as MerkleProofLib, alongside cutting-edge features like LibZip.\n\nBy thoughtfully encapsulating low-level inline assembly within flexible APIs, Solady simplifies the process of writing clean and efficient Solidity code. More than just a library, Solady also serves as a learning resource and experimental laboratory for pioneering gas-optimization techniques.\n\nSolady is used in the codebases of Optimism and Coinbase.\n\nWith respect to the OP stack, Solady contributes in the following ways:\n- Provides a Solidity and JavaScript implementation of FastLZ compression algorithm, which is used for more accurate gas estimations in the Fjord upgrade. The JavaScript code is very minimal, allowing for it's easy translation into Go.\n- Various other utilities such as bytecode proxies and string operations.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/0e726459-df1e-4cea-bddb-25399f88acea.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/0615ef25-edbb-4b19-934d-79614daf8040.png',
    socialLinks: {
      website: ['https://solady.org'],
      farcaster: [],
      twitter: 'https://twitter.com/optimizoor',
      mirror: null,
    },
    team: [
      {
        fid: 4686,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/70a37f2b-7aee-474c-3fd8-8c60ccc00100/rectcrop3',
        profile: {
          bio: {
            text: 'a.k.a optimizoor',
          },
        },
        username: 'optimizoor',
        power_badge: true,
        display_name: 'Vectorized',
        active_status: 'inactive',
        verifications: ['0x1f5d295778796a8b9f29600a585ab73d452acb1c'],
        follower_count: 2031,
        custody_address: '0xd0b0948e4b034279dc19a352d21effd53dd7e83e',
        following_count: 660,
        verified_addresses: {
          eth_addresses: ['0x1f5d295778796a8b9f29600a585ab73d452acb1c'],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        url: 'https://github.com/Vectorized/solady',
        name: 'Solady',
        description: 'Optimized Solidity snippets',
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://github.com/search?q=repo%3Aethereum-optimism%2Foptimism%20solady&type=code',
        name: 'Solady usage in Optimism',
        description: 'Solady usage in Optimism',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: null,
          link: null,
          amount: '99379',
          date: '',
          details: null,
        },
        {
          grant: null,
          link: null,
          amount: '45018',
          date: '',
          details: null,
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
      ],
      statement: [
        {
          answer:
            "Solady contributes in the following ways to the OP Stack:\n\n- Provides a Solidity and JavaScript implementation of FastLZ compression algorithm, which is used for more accurate gas estimations in the Fjord upgrade. The JavaScript code is very minimal, allowing for it's easy translation into Go.\n\n- Various other utilities such as bytecode proxies and string operations.\n\nhttps://github.com/search?q=repo%3Aethereum-optimism%2Foptimism%20solady&type=code",
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            "- Solady has done the heavy work on translating the FastLZ algorithm from it's original C implementation to a Solidity and JavaScript implementation that behaves exactly the same. The FastLZ algorithm is a fast and accurate approximation of the Brotli compression used to compress calldata. This allows both Optimism and end users to save more money on L1 blob fees.\n\n- Solady also allows the OP stack's smart contracts to save gas on L1 (e.g. MerkleProofLib, LibClone), which allows more cost savings for Optimism. These smart contracts have also been thoroughly tested and audited, enabling safer code. It also helps with making L2 smart contracts more efficient, so that the Superchain can accommodate more end users. ",
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0xd890d5c2369e84688d196a6181ddfde1f1fc9d2d3f4e55ee93a3da851145f96f',
    applicationId:
      '0xd890d5c2369e84688d196a6181ddfde1f1fc9d2d3f4e55ee93a3da851145f96f',
    projectId:
      '0x1cdc515cbaa37d126f91ca367bc7b3b2126562a2fd1a10a8ad8b1b1d9bc06a69',
    category: 'Utility',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: {
      name: 'Immunefi',
      description:
        "Web3's leading bug bounty platform, protecting $190 billion in user funds",
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/6b654c3a-cebc-4a47-a8c8-cb6fb5e5bb50.png',
      organizationCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/ffe1f4b9-e98a-4f4f-ab1d-0b5d598137ec.png',
      socialLinks: {
        website: ['https://immunefi.com/'],
        farcaster: [],
        twitter: '@immunefi',
        mirror: '',
      },
      team: ['512390'],
    },
    name: 'Immunefi Bug Bounty Platform',
    description:
      "Immunefi is Web3's leading bug bounty and crowd security platform, protecting $190 billion in user funds. We're currently partnered with 24+ Optimism protocols and seek to make Web3 safer for builders and users alike. Immunefi has partnered with Optimism to offer matching funds for payouts to white hats that uncover high and critical-level bugs on OP protocols like Velodrome, Synthetix, and Pika Protocol. One of Immunefi's milestone goals is to provide security coverage for >50% of the OP ecosystem. ",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/2d5fe6f2-d998-446b-9357-5e087c229fb6.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/b791f4a0-279f-4389-b027-b80e9ba78ff0.png',
    socialLinks: {
      website: ['https://immunefi.com/'],
      farcaster: [],
      twitter: 'https://x.com/immunefi',
      mirror: null,
    },
    team: [
      {
        fid: 512390,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/8f823eda-76e9-4964-78d0-439343bacd00/rectcrop3',
        profile: {
          bio: {
            text: 'Securing web3 with CrowdSec at Immunefi',
          },
        },
        username: 'charlieb',
        power_badge: false,
        display_name: 'Charlie_Immunefi',
        active_status: 'inactive',
        verifications: ['0x322640f427d3af7f9559ecdf984a87c77e029dd4'],
        follower_count: 36,
        custody_address: '0x8cb0ce855e07fcbdf308ecd182b38cd763f972de',
        following_count: 190,
        verified_addresses: {
          eth_addresses: ['0x322640f427d3af7f9559ecdf984a87c77e029dd4'],
          sol_addresses: [],
        },
      },
    ],
    github: [],
    packages: [],
    links: [
      {
        url: 'https://immunefi.com/bug-bounty/?filter=ecosystem%3DOptimism',
        name: 'OP Bounty programs on Immunefi',
        description:
          'This is a list of live Bug Bounty Programs on Immunefi that support or are building on Optimism. ',
      },
      {
        url: 'https://github.com/immunefi-team/Web3-Security-Library',
        name: "Immunefi's web3 security library",
        description:
          'This repo provides security related educational resources including Bug Fix reviews, Hack Analyses, Vulnerabilities, tools, and more. ',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: null,
          link: null,
          amount: '126726.5',
          date: '',
          details: null,
        },
        {
          grant: 'foundation-mission',
          link: 'https://gov.optimism.io/t/final-spearbit-immunefi-bug-bounty-program-for-large-protocols-building-on-optimism/6187',
          amount: '100000',
          date: '2023-09-19',
          details:
            'This grant was used to match payouts to security researchers that found valid bugs at the high and critical severity levels on Velodrome. ',
        },
        {
          grant: 'foundation-mission',
          link: 'https://app.charmverse.io/op-grants/page-6599670971221563',
          amount: '210000',
          date: '2023-09-19',
          details:
            'This grant was used to match payouts to security researchers that found valid bugs at the high and critical severity levels on various OP projects including Synthetix, Pika Protocol, and more. ',
        },
      ],
      revenue: [],
    },
    pricingModel: 'pay_to_use',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Security audits specifically on the OP Stack or its components.',
      ],
      statement: [
        {
          answer:
            "Immunefi has advanced the development of the OP Stack by operating bug bounty programs for various OP protocols including Velodrome, Synthetix, Pika Protocol, and many more. During the period from 10/1/2023-7/31/2024, security researchers on Immunefi's platform uncovered several bugs at various threat levels on OP projects, including Highs and Criticals. As the recipient of a mission grant, Immunefi used funds provided by OP to create a matching payout program, meaning OP protocols that opted in to the program could have their payouts to security researchers matched by OP. This has resulted in a reduction of operating costs to OP protocols, strengthened code, growth in the security researcher community focused on OP, and increased education of best security practices in web3. Immunefi publishes (with customer consent) reports after bugs are identified, that are available for all builders in the OP ecosystem to leverage when building security-minded projects. ",
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            "Specifically, Velodrome has benefited the most as they received approximately 57,000 OP tokens to pass to security researchers that uncovered 5 critical/high bugs as part of the ecosystem-focused program. Pika Protocol is another beneficiary, as they received 5,772.3 tokens to subsidize 5 critical/high valid bug payouts. Additional OP projects that have live bug bounty programs on Immunefi include: Extra Finance, Perpetual, Beethoven X, dHedge, Yearn Finance, Idle, Aevo, Exactly, Vesper and Metronome Synth. In total there are ~24 OP-related projects protected by Immunefi's crowd security bug bounty platform. These protocols mutually benefit from Immunefi's work on the OP stack because results from valid bug reports are made available to them, enabling them to learn of potential attack vectors missed during traditional audits. Immunefi hopes to continue to assist smaller OP projects by partially subsidizing their critical and high bug bounty payouts.",
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0xde61c4ad48fd0a8e1e783490aeab9e2d8aa05aaeba1c619e3d520f7e277e461e',
    applicationId:
      '0xde61c4ad48fd0a8e1e783490aeab9e2d8aa05aaeba1c619e3d520f7e277e461e',
    projectId:
      '0x853976b3804833ac5e65592a308ee871f6f38038d25bc6f4dac4a63892c09c5f',
    category: 'Utility',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: null,
    name: 'Cryptofuzz',
    description:
      'Differential fuzzing to find bugs in cryptographic libraries.\n\nHundreds of bugs found in major cryptographic libraries. Runs 24/7 on Google OSS-Fuzz.\n\nBug list: https://github.com/guidovranken/cryptofuzz?tab=readme-ov-file#bugs-found-by-cryptofuzz\nLibrary support: https://github.com/guidovranken/cryptofuzz/tree/master/modules',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/6215ed53-5260-4d95-8d45-7978686135cd.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/f5499378-c7bf-480d-8fbc-6ef4ec5d0856.png',
    socialLinks: {
      website: ['https://github.com/guidovranken/cryptofuzz'],
      farcaster: [],
      twitter: null,
      mirror: null,
    },
    team: [
      {
        fid: 847842,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/dacb0833-2dc5-4623-f97f-a8640ccb2400/rectcrop3',
        profile: {
          bio: {
            text: '',
          },
        },
        username: 'guidovranken',
        power_badge: false,
        display_name: 'Guido Vranken',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0x4cc74476e4bf3b9c4db235f59b7d421a6ee16a84',
        following_count: 0,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        url: 'https://github.com/guidovranken/cryptofuzz',
        name: '',
        description: '',
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://github.com/guidovranken/cryptofuzz?tab=readme-ov-file#bugs-found-by-cryptofuzz',
        name: 'Bug list',
        description: 'List of bugs found by Cryptofuzz.',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Security audits specifically on the OP Stack or its components.',
      ],
      statement: [
        {
          answer:
            '24/7 differential fuzzing of libsecp256k1, gnark, blst, golang cryptography and integer arithmetic. No relevant bugs were found within this specific time period, though previous findings include:\n\n- Various blst bugs (used by kzg) (e.g. https://github.com/supranational/blst/security/advisories/GHSA-x279-68rr-jp4p, https://github.com/search?q=repo%3Asupranational%2Fblst+vranken&type=commits)\n- Two Go P256 scalar multiplication bugs (used by the P256 precompile) (CVE-2023-24532, Golang Github issue 60717, CVE-2022-23806)',
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            "Every direct or indirect user of the OP stack has benefited from my work on the OP Stack. This broad impact stems from the nature of my research, which focuses on validating the security properties of components that are fundamental to the OP stack's operation.",
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0xdfeced1045accaf24826bb678bc6c44624588c1d1b5a56d6b60ad2774fde4352',
    applicationId:
      '0xdfeced1045accaf24826bb678bc6c44624588c1d1b5a56d6b60ad2774fde4352',
    projectId:
      '0xdbc21abd2657c839060753eada61f93a6d835a0a2f3bdfb530339a2c85f23516',
    category: 'Utility',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: {
      name: 'EthStorage',
      description: '',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/7dcdefa2-18ab-457d-8a13-92e7c00049db.png',
      organizationCoverImageUrl: '',
      socialLinks: {
        website: [],
        farcaster: [],
        twitter: '',
        mirror: '',
      },
      team: ['498701'],
    },
    name: 'Research and development on multi-section fault dispute game',
    description:
      'EthStorage is dedicated to advancing the next generation of Web3 infrastructure, focusing on areas such as data availability, Layer 2 scaling, multi-section fraud-proof, and decentralized storage. Our team has contributed to several Ethereum Improvement Proposals (EIPs), including EIP-4804, EIP-4972, EIP-5018, and EIP-5027. We have also been awarded multiple grants from the Ethereum Foundation, notably for projects like data availability sampling and proving Layer 2 storage through Layer 1 contracts.\n\nThis research aims to significantly expedite the fault-proof dispute by implementing a multi-section search approach. In contrast to the bi-section game, which demands log2(N) moves to identify the final disputable step, the K-section game (where K > 2) diminishes the moves to logK(N). However, in the K-section game, each player (defender/attacker) must publish a K-1 VM state hashes on-chain with every move. The introduction of EIP-4844 facilitates a substantial reduction in this cost through the utilization of EIP-4844 Binary Large Object (BLOB), capable of accommodating K=4096 VM hashes per BLOB. This allows the dispute process for an N=2^48 game to be resolved in just 4 moves, down from 48, facilitating quicker settlements and lowering gas costs.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/246a6f8a-8335-40b7-b7d9-2590bb1c7cf9.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/1d5c5564-489a-43f8-bb76-73ab8a30b1c5.png',
    socialLinks: {
      website: ['https://ethstorage.io/'],
      farcaster: [],
      twitter: 'https://twitter.com/EthStorage',
      mirror: '',
    },
    team: null,
    github: [
      {
        url: 'https://github.com/ethstorage/optimism',
        name: '',
        description:
          "The 'develop' contains the latest development of multi-section fault proof.",
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://app.charmverse.io/op-grants/page-29596258544520615',
        name: 'Optimism Season 5 Grant',
        description: 'Recognition from Optimism community',
      },
      {
        url: 'https://twitter.com/EthStorage/status/1788554575869542831',
        name: 'Twitter announcement',
        description: '',
      },
      {
        url: 'https://www.youtube.com/watch?v=vbCSqdB-D8g',
        name: 'Talk at EthPrague about the project',
        description: '',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: 'token-house-mission',
          link: 'https://app.charmverse.io/op-grants/page-29596258544520615',
          amount: '30000',
          date: '2024-04-24',
          details:
            'For detailed information on the grant, please visit the Charmverse page. You can find our progress updates, draft specifications, and code on this [GitHub discussion page](https://github.com/ethereum-optimism/specs/discussions/191).',
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
      ],
      statement: [
        {
          answer:
            "- The number of move() calls to complete a game is expected to reduce from 73 (MAX_DEPTH of Sepolia testnet) to 7 (3*12=36 for SPLIT_DEPTH, and 4*12=48 for EXECUTION_DEPTH). The potential main benefit will be a significant gas reduction for the challenger over the whole game and a reduction in fault proof window.\n- We expect the additional gas cost of move() will be minimal: the additional fee will be mainly BLOB fee for each move(). \n- The code changes to FaultDisputeGame.sol will be minimized, and the existing definitions such as Position, Depth, MIPS.sol, etc will be retained. Further, the N-section fault-proof game would subsume bisect FaultDisputeGame.sol when N=2. Therefore, all existing tests (unit tests, e2e tests) for FaultDisputeGame.sol can be also used to test the new multi-section fault-proof game.\n- We've generalized the fault proof contract tests from Nary=1 to Nary>=2.",
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            'OP Stack developers who wish to use the multi-section fault proof feature will be benefited the most, as it enables a smaller fault proof window while the additional gas cost of move() will be minimal.',
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0xe4ad25cfe18eccc531582634d03b78b03b7115d5fc77de001e735fe178f768f3',
    applicationId:
      '0xe4ad25cfe18eccc531582634d03b78b03b7115d5fc77de001e735fe178f768f3',
    projectId:
      '0x36dd18c9e9a4bba1acfd94263e1d53c69a24376bf7129e38d60c83ef461e6ab5',
    category: 'Utility',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: {
      name: 'Gelato',
      description: '',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/6d9367bd-8ed7-4a36-9514-46d7c2e10dc4.png',
      organizationCoverImageUrl: '',
      socialLinks: {
        website: [],
        farcaster: [],
        twitter: '',
        mirror: '',
      },
      team: ['341724'],
    },
    name: '1-Click Price Oracle',
    description:
      "Traditionally, price oracles are deployed on a per network basic (on each rollup individually). This manual deployment process can be lengthy, expensive, and may require legal agreements to be signed. Furthermore, prices are pushed to each rollup in a siloed manner, repeatedly incurring all associated overhead. Overall, there is a lot of duplicate computation taking place despite the underlying price data being identical. The traditional oracle architecture is unscalable in a world of 1000s of Rollups.\n\nGelato's 1-Click Price Oracles are natively integrated into rollups. These native oracles are immediately available without any manual deployment process and hyper scalable by leveraging a unique property of the rollup architecture. Prices are published to- and verified by a single rollup (Hub) and disseminated to all other rollups (Spokes) whilst avoiding duplicate computation and all associated overhead.\n\nThe key insight making this possible is that rollups essentially act as indexers over the L1 allowing us to consume data such as emitted events in a process known as derivation. The derivation layer is a crucial component as it facilitates, among other things, deposits which are initiated on the L1 and executed on the L2. This is what allows users on the L1 to securely deposit tokens to the L2.\n\nHere is how a deposit works under the hood:\n\n- The user invokes a smart contract which locks up tokens on the L1 and emits a deposited event.\n- Whenever the rollup enters a new epoch (new L1 block), it iterates through transaction receipts in that block and fetches all deposited event logs.\n- For all deposited event logs, the rollup constructs corresponding deposit transactions which are included at the top of the next L2 block.\n\nGelato 1-Click Price Oracles fork and slightly modify the OP Stack to introduce an additional source to the derivation layer. We first deploy an L1PriceOracle smart contract which receives price updates from Pyth every two seconds via a Gelato Web3 Function. This smart contract is deployed once and shared between all rollups. It verifies the associated signature to ensure the price update is legitimate and emits a PricesUpdated event containing all updated price feeds. When the rollup enters a new epoch, in addition to iterating through all deposited event logs as before, it also iterates through all PricesUpdated event logs. Just like with deposits, the rollup then constructs a special top-of-block transaction which updates prices on the L2. This top-of-block transaction calls an L2PriceOracle predeploy smart contract which stores prices on-chain and exposes them via a Pyth-like interface.\n\nIn summary, prices are pushed to and verified by a single smart contract living on the L1. On every epoch, rollups essentially copy fresh prices from L1 to L2 during derivation. Since publishing & verification is done in a single place rather than by each rollup individually, we reduce the complexity of publishing & verification from O(n) to O(1). However, despite avoiding duplicate computation, publishing prices to an L1 such as Ethereum every two seconds is prohibitively expensive. Instead, prices are published to a cheaper L2, in our case Base, and consumed by 1-Click (Base) L3 rollups. Unlike traditional oracles, 1-Click Oracles actually perform better at scale since the costs of publishing & verifying the data is amortized between all rollups. In essence, the constant cost is divided between many rollups (1/N). In addition, whenever a price feed is introduced on the Hub (Base), it is instantly available on all 1-Click rollups without any additional work. This allows us to rapidly introduce new price feeds. For more detailed information, please read the documentation.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/8a32c0c1-9adf-417a-a55e-f840e9d68166.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/cfc78341-b821-4da4-95ef-35cc9e460541.png',
    socialLinks: {
      website: [],
      farcaster: [],
      twitter: null,
      mirror: null,
    },
    team: [
      {
        fid: 848868,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/4211a9b5-0f4e-472f-8f16-67427f162500/rectcrop3',
        profile: {
          bio: {
            text: '',
          },
        },
        username: 'benprice',
        power_badge: false,
        display_name: 'Ben Price',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0x295e1018f05f282c89fbc134127b71b356abfb13',
        following_count: 0,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
      {
        fid: 341724,
        object: 'user',
        pfp_url: 'https://i.imgur.com/Pl8mrQt.jpg',
        profile: {
          bio: {
            text: 'The Rollup-as-a-Service Platform. Deploy enterprise-grade modular L2 & L3 ⛓️ chains integrated with industry-standard Web3 services',
          },
        },
        username: 'gelatonetwork',
        power_badge: false,
        display_name: 'Gelato',
        active_status: 'inactive',
        verifications: [],
        follower_count: 92,
        custody_address: '0x81c1d747a2376fc9dd78e4695d7fe6f02f32c516',
        following_count: 65,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        url: 'https://github.com/gelatodigital/optimism',
        name: '1-Click Price Oracle',
        description:
          'Natively integrated price oracles. Please note that all changes are present in the gelato/oracle branch rather than the default develop branch.',
      },
      {
        url: 'https://github.com/gelatodigital/gelato-native-oracle-sdk',
        name: 'Oracle Solidity SDK',
        description:
          'This repository contains the L2PriceOracle Solidity SDK. This is also published on npm.',
      },
      {
        url: 'https://github.com/gelatodigital/gelato-native-oracle-periphery',
        name: 'Periphery Gelato Native Oracle L1 Smart Contract & Web3Function',
        description:
          'This repository contains the L1PriceOracle smart contract and Web3 Function responsible for pushing Pyth prices every two seconds.',
      },
      {
        url: 'https://github.com/gelatodigital/gelato-native-oracle-nft-example',
        name: 'Example NFT Mint',
        description:
          'This repository demonstrates an NFT mint using the native oracle. ',
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://docs.gelato.network/developer-services/experimental/1-click-price-oracle',
        name: '1-click Oracle Documentation',
        description:
          'Documentation: Natively integrated price oracles available on 1-Click Rollups.',
      },
      {
        url: 'https://x.com/gelatonetwork/status/1831391143885758698',
        name: '1-click Modules',
        description:
          '1-click Native Modules let users deploy service-packed chains instantly.',
      },
    ],
    contracts: [
      {
        address: '0x9E5Ed77d01bB393cC69CCB5e3d67a53991279ED0',
        deploymentTxHash:
          '0xfe63f5caa2d6c703395d1be2b48867a14e2fb93d28319f1db42280aeae37ced0',
        deployerAddress: '0xc69F1c96364DbD7e2F6f082D58f34538FfE9Ded4',
        verificationProof:
          '0xcc8cf4130f2a9d97ca9a830f1c34ba851353eff5aea8466885ab872e7f9f57362b4bf34c3dada8f5425d3aba0157ed7198cae27134c61cd11ee26a7da45ac2ba1c',
        chainId: 8453,
      },
    ],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: null,
          link: null,
          amount: '10m-25m',
          date: '2021',
          details:
            'This project is part of contributions made by Gelato. All funding information can be seen in other project.',
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Work on core components of the OP Stack, including client implementations, modules, and modifications.',
      ],
      statement: [
        {
          answer:
            'The traditional oracle architecture, based on the assumptions of isolated blockchains, is unscalable in a world of 1000s of Rollups. Introducing the Gelato 1-Click Price Oracle Module which is natively integrated into the OP Stack and immediately available out of the box for all 1-Click Base L3s. Prices are published to- and verified by a single Rollup (Hub) and disseminated to all other Rollups (Spokes) whilst avoiding duplicate computation and all associated overhead.',
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            'This is the first of many upcoming native modules. Native Modules deliver ultra-low latency and higher throughput by being hosted directly on the chain servers. This tight coupling enables more efficient communication & data transfer compared to relying on external services. Updates run smoother, compatibility issues drop, & the entire system operates more efficiently. Native modules redefine the boundaries of protocol design: Deep integration with core chain functionality unlocks advanced, new solutions, boosting performance far beyond what third-party integrations can achieve.',
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0xf013cc101a13131dca5783bb915792e458cc8fc36bbecc3faaaa2aedff2e5f23',
    applicationId:
      '0xf013cc101a13131dca5783bb915792e458cc8fc36bbecc3faaaa2aedff2e5f23',
    projectId:
      '0x80393c05d524b7a6f7a78b0c141eadf0759642ae8d7e718134318cd2d73d5464',
    category: 'Utility',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: {
      name: 'Runtime Verification',
      description: '',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/44b30b3b-2bce-456e-be10-a04eabce257d.png',
      organizationCoverImageUrl: '',
      socialLinks: {
        website: [],
        farcaster: [],
        twitter: '',
        mirror: '',
      },
      team: ['465226'],
    },
    name: "Formal Verification of Optimism's L1 pausability mechanism",
    description:
      'Runtime Verification has contributed to the security of OP Stack through formal verification proofs of the L1 pausability mechanism. Our open-source formal verification tool, Kontrol, has been successfully integrated into the Optimism CI to continuously ensure that the pausability mechanism remains intact as the code evolves. \n\nThe proofs with their respective documentation can be found at https://github.com/ethereum-optimism/optimism/tree/develop/packages/contracts-bedrock/test/kontrol. \n\nKontrol is an open source, free-to-use tool, which means that the existing and future proofs can be maintained by the Optimism team. At the same time, Kontrol is actively maintained and improved by our team at Runtime Verification, thus ensuring constant performance and user experience enhancements, which are regularly upstreamed to the Optimism monorepo.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/ae7b1252-7b56-4733-81c6-b7303737ce53.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/6f870785-6197-4eb6-8b53-3f6ecfb38eab.png',
    socialLinks: {
      website: ['https://runtimeverification.com/'],
      farcaster: ['https://warpcast.com/rv-inc'],
      twitter: 'https://x.com/rv_inc',
      mirror: null,
    },
    team: [
      {
        fid: 465226,
        object: 'user',
        pfp_url: 'https://i.imgur.com/XEAUuAW.jpg',
        profile: {
          bio: {
            text: 'We apply formal methods to improve the safety, reliability and correctness of computing systems for blockchain, auto and space.',
          },
        },
        username: 'rv-inc',
        power_badge: false,
        display_name: 'Runtime Verification',
        active_status: 'inactive',
        verifications: [],
        follower_count: 10,
        custody_address: '0x897421330b87165ce9aa233cad228b447fa9f95f',
        following_count: 75,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        url: 'https://github.com/runtimeverification/optimism-ci',
        name: 'KaaS CI Setup for Optimism',
        description:
          'This repository provides the setup for K as a Service (KaaS) CI integration with Optimism, enhancing the development and testing experience with the K framework. KaaS introduces new features, streamlines operations, and centralizes shared computational results, making it an ideal solution for web3 teams. By leveraging caching proofs and remote computation, KaaS eliminates redundant processes, saving valuable time and integrating seamlessly with continuous integration (CI) systems.',
      },
      {
        url: 'https://github.com/runtimeverification/_audits_Ethereum-optimism_pausability',
        name: 'Kontrol Integration for Pausability Mechanism Verification in Optimism',
        description:
          'This repository (https://github.com/runtimeverification/_audits_Ethereum-optimism_pausability/tree/feature/rv-compute/packages/contracts-bedrock/test/kontrol) contains the integration of Kontrol, a formal verification tool developed by Runtime Verification, into the Optimism codebase. The integration focuses on verifying the pausability features of the smart contracts within the contracts-bedrock directory. Kontrol leverages KEVM and Foundry, enabling developers to conduct formal verification without requiring extensive knowledge of verification languages or tools. The setup ensures rigorous validation of contract behavior, reducing potential vulnerabilities and enhancing the robustness of the Optimism protocol.',
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://x.com/msolomon44/status/1828523849832612016',
        name: 'Testimonial by Matt Solomon from OP Labs',
        description: 'Kind words from Matt about our engagement with OP Labs.',
      },
      {
        url: 'https://runtimeverification.com/blog/kontrol-integrated-verification-of-the-optimism-pausability-mechanism',
        name: 'Kontrol Integrated Verification of the Optimism Pausability Mechanism ',
        description:
          "We are pleased to announce our recently completed work with Optimism and Kontrol integration into their CI. Having Kontrol as part of Optimism's CI produces proof of correctness for critical properties of the code as it evolves. For this particular engagement, we verified the pausability mechanism of their L1 contracts and integrated the verification work as part of Optimism's CI. This ensures that the code is verified as it evolves.",
      },
      {
        url: 'https://runtimeverification.com/blog/using-kontrol-to-tackle-complexities-caused-by-dynamically-sized-constructs',
        name: 'Using Kontrol to Tackle Complexities Caused by Dynamically-Sized Constructs',
        description:
          'This is the second post of a three-part series about our recent Optimism engagement, in which we verified their pausability mechanism for L1 contracts. This installment explains how Kontrol can be used to tackle the complexities caused by dynamically-sized constructs and the challenges associated with the loops that result from them.',
      },
      {
        url: 'https://runtimeverification.com/blog/external-computation-with-kontrol',
        name: 'External Computation with Kontrol: Leveraging Foundry Execution for Formal Verification',
        description:
          'This is the 3rd post of a three-part series about our recent Optimism engagement, in which we verified their pausability mechanism for L1 contracts. This post will explain a crucial feature we developed in Kontrol to verify the pausability mechanism in a realistic scenario. This new Kontrol feature allows loading a transcript of the effects of executing a function directly into proofs, which effectively means having a part of a Kontrol proof computed by Foundry!',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [],
      revenue: [],
    },
    pricingModel: 'freemium',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Work on core components of the OP Stack, including client implementations, modules, and modifications.',
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
        'Security audits specifically on the OP Stack or its components.',
      ],
      statement: [
        {
          answer:
            "Our project has advanced the OP Stack development by integrating Kontrol, a formal verification tool, into Optimism's CI pipeline. This provides continuous, automated verification of critical properties, such as the L1 pausability mechanism, ensuring the security of the OP Stack as it evolves. By embedding formal verification into the process, developers can detect vulnerabilities early, reducing security risks and improving resilience. This strengthens security while accelerating development and deployment. Additionally, Kontrol updates in Optimism CI are regularly upstreamed (PRs #10159 and #10953). We've also offloaded Kontrol computations to our servers, easing the burden on the OP Labs dev team (PR #11015).\n\n\n\n\n\n",
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            'The primary beneficiaries of our work are the developers and projects building on the Superchain, OP Labs, and the broader Optimism community. By integrating Kontrol into the CI pipeline, we’ve provided a continuous, automated layer of security that verifies the correctness of critical properties as the code evolves. OP Labs, in particular, has benefited from the increased confidence in the security and reliability of the OP Stack, allowing them to focus on innovation without compromising safety. Performance and UX improvements implemented during and after the engagement allow Optimism developers to implement and maintain formal verification proofs independently of RV. In addition, setting up Kontrol proofs helped identify a bug in Foundry (see https://github.com/foundry-rs/foundry/issues/7603), benefitting a broader Ethereum developer community.  ',
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
  {
    id: '0xfc00945848ac2ee9a42c64242e90d612cd16435b46082d4a363c087bd7e4c742',
    applicationId:
      '0xfc00945848ac2ee9a42c64242e90d612cd16435b46082d4a363c087bd7e4c742',
    projectId:
      '0xff3bed7d64f6f616e89032f8661f61259bc0b416ff39e1c8584ae8b34c48dbaa',
    category: 'Utility',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: {
      name: 'Test in Prod (soon to be Sunnyside Labs)',
      description:
        "Test in Prod is a core development team of Optimism Collective. Test in Prod will soon to be rebranded to 'Sunnyside Labs'.",
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/5354c3c3-da28-4097-bb82-b89b630a3d3e.png',
      organizationCoverImageUrl: '',
      socialLinks: {
        website: ['testinprod.io', 'github.com/testinprod-io'],
        farcaster: [],
        twitter: 'https://x.com/testinprod_io',
        mirror: 'https://mirror.xyz/testinprod-io.eth',
      },
      team: ['811328', '849695', '284703', '849643', '849704'],
    },
    name: 'OP Erigon',
    description:
      "OP Erigon is the first alternative execution client implemented to OP Stack. Test in Prod built & has been actively maintaining OP Erigon since April 2023. Since then, OP Erigon has been serving strategic use cases that require Erigon's high efficiency on disk & performance. Notable users are Blockaid, Chainstack, Blockjoy, etc. \n\nIn the Superchain’s vision, disk space is a huge problem. For example, the sum of OP Mainnet, Base, and Zora’s OP Geth archive node size is 16.16TB. On the other hand, OP Erigon only costs 3.55 TB, which is a 78% savings. Considering the challenger nodes need to run all nodes in Superchain with the interop future, leveraging OP Erigon is a huge win.\n\nSince Retro Funding round 3, Test in Prod has worked on the following:\n- Support users to run & troubleshoot OP-Erigon.\n- Update the up-to-date upstream codes.\n- Port Erigon 3, which saves 90.9% of disk footprint compared to Geth on L1.\n- Host the archive node snapshots for OP Mainnet, OP Sepolia, and Base Mainnet—350+ downloads per month.\n- Host the public RPC of OP Erigon & Otterscan, which serves 4.9k requests/day on average.\n\n---\nHere are the commentaries from the notable users: \n\nRaz (CTO of Blockaid): With OP-Erigon, Blockaid could protect users in the Optimism ecosystem (OP Mainnet, Base, and Zora) more effectively by leveraging its efficient disk space and performance. Moreover, working with Sunnyside Labs is a smooth experience—they help us troubleshoot, notify us of upcoming network upgrades, etc. We think their works are impactful, at least for us. \n\nEugene (CTO of Chainstack): Chainstack is using op-erigon for Global Elastic Nodes in OP Mainnet & Base. Thanks to op-erigon, we could run the archive nodes for the Optimism ecosystem more efficiently. Test in Prod was also helpful for the node operations by helping us troubleshoot, alerting us for upcoming upgrades, etc.\n\nChris (CEO of Blockjoy): Blockjoy provides dedicated unmetered op-erigon node services for customers needing high performance Erigon RPCs; notable customers are Trueblocks, Blockaid, etc. Operating nodes as efficiently as possible can require true expertise, this is why we enjoy working with Test in Prod & hope to continue working with them in the future!",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/9f0fd4cc-c85e-4794-970e-56afdf9b3761.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/d7c777b0-0220-4f5f-a4ed-f46931852bdf.png',
    socialLinks: {
      website: [
        'https://op-erigon.testinprod.io',
        'https://github.com/testinprod-io/op-erigon',
        'https://testinprod.io',
      ],
      farcaster: [],
      twitter: 'https://x.com/testinprod_io',
      mirror: 'https://mirror.xyz/testinprod-io.eth',
    },
    team: null,
    github: [
      {
        url: 'https://github.com/testinprod-io/op-erigon',
        name: 'OP Erigon Main Repository',
        description: 'This is a main repository for OP Erigon.',
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://docs.chainstack.com/changelog/chainstack-updates-february-9-2024',
        name: "Chainstack's Product Updates on Feburary",
        description:
          'Announcing that Chainstack is using OP Erigon for Global Elastic Nodes in OP ecosystem.',
      },
      {
        url: 'https://snapshot.testinprod.io/',
        name: 'Snapshot Download Page by Test in Prod',
        description:
          'This is a snapshot download page built & serving by Test in Prod. It serves 350+ downloads a month.',
      },
      {
        url: 'https://op-erigon.mainnet.testinprod.io/',
        name: 'OP Erigon Public RPC for OP Mainnet',
        description:
          'This is a public RPC endpoint for OP Erigon, operated by Test in Prod. It serves 4.9k requests/day on average.',
      },
      {
        url: 'https://discord.com/channels/1095246127965671424/1095246128766787641',
        name: 'OP Erigon Discord',
        description:
          "This is a discord channel that handles OP Erigon's feature reqeusts, bug reports, and support.",
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: null,
          link: null,
          amount: '273293.03',
          date: '',
          details: null,
        },
        {
          grant: 'foundation-grant',
          link: 'https://gov.optimism.io/t/welcoming-test-in-prod-to-the-optimism-collective/6944',
          amount: '5000000',
          date: '2023-08-30',
          details:
            'This is a core dev commitment grant for Test in Prod. 4 years vesting & one year cliff.',
        },
        {
          grant: null,
          link: null,
          amount: '1m-5m',
          date: '2022',
          details: 'Initial friends & family rounds to kick off Test in Prod.',
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Work on core components of the OP Stack, including client implementations, modules, and modifications.',
      ],
      statement: [
        {
          answer:
            'OP Erigon advanced the OP Stack development by providing highly disk-efficient & performant nodes.\n\nIn the Superchain’s vision, disk space is a huge problem. For example, the sum of OP Mainnet, Base, and Zora’s OP Geth archive node size is 16.16TB. On the other hand, OP Erigon only costs 3.55 TB, which is a 78% savings. Considering the challenger nodes need to run all nodes in Superchain with the interop future, leveraging OP Erigon is a huge win.\n\nTherefore, OP Erigon lowers the burdens of infrastructure providers to run OP Chain nodes more properly by providing more disk-efficient nodes.',
          question:
            'How has your project advanced the development of the OP Stack?',
        },
        {
          answer:
            'Node providers. We are providing them with highly efficient clients they can use in OP Chains and helping them to successfully run it for OP Chains.\n\nPlease refer to the commentaries from Blockaid, Chainstack, and Blockjoy in the project descriptions for detailed examples.',
          question:
            'Who has benefited the most from your work on the OP Stack and how?',
        },
      ],
    },
  },
];
