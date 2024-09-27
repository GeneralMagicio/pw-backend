export const projects = [
  {
    id: '0x036fc6760516760a635745917887ae8539ec512f4fde7fd4705a0f3bf3d0cb60',
    applicationId:
      '0x036fc6760516760a635745917887ae8539ec512f4fde7fd4705a0f3bf3d0cb60',
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
    team: null,
    github: [
      {
        id: '0eddb412-ca4a-4201-adb7-b2ce9309ba62',
        type: 'github',
        url: 'https://github.com/shutter-network/shutter',
        name: 'Shutter Network Repo',
        description:
          'This repository contains Shutter, a threshold encryption based front-running protection system for L2s.',
        verified: true,
        openSource: true,
        containsContracts: true,
        createdAt: '2024-09-05T15:35:10.994Z',
        updatedAt: '2024-09-05T15:52:52.949Z',
        projectId:
          '0x3787feef9d17b0d7db30c90fb419f1e8b0587a60bc3031fd9452b1ef1ab77680',
        metrics: {
          artifact_url: 'https://github.com/shutter-network/shutter',
          num_contributors: '8.0',
          num_trusted_contributors: '0.0',
          num_contributors_last_6_months: '3.0',
          num_stars: '61',
          num_trusted_stars: '1.0',
          trust_weighted_stars: '0.0010424537632956',
          num_forks: '14',
          num_trusted_forks: '0.0',
          trust_weighted_forks: '0.0005135256497709',
          trust_rank_for_repo_in_category: '25.0',
          age_of_project_years: '3.4166666666667425',
          license: 'MIT',
        },
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
      revenue: [],
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
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
      ],
      statement: {
        create: [
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
    testimonials:
      'https://www.metricsgarden.xyz/projects/Feasibility%20study%20for%20Front-running%20protection%20via%20shielded%20mempool%20for%20the%20OP%20Stack%20using%20threshold%20encryption',
  },
  {
    id: '0x0403926badb0cd173b98ea187d30423bfbd1d8a7c9c6ba5e874d0ed3872b58c7',
    applicationId:
      '0x0403926badb0cd173b98ea187d30423bfbd1d8a7c9c6ba5e874d0ed3872b58c7',
    projectId:
      '0xc9561ba3e4eca5483b40f8b1a254a73c91fefe4f8aee32dc20c0d96dcf33fe80',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: {
      name: 'Vac',
      description:
        'Vac is a principle-driven research and development group that provides technical support to the Institute of Free Technology (IFT). It comprises R&D Service Units, Deep Research, and Incubator Projects. We do applied research based on which we build protocols, libraries, specifications, and publications. As custodians of these protocols, our aim is to adhere to a set of principles that ensure their alignment with our core values and objectives.',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/b827d993-ab96-46f1-87b9-db390a7c699a.png',
      organizationCoverImageUrl: null,
      socialLinks: {
        website: ['https://vac.dev/'],
        farcaster: [],
        twitter: 'https://x.com/vacp2p',
        mirror: null,
      },
      team: ['849530'],
    },
    name: 'nim-libp2p',
    description:
      "libp2p is a Peer-to-Peer networking stack, with implementations in multiple languages derived from the same specifications.\n\nBuilding large scale peer-to-peer systems has been complex and difficult in the last 15 years and libp2p is a way to fix that. It's striving to be a modular stack, with sane and secure defaults, useful protocols, while remaining open and extensible. This implementation in native Nim, relying on chronos for async. It's used in production by a few projects.\n\nLearn more about libp2p at libp2p.io and follow libp2p's documentation docs.libp2p.io.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/0a383e33-111b-4b55-8380-b9efbb5b8c79.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/b5e4e8f2-f625-445b-b802-817890372687.png',
    socialLinks: {
      website: ['https://github.com/vacp2p/nim-libp2p'],
      farcaster: [],
      twitter: null,
      mirror: null,
    },
    team: [
      {
        fid: 849530,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/5b2446cd-b020-4017-b58b-8834d2fb3a00/rectcrop3',
        profile: { bio: { text: '' } },
        username: 'filip-ift',
        power_badge: false,
        display_name: 'Filip IFT',
        active_status: 'inactive',
        verifications: [],
        follower_count: 12,
        custody_address: '0x66b21071aeb095ebcff2f6d9f5d3793e97922aaa',
        following_count: 5,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: 'be119b31-caa6-42c7-9565-36317983c154',
        type: 'github',
        url: 'https://github.com/vacp2p/nim-libp2p',
        name: null,
        description: null,
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-05T16:26:36.572Z',
        updatedAt: '2024-09-05T16:26:36.572Z',
        projectId:
          '0xc9561ba3e4eca5483b40f8b1a254a73c91fefe4f8aee32dc20c0d96dcf33fe80',
        metrics: {
          artifact_url: 'https://github.com/vacp2p/nim-libp2p',
          num_contributors: '64.0',
          num_trusted_contributors: '1.0',
          num_contributors_last_6_months: '14.0',
          num_stars: '248',
          num_trusted_stars: '2.0',
          trust_weighted_stars: '4.9402827135020596e-08',
          num_forks: '54',
          num_trusted_forks: '1.0',
          trust_weighted_forks: '0.000587396447835',
          trust_rank_for_repo_in_category: '34.0',
          age_of_project_years: '5.8333333333332575',
          license: 'MIT',
        },
      },
    ],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: { ventureFunding: [], revenue: [], grants: [] },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Infrastructure to test and deploy chains'],
      statement: {
        create: [
          {
            answer:
              "ibp2p is an open source networking library used by the world's most important distributed systems such as Ethereum, IPFS, Filecoin, Optimism and countless others. There are native implementations in Go, Rust, Javascript, C++, Nim, Java/Kotlin, Python, .Net, Swift and Zig. It is the simplest solution for global scale peer-to-peer networking and includes support for pub-sub message passing, distributed hash tables, NAT hole punching and browser-to-browser direct communication.",
            question:
              'How does your project support, or is a dependency of, the OP Stack?',
          },
          {
            answer:
              "The OP Stack leverages libp2p for efficient block propagation between nodes and to handle other P2P communication needs. The GossipSub protocol, which is part of the libp2p framework, is used for broadcasting blocks and managing topics on the network to improve latency and bandwidth efficiency. This helps nodes to share information such as blocks and messages more effectively, a critical component of Optimism’s rollup architecture.\n\nMoreover, the OP mainnet specifically uses the Go implementation of libp2p for its networking stack, demonstrating the framework's integration and importance in maintaining secure, decentralized communication within Optimism's ecosystem.",
            question:
              'How would it impact the OP Stack if your project ceased to exist?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/nim-libp2p',
  },
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
    team: [
      {
        fid: 212738,
        object: 'user',
        pfp_url: 'https://i.imgur.com/mtheDpu.jpg',
        profile: { bio: { text: 'R&D @zenbit' } },
        username: 'habacuc',
        power_badge: false,
        display_name: 'habacuc.eth',
        active_status: 'inactive',
        verifications: ['0x04cc6b487566b1c821bea04d7ac0d23cede05cc9'],
        follower_count: 21,
        custody_address: '0x5b521f9af95089b3bca9b43204ddf994623b7537',
        following_count: 106,
        verified_addresses: {
          eth_addresses: ['0x04cc6b487566b1c821bea04d7ac0d23cede05cc9'],
          sol_addresses: [],
        },
      },
      {
        fid: 402339,
        object: 'user',
        pfp_url: 'https://i.imgur.com/vJT5Ee4.jpg',
        profile: { bio: { text: 'Protocol Engineer' } },
        username: 'shyampkira',
        power_badge: false,
        display_name: 'kira',
        active_status: 'inactive',
        verifications: [],
        follower_count: 9,
        custody_address: '0xc8e6b3a4c243d3701213cc99f15064ba9d52890c',
        following_count: 75,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: '80b0c366-00c5-4d37-bcb8-66882aed228e',
        type: 'github',
        url: 'https://github.com/zenbitETH/OPcity',
        name: 'OP City',
        description:
          'This repository documents the research and development efforts for the OP City project.',
        verified: true,
        openSource: true,
        containsContracts: true,
        createdAt: '2024-08-26T00:32:04.948Z',
        updatedAt: '2024-09-04T06:37:25.658Z',
        projectId:
          '0x53499d3243b2c26b1f09d49f911a9d9300d29b2196576d417cf852ac9e8dfe4c',
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
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '24850',
          date: '',
          details: null,
        },
        {
          grant: 'retroFunding',
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
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
      ],
      statement: {
        create: [
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
    testimonials: 'https://www.metricsgarden.xyz/projects/OPcity%20stack',
  },
  {
    id: '0x056236fa3b7b2517f22e884bf78e048e6a29f58f882d5cc186afec84f632664b',
    applicationId:
      '0x056236fa3b7b2517f22e884bf78e048e6a29f58f882d5cc186afec84f632664b',
    projectId:
      '0xdf1bb03d08808e2d789f5eac8462bdc560f1bb5b0877f0cf8c66ab53a0bc2f5c',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: {
      name: 'Sigma Prime',
      description:
        'We are a team of researchers engineers and developers working towards improving decentralized technology as best we can.',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/156370a7-5b85-4b7b-a5a8-ddf2b47c9d39.png',
      organizationCoverImageUrl: '',
      socialLinks: {
        website: ['https://sigmaprime.io'],
        farcaster: [],
        twitter: '@sigp_io',
        mirror: '',
      },
      team: ['845911'],
    },
    name: 'Rust Libp2p',
    description:
      'The rust implementation of libp2p. Libp2p is a modular framework for a variety of p2p protocols. These protocols are used widely by a variety of projects to establish p2p communications in a decentralized manner.\n\nThe rust implementation is used by a variety of projects in the space including, Magi (OP Stack rollup client), Lighthouse (Ethereum consensus client) and Forest (Filecoin client). \n\nThe rust implementation specifically, is used by a variety of projects in the ',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/352a5108-5f07-4765-a43d-7ba0b4b27054.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/01e43966-8955-4584-b45d-84645a97dc5d.png',
    socialLinks: {
      website: ['https://sigmaprime.io'],
      farcaster: [],
      twitter: '@sigp_io',
      mirror: null,
    },
    team: [
      {
        fid: 845911,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/0a84c5f7-023e-4aae-21bd-8284aac58200/original',
        profile: { bio: { text: 'Sigma Prime' } },
        username: 'agemanning',
        power_badge: false,
        display_name: 'Adrian Manning',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0x7a0ae3851146324920cd94c43ef635973b6a1243',
        following_count: 0,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: 'a266b4e2-885f-4865-adbf-e11bef8f3708',
        type: 'github',
        url: 'https://github.com/libp2p/rust-libp2p',
        name: 'Rust-Libp2p',
        description:
          'Collection of p2p protocols in the rust programming language',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-02T00:10:25.275Z',
        updatedAt: '2024-09-02T00:11:12.843Z',
        projectId:
          '0xdf1bb03d08808e2d789f5eac8462bdc560f1bb5b0877f0cf8c66ab53a0bc2f5c',
        metrics: {
          artifact_url: 'https://github.com/libp2p/rust-libp2p',
          num_contributors: '488.0',
          num_trusted_contributors: '11.0',
          num_contributors_last_6_months: '70.0',
          num_stars: '4485',
          num_trusted_stars: '26.0',
          trust_weighted_stars: '0.0992574554824743',
          num_forks: '930',
          num_trusted_forks: '13.0',
          trust_weighted_forks: '0.0233092255921537',
          trust_rank_for_repo_in_category: '13.0',
          age_of_project_years: '6.8333333333332575',
          license: 'MIT',
        },
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://github.com/libp2p/rust-libp2p',
        name: 'Rust Libp2p',
        description: 'The core rust libp2p library',
      },
    ],
    contracts: [],
    grantsAndFunding: { ventureFunding: [], revenue: [], grants: [] },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Ethereum client implementations',
        'Ethereum test networks',
        'Research which informs Ethereum core development',
        'Infrastructure to test and deploy chains',
      ],
      statement: {
        create: [
          {
            answer:
              'Rust-libp2p underpins a number of projects in the blockchain ecosystem. Directly relevant projects are Magi (the rust OP rollup client) and Lighthouse (the rust Ethereum consensus client). \n\nThere are a number of efforts currently undertaken in this project that support the OP stack (albeit indirectly). \n\n1. Research efforts - Improvements to the specifications and protocols. This has resulted in faster networks, reduced bandwidth on clients and therefore lowering spec requirements to run nodes.\n2. Security efforts - This project is actively tested and fuzzed for security vulnerabilities. Over the last few months we have identified and patched bugs in a variety of dependencies helping the security posture of the entire ecosystem.\n3. Maintenance - Upgrades to core protocols, improved APIs and efficiency gains as the ecosytem advances.',
            question:
              'How does your project support, or is a dependency of, the OP Stack?',
          },
          {
            answer:
              "This project is one implementation of many. Client diversity is a necessity in blockchain systems. With multiple implementations running on a network, a catastrophic bug in one implementation will not destroy an entire network/chain. \n\nWithout rust-libp2p, the rust Magi OP client and rust Lighthouse Ethereum consensus clients wouldn't function and would reduce the client diversity and therefore resilience of the OP stack to bugs and attack vectors. \n\nFurthermore the extensive research on the p2p network layer that has been done by the rust-libp2p team wouldn't continue and improve network health. As networks evolve over time, new and improved ways to handle larger networks and connectivity as well as improving efficiency becomes increasingly important. This is a direct focus of this project.",
            question:
              'How would it impact the OP Stack if your project ceased to exist?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/Rust%20Libp2p',
  },
  {
    id: '0x078cf11f1d64911d10f1d57c1da9c09d67a167472afc530f3412c304ee0f239e',
    applicationId:
      '0x078cf11f1d64911d10f1d57c1da9c09d67a167472afc530f3412c304ee0f239e',
    projectId:
      '0x2e075fb37977668c15af474229f2f2abb009850a6a867b8bbf4adb5e293d1fe3',
    category: 'Utility',
    applicationCategory: 'OP_STACK_TOOLING',
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
    name: 'Rollup-as-a-Service Platform',
    description:
      'Launch enterprise-grade L2 & L3 ⛓️ chains integrated with industry-standard Web3 services in just 1-click!\n\nGelato powers several OP chains, including some in stealth mode, enabling over 19.5M transactions in just a few months.\n',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/c5ebe0aa-0eeb-40e0-8c47-469b57f0929c.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/08ba45cb-5bf8-4840-a63e-7dfc1f7d3eb4.png',
    socialLinks: {
      website: ['https://www.gelato.network/raas'],
      farcaster: ['https://warpcast.com/gelatonetwork'],
      twitter: 'https://twitter.com/gelatonetwork',
      mirror: null,
    },
    team: [
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
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [],
    packages: [],
    links: [
      {
        url: 'https://raas.gelato.network/rollups/details/public/gameswift-chain-testnet',
        name: 'GameSwift Testnet',
        description:
          'GameSwift already facilitated more than 3 million of transactions on testnet by joining the Superchain and creating a scalable, one-stop gaming ecosystem.',
      },
      {
        url: 'https://raas.gelato.network/rollups/details/public/camp-network-testnet',
        name: 'Camp Testnet',
        description:
          'Camp developed a modular identity layer for monetizing data from platforms like Instagram & Spotify.',
      },
      {
        url: 'https://raas.gelato.network/rollups/details/public/opcelestia-raspberry',
        name: 'Gelato OP Celestia Raspberry',
        description:
          'Our free public testnet come fully equipped with all the web3 infrastructure services you need. The idea is to have these testnets as a playground where users can test out what a Gelato hosted rollup feels like, along with awesome services from third-party providers without any costs or long-term commitments involved.',
      },
      {
        url: 'https://raas.gelato.network/rollups/details/public/ethernity-mainnet',
        name: 'Ethernity Mainnet',
        description:
          'Ethernity launched the first entertainment-focused, AI-powered L2, surpassing 3.5M transactions on testnet and 685k on mainnet so far.',
      },
      {
        url: 'https://raas.gelato.network/rollups/details/public/lisk',
        name: 'Lisk Mainnet',
        description:
          "Lisk became the first L1 to join the Optimism Superchain, benefiting from 17+ infrastructure providers, including Gelato's services, oracles, and more. Gelato’s RaaS allows the Lisk team to be primarily focused on building additional products that developers and users love, while also committing resources to the Superchain development.\n",
      },
      {
        url: 'https://raas.gelato.network/auth',
        name: 'Deploy your own rollup',
        description:
          'Deploy production-grade & fully-managed OP Stack Rollups.',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [
        {
          amount: '10m-25m',
          year: '2021',
          details:
            'Our Series A round was in 2021 ($11M). Since then Gelato raised more funds (undisclosed). Total funding is below $25M.\n',
        },
      ],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '76445.53',
          date: '',
          details: null,
        },
        {
          grant: 'retroFunding',
          link: null,
          amount: '17983.16',
          date: '',
          details: null,
        },
      ],
    },
    pricingModel: {
      type: 'pay_to_use',
      details:
        'Starting at $99/month for a testnet and $3,000/month for a mainnet.\n',
    },
    impactStatement: {
      category: 'OP_STACK_TOOLING',
      subcategory: ['Services for deploying and hosting an OP Chain.'],
      statement: {
        create: [
          {
            answer:
              "Gelato offers the Rollup as a Service platform, enabling projects to effortlessly launch and operate within the Superchain ecosystem. We provide extensive pre-deployment support and continuous assistance throughout the project’s lifecycle. Understanding the importance of launching an OP chain, Gelato has created a holistic platform that simplifies deployment on both testnet and mainnet, making it as easy as a few clicks. With Gelato, spinning up a chain has never been easier. Additionally, we offer essential infrastructure services such as bridges, block explorers, oracles, RPCs, as well as Gelato's proprietary middleware solutions. Our robust infrastructure guarantees smooth operations with a remarkable 99.99%+ uptime.",
            question:
              'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?',
          },
          {
            answer:
              'Gelato powers several OP chains, including some in stealth mode, enabling over 19.5M transactions in just a few months. Lisk’s OP chain on Gelato has grown to become the 4th largest OP Superchain by TVL. Ethernity launched the first entertainment-focused, AI-powered L2, already surpassing 3.5M transactions on testnet. Similarly, Camp developed a modular identity layer for monetizing data from platforms like Instagram & Spotify. And GameSwift facilitated millions of transactions by joining the Superchain and creating a scalable, one-stop gaming ecosystem.',
            question:
              'Who has used your tooling and how has it benefited them?',
          },
        ],
      },
    },
    testimonials:
      'https://www.metricsgarden.xyz/projects/Rollup-as-a-Service%20Platform',
  },
  {
    id: '0x0b0732b7b9d8521f68d5b19a99bd6a62d0b66d8035e21596fc599c02060b7e00',
    applicationId:
      '0x0b0732b7b9d8521f68d5b19a99bd6a62d0b66d8035e21596fc599c02060b7e00',
    projectId:
      '0x04b1cd5a7c59117474ce414b309fa48e985bdaab4b0dab72045f74d04ebd8cff',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: {
      name: 'Sigma Prime',
      description:
        'We are a team of researchers engineers and developers working towards improving decentralized technology as best we can.',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/156370a7-5b85-4b7b-a5a8-ddf2b47c9d39.png',
      organizationCoverImageUrl: '',
      socialLinks: {
        website: ['https://sigmaprime.io'],
        farcaster: [],
        twitter: '@sigp_io',
        mirror: '',
      },
      team: ['845911'],
    },
    name: 'Lighthouse',
    description:
      'Lighthouse is a leading Ethereum consensus client written in the rust programming language. \n\nIt is built and maintained by a team of engineers, researchers and developers dedicated to advancing the current state of decentralized technology.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/f32836f7-e483-43c8-94a3-098d7bcaf040.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/34a19c11-c391-40e3-b16a-24372308a4ea.png',
    socialLinks: {
      website: ['https://lighthouse.sigmaprime.io'],
      farcaster: [],
      twitter: '@sigp_io',
      mirror: null,
    },
    team: [
      {
        fid: 845911,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/0a84c5f7-023e-4aae-21bd-8284aac58200/original',
        profile: { bio: { text: 'Sigma Prime' } },
        username: 'agemanning',
        power_badge: false,
        display_name: 'Adrian Manning',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0x7a0ae3851146324920cd94c43ef635973b6a1243',
        following_count: 0,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: 'a4dd3807-b72d-4712-8882-d7c63f9341fc',
        type: 'github',
        url: 'https://github.com/sigp/lighthouse',
        name: 'Lighthouse',
        description: 'Leading Ethereum consensus client in rust.',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-08-29T04:44:42.207Z',
        updatedAt: '2024-09-25T07:17:57.532Z',
        projectId:
          '0x04b1cd5a7c59117474ce414b309fa48e985bdaab4b0dab72045f74d04ebd8cff',
        metrics: {
          artifact_url: 'https://github.com/sigp/lighthouse',
          num_contributors: '585.0',
          num_trusted_contributors: '46.0',
          num_contributors_last_6_months: '101.0',
          num_stars: '2882',
          num_trusted_stars: '47.0',
          trust_weighted_stars: '0.2323798728905557',
          num_forks: '725',
          num_trusted_forks: '36.0',
          trust_weighted_forks: '0.1255988958080959',
          trust_rank_for_repo_in_category: '5.0',
          age_of_project_years: '6.1666666666667425',
          license: 'Apache-2.0',
        },
      },
    ],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '165460',
          date: '',
          details: null,
        },
        {
          grant: 'retroFunding',
          link: null,
          amount: '298138',
          date: '',
          details: null,
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Ethereum client implementations'],
      statement: {
        create: [
          {
            answer:
              'Lighthouse is core client of the Ethereum consensus ecosystem. There are a variety of metrics, but in regards to validators on the network Lighthouse holds around ~30% of the network. \n\nWe are a core component of the network. Our client has proven resilience to a variety of attacks on the network and on numerous cases remained online when other clients failed, keeping the Ethereum chain alive. \n\nIf our project did not exist, the Ethereum chain would definitely lose some resilience to attacks, diversity in performance and network connectivity. We also like to think we help out with improving specifications and implementations of new features which not only help layer 1 but also layer 2s. ',
            question:
              'How would it impact the OP Stack if your project ceased to exist?',
          },
          {
            answer:
              'There have been three main areas R&D that we have been working on in the last 8-10 months. These are the Ethereum Electra Fork, PeerDAS and network R&D. \n\nThe Electra Ethereum fork is a core milestone and planned upgrade for Ethereum. It contains a number of upgrades for the core Ethereum network which indirectly benefits the OP stack. \n\nPeerDAS has a more direct benefit for the OP stack. With PeerDAS we are aiming to reduce the load on individual nodes to increase the throughput of the layer 1 chain. This should result in lower gas fees for OP and improve the scalability of the entire Ethereum and layer 2 ecosystems.\n\nWe have been working on structures and improvements for our networking layer which is used not only in Lighthouse but as dependencies for an OP node implementation. We defer this work to a separate project, rust-libp2p and omit it from this one.',
            question:
              'How does your project support, or is a dependency of, the OP Stack?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/Lighthouse',
  },
  {
    id: '0x11c3d1437e8ac8ee38b29886eeb14061c06e372a5d5a08ec629d5fdeef8cd1f6',
    applicationId:
      '0x11c3d1437e8ac8ee38b29886eeb14061c06e372a5d5a08ec629d5fdeef8cd1f6',
    projectId:
      '0xe346264e87202b47f1057eb0b0fcaa0ea7f83e14507ca4585a91a5d94e0e92c0',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: null,
    name: 'Nimbus',
    description:
      'Nimbus is a client implementation for both Ethereum’s Consensus Layer and Execution Layer that strives to be as lightweight as possible in terms of resources used. ',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/cf0751ef-d8aa-4814-80c7-70e3a305499d.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/14ef8c04-600b-4449-a501-2c8e1880ac9e.png',
    socialLinks: {
      website: ['https://nimbus.team/'],
      farcaster: [],
      twitter: 'https://twitter.com/ethnimbus',
      mirror: null,
    },
    team: [
      {
        fid: 12747,
        object: 'user',
        pfp_url: 'https://i.imgur.com/eobbVQH.jpg',
        profile: {
          bio: {
            text: '@liftlines / ecosystem development for Nimbus client and Waku protocol ',
          },
        },
        username: 'liftlines',
        power_badge: false,
        display_name: 'Kaushal',
        active_status: 'inactive',
        verifications: ['0x310887591bb3a7f4ace07ed837484d5dcead9bbb'],
        follower_count: 269,
        custody_address: '0x3f374b289e6003d4b377fa4ca2cf7f7659b18065',
        following_count: 104,
        verified_addresses: {
          eth_addresses: ['0x310887591bb3a7f4ace07ed837484d5dcead9bbb'],
          sol_addresses: ['3x3FPsycDR6mXsT2FPBSS5d49K1gSqKB3LaADvopTRCa'],
        },
      },
    ],
    github: [
      {
        id: '2917e5c8-8db0-47ae-8399-f05b055f8387',
        type: 'github',
        url: 'https://github.com/status-im/nimbus-eth2',
        name: 'Nimbus Consensus Client Repo',
        description:
          'Nim implementation of the Ethereum Beacon Chain (Consensus Client)',
        verified: true,
        openSource: false,
        containsContracts: false,
        createdAt: '2024-08-29T21:21:18.029Z',
        updatedAt: '2024-08-30T11:14:59.090Z',
        projectId:
          '0xe346264e87202b47f1057eb0b0fcaa0ea7f83e14507ca4585a91a5d94e0e92c0',
        metrics: {
          artifact_url: 'https://github.com/status-im/nimbus-eth2',
          num_contributors: '243.0',
          num_trusted_contributors: '19.0',
          num_contributors_last_6_months: '41.0',
          num_stars: '523',
          num_trusted_stars: '13.0',
          trust_weighted_stars: '0.003973609230969',
          num_forks: '226',
          num_trusted_forks: '15.0',
          trust_weighted_forks: '0.0042632590962597',
          trust_rank_for_repo_in_category: '16.0',
          age_of_project_years: '6.1666666666667425',
          license: 'Custom',
        },
      },
    ],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '84018',
          date: '',
          details: null,
        },
        {
          grant: 'retroFunding',
          link: null,
          amount: '198758',
          date: '',
          details: null,
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Ethereum client implementations'],
      statement: {
        create: [
          {
            answer:
              'Nimbus is one of the Consensus clients in the Ethereum network. Between Oct 2023 to July 2024, one of the main contributions of Nimbus to the Op Stack was its contributions to EIP 4844 and the associated implementation for proto-danksharding as part of the Dencun hardfork, which led to significant reduction in cost for rollups. \n\nThis involved reviewing the EIP and providing feedback on the specifications from the perspective of a Consensus client, and consistently participating in all devnets and testnets leading up to the hardfork on the mainnet by ensuring client readiness in line with the specs to maintain the timelines. \n\n',
            question:
              'How does your project support, or is a dependency of, the OP Stack?',
          },
          {
            answer:
              'Nimbus consensus client has approx 11-12% representation in the network based on https://blockprint.sigp.io .Nimbus has actively advocated for better client diversity in the network and through these contributions, ensures a more robust L1 for the Op-stack. \n\nFor additional context, Nimbus is also developing an Execution Layer client with a goal to develop an OP version of Nimbus EL subsequently. During the timeframe between Oct 2023 - July 2024 the Nimbus EL project has made significant progress, however as this is not on mainnet yet, we do not advocate for considering its impact as part of this Retro Funding round. \n\nIf the Nimbus project ceases to exist, it would impact the client diversity on both, the Execution Layer and Consensus Layer of L1, impacting the robustness of L1 and hampering efforts to work on future improvements proposals benefiting rollups (e.g. PeerDAS, which is likely to be included in the Pectra hardfork and results in continued lower costs for rollups). ',
            question:
              'How would it impact the OP Stack if your project ceased to exist?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/Nimbus',
  },
  {
    id: '0x15ad7707cbebf66f201e96a81fb821bd0afab6a6e93dc63a82f787bd09dbb53f',
    applicationId:
      '0x15ad7707cbebf66f201e96a81fb821bd0afab6a6e93dc63a82f787bd09dbb53f',
    projectId:
      '0x9ca1f7b0e0d10d3bd2619e51a54f2e4175e029c87a2944cf1ebc89164ba77ea0',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: null,
    name: 'Vyper',
    description: 'Pythonic Smart Contract Language for the EVM',
    profileAvatarUrl:
      'https://cdn.charmverse.io/user-content/5302de23-eae6-4cda-97aa-25fefd829726/9aa6f15f-e32a-4bca-a40a-5b1e1122babb/2024-06-11_23-25.png',
    projectCoverImageUrl:
      'https://cdn.charmverse.io/user-content/5302de23-eae6-4cda-97aa-25fefd829726/6c137923-55fc-4dc9-9424-5dad59f82ab4/vyper-optimism.png',
    socialLinks: {
      website: ['https://github.com/vyperlang/vyper', 'https://vyperlang.org/'],
      farcaster: ['https://warpcast.com/~/channel/vyper'],
      twitter: 'https://x.com/vyperlang?lang=en',
      mirror: null,
    },
    team: [
      {
        fid: 253861,
        object: 'user',
        pfp_url: 'https://i.imgur.com/Q9Z8JNf.jpg',
        profile: { bio: { text: 'DeFi plumber' } },
        username: 'bennylada',
        power_badge: false,
        display_name: 'benny',
        active_status: 'inactive',
        verifications: ['0x0b98718264ca14d0a17c145ffe1e4f3c38a39372'],
        follower_count: 216,
        custody_address: '0xc1c5c439808a1fc1c1831c1ece1921dfffb86885',
        following_count: 82,
        verified_addresses: {
          eth_addresses: ['0x0b98718264ca14d0a17c145ffe1e4f3c38a39372'],
          sol_addresses: [],
        },
      },
      {
        fid: 14976,
        object: 'user',
        pfp_url: 'https://i.imgur.com/7wfupgk.jpg',
        profile: {
          bio: {
            text: "𝐖𝐨𝐫𝐤𝐢𝐧𝐠 𝐨𝐧 𝐰𝐡𝐚𝐭'𝐬 𝐧𝐞𝐱𝐭.\n\nhttps://github.com/pcaversaccio",
          },
        },
        username: 'pcaversaccio',
        power_badge: true,
        display_name: 'sudo rm -rf --no-preserve-root /',
        active_status: 'inactive',
        verifications: ['0x07bf3cda34aa78d92949bbdce31520714ab5b228'],
        follower_count: 2735,
        custody_address: '0xf5c07af5ce02a3f95a5af3063e3b582de50971d9',
        following_count: 151,
        verified_addresses: {
          eth_addresses: ['0x07bf3cda34aa78d92949bbdce31520714ab5b228'],
          sol_addresses: [],
        },
      },
      {
        fid: 19809,
        object: 'user',
        pfp_url: 'https://i.imgur.com/G8TF9IL.jpg',
        profile: { bio: { text: '/vyper' } },
        username: 'big-tech-sux',
        power_badge: false,
        display_name: 'sudo init vyper',
        active_status: 'inactive',
        verifications: [],
        follower_count: 74,
        custody_address: '0x24b1d2817d8a2cdbaf2b36d54b7c23deb235932e',
        following_count: 4,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: 'e3d0df25-be64-4c73-94e9-504e104d1fcc',
        type: 'github',
        url: 'https://github.com/vyperlang/vyper',
        name: 'Vyper',
        description: 'Pythonic Smart Contract Language for the EVM',
        verified: true,
        openSource: false,
        containsContracts: false,
        createdAt: '2024-08-15T00:48:33.232Z',
        updatedAt: '2024-09-01T13:19:30.195Z',
        projectId:
          '0x9ca1f7b0e0d10d3bd2619e51a54f2e4175e029c87a2944cf1ebc89164ba77ea0',
        metrics: {
          artifact_url: 'https://github.com/vyperlang/vyper',
          num_contributors: '458.0',
          num_trusted_contributors: '28.0',
          num_contributors_last_6_months: '33.0',
          num_stars: '4842',
          num_trusted_stars: '38.0',
          trust_weighted_stars: '0.178651750044745',
          num_forks: '789',
          num_trusted_forks: '20.0',
          trust_weighted_forks: '0.0519802285559191',
          trust_rank_for_repo_in_category: '8.0',
          age_of_project_years: '7.8333333333332575',
          license: 'Custom',
        },
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://defillama.com/languages',
        name: 'Smart Contract Programming Language Statistics',
        description:
          'Vyper is the #2 most popular EVM programming language, securing $2b+ of value ($50m of which are on Optimism)',
      },
      {
        url: 'https://github.com/benber86/vyper_bytecode',
        name: 'Vyper Bytecode Benchmark',
        description:
          'Benchmarks showing that Vyper generates on average 50% less bytecode than Solidity',
      },
      {
        url: 'https://github.com/z80dev/gascomps',
        name: 'Gas Usage Benchmark',
        description:
          'Benchmark showing that Vyper uses much less gas for standard ERC20 functions compared to Solidity reference implementations ',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '135200',
          date: '',
          details: null,
        },
        {
          grant: 'retroFunding',
          link: null,
          amount: '248448.21',
          date: '',
          details: null,
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Languages which are dedicated to developing smart contracts',
      ],
      statement: {
        create: [
          {
            answer:
              "- Vyper contracts account for over 5% ($30m) of the TVL on Optimism and secure more than $2 billion across multiple chains for major protocols such as Curve, Velodrome, Lido, Perpetual Protocol and Yearn.\n- Vyper is the currently the only production-ready alternative to Solidity, as such it is the main driver of language diversity on the OP stack, hereby reducing the risk of a systemic failure arising from vulnerabilities in a single programming language.\n- Vyper's commitment to security through its language design choices and stringent audit process increases the security of the OP Stack.\n- Vyper's easy, Pythonic syntax is great to onboard web2 developers already familiar with Python to web3\n- The Vyper team's continued efforts to bring optimizations to the compiler enhance the efficiency of the OP stack.",
            question:
              'How does your project support, or is a dependency of, the OP Stack?',
          },
          {
            answer:
              '- Major projects of the OP stack such as Velodrome, Curve or Yearn which rely on Vyper would see their future development hindered and would not receive support as all or part of their contracts are written in Vyper\n- Smart contracts on the OP Stack would be entirely dominated by a single programming language with all the centralization risks that this situation implies \n- Lose out on an excellent gateway for onboarding new developers',
            question:
              'How would it impact the OP Stack if your project ceased to exist?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/Vyper',
  },
  {
    id: '0x19c6b7b2fd40036f3a778cf3c3998ad1ecb19dc285cebdd164b52939fa4ea3b4',
    applicationId:
      '0x19c6b7b2fd40036f3a778cf3c3998ad1ecb19dc285cebdd164b52939fa4ea3b4',
    projectId:
      '0x7504e494cb8d227193182e083128912173c14eaeecec9b90fa453de28377b269',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: {
      name: 'Interplanetary Shipyard',
      description:
        'Interplanetary Shipyard is an independent engineering team maintaining, operating, and developing the canonical IPFS and libp2p implementations.',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/cc5bdce9-2076-4218-bb6e-08c08a03f9fe.png',
      organizationCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/f1bfae12-e2c7-4d3c-b5a6-036fe77579e5.png',
      socialLinks: {
        website: ['https://ipshipyard.com/'],
        farcaster: [],
        twitter: 'https://x.com/ipshipyard',
        mirror: '',
      },
      team: ['845866', '779819', '468804', '849466'],
    },
    name: 'Hermes - a GossipSub listener and tracer for libp2p-based networks.',
    description:
      'The ProbeLab team has recently built Hermes, a GossipSub listener and tracer for libp2p-based networks. Hermes-based experiments aim to measure the efficiency and performance of the GossipSub message broadcasting protocol in any libp2p-based network. Acting as a light node of sorts, Hermes can help developers collect valuable data and tune their network’s protocols based on the message propagation latency, control message overhead and a variety of other metrics. Hermes currently supports the Ethereum consensus layer network.\n\nThe ProbeLab team specialises in network-layer measurements and monitoring. The team operates a variety of tools and uses the data it collects to propose network protocol optimisations.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/90c0de0c-cc0e-4959-afb7-a78ae4c9d674.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/e1d59a51-3f6f-4642-bc88-553026d2d067.png',
    socialLinks: {
      website: ['https://probelab.io', 'https://probelab.network'],
      farcaster: ['@yiannisbot'],
      twitter: '@yiannisbot',
      mirror: null,
    },
    team: [
      {
        fid: 845866,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/3608c536-9510-4ea4-81bb-2aa023255e00/rectcrop3',
        profile: { bio: { text: '' } },
        username: 'pshahi',
        power_badge: false,
        display_name: 'Prithvi Shahi',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0xc3fb1e793f7d63b49c6b212feb1c0b1fc586936d',
        following_count: 0,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 779819,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/67cc6023-7cea-4d66-6c0e-fe3b0a2a9300/rectcrop3',
        profile: {
          bio: {
            text: 'Talkative introvert. Systems & Software engineer. Open-source advocate. Technology enthusiast. Problem solver. Travel aficionado.',
          },
        },
        username: 'cewood',
        power_badge: false,
        display_name: 'Cameron',
        active_status: 'inactive',
        verifications: [],
        follower_count: 10,
        custody_address: '0x5ee947247b33c94dd939da016a802f29950ad972',
        following_count: 65,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 468804,
        object: 'user',
        pfp_url: 'https://i.imgur.com/gDORBsA.jpg',
        profile: {
          bio: { text: 'https://probelab.io & https://probelab.network' },
        },
        username: 'yiannisbot',
        power_badge: false,
        display_name: 'Yiannis Psarras',
        active_status: 'inactive',
        verifications: [],
        follower_count: 5,
        custody_address: '0xc411d534c86f7ff6ca949bf1e564d86bc1922a57',
        following_count: 75,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 849466,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/c08647c6-8576-479d-0320-515a2022c000/rectcrop3',
        profile: {
          bio: {
            text: 'Building IPFS and libp2p at Interplanetary Shipyard',
          },
        },
        username: 'aschmahmann',
        power_badge: false,
        display_name: 'Adin Schmahmann',
        active_status: 'inactive',
        verifications: [],
        follower_count: 1,
        custody_address: '0x7ac3127dc045ab7307adf44442f6e8d835504c48',
        following_count: 0,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: 'a6839067-d211-4604-85ba-c69ee5c23d40',
        type: 'github',
        url: 'https://github.com/probe-lab/hermes',
        name: 'Hermes',
        description: 'Main project repository.',
        verified: true,
        openSource: false,
        containsContracts: false,
        createdAt: '2024-09-03T06:05:45.943Z',
        updatedAt: '2024-09-03T11:39:03.263Z',
        projectId:
          '0x7504e494cb8d227193182e083128912173c14eaeecec9b90fa453de28377b269',
        metrics: {
          artifact_url: 'https://github.com/probe-lab/hermes',
          num_contributors: '11.0',
          num_trusted_contributors: '3.0',
          num_contributors_last_6_months: '10.0',
          num_stars: '15',
          num_trusted_stars: '2.0',
          trust_weighted_stars: '0.0045140655475526',
          num_forks: '5',
          num_trusted_forks: '1.0',
          trust_weighted_forks: '0.0012790210212184',
          trust_rank_for_repo_in_category: '14.0',
          age_of_project_years: '0.75',
          license: 'Custom',
        },
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://probelab.io/tools/hermes/',
        name: 'Hermes @ probelab.io',
        description: 'Tool description',
      },
    ],
    contracts: [],
    grantsAndFunding: { ventureFunding: [], revenue: [], grants: [] },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Ethereum client implementations',
        'Research which informs Ethereum core development',
        'Ethereum test networks',
      ],
      statement: {
        create: [
          {
            answer:
              "Hermes has been used to produce high-impact research and inform developments of the Ethereum core protocol. The studies that Hermes enabled have revealed important insights wrt central protocols of the Ethereum stack, such as Gossipsub.\n\nHighlights include capturing metrics such as the number of duplicate messages in the network [1], the bandwidth consumption of Ethereum nodes [2] and the effectiveness of Gossipsub's gossip technique [3].\n\nLast but not least, Hermes has been used by EF and other teams to inform design decisions related to PeerDAS and for making data available to the public to dig into and reuse through the integration with Xatu [4].\n\n[1] https://ethresear.ch/t/number-duplicate-messages-in-ethereums-gossipsub-network/19921\n[2] https://ethresear.ch/t/ethereum-node-message-propagation-bandwidth-consumption/19952\n[3] https://ethresear.ch/t/gossip-iwant-ihave-effectiveness-in-ethereums-gossipsusb-network/19686\n[4] https://ethpandaops.io/posts/xatu-consensus-layer-p2p/\n\n",
            question:
              'How does your project support, or is a dependency of, the OP Stack?',
          },
          {
            answer:
              'Ethereum is securing L2 networks, such as Optimism. The correct, secure and optimised operation of Ethereum is a prerequisite for the health of Optimism. Acting as a light client of sorts, Hermes is making it easier to experiment with network protocol setups and parameter settings and ensures that informed decisions are made when it comes to Ethereum core protocol developments.\n\nAs such, if Hermes ceased to exist, Ethereum (and L2s) core developers would have less insights on the internals of the P2P network. Other similar tools and infrastructure would have to be set up in order to be able to extract metrics, such as the following from the network.\n\n- Bandwidth consumption of Ethereum nodes\n- Number of Duplicate messages in the network\n- Gossip Effectiveness\n- Number of IDONTWANTs and resulting bandwidth saving\n- Block propagation latency',
            question:
              'How would it impact the OP Stack if your project ceased to exist?',
          },
        ],
      },
    },
    testimonials:
      'https://www.metricsgarden.xyz/projects/Hermes%20-%20a%20GossipSub%20listener%20and%20tracer%20for%20libp2p-based%20networks.',
  },
  {
    id: '0x1d333bf10026574b8df913bd83cff4c7e737fa0f2e18f55659672b6c001478eb',
    applicationId:
      '0x1d333bf10026574b8df913bd83cff4c7e737fa0f2e18f55659672b6c001478eb',
    projectId:
      '0x6830f24e2e893931d62d8118146a7bbffb5cd1f78945318865a52bd6a6cbe245',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: {
      name: 'EthereumJS',
      description:
        'A research team under the Ethereum Foundation dedicated to maintaining core Ethereum protocol primitives built in Javascript as well as continuously supporting the future of the protocol by building initial implementations of new EIPs and helping build and validate client test suites.',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/4a6a80d2-0175-4785-a430-d869a974040c.png',
      organizationCoverImageUrl: '',
      socialLinks: {
        website: [],
        farcaster: [],
        twitter: 'https://x.com/EFJavaScript',
        mirror: '',
      },
      team: ['8687', '845732', '845750', '20870', '850246', '195598'],
    },
    name: 'ethereumjs-monorepo',
    description:
      'A collection of Javascript/TypeScript libraries implementing Ethereum primitives, including an implementation of the Ethereum Virtual Machine (EVM) ready to be used in Node.js or a browser environment, implementations of core structural blockchain building blocks like an Ethereum Tx, Block or Blockchain as well as a Trie (Merkle Patricia Tree), devp2p (execution networking layer) implementation, and an experimental Verkle Trie implementation.\n\nAbove are complemented by helper packages like RLP for data encoding/decoding or Util, providing helper functionalities like (byte) conversion, signatures, types and others.\n\nFinally, the EthereumJS Execution Client is fully functional Execution Layer client used mainly testing out of new EIP implementations as well as participating in devnets and testnets preparing for hardfork upgrades.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/218036da-e153-4b4d-9730-4802bb4546f6.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/42d99706-ec97-446b-9abe-9c9de5028e33.png',
    socialLinks: {
      website: ['https://github.com/ethereumjs/ethereumjs-monorepo'],
      farcaster: [],
      twitter: 'https://x.com/EFJavaScript/',
      mirror: null,
    },
    team: [
      {
        fid: 849565,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/6725aebf-2823-440f-6fc6-781cc012d300/rectcrop3',
        profile: { bio: { text: '' } },
        username: 'scottypoi',
        power_badge: false,
        display_name: 'Scotty',
        active_status: 'inactive',
        verifications: [],
        follower_count: 1,
        custody_address: '0xf38d5a1c123b87049176e9f69ef4c50b22e5f51d',
        following_count: 1,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 8687,
        object: 'user',
        pfp_url:
          'https://i.seadn.io/gae/pf2nOIZVUXx1KexICjK1tGO0O2pDZ0BZ9Ny2thR_9I4FMQNK7Ipox3OUibWRaNwBSQbZJK4KEAcRVicqViScEUhnVBpw6AGGSFXqPQI?w=500&auto=format',
        profile: { bio: { text: 'I sharpen shurikens by day' } },
        username: 'web3ninja',
        power_badge: false,
        display_name: 'web3ninja',
        active_status: 'inactive',
        verifications: ['0xbcafdd642118e5536024675e776d32413728dd08'],
        follower_count: 23,
        custody_address: '0x38e1ba4b9d40d991473252e889db87b0b5b287a3',
        following_count: 23,
        verified_addresses: {
          eth_addresses: ['0xbcafdd642118e5536024675e776d32413728dd08'],
          sol_addresses: [],
        },
      },
      {
        fid: 845732,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/d05efa23-8871-4ef5-6cf5-27a7cf2a1100/rectcrop3',
        profile: { bio: { text: '' } },
        username: 'jochem-brouwer',
        power_badge: false,
        display_name: 'Jochem Brouwer',
        active_status: 'inactive',
        verifications: [],
        follower_count: 1,
        custody_address: '0xb3465ea3f95d00a9f59d5c95ab25623aac1e78b6',
        following_count: 0,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 845750,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/e721dd08-d7a4-48af-623d-13d168fd9900/rectcrop3',
        profile: {
          bio: {
            text: 'Coding at Enzyme Finance and the Ethereum Foundation.',
          },
        },
        username: 'rockwater',
        power_badge: false,
        display_name: 'Gabriel Rocheleau',
        active_status: 'inactive',
        verifications: [],
        follower_count: 3,
        custody_address: '0xd0042adbff1e6312de50d55a2364a69a9486f0b1',
        following_count: 1,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 20870,
        object: 'user',
        pfp_url: 'https://i.imgur.com/GOeW1GA.jpg',
        profile: { bio: { text: 'Just a techie' } },
        username: 'g11tech',
        power_badge: false,
        display_name: 'Gajpower',
        active_status: 'inactive',
        verifications: [],
        follower_count: 12,
        custody_address: '0x3f7f2777080302ac64db965eea296aa2a1a12b91',
        following_count: 83,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 850246,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/76943707-466d-4e5b-b81c-e00935342500/rectcrop3',
        profile: { bio: { text: '' } },
        username: 'systemsenjoyer',
        power_badge: false,
        display_name: 'Amir',
        active_status: 'inactive',
        verifications: [],
        follower_count: 11,
        custody_address: '0xcc9a8c2a3a19aa749d17a096f22be534e100b6f5',
        following_count: 2,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 195598,
        object: 'user',
        pfp_url: 'https://i.imgur.com/gyOJ76v.jpg',
        profile: {
          bio: {
            text: 'Ethereum Foundation JavaScript Team, Protocol Prototyping, Berlin, Germany',
          },
        },
        username: 'holgerd77',
        power_badge: false,
        display_name: 'Holger Drewes',
        active_status: 'inactive',
        verifications: ['0x946cfc59872ff0da2d214d66fa2130e1b58c1a32'],
        follower_count: 40,
        custody_address: '0x45a76e75b2366546503a055e74de61235ff2196f',
        following_count: 133,
        verified_addresses: {
          eth_addresses: ['0x946cfc59872ff0da2d214d66fa2130e1b58c1a32'],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        id: '9c1990be-92e4-4327-9fe5-c70f486559d4',
        type: 'github',
        url: 'https://github.com/ethereumjs/ethereumjs-monorepo',
        name: 'ethereumjs-monorepo',
        description:
          'This is the main monorepo where the EthereumJS team modules live, including separate packages for transactions, blocks, our EVM implementation, a devp2p implementation, our implementation of the EthereumJS full node, and various utility packages.',
        verified: true,
        openSource: false,
        containsContracts: false,
        createdAt: '2024-09-02T19:20:58.583Z',
        updatedAt: '2024-09-05T12:30:44.085Z',
        projectId:
          '0x6830f24e2e893931d62d8118146a7bbffb5cd1f78945318865a52bd6a6cbe245',
        metrics: {
          artifact_url: 'https://github.com/ethereumjs/ethereumjs-monorepo',
          num_contributors: '332.0',
          num_trusted_contributors: '23.0',
          num_contributors_last_6_months: '34.0',
          num_stars: '2579',
          num_trusted_stars: '27.0',
          trust_weighted_stars: '0.0857082831509924',
          num_forks: '750',
          num_trusted_forks: '19.0',
          trust_weighted_forks: '0.1009886655396115',
          trust_rank_for_repo_in_category: '9.0',
          age_of_project_years: '9.166666666666742',
          license: '',
        },
      },
    ],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: { ventureFunding: [], revenue: [], grants: [] },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Ethereum client implementations',
        'Ethereum test networks',
        'Research which informs Ethereum core development',
      ],
      statement: {
        create: [
          {
            answer:
              'The EthereumJS project has been a major contributor to implementing and testing new spec changes for the core Ethereum roadmap, including extensive participation in the merge through testnet participation and interop testing with other clients, an early implementation of EIP-4844 that participated in and helped power the 4844 devnets, and also ongoing participation in implementing new EIPs including both Verkle and EOF related EIPs.  Our code (notably our EVM implementation and lower level block/tx primitives) power numerous developer tooling projects (including TEVM, Remix, evm.codes, and others).  ',
            question:
              'How does your project support, or is a dependency of, the OP Stack?',
          },
          {
            answer:
              'If the EthereumJS project goes away, there will cease to be any fully-featured implementation of the Ethereum core stack (which primarily powers the OP stack) in Javascript, which is the language of the web.  Our libraries are used by all sorts of wallets and signing applications to create and sign transactions, by developer toolchains to run the EVM and process bytecode, and by the core developer community as reference implementations of upcoming proposed EIPs and producing new interop tests (in partnership with Ethereum Foundation test team).',
            question:
              'How would it impact the OP Stack if your project ceased to exist?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/ethereumjs-monorepo',
  },
  {
    id: '0x1ebd314438920197b1b37ab41de3678c4f7d5e0b844420527d5e0e2b437bed17',
    applicationId:
      '0x1ebd314438920197b1b37ab41de3678c4f7d5e0b844420527d5e0e2b437bed17',
    projectId:
      '0x09b95c7697625da4915338750c5f78446817a3634cb38bc9155e26bbbc0c87f1',
    category: 'Utility',
    applicationCategory: 'OP_STACK_TOOLING',
    organization: {
      name: 'Chomtana Individual Contribution',
      description: '',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/5d53be60-ecad-4b57-8dbf-110c8b24dd89.png',
      organizationCoverImageUrl: '',
      socialLinks: {
        website: [],
        farcaster: [],
        twitter: '',
        mirror: '',
      },
      team: ['328679'],
    },
    name: 'Maintaining simple-optimism-node',
    description:
      'I\'m maintaining "simple-optimism-node" created by @smartcontracts, an open-source Optimism\'s full/archive node docker compose deployment script used by more than 320 developers and featured in the official docs.\n\nBelow are some key metrics that indicate its adoption:\n\n- Stars: 321\n- Forks: 111\n\nFrom October 1, 2023, to July 31, 2024, the following metrics were observed:\n\n- External Contributors: 3\n- Issues Opened: 34\n- Issues Closed: 30\n- Merged Pull Requests: 28\n\nHowever, the actual usage is higher, as many instances are not being tracked.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/88286a99-4f87-423a-8d13-2ed8ebe4f47c.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/6e9dc772-39bd-48ef-b113-988854d3062b.png',
    socialLinks: {
      website: ['https://github.com/smartcontracts/simple-optimism-node'],
      farcaster: [],
      twitter: null,
      mirror: null,
    },
    team: [
      {
        fid: 328679,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/249df6fc-9146-4686-bfca-d0697b5b3100/original',
        profile: { bio: { text: 'Just another dev' } },
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
    ],
    github: [
      {
        id: 'aed01bad-334c-4475-b6f3-c348a7e59aa0',
        type: 'github',
        url: 'https://github.com/smartcontracts/simple-optimism-node',
        name: 'simple-optimism-node',
        description:
          'I\'m maintaining "simple-optimism-node" created by @smartcontracts, an open-source Optimism\'s full/archive node docker compose deployment script used by more than 320 developers and featured in the official docs.',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-08-29T02:08:50.180Z',
        updatedAt: '2024-08-29T02:09:51.630Z',
        projectId:
          '0x09b95c7697625da4915338750c5f78446817a3634cb38bc9155e26bbbc0c87f1',
        metrics: {
          artifact_url:
            'https://github.com/smartcontracts/simple-optimism-node',
          num_contributors: '67.0',
          num_trusted_contributors: '6.0',
          num_contributors_last_6_months: '16.0',
          num_stars: '323',
          num_trusted_stars: '20.0',
          trust_weighted_stars: '0.1456263529024574',
          num_forks: '112',
          num_trusted_forks: '8.0',
          trust_weighted_forks: '0.1530122620307166',
          trust_rank_for_repo_in_category: '5.0',
          age_of_project_years: '2.3333333333332575',
          license: 'MIT',
        },
      },
    ],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '17391',
          date: '',
          details: null,
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_TOOLING',
      subcategory: [
        'Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.',
      ],
      statement: {
        create: [
          {
            answer:
              'The simple-optimism-node is an open-source Docker Compose deployment script for Optimism\'s full/archive node, used by over 320 developers and featured in the official documentation: https://docs.optimism.io/builders/node-operators/tutorials/node-from-docker\n\nWithout simple-optimism-node, node operators need to follow a lengthy set of instructions on the "Running an OP Mainnet Node from Source" (https://docs.optimism.io/builders/node-operators/tutorials/mainnet) page.\n\nWith simple-optimism-node, node operators can simply set the L1 endpoint in the .env file and launch the node with a single Docker Compose command.',
            question:
              'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?',
          },
          {
            answer:
              'The simple-optimism-node is used by over 320 developers and node operators to deploy OP and Base full nodes on their servers. Below are some key metrics that indicate its adoption:\n\n- Stars: 321\n- Forks: 111\n\nFrom October 1, 2023, to July 31, 2024, the following metrics were observed:\n\n- External Contributors: 3\n- Issues Opened: 34\n- Issues Closed: 30\n- Merged Pull Requests: 28\n\nHowever, the actual usage is higher, as many instances are not being tracked.',
            question:
              'Who has used your tooling and how has it benefited them?',
          },
        ],
      },
    },
    testimonials:
      'https://www.metricsgarden.xyz/projects/Maintaining%20simple-optimism-node',
  },
  {
    id: '0x26745e0179576c46f9e9c310d24f2a44091c4c96a96ea7dee908d5b935301df3',
    applicationId:
      '0x26745e0179576c46f9e9c310d24f2a44091c4c96a96ea7dee908d5b935301df3',
    projectId:
      '0x5a7e7c7acb21521e99021d746740b368801cbfe531301e50bdbaafdc24a0aac5',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: {
      name: 'Interplanetary Shipyard',
      description:
        'Interplanetary Shipyard is an independent engineering team maintaining, operating, and developing the canonical IPFS and libp2p implementations.',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/cc5bdce9-2076-4218-bb6e-08c08a03f9fe.png',
      organizationCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/f1bfae12-e2c7-4d3c-b5a6-036fe77579e5.png',
      socialLinks: {
        website: ['https://ipshipyard.com/'],
        farcaster: [],
        twitter: 'https://x.com/ipshipyard',
        mirror: '',
      },
      team: ['845866', '779819', '468804', '849466'],
    },
    name: 'js-libp2p',
    description:
      "The canonical JavaScript implementation of libp2p. Js-libp2p is a collection of protocols that support a wide range of functionalities, such as; connection establishment, remote node protocol identification and negotiation (through its identify protocol), data encryption, content/peer discovery (through its Kademlia DHT component), and data transfer through its pub-sub protocol (Gossipsub).\n\nThe stakeholders of js-libp2p include the Interplanetary Shipyard team who maintain this implementation as well as projects that depend on js-libp2p like ChainSafe's Lodestar (Ethereum consensus client written in Typescript), Ocean Protocol (in their Ocean Nodes implementation), OrbitDB (a serverless, distributed, peer-to-peer database), Warden Protocol, and many more: https://github.com/libp2p/js-libp2p/tree/main#used-by and https://github.com/libp2p/js-libp2p/network/dependents.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/11d09c62-9356-40b2-9cd2-06b98f816bfb.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/826fafd9-28a8-49f8-9d07-0e5e57880f20.png',
    socialLinks: {
      website: [
        'https://ipshipyard.com/',
        'https://github.com/libp2p/js-libp2p',
      ],
      farcaster: [],
      twitter: 'https://x.com/ipshipyard',
      mirror: null,
    },
    team: [
      {
        fid: 845866,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/3608c536-9510-4ea4-81bb-2aa023255e00/rectcrop3',
        profile: { bio: { text: '' } },
        username: 'pshahi',
        power_badge: false,
        display_name: 'Prithvi Shahi',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0xc3fb1e793f7d63b49c6b212feb1c0b1fc586936d',
        following_count: 0,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 779819,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/67cc6023-7cea-4d66-6c0e-fe3b0a2a9300/rectcrop3',
        profile: {
          bio: {
            text: 'Talkative introvert. Systems & Software engineer. Open-source advocate. Technology enthusiast. Problem solver. Travel aficionado.',
          },
        },
        username: 'cewood',
        power_badge: false,
        display_name: 'Cameron',
        active_status: 'inactive',
        verifications: [],
        follower_count: 10,
        custody_address: '0x5ee947247b33c94dd939da016a802f29950ad972',
        following_count: 65,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 468804,
        object: 'user',
        pfp_url: 'https://i.imgur.com/gDORBsA.jpg',
        profile: {
          bio: { text: 'https://probelab.io & https://probelab.network' },
        },
        username: 'yiannisbot',
        power_badge: false,
        display_name: 'Yiannis Psarras',
        active_status: 'inactive',
        verifications: [],
        follower_count: 5,
        custody_address: '0xc411d534c86f7ff6ca949bf1e564d86bc1922a57',
        following_count: 75,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 849466,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/c08647c6-8576-479d-0320-515a2022c000/rectcrop3',
        profile: {
          bio: {
            text: 'Building IPFS and libp2p at Interplanetary Shipyard',
          },
        },
        username: 'aschmahmann',
        power_badge: false,
        display_name: 'Adin Schmahmann',
        active_status: 'inactive',
        verifications: [],
        follower_count: 1,
        custody_address: '0x7ac3127dc045ab7307adf44442f6e8d835504c48',
        following_count: 0,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: 'bbd6a4f6-a088-4757-9a54-1b1d6651bb34',
        type: 'github',
        url: 'https://github.com/libp2p/js-libp2p',
        name: 'js-libp2p',
        description: 'The main js-libp2p code repository.',
        verified: true,
        openSource: false,
        containsContracts: false,
        createdAt: '2024-08-30T20:09:45.487Z',
        updatedAt: '2024-09-05T14:16:48.170Z',
        projectId:
          '0x5a7e7c7acb21521e99021d746740b368801cbfe531301e50bdbaafdc24a0aac5',
        metrics: {
          artifact_url: 'https://github.com/libp2p/js-libp2p',
          num_contributors: '312.0',
          num_trusted_contributors: '5.0',
          num_contributors_last_6_months: '30.0',
          num_stars: '2298',
          num_trusted_stars: '11.0',
          trust_weighted_stars: '0.0831795917174051',
          num_forks: '439',
          num_trusted_forks: '4.0',
          trust_weighted_forks: '0.0024057617689529',
          trust_rank_for_repo_in_category: '25.0',
          age_of_project_years: '9.0',
          license: 'Custom',
        },
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://github.com/ChainSafe/lodestar/blob/unstable/packages/beacon-node/src/network/libp2p/index.ts#L67',
        name: "Lodestar's use of js-libp2p",
        description:
          "js-libp2p's use in Lodestar, a typescript client of the Ethereum Beacon Chain",
      },
      {
        url: 'https://clientdiversity.org/',
        name: "js-libp2p's role in Eth Beacon Chain",
        description:
          "According to Miga Labs' data source, js-libp2p Lodestar nodes account for 3.07% of the Beacon Chain",
      },
    ],
    contracts: [],
    grantsAndFunding: { ventureFunding: [], revenue: [], grants: [] },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Ethereum client implementations',
        'Ethereum test networks',
        'Research which informs Ethereum core development',
      ],
      statement: {
        create: [
          {
            answer:
              "js-libp2p powers Lodestar, the Typescript implementation of Ethereum consensus client.\nLodestar makes us of js-libp2p's protocol per the Beacon Chain networking spec and is chiefly reliant on the TCP transport, yamux and mplex for multiplexing, TLS and Noise secure channels, and GossipSub for p2p messaging.\nBetween Oct 1 2023 - July 31 2024, js-libp2p has had numerous releases ranging from v0.46.x to v1.8.x - the first major 1.x.x version of js-libp2p was released and the releases contained improvements like implementing Circuit Relay v2, NAT hole punching with DCUtR, an 80%+ improvement in connection establishment time between two js-libp2p nodes, continuously improving the throughput of js-libp2p nodes, improving developer experience by making js-libp2p a monorepo, and much more.",
            question:
              'How does your project support, or is a dependency of, the OP Stack?',
          },
          {
            answer:
              "If js-libp2p ceased to exist, Lodestar could not function as a Beacon Chain node. Client diversity and resiliency are important to the health of the Ethereum network. Because Ethereum underpins L2's like Optimism, its health is important to the OP Stack. According to Miga Labs' data source Beacon Chain client diversity metrics, js-libp2p Lodestar nodes consist of 3.07% of the network (2024-09-05). Additionally, without js-libp2p, there would be no JS/TS implementation of libp2p to interoperate with other language implementations such as go-libp2p or rust-libp2p.",
            question:
              'How would it impact the OP Stack if your project ceased to exist?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/js-libp2p',
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
        profile: { bio: { text: 'Hans from Kroma' } },
        username: '0xhans',
        power_badge: false,
        display_name: 'Hans',
        active_status: 'inactive',
        verifications: [],
        follower_count: 7,
        custody_address: '0x2cb92bb3f7e974477dcb34d07d70ea56b4a9a2a1',
        following_count: 62,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
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
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: 'a7d4d3cf-aef9-48d7-a11c-a5400c9da69f',
        type: 'github',
        url: 'https://github.com/kroma-network/kroma',
        name: 'kroma',
        description: 'Main repo of Kroma client',
        verified: true,
        openSource: false,
        containsContracts: true,
        createdAt: '2024-09-04T08:41:10.048Z',
        updatedAt: '2024-09-04T09:23:08.550Z',
        projectId:
          '0x8c76c13d8d0e63a7de499d47b9da5a4495d1151c0b2003c92379f41f14e404c0',
        metrics: {
          artifact_url: 'https://github.com/kroma-network/kroma',
          num_contributors: '30.0',
          num_trusted_contributors: '5.0',
          num_contributors_last_6_months: '19.0',
          num_stars: '160',
          num_trusted_stars: '4.0',
          trust_weighted_stars: '0.002911723448129',
          num_forks: '82',
          num_trusted_forks: '2.0',
          trust_weighted_forks: '0.0010933083718579',
          trust_rank_for_repo_in_category: '14.0',
          age_of_project_years: '1.5',
          license: 'Custom',
        },
      },
      {
        id: 'b7f94124-6dea-4f97-856a-5f0ce8da6dc1',
        type: 'github',
        url: 'https://github.com/kroma-network/kona',
        name: 'kroma-kona',
        description:
          'Fork of kona for a newly designed zkVM based Fault Proof system.',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-04T09:03:05.503Z',
        updatedAt: '2024-09-04T09:23:09.262Z',
        projectId:
          '0x8c76c13d8d0e63a7de499d47b9da5a4495d1151c0b2003c92379f41f14e404c0',
        metrics: {
          artifact_url: 'https://github.com/kroma-network/kona',
          num_contributors: '1.0',
          num_trusted_contributors: '1.0',
          num_contributors_last_6_months: '1.0',
          num_stars: '0',
          num_trusted_stars: '0.0',
          trust_weighted_stars: '0.0',
          num_forks: '0',
          num_trusted_forks: '0.0',
          trust_weighted_forks: '0.0',
          trust_rank_for_repo_in_category: '16.0',
          age_of_project_years: '0.16666666666674246',
          license: 'MIT',
        },
      },
      {
        id: '22b9f0f1-26e6-4af2-8fec-7d436c8f7245',
        type: 'github',
        url: 'https://github.com/kroma-network/tachyon',
        name: 'tachyon',
        description: 'Tachyon is a Modular ZK Backend, powered by GPU.',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-04T09:00:08.656Z',
        updatedAt: '2024-09-04T09:23:09.195Z',
        projectId:
          '0x8c76c13d8d0e63a7de499d47b9da5a4495d1151c0b2003c92379f41f14e404c0',
        metrics: {
          artifact_url: 'https://github.com/kroma-network/tachyon',
          num_contributors: '21.0',
          num_trusted_contributors: '2.0',
          num_contributors_last_6_months: '15.0',
          num_stars: '7777',
          num_trusted_stars: '6.0',
          trust_weighted_stars: '0.0047531936200016',
          num_forks: '231',
          num_trusted_forks: '1.0',
          trust_weighted_forks: '0.0004808060844387',
          trust_rank_for_repo_in_category: '10.0',
          age_of_project_years: '1.0',
          license: 'MIT',
        },
      },
      {
        id: '08c09503-b115-4686-94d5-426c1678c6b9',
        type: 'github',
        url: 'https://github.com/kroma-network/sp1',
        name: 'kroma-sp1',
        description:
          'Fork of SP1 for a newly designed zkVM based Fault Proof system.',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-04T09:01:31.773Z',
        updatedAt: '2024-09-04T09:23:08.730Z',
        projectId:
          '0x8c76c13d8d0e63a7de499d47b9da5a4495d1151c0b2003c92379f41f14e404c0',
        metrics: {
          artifact_url: 'https://github.com/kroma-network/sp1',
          num_contributors: '3.0',
          num_trusted_contributors: '2.0',
          num_contributors_last_6_months: '3.0',
          num_stars: '1',
          num_trusted_stars: '0.0',
          trust_weighted_stars: '0.0',
          num_forks: '1',
          num_trusted_forks: '0.0',
          trust_weighted_forks: '7.529166644729719e-05',
          trust_rank_for_repo_in_category: '15.0',
          age_of_project_years: '0.25',
          license: 'Apache-2.0',
        },
      },
      {
        id: 'b666f0f7-2fb3-4060-984b-7a1e2a181e9c',
        type: 'github',
        url: 'https://github.com/kroma-network/go-ethereum',
        name: 'kroma-geth',
        description:
          "Repo of Kroma's execution engine which is a fork of op-geth",
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-04T08:42:52.638Z',
        updatedAt: '2024-09-04T09:23:09.212Z',
        projectId:
          '0x8c76c13d8d0e63a7de499d47b9da5a4495d1151c0b2003c92379f41f14e404c0',
        metrics: {
          artifact_url: 'https://github.com/kroma-network/go-ethereum',
          num_contributors: '15.0',
          num_trusted_contributors: '3.0',
          num_contributors_last_6_months: '9.0',
          num_stars: '44',
          num_trusted_stars: '1.0',
          trust_weighted_stars: '0.0002277310258398',
          num_forks: '23',
          num_trusted_forks: '1.0',
          trust_weighted_forks: '0.0002977787760603',
          trust_rank_for_repo_in_category: '21.0',
          age_of_project_years: '1.75',
          license: 'LGPL-3.0',
        },
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
      ventureFunding: [{ amount: '5m-10m', year: '2022', details: '' }],
      revenue: [],
      grants: [],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Work on core components of the OP Stack, including client implementations, modules, and modifications.',
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
      ],
      statement: {
        create: [
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
    testimonials:
      'https://www.metricsgarden.xyz/projects/Permissionless%20ZK%20Fault%20Proof%20System',
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
    team: [
      {
        fid: 7168,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/0cc410c7-891c-437d-7d22-735c78ad0100/original',
        profile: { bio: { text: 'cofounder /lyra' } },
        username: 'dappbeast',
        power_badge: false,
        display_name: 'Jake',
        active_status: 'inactive',
        verifications: [],
        follower_count: 1236,
        custody_address: '0x991570f2fd73f9102f09b1bf459cf807b31ecb7d',
        following_count: 177,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 21373,
        object: 'user',
        pfp_url: 'https://i.imgur.com/187nmcP.png',
        profile: { bio: { text: 'CC @lyra.eth' } },
        username: 'muir',
        power_badge: false,
        display_name: 'Paul',
        active_status: 'inactive',
        verifications: ['0x867629a9311f70f2e2e9707a2597c91650014be6'],
        follower_count: 70,
        custody_address: '0xd2efee87ad2a71c91d71291f7cb2016a03458c3a',
        following_count: 75,
        verified_addresses: {
          eth_addresses: ['0x867629a9311f70f2e2e9707a2597c91650014be6'],
          sol_addresses: [],
        },
      },
      {
        fid: 241346,
        object: 'user',
        pfp_url: 'https://i.imgur.com/lEcqb8m.png',
        profile: {
          bio: {
            text: 'cofounder @lyra.eth, fmr. equity options trader @ SIG',
          },
        },
        username: 'nickforster',
        power_badge: false,
        display_name: 'Nick',
        active_status: 'inactive',
        verifications: ['0x7f827f0007d3420eb3dc04e815dae2d04c8159e9'],
        follower_count: 131,
        custody_address: '0xdc6636412f858870e5de9e0f690065f7e27e657a',
        following_count: 103,
        verified_addresses: {
          eth_addresses: ['0x7f827f0007d3420eb3dc04e815dae2d04c8159e9'],
          sol_addresses: [],
        },
      },
      {
        fid: 849676,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/bc4e1e74-d97c-4efc-ac73-0ec91858bb00/rectcrop3',
        profile: { bio: { text: 'CC @derivexyz' } },
        username: 'telonic',
        power_badge: false,
        display_name: 'Vlad',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0x569a3fdd249ad3f5ec95023ef7a7378fbf9f46e0',
        following_count: 0,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 230590,
        object: 'user',
        pfp_url: 'https://i.imgur.com/WNSVyln.jpg',
        profile: {
          bio: {
            text: 'Ex-apple iPhone / Vision Pro. Senior smart contract / backend at Lyra',
          },
        },
        username: 'joshpwrk',
        power_badge: false,
        display_name: 'joshpwrk',
        active_status: 'inactive',
        verifications: ['0x5f831158cdd284c87c80494d13e2c15a04cbb97b'],
        follower_count: 47,
        custody_address: '0xc93aa4e4e9928e9acdba84318d98f82728210093',
        following_count: 77,
        verified_addresses: {
          eth_addresses: ['0x5f831158cdd284c87c80494d13e2c15a04cbb97b'],
          sol_addresses: [],
        },
      },
      {
        fid: 257725,
        object: 'user',
        pfp_url: 'https://i.imgur.com/wrwNxGs.jpg',
        profile: { bio: { text: 'CC @ Lyra Finance' } },
        username: 'ksett',
        power_badge: false,
        display_name: 'Ksett',
        active_status: 'inactive',
        verifications: [],
        follower_count: 41,
        custody_address: '0x055a18e3b121bc6bff03146718e021133fe64dc2',
        following_count: 33,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
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
      ventureFunding: [
        { amount: '1m-5m', year: '2021', details: 'pre-seed round' },
        {
          amount: '1m-5m',
          year: '2022',
          details:
            'strategic round https://blog.derive.xyz/lyra-raises-strategic-round/\n',
        },
      ],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
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
      ],
    },
    pricingModel: {
      type: 'freemium',
      details:
        'Derive charges fees for trade matching, liquidations, and gas for settling transactions to the Derive L2 and ETH mainnet as an OP stack chain. There are no fees associated with accessing the platform or using the data on Derive. Read more about the fee structure here: https://help.derive.xyz/en/articles/8691534-what-are-the-fees ',
    },
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
      ],
      statement: {
        create: [
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
    testimonials:
      'https://www.metricsgarden.xyz/projects/Derive%20(Formerly%20Lyra)%20OP%20Custom%20Gas%20Limit%20Research',
  },
  {
    id: '0x2da519cc5be2bf70ab4fd79c979bf2d7d956e5a11be5eefb1f21d9363928d07f',
    applicationId:
      '0x2da519cc5be2bf70ab4fd79c979bf2d7d956e5a11be5eefb1f21d9363928d07f',
    projectId:
      '0x8e05097e0cd6d79100e77cc5f8efe1b405633ee56c79f54ce657eaa58d3c995c',
    category: 'Utility',
    applicationCategory: 'OP_STACK_TOOLING',
    organization: {
      name: 'Zeeve Inc.',
      description:
        'Zeeve is the leading platform for managed Rollups and AppChains infrastructure. Zeeve is a RaaS provider for OP Stack with other tools like TraceHawk Block Explorer and Traceye Data Indexing protocol. \n\nWe have experience of 4 years in managed infrastructure and serve 30,000+ web3 startups and enterprises. We have been managing 350+ Blockchain networks backed by a seasoned engineering team.',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/4267749d-7bff-4705-b202-132f5f61ed66.png',
      organizationCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/51edb256-cacf-4856-be7a-7b5d939c4bd0.png',
      socialLinks: {
        website: ['https://www.zeeve.io'],
        farcaster: [],
        twitter: 'https://twitter.com/0xZeeve',
        mirror: null,
      },
      team: ['380166', '848716'],
    },
    name: 'Zeeve RaaS for OP Stack',
    description:
      'Launch your Superchain-compatible Optimism L2 Rollup in a few clicks. It features a fully managed Rollup dashboard, in-depth monitoring, analytics, and alerts, as well as automated setup and deployment of Block Explorer and Bridge UI with all the required contracts. \n\nZeeve RaaS also brings 45+ 34d party integrations spanning Data Availability, Interoperability, Account Abstraction, Decentralized Storage, etc for the L2 Rollup.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/37c05bc5-3c74-41c5-ab7c-496fa673e57d.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/ff35a2ff-6a02-4a30-9da0-0808af1d67d8.png',
    socialLinks: {
      website: [
        'https://www.zeeve.io',
        'https://www.zeeve.io/appchains/optimistic-rollups/',
      ],
      farcaster: [
        'https://warpcast.com/ghan-zeeve',
        'https://warpcast.com/rchamria',
      ],
      twitter: 'https://twitter.com/0xZeeve',
      mirror: null,
    },
    team: [
      {
        fid: 380166,
        object: 'user',
        pfp_url: 'https://i.imgur.com/eYXPci0.jpg',
        profile: {
          bio: {
            text: 'Blockchain enthusiast with focus on web3 infrastructure, cryptography, scalability and UX.',
          },
        },
        username: 'rchamria',
        power_badge: false,
        display_name: 'Ravi Chamria',
        active_status: 'inactive',
        verifications: [],
        follower_count: 14,
        custody_address: '0x9c5d35ef200b51ad7050666d644e1566fd90b170',
        following_count: 70,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 848716,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/5fea5c59-3f58-4771-b0ac-f9accee5ca00/rectcrop3',
        profile: {
          bio: {
            text: 'Co-Founder & CTO Zeeve, Worlds leading managed Rollup as a Service Provider',
          },
        },
        username: 'ghan-zeeve',
        power_badge: false,
        display_name: 'Ghan Vashishtha',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0x8450213e722e959476fbfa960a76645c4e008718',
        following_count: 1,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [],
    packages: [],
    links: [
      {
        url: 'https://app.zeeve.io/account/login',
        name: '1-Click OP Stack-based Rollup',
        description:
          'Sign up free and get access to the automated 1-click launchpad to build, configure, and launch your OP Stack-based L2 rollup. It comes with configurations and a RaaS dashboard. You can also access a fully functional Public Demo network for OP Stack-based L2 Rollup to deploy your smart contracts and test drive it. \n\nZeeve RaaS has been running 60+ Op Stack L2 Rollup TestNets and Mainnets since its launch five months ago. 100s of web3 startups and enterprises have accessed the Public demo network during this period. ',
      },
      {
        url: 'https://drive.google.com/file/d/1GYBYTf2pEMKJDJkYGt-TXsfCXP3HN7dp/view?usp=share_link',
        name: 'Zeeve RaaS Dashboard for OP Stack',
        description:
          'The Zeeve RaaS dashboard provides exhaustive analytics and monitoring metrics for the user. It also comes with wallet balances, alerts, notifications, advanced logging, and a marketplace for third-party integrations. ',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [
        { amount: '1m-5m', year: '2022', details: 'Seed Funding ' },
      ],
      revenue: [],
      grants: [],
    },
    pricingModel: {
      type: 'freemium',
      details:
        'The pricing model is SaaS-based, with a monthly fee of USD 3000 per rollup network and a share of net sequencer revenue. This includes a fully-managed L2 Rollup network, including cloud infrastructure, Block Explorer, Bridges, RaaS Dashboard, 24x7 technical support, 24x7 proactive monitoring, Enterprise SLA, and Security monitoring. ',
    },
    impactStatement: {
      category: 'OP_STACK_TOOLING',
      subcategory: [
        'Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.',
        'Services for deploying and hosting an OP Chain.',
      ],
      statement: {
        create: [
          {
            answer:
              '64 Op Stack-based L2 Rollup Testnets and Mainnets running on the Zeeve RaaS platform during the given period.\n\n146 OP enthusiasts have tried the Public Demo OP Network to deploy their smart contracts and test the fully featured L2 OP rollup during the given period.\n\n1000s of web3 users have accessed the OP Stack articles, blogs, and tutorials on the Zeeve platform. \n',
            question:
              'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?',
          },
          {
            answer:
              'https://www.expresscomputer.in/news/leading-web3-infrastructure-innovation-the-binary-holdings-partners-with-zeeve-to-launch-layer-2-chain/112034/\n\nhttps://www.zeeve.io/blog/zeeve-raas-partners-with-pandasea-for-the-launch-of-their-op-stack-powered-layer2-chain/',
            question:
              'Who has used your tooling and how has it benefited them?',
          },
        ],
      },
    },
    testimonials:
      'https://www.metricsgarden.xyz/projects/Zeeve%20RaaS%20for%20OP%20Stack',
  },
  {
    id: '0x2e12440c85ca56b172a63d1a17061f858e1111f5eb97efc47d4c1bb223ff52e9',
    applicationId:
      '0x2e12440c85ca56b172a63d1a17061f858e1111f5eb97efc47d4c1bb223ff52e9',
    projectId:
      '0xc998478cdd600933c5e5723be6ab1db19d445d6ac53cf28fe8927f050a8b1faf',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: null,
    name: 'Rust KZG',
    description:
      'Rust-KZG ( https://github.com/grandinetech/rust-kzg ) is a high performance KZG library that is used for Ethereum blobs related cryptography. The project brought the fastest cryptography for EIP-4844 that enabled L2 scaling on Ethereum.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/184d8460-1eab-4d2d-819b-b33f6b30fef9.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/646f8695-adab-4ea3-a279-700d61498a78.png',
    socialLinks: {
      website: ['https://github.com/grandinetech/rust-kzg'],
      farcaster: ['https://warpcast.com/saulius'],
      twitter: 'https://github.com/grandinetech/grandine',
      mirror: null,
    },
    team: [
      {
        fid: 850136,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/8cd3192e-c108-4b9f-1dae-8b7aa3459d00/rectcrop3',
        profile: {
          bio: {
            text: 'I’m tech lead of Ethereum consensus layer client Grandine.',
          },
        },
        username: 'saulius',
        power_badge: false,
        display_name: 'Saulius',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0x0e125fab464069f21ea8568bc436b0969683909c',
        following_count: 0,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: 'c804fcf0-0cff-42fb-96ca-73d6308036ab',
        type: 'github',
        url: 'https://github.com/grandinetech/rust-kzg',
        name: 'Rust-KZG',
        description:
          'The repository contains L2 scaling enabling blobs (EIP-4844) cryptography implementations using multiple elliptic curve backends (blst, constantine, mcl, arkworks, zkcrypto). It also contains benchmark results, test harness etc.',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-05T08:26:09.079Z',
        updatedAt: '2024-09-05T08:45:34.757Z',
        projectId:
          '0xc998478cdd600933c5e5723be6ab1db19d445d6ac53cf28fe8927f050a8b1faf',
        metrics: {
          artifact_url: 'https://github.com/grandinetech/rust-kzg',
          num_contributors: '29.0',
          num_trusted_contributors: '0.0',
          num_contributors_last_6_months: '3.0',
          num_stars: '109',
          num_trusted_stars: '15.0',
          trust_weighted_stars: '0.0008541866238519',
          num_forks: '41',
          num_trusted_forks: '1.0',
          trust_weighted_forks: '0.0019358724359268',
          trust_rank_for_repo_in_category: '29.0',
          age_of_project_years: '3.0',
          license: 'Apache-2.0',
        },
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://github.com/grandinetech/rust-kzg?tab=readme-ov-file#benchmarks',
        name: 'Benchmarks',
        description:
          'The benchmarks shows that Rust-KZG is the fastest among alternative libraries that were benchmarked.',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '42236',
          date: '',
          details: null,
        },
        {
          grant: 'retroFunding',
          link: null,
          amount: '2120',
          date: '',
          details: null,
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Research which informs Ethereum core development'],
      statement: {
        create: [
          {
            answer:
              'Rust-KZG project contains both research and actual implementations of high-performance KZG cryptography that is used in Ethereum data availability layer (blobs, EIP-4844, PeerDAS) that L2s including Optimism are using. We also provide benchmarks that shows our results are the highest performance among benchmarked libraries.',
            question:
              'How does your project support, or is a dependency of, the OP Stack?',
          },
          {
            answer:
              'There are not much projects that pushes performance of EIP-4844 and related cryptography. This performance eventually translates to L1 and L2 performance. There would be less efforts pushing performance with Rust-kzg.',
            question:
              'How would it impact the OP Stack if your project ceased to exist?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/Rust%20KZG',
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
        profile: { bio: { text: 'bug huntooor' } },
        username: 'obront',
        power_badge: false,
        display_name: 'obront',
        active_status: 'inactive',
        verifications: [],
        follower_count: 26,
        custody_address: '0x4ac17bf46fff1d6174403c43e7a96413aa102869',
        following_count: 62,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
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
      revenue: [],
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
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Security audits specifically on the OP Stack or its components.',
      ],
      statement: {
        create: [
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
    testimonials:
      'https://www.metricsgarden.xyz/projects/Fault%20Dispute%20Game%20Audit%20Contest',
  },
  {
    id: '0x38f4b51e1d89c1efce3c71fd155fa253d7fffe73cd239fcbd2f9309e4cc6e67b',
    applicationId:
      '0x38f4b51e1d89c1efce3c71fd155fa253d7fffe73cd239fcbd2f9309e4cc6e67b',
    projectId:
      '0x8431c44e2f0903879f34134e68fba4c05833b02451ccbf4cdb69620a6715bcdd',
    category: 'Utility',
    applicationCategory: 'OP_STACK_TOOLING',
    organization: {
      name: 'Nethermind',
      description: '',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/ead85a0e-7517-4e76-a094-4ca53869d34c.png',
      organizationCoverImageUrl: '',
      socialLinks: {
        website: ['https://www.nethermind.io/'],
        farcaster: ['https://warpcast.com/nethermind'],
        twitter: 'https://x.com/NethermindEth',
        mirror: '',
      },
      team: ['230074', '292202'],
    },
    name: 'Sedge ',
    description:
      'Sedge is a command-line tool that simplifies running nodes for the OP Stack, Ethereum mainnet, and other networks, including testnets.\nSedge makes it easy to set up nodes for OP Mainnet, Base Mainnet, OP Sepolia, and Base Sepolia. Sedge also supports various client implementations, not just Nethermind, allowing users to manage OP Stack and Ethereum nodes quickly and efficiently.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/c121ea9f-65c7-49d1-ab27-479c56b1b390.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/cbf6b9d1-98d1-4b9d-9ef4-3cf79ce43c3d.png',
    socialLinks: {
      website: ['https://www.nethermind.io/sedge'],
      farcaster: ['https://warpcast.com/nethermind'],
      twitter: 'https://x.com/nethermindeth',
      mirror: null,
    },
    team: [
      {
        fid: 263978,
        object: 'user',
        pfp_url: 'https://i.imgur.com/o1YsgC5.jpg',
        profile: {
          bio: { text: 'DevOps at Nethermind, living on Dubai 🇦🇪' },
        },
        username: 'marcosmaceo',
        power_badge: false,
        display_name: 'Marcos Maceo',
        active_status: 'inactive',
        verifications: [],
        follower_count: 7,
        custody_address: '0x6659c8fd11c30231d08b6d702172b8e349988e75',
        following_count: 65,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 849142,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/75f618cd-76b6-4f17-d9dc-01c1c5355900/rectcrop3',
        profile: { bio: { text: '' } },
        username: 'kamil-chodola',
        power_badge: false,
        display_name: 'Kamil Chodoła ',
        active_status: 'inactive',
        verifications: [],
        follower_count: 1,
        custody_address: '0xccd8322fdbb070ab077fc811ebde38975a9e25f6',
        following_count: 0,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 849505,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/cb02d55f-af85-419c-2ada-06ef459a4900/rectcrop3',
        profile: { bio: { text: '' } },
        username: 'cbermudez97',
        power_badge: false,
        display_name: 'Carlos Bermudez',
        active_status: 'inactive',
        verifications: ['0x1becdf6300b41cc87f2cbe7788b0b06ccd099bf6'],
        follower_count: 13,
        custody_address: '0x5b32ec2ca890944ebcf15ead1811f7e6ce6fed3d',
        following_count: 6,
        verified_addresses: {
          eth_addresses: ['0x1becdf6300b41cc87f2cbe7788b0b06ccd099bf6'],
          sol_addresses: [],
        },
      },
      {
        fid: 230074,
        object: 'user',
        pfp_url: 'https://i.imgur.com/8796snt.jpg',
        profile: {
          bio: {
            text: 'We are a research and software engineering company, empowering enterprises and developers worldwide to build on decentralized systems.',
          },
        },
        username: 'nethermind',
        power_badge: false,
        display_name: 'Nethermind',
        active_status: 'inactive',
        verifications: [],
        follower_count: 124,
        custody_address: '0x6e2ab2759465c1f5ddd18e8334d3e971ad864358',
        following_count: 78,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 292202,
        object: 'user',
        pfp_url: 'https://i.imgur.com/3M4C0ti.jpg',
        profile: { bio: { text: 'Netherminder' } },
        username: 'jmederos',
        power_badge: false,
        display_name: 'Jorge Mederos',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0xa07db1095326acf003da00907c1e69d0ccdcea1e',
        following_count: 61,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: '06f45d7e-8770-4de7-bb0d-636582382343',
        type: 'github',
        url: 'https://github.com/NethermindEth/sedge',
        name: 'Sedge',
        description:
          'Sedge is a one-click node setup tool for PoS network/chain validators and nodes written entirely in the Go programming language. Sedge takes care of the entire on-premise full node setup based on the chosen client, using generated docker-compose scripts based on the desired configuration.',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-04T19:26:02.489Z',
        updatedAt: '2024-09-04T19:55:21.126Z',
        projectId:
          '0x8431c44e2f0903879f34134e68fba4c05833b02451ccbf4cdb69620a6715bcdd',
      },
    ],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: { ventureFunding: [], revenue: [], grants: [] },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_TOOLING',
      subcategory: [
        'Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.',
      ],
      statement: {
        create: [
          {
            answer:
              'Sedge enhances the ease of deploying and managing OP Stack, Ethereum and other nodes and validators, by streamlining the setup process into just a few commands. It minimizes the time needed to understand the functionality and configuration of each component. With a flexible architecture, Sedge allows users to set up the entire infrastructure on a single machine, including both L1 and OP L2 nodes. Alternatively, users can seamlessly integrate with existing L1 execution and consensus clients by passing a few straightforward arguments. This makes Sedge an efficient tool for supporting the OP Stack and improving its usability.',
            question:
              'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?',
          },
          {
            answer:
              'Sedge simplified the set-up and maintenance of OP Stack nodes, especially benefitting less technical operators. Sedge abstracts away many of the complexities of running a node. It helps to manage arguments and connections between components. Sedge makes the OP Stack accessible to a wider audience.',
            question:
              'Who has used your tooling and how has it benefited them?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/Sedge%20',
  },
  {
    id: '0x3ba0b3e5456e209ea494e8f58197f3b46c20040a3cda99ae448fa355509132f4',
    applicationId:
      '0x3ba0b3e5456e209ea494e8f58197f3b46c20040a3cda99ae448fa355509132f4',
    projectId:
      '0xd4ed99cc6aaf73ca63b32f7a03b5427ac1d2955bf9efc31eb14f5773016988d0',
    category: 'Utility',
    applicationCategory: 'OP_STACK_TOOLING',
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
    name: 'AWS KMS and YubiHSM signer for OP Stack',
    description:
      'We have developed a signer proxy software that enables the OP Stack chain to use an external signer (currently supporting AWS KMS and YubiHSM) through the official signer client to signer the sequencer, batcher, proposer and challenger transactions. However, the official signer client does not integrate with external signers, so we have implemented this functionality in our signer proxy.\n\nCurrently, the process outlined in the Optimism documentation for setting up a sequencer, batcher, and proposer requires using plain private keys, creating an insecure environment for mainnet deployment. Although the documentation suggests using hardware security modules (HSMs) for key management, it lacks detailed guidance beyond referencing source code. Chain operators, particularly those using bare metal setups, often prefer YubiHSM2 over cloud-based solutions like AWS KMS due to its hardware-native security.\n\nTo enhance security, mainnet chain operators are encouraged to use industry-standard hardware signers like YubiHSM2 or AWS KMS. This approach allows operators to deploy Optimism stack chains securely by protecting private keys with hardware-based solutions. Existing resources, such as the integration of YubiHSM2 into the Keplr wallet and the TMKMS YubiHSM installer, provide relevant experiences that support this approach.\n\nOur AWS KMS Signer proxy has been used by the Lisk team for their op-challenger. We are working with them to make signer proxy perfect and production ready.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/a73d46f5-87ba-4204-88eb-7ce51ab055de.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/ffb2a694-74be-48f3-897d-96034c088b3a.png',
    socialLinks: {
      website: [],
      farcaster: [],
      twitter: null,
      mirror: null,
    },
    team: [
      {
        fid: 328679,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/249df6fc-9146-4686-bfca-d0697b5b3100/original',
        profile: { bio: { text: 'Just another dev' } },
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
        fid: 394600,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/c0fd3b12-ec64-4d77-f83b-c1c36aa41c00/original',
        profile: { bio: { text: "I'm Petch nice to meet you all." } },
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
        fid: 849514,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/4b3526d2-ab8e-4cd1-558f-2a278dc42e00/rectcrop3',
        profile: { bio: { text: 'Software engineer' } },
        username: 'matthewfx',
        power_badge: false,
        display_name: 'Matthew',
        active_status: 'inactive',
        verifications: [],
        follower_count: 4,
        custody_address: '0xa195c04c67297f3259cf0254e4b157e969f04af6',
        following_count: 1,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 468611,
        object: 'user',
        pfp_url: 'https://i.imgur.com/dypJ3AO.jpg',
        profile: { bio: { text: 'Hello' } },
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
      {
        fid: 371797,
        object: 'user',
        pfp_url: 'https://i.imgur.com/LkIdtAK.jpg',
        profile: { bio: { text: 'Proof of Love' } },
        username: 'ez420',
        power_badge: false,
        display_name: 'Johny Phan',
        active_status: 'inactive',
        verifications: [
          '0x331923efb27300c9c481ce742267a93d77c548f6',
          '0x331923efb27300c9c481ce742267a93d77c548f6',
        ],
        follower_count: 21,
        custody_address: '0xe60b379dfa7c35de73dc7472903a950d72d7e677',
        following_count: 110,
        verified_addresses: {
          eth_addresses: [
            '0x331923efb27300c9c481ce742267a93d77c548f6',
            '0x331923efb27300c9c481ce742267a93d77c548f6',
          ],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        id: 'b0e8e148-05b1-497b-9b42-9dbd335cf034',
        type: 'github',
        url: 'https://github.com/upnodedev/signer-proxy',
        name: null,
        description: null,
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-04T04:35:43.640Z',
        updatedAt: '2024-09-04T04:35:43.640Z',
        projectId:
          '0xd4ed99cc6aaf73ca63b32f7a03b5427ac1d2955bf9efc31eb14f5773016988d0',
        metrics: {
          artifact_url: 'https://github.com/upnodedev/signer-proxy',
          num_contributors: '',
          num_trusted_contributors: '',
          num_contributors_last_6_months: '',
          num_stars: '0',
          num_trusted_stars: '',
          trust_weighted_stars: '0.0',
          num_forks: '0',
          num_trusted_forks: '',
          trust_weighted_forks: '0.0',
          trust_rank_for_repo_in_category: '24.0',
          age_of_project_years: '',
          license: 'MIT',
        },
      },
    ],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      revenue: [],
      grants: [
        {
          grant: 'token-house-mission',
          link: 'https://app.charmverse.io/op-grants/research-on-using-yubihsm-and-aws-kms-hardware-signer-on-op-stack-41211765826072866',
          amount: '15000',
          date: '2024-05-09',
          details:
            'Research on using YubiHSM and AWS KMS hardware signer on OP Stack Season 5 Cycle 22',
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_TOOLING',
      subcategory: [
        'Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.',
      ],
      statement: {
        create: [
          {
            answer:
              'Our AWS KMS Signer proxy has been used by the Lisk team for their op-challenger. We are working with them to make signer proxy perfect and production ready.\n\nThere may be other teams looking into this solution but have not contacted us, especially those who are looking to launch a mainnet OP stack chain on-premises.',
            question:
              'Who has used your tooling and how has it benefited them?',
          },
          {
            answer:
              'We have developed a signer proxy software that enables the OP Stack chain to use an external signer (currently supporting AWS KMS and YubiHSM) through the official signer client to signer the sequencer, batcher, proposer and challenger transactions. However, the official signer client does not integrate with external signers, so we have implemented this functionality in our signer proxy.\n\nThe Optimism documentation for setting up a sequencer, batcher, and proposer relies on plain private keys, posing security risks for mainnet deployments. Although hardware security modules (HSMs) like YubiHSM2 and AWS KMS are recommended, detailed guidance is limited. To improve security, mainnet chain operators should use industry-standard hardware signers like YubiHSM2, favored for its hardware-native protection, or AWS KMS, to safeguard private keys during deployment.\n\n',
            question:
              'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?',
          },
        ],
      },
    },
    testimonials:
      'https://www.metricsgarden.xyz/projects/AWS%20KMS%20and%20YubiHSM%20signer%20for%20OP%20Stack',
  },
  {
    id: '0x3e6e0104e18f3c083a8209cbea0b2b36f51d38fd72e71604eb57d757581998e3',
    applicationId:
      '0x3e6e0104e18f3c083a8209cbea0b2b36f51d38fd72e71604eb57d757581998e3',
    projectId:
      '0xc49d46c5606148617c4202a6a0f745ce194418ca81f1c27d1ff75ea84e32a0cc',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: null,
    name: 'Protocol Guild',
    description:
      'Protocol Guild is a funding collective for 181 Ethereum Layer 1 R&D maintainers. These individuals come from 27 different ecosystem teams/projects and are the backbone of Ethereum\'s core protocol development. Protocol Guild ensures that funding goes directly to these individuals and Ethereum stewardship over the long term.\n----------------------------------\n\n--> Optimism\'s relationship with the Ethereum commons\n\nThe Ethereum commons is a broad set of peer-produced artifacts which share infrastructure or software resources. Optimism shares both with the Ethereum L1:\n\n1. Infrastructure relationships link the censorship resistance, security, and settlement of OP-stack L2s with the L1 network.\n\n2. Software powers the L1 distributed system and extensions of it, produced in part by the ongoing research and development of contributors supported through Protocol Guild. These individuals come from 27 different ecosystem teams and projects:\n\n- Client teams: Erigon, EthereumJS, Geth, Besu, Lighthouse, Lodestar, Nethermind, Nimbus, Prysm, Reth and Teku\n- Research groups: Applied Research Group, Consensys DDS, Consensus R&D, Ipsilon, Robust Incentives Group, Stateless Consensus and TXRX\n- Coordination & support groups: EELS, EthPandaOps, EthereumJS, EF Protocol Support, EF Protocol Security, EF Testing, Ethereum Cat Herders and Portal​​​​​​​\n\nOther impact includes:\n\n- the research, testing, and introduction of blobs through EIP-4844 (ie. proto-danksharding) in March 2024, has lowered L2 transaction costs by 10-100X\n- ongoing research into peerDAS and related constructions for the anticipated Pectra network upgrade, which will potentially lower the bandwidth requirements and/or further lower transaction costs for users\n- Optimism’s execution clients are modified L1 clients, which are maintained by Guild members\n- research, implementations, testing of EVM improvements. Optimism\'s EVM-equivalent architecture, makes the ecosystem more accessible to builders\n- ongoing maintainence of code-bases, support for network upgrades to make Ethereum more censorship resistant, secure, and accessible\n---------------------------------------\n\n--> A commons funding mechanism\n\nNo single individual/project could reproduce this software on their own. In recognition of this, the design of Protocol Guild is also grounded within the commons frame:\n\n1. Four year onchain vest, to individuals\n\nCommons stewardship plays out over time. Any funding drips slowly via immutable contracts to create legible guarantees for members + funders. Each member\'s share is time-weighted by their start date - which recognizes the local knowledge they\'ve accumulated.\n\n2. Broad membership, regularly updated\n\nMembers come from +25 projects/teams across the entire Layer 1 contributor set. This wide-ranging curation ensures that less well known but equally impactful contributions are surfaced.\nThis membership is regularly updated onchain every quarter. When paired with the vest, this ensures funding goes to contributors that stick around long-term, or those that show up in the future - not just those that are around today.\n\nThrough these features, Protocol Guild is able to support long-term, transparent, & comprehensive Layer 1 stewardship.\n\n---------------------------\n--> "Project", not "Org"\n\nWithin the Retro Program context, Protocol Guild opts to represent itself as a "Project" instead of as an "Organization."\n\n1. Fund the entire commons\n\nProtocol Guild aims to holistically fund the individuals engaged in Ethereum\'s core protocol , and not "features" or discrete projects of the protocol which will then compete against each other in the funding round.\n\n2. Funding, not project oversight\n\nProtocol Guild is scope-limited to allocate funding. The day-to-day activities of Ethereum projects/teams are not directed through Protocol Guild as an entity, or by any members in their affiliation as beneficiaries. Governance deliberations and roadmap decisions remain the responsibility of the broader community reaching rough consensus in public fora.\n\n3. Independent funding requests\n\nPresenting as an Organization with Projects might overlap with funding requests from individual core protocol projects/teams in the Retro round. These entities may have contributors/employees which are also members of Protocol Guild. However, these are are distinct entities from Protocol Guild itself. Protocol Guild funding goes directly to the individuals. In general, the membership does not have insight where this funding goes or how it is allocated.\n------------------------------\n\n--> Conclusion\n\nProtocol Guild’s design as a funding collective for individual Ethereum maintainers ensures that the network\'s ongoing evolution is sufficiently supported. By funding Protocol Guild through the Retro Program, badgeholders can ensure that it remains robust and capable of supporting innovations like Optimism.\n\nThank you for your consideration ❤️',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/889516a6-277c-4b6e-8453-74e798df7a2b.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/a95ff874-a643-4cd6-825d-b12efb805250.png',
    socialLinks: {
      website: ['https://protocol-guild.readthedocs.io/'],
      farcaster: ['https://warpcast.com/protocolguild'],
      twitter: 'https://x.com/ProtocolGuild',
      mirror: null,
    },
    team: [
      {
        fid: 19616,
        object: 'user',
        pfp_url: 'https://i.imgur.com/2dYtKGI.jpg',
        profile: { bio: { text: '⛓️🛡️' } },
        username: 'cheeky-gorilla',
        power_badge: false,
        display_name: 'cheeky-gorilla.eth',
        active_status: 'inactive',
        verifications: [],
        follower_count: 95,
        custody_address: '0x3160eb3b629aa3696b3d84906d17038b74d47689',
        following_count: 85,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 1766,
        object: 'user',
        pfp_url: 'https://i.imgur.com/dI1Uc8W.jpg',
        profile: {
          bio: {
            text: '* core protocol consigliere @ Ethereum Foundation\n* funding core devs with @protocolguild (member)\n* creating artifacts @ Stateful Works',
          },
        },
        username: 'trent',
        power_badge: false,
        display_name: 'Trent',
        active_status: 'inactive',
        verifications: ['0x5531db3f21a1723e6f4d95f93bc8220c6e9cffa2'],
        follower_count: 256462,
        custody_address: '0x7d7b17b62d1d946f100bc0c18e7418f65080cb19',
        following_count: 87,
        verified_addresses: {
          eth_addresses: ['0x5531db3f21a1723e6f4d95f93bc8220c6e9cffa2'],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        id: '8f84543e-65fa-4754-aa33-de869fd4e78e',
        type: 'github',
        url: 'https://github.com/protocolguild/membership',
        name: 'Protocol Guild Membership + Documentation',
        description:
          "This repo is used to curate Protocol Guild's membership registry of Ethereum's active L1 R&D maintainers, and to generate our documentation: https://protocol-guild.readthedocs.io",
        verified: true,
        openSource: false,
        containsContracts: false,
        createdAt: '2024-08-28T03:39:58.280Z',
        updatedAt: '2024-09-04T20:48:44.590Z',
        projectId:
          '0xc49d46c5606148617c4202a6a0f745ce194418ca81f1c27d1ff75ea84e32a0cc',
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://ethereum-magicians.org/t/eip-4844-shard-blob-transactions/8430',
        name: 'EIP 4848 (proto-danksharding)',
        description:
          "EIP 4848 (proto-danksharding), deployed in Ethereum's last core protocol upgrade, helped scale Ethereum’s L2s by reducing end-user fees.",
      },
      {
        url: 'https://notes.ethereum.org/@ipsilon/mega-eof-specification',
        name: 'EOF spec',
        description:
          'EOF spec, enabling opcodes for more efficient & secure development on Optimism (this is not a promise of future impact - there has already been significant research and implementation work completed for this). ',
      },
      {
        url: 'https://notes.ethereum.org/@dankrad/new_sharding',
        name: 'EIP for danksharding',
        description:
          'EIP for danksharding, to scale L2s beyond EIP4844 by orders of magnitude (this is not a promise of future impact - there has already been research and implementation work completed for this).',
      },
      {
        url: 'https://dune.com/queries/346015/662177',
        name: '$6.43B - Approximate Onchain Value on Optimism, secured by Ethereum L1',
        description:
          'Approximately $6.43B in value lives on Optimism, secured by Ethereum L1 (as of 28-Aug-2023).',
      },
      {
        url: 'https://dune.com/queries/3521496/5921609',
        name: '257,299 - # of 4844 blobs submitted by Optimism',
        description:
          '257,299 blobs have been posted by Optimism to Ethereum L1 (as of 28-Aug-2023).',
      },
      {
        url: 'https://protocol-guild.readthedocs.io/en/latest/01-eligibility.html',
        name: "Protocol Guild's eligibility framework",
        description:
          "Protocol Guild's eligibility framework is narrowly targeted to only include Ethereum's active L1 R&D maintainers.",
      },
      {
        url: 'https://protocol-guild.readthedocs.io/en/latest/02-membership.html',
        name: '181 Protocol Guild members',
        description:
          "Protocol Guild's membership is composed of 181 individuals, all of whom are actively involved in all functions related to building and maintaining Ethereum’s core protocol.\n",
      },
      {
        url: 'https://ethcc.io/archive/Protocol-Guild-Funding-Core-Protocol-Stewardship',
        name: 'Protocol Guild presentation @ EthCC 2024',
        description:
          "Protocol Guild's cheeky-gorilla gave an overview of what Protocol Guild is and how it works at EthCC 2024.",
      },
      {
        url: 'https://app.splits.org/accounts/0x25941dc771bb64514fc8abbce970307fb9d477e9/',
        name: '4-Year vesting contract',
        description:
          "All donations to the Protocol Guild are deposited into an immutable vesting contract, to be distributed directly to Ethereum's active L1 R&D maintainers over 4 years. This creates incentives for these maintainers to continue contributing over the long-term. Note that the funds from OP RPGF 5 will deposited into this new 4-year vesting contract on OP: https://app.splits.org/accounts/0xB3d8d7887693a9852734b4D25e9C0Bb35Ba8a830/?chainId=10",
      },
      {
        url: 'https://dune.com/queries/3845181/6467356',
        name: '$56,436 - The amount the median Protocol Guild member is expected to receive from Protocol Guild over the next 12 months',
        description:
          "Protocol Guild's goal is for the financial incentives associated with Protocol Guild membership to be large enough to guarantee the successful execution of Ethereum's core protocol development roadmap. To achieve this goal, we will need to scale our fundraising by orders of magnitude. (as of 28-Aug-2023.)",
      },
      {
        url: 'https://dune.com/protocolguild/protocol-guild',
        name: 'Dune dashboard',
        description:
          "Protocol Guild's Dune dashboard shows the financial incentives associated with Protocol Guild membership, as well as the projects and individuals who have donated to this cause.",
      },
      {
        url: 'https://x.com/ProtocolGuild/status/1791484379283202558',
        name: '609 years - The amount of years Protocol Guild members have collectively contributed towards maintaining and evolving the Ethereum protocol',
        description:
          "To date, Protocol Guild's members have collectively contributed 609 years towards maintaining and evolving the Ethereum protocol.",
      },
      {
        url: 'https://www.youtube.com/watch?v=xISUVbyJp6k',
        name: 'Strange Water Podcast',
        description:
          "Podcast with Protocol Guild's Trent Van Epps exploring public good funding within Ethereum, and why Protocol Guild needs to exist. ",
      },
      {
        url: 'https://github.com/protocolguild/membership',
        name: 'Protocol Guild Membership + Documentation',
        description:
          "This Github repo is used to curate Protocol Guild's membership registry of Ethereum's active L1 R&D maintainers, and to generate our documentation: https://protocol-guild.readthedocs.io",
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '557301.00',
          date: '',
          details: null,
        },
        {
          grant: 'retroFunding',
          link: null,
          amount: '663853.62',
          date: '',
          details: null,
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Ethereum client implementations',
        'Ethereum test networks',
        'Infrastructure to test and deploy chains',
        'Research which informs Ethereum core development',
      ],
      statement: {
        create: [
          {
            answer:
              'Over the specified time period, Protocol Guild has supported individual members who maintain Ethereum related software resources, which enable OP-stack L2 chains to exist.\n\nLayer 1\n- the client software powering the Ethereum Layer 1 has enabled the network to produce blocks, resolve reorgs, and finalize the chain regularly and without downtime\n\nDencun Upgrade [live march 2024, 9 EIPs](https://eips.ethereum.org/EIPS/eip-7569)\n- EIP-4844: implementations, testing + activation of blobs: 10-100X transaction cost reductions for all Layer 2s\n- the upgrade also included new EVM opcodes, improvements to the validator lifecycle, and cleanups up technical debt\n\nPectra Upgrade Devnets [20 EIPs currently](https://eips.ethereum.org/EIPS/eip-7600)\n- PeerDAS: scaling blobs for L2s\n- MaxEB: networking + validator improvements\n- EIP 7702: better UX for users, more capabilities for devs\n- EOF: EVM improvements\n\nOngoing stewardship\n- increasing L1 censorship resistance\n- bug fixes, more performant nodes',
            question:
              'How does your project support, or is a dependency of, the OP Stack?',
          },
          {
            answer:
              "The infrastructure and software resources of the Ethereum commons are existential dependencies of OP-stack L2s.\n\nIf client software stopped being maintained long-term, bugs would likely be found and exploited on the mainnet L1. The L1 being unable to produce blocks or reach finality would be immediately catastrophic for all OP-stack chains. The impacts to users, projects, infra, brand would be deeply damaging. The Optimism community would have to take on the massive burden of maintaining all client repos in perpetuity.\n\nIf scaling research, network upgrade coordination and support stopped today, OP-stack chains would not be able to fully scale the Ethereum L1's security, censorship resistance, and credible neutrality assurances to more people.\n\nIf cryptography research stopped today, the network would not be able to develop new cryptographic mechanisms for use in the Ethereum context.\n\nThe continued funding support of Ethereum Layer 1 maintainers is positive sum for all participants!",
            question:
              'How would it impact the OP Stack if your project ceased to exist?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/Protocol%20Guild',
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
    team: [
      {
        fid: 754190,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/f07bd8e3-d129-46b2-23b1-27888eafd700/rectcrop3',
        profile: {
          bio: {
            text: 'Ethereum developer, one of the primary contributing members of the https://github.com/optimism-java',
          },
        },
        username: 'thinkafcod',
        power_badge: false,
        display_name: 'thinkAfCod',
        active_status: 'inactive',
        verifications: ['0xf5f0a5135486ff2715b1dfaead54eeaffe6b8404'],
        follower_count: 16,
        custody_address: '0xf8c7df3e96d4571474b8acdd6c76ec1f974da8c4',
        following_count: 87,
        verified_addresses: {
          eth_addresses: ['0xf5f0a5135486ff2715b1dfaead54eeaffe6b8404'],
          sol_addresses: [],
        },
      },
      {
        fid: 451368,
        object: 'user',
        pfp_url: 'https://i.imgur.com/hOQVxfS.jpg',
        profile: {
          bio: {
            text: 'I like playingsome video games, eatting delicious food and traveling.',
          },
        },
        username: 'zhouop0',
        power_badge: false,
        display_name: 'zhouop0',
        active_status: 'inactive',
        verifications: [],
        follower_count: 6,
        custody_address: '0xfedb9e80ee85f8a92887495a1d7873873cc70d14',
        following_count: 63,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 193400,
        object: 'user',
        pfp_url: 'https://i.imgur.com/9qScZ3F.jpg',
        profile: {
          bio: {
            text: 'Ethereum developer, creator of https://github.com/optimism-java',
          },
        },
        username: 'grapebaba',
        power_badge: false,
        display_name: 'grapebaba',
        active_status: 'inactive',
        verifications: [],
        follower_count: 59,
        custody_address: '0x5047d4500fbbac22a7cc741c335211f096807ee0',
        following_count: 118,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: '1d90332d-67c6-496e-852b-ab55d8ea9aab',
        type: 'github',
        url: 'https://github.com/optimism-java/hildr',
        name: '',
        description: '',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-08-23T13:32:24.757Z',
        updatedAt: '2024-08-27T04:05:25.043Z',
        projectId:
          '0x7333cac46b20999de07f4d7be5146c10a30f19586907bd2ce986b81af340cb97',
        metrics: {
          artifact_url: 'https://github.com/optimism-java/hildr',
          num_contributors: '5.0',
          num_trusted_contributors: '4.0',
          num_contributors_last_6_months: '4.0',
          num_stars: '39',
          num_trusted_stars: '10.0',
          trust_weighted_stars: '0.1520300397381267',
          num_forks: '12',
          num_trusted_forks: '2.0',
          trust_weighted_forks: '0.0045330337549973',
          trust_rank_for_repo_in_category: '3.0',
          age_of_project_years: '1.3333333333332575',
          license: 'MIT',
        },
      },
      {
        id: '29fe448f-1551-4744-9e99-00ed41564930',
        type: 'package',
        url: 'https://github.com/optimism-java/hildr/pkgs/container/hildr',
        name: null,
        description: null,
        verified: false,
        openSource: false,
        containsContracts: false,
        createdAt: '2024-08-22T06:27:35.414Z',
        updatedAt: '2024-08-22T06:27:35.414Z',
        projectId:
          '0x7333cac46b20999de07f4d7be5146c10a30f19586907bd2ce986b81af340cb97',
      },
      {
        id: '9a4937a2-885d-4608-8169-687b8a499bd4',
        type: 'package',
        url: 'https://github.com/optimism-java/hildr/releases/tag/v0.4.4',
        name: null,
        description: null,
        verified: false,
        openSource: false,
        containsContracts: false,
        createdAt: '2024-08-22T06:27:35.414Z',
        updatedAt: '2024-08-22T06:27:35.414Z',
        projectId:
          '0x7333cac46b20999de07f4d7be5146c10a30f19586907bd2ce986b81af340cb97',
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
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
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
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Work on core components of the OP Stack, including client implementations, modules, and modifications.',
      ],
      statement: {
        create: [
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
    testimonials: 'https://www.metricsgarden.xyz/projects/hildr',
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
    team: [
      {
        fid: 811328,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/c006aa58-212e-4908-8503-a2406259b400/rectcrop3',
        profile: { bio: { text: 'I scale & test in prod.' } },
        username: 'taem',
        power_badge: false,
        display_name: 'Taem Park',
        active_status: 'inactive',
        verifications: [
          '0x490c91f38ec57e3ab00811e0c51a62bfed7e81f4',
          '0x490c91f38ec57e3ab00811e0c51a62bfed7e81f4',
          '0x490c91f38ec57e3ab00811e0c51a62bfed7e81f4',
        ],
        follower_count: 4,
        custody_address: '0xf4353b7394a21eb410c8274ab8cc8aa75c42fcc4',
        following_count: 5,
        verified_addresses: {
          eth_addresses: [
            '0x490c91f38ec57e3ab00811e0c51a62bfed7e81f4',
            '0x490c91f38ec57e3ab00811e0c51a62bfed7e81f4',
            '0x490c91f38ec57e3ab00811e0c51a62bfed7e81f4',
          ],
          sol_addresses: [],
        },
      },
      {
        fid: 849695,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/64e99985-d928-4393-0303-0d2fbb0b7b00/rectcrop3',
        profile: { bio: { text: '' } },
        username: 'diff72840089',
        power_badge: false,
        display_name: 'Changwan Park',
        active_status: 'inactive',
        verifications: [],
        follower_count: 1,
        custody_address: '0x2528d878bae4a4168ab097e82bc5c592433730b0',
        following_count: 0,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 284703,
        object: 'user',
        pfp_url: 'https://i.imgur.com/ADllGMs.jpg',
        profile: {
          bio: { text: 'TestinProd | Engineer | Photographer | Optimist' },
        },
        username: 'imtei',
        power_badge: false,
        display_name: 'Tei Im',
        active_status: 'inactive',
        verifications: [],
        follower_count: 25,
        custody_address: '0xb570343406892c211f660619b0ad3a34f99c8676',
        following_count: 80,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 849643,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/100425b0-d822-488d-0485-62ae82409c00/rectcrop3',
        profile: { bio: { text: '' } },
        username: 'parkgunou',
        power_badge: false,
        display_name: 'Gunou Park',
        active_status: 'inactive',
        verifications: [],
        follower_count: 2,
        custody_address: '0x33a856a767ab69e376c8db517905da1b64ebd9d3',
        following_count: 4,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 849704,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/6a376bdb-4675-4270-6882-e5bc9898b100/rectcrop3',
        profile: { bio: { text: '' } },
        username: 'mininny',
        power_badge: false,
        display_name: 'Minhyuk Kim',
        active_status: 'inactive',
        verifications: [],
        follower_count: 1,
        custody_address: '0x320e3ff9bf2a6a3af31ca7e99fd9a98c2699d8e2',
        following_count: 2,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: '1e74e58f-5731-4777-b54e-7de47c4ec77a',
        type: 'github',
        url: 'https://github.com/testinprod-io/span-batch-research',
        name: "Research repository to measure Span Batches' impact.",
        description:
          'In this repository, Test in Prod conducted backtesting against all OP Chains to measure its impact.',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-02T22:39:24.534Z',
        updatedAt: '2024-09-05T20:12:05.606Z',
        projectId:
          '0x60f8ab8d1ae00182f9afaf6ec35213a200ed8ac21d39b24a9794f2ba21f6aa59',
        metrics: {
          artifact_url: 'https://github.com/testinprod-io/span-batch-research',
          num_contributors: '1.0',
          num_trusted_contributors: '1.0',
          num_contributors_last_6_months: '0.0',
          num_stars: '1',
          num_trusted_stars: '1.0',
          trust_weighted_stars: '0.041778163383742',
          num_forks: '0',
          num_trusted_forks: '0.0',
          trust_weighted_forks: '0.0',
          trust_rank_for_repo_in_category: '12.0',
          age_of_project_years: '1.0',
          license: 'MIT',
        },
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
      ventureFunding: [
        {
          amount: '1m-5m',
          year: '2022',
          details: 'Initial friends & family rounds to kick off Test in Prod.',
        },
      ],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
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
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
        'Work on core components of the OP Stack, including client implementations, modules, and modifications.',
      ],
      statement: {
        create: [
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
    testimonials:
      'https://www.metricsgarden.xyz/projects/Delta%20Network%20Upgrade',
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
    team: [
      {
        fid: 754190,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/f07bd8e3-d129-46b2-23b1-27888eafd700/rectcrop3',
        profile: {
          bio: {
            text: 'Ethereum developer, one of the primary contributing members of the https://github.com/optimism-java',
          },
        },
        username: 'thinkafcod',
        power_badge: false,
        display_name: 'thinkAfCod',
        active_status: 'inactive',
        verifications: ['0xf5f0a5135486ff2715b1dfaead54eeaffe6b8404'],
        follower_count: 16,
        custody_address: '0xf8c7df3e96d4571474b8acdd6c76ec1f974da8c4',
        following_count: 87,
        verified_addresses: {
          eth_addresses: ['0xf5f0a5135486ff2715b1dfaead54eeaffe6b8404'],
          sol_addresses: [],
        },
      },
      {
        fid: 451368,
        object: 'user',
        pfp_url: 'https://i.imgur.com/hOQVxfS.jpg',
        profile: {
          bio: {
            text: 'I like playingsome video games, eatting delicious food and traveling.',
          },
        },
        username: 'zhouop0',
        power_badge: false,
        display_name: 'zhouop0',
        active_status: 'inactive',
        verifications: [],
        follower_count: 6,
        custody_address: '0xfedb9e80ee85f8a92887495a1d7873873cc70d14',
        following_count: 63,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 193400,
        object: 'user',
        pfp_url: 'https://i.imgur.com/9qScZ3F.jpg',
        profile: {
          bio: {
            text: 'Ethereum developer, creator of https://github.com/optimism-java',
          },
        },
        username: 'grapebaba',
        power_badge: false,
        display_name: 'grapebaba',
        active_status: 'inactive',
        verifications: [],
        follower_count: 59,
        custody_address: '0x5047d4500fbbac22a7cc741c335211f096807ee0',
        following_count: 118,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: '193ffae9-c74d-4ee4-b87b-8034311275a2',
        type: 'github',
        url: 'https://github.com/optimism-java/op-besu',
        name: '',
        description: '',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-08-23T14:18:30.822Z',
        updatedAt: '2024-08-27T04:41:08.069Z',
        projectId:
          '0x7d69da70e6453a7abb641a770cad602c0a7893186cb20f990efe22c0cb248115',
        metrics: {
          artifact_url: 'https://github.com/optimism-java/op-besu',
          num_contributors: '2.0',
          num_trusted_contributors: '2.0',
          num_contributors_last_6_months: '1.0',
          num_stars: '6',
          num_trusted_stars: '2.0',
          trust_weighted_stars: '0.0080739326271605',
          num_forks: '0',
          num_trusted_forks: '0.0',
          trust_weighted_forks: '0.0',
          trust_rank_for_repo_in_category: '7.0',
          age_of_project_years: '0.8333333333332575',
          license: 'Apache-2.0',
        },
      },
    ],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      revenue: [],
      grants: [
        {
          grant: 'token-house-mission',
          link: 'https://app.charmverse.io/op-grants/op-besu-an-op-stack-execution-client-based-on-hyperledger-besu-2818630304747294',
          amount: '50000',
          date: '2024-05-09',
          details: '',
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Work on core components of the OP Stack, including client implementations, modules, and modifications.',
      ],
      statement: {
        create: [
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
    testimonials: 'https://www.metricsgarden.xyz/projects/op-besu',
  },
  {
    id: '0x42f449a7238b2d19785a41371e6902a0e782bbf28270d8ff1690b87a43a0b80a',
    applicationId:
      '0x42f449a7238b2d19785a41371e6902a0e782bbf28270d8ff1690b87a43a0b80a',
    projectId:
      '0x7e4eb6294ad8e97eceb3bb6a39891eb386bfbaa5d4e8f16a9939d18ad79d789c',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: {
      name: 'Blocknative',
      description: '',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/67b75c95-4f8c-4cc9-9dca-2d4b12b2b682.png',
      organizationCoverImageUrl: '',
      socialLinks: {
        website: [],
        farcaster: [],
        twitter: '',
        mirror: '',
      },
      team: ['410300'],
    },
    name: 'Blocknative Blob Archive and Research',
    description:
      'Blocknative is dedicated to building developer-friendly tools that enhance user experience and ecosystem growth. We specialize in creating innovative solutions for gas fee estimation across various blockchains and have been building, running, and maintaining advanced gas estimation and optimization infrastructure since 2021. ',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/89b7357e-0cb5-45d1-8c20-b1c835ad584c.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/735c2a57-e42e-4b09-8f55-67e6bcdab127.png',
    socialLinks: {
      website: ['Blocknative.com'],
      farcaster: [],
      twitter: 'x.com/blocknative',
      mirror: null,
    },
    team: [
      {
        fid: 410300,
        object: 'user',
        pfp_url: 'https://i.imgur.com/LpRZ8Dk.jpg',
        profile: {
          bio: {
            text: 'Real-Time Observability for Public Blockchain Networks | ethernow.xyz | Web3 Onboard | Gas Prediction | MEV Protection',
          },
        },
        username: 'blocknative',
        power_badge: false,
        display_name: 'Blocknative',
        active_status: 'inactive',
        verifications: [],
        follower_count: 14,
        custody_address: '0x150a13bb1ab339da05f49bc2b23ec4c8533f4ebc',
        following_count: 93,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [],
    packages: [],
    links: [
      {
        url: 'https://www.blocknative.com/blog/how-self-built-blocks-unintentionally-introduce-base-fee-volatility ',
        name: 'How Self-Built Blocks Unintentionally Introduce Base Fee Volatility',
        description:
          'analyzes how self-built blocks impact base fee volatility',
      },
      {
        url: 'https://www.blocknative.com/blog/june-20th-blob-contention-event-retrospective ',
        name: 'Blob Inversion: An Investigation Into the June 20th 2024 Blob Spike',
        description: 'investigates the June 20th blob contention event',
      },
      {
        url: 'https://www.blocknative.com/blog/ethereums-eip-4844-dencun-upgrade-a-85-day-analysis',
        name: "Ethereum's EIP 4844 Dencun Upgrade: A 85-Day Analysis",
        description: 'provides an 85-day analysis of the Dencun upgrade',
      },
      {
        url: 'https://docs.blocknative.com/blocknative-data-archive',
        name: 'Blocknative Mempool Archive (and Blob Archive)',
        description:
          'The Blob Archive complements our existing Mempool Archive, offering a comprehensive view of Ethereum network activity.\n',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [
        {
          amount: '10m-25m',
          year: '2021',
          details:
            'https://www.blocknative.com/blog/blocknative-raises-15m-for-block-building',
        },
      ],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '99378',
          date: '',
          details: null,
        },
        {
          grant: 'foundation-mission',
          link: 'https://app.charmverse.io/op-grants/batcher-gas-fee-optimization-research-and-implementation-419013603973726',
          amount: '40000',
          date: '2024-05-14',
          details: '',
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Research which informs Ethereum core development'],
      statement: {
        create: [
          {
            answer:
              'The Blocknative Blob Archive offers a critical solution for researchers and developers working on Ethereum by providing permanent access to ephemeral blob data introduced with EIP-4844. This data is essential for analyzing network behavior, identifying trends, and informing future Ethereum core development.\n\n- Preserving Ephemeral Data: Our Blob Archive captures and stores blob data beyond its typical lifespan, preventing valuable insights from being lost.\n- Empowering Research: Researchers can leverage the Blob Archive to analyze historical data, identify protocol inefficiencies, and propose improvements to Ethereum.\n- Facilitating Development: Developers can use the Blob Archive to understand real-world usage patterns and test applications that interact with blobs.\n- Enhancing Transparency: The Blob Archive promotes transparency within the Ethereum ecosystem by making historical data readily available.\n',
            question:
              'How does your project support, or is a dependency of, the OP Stack?',
          },
          {
            answer:
              'The Blocknative Blob Archive and research initiative directly contribute to the advancement of Ethereum by preserving valuable data, empowering researchers, and informing core development decisions. We are committed to supporting the Ethereum ecosystem and believe our project plays a crucial role in enabling a deeper understanding of the network.\n\nWe are the only provider of this data set at this time. ',
            question:
              'How would it impact the OP Stack if your project ceased to exist?',
          },
        ],
      },
    },
    testimonials:
      'https://www.metricsgarden.xyz/projects/Blocknative%20Blob%20Archive%20and%20Research',
  },
  {
    id: '0x4b4627904b97d79cf68f11637d19d05bdb1bc2499e2c16df0c8519841ece9e21',
    applicationId:
      '0x4b4627904b97d79cf68f11637d19d05bdb1bc2499e2c16df0c8519841ece9e21',
    projectId:
      '0x79c2ae8858a5a3bd7f2e0da9509d727833ffa01f358b5969355f38ff32b20122',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: null,
    name: 'go-ethereum',
    description:
      'The go-ethereum team develops the software which the OP Stack is built on, contributes to Ethereum upgrades which benefit the OP Stack, and work with the Optimism team on occasion to upstream changes to the core code base.\n\nAlthough we are not the most active Optimism contributors day-to-day, we believe that we play a fundamental role in the OP Stack.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/ba199d56-5d0d-4c5c-8b52-1c7257c92242.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/9e0541a5-a7c3-40fc-9bd2-2b29c80c38de.png',
    socialLinks: {
      website: ['https://github.com/ethereum/go-ethereum'],
      farcaster: [],
      twitter: 'https://twitter.com/go_ethereum',
      mirror: null,
    },
    team: [
      {
        fid: 11112,
        object: 'user',
        pfp_url: 'https://i.imgur.com/xX38e9e.jpg',
        profile: { bio: { text: 'go-ethereum' } },
        username: 'lightclient',
        power_badge: false,
        display_name: 'lightclient',
        active_status: 'inactive',
        verifications: [],
        follower_count: 459,
        custody_address: '0x1d83e3f7cee2166519a24ad370002b18cb1b5ce9',
        following_count: 11,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: 'fd6833a7-9365-4f51-8b97-c754d2a9e524',
        type: 'github',
        url: 'https://github.com/ethereum/go-ethereum',
        name: 'go-ethereum',
        description: 'Go implementation of the Ethereum protocol ',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-03T14:23:10.445Z',
        updatedAt: '2024-09-03T14:23:59.540Z',
        projectId:
          '0x79c2ae8858a5a3bd7f2e0da9509d727833ffa01f358b5969355f38ff32b20122',
        metrics: {
          artifact_url: 'https://github.com/ethereum/go-ethereum',
          num_contributors: '5483.0',
          num_trusted_contributors: '113.0',
          num_contributors_last_6_months: '477.0',
          num_stars: '47226',
          num_trusted_stars: '88.0',
          trust_weighted_stars: '0.2834147599653312',
          num_forks: '19994',
          num_trusted_forks: '119.0',
          trust_weighted_forks: '0.4645677910698876',
          trust_rank_for_repo_in_category: '2.0',
          age_of_project_years: '9.666666666666742',
          license: 'LGPL-3.0',
        },
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://ethernodes.org/',
        name: 'ethernodes',
        description: 'Chart of most used execution clients.',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '496896.42',
          date: '',
          details: null,
        },
        {
          grant: 'retroFunding',
          link: null,
          amount: '230590.08',
          date: '',
          details: null,
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Ethereum client implementations',
        'Research which informs Ethereum core development',
      ],
      statement: {
        create: [
          {
            answer:
              'Since the OP Stack is built on top of go-ethereum, every decision we make upstream affect the efficiency, security, and resilience of Optimism downstream. This is true in more ways than just the core protocol. \n\nOur team also develops and maintains the JSON-RPC interface used by many developers to interact with the OP Stack. Through this, it is fair to say that we have a large impact on the developer ecosystem.\n\nAnd finally, our work on the Ethereum protocol itself and future network upgrades has and will substantially impact end users of Optimism and the adoption of the OP Stack.',
            question:
              'How does your project support, or is a dependency of, the OP Stack?',
          },
          {
            answer:
              'The OP stack core node is based around the go-ethereum project. If our project ceased to exist, the OP community would need maintain the stack and integrate Ethereum mainnet changes into the client to retain Ethereum equivalence.',
            question:
              'How would it impact the OP Stack if your project ceased to exist?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/go-ethereum',
  },
  {
    id: '0x4b61cd661477522b1243f51329dbaaef13edd3b43130746801ece70ce4d79cb9',
    applicationId:
      '0x4b61cd661477522b1243f51329dbaaef13edd3b43130746801ece70ce4d79cb9',
    projectId:
      '0xc1899658402b1373d1beb84e069a3eca066aaf01c0654502dbba51b66aeb6214',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: {
      name: 'Grandine',
      description:
        'Grandine core team builds a high-performance Ethereum consensus client.',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/c9b32f23-3c6a-4a81-a079-7c5514aedb6e.png',
      organizationCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/8213d4c7-9ffe-4db0-8548-1f09bb1306c9.png',
      socialLinks: {
        website: ['https://grandine.io/'],
        farcaster: ['https://warpcast.com/grandine'],
        twitter: 'https://twitter.com/grandineio',
        mirror: null,
      },
      team: ['846030'],
    },
    name: 'Grandine',
    description:
      "Grandine is a high-performance Ethereum consensus layer client. The core team started to work on Grandine in 2019 and in 2024 Grandine was open-sourced. The client is fast and resource-efficient so it's suitable for a wide range of uses from home stakers to institutional stakers running tens of thousands of validators.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/d1cdd615-20b8-4ff6-94dc-91d2a463969d.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/7a6d7bfc-0f2c-42d0-af89-695e706c42ce.png',
    socialLinks: {
      website: ['https://grandine.io/'],
      farcaster: ['https://warpcast.com/grandine'],
      twitter: 'https://twitter.com/grandineio',
      mirror: null,
    },
    team: [
      {
        fid: 846030,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/94a6ade5-e23c-4ca1-65d7-b0020b2c7000/rectcrop3',
        profile: {
          bio: { text: 'Grandine - Ethereum Consensus Client' },
        },
        username: 'grandine',
        power_badge: false,
        display_name: 'Grandine',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0x82dc9436fa0d5f4020f9fb8b5c0cd719a9a18e9c',
        following_count: 0,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: 'f3de41ab-a539-440c-880a-369dc71215e1',
        type: 'github',
        url: 'https://github.com/grandinetech/grandine',
        name: 'Grandine',
        description: '',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-03T16:40:53.924Z',
        updatedAt: '2024-09-04T13:33:06.419Z',
        projectId:
          '0xc1899658402b1373d1beb84e069a3eca066aaf01c0654502dbba51b66aeb6214',
        metrics: {
          artifact_url: 'https://github.com/grandinetech/grandine',
          num_contributors: '11.0',
          num_trusted_contributors: '2.0',
          num_contributors_last_6_months: '10.0',
          num_stars: '160',
          num_trusted_stars: '19.0',
          trust_weighted_stars: '0.0486694230512345',
          num_forks: '17',
          num_trusted_forks: '1.0',
          trust_weighted_forks: '0.0021663128066441',
          trust_rank_for_repo_in_category: '17.0',
          age_of_project_years: '3.25',
          license: 'GPL-3.0',
        },
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://ieeexplore.ieee.org/abstract/document/10478898',
        name: 'A paper on Ethereum clients comparision',
        description:
          "It's a paper on Ethereum client comparison. The paper shows a high performance of Grandine's state transition and other functions.",
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '42236',
          date: '',
          details: null,
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Ethereum client implementations'],
      statement: {
        create: [
          {
            answer:
              'The main impact - we shipped and open-sourced Grandine Ethereum consensus layer client with Deneb support that introduced blobs (EIP-4844) to the Ethereum mainnet. EIP-4844 enables L2 scaling by providing a data availability layer for L2s. Unlike other clients, Grandine uses our own Rust-KZG library so it adds additional diversity related to EIP-4844 functionality. Grandine is also working on upcoming PeerDAS support that will further increase scalability for L2s such as Optimism.\n',
            question:
              'How does your project support, or is a dependency of, the OP Stack?',
          },
          {
            answer:
              'There would be a lower diversity at the main layer which means higher risks for all Ethereum users including L2s such as Optimism and their users. The team is also working on the Rust-KZG library, which provides high-performance cryptography for blobs-related functionality. So there would be less diversity in the data availability layer that OP Stack uses.',
            question:
              'How would it impact the OP Stack if your project ceased to exist?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/Grandine',
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
        profile: { bio: { text: 'Security @ Ethereum' } },
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
    grantsAndFunding: { ventureFunding: [], revenue: [], grants: [] },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Security audits specifically on the OP Stack or its components.',
      ],
      statement: {
        create: [
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
    testimonials:
      'https://www.metricsgarden.xyz/projects/Fault%20Proofs%20security%20research',
  },
  {
    id: '0x5960585d5dd67b7778d390be4b8fce7da98d5f056efd2c892e340faebb1d7bc6',
    applicationId:
      '0x5960585d5dd67b7778d390be4b8fce7da98d5f056efd2c892e340faebb1d7bc6',
    projectId:
      '0x7d3f1d8e9da32b6e81e791a440b28ce9fbd79a5396acc4039d1cdc44c609c6d3',
    category: 'Utility',
    applicationCategory: 'OP_STACK_TOOLING',
    organization: null,
    name: 'OP STACK DEPLOYER',
    description:
      "OP Stack Deployer is a comprehensive tool designed to streamline the setup and deployment of an OP Stack chain. By automating complex tasks, it offers a seamless experience for developers. Whether you're an experienced blockchain developer or a newcomer, OP Stack Deployer provides the necessary resources to quickly get your OP Stack-based EVM Rollup operational.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/2578a4d4-b88e-4461-aecf-2278e1fe9bdf.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/6e5a0785-93ce-438a-af3d-d81460919f57.png',
    socialLinks: {
      website: [],
      farcaster: [],
      twitter: '',
      mirror: null,
    },
    team: [
      {
        fid: 842980,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/53c9acbb-ef87-4ea0-4c6e-b09f2cbbb200/rectcrop3',
        profile: { bio: { text: '' } },
        username: 'aymen',
        power_badge: false,
        display_name: 'Aymen',
        active_status: 'inactive',
        verifications: [],
        follower_count: 3,
        custody_address: '0x926e3343c3470e5b6fd59ebc570e8ae702dd8dc8',
        following_count: 6,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: 'afc01c62-52b8-40e0-95b1-26502f7ea5b6',
        type: 'github',
        url: 'https://github.com/Aymen-Tirchi/op-stack-deployer',
        name: 'op stack deployer',
        description:
          'OP Stack Deployer is a tool that simplifies setting up and deploying an OP Stack chain on the Ethereum Sepolia testnet. This guide will walk you through the steps required to spin up your OP Stack chain and perform tests or customize it for your specific needs.',
        verified: true,
        openSource: true,
        containsContracts: true,
        createdAt: '2024-08-24T23:20:36.905Z',
        updatedAt: '2024-08-27T15:10:31.817Z',
        projectId:
          '0x7d3f1d8e9da32b6e81e791a440b28ce9fbd79a5396acc4039d1cdc44c609c6d3',
      },
    ],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: { ventureFunding: [], revenue: [], grants: [] },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_TOOLING',
      subcategory: [
        'Ethereum test networks',
        'Infrastructure to test and deploy chains',
        'Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.',
        'Services for deploying and hosting an OP Chain.',
      ],
      statement: {
        create: [
          {
            answer:
              'The infrastructure built with OP Stack Deployer has significantly streamlined the process of testing, deploying, and operating OP chains. By automating complex tasks such as building repositories, generating keys, configuring networks, and deploying contracts, it reduces setup time and minimizes human error. This efficiency enables developers to focus on innovation rather than setup procedures. Additionally, the robust configuration ensures consistent and reliable network operations, which is crucial for maintaining the stability and security of OP chains. Overall, this infrastructure accelerates development timelines and enhances the robustness of blockchain projects.',
            question:
              'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?',
          },
          {
            answer:
              "The OP Stack Deployer has been instrumental in helping numerous developers streamline the setup and deployment of OP chains. One notable project that benefited is Karak(https://karak.network/), which was so impressed with the tool and how it solved their issues that they hired me to continue building their rollup on OP Stack. This led to my involvement with Andalusia Labs, the team behind Karak. At their request, I created a new GitHub account here: (https://github.com/aymentrosh) to continue contributing to innovative blockchain projects. The original OP Stack Deployer repository has received significant recognition, with many stars highlighting its impact and utility. You can view the stargazers here: (https://github.com/Aymen-Tirchi/op-stack-deployer/stargazers).\nyou can check that I'm Andalusia Labs team member on LinkedIn\nLinkedIn: https://www.linkedin.com/in/aymen-tirchi/\nTwitter: https://x.com/aymentrosh\n",
            question:
              'Who has used your tooling and how has it benefited them?',
          },
        ],
      },
    },
    testimonials:
      'https://www.metricsgarden.xyz/projects/OP%20STACK%20DEPLOYER',
  },
  {
    id: '0x596cd6262d7f32e44aa79e79ee75d60d191e28b5eab1206204ed22f24666f23f',
    applicationId:
      '0x596cd6262d7f32e44aa79e79ee75d60d191e28b5eab1206204ed22f24666f23f',
    projectId:
      '0x334fa6de0243cd1509870ea95f400fd524bd9c8f909e7f629d5457e4ca52e6fc',
    category: 'Utility',
    applicationCategory: 'OP_STACK_TOOLING',
    organization: {
      name: 'GregCardo',
      description:
        'GregCardo  is a software developer with a passion for innovation and problem-solving. Experienced in collaborating with global teams and eager to contribute creative solutions within the Ethereum Ecosystem.',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/1e73fbdc-3319-4e74-9d4a-a0a14325ced1.png',
      organizationCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/ca72c3c1-190b-493a-ab8d-1a5dafa296d5.png',
      socialLinks: {
        website: [],
        farcaster: [],
        twitter: '',
        mirror: '',
      },
      team: ['261806'],
    },
    name: 'Optimism Collective and OP Stack Documentation Improvements',
    description:
      "Hello Optimism Collective! I'm Greg Cardo, a passionate developer focused on enhancing the usability, clarity, and accessibility of the OP Stack through high-standard documentation. This project primarily focuses around improving the OP Stack documentation, where I've introduced useful updates and clarifications to support developers and operators working with Optimism's core infrastructure.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/eb2f9786-782a-4c8a-86ef-fa3aca286e98.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/1233d4d9-ddf6-414b-aba3-f91e821584ef.png',
    socialLinks: {
      website: ['https://github.com/richardgreg/op-docs'],
      farcaster: [],
      twitter: null,
      mirror: null,
    },
    team: [
      {
        fid: 261806,
        object: 'user',
        pfp_url: 'https://i.imgur.com/JmAQWvZ.jpg',
        profile: { bio: { text: '' } },
        username: 'gregcardo',
        power_badge: false,
        display_name: 'Cardo',
        active_status: 'inactive',
        verifications: ['0xbc1500daaff721f626ef1a4f1a8c4e333648c5a4'],
        follower_count: 59,
        custody_address: '0xe3fcc58a4b5d5fb2fd1fcde239a4f2be524a38d6',
        following_count: 56,
        verified_addresses: {
          eth_addresses: ['0xbc1500daaff721f626ef1a4f1a8c4e333648c5a4'],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        id: '9dd1dbdc-e209-4996-bfeb-6771b5c1edbd',
        type: 'github',
        url: 'https://github.com/richardgreg/op-docs-improvements',
        name: 'Optimism Collective and OP Stack Documentation Improvements',
        description:
          'This github repo highlights my contributions to the Optimism Docs',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-08T13:59:09.265Z',
        updatedAt: '2024-09-14T05:39:05.004Z',
        projectId:
          '0x334fa6de0243cd1509870ea95f400fd524bd9c8f909e7f629d5457e4ca52e6fc',
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://github.com/ethereum-optimism/docs/pull/805/files',
        name: 'Derivative Pipeline Information',
        description:
          'Added a high-level overview of the derivative pipeline and linked the specs page',
      },
      {
        url: 'https://github.com/ethereum-optimism/docs/pull/779/files',
        name: 'Node Log Levels Explainer',
        description:
          'This PR updates the consensus-config.mdx file to include detailed documentation on log levels for the op-node. The new section describes various log levels, ranging from silent to detailed, and provides guidance on setting the log level using the --log.level flag.',
      },
      {
        url: 'https://github.com/ethereum-optimism/docs/pull/853/files',
        name: 'Information on Expected Internal Reverts for Withdrawal Transactions',
        description:
          'This modification adds a section to the existing withdrawal-flow.mdx documentation to explain the expected internal reverts that users often see on Etherscan during withdrawal transactions.',
      },
      {
        url: 'https://github.com/ethereum-optimism/docs/pull/857/files',
        name: ' Information about `proxyd`',
        description:
          'I added a dedicated section and explanation for the proxyd service under Chain Operators > Operator Features. Documentation included what `proxyd` is, key features, how it works, consensus awareness, caching and metrics.',
      },
      {
        url: 'https://github.com/ethereum-optimism/docs/pull/858/files',
        name: 'Details on the sequencer fee vault',
        description:
          'I added in-depth details on the sequence fee vaults to indicate where transaction fees collected by the sequencer go.',
      },
      {
        url: 'https://github.com/ethereum-optimism/docs/pull/865/files',
        name: 'Addition of rollup.sequencerhttp to node operation docs',
        description:
          'Added a "callout" to the node operation documentation in step 7, instructing users to configure the --rollup.sequencerhttp flag.',
      },
      {
        url: 'https://github.com/ethereum-optimism/docs/pull/866/files',
        name: 'Addition of a Callout on the Cap for sequencer.l1-confs and verifier.l1-confs',
        description:
          'Added a callout to the sequencer.l1-confs and verifier.l1-confs configuration options in the node operation documentation. The callout highlighted the maximum values for sequencer.l1-confs to be 1800 seconds (150 blocks) since the Fjord upgrade is live. It also suggests keeping verifier.l1-confs within a 12-13 minute range (10-20 blocks) for optimal performance.',
      },
      {
        url: 'https://github.com/ethereum-optimism/docs/pull/796/files',
        name: 'OP Conductor Docs Improvement',
        description:
          'Improvements include:\n\n1. Safe Head Database (SafeDB) Configuration:\nDetailed instructions on enabling the SafeDB for op-node by setting the --safedb.path value.\nExplanation of the importance of SafeDB in ensuring the op-node is not stateless and can persist crucial update data.\n\n2. Rollup RPC Configuration:\nClear guidelines on setting the --rollup-rpc flag to point to an op-node archive node, highlighting the need for the challenger to access historical output roots.\nInclusion of an example configuration snippet for ease of understanding and implementation.\n\n3. Historical Data Requirements:\nEmphasis on the necessity for both op-node and op-geth to have data from the start of the games to maintain network consistency.\nGuidelines on ensuring sufficient historical data availability for both nodes, either through local storage or using archive nodes.',
      },
      {
        url: 'https://github.com/ethereum-optimism/docs/pull/809/files',
        name: 'Docker Images Discoverabilty',
        description:
          'Improvements for docker images discoverability include:\n\n1. Comprehensive Software Releases:\n\nExpanding the scope to include all software components, not just node components.\nAdding op-challenger to the list of software components with links to releases.\n\n2. Docker Image Searchability:\n\nClear instructions and links to find Docker images for op-node and op-geth.\nConsistent tagging conventions for Docker images to aid in searchability.\n\n3. Example Docker Image Tags:\n\nExamples of tagging the Docker images for better understanding and easier access.\n',
      },
      {
        url: 'https://github.com/ethereum-optimism/docs/pull/823/files',
        name: 'Chain Operator Feature: Span Batches',
        description:
          'Enhancements include:\n\n1. Documentation for Span Batches:\n\nOverview of what span batches are and their benefits.\nDetailed instructions on how to enable span batches in the chain configuration.\n\n2. Configuration Instructions:\n\nClear steps to add or update the configuration settings to enable span batches.\nInstructions on redeploying the chain node and verifying the changes.\n\n3. Links to Related Pages:\n\nDirect links to detailed span batches specification and design documents for further reading.',
      },
      {
        url: 'https://github.com/ethereum-optimism/docs/pull/876/files',
        name: 'Cross Domain Section',
        description:
          'Carving out a new "Cross Domain" section under OP STACK > Protocol that gives an overview of the lifecycle of an OP Stack cross-chain transaction.',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '10000',
          date: '',
          details: null,
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_TOOLING',
      subcategory: [
        'Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.',
      ],
      statement: {
        create: [
          {
            answer:
              "My contributions, though focused on documentation rather than new infrastructure, have greatly enhanced OP chains' testing, deployment, and operation by making the OP Stack more accessible.\n\n**Improved Resource Discoverability:** Enhancing the searchability of Docker images allows developers to find containerized environments for testing, saving time quickly.\n\n**Clear Operational Guidelines:** I've documented key aspects like the derivation pipeline and node log levels, helping operators deploy and monitor OP chains effectively while reducing the learning curve and preventing misconfigurations.\n\n**Enhanced Feature Understanding:** Documenting features like span batches and internal reverts has provided operators with clarity, reducing errors during testing and deployment.\n\nThese efforts and others not highlighted make OP Stack easier to use and ensure smoother operations for developers and operators.",
            question:
              'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?',
          },
          {
            answer:
              'Since documentation is vital in any open-source project, my contributions have benefited a broad range of users:\n\n**Core Developers:** Enhanced documentation, particularly on the derivation pipeline and span batches, helps developers better understand OP Stack operations and implement features in a structured way.\n\n**OP Chain Operators:** By documenting key operational aspects like node log levels and the derivation pipeline, operators now have clearer instructions, helping them avoid common issues and run their systems more efficiently.\n\n**Developers Building on OP Stack:** Developers integrating the OP Stack have gained clearer guidance on features like span batches and internal reverts, enabling more thorough testing before production deployment.\n\nThe benefits are evident in the increased ease of use and understanding for anyone interacting with the OP Stack.',
            question:
              'Who has used your tooling and how has it benefited them?',
          },
        ],
      },
    },
    testimonials:
      'https://www.metricsgarden.xyz/projects/Optimism%20Collective%20and%20OP%20Stack%20Documentation%20Improvements',
  },
  {
    id: '0x59b05c5888d0f16bedd7fb467b1e823a76b591b7e9b5b066b3017377ee4f692a',
    applicationId:
      '0x59b05c5888d0f16bedd7fb467b1e823a76b591b7e9b5b066b3017377ee4f692a',
    projectId:
      '0x541b7b08401d799b87f583c102a6c94cee7105f1b29dc630de5edbbd966d7c13',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: {
      name: 'Fe Language',
      description: '',
      organizationAvatarUrl: null,
      organizationCoverImageUrl: null,
      socialLinks: {
        website: [],
        farcaster: [],
        twitter: null,
        mirror: null,
      },
      team: ['850320'],
    },
    name: 'Fe Language',
    description:
      'Fe is a high-level language for the EVM. It is heavily inspired by Rust and implemented in it too. You can use Fe to write smart contracts for Ethereum or any EVM-equivalent platform. Developers who have come to appreciate Rust will enjoy many of the features currently supported by Fe.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/05ac5706-2a13-4325-8333-183a730e7797.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/f733c3ee-3819-40f8-9ee8-b94416a770d9.png',
    socialLinks: {
      website: ['fe-lang.org'],
      farcaster: [],
      twitter: null,
      mirror: null,
    },
    team: [
      {
        fid: 850320,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/62e95db6-3c22-47ca-e31d-19ebf7b0a900/rectcrop3',
        profile: { bio: { text: 'Programming language.' } },
        username: 'fe-lang',
        power_badge: false,
        display_name: 'Fe Lang',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0x5133d3e6d7b3d41892f5bf3ad479a10203ddfaf6',
        following_count: 0,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: '3f839532-1ca4-4a69-9e8a-daa732b04c13',
        type: 'github',
        url: 'https://github.com/ethereum/fe',
        name: '',
        description: '',
        verified: true,
        openSource: false,
        containsContracts: false,
        createdAt: '2024-09-05T00:53:37.042Z',
        updatedAt: '2024-09-05T00:54:11.463Z',
        projectId:
          '0x541b7b08401d799b87f583c102a6c94cee7105f1b29dc630de5edbbd966d7c13',
        metrics: {
          artifact_url: 'https://github.com/ethereum/fe',
          num_contributors: '69.0',
          num_trusted_contributors: '6.0',
          num_contributors_last_6_months: '12.0',
          num_stars: '1601',
          num_trusted_stars: '25.0',
          trust_weighted_stars: '0.0272802081061011',
          num_forks: '182',
          num_trusted_forks: '5.0',
          trust_weighted_forks: '0.0088903794265862',
          trust_rank_for_repo_in_category: '18.0',
          age_of_project_years: '5.0833333333332575',
          license: 'Custom',
        },
      },
    ],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '99379',
          date: '',
          details: null,
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Languages which are dedicated to developing smart contracts',
      ],
      statement: {
        create: [
          {
            answer:
              'The absence of our project would reduce language diversity, which is crucial for fostering innovation and attracting a broader range of developers with diverse skill sets. Language diversity improves accessibility, lowers entry barriers, and drives broader adoption. A more homogeneous language ecosystem could slow down growth and limit the flexibility and inclusiveness that encourage long-term ecosystem development within the OP Stack.',
            question:
              'How would it impact the OP Stack if your project ceased to exist?',
          },
          {
            answer:
              'The Fe compiler, which targets the EVM, enables developers to write Fe code for Ethereum and any EVM-compatible platform, including OP Stack. Fe introduces valuable features such as enums, pattern matching, libraries, modules, a standard library, traits, and built-in testing. By advancing programming languages like Fe, we enhance both the development experience and the overall blockchain ecosystem, offering greater flexibility and capability for developers within the OP Stack.',
            question:
              'How does your project support, or is a dependency of, the OP Stack?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/Fe%20Language',
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
    team: [
      {
        fid: 602876,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/93911237-0aae-41a8-fa65-21e99bfe5700/rectcrop3',
        profile: { bio: { text: 'Hans from Kroma' } },
        username: '0xhans',
        power_badge: false,
        display_name: 'Hans',
        active_status: 'inactive',
        verifications: [],
        follower_count: 7,
        custody_address: '0x2cb92bb3f7e974477dcb34d07d70ea56b4a9a2a1',
        following_count: 62,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
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
        follower_count: 76,
        custody_address: '0x9204074ca42a8dec8100073cb301dec6dd7d0697',
        following_count: 155,
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
        follower_count: 878,
        custody_address: '0x940ed4f9c1bbdc209111efea58d1e88c2618d9ae',
        following_count: 3,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: '97321910-87f4-4a15-9e7f-6e442753fd8d',
        type: 'github',
        url: 'https://github.com/kroma-network/7560-optimism',
        name: '7560-optimism',
        description:
          'OP Stack consensus client with necessary predeploy contracts for Native Account Abstraction, which is used in Pioneer Alpha.',
        verified: true,
        openSource: true,
        containsContracts: true,
        createdAt: '2024-09-04T07:02:16.809Z',
        updatedAt: '2024-09-04T07:38:44.861Z',
        projectId:
          '0x842f92e1a555fdbc6f0be1640997d1a6f6a96af3c19b5a035b649d806608ad19',
        metrics: {
          artifact_url: 'https://github.com/kroma-network/7560-optimism',
          num_contributors: '2.0',
          num_trusted_contributors: '0.0',
          num_contributors_last_6_months: '2.0',
          num_stars: '0',
          num_trusted_stars: '0.0',
          trust_weighted_stars: '0.0',
          num_forks: '0',
          num_trusted_forks: '0.0',
          trust_weighted_forks: '0.0',
          trust_rank_for_repo_in_category: '36.0',
          age_of_project_years: '0.33333333333325754',
          license: 'MIT',
        },
      },
      {
        id: 'bb2186e8-0ab0-4df7-9f3b-efcf276eaf8a',
        type: 'github',
        url: 'https://github.com/kroma-network/7560-geth',
        name: '7560-geth',
        description:
          'OP Stack go-ethereum client with Native Account Abstraction, which is used in Pioneer Alpha.',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-04T07:00:52.154Z',
        updatedAt: '2024-09-04T07:38:45.497Z',
        projectId:
          '0x842f92e1a555fdbc6f0be1640997d1a6f6a96af3c19b5a035b649d806608ad19',
        metrics: {
          artifact_url: 'https://github.com/kroma-network/7560-geth',
          num_contributors: '3.0',
          num_trusted_contributors: '1.0',
          num_contributors_last_6_months: '3.0',
          num_stars: '1',
          num_trusted_stars: '1.0',
          trust_weighted_stars: '1.037344808870498e-05',
          num_forks: '2',
          num_trusted_forks: '1.0',
          trust_weighted_forks: '0.0',
          trust_rank_for_repo_in_category: '32.0',
          age_of_project_years: '0.33333333333325754',
          license: 'LGPL-3.0',
        },
      },
      {
        id: 'd7b0159b-fd25-4b21-8eee-9ac59a7bfb91',
        type: 'github',
        url: 'https://github.com/kroma-network/rip7560-scripts',
        name: 'rip7560-scripts',
        description:
          'Simple scripts to test the functionalities of Native Account Abstraction at Pioneer Alpha.',
        verified: true,
        openSource: false,
        containsContracts: true,
        createdAt: '2024-09-04T07:04:09.685Z',
        updatedAt: '2024-09-04T07:38:45.520Z',
        projectId:
          '0x842f92e1a555fdbc6f0be1640997d1a6f6a96af3c19b5a035b649d806608ad19',
        metrics: {
          artifact_url: 'https://github.com/kroma-network/rip7560-scripts',
          num_contributors: '',
          num_trusted_contributors: '',
          num_contributors_last_6_months: '',
          num_stars: '1',
          num_trusted_stars: '',
          trust_weighted_stars: '0.002591415215901',
          num_forks: '0',
          num_trusted_forks: '',
          trust_weighted_forks: '0.0',
          trust_rank_for_repo_in_category: '20.0',
          age_of_project_years: '',
          license: '',
        },
      },
      {
        id: 'ea089fe9-80c6-4b9c-bc66-fc4cedd06a92',
        type: 'github',
        url: 'https://github.com/kroma-network/rip7560-bundler',
        name: '7560-bundler',
        description: 'RIP-7560 compatible bundler at Pioneer Alpha.',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-04T07:03:21.735Z',
        updatedAt: '2024-09-04T07:38:45.575Z',
        projectId:
          '0x842f92e1a555fdbc6f0be1640997d1a6f6a96af3c19b5a035b649d806608ad19',
        metrics: {
          artifact_url: 'https://github.com/kroma-network/rip7560-bundler',
          num_contributors: '2.0',
          num_trusted_contributors: '1.0',
          num_contributors_last_6_months: '2.0',
          num_stars: '1',
          num_trusted_stars: '0.0',
          trust_weighted_stars: '8.955722768512512e-06',
          num_forks: '1',
          num_trusted_forks: '1.0',
          trust_weighted_forks: '0.0002304233305905',
          trust_rank_for_repo_in_category: '24.0',
          age_of_project_years: '0.25',
          license: 'GPL-3.0',
        },
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
      ventureFunding: [{ amount: '5m-10m', year: '2022', details: '' }],
      revenue: [],
      grants: [],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
        'Work on core components of the OP Stack, including client implementations, modules, and modifications.',
      ],
      statement: {
        create: [
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
    testimonials:
      'https://www.metricsgarden.xyz/projects/Native%20Account%20Abstraction%20on%20OP%20Stack',
  },
  {
    id: '0x5f8e06ced087848712b56730976a7a31f3fbd14a862a75174d6e7fc56eebc627',
    applicationId:
      '0x5f8e06ced087848712b56730976a7a31f3fbd14a862a75174d6e7fc56eebc627',
    projectId:
      '0xb98778ca9ff41446e2bc304f7b5d27f0fa7c2bcd11df19e22d1352c06698a1f6',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: null,
    name: 'Account Abstraction - ERC-4337',
    description:
      'The AA team is working on standards for decentralized account abstraction, enabling better UX and security for the next billion users.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/35570d3a-c51f-48cd-b236-0098f734dd0e.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/9c9385ff-9ce2-46a1-9aa1-0e3274a04392.png',
    socialLinks: {
      website: ['https://www.erc4337.io/'],
      farcaster: [],
      twitter: 'https://twitter.com/erc4337',
      mirror: null,
    },
    team: [
      {
        fid: 637270,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/1e1822c3-06bb-42c1-ed61-0f6e431a3500/rectcrop3',
        profile: { bio: { text: 'Security @ Ethereum' } },
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
    github: [
      {
        id: 'fd36da2b-762b-4f7c-9031-f83b468c4ad1',
        type: 'package',
        url: 'https://www.npmjs.com/package/@account-abstraction/sdk',
        name: null,
        description: null,
        verified: false,
        openSource: false,
        containsContracts: false,
        createdAt: '2024-06-05T19:11:36.436Z',
        updatedAt: '2024-06-05T19:11:36.436Z',
        projectId:
          '0xb98778ca9ff41446e2bc304f7b5d27f0fa7c2bcd11df19e22d1352c06698a1f6',
      },
      {
        id: 'af02d93e-a630-44b4-a065-f3404420e329',
        type: 'github',
        url: 'https://github.com/eth-infinitism/account-abstraction',
        name: '',
        description: '',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-06-05T19:08:48.334Z',
        updatedAt: '2024-09-04T12:17:55.121Z',
        projectId:
          '0xb98778ca9ff41446e2bc304f7b5d27f0fa7c2bcd11df19e22d1352c06698a1f6',
        metrics: {
          artifact_url: 'https://github.com/eth-infinitism/account-abstraction',
          num_contributors: '128.0',
          num_trusted_contributors: '6.0',
          num_contributors_last_6_months: '34.0',
          num_stars: '1510',
          num_trusted_stars: '17.0',
          trust_weighted_stars: '0.0178113151305927',
          num_forks: '624',
          num_trusted_forks: '9.0',
          trust_weighted_forks: '0.0050682607321391',
          trust_rank_for_repo_in_category: '20.0',
          age_of_project_years: '2.4166666666667425',
          license: 'GPL-3.0',
        },
      },
    ],
    packages: [
      {
        url: 'https://www.npmjs.com/package/@account-abstraction/sdk',
        name: null,
        description: null,
      },
    ],
    links: [
      {
        url: 'https://www.bundlebear.com/overview/all',
        name: 'Dashboard showing adoption',
        description: '',
      },
    ],
    contracts: [
      {
        address: '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789',
        deploymentTxHash:
          '0xcddea14be9b486fd1c7311dbaf58fe13f1316eebd16d350bed3573b90e9515b8',
        deployerAddress: '0x81ead4918134AE386dbd04346216E20AB8F822C4',
        verificationProof:
          '0x45a72fed635dc10fd4e12b025c3e0ba4f336c735f982d4d645509f06a01365425119d7245e6da3612e431e7f5272cfc2b103d0f8cbe9e52a970c2288e64bdd7b1c',
        chainId: 10,
      },
      {
        address: '0x0000000071727De22E5E9d8BAf0edAc6f37da032',
        deploymentTxHash:
          '0x1f5b834a37c7d91b9541a2b35f8d0bffcf27d4b0f2656f793478db8c8c029d6a',
        deployerAddress: '0x81ead4918134AE386dbd04346216E20AB8F822C4',
        verificationProof: '0x0',
        chainId: 10,
      },
      {
        address: '0x0000000071727De22E5E9d8BAf0edAc6f37da032',
        deploymentTxHash:
          '0xa3382f65bab116e6dfe68ef4d96415515bca45b86072725d45d00df2010ac5b0',
        deployerAddress: '0x81ead4918134AE386dbd04346216E20AB8F822C4',
        verificationProof: '0x0',
        chainId: 8453,
      },
    ],
    grantsAndFunding: {
      ventureFunding: [],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '61332.92',
          date: '',
          details: null,
        },
        {
          grant: 'retroFunding',
          link: null,
          amount: '248448.21',
          date: '',
          details: null,
        },
        {
          grant: 'retroFunding',
          link: null,
          amount: '227800.2',
          date: '',
          details: null,
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Research which informs Ethereum core development'],
      statement: {
        create: [
          {
            answer:
              'This project became a dependency of the OP Stack when its contracts (EntryPoint v0.6 and v0.7) were [included](https://github.com/ethereum-optimism/optimism/blob/998b8de8923db35dde76b20700e1cca5193e19c3/op-e2e/bindings/entrypoint.go#L86) as OP stack predeployed contracts.\n\nThe project is widely used across the Ethereum ecosystem, beyond OP stack, which is why it\'s submitted in the "Ethereum core contributions" category.  But it also became a part of the OP stack when it was added to the main repo.',
            question:
              'How does your project support, or is a dependency of, the OP Stack?',
          },
          {
            answer:
              'Account abstraction improved UX on OP chains and has gained wide adoption, as can be seen in this [dashboard](https://www.bundlebear.com/overview/all).  At the time of this submission over 2M accounts were deployed on the OP chains, which submitted over 30M UserOps.\n\nIf the project did not exist, many apps built on it would have worse UX or would not exist.',
            question:
              'How would it impact the OP Stack if your project ceased to exist?',
          },
        ],
      },
    },
    testimonials:
      'https://www.metricsgarden.xyz/projects/Account%20Abstraction%20-%20ERC-4337',
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
    team: [
      {
        fid: 811328,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/c006aa58-212e-4908-8503-a2406259b400/rectcrop3',
        profile: { bio: { text: 'I scale & test in prod.' } },
        username: 'taem',
        power_badge: false,
        display_name: 'Taem Park',
        active_status: 'inactive',
        verifications: [
          '0x490c91f38ec57e3ab00811e0c51a62bfed7e81f4',
          '0x490c91f38ec57e3ab00811e0c51a62bfed7e81f4',
          '0x490c91f38ec57e3ab00811e0c51a62bfed7e81f4',
        ],
        follower_count: 4,
        custody_address: '0xf4353b7394a21eb410c8274ab8cc8aa75c42fcc4',
        following_count: 5,
        verified_addresses: {
          eth_addresses: [
            '0x490c91f38ec57e3ab00811e0c51a62bfed7e81f4',
            '0x490c91f38ec57e3ab00811e0c51a62bfed7e81f4',
            '0x490c91f38ec57e3ab00811e0c51a62bfed7e81f4',
          ],
          sol_addresses: [],
        },
      },
      {
        fid: 849695,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/64e99985-d928-4393-0303-0d2fbb0b7b00/rectcrop3',
        profile: { bio: { text: '' } },
        username: 'diff72840089',
        power_badge: false,
        display_name: 'Changwan Park',
        active_status: 'inactive',
        verifications: [],
        follower_count: 1,
        custody_address: '0x2528d878bae4a4168ab097e82bc5c592433730b0',
        following_count: 0,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 284703,
        object: 'user',
        pfp_url: 'https://i.imgur.com/ADllGMs.jpg',
        profile: {
          bio: { text: 'TestinProd | Engineer | Photographer | Optimist' },
        },
        username: 'imtei',
        power_badge: false,
        display_name: 'Tei Im',
        active_status: 'inactive',
        verifications: [],
        follower_count: 25,
        custody_address: '0xb570343406892c211f660619b0ad3a34f99c8676',
        following_count: 80,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 849643,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/100425b0-d822-488d-0485-62ae82409c00/rectcrop3',
        profile: { bio: { text: '' } },
        username: 'parkgunou',
        power_badge: false,
        display_name: 'Gunou Park',
        active_status: 'inactive',
        verifications: [],
        follower_count: 2,
        custody_address: '0x33a856a767ab69e376c8db517905da1b64ebd9d3',
        following_count: 4,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 849704,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/6a376bdb-4675-4270-6882-e5bc9898b100/rectcrop3',
        profile: { bio: { text: '' } },
        username: 'mininny',
        power_badge: false,
        display_name: 'Minhyuk Kim',
        active_status: 'inactive',
        verifications: [],
        follower_count: 1,
        custody_address: '0x320e3ff9bf2a6a3af31ca7e99fd9a98c2699d8e2',
        following_count: 2,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: 'ba18beb0-350d-4163-bff9-5ec5996f26f4',
        type: 'github',
        url: 'https://github.com/ethereum-optimism/asterisc',
        name: 'Asterisc Github Repository',
        description: '',
        verified: true,
        openSource: true,
        containsContracts: true,
        createdAt: '2024-09-04T19:32:27.967Z',
        updatedAt: '2024-09-04T19:33:27.972Z',
        projectId:
          '0x1ea2fc7183a8ad244a97ecc287ca922209274c11dd9e991a04315e8399e118fc',
        metrics: {
          artifact_url: 'https://github.com/ethereum-optimism/asterisc',
          num_contributors: '13.0',
          num_trusted_contributors: '11.0',
          num_contributors_last_6_months: '9.0',
          num_stars: '98',
          num_trusted_stars: '25.0',
          trust_weighted_stars: '0.0429618752848958',
          num_forks: '14',
          num_trusted_forks: '4.0',
          trust_weighted_forks: '0.0367033437392652',
          trust_rank_for_repo_in_category: '2.0',
          age_of_project_years: '1.6666666666667425',
          license: 'MIT',
        },
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
      ventureFunding: [
        {
          amount: '1m-5m',
          year: '2022',
          details: 'Initial friends & family rounds to kick off Test in Prod.',
        },
      ],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
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
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
        'Work on core components of the OP Stack, including client implementations, modules, and modifications.',
      ],
      statement: {
        create: [
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
    testimonials: 'https://www.metricsgarden.xyz/projects/Asterisc',
  },
  {
    id: '0x62855986b48353248f0feaea9e4afceb298505ec0cc1a515c3fc9cbffaff62e0',
    applicationId:
      '0x62855986b48353248f0feaea9e4afceb298505ec0cc1a515c3fc9cbffaff62e0',
    projectId:
      '0x3a103436d12a3d54ade1a44f87ce255417fd530b6ec55abd3bea1898b32c61c1',
    category: 'Utility',
    applicationCategory: 'OP_STACK_TOOLING',
    organization: null,
    name: 'roll-op',
    description:
      'roll-op is a script that makes it trivial for any developer to spin up an OP stack rollup, both for dev and production use.\n\nThe script lets you configure and run your own rollup by running only two or three commands. It uses a single well-documented config file.\n\nAdditionally, it supports EIP-4337 AA infrastructure (bundler + paymaster) and helps you automatically subsidize gas for transactions that match certain criteria.\n\nSpinning a rollup on Sepolia is as simple as:\n\n> git clone git@github.com:0xFableOrg/roll-op.git\n> cd roll-op\n> cp conf.toml.example conf.toml\n# conf.toml: uncomment Sepolia section, add your keys & rpc\n> ./rollop setup --yes\n> ./rollop --preset=prod --conf=conf.toml l2\n\nMore info: https://twitter.com/norswap/status/1707188816455622899\n\nIt has most notably been used by Celestia as the official way to let people experiment with devnet OP stack rollups using Celestia as DA layer: https://x.com/JoshCStein/status/1816558353172300114',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/46663b96-a394-4298-9ab1-bbd2f3739669.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/fc36ef5f-4347-4d44-ad13-b68906265782.png',
    socialLinks: {
      website: ['https://github.com/0xFableOrg/roll-op'],
      farcaster: [],
      twitter: null,
      mirror: null,
    },
    team: [
      {
        fid: 2034,
        object: 'user',
        pfp_url:
          'https://pbs.twimg.com/profile_images/1466042754962804743/Ks9Fv6tY_400x400.jpg',
        profile: {
          bio: {
            text: 'Perpetual soldier of fortune, occasional internet slacker.\n\nCooking 0xFable — the fully on-chain trading card game for nerds',
          },
        },
        username: 'norswap',
        power_badge: false,
        display_name: 'Norswap 🏴‍☠️✨',
        active_status: 'inactive',
        verifications: ['0x576f1e53afe5e99b2257258c7e3248d3a1822548'],
        follower_count: 305,
        custody_address: '0xee9820444a6ac25faa9a8bd91aebb43328c356d1',
        following_count: 77,
        verified_addresses: {
          eth_addresses: ['0x576f1e53afe5e99b2257258c7e3248d3a1822548'],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        id: '3fcea0e6-9d03-4e47-9204-18e358b2ce22',
        type: 'github',
        url: 'https://github.com/0xFableOrg/roll-op',
        name: null,
        description: null,
        verified: true,
        openSource: false,
        containsContracts: false,
        createdAt: '2024-07-14T14:14:43.445Z',
        updatedAt: '2024-07-14T14:14:43.445Z',
        projectId:
          '0x3a103436d12a3d54ade1a44f87ce255417fd530b6ec55abd3bea1898b32c61c1',
      },
    ],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '74534',
          date: '',
          details: null,
        },
        {
          grant: 'token-house-mission',
          link: 'https://app.charmverse.io/op-grants/page-3173529621090243',
          amount: '45000',
          date: '2023-07-23',
          details: 'Grant for initial work on roll-op',
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_TOOLING',
      subcategory: [
        'Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.',
      ],
      statement: {
        create: [
          {
            answer:
              "// You'll forgive me for copying the project description here, as it does really answer the question.\n// For concrete uses, see the next question!\n\nroll-op is a script that makes it trivial for any developer to spin up an OP stack rollup, both for dev and production use.\n\nThe script lets you configure and run your own rollup by running only two or three commands. It uses a single well-documented config file.\n\nAdditionally, it supports EIP-4337 AA infrastructure (bundler + paymaster) and helps you automatically subsidize gas for transactions that match certain criteria.\n\nSpinning a rollup on Sepolia is as simple as:\n\n> git clone git@github.com:0xFableOrg/roll-op.git\n> cd roll-op\n> cp conf.toml.example conf.toml\n# conf.toml: uncomment Sepolia section, add your keys & rpc\n> ./rollop setup --yes\n> ./rollop --preset=prod --conf=conf.toml l2\n\nMore info: https://twitter.com/norswap/status/1707188816455622899",
            question:
              'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?',
          },
          {
            answer:
              'Celestia has used roll-op to demonstrate the use of Celestia as an alternative DA layer for OP stack rollups:\n\n- https://x.com/JoshCStein/status/1816558353172300114\n- https://docs.celestia.org/developers/optimism#run-an-op-stack-rollup-with-celestia-underneath\n\nI\'ve received praise for how this helps explain the operational setup of the OP stack (e.g. https://github.com/0xFableOrg/roll-op/blob/master/docs/opstack.md)\n\nMy tweet about it got 130 likes, mostly from builders: https://x.com/norswap/status/1740432731790832051/likes\n\nroll-op was used to build RICRolling, a proof-of-concept decentralized RaaS that won first place in the Ethcon Korea hackaton:\n- https://x.com/norswap/status/1720768605049303383\n- https://x.com/ethconkr/status/1698269334555312501\n\nEndorsement by Noah Pravacek, founder of Nodekit who\'s thinking about using roll-op: "Roll-op makes it super easy for anyone to launch or test a new variant of the OP Stack. We have loved using it at NodeKit."\n\n',
            question:
              'Who has used your tooling and how has it benefited them?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/roll-op',
  },
  {
    id: '0x64961108e65c1c897e033c5609361839998fbf117c312b211ba7523100c28569',
    applicationId:
      '0x64961108e65c1c897e033c5609361839998fbf117c312b211ba7523100c28569',
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
      website: [
        'https://runtimeverification.com/',
        'https://kontrol.runtimeverification.com/',
      ],
      farcaster: ['https://warpcast.com/rv-inc'],
      twitter: 'https://x.com/rv_inc',
      mirror: null,
    },
    team: null,
    github: [
      {
        id: 'b7f3d63b-98f4-4f8b-9ee2-839e9211bb8c',
        type: 'github',
        url: 'https://github.com/runtimeverification/optimism-ci',
        name: 'KaaS CI Setup for Optimism',
        description:
          'This repository provides the setup for K as a Service (KaaS) CI integration with Optimism, enhancing the development and testing experience with the K framework. KaaS introduces new features, streamlines operations, and centralizes shared computational results, making it an ideal solution for web3 teams. By leveraging caching proofs and remote computation, KaaS eliminates redundant processes, saving valuable time and integrating seamlessly with continuous integration (CI) systems.',
        verified: true,
        openSource: false,
        containsContracts: false,
        createdAt: '2024-08-30T13:24:20.962Z',
        updatedAt: '2024-09-19T15:55:10.814Z',
        projectId:
          '0x80393c05d524b7a6f7a78b0c141eadf0759642ae8d7e718134318cd2d73d5464',
      },
      {
        id: '8a150652-5529-4be7-8db4-cff192ede681',
        type: 'github',
        url: 'https://github.com/runtimeverification/_audits_Ethereum-optimism_pausability',
        name: 'Kontrol Integration for Pausability Mechanism Verification in Optimism',
        description:
          'This repository (https://github.com/runtimeverification/_audits_Ethereum-optimism_pausability/tree/feature/rv-compute/packages/contracts-bedrock/test/kontrol) contains the integration of Kontrol, a formal verification tool developed by Runtime Verification, into the Optimism codebase. The integration focuses on verifying the pausability features of the smart contracts within the contracts-bedrock directory. Kontrol leverages KEVM and Foundry, enabling developers to conduct formal verification without requiring extensive knowledge of verification languages or tools. The setup ensures rigorous validation of contract behavior, reducing potential vulnerabilities and enhancing the robustness of the Optimism protocol.',
        verified: true,
        openSource: true,
        containsContracts: true,
        createdAt: '2024-08-28T14:40:58.756Z',
        updatedAt: '2024-09-19T15:55:11.515Z',
        projectId:
          '0x80393c05d524b7a6f7a78b0c141eadf0759642ae8d7e718134318cd2d73d5464',
      },
      {
        id: 'f464d69d-40ab-41be-9c97-0d9f53aabff3',
        type: 'github',
        url: 'https://github.com/runtimeverification/kontrol',
        name: 'Kontrol - Solidity formal verification tool based on Foundry and KEVM',
        description:
          'Kontrol combines KEVM and Foundry to grant developers the ability to perform formal verification without learning a new language or tool. This is especially useful for those who are not verification engineers. Additionally, developers can leverage Foundry test suites they have already developed and use symbolic execution to increase the level of confidence.\n',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-19T15:48:03.836Z',
        updatedAt: '2024-09-19T15:55:11.491Z',
        projectId:
          '0x80393c05d524b7a6f7a78b0c141eadf0759642ae8d7e718134318cd2d73d5464',
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
      {
        url: 'https://ethcc.io/archive/Getting-started-with-Kontrol-a-formal-verification-tool',
        name: 'Kontrol crash course workshop at EthCC7',
        description:
          'Kontrol crash course at EthCC, where we covered Kontrol in action with some examples of work with Optimism',
      },
    ],
    contracts: [],
    grantsAndFunding: { ventureFunding: [], revenue: [], grants: [] },
    pricingModel: {
      type: 'freemium',
      details:
        'As an open source and free-to-use tool, Kontrol doesn’t generate any revenue on its own. We do offer formal verification services where our engineers use Kontrol as the main verification instrument, but it is not in our business model to charge for the use of the tool itself. From January 2023, we were engaged in three different verification projects that used Kontrol, one of which involved verification of the L1 pausability mechanism in Optimism and was performed for OP Labs.',
    },
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Work on core components of the OP Stack, including client implementations, modules, and modifications.',
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
        'Security audits specifically on the OP Stack or its components.',
      ],
      statement: { create: [] },
    },
    testimonials:
      "https://www.metricsgarden.xyz/projects/Formal%20Verification%20of%20Optimism's%20L1%20pausability%20mechanism",
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
    team: [
      {
        fid: 754190,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/f07bd8e3-d129-46b2-23b1-27888eafd700/rectcrop3',
        profile: {
          bio: {
            text: 'Ethereum developer, one of the primary contributing members of the https://github.com/optimism-java',
          },
        },
        username: 'thinkafcod',
        power_badge: false,
        display_name: 'thinkAfCod',
        active_status: 'inactive',
        verifications: ['0xf5f0a5135486ff2715b1dfaead54eeaffe6b8404'],
        follower_count: 16,
        custody_address: '0xf8c7df3e96d4571474b8acdd6c76ec1f974da8c4',
        following_count: 87,
        verified_addresses: {
          eth_addresses: ['0xf5f0a5135486ff2715b1dfaead54eeaffe6b8404'],
          sol_addresses: [],
        },
      },
      {
        fid: 451368,
        object: 'user',
        pfp_url: 'https://i.imgur.com/hOQVxfS.jpg',
        profile: {
          bio: {
            text: 'I like playingsome video games, eatting delicious food and traveling.',
          },
        },
        username: 'zhouop0',
        power_badge: false,
        display_name: 'zhouop0',
        active_status: 'inactive',
        verifications: [],
        follower_count: 6,
        custody_address: '0xfedb9e80ee85f8a92887495a1d7873873cc70d14',
        following_count: 63,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 193400,
        object: 'user',
        pfp_url: 'https://i.imgur.com/9qScZ3F.jpg',
        profile: {
          bio: {
            text: 'Ethereum developer, creator of https://github.com/optimism-java',
          },
        },
        username: 'grapebaba',
        power_badge: false,
        display_name: 'grapebaba',
        active_status: 'inactive',
        verifications: [],
        follower_count: 59,
        custody_address: '0x5047d4500fbbac22a7cc741c335211f096807ee0',
        following_count: 118,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: '33e0d0ea-6698-46a9-a459-ab01e311b9e2',
        type: 'github',
        url: 'https://github.com/optimism-java/blob-archiver-rs',
        name: '',
        description: '',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-08-25T03:00:01.758Z',
        updatedAt: '2024-08-25T03:00:14.043Z',
        projectId:
          '0xbea008dac0a4a2d2cc88ed14468f7ce06b1a13d43ead38f31df3ca5f6d70d12e',
        metrics: {
          artifact_url: 'https://github.com/optimism-java/blob-archiver-rs',
          num_contributors: '1.0',
          num_trusted_contributors: '1.0',
          num_contributors_last_6_months: '1.0',
          num_stars: '1',
          num_trusted_stars: '1.0',
          trust_weighted_stars: '0.002809440366321',
          num_forks: '1',
          num_trusted_forks: '0.0',
          trust_weighted_forks: '0.0',
          trust_rank_for_repo_in_category: '8.0',
          age_of_project_years: '0.16666666666674246',
          license: 'MIT',
        },
      },
    ],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      revenue: [],
      grants: [
        {
          grant: 'token-house-mission',
          link: 'https://app.charmverse.io/op-grants/blob-archiver-rs-a-robust-blob-archiver-service-in-rust-6388430437756178',
          amount: '10000',
          date: '2024-05-09',
          details: '',
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Work on core components of the OP Stack, including client implementations, modules, and modifications.',
      ],
      statement: {
        create: [
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
    testimonials: 'https://www.metricsgarden.xyz/projects/blob-archiver-rs',
  },
  {
    id: '0x6c524b0afee6ab66e507b86f07f0338c5d1e5b7257c4b6fd80efdc56f30899df',
    applicationId:
      '0x6c524b0afee6ab66e507b86f07f0338c5d1e5b7257c4b6fd80efdc56f30899df',
    projectId:
      '0x1874030dc79203f106c67f2b1f6a2b600c4efe9a2c1523ae1bce46140368ad04',
    category: 'Utility',
    applicationCategory: 'OP_STACK_TOOLING',
    organization: null,
    name: 'The book of optimism fault proof',
    description:
      'The Book of Optimism Fault Proof\n\nThe Book of Optimism Fault Proof repository is a resource aimed at demystifying the fault proof system for newcomers and seasoned developers alike. Centered around the transformative concept of a fault proof system, this project shifts away from centralized proposers to a mechanism grounded in game theory. The purpose of this document is to offer a multifaceted explanation of the fault proof system, providing newcomers with a rapid understanding of its mechanics and the specific details of its code.\n\n1. Starting with the Basics\n\nThe journey into understanding fault proof begins with the simplest design of such a system. This approach breaks down the complexity of fault proof into manageable parts, making it easier for newcomers to grasp the fundamental concepts and how they interconnect within the broader system architecture.\n\n2. Key Components Explained\n\nFault Proof: At its core, the fault proof mechanism replaces centralized proposer systems, which are susceptible to biases and inefficiencies, with a decentralized, game-theory-based approach.\nFault Proof Game: This component employs a binary search technique to pinpoint and verify discrepancies between parties on the blockchain, ensuring transparency and fairness in dispute resolution.\nCannon: An off-chain program, Cannon is pivotal in generating verifiable data needed for on-chain interactions, bridging the gap between theoretical fault proof and practical implementation.\nop-program: This tool provides the necessary prototype files for Cannon, facilitating services for pre-image data crucial for the system’s operations.\nop-challenger: Automating the gameplay elements of the fault proof system, op-challenger utilizes both Cannon and op-program to streamline processes and enhance system integrity.\n\n3. Architecture Mechanics\n\nUnderstanding the architecture of the fault proof system involves exploring how these components work together to form a robust mechanism. From the deployment of smart contracts and proxies on the Ethereum blockchain, identified by specific addresses such as MIPS and DisputeGameFactoryProxy, to the integration of off-chain computations with on-chain verifications, the architecture is designed for scalability and security.\n\n4. Comprehensive Resources\n\nFurther enriching this document, an extensive collection of articles and videos is summarized, providing deep dives into each component and the fault proof mechanism as a whole. These resources are meticulously curated to extend learning beyond the initial explanations, offering insights into potential applications and optimizations of the fault proof system.\n\n5. For Newcomers and Experts\n\nWhether you are a new entrant eager to understand the basics or an expert looking to refine your knowledge of decentralized systems, the repository offers a wealth of information designed to bring all readers up to speed on the innovative fault proof system.\n',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/6003ee42-3418-4021-af28-0f997e615893.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/d141ff4f-c241-44a1-9da6-c16c1dcab7ea.png',
    socialLinks: {
      website: [
        'https://github.com/joohhnnn/The-book-of-optimism-fault-proof',
        'https://github.com/joohhnnn/The-book-of-optimism-fault-proof-CN',
      ],
      farcaster: [],
      twitter: 'https://x.com/JoohhnnnChase',
      mirror: null,
    },
    team: [
      {
        fid: 191318,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/0e3f80da-ae32-4a7c-a240-cc3ec6019000/original',
        profile: { bio: { text: 'Hi there' } },
        username: 'joohhnnn',
        power_badge: false,
        display_name: 'joohhnnn',
        active_status: 'inactive',
        verifications: [],
        follower_count: 15,
        custody_address: '0xd316740dfd65ca564b4b02e1298f0b7193c920e2',
        following_count: 80,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: '79e7be4b-e8f3-414e-b081-247b3fd848c8',
        type: 'github',
        url: 'https://github.com/joohhnnn/The-book-of-optimism-fault-proof',
        name: 'The-book-of-optimism-fault-proof',
        description:
          'A document designed to explain fault proof from multiple perspectives, aimed at quickly bringing newcomers up to speed on the mechanisms of fault proof and its specific code details.',
        verified: true,
        openSource: false,
        containsContracts: false,
        createdAt: '2024-09-03T21:27:08.567Z',
        updatedAt: '2024-09-03T21:30:31.902Z',
        projectId:
          '0x1874030dc79203f106c67f2b1f6a2b600c4efe9a2c1523ae1bce46140368ad04',
      },
      {
        id: 'f35f12ea-67e6-4105-96d8-6c8cd0cc3e6d',
        type: 'github',
        url: 'https://github.com/joohhnnn/The-book-of-optimism-fault-proof-CN',
        name: 'The-book-of-optimism-fault-proof-CN',
        description:
          'A document designed to explain fault proof from multiple perspectives, aimed at quickly bringing newcomers up to speed on the mechanisms of fault proof and its specific code details In Chinese.',
        verified: true,
        openSource: false,
        containsContracts: false,
        createdAt: '2024-09-03T21:29:45.623Z',
        updatedAt: '2024-09-03T21:30:31.986Z',
        projectId:
          '0x1874030dc79203f106c67f2b1f6a2b600c4efe9a2c1523ae1bce46140368ad04',
      },
    ],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: { ventureFunding: [], revenue: [], grants: [] },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_TOOLING',
      subcategory: [
        'Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.',
      ],
      statement: {
        create: [
          {
            answer:
              "\"The 'Book of Optimism Fault Proof' repository is an resource aimed at demystifying the fault proof system for newcomers and seasoned developers alike. Centered around the transformative concept of a fault proof system, this project shifts away from centralized proposers to a mechanism grounded in game theory. The purpose of this document is to offer a multifaceted explanation of the fault proof system, providing newcomers with a rapid understanding of its mechanics and the specific details of its code.\n\nStarting with the Basics The journey into understanding fault proof begins with the simplest design of such a system. This approach breaks down the complexity of fault proof into manageable parts, making it easier for newcomers to grasp the fundamental concepts and how they interconnect within the broader system architecture.",
            question:
              'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?',
          },
          {
            answer:
              "Engineer Feedback:\n\nEngineers have leveraged this documentation and tools to clarify complex concepts and integrate fault proof systems into their projects.\n \nCommunity Engagement:\n\nThe documentation is referenced in the Optimism community. This inclusion underscores the value and credibility of the resources.\nThe Chinese version of our document has been especially impactful, published on the 'learnblockchain' forum, where it has accumulated tens of thousands of views, demonstrating its relevance and utility to a broad audience.",
            question:
              'Who has used your tooling and how has it benefited them?',
          },
        ],
      },
    },
    testimonials:
      'https://www.metricsgarden.xyz/projects/The%20book%20of%20optimism%20fault%20proof',
  },
  {
    id: '0x6e299c690e4ea63ec248ed245b97dd1a03bcf4d08a7721f660e74c8eae6d50ee',
    applicationId:
      '0x6e299c690e4ea63ec248ed245b97dd1a03bcf4d08a7721f660e74c8eae6d50ee',
    projectId:
      '0x09875cfe708f0c3acaca3d8af6b1ca2bd45b43c4a268a55c5d2b50ec9bdeef75',
    category: 'Utility',
    applicationCategory: 'OP_STACK_TOOLING',
    organization: {
      name: 'TechNERDs',
      description: '',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/1fad18ed-2ac3-4966-a0aa-1929a40d0d84.png',
      organizationCoverImageUrl: '',
      socialLinks: {
        website: [],
        farcaster: [],
        twitter: '',
        mirror: '',
      },
      team: ['16340', '190594', '191318', '535575', '328679', '849507'],
    },
    name: 'TechNERDs Program',
    description:
      "The TechNERDs program maintain a developers repository and the discussion section has evolved into a Stack Overflow style forum where 100s of threads have turned into reusable resources and have lead to documentation and developer experience improvements. https://github.com/ethereum-optimism/developers/discussions\n\nThe TechNERDS expand developer support and bridge technical knowledge gaps. They directly solve developer pain by answering questions, debugging issues via support tickets and dev channels, improve documentation, and making improvements to the code repositories. They're enabling developers to build and thrive with the OP Stack.\n",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/339e37a6-4383-431f-be9a-fd40d82586c0.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/d40c4486-fd46-4b2b-9bdf-d28c9dd636b5.png',
    socialLinks: {
      website: [],
      farcaster: [],
      twitter: null,
      mirror: null,
    },
    team: [
      {
        fid: 16340,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/7adf43f4-66a3-4d48-dff7-503c404c9a00/rectcrop3',
        profile: { bio: { text: '' } },
        username: 'soyboy',
        power_badge: true,
        display_name: 'soyboy',
        active_status: 'inactive',
        verifications: ['0x5329b814ff3a1123e47357e0be98978617b69dbe'],
        follower_count: 888,
        custody_address: '0x548554b5130bf0d3300d246eb908fbeb35e0fb7d',
        following_count: 336,
        verified_addresses: {
          eth_addresses: ['0x5329b814ff3a1123e47357e0be98978617b69dbe'],
          sol_addresses: [],
        },
      },
      {
        fid: 190594,
        object: 'user',
        pfp_url: 'https://i.imgur.com/0whnbOH.jpg',
        profile: {
          bio: { text: 'Engineer/DeFier | Optimism SupNERD/TechNERD🔴✨' },
        },
        username: 'hashigo.eth',
        power_badge: false,
        display_name: 'hashigo',
        active_status: 'inactive',
        verifications: ['0xecd02810db92ff027ea1b0850d46bda963676d74'],
        follower_count: 38,
        custody_address: '0x6f71de75202b93e45f351a2c0898316932aaf043',
        following_count: 58,
        verified_addresses: {
          eth_addresses: ['0xecd02810db92ff027ea1b0850d46bda963676d74'],
          sol_addresses: [],
        },
      },
      {
        fid: 191318,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/0e3f80da-ae32-4a7c-a240-cc3ec6019000/original',
        profile: { bio: { text: 'Hi there' } },
        username: 'joohhnnn',
        power_badge: false,
        display_name: 'joohhnnn',
        active_status: 'inactive',
        verifications: [],
        follower_count: 15,
        custody_address: '0xd316740dfd65ca564b4b02e1298f0b7193c920e2',
        following_count: 80,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 535575,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/0c561811-39c0-4a38-8f19-9445a0d6d500/rectcrop3',
        profile: { bio: { text: 'op stack' } },
        username: 'simple8720',
        power_badge: false,
        display_name: 'simple',
        active_status: 'inactive',
        verifications: ['0xc9d5dc70a2cebce15f685148bbc7d53704e53b7f'],
        follower_count: 12,
        custody_address: '0x7afca32d7799126e7d03c389c8e71443a178a432',
        following_count: 67,
        verified_addresses: {
          eth_addresses: ['0xc9d5dc70a2cebce15f685148bbc7d53704e53b7f'],
          sol_addresses: [],
        },
      },
      {
        fid: 328679,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/249df6fc-9146-4686-bfca-d0697b5b3100/original',
        profile: { bio: { text: 'Just another dev' } },
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
        fid: 849507,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/22a4b32e-288c-4492-a379-94c930d7a500/rectcrop3',
        profile: {
          bio: {
            text: 'i have a old fid:22003 that cannot import into warpcast,lol',
          },
        },
        username: 'imtipi',
        power_badge: false,
        display_name: 'tipi',
        active_status: 'inactive',
        verifications: [],
        follower_count: 3,
        custody_address: '0x28ebefa3040f984cb3531427988dcfc0fcfdd485',
        following_count: 2,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: 'e606fbaf-70e7-40a4-8493-36d6100a382f',
        type: 'github',
        url: 'https://github.com/ethereum-optimism/developers',
        name: 'developers',
        description:
          "This developers repo is where the Optimism Collective's technical community can receive support. The primary value is in the discussion section where the TechNERDs facilitate a stack overflow type forum.",
        verified: true,
        openSource: false,
        containsContracts: false,
        createdAt: '2024-09-02T20:27:10.729Z',
        updatedAt: '2024-09-04T18:13:52.499Z',
        projectId:
          '0x09875cfe708f0c3acaca3d8af6b1ca2bd45b43c4a268a55c5d2b50ec9bdeef75',
        metrics: {
          artifact_url: 'https://github.com/ethereum-optimism/developers',
          num_contributors: '44.0',
          num_trusted_contributors: '5.0',
          num_contributors_last_6_months: '31.0',
          num_stars: '68',
          num_trusted_stars: '3.0',
          trust_weighted_stars: '0.0039563212310944',
          num_forks: '43',
          num_trusted_forks: '3.0',
          trust_weighted_forks: '0.0023728745481357',
          trust_rank_for_repo_in_category: '2.0',
          age_of_project_years: '0.9166666666667425',
          license: 'CC0-1.0',
        },
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://github.com/ethereum-optimism/developers/issues?q=label%3Amonthly-report',
        name: 'Monthly Metrics Reporting',
        description:
          'The developers repository has an automated issue creation tool that summarizes the activity in the repository on a monthly cadence.',
      },
      {
        url: 'https://github.com/ethereum-optimism/developers/blob/main/community/technerds-program/metrics/retro-funding-5.md',
        name: 'Curated Retro Funding Round 5 Metrics',
        description:
          "This document quantifies the TechNERDs Program's impact on the OP Stack ecosystem from October 1, 2023, to July 31, 2024. ",
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '50462',
          date: '',
          details: null,
        },
        {
          grant: 'token-house-mission',
          link: 'https://gov.optimism.io/t/final-technerd-program/6087',
          amount: '16800',
          date: '2023-07-24',
          details: 'These grants are subject to a 1 year lock up period.',
        },
        {
          grant: 'foundation-mission',
          link: 'https://github.com/ethereum-optimism/ecosystem-contributions/issues/151',
          amount: '32500',
          date: '2024-05-09',
          details: 'These grants are subject to a 1 year lock up period.',
        },
        {
          grant: 'foundation-mission',
          link: 'https://github.com/ethereum-optimism/ecosystem-contributions/issues/232',
          amount: '26250',
          date: '2024-07-26',
          details: 'These grants are subject to a 1 year lock up period.',
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_TOOLING',
      subcategory: [
        'Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.',
      ],
      statement: {
        create: [
          {
            answer:
              'The TechNERDs have played an essential role as highly active contributors to the Optimism Collective. They’re primarily focused on assisting with deployment, troubleshooting, and operation of OP Chains across Discord and GitHub.\n\nTheir activity has generated reusable knowledge bases within GitHub threads that future OP Stack developers can refer to, streamlining the onboarding process and reducing the learning curve for new adopters.\n\nAs front-line support, the TechNERDs also assist with troubleshooting, often helping developers overcome technical challenges that otherwise hinder the devx of the OP Stack. This day-to-day involvement with developers allows them to act as an early detection system for bugs and potential issues in the OP Stack. Their feedback has directly contributed to the identification of bugs, accelerating the remediation process and ultimately improving the developer experience for the broader OP Stack community.',
            question:
              'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?',
          },
          {
            answer:
              '# Metrics\n\n### Questions Answered\n\n**The TechNERDs answered over 491 questions related to the OP Stack during this period.** It should be noted that not all contributions during this time period have been submitted yet. Therefore, the numbers presented here are an undercount of the actual total questions answered. \n\n### Discord Activity\n\n**They have also collectively sent over 2153 messages in the technical support channels of the Optimism Discord server during this period supporting.**\n\n### High Impact Examples\n\n- [Troubleshooting mega thread](https://github.com/ethereum-optimism/developers/discussions/17)\n- [Direct feedback that led to improved communication around network upgrades](https://github.com/ethereum-optimism/developers/discussions/184)\n- We have seen chains get their first level of support and getting off the ground through this programs support.\n- We have also supported answering questions for top protocols like RocketPool, ENS, Hop, etc.',
            question:
              'Who has used your tooling and how has it benefited them?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/TechNERDs%20Program',
  },
  {
    id: '0x6fc3b802b42153f99ca38a0a5b28f9d675b44aafa6317fddb7e33280b50e8d0a',
    applicationId:
      '0x6fc3b802b42153f99ca38a0a5b28f9d675b44aafa6317fddb7e33280b50e8d0a',
    projectId:
      '0x11a2255f272c84328438f5081139455d8fd2a302fd35f0f08acdff1f1c0d84e6',
    category: 'Utility',
    applicationCategory: 'OP_STACK_TOOLING',
    organization: {
      name: 'Node Guardians',
      description:
        'Node Guardians is a gamified educational platform for intermediate to advanced developers. We create lore-rich programming challenges for accomplished Solidity developers. Think of it as a skill-based RPG for developers and a platform to showcase their abilities. ',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/b9853684-1026-41a3-8f54-4b9a85efc4b3.png',
      organizationCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/2ae9ed07-0c7b-4d3a-80f4-3b61e3f49c25.png',
      socialLinks: {
        website: ['https://nodeguardians.io/'],
        farcaster: ['https://warpcast.com/sam-ng'],
        twitter: 'https://x.com/nodeguardians',
        mirror: 'https://www.youtube.com/@nodeguardians',
      },
      team: ['17309', '848668', '849124', '849134', '239288'],
    },
    name: 'Node Guardians',
    description:
      'Node Guardians is a gamified educational platform for intermediate to advanced developers. We create lore-rich programming challenges for accomplished Solidity developers. Think of it as a skill-based RPG for developers and a platform to showcase their abilities. ',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/6878f254-b99f-47ad-8cf8-7f6cd1601300.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/8f285391-e69f-40f3-aa14-1456fbb92440.png',
    socialLinks: {
      website: ['https://nodeguardians.io/'],
      farcaster: ['https://warpcast.com/sam-ng'],
      twitter: 'https://x.com/nodeguardians',
      mirror: null,
    },
    team: [
      {
        fid: 17309,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/d7967358-f062-4073-2bf5-cef47dd73b00/rectcrop3',
        profile: {
          bio: { text: 'Skill based RPG for adept developers ' },
        },
        username: 'sam-ng',
        power_badge: false,
        display_name: 'Node Guardians ',
        active_status: 'inactive',
        verifications: [],
        follower_count: 23,
        custody_address: '0x84998c38fde56b3803247da9f15d110a555279b6',
        following_count: 15,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: '18d1ac91-77a1-49b3-892a-355ab5bc93f7',
        type: 'github',
        url: 'https://github.com/Nodeguardians/optimism',
        name: 'Node Guardians x OP Stack',
        description:
          'This repo dives into the three quests (i.e., programming challenges) of the campaign called "Playing with the OP Stack."\n\nThe first quest, "Introduction to the OP Stack," a theoretical one, explores the different components of the OP Stack.\n\nThe second quest, "Cross Layer Messaging," a CTF, focuses on cross-layer communication to open a series of locks.\n\nThe third and final quest, "Custom OP Rollup," involves using the OP Stack to deploy a custom OP rollup based on Sepolia.\n\n(note: developers interact directly with the quests on our platform nodeguardians.io)',
        verified: true,
        openSource: false,
        containsContracts: true,
        createdAt: '2024-09-03T14:24:33.702Z',
        updatedAt: '2024-09-04T14:34:52.425Z',
        projectId:
          '0x11a2255f272c84328438f5081139455d8fd2a302fd35f0f08acdff1f1c0d84e6',
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://x.com/nodeguardians/status/1803835999941754953',
        name: 'X announcement of the campaign',
        description:
          'An optimistic post to bring awareness to and introduce the OP Stack campaign (i.e a series of programming challenges).',
      },
      {
        url: 'https://snapshots.raintank.io/dashboard/snapshot/TcugNERAptas4auBDdkpwRfQAZx0WBvs',
        name: 'Campaign Metrics',
        description:
          'This dashboard provides data on how many users participated in the campaign. It also shows the number of users who benefited from completing the campaign to gain access to an OP Stack demo at the Optimistic Gathering event in Brussels during ETHCC week.\n\nIn the following "Contracts" section, because there is no way to select the Sepolia testnet, we can\'t verify our contracts. For these CTFs, each challenge introduces contracts deployed on OP Sepolia. The number of interactions with these contracts makes it possible to determine how many users started and completed the quests of the OP Stack campaign.',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [
        {
          amount: '1m-5m',
          year: '2022',
          details:
            'This funding bootstrapped the platform and kept it free for users - no newsletters, no pushy stuff - just code and skills. We maintain this ethos: no pressure on users. It’s a public good and will stay that way. We made it sustainable via grants while benefiting people. ',
        },
      ],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '49689',
          date: '',
          details: null,
        },
        {
          grant: 'retroFunding',
          link: null,
          amount: '20200',
          date: '',
          details: null,
        },
        {
          grant: 'token-house-mission',
          link: 'https://app.charmverse.io/op-grants/node-guardians-x-op-stack-8922710643472445',
          amount: '19998',
          date: '2024-05-09',
          details:
            'The goal of this grant was twofold: to onboard developers to the OP Stack and help them get familiar with it, and also to filter applications/whitelist participants (by checking campaign completions) for the Optimistic Gathering event we hosted in Brussels during ETHCC in July.',
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_TOOLING',
      subcategory: [
        'Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.',
        'Services for deploying and hosting an OP Chain.',
      ],
      statement: {
        create: [
          {
            answer:
              'Our campaign, a series of three programming challenges called "quests," was designed to help developers understand and work with the OP Stack infrastructure, enabling testing, deployment, and operation of OP chains.\n\nThe first quest, "Introduction to the OP Stack," provides a theoretical overview of the key components of the OP Stack.\n\nThe second quest, "Cross Layer Messaging," a CTF challenge, focuses on cross-layer communication, simulating real-world interactions that are critical to operating OP chains.\n\nThe third and final quest, "Custom OP Rollup," guides users through deploying a custom OP rollup on Sepolia, allowing hands-on experience with the OP Stack\'s deployment and operational features.',
            question:
              'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?',
          },
          {
            answer:
              'Our platform, nodeguardians.io, currently supports 700 monthly active developers. Of these, 118 started the OP Stack campaign, and 104 have successfully completed it. This campaign remains live on our platform and will be updated as the OP Stack evolves.\n\nThe CTF-style challenges within the campaign introduce contracts deployed on OP Sepolia. By tracking contract interactions, we can monitor user progress and completion of the quests. You can view relevant data on this dashboard here: https://snapshots.raintank.io/dashboard/snapshot/TcugNERAptas4auBDdkpwRfQAZx0WBvs\n\nAdditionally, 32 participants from this campaign applied to join the OP Stack demo we hosted during the Optimistic Gathering event in Brussels. As solvers of the campaign, they were automatically whitelisted and accepted into the event. You can find details of the event here: https://x.com/opgathering/status/1814336529457938861\n',
            question:
              'Who has used your tooling and how has it benefited them?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/Node%20Guardians',
  },
  {
    id: '0x716ad2474c6acff63481ec2283e01a2c4bef79250a1e85119324edae7b8d53ce',
    applicationId:
      '0x716ad2474c6acff63481ec2283e01a2c4bef79250a1e85119324edae7b8d53ce',
    projectId:
      '0x8ec88058175ef4c1c9b1f26910c4d4f2cfa733d6fcd1dbd9385476a313d9e12d',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: null,
    name: 'Lodestar',
    description:
      'Lodestar is a Typescript ecosystem for Ethereum consensus, developed by ChainSafe Systems. Our flagship products are our production-capable beacon chain and validator client. In addition, we maintain public repositories of useful tools for public use. Some of these libraries include JS implementations for BLS, SSZ, Discv5, Gossipsub, Noise and Yamux. Our work contributes to the backbone infrastructure required to keep the Ethereum blockchain progressing within the rules as defined by the specification.\n\nLodestar’s niche is in its implementation language, TypeScript. Our software and tooling is uniquely situated as the go-to for researchers and developers for rapid prototyping such as our Prover, a verified web3 provider using light clients to increase decentralization and security of the JSON-RPC. Millions of developers around the world are familiar with Typescript, and Lodestar’s high-quality codebases are excellent introductions to the Ethereum protocol, with the goal of increasing client diversity and attracting new talent from one of the largest groups of developers in the world.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/973ba7db-8101-405b-98a0-1f7d93a0f344.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/3bb2834a-dcfd-4a71-ae2f-1e4fbef4209c.png',
    socialLinks: {
      website: [
        'https://lodestar.chainsafe.io',
        'https://github.com/ChainSafe/lodestar',
        'https://chainsafe.github.io/lodestar/',
        'https://chainsafe.io',
      ],
      farcaster: ['https://warpcast.com/lodestar'],
      twitter: 'https://x.com/lodestar_eth',
      mirror: null,
    },
    team: [
      {
        fid: 20822,
        object: 'user',
        pfp_url: 'https://i.imgur.com/NrXG60i.jpg',
        profile: {
          bio: {
            text: 'Building /ethereum to become the globally neutral settlement layer with @lodestar + @chainsafe | Follow us on /ethclients. | $ -> phil.fkey.id | 📸 with /pics',
          },
        },
        username: 'philknows',
        power_badge: false,
        display_name: 'Phil Ngo',
        active_status: 'inactive',
        verifications: ['0xdadd7c883288cfe2e257b0a361865e5e9349808b'],
        follower_count: 256,
        custody_address: '0x68cc36e836940897ea4ff562d33c3c949c361ae1',
        following_count: 117,
        verified_addresses: {
          eth_addresses: ['0xdadd7c883288cfe2e257b0a361865e5e9349808b'],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        id: '3cd24981-3b0f-4564-a101-24d0ce6da8d1',
        type: 'github',
        url: 'https://github.com/ChainSafe/lodestar',
        name: 'Lodestar',
        description: 'TypeScript Implementation of Ethereum Consensus',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-08-26T17:26:12.413Z',
        updatedAt: '2024-08-26T18:44:30.991Z',
        projectId:
          '0x8ec88058175ef4c1c9b1f26910c4d4f2cfa733d6fcd1dbd9385476a313d9e12d',
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://explorer.rated.network/o/ChainSafe%20-%20Lido?network=mainnet&timeWindow=30d&idType=poolShare',
        name: 'ChainSafe Validator Metrics',
        description:
          'This page shows the performance of Lodestar as a validator client, run by ChainSafe infrastructure to support client diversity on mainnet validators via Lido.',
      },
      {
        url: 'https://probelab.io/ethereum/discv5/2024-34/',
        name: 'Probelab Discv5 Distribution',
        description:
          'This page represents the distribution of various user agents within the Ethereum discv5 DHT.',
      },
      {
        url: 'https://npm-stat.com/charts.html?package=%40chainsafe%2Flodestar&from=2021-06-26&to=2024-08-26',
        name: 'NPM Download Stats',
        description:
          'This mono-repository contains a suite of Ethereum Consensus packages.',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '248448.21',
          date: '',
          details: null,
        },
        {
          grant: 'retroFunding',
          link: null,
          amount: '79662.51',
          date: '',
          details: null,
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Ethereum client implementations',
        'Ethereum test networks',
        'Infrastructure to test and deploy chains',
        'Research which informs Ethereum core development',
      ],
      statement: {
        create: [
          {
            answer:
              "Lodestar provides ongoing research, development and implementation of core infrastructure relied upon by OP Stack for consensus on Layer 1. Most notably, EIP-4844 (Shard Blob Transactions) has allowed for scaling Ethereum to allow L2s such as OP to utilize blob transactions instead of calldata for efficiencies in cost for utilizing Ethereum settlement. By contributing to the Typescript implementation, testing infrastructure and maintaining other libraries required for its success (such as nodeJS bindings for c-kzg), we were able to deliver this feature for the benefit of OP. In addition, EIPs such as EIP-4788 allows for embedding L1 beacon block roots into Layer 2 to reduce trust assumptions relating to Ethereum's consensus state. ",
            question:
              'How does your project support, or is a dependency of, the OP Stack?',
          },
          {
            answer:
              'Without the impact of Lodestar and its efforts to Ethereum protocol R&D, the specification would lack input from engineers familiar with the consensus specifications and how it impacts protocol implementation on a Typescript-based client. We regularly contribute to research, spec design, devnets, testnets and provide continuous infrastructure to support a increasingly larger network which requires more than one entity to provide stability and reliability, especially for networks where nothing is actually at stake (e.g. public testnets). ',
            question:
              'How would it impact the OP Stack if your project ceased to exist?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/Lodestar',
  },
  {
    id: '0x74988422f40235f42bf41a73ed227cf78277c7c92ee0e73b220ddf3411089885',
    applicationId:
      '0x74988422f40235f42bf41a73ed227cf78277c7c92ee0e73b220ddf3411089885',
    projectId:
      '0x7ada1f0835c4c195d0dd8d9761b80f87dab88d21891b2a2e83220720560af7c1',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: null,
    name: 'Ethereum POS Testnet',
    description:
      ' Quick and Easy Way to Bootstrap your own Local Ethereum PoS Testnet. Great for testing consensus',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/337dbbb2-74f9-4eee-9685-95922c926e38.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/e76d2c47-741f-4277-9b6f-e2930a492b47.png',
    socialLinks: {
      website: [],
      farcaster: [],
      twitter: null,
      mirror: null,
    },
    team: [
      {
        fid: 542731,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/51dd5efd-251f-42f4-8430-56709bef5200/rectcrop3',
        profile: { bio: { text: 'Protocol Blockchain Engineer' } },
        username: 'zoraiz',
        power_badge: false,
        display_name: 'Zoraiz',
        active_status: 'inactive',
        verifications: [],
        follower_count: 16,
        custody_address: '0xee96b3bcbaf80ff06e7ff1c0f8600d07e36efcc4',
        following_count: 54,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: 'e89e7795-1c80-47d5-a82d-9a3c9485917f',
        type: 'github',
        url: 'https://github.com/rzmahmood/ethereum-pos-testnet',
        name: 'Ethereum PoS Testnet',
        description:
          'This deployment process allows you to setup and deploy your own local ethereum PoS networks with multiple nodes. This repository is targeted to developers who want to quickly modify client source code and deploy a PoS network. This setup can is can serve as a reference for building your own production deployments.',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-08-26T02:02:08.239Z',
        updatedAt: '2024-08-26T02:11:10.395Z',
        projectId:
          '0x7ada1f0835c4c195d0dd8d9761b80f87dab88d21891b2a2e83220720560af7c1',
        metrics: {
          artifact_url: 'https://github.com/rzmahmood/ethereum-pos-testnet',
          num_contributors: '8.0',
          num_trusted_contributors: '0.0',
          num_contributors_last_6_months: '3.0',
          num_stars: '41',
          num_trusted_stars: '1.0',
          trust_weighted_stars: '0.0030473465945442',
          num_forks: '18',
          num_trusted_forks: '0.0',
          trust_weighted_forks: '6.050351862865525e-06',
          trust_rank_for_repo_in_category: '28.0',
          age_of_project_years: '1.0',
          license: 'MIT',
        },
      },
    ],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: { ventureFunding: [], revenue: [], grants: [] },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Ethereum test networks',
        'Infrastructure to test and deploy chains',
      ],
      statement: {
        create: [
          {
            answer:
              "This project is used to spin up an L1 chain that can and has been used as a base layer for OP Stack. In the past year, I've had more than 200 clones of the project and [received testimony](https://github.com/rzmahmood/ethereum-pos-testnet/issues/23#issuecomment-2300014549) that it has been used to launch chains such as CoNet https://x.com/CoNET_Network, and is actively being used as a base layer for OP Stack chains. \n\nExisting ephemeral test net solutions do not allow developers to modify the base layer without significant effort such as rebuilding docker images on each change. This solution fills the gap, speeding up development time and easing more engineers into protocol development.",
            question:
              'How does your project support, or is a dependency of, the OP Stack?',
          },
          {
            answer:
              'If my project ceased to exist, there would be no easy way for OP Stack deployers to launch their chain on a customised L1. Customising the L1 allows for forward-thinking as Ethereum evolves, allowing us to toy with ideas that further accelerate the Rollup scalability roadmap. ',
            question:
              'How would it impact the OP Stack if your project ceased to exist?',
          },
        ],
      },
    },
    testimonials:
      'https://www.metricsgarden.xyz/projects/Ethereum%20POS%20Testnet',
  },
  {
    id: '0x7b1045ef17287fe42e987ccf2960f710cbe2f6d55c1237f260c7c7801dd9c34c',
    applicationId:
      '0x7b1045ef17287fe42e987ccf2960f710cbe2f6d55c1237f260c7c7801dd9c34c',
    projectId:
      '0x81af86360a8e964cc907a5689a62e94231c7e42e05f49c0586716975d72e2e2e',
    category: 'Utility',
    applicationCategory: 'OP_STACK_TOOLING',
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
    name: 'Upnode Deploy',
    description:
      'Upnode Deploy allows chain operators and developers to quickly launch their OP Stack chain with the necessary infrastructure, including an explorer, bridge, faucet, and monitoring system, by modifying a few environment variables related to the RPC endpoint, private keys, and chain information.\n\nWith a single Docker Compose command, they can launch and manage every component of the OP Stack chain, including the ability to deploy a replica node by providing `rollup.json` and `genesis.json`. Upnode Deploy also offers a user interface similar to Conduit, which simplifies the OP Stack deployment process.\n\nUnlike Conduit, Upnode Deploy provides developers and chain operators with a tool to deploy OP Stack chains on their own servers instead of relying on third-party managed servers. Upnode Deploy is free, open-source, and fully transparent, whereas Conduit is a paid, closed-source solution.\n\nUpnode Deploy supports the latest OP Stack v1.9.0 and is prepared for the upcoming migration from `pnpm` to `just`.\n\nUpnode Deploy has won Fraxtal Hackathon: https://dorahacks.io/buidl/13971\n\nVideo of docker compose deploying an OP Stack L3 on Fraxtal: https://www.youtube.com/watch?v=8dytrXGjDG4',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/91ebe6cd-12a6-42fb-b3ef-d717e79ac9b8.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/84ec5980-5e06-4630-92b4-16ce9e9e3f83.png',
    socialLinks: {
      website: [
        'https://deploy.upnode.org',
        'https://upnode.org',
        'https://dorahacks.io/buidl/13971',
        'https://www.youtube.com/watch?v=8dytrXGjDG4',
      ],
      farcaster: [],
      twitter: 'https://x.com/upnodeIntern',
      mirror: null,
    },
    team: [
      {
        fid: 328679,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/249df6fc-9146-4686-bfca-d0697b5b3100/original',
        profile: { bio: { text: 'Just another dev' } },
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
        fid: 394600,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/c0fd3b12-ec64-4d77-f83b-c1c36aa41c00/original',
        profile: { bio: { text: "I'm Petch nice to meet you all." } },
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
        fid: 849514,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/4b3526d2-ab8e-4cd1-558f-2a278dc42e00/rectcrop3',
        profile: { bio: { text: 'Software engineer' } },
        username: 'matthewfx',
        power_badge: false,
        display_name: 'Matthew',
        active_status: 'inactive',
        verifications: [],
        follower_count: 4,
        custody_address: '0xa195c04c67297f3259cf0254e4b157e969f04af6',
        following_count: 1,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 468611,
        object: 'user',
        pfp_url: 'https://i.imgur.com/dypJ3AO.jpg',
        profile: { bio: { text: 'Hello' } },
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
      {
        fid: 371797,
        object: 'user',
        pfp_url: 'https://i.imgur.com/LkIdtAK.jpg',
        profile: { bio: { text: 'Proof of Love' } },
        username: 'ez420',
        power_badge: false,
        display_name: 'Johny Phan',
        active_status: 'inactive',
        verifications: [
          '0x331923efb27300c9c481ce742267a93d77c548f6',
          '0x331923efb27300c9c481ce742267a93d77c548f6',
        ],
        follower_count: 21,
        custody_address: '0xe60b379dfa7c35de73dc7472903a950d72d7e677',
        following_count: 110,
        verified_addresses: {
          eth_addresses: [
            '0x331923efb27300c9c481ce742267a93d77c548f6',
            '0x331923efb27300c9c481ce742267a93d77c548f6',
          ],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        id: 'bd19ca0e-310f-4637-a131-0c6c88747c00',
        type: 'github',
        url: 'https://github.com/upnodedev/opstack-compose',
        name: 'opstack-compose',
        description: 'OP Stack deployment tool using docker compose',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-03T18:00:47.981Z',
        updatedAt: '2024-09-03T18:55:41.827Z',
        projectId:
          '0x81af86360a8e964cc907a5689a62e94231c7e42e05f49c0586716975d72e2e2e',
        metrics: {
          artifact_url: 'https://github.com/upnodedev/opstack-compose',
          num_contributors: '2.0',
          num_trusted_contributors: '0.0',
          num_contributors_last_6_months: '1.0',
          num_stars: '5',
          num_trusted_stars: '2.0',
          trust_weighted_stars: '0.0034572736340997',
          num_forks: '1',
          num_trusted_forks: '0.0',
          trust_weighted_forks: '8.30556558328267e-05',
          trust_rank_for_repo_in_category: '16.0',
          age_of_project_years: '1.0833333333332575',
          license: 'MIT',
        },
      },
      {
        id: '32686394-d87b-4a4c-820e-8ce21a0c1efe',
        type: 'github',
        url: 'https://github.com/upnodedev/opstack-bridge-indexer',
        name: 'Upnode Deploy Bridge Indexer (Old)',
        description: '',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-03T18:49:26.682Z',
        updatedAt: '2024-09-03T18:55:41.911Z',
        projectId:
          '0x81af86360a8e964cc907a5689a62e94231c7e42e05f49c0586716975d72e2e2e',
        metrics: {
          artifact_url: 'https://github.com/upnodedev/opstack-bridge-indexer',
          num_contributors: '2.0',
          num_trusted_contributors: '0.0',
          num_contributors_last_6_months: '2.0',
          num_stars: '1',
          num_trusted_stars: '1.0',
          trust_weighted_stars: '0.002591415215901',
          num_forks: '0',
          num_trusted_forks: '0.0',
          trust_weighted_forks: '0.0',
          trust_rank_for_repo_in_category: '22.0',
          age_of_project_years: '0.33333333333325754',
          license: 'Apache-2.0',
        },
      },
      {
        id: 'b8f3f8d4-0570-426e-b0c0-b5d9ace501d0',
        type: 'github',
        url: 'https://github.com/upnodedev/opstack-bridge-ui-v2',
        name: 'Upnode Deploy Bridge UI',
        description: '',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-03T18:40:38.791Z',
        updatedAt: '2024-09-03T18:55:41.912Z',
        projectId:
          '0x81af86360a8e964cc907a5689a62e94231c7e42e05f49c0586716975d72e2e2e',
        metrics: {
          artifact_url: 'https://github.com/upnodedev/opstack-bridge-ui-v2',
          num_contributors: '',
          num_trusted_contributors: '',
          num_contributors_last_6_months: '',
          num_stars: '0',
          num_trusted_stars: '',
          trust_weighted_stars: '0.0',
          num_forks: '0',
          num_trusted_forks: '',
          trust_weighted_forks: '0.0',
          trust_rank_for_repo_in_category: '27.0',
          age_of_project_years: '',
          license: 'Apache-2.0',
        },
      },
      {
        id: '1ec6e195-6c83-475f-83da-55c6194ecfc4',
        type: 'github',
        url: 'https://github.com/upnodedev/upnode-deploy-ui',
        name: 'Upnode Deploy UI',
        description:
          'User interface for deploying an OP Stack chain on-premise',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-03T18:14:17.732Z',
        updatedAt: '2024-09-03T18:55:41.995Z',
        projectId:
          '0x81af86360a8e964cc907a5689a62e94231c7e42e05f49c0586716975d72e2e2e',
        metrics: {
          artifact_url: 'https://github.com/upnodedev/upnode-deploy-ui',
          num_contributors: '2.0',
          num_trusted_contributors: '1.0',
          num_contributors_last_6_months: '2.0',
          num_stars: '0',
          num_trusted_stars: '0.0',
          trust_weighted_stars: '0.0',
          num_forks: '0',
          num_trusted_forks: '0.0',
          trust_weighted_forks: '0.0',
          trust_rank_for_repo_in_category: '26.0',
          age_of_project_years: '0.16666666666674246',
          license: 'Apache-2.0',
        },
      },
      {
        id: '1f013344-dba8-48ba-815c-4a1e76bfec5f',
        type: 'github',
        url: 'https://github.com/upnodedev/opstack-bridge-indexer-v2',
        name: 'Upnode Deploy Bridge Indexer',
        description: '',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-03T18:42:09.326Z',
        updatedAt: '2024-09-03T18:55:42.164Z',
        projectId:
          '0x81af86360a8e964cc907a5689a62e94231c7e42e05f49c0586716975d72e2e2e',
        metrics: {
          artifact_url:
            'https://github.com/upnodedev/opstack-bridge-indexer-v2',
          num_contributors: '',
          num_trusted_contributors: '',
          num_contributors_last_6_months: '',
          num_stars: '0',
          num_trusted_stars: '',
          trust_weighted_stars: '0.0',
          num_forks: '0',
          num_trusted_forks: '',
          trust_weighted_forks: '0.0',
          trust_rank_for_repo_in_category: '28.0',
          age_of_project_years: '',
          license: 'Apache-2.0',
        },
      },
      {
        id: '6764a5d9-f7c9-4cbd-a70d-1d65e48ab1a6',
        type: 'github',
        url: 'https://github.com/upnodedev/evm-faucet',
        name: 'Upnode Deploy Faucet',
        description: '',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-03T18:43:58.998Z',
        updatedAt: '2024-09-03T18:55:42.248Z',
        projectId:
          '0x81af86360a8e964cc907a5689a62e94231c7e42e05f49c0586716975d72e2e2e',
        metrics: {
          artifact_url: 'https://github.com/upnodedev/evm-faucet',
          num_contributors: '1.0',
          num_trusted_contributors: '0.0',
          num_contributors_last_6_months: '1.0',
          num_stars: '0',
          num_trusted_stars: '0.0',
          trust_weighted_stars: '0.0',
          num_forks: '0',
          num_trusted_forks: '0.0',
          trust_weighted_forks: '0.0',
          trust_rank_for_repo_in_category: '32.0',
          age_of_project_years: '0.16666666666674246',
          license: 'MIT',
        },
      },
      {
        id: '61236563-b7f7-4f61-b2c1-59fa5937de01',
        type: 'github',
        url: 'https://github.com/upnodedev/opstack-bridge-ui',
        name: 'Upnode Deploy Bridge UI (Old)',
        description: '',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-03T18:47:03.545Z',
        updatedAt: '2024-09-03T18:55:41.911Z',
        projectId:
          '0x81af86360a8e964cc907a5689a62e94231c7e42e05f49c0586716975d72e2e2e',
        metrics: {
          artifact_url: 'https://github.com/upnodedev/opstack-bridge-ui',
          num_contributors: '2.0',
          num_trusted_contributors: '0.0',
          num_contributors_last_6_months: '2.0',
          num_stars: '0',
          num_trusted_stars: '0.0',
          trust_weighted_stars: '0.0008502677910489',
          num_forks: '0',
          num_trusted_forks: '0.0',
          trust_weighted_forks: '0.0',
          trust_rank_for_repo_in_category: '25.0',
          age_of_project_years: '0.5',
          license: 'Apache-2.0',
        },
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://dorahacks.io/buidl/13971',
        name: 'Upnode Deploy has won Fraxtal hackathon',
        description: 'Upnode Deploy has won Fraxtal hackathon',
      },
      {
        url: 'https://youtu.be/8dytrXGjDG4',
        name: 'Upnode Deploy opstack-compose demo',
        description:
          'A demo video shows how opstack-compose Docker Compose work to deploy a new OP Stack chain',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '62112',
          date: '',
          details: null,
        },
        {
          grant: 'token-house-mission',
          link: 'https://app.charmverse.io/op-grants/page-5705679072018564',
          amount: '30000',
          date: '2023-08-19',
          details: 'Cycle 14 Grant',
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_TOOLING',
      subcategory: [
        'Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.',
      ],
      statement: {
        create: [
          {
            answer:
              'Upnode Deploy allows chain operators and developers to quickly launch their OP Stack chain with the necessary infrastructure, including an explorer, bridge, faucet, and monitoring system, by modifying a few environment variables related to the RPC endpoint, private keys, and chain information.\n\nWith a single Docker Compose command, they can launch and manage every component of the OP Stack chain, including the ability to deploy a replica node by providing `rollup.json` and `genesis.json`. Upnode Deploy also offers a user interface similar to Conduit, which simplifies the OP Stack deployment process.\n\nUnlike Conduit, Upnode Deploy provides developers and chain operators with a tool to deploy OP Stack chains on their own servers instead of relying on third-party managed servers. Upnode Deploy is free, open-source, and fully transparent, whereas Conduit is a paid, closed-source solution.',
            question:
              'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?',
          },
          {
            answer:
              'Upnode Deploy has won Fraxtal Hackathon: https://dorahacks.io/buidl/13971\n\nVideo of docker compose deploying an OP Stack L3 on Fraxtal: https://www.youtube.com/watch?v=8dytrXGjDG4\n\nOur main opstack-compose repository has received 5 stars and 1 fork',
            question:
              'Who has used your tooling and how has it benefited them?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/Upnode%20Deploy',
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
    team: [
      {
        fid: 328679,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/249df6fc-9146-4686-bfca-d0697b5b3100/original',
        profile: { bio: { text: 'Just another dev' } },
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
        fid: 394600,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/c0fd3b12-ec64-4d77-f83b-c1c36aa41c00/original',
        profile: { bio: { text: "I'm Petch nice to meet you all." } },
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
        fid: 849514,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/4b3526d2-ab8e-4cd1-558f-2a278dc42e00/rectcrop3',
        profile: { bio: { text: 'Software engineer' } },
        username: 'matthewfx',
        power_badge: false,
        display_name: 'Matthew',
        active_status: 'inactive',
        verifications: [],
        follower_count: 4,
        custody_address: '0xa195c04c67297f3259cf0254e4b157e969f04af6',
        following_count: 1,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 468611,
        object: 'user',
        pfp_url: 'https://i.imgur.com/dypJ3AO.jpg',
        profile: { bio: { text: 'Hello' } },
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
      {
        fid: 371797,
        object: 'user',
        pfp_url: 'https://i.imgur.com/LkIdtAK.jpg',
        profile: { bio: { text: 'Proof of Love' } },
        username: 'ez420',
        power_badge: false,
        display_name: 'Johny Phan',
        active_status: 'inactive',
        verifications: [
          '0x331923efb27300c9c481ce742267a93d77c548f6',
          '0x331923efb27300c9c481ce742267a93d77c548f6',
        ],
        follower_count: 21,
        custody_address: '0xe60b379dfa7c35de73dc7472903a950d72d7e677',
        following_count: 110,
        verified_addresses: {
          eth_addresses: [
            '0x331923efb27300c9c481ce742267a93d77c548f6',
            '0x331923efb27300c9c481ce742267a93d77c548f6',
          ],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        id: '4bca0413-7da9-497e-b4da-3597fe39480c',
        type: 'github',
        url: 'https://github.com/upnodedev/op-alt-da',
        name: 'Optimism Alt-DA',
        description:
          'An Optimism Alt-DA server enables OP Stack chains to use third-party data availability providers with an on-chain translation system that converts Keccak256 commitments into provider-specific CIDs (content identifier hashes).',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-04T07:25:57.760Z',
        updatedAt: '2024-09-04T07:37:17.602Z',
        projectId:
          '0x5492d1d4695dcf3cce3c31eb9883535d34da6c85a4978b384c0ecb0f3b17fbe9',
        metrics: {
          artifact_url: 'https://github.com/upnodedev/op-alt-da',
          num_contributors: '',
          num_trusted_contributors: '',
          num_contributors_last_6_months: '',
          num_stars: '0',
          num_trusted_stars: '',
          trust_weighted_stars: '0.0',
          num_forks: '0',
          num_trusted_forks: '',
          trust_weighted_forks: '0.0',
          trust_rank_for_repo_in_category: '35.0',
          age_of_project_years: '',
          license: 'MIT',
        },
      },
      {
        id: 'c298a833-dd9a-4b21-aefc-72b1d8e55c07',
        type: 'github',
        url: 'https://github.com/upnodedev/op-alt-da-contract',
        name: 'Optimism Alt-DA Translation Hub Contract',
        description:
          'A smart contract for on-chain translation system that converts Keccak256 commitments into provider-specific CIDs (content identifier hashes).',
        verified: true,
        openSource: true,
        containsContracts: true,
        createdAt: '2024-09-04T07:28:56.124Z',
        updatedAt: '2024-09-04T07:37:18.232Z',
        projectId:
          '0x5492d1d4695dcf3cce3c31eb9883535d34da6c85a4978b384c0ecb0f3b17fbe9',
        metrics: {
          artifact_url: 'https://github.com/upnodedev/op-alt-da-contract',
          num_contributors: '',
          num_trusted_contributors: '',
          num_contributors_last_6_months: '',
          num_stars: '0',
          num_trusted_stars: '',
          trust_weighted_stars: '0.0',
          num_forks: '0',
          num_trusted_forks: '',
          trust_weighted_forks: '0.0',
          trust_rank_for_repo_in_category: '30.0',
          age_of_project_years: '',
          license: 'MIT',
        },
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
      revenue: [],
      grants: [
        {
          grant: 'token-house-mission',
          link: 'https://app.charmverse.io/op-grants/plasmada-translation-hub-1014033406866528',
          amount: '15000',
          date: '2024-05-09',
          details: 'PlasmaDA Translation Hub Cycle 22 Season 5',
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.',
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
      ],
      statement: {
        create: [
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
    testimonials:
      'https://www.metricsgarden.xyz/projects/Alt-DA%20Server%20%26%20Translation%20Hub',
  },
  {
    id: '0x8687895d7e9295384b77eea6a3ec763a9b7ac88cc5667104d6746c654acdacd3',
    applicationId:
      '0x8687895d7e9295384b77eea6a3ec763a9b7ac88cc5667104d6746c654acdacd3',
    projectId:
      '0xe15a32ba713cc025574ac6f69be3ad16133fb7561c3d7dc30fbf29b65b5a8be2',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: null,
    name: 'Erigon',
    description:
      'Erigon is an implementation of Ethereum (execution layer and consensus layer), on the efficiency frontier. Archive node by default.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/9fb17067-0203-4b8a-8508-1a3d3236a8b0.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/72a312c6-31fd-457d-a887-3740b2b59a3e.png',
    socialLinks: {
      website: ['https://erigon.tech'],
      farcaster: ['https://warpcast.com/erigon'],
      twitter: 'https://x.com/ErigonEth',
      mirror: null,
    },
    team: [
      {
        fid: 849323,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/0b9dd070-6a3a-4103-a05e-718c10df2f00/rectcrop3',
        profile: { bio: { text: '' } },
        username: 'yperbasis',
        power_badge: false,
        display_name: 'Andrew Ashikhmin',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0xf3e25d57719bddb16f954567a12ba846a5222559',
        following_count: 0,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 213400,
        object: 'user',
        pfp_url: 'https://i.imgur.com/g3j5DKt.jpg',
        profile: { bio: { text: 'I don’t know' } },
        username: 'wmitsuda',
        power_badge: false,
        display_name: 'Willian Mitsuda',
        active_status: 'inactive',
        verifications: [],
        follower_count: 7,
        custody_address: '0xd067317ec2de41eb69ef7a630f154d877e88c0e1',
        following_count: 29,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: 'a5b6e3bd-e46f-4a16-aa55-218c6f67a5d5',
        type: 'github',
        url: 'https://github.com/erigontech/erigon',
        name: '',
        description: '',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-04T08:42:00.764Z',
        updatedAt: '2024-09-04T08:42:06.996Z',
        projectId:
          '0xe15a32ba713cc025574ac6f69be3ad16133fb7561c3d7dc30fbf29b65b5a8be2',
        metrics: {
          artifact_url: 'https://github.com/erigontech/erigon',
          num_contributors: '1019.0',
          num_trusted_contributors: '54.0',
          num_contributors_last_6_months: '220.0',
          num_stars: '3106',
          num_trusted_stars: '52.0',
          trust_weighted_stars: '0.0029877799165986',
          num_forks: '1095',
          num_trusted_forks: '34.0',
          trust_weighted_forks: '0.0002445808341515',
          trust_rank_for_repo_in_category: '12.0',
          age_of_project_years: '5.3333333333332575',
          license: 'LGPL-3.0',
        },
      },
    ],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '141650.27',
          date: '',
          details: null,
        },
        {
          grant: 'retroFunding',
          link: null,
          amount: '339545.72',
          date: '',
          details: null,
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Ethereum client implementations'],
      statement: {
        create: [
          {
            answer:
              "Erigon is the upstream of its Optimistic fork [op-erigon](https://op-erigon.testinprod.io), part of the OP Stack. Erigon has been consistently pushing the boundaries of what's technological possible for an archive node. The upcoming [Erigon 3](https://erigon.tech/erigon-3-alpha-2-introducing-blazingly-fast-sync-on-archive-nodes-with-ottersync-and-other-improvements/) is bringing further improvements such as blazingly fast sync and transaction-level granularity of state history.",
            question:
              'How does your project support, or is a dependency of, the OP Stack?',
          },
          {
            answer:
              "If Erigon ceases to exist, its forks, including [op-erigon](https://op-erigon.testinprod.io), will probably wither away. Without Erigon there'll be less innovation on pushing the blockchain efficiency frontier in terms of optimal (compact, performant, fast to sync) archive, full, and EIP-4444 nodes.",
            question:
              'How would it impact the OP Stack if your project ceased to exist?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/Erigon',
  },
  {
    id: '0x89d1fdde640450d31363f3b225210cf7472f1376f5481f644b214a5725b6e6b5',
    applicationId:
      '0x89d1fdde640450d31363f3b225210cf7472f1376f5481f644b214a5725b6e6b5',
    projectId:
      '0x641dc2c289127d1964bd9882f3d4c536395635b846297a4f62cb887fe7c3a119',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: null,
    name: 'An indepedent ethereum execution client contributor',
    description:
      "I have been actively involved in the Ethereum execution clients and ecosystem for more than 6 years as an independent contributor. Since 2018, I have been involved in various projects within the Ethereum ecosystem. During that time, I created a Chinese guide called [Hitchhikers-guide-to-the-Ethereum](https://github.com/jsvisa/Hitchhikers-guide-to-the-Ethereum), which serves as a valuable resource for beginners to understand the inner workings of Ethereum using the [go-ethereum](https://github.com/ethereum/go-ethereum) implementation. This guide covers a wide range of topics about Ethereum, transactions, smart contracts, data structures, wallets, block synchronization, state synchronization, miners, consensus, RPC, and P2P protocols.\n\nOver the past 6 years, I've made significant contributions to the Ethereum ecosystem, including the following:\n\n- go-ethereum: merged 119 PRs\n- reth: merged 79 PRs\n- prysm: merged 11 PRs\n- erigon: merged 9 PRs\n- others: merged 21 Prs\n",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/60078a18-aa1d-4f54-95f0-16b955e36ef2.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/61e675e1-034e-4098-a139-76a8ebb66211.png',
    socialLinks: {
      website: ['https://github.com/jsvisa/retro5'],
      farcaster: ['@jsvisa'],
      twitter: '@jsvisa',
      mirror: null,
    },
    team: [
      {
        fid: 755441,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/f44bad96-6fac-4448-2645-49aa0fb72700/rectcrop3',
        profile: { bio: { text: 'Github.com/jsvisa' } },
        username: 'jsvisa',
        power_badge: false,
        display_name: 'Jsvisa',
        active_status: 'inactive',
        verifications: [],
        follower_count: 18,
        custody_address: '0x5a97c4f841a0140570e7a72505021f5b1dd69aa3',
        following_count: 87,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: '42eee6cc-5c72-44eb-8272-3d680dacf13c',
        type: 'github',
        url: 'https://github.com/jsvisa/retro5',
        name: 'Ethereum execution client contributor',
        description:
          'List  my contributions to the Ethereum ecosystem in the past years.',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-05T15:55:15.097Z',
        updatedAt: '2024-09-05T15:56:24.318Z',
        projectId:
          '0x641dc2c289127d1964bd9882f3d4c536395635b846297a4f62cb887fe7c3a119',
      },
    ],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: { ventureFunding: [], revenue: [], grants: [] },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Ethereum client implementations'],
      statement: {
        create: [
          {
            answer:
              'My contributions to the Ethereum ecosystem focus primarily on enhancing performance, fixing bugs, and introducing new useful features. These improvements ensure the underlying Ethereum network, which the OP Stack builds upon, operates smoothly and efficiently. \n\nAdditionally, my work on optimizing key components and ensuring they are bug-free directly boosts the reliability and performance of the OP Stack. By providing a robust and efficient foundation, my contributions help pave the way for new features and capabilities within the OP Stack, thereby supporting its growth and scalability.',
            question:
              'How does your project support, or is a dependency of, the OP Stack?',
          },
          {
            answer:
              'If my contributions ceased, the OP Stack could face several potential challenges. Performance optimizations I’ve implemented may no longer be up-to-date, leading to increased latency and reduced efficiency. Bug fixes that enhance the stability of the ecosystem would no longer be maintained, potentially reintroducing critical vulnerabilities or operational issues. Furthermore, the absence of new features could stifle innovation and limit the OP Stack’s ability to adapt to emerging needs and technologies. In essence, my continued involvement ensures a smoother, more secure, and forward-looking OP Stack.',
            question:
              'How would it impact the OP Stack if your project ceased to exist?',
          },
        ],
      },
    },
    testimonials:
      'https://www.metricsgarden.xyz/projects/An%20indepedent%20ethereum%20execution%20client%20contributor',
  },
  {
    id: '0x8c9dc48abd56b9dd087c330879d38ad10c1be80349adaa14e0cbcc232dbe3918',
    applicationId:
      '0x8c9dc48abd56b9dd087c330879d38ad10c1be80349adaa14e0cbcc232dbe3918',
    projectId:
      '0xdd8b2e68cad9afa0701c8f27bf085302b152dbca3393083d3c664e3fc75945ab',
    category: 'Utility',
    applicationCategory: 'OP_STACK_TOOLING',
    organization: null,
    name: 'Redprint',
    description:
      "Redprint toolkit, is a \\ toolkit and knowledge hub to improve OPStack accessibility, tailored for developer. It includes:\n\n1) Redprint wizard: It is a code generator/ interactive developer playground to modify OPStack ’s codebase.  It supports a space to experience, and build features which aren't yet available on the production at all, empowering developers to tinker, and push the boundaries of what's possible by composing their own different OPStack components together. \n\n2) redprint-forge: It is a developer-friendly framework/library in solidity to deploy OPStack ’s contracts in a modular style. It supports type-safe smart contract deployment, re-usable testing pipeline, all-Solidity-based ( no context switching), and tx Management via Safe Smart Contract Deploy Script",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/3cc6bd19-1ade-4c0d-8fe3-ec6ea6f50183.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/d2d120fb-11fa-456c-b7e0-b0ed52b477e0.png',
    socialLinks: {
      website: ['https://redprint.ninja/'],
      farcaster: ['https://warpcast.com/ratimon'],
      twitter: 'https://twitter.com/RATi_MOn',
      mirror: null,
    },
    team: [
      {
        fid: 397087,
        object: 'user',
        pfp_url: 'https://i.imgur.com/YlvdjlU.jpg',
        profile: {
          bio: { text: 'blockchain engineer / eth optimistics' },
        },
        username: 'ratimon',
        power_badge: false,
        display_name: 'rati.eth',
        active_status: 'inactive',
        verifications: [],
        follower_count: 32,
        custody_address: '0x0d1bbcfb80c61031e1126ec23203c54ffb963aeb',
        following_count: 70,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: '82abd450-8e2a-46ec-b61c-fe67d79c92ff',
        type: 'github',
        url: 'https://github.com/Ratimon/redprint-wizard',
        name: 'Redprint Wizard',
        description: 'Interactive smart contract generator based on OPStack',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-03T02:21:15.014Z',
        updatedAt: '2024-09-04T13:09:59.114Z',
        projectId:
          '0xdd8b2e68cad9afa0701c8f27bf085302b152dbca3393083d3c664e3fc75945ab',
      },
      {
        id: 'e167154f-6546-4542-84d0-264fba995993',
        type: 'github',
        url: 'https://github.com/Ratimon/redprint-forge',
        name: 'redprint-forge',
        description:
          'A developer-friendly framework/library in solidity to deploy OPStack ’s contracts in a modular style.',
        verified: true,
        openSource: true,
        containsContracts: true,
        createdAt: '2024-09-03T02:25:21.469Z',
        updatedAt: '2024-09-04T13:09:59.749Z',
        projectId:
          '0xdd8b2e68cad9afa0701c8f27bf085302b152dbca3393083d3c664e3fc75945ab',
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://redprint.ninja/blog/3-metric-hub',
        name: 'Redprint Toolkit Metric Hub',
        description:
          "It include impacts' details for both tools `Redprint Wizard` and `redprnt-forge`. The justification  are categorized by \"upstream\" and \"downstream\" parts in the link provided.\n\nHowever, only relevant part is \"upstream\". Please ignore the \"downstream\" part. It is noted that Both `Redprint Wizard` and `redprnt-forge` are fall in Category 3: OP Stack Tooling.\n\nIn shorts, the metrics include:\n1) redprint-forge 's Version Releases\n2) redprint-forge 's Number of Github repo likes\n3) redprint-forge 's Number of code repo forks\n4) redprint-forge 's Number of npm packages downloaded\n5) Redprint Wizard 's Number of Monthly Visitor\n6) Redprint Wizard 'sNumber of Link Clicks Toward the Code copy button\n7) Redprint Wizard 'sNumber of Downloaded code as zip file\n8) Redprint Wizard 'sNumber of visitors to our technical articles in our blog",
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      revenue: [],
      grants: [
        {
          grant: 'token-house-mission',
          link: 'https://app.charmverse.io/op-grants/redprint-toolkit-an-interactive-code-generator-and-a-dev-framework-to-modify-deploy-opstack-s-contracts-9499729065142495',
          amount: '38500',
          date: '2024-05-15',
          details: '',
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_TOOLING',
      subcategory: [
        'Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.',
        'Services for deploying and hosting an OP Chain.',
      ],
      statement: {
        create: [
          {
            answer:
              'Redprint Toolkit (including `redprint-forge` and `Redprint Wizard`)’s contribution aids in usability and accessibility of the OPStack.\n\nThe justifications are as follows:\n\n1. redprint-forge\n\nThe contribution involves restructuring OPStack’s DeploySuperchain script. More context could be found here ( https://github.com/Ratimon/redprint-wizard/blob/main/src/routes/blog/_assets/posts/3-metric-hub.md?plain=1#L36-L48 )\n\nTherefore, this suggests alignment with Collective Intent 1 “Progress towards technical decentralization” due to different implementations by different team.\n\n2. Redprint Wizard\n\nIt can be thought as an interactive technical documentation and step-by-step tutorials to deploy OPStack components.\n\nMore detail could be found here : ( https://redprint.ninja/blog/3-metric-hub )\n\nI note that although part of our toolkit is a dev tool to deploy smart contract but those contracts are tailored for OPStack**, general ones. \n',
            question:
              'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?',
          },
          {
            answer:
              "#redprint-forge\n\n1. Version Releases\nNow, the versions release are at `v0.2.x`. In short, we have finished two working component (Governance and superchain) (out of four).\n\nThe relevant links are:\n- [Github's Version Released](https://github.com/Ratimon/redprint-forge/releases/tag/v0.2.1)\n- [Github's Closed Milestones](https://github.com/Ratimon/redprint-forge/milestones?state=closed)\n\n2. and 3 Number of Github repo likes forks\n[redprint-forge's Repo Link](https://github.com/Ratimon/redprint-forge)\n\n4. Number of npm packages downloaded\n[redprint-forge's Package Link](https://www.npmjs.com/package/redprint-forge)\n\n#Redprint Wizard\n1. Number of Monthly Visitor\n\n2. Number of Link Clicks Toward the Code copy button\n\n3. Number of Downloaded code as zip file\n\n4. Number of visitors to our technical articles in our blog \n\n> we provide more details and all source of truths (GA report) including link and export files at [this page](https://redprint.ninja/blog/3-metric-hub)",
            question:
              'Who has used your tooling and how has it benefited them?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/Redprint',
  },
  {
    id: '0x8ce52931f5528de3a378ae58d1281083744b62b47dff98fcd71b54434fa840b5',
    applicationId:
      '0x8ce52931f5528de3a378ae58d1281083744b62b47dff98fcd71b54434fa840b5',
    projectId:
      '0xc879d4a2a344a4027ee8abd520d65afdfe1300b6f080b223fafcebdf5640c218',
    category: 'Utility',
    applicationCategory: 'OP_STACK_TOOLING',
    organization: {
      name: 'Conduit',
      description:
        'The rollup-native cloud platform. Conduit gives builders dedicated blockspace so they can scale their onchain apps and ecosystems.',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/44db5c0b-6ff2-4d33-aa47-bd06a9b1f7fc.png',
      organizationCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/daaebce5-30af-4b75-91f5-0e4ee90ee96f.png',
      socialLinks: {
        website: ['https://www.conduit.xyz/'],
        farcaster: ['https://warpcast.com/conduit'],
        twitter: 'https://twitter.com/conduitxyz',
        mirror: '',
      },
      team: ['301193'],
    },
    name: 'Conduit OP Stack Contributions',
    description:
      'The rollup-native cloud platform. Conduit gives builders dedicated blockspace and throughput to scale their onchain apps and ecosystems.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/734a6d63-e401-4459-951a-44af205b034f.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/633a4362-00eb-45e9-a7cb-ee092e3d463a.png',
    socialLinks: {
      website: ['https://www.conduit.xyz/'],
      farcaster: ['https://warpcast.com/conduit'],
      twitter: 'https://twitter.com/conduitxyz',
      mirror: null,
    },
    team: [
      {
        fid: 878,
        object: 'user',
        pfp_url:
          'https://openseauserdata.com/files/3ec59df0048fd13cbf6962b8f0df676b.svg',
        profile: {
          bio: {
            text: 'Founder at conduit.xyz. Previously EIR at Paradigm.',
          },
        },
        username: 'ahuang',
        power_badge: true,
        display_name: 'Andrew Huang',
        active_status: 'inactive',
        verifications: ['0x45effbd799ab49122eeeab75b78d9c56a187f9a7'],
        follower_count: 24578,
        custody_address: '0x4bd794493f021f545c8a5b78889e9d615cfa668e',
        following_count: 73,
        verified_addresses: {
          eth_addresses: ['0x45effbd799ab49122eeeab75b78d9c56a187f9a7'],
          sol_addresses: [],
        },
      },
      {
        fid: 4057,
        object: 'user',
        pfp_url: 'https://i.imgur.com/jL8PejM.jpg',
        profile: {
          bio: {
            text: 'Rollup Product Lead @conduit | Web3 builder, researcher and investor with a strong interest in security | fmr: awscloud iearnfinance | opinions are my own🦇🔊',
          },
        },
        username: 'emiliano',
        power_badge: false,
        display_name: 'Emiliano',
        active_status: 'inactive',
        verifications: ['0x394495a3800d1504b5686d398836baefebd0c5b7'],
        follower_count: 74,
        custody_address: '0x95fd5701289b4583f98005ea0310c6f741401283',
        following_count: 34,
        verified_addresses: {
          eth_addresses: ['0x394495a3800d1504b5686d398836baefebd0c5b7'],
          sol_addresses: [],
        },
      },
      {
        fid: 301193,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/9f114aa5-33b7-441f-175d-8c58a27b8b00/original',
        profile: {
          bio: {
            text: 'Launch an L2 or L3 in a few clicks, no code required. Ask questions about rollups in /conduit',
          },
        },
        username: 'conduit',
        power_badge: true,
        display_name: 'Conduit',
        active_status: 'inactive',
        verifications: [],
        follower_count: 2359,
        custody_address: '0xd9ecd15d1583ba8dc6f49ac48a6c4b7f5cffd1b7',
        following_count: 44,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [],
    packages: [],
    links: [
      {
        url: 'https://x.com/conduitxyz/status/1796252937347387570',
        name: 'Supporting Custom Gas Tokens in the OP Stack',
        description:
          'Conduit was the initial implementation partner for OP Stack chains using a custom gas token. We helped test early versions of the release internally and rolled out full support once it was live.',
      },
      {
        url: 'https://github.com/ethereum-optimism/optimism/pulls?q=is%3Apr+author%3Aemilianobonassi+is%3Aclosed',
        name: "Emiliano's contributions to the codebase",
        description:
          'Our Rollup Product Lead has upstreamed multiple fixes into the Optimism monorepo.',
      },
      {
        url: 'https://github.com/ethereum-optimism/optimism/pulls?q=is%3Apr+author%3Akahuang+is%3Aclosed',
        name: "Andrew's contributions to the codebase",
        description:
          'Our Founder and CEO regularly contributes fixes and improvements to the Optimism monorepo.',
      },
      {
        url: 'https://etherscan.io/tx/0xf4e7778523991cf6c4b305970c2c9e71ef27f652e475bb42302d582fa613f5a3',
        name: 'Key Handover for Metal, Mode and Zora',
        description:
          'Conduit completed the first key handover to the OP Security Council for three OP Stack chains. Shared security is a core tenant of the Superchain, and this is one of the first steps chains take when joining. We were the first to scope out the handover process with OP on testnet and mainnet.',
      },
      {
        url: 'https://conduit.mirror.xyz/2HujGUEmazP2AW6sHjNXLb0fMZKhrYD2RIZQUUHQkR4',
        name: 'Launching L3s for the OP Stack',
        description:
          'Conduit pioneered L3s on OP Stack chains in February of this year. Just days after an initial call to action from Jesse Pollak, we had L3 testnets running internally and launched official support shortly afterward. This was months before L3s were a Beta feature for the OP Stack.',
      },
      {
        url: 'https://blog.conduit.xyz/optimism-superchain/',
        name: 'OP Superchain Members built on Conduit',
        description:
          "Conduit powers many of the members of the OP Superchain, including five of the top ten Superchain members by TVL. Here's the full list of Conduit rollups that are part of the OP Superchain: Zora, BOB, Donatuz, Superseed, Pontem, Polynomial, Orderly Network, Mode, Mint Chain, Metal L2, and Derive (fka Lyra). More than 1/3 of the OP Superchain uses Conduit to deploy, operate, and maintain their OP Stack rollup.",
      },
      {
        url: 'https://docs.google.com/spreadsheets/d/1f-uIW_PzlGQ_XFAmsf9FYiUf0N9l_nePwDVrw0D5MXY/edit?gid=155717474#gid=155717474',
        name: 'Superchain Revenue Contribution',
        description:
          'Conduit rollups have contributed more than 130 ETH to the Optimism Collective. Outside of OP Mainnet and Base, these rollups, most notably Mode and Zora, account for almost all the contributions to the Collective.',
      },
      {
        url: 'https://blog.conduit.xyz/celestia-mainnet-migrations/',
        name: 'Supporting Alt-DA in the OP Stack',
        description:
          'Conduit led the charge in embracing and testing alternative data availability (DA) solutions for the OP Stack. In 2023, the cost barriers of running a rollup were incredibly high. In some cases, rollups were paying double-digit amounts of ETH per month just to operate. In January of this year, we migrated multiple OP Stack rollups to Celestia DA, lowering their DA costs by 100x. This dramatically lowered the barriers to entry for launching and operating OP Stack chains. Now, the Alt-DA mode standard is a key differentiator for the OP Stack, as chain operators can decide between multiple DA solutions based on their budget and needs.',
      },
      {
        url: 'https://app.conduit.xyz/deploy',
        name: 'Conduit Rollup Platform',
        description:
          "Including both testnets and mainnets, more than 200 OP Stack rollups are currently running on the Conduit platform. We brought the first OP Stack fork to production with Aevo and we're excited to bring hundreds and thousands more in the future!",
      },
      {
        url: 'https://dune.com/oplabspbc/welovetheblobs',
        name: 'Ecotone Fork Testing and Rollout',
        description:
          'Conduit helped test the Ecotone fork on devnets and testnets ahead of EIP-4844 going live on Ethereum Mainnet. Mode and Zora were some of the first rollups posting blobs, just minutes after OP Mainnet and Base. ',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [
        {
          amount: '25m-50m',
          year: '2024',
          details:
            "Conduit raised a $37M Series A led by Paradigm and Haun Ventures. Here's the announcement: https://blog.conduit.xyz/conduit-series-a/",
        },
        {
          amount: '5m-10m',
          year: '2023',
          details:
            "Conduit raised a $7M seed round led by Paradigm. Here's the announcement: https://blog.conduit.xyz/introducing-conduit/",
        },
      ],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '89441.36',
          date: '',
          details: null,
        },
      ],
    },
    pricingModel: {
      type: 'pay_to_use',
      details:
        'Conduit has a hosting fee and revenue share with rollups running on our platform. Testnets are $50/mo and Mainnet pricing starts at $3k/mo.\n\nYou can view our pricing here: https://www.conduit.xyz/pricing/rollups',
    },
    impactStatement: {
      category: 'OP_STACK_TOOLING',
      subcategory: [
        'Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.',
        'Services for deploying and hosting an OP Chain.',
      ],
      statement: {
        create: [
          {
            answer:
              "Conduit brought the first OP Stack fork to mainnet with the launch of Aevo in the summer of last year. Since then, hundreds of OP Stack chains have launched on our rollup platform, with more than 200 currently running across testnet and mainnet. \n\nOur team works very closely with stakeholders in the Optimism ecosystem. Our team members have made multiple contributions directly to the Optimism codebase, finding various fixes and suggesting improvements.\n\nWe invest countless hours testing Beta features like custom gas tokens, Alt-DA mode, and L3s. We also spend a lot of time testing and speccing network upgrades and hard forks like Ecotone, Fjord, and the upcoming Granite fork.\n\nMore than 1/3 of the rollups in the OP Superchain use Conduit to deploy, operate, and maintain their OP Stack chain. We were one of the earliest infrastructure supporters of the OP Stack and Superchain and we're excited to bring hundreds and thousands of more chains into the ecosystem!",
            question:
              'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?',
          },
          {
            answer:
              "More than 200 teams use Conduit to launch and operate their OP Stack chains. Our platform dramatically lowers the barriers to entry for teams to launch their own chain, enabling new types of applications and business models that weren't previously possible. This currently includes classic crypto use cases like DEXs, NFTs, and games but is also expanding to new and exciting verticals that were previously too expensive or difficult to do onchain. \n\nA list of Conduit customers is on our site: https://www.conduit.xyz/customers",
            question:
              'Who has used your tooling and how has it benefited them?',
          },
        ],
      },
    },
    testimonials:
      'https://www.metricsgarden.xyz/projects/Conduit%20OP%20Stack%20Contributions',
  },
  {
    id: '0x8d73a6f4342f92358b4a46e90336ce2e858d844fc78d3ca5d46f94ac09757918',
    applicationId:
      '0x8d73a6f4342f92358b4a46e90336ce2e858d844fc78d3ca5d46f94ac09757918',
    projectId:
      '0xb2d109759fe14e11ac5cc100ab6006321ebdd7ffdefbd2efac93a002105f8e92',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: null,
    name: 'Revm',
    description:
      'Revm is a critical component in the Ethereum ecosystem used by builders, toolings, clients and chains.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/57aeca37-e53b-4bcb-b161-0608d09e5c62.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/786c9752-af70-4856-9be0-38f4141769d2.png',
    socialLinks: {
      website: ['https://github.com/bluealloy/revm'],
      farcaster: [],
      twitter: 'https://x.com/rakitadragan',
      mirror: '',
    },
    team: [
      {
        fid: 17350,
        object: 'user',
        pfp_url: 'https://i.imgur.com/4ljUzMV.jpg',
        profile: { bio: { text: 'eth' } },
        username: 'draganrakita',
        power_badge: true,
        display_name: 'Dragan Rakita',
        active_status: 'inactive',
        verifications: [],
        follower_count: 185,
        custody_address: '0xdcd3a2c3d8c010844f5798705163ec5d15dc5f84',
        following_count: 81,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: 'a003e82b-5e7a-47d2-97b5-b5e14af5496a',
        type: 'github',
        url: 'https://github.com/bluealloy/revm',
        name: '',
        description: '',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-02T00:27:36.104Z',
        updatedAt: '2024-09-04T17:38:58.178Z',
        projectId:
          '0xb2d109759fe14e11ac5cc100ab6006321ebdd7ffdefbd2efac93a002105f8e92',
        metrics: {
          artifact_url: 'https://github.com/bluealloy/revm',
          num_contributors: '187.0',
          num_trusted_contributors: '40.0',
          num_contributors_last_6_months: '88.0',
          num_stars: '1601',
          num_trusted_stars: '50.0',
          trust_weighted_stars: '0.1994104708835467',
          num_forks: '528',
          num_trusted_forks: '49.0',
          trust_weighted_forks: '0.2743719776048538',
          trust_rank_for_repo_in_category: '3.0',
          age_of_project_years: '3.0',
          license: 'MIT',
        },
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://crates.io/crates/revm',
        name: 'Crates stats',
        description: 'Shows the number of downloads of the library',
      },
      {
        url: 'https://x.com/rakitadragan/status/1803540273907245293',
        name: 'Audit announcement',
        description:
          'A community-driven audit, supported by six projects, was done by a top Ethereum bug hunter.',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '198.758',
          date: '',
          details: null,
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Ethereum client implementations'],
      statement: {
        create: [
          {
            answer:
              "* Revm is an EVM library that supports Optimism.\n* it implemented the newest Prague hardfork changes (the main being EOF and EIP-7702) and passed all tests.\n* had a community-driven audit done by Guido Vranken (top eth bug hunter)\n* It is EVM used by Reth that got stable this year\n* It is the core component of tooling, foundry and hardhat (recently announced EDR framework).\n* Used by a lot of Ethereum builders and searchers.\n* Work is done to support abstraction for any Optimism or other L2/L1 chains. The idea is to remove repository fork hell and allow the extension of core EVM code.\n* And it is used extensively by zkvm's for zkEVM support.",
            question:
              'How does your project support, or is a dependency of, the OP Stack?',
          },
          {
            answer:
              "Revm is a critical component, I can't imagine it ceasing to exist as it is one of the most used rust libraries in the Ethereum ecosystem. It would impact almost every tooling, block builder/searcher or chain wanting to use or experiment on Reth.",
            question:
              'How would it impact the OP Stack if your project ceased to exist?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/Revm',
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
        id: 'e4406192-a026-409f-8a86-29d085edcefc',
        type: 'package',
        url: 'https://www.npmjs.com/package/@ethereum-attestation-service/eas-contracts',
        name: null,
        description: null,
        verified: false,
        openSource: false,
        containsContracts: false,
        createdAt: '2024-05-29T20:07:00.336Z',
        updatedAt: '2024-05-29T20:07:00.336Z',
        projectId:
          '0xa88844cea135382e3484e39c3172033437121b35ca0bc8b10b9b8253984876b5',
      },
      {
        id: '2cf511e1-a38a-4152-9d5f-5a216aedb606',
        type: 'github',
        url: 'https://github.com/ethereum-attestation-service/eas-contracts',
        name: 'Ethereum Attestation Service',
        description:
          'This is the primary repo for all things Ethereum Attestation Service.',
        verified: true,
        openSource: true,
        containsContracts: true,
        createdAt: '2024-05-29T19:52:29.747Z',
        updatedAt: '2024-08-26T17:38:32.053Z',
        projectId:
          '0xa88844cea135382e3484e39c3172033437121b35ca0bc8b10b9b8253984876b5',
        metrics: {
          artifact_url:
            'https://github.com/ethereum-attestation-service/eas-contracts',
          num_contributors: '27.0',
          num_trusted_contributors: '4.0',
          num_contributors_last_6_months: '9.0',
          num_stars: '246',
          num_trusted_stars: '10.0',
          trust_weighted_stars: '0.009277411101288',
          num_forks: '74',
          num_trusted_forks: '4.0',
          trust_weighted_forks: '0.0156623342324458',
          trust_rank_for_repo_in_category: '13.0',
          age_of_project_years: '3.1666666666667425',
          license: 'MIT',
        },
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
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '219758',
          date: '',
          details: null,
        },
        {
          grant: 'retroFunding',
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
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
      ],
      statement: {
        create: [
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
    testimonials:
      'https://www.metricsgarden.xyz/projects/Ethereum%20Attestation%20Service%20(EAS)',
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
    team: [
      {
        fid: 850761,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/b50c4a1d-13f7-434f-b6bd-a4d05a24ca00/rectcrop3',
        profile: { bio: { text: 'I’m a nub' } },
        username: 'nub88',
        power_badge: false,
        display_name: 'Nub88',
        active_status: 'inactive',
        verifications: [],
        follower_count: 11,
        custody_address: '0xce00214ff42a1717e4f2bf851724d92bc9db866a',
        following_count: 5,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 542384,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/dd4eeded-b83d-4e7f-a1a2-b4373e30b300/rectcrop3',
        profile: { bio: { text: 'Grants manager at @generalmagic 🪄' } },
        username: 'annakaic',
        power_badge: false,
        display_name: 'Anna',
        active_status: 'inactive',
        verifications: ['0x841c11b14c428dd591093348b8afa2652c863988'],
        follower_count: 40,
        custody_address: '0x46bca13ab7eb02838c4e26f138a06a9c5a90f04b',
        following_count: 29,
        verified_addresses: {
          eth_addresses: ['0x841c11b14c428dd591093348b8afa2652c863988'],
          sol_addresses: [],
        },
      },
    ],
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
      ventureFunding: [
        {
          amount: '1m-5m',
          year: '2023',
          details: 'Seed funding we received.',
        },
      ],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '400000',
          date: '',
          details: null,
        },
        {
          grant: 'retroFunding',
          link: null,
          amount: '145000',
          date: '',
          details: null,
        },
      ],
    },
    pricingModel: {
      type: 'pay_to_use',
      details:
        'Our tiers of security researchers (SR) and rates are as it follows:\n\nLead Security Researcher, weekly rate: $20k\nSecurity Researcher, weekly rate: $12.5k\nAssociate Security Researcher, weekly rate: $6.25k\nJunior Security Researcher, weekly rate: $3k',
    },
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Security audits specifically on the OP Stack or its components.',
      ],
      statement: {
        create: [
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
    testimonials:
      'https://www.metricsgarden.xyz/projects/Cantina.xyz%20-%20OP%20Stack%20Audits',
  },
  {
    id: '0x99f2af658ef373b4c227972a458db4a6149fb7179103ad7418c7d3185d0bfeb5',
    applicationId:
      '0x99f2af658ef373b4c227972a458db4a6149fb7179103ad7418c7d3185d0bfeb5',
    projectId:
      '0xf839a585342327848d4541a6fcc315404e879537a60a1370f2cd45a94283a1ba',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: {
      name: 'Dappnode',
      description:
        'Dappnode is a decentralized infrastructure platform that allows users to easily host their own decentralized applications (dApps) and blockchain nodes. Dappnode makes it easy to host and run various types of blockchain software, such as Ethereum, Bitcoin, IPFS, and others. The platform also provides users with a user-friendly interface to manage and monitor nodes.',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/8f9f9f23-b2de-4498-b7a9-5763d312ccb0.png',
      organizationCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/49eb70d6-4b32-4b14-aebb-c8862c7bd490.png',
      socialLinks: {
        website: ['https://dappnode.com', 'https://smooth.dappnode.io'],
        farcaster: ['https://warpcast.com/dappnode'],
        twitter: 'https://twitter.com/dappnode',
        mirror: '',
      },
      team: ['8263', '15703'],
    },
    name: 'Dappnode',
    description:
      'Since 2018, Dappnode has been a key software for blockchain infrastructure and a big part of decentralization in Ethereum.\nDappnode is a decentralized infrastructure platform that allows users to easily host their own decentralized applications (dApps) and blockchain nodes. Dappnode makes it easy to host and run various types of blockchain software, such as Ethereum, Bitcoin, IPFS, and others. The platform also provides users with a user-friendly interface to manage and monitor their nodes.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/69817332-d0d8-41e4-98bf-d691ac36a92f.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/7337ad49-5899-4fcf-9420-931cb7c45277.png',
    socialLinks: {
      website: ['https://dappnode.com'],
      farcaster: ['https://warpcast.com/dappnode'],
      twitter: 'https://twitter.com/dappnode',
      mirror: null,
    },
    team: null,
    github: [
      {
        id: '322d3b97-4fac-4a7e-9e65-f5724c0b4299',
        type: 'github',
        url: 'https://github.com/dappnode/DAppNode',
        name: 'Dappnode',
        description: 'General repository for Dappnode',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-08-28T13:12:16.314Z',
        updatedAt: '2024-09-23T13:21:49.382Z',
        projectId:
          '0xf839a585342327848d4541a6fcc315404e879537a60a1370f2cd45a94283a1ba',
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://ethseer.io/entity/dappnode?network=mainnet',
        name: 'Dappnode self-reported users',
        description:
          'Dappnode includes the graffiti "validated_from_DAppNode" in consensus clients by default, giving users the option to opt-out of the self-reporting setting',
      },
      {
        url: 'https://www.youtube.com/watch?v=lh5hADm1Iuk&list=PLpMpAvZuB3w56Z__TProOhu767X1Udoyc',
        name: 'Dappnode Driving School',
        description: 'Video tutorials for getting started on Dappnode',
      },
      {
        url: 'https://smooth.dappnode.io',
        name: 'Smooth',
        description:
          "Dappnode's solution to increase rewards for solo stakers, making them able to increase their average ETH execution rewards while still supporting the gold standard of staking in Ethereum.",
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '248448.21',
          date: '',
          details: null,
        },
        {
          grant: 'token-house-mission',
          link: 'https://github.com/dappnode/DAppNodePackage-op-node',
          amount: '50000',
          date: '2023-07-07',
          details:
            'You can find the link to the forum thread for this mission here:\nhttps://gov.optimism.io/t/final-dappnode-future-proofing-ui-ux-of-op-nodes/6189 ',
        },
      ],
    },
    pricingModel: {
      type: 'freemium',
      details:
        "- Dappnode is Free, Open-Source Software. This means anybody can download and run Dappnode with no strings attached.\n\n- Dappnode also sells hardware with its software pre-installed in a more plug-and-play fashion to accustom non-technical users' needs. This hardware may also be part of a partnership with other projects like Gnosis Chain or Lido, to provide a couple of examples, and offers additional benefits to people that buy them such as bundled validators or access to protocol whitelists.\n\n- As a way to support solo stakers increase their staking rewards, Dappnode developed and currently maintains Smooth (https://smooth.dappnode.io), an MEV Smoothing Pool with a little bit less than 2,000 validators currently registered. We'd like to disclose that Dappnode takes a 7% fee off all rewards that go into Smooth as another way to generate income and support the project.",
    },
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Ethereum test networks',
        'Infrastructure to test and deploy chains',
      ],
      statement: {
        create: [
          {
            answer:
              "Dappnode provides critical infrastructure and tools that enhance the usability, security, and decentralization of Ethereum. By integrating Optimism clients into the Dappnode Rollups menu, it simplifies node setup and maintenance, boosting network participation and resilience. The launch of the Smooth MEV Smoothing Pool incentivizes solo stakers with increased rewards, contributing to the economic security of the broader Ethereum ecosystem.\nAdditionally, Dappnode's Driving School tutorial series has been key in onboarding new users by simplifying node syncing, thereby supporting a broader base of node operators. The integration of the Holesky testnet and support for Holesky MEV Boost ensure that developers and stakers have access to the latest testing environments. Improvements in Ethical Metrics and Dencun upgrades further demonstrate Dappnode's commitment to addressing the evolving needs of node operators.",
            question:
              'How does your project support, or is a dependency of, the OP Stack?',
          },
          {
            answer:
              'If Dappnode ceased to exist, the OP Stack would be missing significant features . First, the ease of node setup and maintenance provided by the Dappnode platform would be lost, leading to a potential decrease in the number of independent nodes operating on the Ethereum network. This reduction in decentralization could make the network more vulnerable to centralization risks and diminish its overall resilience.\nThe absence of the Smooth MEV Smoothing Pool would likely result in reduced staking rewards for solo stakers, which could discourage participation from smaller, independent operators. This would concentrate staking power in the hands of larger entities, reducing the economic security and diversity of Ethereum that makes the OP Stack possible.',
            question:
              'How would it impact the OP Stack if your project ceased to exist?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/Dappnode',
  },
  {
    id: '0xa19d926c47b96113cac94ca5e5ef0448de6a0dae08100e1a4db25744352e6ed1',
    applicationId:
      '0xa19d926c47b96113cac94ca5e5ef0448de6a0dae08100e1a4db25744352e6ed1',
    projectId:
      '0xcd9dfcace81ae28b29b10c4ddf36bcb8db6d705cbb92e7d885e5b946a9f77910',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: {
      name: 'Nethermind',
      description: '',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/ead85a0e-7517-4e76-a094-4ca53869d34c.png',
      organizationCoverImageUrl: '',
      socialLinks: {
        website: ['https://www.nethermind.io/'],
        farcaster: ['https://warpcast.com/nethermind'],
        twitter: 'https://x.com/NethermindEth',
        mirror: '',
      },
      team: ['230074', '292202'],
    },
    name: 'Nethermind Ethereum Execution Client',
    description:
      'Nethermind is a robust and highly configurable Ethereum Execution Client built with .NET. Nethermind is recognized for its high performance in syncing and tip-of-chain processing and its extensibility, thanks to a flexible plugin system. As one of the main execution clients on the Ethereum mainnet, Nethermind plays a crucial role in Ethereum’s client diversity.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/fb68b628-fa43-4bb2-90fc-9f011f9a5c9a.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/c2e45279-ee86-4869-a726-79475d7f707a.png',
    socialLinks: {
      website: ['https://www.nethermind.io/nethermind-client'],
      farcaster: ['https://warpcast.com/nethermind'],
      twitter: 'https://x.com/NethermindEth',
      mirror: null,
    },
    team: null,
    github: [
      {
        id: '95541a2e-8744-4b70-bd57-6ba1d3726dc8',
        type: 'github',
        url: 'https://github.com/NethermindEth/nethermind',
        name: 'Nethermind Execution Client',
        description:
          'A robust and performant execution client for Ethereum stakers and node operators.',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-03T22:01:12.719Z',
        updatedAt: '2024-09-23T13:16:54.768Z',
        projectId:
          '0xcd9dfcace81ae28b29b10c4ddf36bcb8db6d705cbb92e7d885e5b946a9f77910',
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://supermajority.info/',
        name: 'Client Diversity Dashboard',
        description: 'Self-reported client diversity data',
      },
      {
        url: 'https://ethernodes.org/',
        name: 'Ethereum Mainnet Statistics - Clients',
        description: '',
      },
      {
        url: 'https://www.coinbase.com/developer-platform/discover/insights-analysis/execution-client-diversity',
        name: "Diversifying execution clients for Coinbase's ETH staking",
        description:
          'Quote from the article: "Our first Nethermind clients will go into production this week, and over the next several weeks, we plan to migrate roughly 50% of our validators to Nethermind."',
      },
      {
        url: 'https://x.com/NethermindEth/status/1825845699650486415',
        name: 'Client Testing Data',
        description:
          'Nethermind continues to optimize the client and increase performance. ',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [
        {
          amount: 'under-1m',
          year: '2020',
          details:
            'In March 2020, we received investment from two individuals in the total amount of £72,500 in exchange for equity ownership. ',
        },
      ],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '135600',
          date: '',
          details: null,
        },
        {
          grant: 'retroFunding',
          link: null,
          amount: '248448',
          date: '',
          details: null,
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.',
        'Ethereum client implementations',
      ],
      statement: {
        create: [
          {
            answer:
              "Client diversity is crucial for the long-term stability and security of the Ethereum network. Ethereum mainnet serves as the underlying layer for Optimism and other OP Stack chains. Nethermind, as one of the primary mainnet execution clients, helps prevent any single client implementation from dominating the Ethereum network. This enhances the Ethereum network's resiliency against attacks and bugs, whilst enhancing decentralization.",
            question:
              'How does your project support, or is a dependency of, the OP Stack?',
          },
          {
            answer:
              'Without the Nethermind Execution Client, the Ethereum network would face a greater risk of a supermajority client, increasing the chances of severe consequences in the event of a bug. Consensus issues within a supermajority client would have catastrophic effects on Ethereum, and thus Optimism and all OP Stack L2s.\n\nThe stability and high performance of the Nethermind Execution Client makes it an appealing alternative for stakers and node operators. According to Supermajority.info, Nethermind is now one of the most utilized execution clients.',
            question:
              'How would it impact the OP Stack if your project ceased to exist?',
          },
        ],
      },
    },
    testimonials:
      'https://www.metricsgarden.xyz/projects/Nethermind%20Ethereum%20Execution%20Client',
  },
  {
    id: '0xa555f2cc261179e744f961525e3c506a0a53cc02389cb8d59b93c8a9220ed7d7',
    applicationId:
      '0xa555f2cc261179e744f961525e3c506a0a53cc02389cb8d59b93c8a9220ed7d7',
    projectId:
      '0xd9d3c625d5d821c6cea40f671dae15bc5ef9b9e159abcefe94864cddf11750a4',
    category: 'Utility',
    applicationCategory: 'OP_STACK_TOOLING',
    organization: null,
    name: 'Builderism',
    description: 'Make your op stack with just a few commands!',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/e74ad0ba-d2bc-449d-9411-cbcad9bc8105.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/c7c58454-c6b7-4ce0-8b5f-cd60576940f4.png',
    socialLinks: {
      website: ['https://github.com/rabbitprincess/builderism'],
      farcaster: [],
      twitter: null,
      mirror: null,
    },
    team: [
      {
        fid: 841662,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/293871da-f871-4924-4292-6652f3ea3c00/rectcrop3',
        profile: { bio: { text: 'optimist' } },
        username: 'rabbitprincess',
        power_badge: false,
        display_name: 'Kim Changhak',
        active_status: 'inactive',
        verifications: [],
        follower_count: 12,
        custody_address: '0xc86a8921a7c6fa0c2c4b95ec7a4f3bc92bd330d9',
        following_count: 1,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: '1eb0f5a5-76ac-4a57-8df7-c52841b6f56f',
        type: 'github',
        url: 'https://github.com/rabbitprincess/builderism',
        name: 'Builderism',
        description: 'Make your mainnet using OP Stack!',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-08-24T03:50:38.294Z',
        updatedAt: '2024-08-24T03:50:59.708Z',
        projectId:
          '0xd9d3c625d5d821c6cea40f671dae15bc5ef9b9e159abcefe94864cddf11750a4',
        metrics: {
          artifact_url: 'https://github.com/rabbitprincess/builderism',
          num_contributors: '3.0',
          num_trusted_contributors: '1.0',
          num_contributors_last_6_months: '3.0',
          num_stars: '24',
          num_trusted_stars: '3.0',
          trust_weighted_stars: '0.0818649170714003',
          num_forks: '4',
          num_trusted_forks: '0.0',
          trust_weighted_forks: '1.358970728049718e-05',
          trust_rank_for_repo_in_category: '1.0',
          age_of_project_years: '0.5',
          license: 'MIT',
        },
      },
    ],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: { ventureFunding: [], revenue: [], grants: [] },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_TOOLING',
      subcategory: [
        'Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.',
        'Services for deploying and hosting an OP Chain.',
      ],
      statement: {
        create: [
          {
            answer:
              '- User-friendly commands for launch and run op stack chain\n- Step-by-step process and customizable configs\n- Supports latest features like Alt-DA and Custom Gas Token\n- Rapid patch updates in reponse to Optimism changes\n- Deploy config generator : https://github.com/ethereum-optimism/developers/discussions/559\n- Provides FAQ support for common issues',
            question:
              'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?',
          },
          {
            answer:
              'Builderism is a public repository that has received 24 stars and 4 forks for now. As an open-source initiative, it has inspired many developers to explore and utilize OP Stack tooling in their projects.\n\nBy simplifying the complexity and improving the accessibility of the OP Stack, Builderism contributes to the Optimism ecosystem, making it easier for developers to integrate and build OP Stack.',
            question:
              'Who has used your tooling and how has it benefited them?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/Builderism',
  },
  {
    id: '0xac859a911407aa694e23d1616d9ce086d3d53b90789186a94bfbbb8e7294036b',
    applicationId:
      '0xac859a911407aa694e23d1616d9ce086d3d53b90789186a94bfbbb8e7294036b',
    projectId:
      '0x6e250ff96f9c00b664d519d20531150df875dff20efcd37de2738f8b3286e7f6',
    category: 'Utility',
    applicationCategory: 'OP_STACK_TOOLING',
    organization: {
      name: 'AltLayer',
      description: '',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/01ff7161-3a25-4615-9bb5-9fbfdb91f6a8.png',
      organizationCoverImageUrl: '',
      socialLinks: {
        website: [],
        farcaster: [],
        twitter: '',
        mirror: '',
      },
      team: ['846722'],
    },
    name: 'RaaS and Restaking for OP Stack rollups',
    description:
      'AltLayer is a rollups-as-a-service provider with the goal to onboard applications to build using OP Stack and join the Superchain ecosystem.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/efb45dc3-f969-486a-94db-b1ba08172fdd.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/834addf6-c0fa-45e3-85d1-c85444cee8ce.png',
    socialLinks: {
      website: ['https://www.altlayer.io/'],
      farcaster: [],
      twitter: 'https://x.com/alt_layer',
      mirror: null,
    },
    team: [
      {
        fid: 846722,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/1ddc50a9-9e61-4bc5-35e2-34ad859f9a00/rectcrop3',
        profile: { bio: { text: 'RaaS builder' } },
        username: 'maqstik',
        power_badge: false,
        display_name: 'Amrit Kumar',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0x34c86d282e77199cac6774a09f72a11a9a577359',
        following_count: 0,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: 'cb191474-771e-4c1d-8eec-df246605ac11',
        type: 'github',
        url: 'https://github.com/alt-research/mach-avs',
        name: 'MACH Actively Validated Service (AVS) for OP Stack rollups',
        description:
          'AltLayer MACH AVS is a fast finality layer for Ethereum rollups. In MACH AVS, operators run verifier nodes for rollups, monitor the rollup for invalid blocks, and submit an alert to MACH AVS. Alerts can then be confirmed via a sufficient quorum or ZK proofs.',
        verified: true,
        openSource: false,
        containsContracts: true,
        createdAt: '2024-09-03T11:48:56.062Z',
        updatedAt: '2024-09-03T11:49:57.114Z',
        projectId:
          '0x6e250ff96f9c00b664d519d20531150df875dff20efcd37de2738f8b3286e7f6',
        metrics: {
          artifact_url: 'https://github.com/alt-research/mach-avs',
          num_contributors: '4.0',
          num_trusted_contributors: '1.0',
          num_contributors_last_6_months: '4.0',
          num_stars: '11',
          num_trusted_stars: '2.0',
          trust_weighted_stars: '0.0010320810971375',
          num_forks: '9',
          num_trusted_forks: '0.0',
          trust_weighted_forks: '2.251166563150245e-05',
          trust_rank_for_repo_in_category: '17.0',
          age_of_project_years: '0.41666666666674246',
          license: 'Custom',
        },
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://docs.google.com/spreadsheets/d/1YG5Wz5MsgkZCfrlUrpvS2R7alYEEBlJHw-zM1VsnbN0/edit?usp=sharing',
        name: 'A list of OP stack rollups launched by AltLayer',
        description:
          "AltLayer has launched 20 chains that use OP stack. A big majority of these are Superchain compatible, while some use alternative DA layer supported by the OP Plasma interface. \n\nWhile most of the rollups were launched and managed on behalf of AltLayer's clients such as the Xterio Chain, others were launched as public good networks for developers who wish to experiment with OP stack with different DA configurations.",
      },
      {
        url: 'https://bnb.xterscan.io/',
        name: 'Xterio Chain powered by OP stack',
        description:
          'AltLayer operates several OP-stack chains for Xterio -- a gaming studio. This particular app-specific chain uses OP stack for execution and BNB chain for settlement and DA and has been customized for games. The chain was launched in April, 2024 and has since seen over 109M transactions from over 8.8M wallet addresses.',
      },
      {
        url: 'https://cyberscan.co/ ',
        name: 'Cyber Chain powered by OP stack',
        description:
          'AltLayer operates an OP-stack chain for Cyber -- a chain dedicated for decentralized social applications. This app-specific chain uses OP stack for execution and Ethereum mainnet for settlement. The chain was launched in May 2024 and has since seen over 19.5M transactions from over 1.3M wallet addresses.',
      },
      {
        url: 'https://stats.altlayer.io/',
        name: 'Restaking for OP Rollups',
        description:
          'AltLayer has developed a restaking framework for rollups called restaked rollups. Restaked rollups come with additional services called actively validated services (AVS) that offer decentralized sequencing, faster finality and decentralized verification to OP rollups. \n\nAltLayer has so far launched 4 fast finality AVSs called MACH on EigenLayer mainnet. Each of these AVSs provide a fast finality network for a given OP stack rollup. These AVSs have attracted a total of over $11B in restaked TVL and each are highly decentralized with 30-50 operators and 20k-40k restaked ETH delegators.\n\nCyber MACH AVS: 41K+ stakers, 57 operators, ≈1.91M ETH Restaked \nAltLayer MACH AVS: 74K+ stakers, 43 operators, ≈ 1.04M ETH restaked\nXterio MACH AVS: 37K+ stakers, 42 operators, ≈1.04M ETH restaked\nGM Network MACH AVS: 19K+ stakers, 33 operators, ≈159K ETH restaked ',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [
        {
          amount: '5m-10m',
          year: '2021',
          details: 'USD 7.2M raised in the first round.',
        },
        {
          amount: '10m-25m',
          year: '2023',
          details: 'USD 14.4M raised in a second round.',
        },
      ],
      revenue: [],
      grants: [],
    },
    pricingModel: { type: 'pay_to_use', details: '' },
    impactStatement: {
      category: 'OP_STACK_TOOLING',
      subcategory: ['Services for deploying and hosting an OP Chain.'],
      statement: {
        create: [
          {
            answer:
              'AltLayer through its RaaS services has helped onboard several big gaming, social and other applications to building using OP Stack and become a part of Superchain. Several of these chains have attracted over hundreds of millions of transactions from over tens of millions of wallets.\n\nWe also pioneered a new framework called restaked rollups with the goal to bring the benefits of restaking to OP Stack rollups through specific actively validated services (AVSs) such as a fast finality layer. We have deployed 4 AVSes  for our RaaS clients that have collectively garnered over $10B in restaked TVL with tens of thousands of delegators.',
            question:
              'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?',
          },
          {
            answer:
              'Our services are used by developers who wish to launch their app-tailored rollups using OP Stack. We have launched and managed 20 different OP stack rollups with very heterogenous system configurations for e.g., different alternative DA layers.\n\nWe have helped many of our clients scale over time, in the sense that their rollup nodes were able to easily handle increased transaction traffic as their chain became more established.\n\nSome of our client testimonials can be found on our website: https://www.altlayer.io/. A common feedback that we get from our clients is that they believe we offer more than a tech service but rather a wholistic suite of services that covers marketing of their chains, helping with their business and go-to-market strategies and more. \n',
            question:
              'Who has used your tooling and how has it benefited them?',
          },
        ],
      },
    },
    testimonials:
      'https://www.metricsgarden.xyz/projects/RaaS%20and%20Restaking%20for%20OP%20Stack%20rollups',
  },
  {
    id: '0xb0acb1a252cdb3b2a7dfadc8c5925da71f005082ec045d8bb3855f64ac4774b9',
    applicationId:
      '0xb0acb1a252cdb3b2a7dfadc8c5925da71f005082ec045d8bb3855f64ac4774b9',
    projectId:
      '0xc71faa1bcb4ceb785816c3f22823377e9e5e7c48649badd9f0a0ce491f20d4b3',
    category: 'Utility',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: {
      name: 'Interplanetary Shipyard',
      description:
        'Interplanetary Shipyard is an independent engineering team maintaining, operating, and developing the canonical IPFS and libp2p implementations.',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/cc5bdce9-2076-4218-bb6e-08c08a03f9fe.png',
      organizationCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/f1bfae12-e2c7-4d3c-b5a6-036fe77579e5.png',
      socialLinks: {
        website: ['https://ipshipyard.com/'],
        farcaster: [],
        twitter: 'https://x.com/ipshipyard',
        mirror: '',
      },
      team: ['845866', '779819', '468804', '849466'],
    },
    name: 'go-libp2p',
    description:
      "The canonical Golang implementation of libp2p. Go-libp2p is a collection of protocols that support a wide range of functionalities, such as; connection establishment, remote node protocol identification and negotiation (through its identify protocol), data encryption, content/peer discovery (through its Kademlia DHT component), and data transfer through its pub-sub protocol (Gossipsub).\n\nThe stakeholders of go-libp2p include the Interplanetary Shipyard team who maintain this implementation as well as projects that depend on go-libp2p like Optimism's op-node (the reference implementation of the rollup-node spec), the Ethereum Beacon Chain (via Prysm, the Go consensus client), Filecoin (Lotus and Venus), Celestia node, and many more: https://github.com/libp2p/go-libp2p?tab=readme-ov-file#notable-users.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/277d8353-44c4-4e16-a2bd-2dfb3fb9e65f.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/4c70ca4a-8b38-47ee-97d0-2a64a63700f8.png',
    socialLinks: {
      website: [
        'https://ipshipyard.com/',
        'https://github.com/libp2p/go-libp2p',
      ],
      farcaster: [],
      twitter: 'https://x.com/ipshipyard',
      mirror: null,
    },
    team: [
      {
        fid: 845866,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/3608c536-9510-4ea4-81bb-2aa023255e00/rectcrop3',
        profile: { bio: { text: '' } },
        username: 'pshahi',
        power_badge: false,
        display_name: 'Prithvi Shahi',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0xc3fb1e793f7d63b49c6b212feb1c0b1fc586936d',
        following_count: 0,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 779819,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/67cc6023-7cea-4d66-6c0e-fe3b0a2a9300/rectcrop3',
        profile: {
          bio: {
            text: 'Talkative introvert. Systems & Software engineer. Open-source advocate. Technology enthusiast. Problem solver. Travel aficionado.',
          },
        },
        username: 'cewood',
        power_badge: false,
        display_name: 'Cameron',
        active_status: 'inactive',
        verifications: [],
        follower_count: 10,
        custody_address: '0x5ee947247b33c94dd939da016a802f29950ad972',
        following_count: 65,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 468804,
        object: 'user',
        pfp_url: 'https://i.imgur.com/gDORBsA.jpg',
        profile: {
          bio: { text: 'https://probelab.io & https://probelab.network' },
        },
        username: 'yiannisbot',
        power_badge: false,
        display_name: 'Yiannis Psarras',
        active_status: 'inactive',
        verifications: [],
        follower_count: 5,
        custody_address: '0xc411d534c86f7ff6ca949bf1e564d86bc1922a57',
        following_count: 75,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 849466,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/c08647c6-8576-479d-0320-515a2022c000/rectcrop3',
        profile: {
          bio: {
            text: 'Building IPFS and libp2p at Interplanetary Shipyard',
          },
        },
        username: 'aschmahmann',
        power_badge: false,
        display_name: 'Adin Schmahmann',
        active_status: 'inactive',
        verifications: [],
        follower_count: 1,
        custody_address: '0x7ac3127dc045ab7307adf44442f6e8d835504c48',
        following_count: 0,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: '17fd6c2a-7d2d-493c-b88d-1bb3ad48855d',
        type: 'github',
        url: 'https://github.com/libp2p/go-libp2p',
        name: 'go-libp2p',
        description: 'Main project repository.',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-08-30T20:09:06.568Z',
        updatedAt: '2024-09-04T16:40:45.687Z',
        projectId:
          '0xc71faa1bcb4ceb785816c3f22823377e9e5e7c48649badd9f0a0ce491f20d4b3',
        metrics: {
          artifact_url: 'https://github.com/libp2p/go-libp2p',
          num_contributors: '450.0',
          num_trusted_contributors: '16.0',
          num_contributors_last_6_months: '55.0',
          num_stars: '6001',
          num_trusted_stars: '20.0',
          trust_weighted_stars: '0.1296236659955704',
          num_forks: '1057',
          num_trusted_forks: '14.0',
          trust_weighted_forks: '0.0124372130620051',
          trust_rank_for_repo_in_category: '11.0',
          age_of_project_years: '9.0',
          license: 'MIT',
        },
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://github.com/ethereum-optimism/optimism/blob/develop/op-node/p2p/host.go#L223',
        name: "Optimism mainnet's use of go-libp2p",
        description:
          "A link to Optimism's op-node which uses protocols provided by go-libp2p",
      },
      {
        url: 'https://github.com/prysmaticlabs/prysm/blob/develop/beacon-chain/p2p/options.go#L90',
        name: "Prysm's use of go-libp2p",
        description:
          'A link to Ethereum Beacon Chain client Prysm which shows use of protocols provided by go-libp2p',
      },
      {
        url: 'https://clientdiversity.org/',
        name: "go-libp2p's role in Ethereum Client Diversity",
        description:
          "As of 2024-09-04, Sigma Prime's Blockprint data source shows that 36.42% of the Ethereum Beacon chain consists of Prysm nodes which rely on go-libp2p",
      },
    ],
    contracts: [],
    grantsAndFunding: { ventureFunding: [], revenue: [], grants: [] },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Ethereum client implementations',
        'Ethereum test networks',
        'Research which informs Ethereum core development',
      ],
      statement: {
        create: [
          {
            answer:
              "go-libp2p powers the Optimism mainnet through its use in op-node and similarly powers the Optimism Superchain ecosystem via it's use in the OP Stack. In op-node and OP stack, go-libp2p's  TCP transport, Connection Manager, Peerstore, Identify, AutoNAT & Ping protocols are used. As well as multiplexers like mplex and yamux, the TLS and Noise secure channels, and GossipSub for p2p messaging.\nIn the period between Oct 1 2023 - July 31 2024, go-libp2p has 3 major releases from v0.32.x to v0.35.x used in the OP stack and beacon chain. Major improvements include efficiencies like improving the dial prioritization logic to avoid spurious dials (Happy eyeballs for TCP), TLS encryption for TCP by default (for better performance), multiple improvements to the go-libp2p Resource manager, and more. Furthermore, in this period, go-libp2p has released multiple security fixes that improve the health of the Ethereum and Optimism mainnet.",
            question:
              'How does your project support, or is a dependency of, the OP Stack?',
          },
          {
            answer:
              'Because the Ethereum Beacon Chain and the OP stack are completely reliant on libp2p for its networking capabilities, if the go-libp2p project did not exist then both projects would have to have to write a libp2p implementation in Golang from scratch. A key yet understated feature that libp2p provides is interoperability across implementations in different languages. For example, a go-libp2p Prysm node can communicate with a rust-libp2p Lighthouse node seamlessly; without go-libp2p, there would be no Golang implementation to interoperate or form p2p networks with other language implementations. As a result, without go-libp2p Ethereum and the OP stack would lose a crucial libp2p implementation that powers the OP mainnet and a significant percentage of the Beacon Chain.',
            question:
              'How would it impact the OP Stack if your project ceased to exist?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/go-libp2p',
  },
  {
    id: '0xb146c27a51c52f663d11de86f32aca56262b4d23f4502debca1416cdc61b3997',
    applicationId:
      '0xb146c27a51c52f663d11de86f32aca56262b4d23f4502debca1416cdc61b3997',
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
    name: 'Deployment of the Shutterized Optimism (SHOP) testnet with the SHOP SDK.',
    description:
      'Shutter is a threshold encryption protocol with a wide variety of applications, including: malicious MEV prevention, censorship resistance, voting integrity, and gaming fairness. \n\n\nMost relevant for the OP Stack ecosystem is that we have built and deployed a dedicated OP Stack L2 testnet Shutterized Optimism (SHOP) with an in-protocol threshold encrypted mempool and are looking into generalizing this solution to more advanced cryptography primitives as well as deploying it across OP Stack networks. \n\n\nThe Shutterized Optimism testnet L2 launch on Sepolia marks the availability of a Shutterized encrypted mempool for the OP Stack, aiming to prevent front-running and provide a censorship-resistant trading environment. Shutterized OP Stack L2s bring a host of benefits, including: \n\n\n- Enhanced trading safety and profitability by mitigating front-running. \n- Added (real-time) censorship resistance. \n- Reduced trust assumptions in sequencers through transaction encryption. \n- Potential compliance and regulatory benefits by limiting the sequencer\'s ability to manipulate transactions.\n\nAdditionally, we have created the SHOP SDK (Shutterized Optimism SDK), a custom ethersjs provider, that allows to send shutter encrypted ("shutterized") transactions on Shutter-Optimism. The goal of the SHOP SDK is to make it as easy as possible to transform a traditional application that could run on Optimism into an MEV-protected version running on Shutter-Optimism.',
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
    team: null,
    github: [
      {
        id: 'c7c279da-cef3-40a6-a1a1-b6f2fce202ed',
        type: 'github',
        url: 'https://github.com/shutter-network/op-geth',
        name: 'OP Geth with encrypted mempool',
        description:
          'Fork of OP-Geth that includes the encrypted mempool integration into the state transition function\n',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-05T09:09:48.418Z',
        updatedAt: '2024-09-23T17:05:56.354Z',
        projectId:
          '0xf00518dc6abc147a7c46675cb76946afdd16868d7d4ab4689df0c48467158c26',
        metrics: {
          artifact_url: 'https://github.com/shutter-network/op-geth',
          num_contributors: '1.0',
          num_trusted_contributors: '0.0',
          num_contributors_last_6_months: '1.0',
          num_stars: '2',
          num_trusted_stars: '1.0',
          trust_weighted_stars: '0.0008502677910489',
          num_forks: '1',
          num_trusted_forks: '0.0',
          trust_weighted_forks: '3.551377554236211e-07',
          trust_rank_for_repo_in_category: '33.0',
          age_of_project_years: '0.6666666666667425',
          license: 'LGPL-3.0',
        },
      },
      {
        id: '1ea734a5-4523-40fa-aaf9-fc9be2732544',
        type: 'github',
        url: 'https://github.com/shutter-network/shopdemo',
        name: 'SHOP Demo dapp',
        description:
          'Shutter Optimism Demo dapp to showcase encrypted transactions on the shutterized Optimism testnet.',
        verified: true,
        openSource: false,
        containsContracts: true,
        createdAt: '2024-09-05T15:51:22.127Z',
        updatedAt: '2024-09-23T17:05:56.934Z',
        projectId:
          '0xf00518dc6abc147a7c46675cb76946afdd16868d7d4ab4689df0c48467158c26',
        metrics: {
          artifact_url: 'https://github.com/shutter-network/shopdemo',
          num_contributors: '3.0',
          num_trusted_contributors: '0.0',
          num_contributors_last_6_months: '3.0',
          num_stars: '1',
          num_trusted_stars: '0.0',
          trust_weighted_stars: '0.0',
          num_forks: '2',
          num_trusted_forks: '0.0',
          trust_weighted_forks: '1.31261011176496e-05',
          trust_rank_for_repo_in_category: '31.0',
          age_of_project_years: '0.5833333333332575',
          license: '',
        },
      },
      {
        id: 'bb0da7c1-cd89-4023-be49-854c8949df4f',
        type: 'github',
        url: 'https://github.com/shutter-network/contracts',
        name: 'Shutter EVM Smart Contracts',
        description: 'Contracts for the encrypted mempool integration',
        verified: true,
        openSource: false,
        containsContracts: true,
        createdAt: '2024-09-05T09:11:43.958Z',
        updatedAt: '2024-09-23T17:05:56.956Z',
        projectId:
          '0xf00518dc6abc147a7c46675cb76946afdd16868d7d4ab4689df0c48467158c26',
        metrics: {
          artifact_url: 'https://github.com/shutter-network/contracts',
          num_contributors: '',
          num_trusted_contributors: '',
          num_contributors_last_6_months: '',
          num_stars: '0',
          num_trusted_stars: '',
          trust_weighted_stars: '0.0',
          num_forks: '0',
          num_trusted_forks: '',
          trust_weighted_forks: '0.0',
          trust_rank_for_repo_in_category: '39.0',
          age_of_project_years: '',
          license: '',
        },
      },
      {
        id: '124e3cb2-2085-4a53-aad4-eb243a53abe7',
        type: 'github',
        url: 'https://github.com/shutter-network/shop-sdk',
        name: null,
        description: null,
        verified: true,
        openSource: false,
        containsContracts: false,
        createdAt: '2024-09-23T17:05:41.533Z',
        updatedAt: '2024-09-23T17:05:41.533Z',
        projectId:
          '0xf00518dc6abc147a7c46675cb76946afdd16868d7d4ab4689df0c48467158c26',
        metrics: {
          artifact_url: 'https://github.com/shutter-network/shop-sdk',
          num_contributors: '2.0',
          num_trusted_contributors: '0.0',
          num_contributors_last_6_months: '2.0',
          num_stars: '2',
          num_trusted_stars: '1.0',
          trust_weighted_stars: '0.0008502677910489',
          num_forks: '1',
          num_trusted_forks: '0.0',
          trust_weighted_forks: '0.0',
          trust_rank_for_repo_in_category: '29.0',
          age_of_project_years: '0.5833333333332575',
          license: '',
        },
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
      {
        url: 'https://youtu.be/fO6zecX_6E8',
        name: 'Video demo of Encrypted Mempool for the Op Stack',
        description:
          'A demonstration of a mock rollup sequencer with a shutterized encrypted mempool showcasing a DeFi transaction.',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      revenue: [],
      grants: [
        {
          grant: 'token-house-mission',
          link: 'https://app.charmverse.io/op-grants/generalized-mempool-encryption-interface-for-op-stack-chains-and-deployment-of-a-mempool-encrypted-op-stack-testnet-using-threshold-encryption-8763406955381605',
          amount: '10000',
          date: '2024-05-08',
          details:
            'We were awarded a 50K grant that includes the launch of a Sepolia testnet as the first of six major milestones. 10K is the estimation of this first milestone.',
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Work on core components of the OP Stack, including client implementations, modules, and modifications.',
      ],
      statement: {
        create: [
          {
            answer:
              'The Shutterized Optimism testnet L2 launch on Sepolia marks the availability of a Shutterized encrypted mempool for the OP Stack. Any existing or new OP stack chain can easily add mempool encryption to prevent front-running and provide a censorship-resistant trading environment. \n\n\nAdditionally, the SHOP-SDK helps transform a traditional application that could run on Optimism into an MEV-protected version running on Shutter-Optimism or any other OP stack mempool encrypted chain. \n\n\nThis is an important milestone for Shutter and, more importantly, for base layer neutrality on L2s. We are moving towards mainnet deployment and our collaboration with Mode.\n',
            question:
              'How has your project advanced the development of the OP Stack?',
          },
          {
            answer:
              '- "The Optimism Developer Advisory Board views encrypted mempools as an important research area that can lead to better technical decentralization." This is a quote from brockelmore (https://gov.optimism.io/t/ready-to-vote-implement-a-prototype-of-an-op-stack-chain-with-mempool-encryption/7448/19?u=cotabe) from a post where the Developer Advisory Board voted unanimously to accept a Mission request to implement a Prototype of an OP Stack Chain with Mempool encryption. Brainbot/Shutter is executing this mission.\n\n\n- Mode (https://x.com/modenetwork/status/1757085779564609759) and other OP stack chains have expressed interest in getting shutterized to prevent censorship, front-running, and sandwich attacks. DEXs and DeFi applications, along with their users, stand to benefit the most from our work on the OP Stack\n\n\nUltimately, end user are the prospective prime beneficiaries, because they will benefit from the front-running protection and real time censorship resistance.\n',
            question:
              'Who has benefited the most from your work on the OP Stack and how?',
          },
        ],
      },
    },
    testimonials:
      'https://www.metricsgarden.xyz/projects/Deployment%20of%20the%20Shutterized%20Optimism%20(SHOP)%20testnet%20with%20the%20SHOP%20SDK.',
  },
  {
    id: '0xb70d28d9ff1d684d80f2c34512d914652c7e8af6bd8ecc64f44f61ba9cd43f52',
    applicationId:
      '0xb70d28d9ff1d684d80f2c34512d914652c7e8af6bd8ecc64f44f61ba9cd43f52',
    projectId:
      '0xcc8d03e014e121d10602eeff729b755d5dc6a317df0d6302c8a9d3b5424aaba8',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: null,
    name: 'Solidity',
    description:
      'Solidity is an object-oriented, high-level language for implementing smart contracts.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/b6f312d0-1025-4a19-baa9-3aa218fe0833.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/bca65077-a87b-4fd8-bcc3-9ad0a65d9d27.png',
    socialLinks: {
      website: ['https://soliditylang.org/'],
      farcaster: ['https://warpcast.com/soliditylang.eth'],
      twitter: 'https://x.com/solidity_lang',
      mirror: 'https://soliditylang.org/blog/',
    },
    team: [
      {
        fid: 848597,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/e070be15-7786-43bb-2179-257a7f097100/rectcrop3',
        profile: {
          bio: {
            text: 'Solidity is an object-oriented, high-level language for implementing smart contracts on Ethereum.',
          },
        },
        username: 'soliditylang.eth',
        power_badge: false,
        display_name: 'Solidity',
        active_status: 'inactive',
        verifications: ['0x151ef20a3ade1cc1161391594f8a32461389a54e'],
        follower_count: 0,
        custody_address: '0xa1db068462b21e1d132cd6720d5cf14c86a36dc8',
        following_count: 0,
        verified_addresses: {
          eth_addresses: ['0x151ef20a3ade1cc1161391594f8a32461389a54e'],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        id: '64c38bdf-abd0-4496-b54e-a211876591e4',
        type: 'github',
        url: 'https://github.com/ethereum/solidity',
        name: 'Solidity GitHub repository',
        description:
          'Official GitHub open source repository for Solidity—an object-oriented, high-level language for implementing smart contracts. 🌐',
        verified: true,
        openSource: true,
        containsContracts: true,
        createdAt: '2024-09-02T13:12:57.386Z',
        updatedAt: '2024-09-02T14:04:08.744Z',
        projectId:
          '0xcc8d03e014e121d10602eeff729b755d5dc6a317df0d6302c8a9d3b5424aaba8',
        metrics: {
          artifact_url: 'https://github.com/ethereum/solidity',
          num_contributors: '1938.0',
          num_trusted_contributors: '60.0',
          num_contributors_last_6_months: '136.0',
          num_stars: '23083',
          num_trusted_stars: '52.0',
          trust_weighted_stars: '0.1452666606457593',
          num_forks: '5717',
          num_trusted_forks: '41.0',
          trust_weighted_forks: '0.2564965651147046',
          trust_rank_for_repo_in_category: '4.0',
          age_of_project_years: '9.083333333333258',
          license: 'GPL-3.0',
        },
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://soliditylang.org/',
        name: 'Website',
        description:
          'The Solidity website with our blog and official documentation.',
      },
      {
        url: 'https://forum.soliditylang.org/',
        name: 'Solidity Forum',
        description:
          'The forum is a place for our user community to discuss topics related to the Solidity language design.',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '217300',
          date: '',
          details: null,
        },
        {
          grant: 'retroFunding',
          link: null,
          amount: '422361',
          date: '',
          details: null,
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Languages which are dedicated to developing smart contracts',
      ],
      statement: {
        create: [
          {
            answer:
              '→ As of today, Etherscan has 32,441 verified smart contracts deployed on Optimism. Out of the latest 500 verified smart contracts, 5 are written in Vyper and 495 in Solidity, making Solidity the most used language for writing smart contracts deployed on Optimism. Based on this, it is safe to assume that at least 95% of the contracts on Optimism are written in Solidity.\nSee, for reference: https://optimistic.etherscan.io/contractsVerified\n→ All of Optimism’s L1 and L2 contracts itself are written in solidity:\nhttps://github.com/ethereum-optimism/optimism/tree/develop/packages/contracts-bedrock/src\n→ In a TVL analysis, Solidity is at 91.05% as of Sep 3 among 17 other languages: https://defillama.com/languages\n\nSolidity, as a widely used smart contract language, enables developers to build a a wide range of dapps on the OP Stack that are secure and reliable. Additionally, testing frameworks and debugging tools designed for Solidity seamlessly integrate with the OP Stack.',
            question:
              'How does your project support, or is a dependency of, the OP Stack?',
          },
          {
            answer:
              'If Solidity is no longer maintained or there are no future releases, all projects based on Optimism would eventually need to rewrite their contracts in another smart contract language. Additionally, future updates to the L1 and L2 contracts of Optimism might need to be rewritten in another language due to missing updates and security patterns in the language.\n\nSolidity’s existing impact on the OP stack enables smart contract compatibility and portability. As the OP stack continues to evolve, Solidity’s role in its growth and adoption remains pivotal as the most used smart contract language.',
            question:
              'How would it impact the OP Stack if your project ceased to exist?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/Solidity',
  },
  {
    id: '0xb79e4919dfe7b72d966ad36ff7aa4619204a47d7e281f9bf955114a366f7189b',
    applicationId:
      '0xb79e4919dfe7b72d966ad36ff7aa4619204a47d7e281f9bf955114a366f7189b',
    projectId:
      '0x0be3a0fa062180bdfbfdefa993b09acd9edcae93ba0d8d5829dd01c138268f40',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: {
      name: 'libp2p',
      description:
        "libp2p is an open source networking library used by the world's most important distributed systems such as Ethereum, IPFS, Filecoin, Optimism and countless others. There are native implementations in Go, Rust, Javascript, C++, Nim, Java/Kotlin, Python, .Net, Swift and Zig. It is the simplest solution for global scale peer-to-peer networking and includes support for pub-sub message passing, distributed hash tables, NAT hole punching and browser-to-browser direct communication.",
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/39689f3b-3e4c-48a2-ab37-f57b85998e69.png',
      organizationCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/e8ef83e2-0eb0-48a2-b931-2221e8ae5ed9.png',
      socialLinks: {
        website: ['https://libp2p.io', 'https://github.com/libp2p/libp2p'],
        farcaster: [],
        twitter: 'https://x.com/libp2p',
        mirror: '',
      },
      team: ['827799', '845866'],
    },
    name: 'jvm-libp2p',
    description:
      'The canonical JVM implementation of libp2p written in Kotlin.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/19ff1307-15ef-4783-887c-c50c429af401.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/42d1e5bc-8bd6-4604-9e4a-548a144dc721.png',
    socialLinks: {
      website: ['https://github.com/libp2p/jvm-libp2p'],
      farcaster: [],
      twitter: null,
      mirror: null,
    },
    team: [
      {
        fid: 849171,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/eacec86f-6b9c-4d02-0b7c-0d660a4de800/rectcrop3',
        profile: { bio: { text: '' } },
        username: 'lucassaldanha',
        power_badge: false,
        display_name: 'Lucas Saldanha',
        active_status: 'inactive',
        verifications: [],
        follower_count: 1,
        custody_address: '0xc167844b5b93befe85fea19630c20570a85e2612',
        following_count: 0,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 827799,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/8614af8b-74b7-43b3-2525-25be5087ac00/rectcrop3',
        profile: {
          bio: {
            text: 'Long time open source developer and applied crypto engineer. Chief pilot of the Aviation Community and Dev Rel organization use by many web3 projects.',
          },
        },
        username: 'dwgrantham',
        power_badge: false,
        display_name: 'Dave Grantham',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0x3417f7a84c2f3f51177d247c83e448b5ee2cbd2e',
        following_count: 0,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 845866,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/3608c536-9510-4ea4-81bb-2aa023255e00/rectcrop3',
        profile: { bio: { text: '' } },
        username: 'pshahi',
        power_badge: false,
        display_name: 'Prithvi Shahi',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0xc3fb1e793f7d63b49c6b212feb1c0b1fc586936d',
        following_count: 0,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: '6e596e0f-0325-4744-9ef3-01f25f127d47',
        type: 'github',
        url: 'https://github.com/libp2p/jvm-libp2p',
        name: 'jvm-libp2p',
        description: 'The main repository for jvm-libp2p',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-04T22:46:12.616Z',
        updatedAt: '2024-09-05T02:37:14.283Z',
        projectId:
          '0x0be3a0fa062180bdfbfdefa993b09acd9edcae93ba0d8d5829dd01c138268f40',
        metrics: {
          artifact_url: 'https://github.com/libp2p/jvm-libp2p',
          num_contributors: '49.0',
          num_trusted_contributors: '11.0',
          num_contributors_last_6_months: '4.0',
          num_stars: '265',
          num_trusted_stars: '4.0',
          trust_weighted_stars: '0.0053531981651191',
          num_forks: '75',
          num_trusted_forks: '9.0',
          trust_weighted_forks: '0.0663162577887542',
          trust_rank_for_repo_in_category: '7.0',
          age_of_project_years: '5.3333333333332575',
          license: 'Apache-2.0',
        },
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://github.com/Consensys/teku/tree/master/networking/p2p/src/main/java/tech/pegasys/teku/networking/p2p/libp2p',
        name: "Teku's use of jvm-libp2p",
        description:
          'A link to Teku repository which demonstrates its use of jvm-libp2p',
      },
      {
        url: 'https://clientdiversity.org/',
        name: "jvm-libp2p's role in Ethereum Client Diversity",
        description:
          "As of 2024-09-04, Sigma Prime's Blockprint data source shows that 22.71% of the Ethereum Beacon chain consists of Teku nodes which rely on jvm-libp2p",
      },
    ],
    contracts: [],
    grantsAndFunding: { ventureFunding: [], revenue: [], grants: [] },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Ethereum client implementations',
        'Research which informs Ethereum core development',
        'Ethereum test networks',
      ],
      statement: {
        create: [
          {
            answer:
              "jvm-libp2p powers Teku, the Ethereum consensus client written in Java which contains a full beacon node and validator client implementation.\nTeku adheres to the Ethereum Beacon Chain's networking specifications and relies on jvm-libp2p's TCP transport, yamux and mplex multiplexing capabilities, secure communication via TLS and Noise, and GossipSub for messaging.\nIn the period between Oct 1 2023 - July 31 2024, jvm-libp2p has had 2 releases which included major improvements like implementing Circuit Relay v2, improvements to the yamux multiplexer, and many fixes/improvements to GossipSub. ",
            question:
              'How does your project support, or is a dependency of, the OP Stack?',
          },
          {
            answer:
              "If jvm-libp2p ceased to exist, Teku would no longer be viable as a beacon node. Nodes implemented in different languages are important for client diversity, and according to Sigma Prime's Blockprint data source for Beacon Chain client diversity metrics, jvm-libp2p Teku nodes consist of 22.64% of the network (as of 2024-09-04). Because Ethereum underpins L2 network (i.e. Optimism), a resilient, diverse Ethereum is crucial to the health of the OP stack as well.",
            question:
              'How would it impact the OP Stack if your project ceased to exist?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/jvm-libp2p',
  },
  {
    id: '0xb7ab34b29ac7c1f61777caa55b2b0e39de62a3a3f14ca7a48eb26ac6d701d0b2',
    applicationId:
      '0xb7ab34b29ac7c1f61777caa55b2b0e39de62a3a3f14ca7a48eb26ac6d701d0b2',
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
    team: null,
    github: [
      {
        id: 'a2ed4686-15ae-4742-b00f-be6b4c91691b',
        type: 'github',
        url: 'https://github.com/defi-wonderland/opUSDC',
        name: 'opUSDC',
        description:
          'The Bridged USDC Standard in the OP Stack repository. This repository includes the referenced implementation, setup guide, tests, audit, and more.',
        verified: true,
        openSource: true,
        containsContracts: true,
        createdAt: '2024-09-06T01:29:04.883Z',
        updatedAt: '2024-09-06T01:35:08.999Z',
        projectId:
          '0x66a3f6245dc3ac966d3ed9dd8c076a723cfc3aaaf5ea3721c634d46c3be46331',
      },
    ],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      revenue: [],
      grants: [
        {
          grant: 'foundation-grant',
          link: 'https://www.notion.so/defi-wonderland/Requirement-from-OP-Labs-4a0555f1f3ec41e99adb0143e62ace39',
          amount: '20000',
          date: '2024-04-19',
          details: '',
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
      ],
      statement: {
        create: [
          {
            answer:
              'opUSDC sets the standard for deploying the [Bridged USDC standard](https://www.circle.com/en/bridged-usdc) to any OP Stack Chain. Before opUSDC, chain operators were limited to non-standard USDC implementations, which caused liquidity fragmentation when Circle deployed its official version (USDC.e vs. native USDC). Now, as part of the [core features available](https://docs.optimism.io/builders/chain-operators/features/bridged-usdc-standard) to OP Stack Chain Operators, anyone can deploy a Bridged USDC version, which includes:\n\n- A factory implementation for one-click deployment on Ethereum and targeted OP Stack Chain.\n- A seamless migration flow for tokens, in this case, to native USDC, in coordination with Circle.\n- The ability to claim funds after the migration process is completed as well as other edge cases.\n\nThis referenced implementation also contributes to the development of custom token bridges for OP Stack Chains, particularly for those interested in the flows introduced.',
            question:
              'How has your project advanced the development of the OP Stack?',
          },
          {
            answer:
              'To date, the primary beneficiaries of this implementation have been chain operators like Worldchain and Lisk, along with RaaS providers, who have been informed about the implementation and have currently conducted internal tests in preparation for launch. However, it is important to note that the implementation is still awaiting its first mainnet deployment by a chain operator for full use.',
            question:
              'Who has benefited the most from your work on the OP Stack and how?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/opUSDC',
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
        profile: { bio: { text: '@code4rena cofounder' } },
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
      ventureFunding: [
        {
          amount: '5m-10m',
          year: '2022',
          details:
            'These funds covered operations for 3 years and were essential in getting Code4rena to where it is today.\n\nSharing in the interest of transparent disclosure, but this funding technically is not part of the current entity that houses Code4rena, which is a wholly owned subsidiary of Zellic.',
        },
      ],
      revenue: [],
      grants: [],
    },
    pricingModel: {
      type: 'freemium',
      details:
        'Code4rena distributes the majority of its income to community contributors—security researchers and judges. We take a small fee on top of funds distributed in competitive audits, bounties, and consultative audits. This fee covers the cost of managing and maintaining the complex logistics of these services.',
    },
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Security audits specifically on the OP Stack or its components.',
      ],
      statement: {
        create: [
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
    testimonials: 'https://www.metricsgarden.xyz/projects/Code4rena',
  },
  {
    id: '0xc150e51f4f208b725e269deb41f71bb6a3ff55633acbfe5b7895dee18609c1ec',
    applicationId:
      '0xc150e51f4f208b725e269deb41f71bb6a3ff55633acbfe5b7895dee18609c1ec',
    projectId:
      '0x7f1256b007e1156494e43b58d5e85e6ec20f4fcf1e5cac6ebb17b702e9c0b5fb',
    category: 'Utility',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: {
      name: 'Nethermind',
      description: '',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/ead85a0e-7517-4e76-a094-4ca53869d34c.png',
      organizationCoverImageUrl: '',
      socialLinks: {
        website: ['https://www.nethermind.io/'],
        farcaster: ['https://warpcast.com/nethermind'],
        twitter: 'https://x.com/NethermindEth',
        mirror: '',
      },
      team: ['230074', '292202'],
    },
    name: 'OP Nethermind',
    description:
      'OP Nethermind brings the Nethermind Execution Client to the OP Stack, including OP Mainnet and Base, with all the same features as our L1 client. Nethermind is known for its performance, extensibility and stability. It brings client diversity to the Superchain.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/0415c07b-027a-46dd-8826-c4dca1cccece.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/c8883caa-2948-4ea3-a38e-eff279f93b8d.png',
    socialLinks: {
      website: ['https://www.nethermind.io/nethermind-client'],
      farcaster: ['https://warpcast.com/nethermind'],
      twitter: 'https://x.com/nethermindeth',
      mirror: null,
    },
    team: null,
    github: [],
    packages: [],
    links: [
      {
        url: 'https://github.com/NethermindEth/nethermind/tree/master/src/Nethermind/Nethermind.Optimism',
        name: 'Nethermind Optimism',
        description:
          'This project in the Nethermind repository implements OP-Stack support',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [
        {
          amount: 'under-1m',
          year: '2020',
          details:
            'In March 2020, we received investment from two individuals in the total amount of £72,500 in exchange for equity ownership. ',
        },
      ],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '248448',
          date: '',
          details: null,
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: ['Ethereum client implementations'],
      statement: {
        create: [
          {
            answer:
              "OP Nethermind brings the full range of Nethermind's features to the OP Stack, enhancing client diversity across OP chains and providing node operators with a reliable alternative. The performance of OP Nethermind can increase the throughput of OP chains, thus supporting their future growth.",
            question:
              'How does your project support, or is a dependency of, the OP Stack?',
          },
          {
            answer:
              'Without OP Nethermind, the client diversity of the OP Stack would be reduced, affecting its overall security and stability. The performance and features provided by OP Nethermind, along with future innovations from the team, would no longer be available.',
            question:
              'How would it impact the OP Stack if your project ceased to exist?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/OP%20Nethermind',
  },
  {
    id: '0xc6ce7c19e261fb70c69dd6a721637b82fa21a048bf668295487af011c8700186',
    applicationId:
      '0xc6ce7c19e261fb70c69dd6a721637b82fa21a048bf668295487af011c8700186',
    projectId:
      '0x5759249c433d67eeb2ca1b6ff827feec164b60b92e849d6ce0db0974cedc4a89',
    category: 'Utility',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    organization: {
      name: 'Paradigm OSS',
      description: '',
      organizationAvatarUrl: null,
      organizationCoverImageUrl: null,
      socialLinks: {
        website: [],
        farcaster: [],
        twitter: null,
        mirror: null,
      },
      team: ['3860'],
    },
    name: 'OP Reth',
    description:
      "The OP Stack is built to be modular, and allows any EL to plug as long as it's following the spec. \n\nWe proceeded to adjust Reth, a new EL for Ethereum, to be compatible with the OP Stack by adding support for Deposit transactions, the new Engine API modifications and more. This brings down OP Stack chain sizes down by >5x and provides improved runtime performance.\n\nOP Reth supports the latest Optimism upgrades, as well as OP Mainnet.\n\nhttps://reth.rs/run/optimism.html\nhttps://reth.rs/run/sync-op-mainnet.html",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/e20ba37b-2751-4976-938f-9f0915231c7d.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/de2004b9-a85c-4846-8d84-c3246d7a53c5.png',
    socialLinks: {
      website: ['https://github.com/paradigmxyz/reth'],
      farcaster: [],
      twitter: null,
      mirror: null,
    },
    team: [
      {
        fid: 3860,
        object: 'user',
        pfp_url:
          'https://i.seadn.io/gcs/files/cfb802c4ff9c6cc2fedd01707c897715.png?w=500&auto=format',
        profile: {
          bio: {
            text: 'cto & general partner @paradigm. working with /rust on /ethereum. building /reth and /foundry. https://gakonst.com',
          },
        },
        username: 'gakonst',
        power_badge: true,
        display_name: 'gakonst',
        active_status: 'inactive',
        verifications: [
          '0x19c5bf5fbf17d8c47d8795a194c03e4061e36761',
          '0x2abc80332a8dfa064bd2f361e8b72d76ef8637c5',
          '0x2abc80332a8dfa064bd2f361e8b72d76ef8637c5',
        ],
        follower_count: 238297,
        custody_address: '0x1b3cb968b7faa1378fb5a19eef7251086cfd26f2',
        following_count: 121,
        verified_addresses: {
          eth_addresses: [
            '0x19c5bf5fbf17d8c47d8795a194c03e4061e36761',
            '0x2abc80332a8dfa064bd2f361e8b72d76ef8637c5',
            '0x2abc80332a8dfa064bd2f361e8b72d76ef8637c5',
          ],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        id: 'ce93d54e-7519-45c1-9642-a4405352a50f',
        type: 'github',
        url: 'https://github.com/paradigmxyz/reth',
        name: 'OP Reth',
        description: '',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-07T00:44:02.970Z',
        updatedAt: '2024-09-07T00:44:21.223Z',
        projectId:
          '0x5759249c433d67eeb2ca1b6ff827feec164b60b92e849d6ce0db0974cedc4a89',
        metrics: {
          artifact_url: 'https://github.com/paradigmxyz/reth',
          num_contributors: '618.0',
          num_trusted_contributors: '83.0',
          num_contributors_last_6_months: '305.0',
          num_stars: '3826',
          num_trusted_stars: '69.0',
          trust_weighted_stars: '0.3635137675470326',
          num_forks: '1077',
          num_trusted_forks: '70.0',
          trust_weighted_forks: '0.2551734313296674',
          trust_rank_for_repo_in_category: '1.0',
          age_of_project_years: '1.75',
          license: 'Apache-2.0',
        },
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://worldcoin.org/blog/announcements/worldcoin-foundation-launches-world-chain-developer-preview',
        name: 'Worldchain <> Reth',
        description: '',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '149069',
          date: '',
          details: null,
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: ['Ethereum client implementations'],
      statement: {
        create: [
          {
            answer:
              'OP Reth is an additional client implementation of OP Stack in Rust.\n\nIt is based off of the Reth project and is implemented as a "Reth Core SDK" module under: https://github.com/paradigmxyz/reth/tree/main/crates/optimism.',
            question:
              'How does your project support, or is a dependency of, the OP Stack?',
          },
          {
            answer:
              'The OP Stack would struggle with scaling and with supporting its multi-client roadmap such as supporting multiproofs.\n\nOP Reth provides best-in-class performance for OP Stack L2s, and is already adopted by OP Stack users like Base, Worldchain, Conduit and others. It reduces archive node size by >5x, and it is the most performant L2 node to date.',
            question:
              'How would it impact the OP Stack if your project ceased to exist?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/OP%20Reth',
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
        profile: { bio: { text: 'Sherlock' } },
        username: 'glory-eth',
        power_badge: false,
        display_name: 'Glory-eth',
        active_status: 'inactive',
        verifications: [],
        follower_count: 3,
        custody_address: '0x8eda3b1ff8e63dea9df58f3fa7653036ed23d35c',
        following_count: 71,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: '3a1d2852-e64b-4ef7-b77f-f18b8dd3075d',
        type: 'github',
        url: 'https://github.com/sherlock-protocol/sherlock-v2-core',
        name: 'Sherlock',
        description: '',
        verified: true,
        openSource: false,
        containsContracts: true,
        createdAt: '2024-05-28T13:13:24.324Z',
        updatedAt: '2024-08-26T04:27:40.524Z',
        projectId:
          '0x28a8b14613c3a5790b2d0c7b7d32384ecd187b3b86fc66ba9d9244944d20b422',
        metrics: {
          artifact_url: 'https://github.com/sherlock-protocol/sherlock-v2-core',
          num_contributors: '5.0',
          num_trusted_contributors: '0.0',
          num_contributors_last_6_months: '0.0',
          num_stars: '19',
          num_trusted_stars: '2.0',
          trust_weighted_stars: '0.0188817993906774',
          num_forks: '5',
          num_trusted_forks: '0.0',
          trust_weighted_forks: '7.62297090234072e-07',
          trust_rank_for_repo_in_category: '23.0',
          age_of_project_years: '2.75',
          license: '',
        },
      },
    ],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [{ amount: '1m-5m', year: '2022', details: '' }],
      revenue: [],
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
      ],
    },
    pricingModel: {
      type: 'pay_to_use',
      details:
        'Sherlock prices audits on a case-by-case basis. Our in-house scoping team provides detailed price and timeframe estimates (based on codebase size and complexity) for each engagement, ensuring transparency and effective planning.',
    },
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Security audits specifically on the OP Stack or its components.',
      ],
      statement: {
        create: [
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
    testimonials: 'https://www.metricsgarden.xyz/projects/Sherlock',
  },
  {
    id: '0xcd76f92636f76d63419d461b6e79cfc76979b24598d164226e90f27bd5ad996b',
    applicationId:
      '0xcd76f92636f76d63419d461b6e79cfc76979b24598d164226e90f27bd5ad996b',
    projectId:
      '0xc85a922368c764bfe1774e37d299a751f629fa1945131597e6620fe9230337f4',
    category: 'Utility',
    applicationCategory: 'OP_STACK_TOOLING',
    organization: {
      name: 'Ankr',
      description: '',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/ffc77656-bacc-4cb1-a178-d8f67f6f3487.png',
      organizationCoverImageUrl: '',
      socialLinks: {
        website: [],
        farcaster: [],
        twitter: '',
        mirror: '',
      },
      team: ['849685'],
    },
    name: 'Asphere Rollup-as-a-Service',
    description:
      "Asphere's RaaS, a key part of its Scaling Services, equips developers with fast, secure tools for building Rollups and other scaling solutions like Sidechains across blockchain ecosystems. Merging decentralized infrastructure with financial incentives via Liquid Staking, Ankr offers a comprehensive and sustainable development experience, catering to the demand for scalable, OP-secure projects, and establishing itself as a RaaS leader",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/00587623-0070-4b05-8ea3-64ac2669aff7.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/25fd447f-82c1-45cf-955b-98e5a540c247.png',
    socialLinks: {
      website: ['https://www.ankr.com/rollup-as-a-service-raas/'],
      farcaster: [],
      twitter: 'https://x.com/ankr',
      mirror: null,
    },
    team: [
      {
        fid: 849685,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/c0d41924-d771-4556-00fb-8f3080c26000/rectcrop3',
        profile: { bio: { text: 'BD @ Ankr' } },
        username: 'nelsonnoon',
        power_badge: false,
        display_name: 'Nelson Noon',
        active_status: 'inactive',
        verifications: [],
        follower_count: 16,
        custody_address: '0x662fd24386fd511f43c92fd0db48baed3f052c4d',
        following_count: 3,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      revenue: [],
      grants: [
        {
          grant: 'foundation-grant',
          link: 'https://app.superfluid.finance/stream/optimism/0x41bf11e307426c750b84a160891d09a2751cbaa5-0x59215cad2ae02365d79884cb9c1758e403209d5f-0x1828bff08bd244f7990eddcd9b19cc654b33cdb4-0.0?view=0x59215cad2AE02365D79884CB9c1758E403209D5F',
          amount: '50000',
          date: '2024-02-05',
          details:
            'OP Grant for RPC infrastructure scaling bare metal clusters and providing 1m free requests daily contributing to dev growth.',
        },
      ],
    },
    pricingModel: {
      type: 'freemium',
      details:
        'Testnet: Free for 48 hours\nMainnet: Starting at $2,750 monthly and increases with scale and additional add-ons such as bridge, explorer etc.\n',
    },
    impactStatement: {
      category: 'OP_STACK_TOOLING',
      subcategory: [
        'Services for deploying and hosting an OP Chain.',
        'Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.',
      ],
      statement: {
        create: [
          {
            answer:
              'Ankr has constructed a no-code RaaS deployment solution utilizing our already battle tested Optimism RPC infrastructure. As of today, Optimism sees 3 billion monthly requests via the fastest overall latency globally. Ankr plans to directly translate this to the greater Superchain ecosystem when the Optimism solution is live.',
            question:
              'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?',
          },
          {
            answer:
              '"Asphere is already a trusted partner that provides Optimism with node infrastructure, so providing high-quality RaaS is a natural extension of our partnership" - Tess Rinearson, Head of Product at OP Labs\n\n"Our alliance with Asphere provides seamless access to a decentralized infrastructure network with developer connections that are stable, fast, and secure to the community building on Mantle Network" - Zuki Hong, Infra Growth Lead at Mantle',
            question:
              'Who has used your tooling and how has it benefited them?',
          },
        ],
      },
    },
    testimonials:
      'https://www.metricsgarden.xyz/projects/Asphere%20Rollup-as-a-Service',
  },
  {
    id: '0xcf7477b956b4001b44a618139890f8decf0ad34ae55f0db1f01789040a17af0c',
    applicationId:
      '0xcf7477b956b4001b44a618139890f8decf0ad34ae55f0db1f01789040a17af0c',
    projectId:
      '0x5c7ef2866a2370e1e24397b22dfaf937c2b801778335a755b258c7e8fe19d027',
    category: 'Utility',
    applicationCategory: 'OP_STACK_TOOLING',
    organization: {
      name: 'BlockJoy',
      description: '',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/571a38bd-3602-48fd-8dfc-93f6b4913dca.png',
      organizationCoverImageUrl: '',
      socialLinks: {
        website: [],
        farcaster: [],
        twitter: '',
        mirror: '',
      },
      team: ['215046', '850705'],
    },
    name: 'One-click bare metal node deployment',
    description:
      "BlockJoy makes it easy to deploy and manage dedicated, unmetered blockchain nodes on any bare metal infrastructure.\n\nIn 2024, we've expanded our support to include OP-Geth-Archive, OP-Reth-Archive, OP-Reth-Full, OP-Erigon-Archive, OP-Reth-Base-Archive, and OP-Erigon-Zora-Archive.  We also support any custom binaries, node settings, and sidecar applications that the user request. \n\nOur infrastructure maintains snapshots, enabling fast node deployment near the chain tip, and takes care of upgrades, monitoring, and any custom configurations.   The user has the option to deploy nodes on their servers, or our global network of high performance baremetal servers.  This enables super low latency access at a low cost.\n\nHigh-profile projects like Goldsky, 0x, Indexing Company, and Test In Prod have been using BlockJoy nodes throughout the past year.\n\nThe next phase of our project will enable self-serve access for users to integrate custom binaries and images, creating a truly self-serve rollup-as-a-service platform running on high-performance bare metal servers.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/1aac843e-d242-4bf1-aca5-fe698740d276.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/b12dec8b-f04b-4a73-b8fc-7660ef7692b4.png',
    socialLinks: {
      website: ['http://blockjoy.com'],
      farcaster: [],
      twitter: 'https://x.com/BlockJoyWeb3',
      mirror: null,
    },
    team: [
      {
        fid: 215046,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/d31f404c-e38d-4fe7-ead6-425c67aafa00/original',
        profile: { bio: { text: '@blockjoyweb3 👀' } },
        username: 'erxc.eth',
        power_badge: false,
        display_name: 'erxc',
        active_status: 'inactive',
        verifications: [
          '0x3af42cb182344a2991166f2db75688cec60a3a79',
          '0xee97cdf4eed377c6edf4ba267404b16d17550497',
        ],
        follower_count: 26,
        custody_address: '0xf28f853aad0a78a14f9ca356ba9c911411978f0c',
        following_count: 98,
        verified_addresses: {
          eth_addresses: [
            '0x3af42cb182344a2991166f2db75688cec60a3a79',
            '0xee97cdf4eed377c6edf4ba267404b16d17550497',
          ],
          sol_addresses: [],
        },
      },
      {
        fid: 850705,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/1dbd20b1-69fe-43da-5bb8-af1a75cc2300/rectcrop3',
        profile: { bio: { text: '' } },
        username: 'chrisabruce',
        power_badge: false,
        display_name: 'Chris Bruce',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0x4dc1ab1babaf5dcf1c3027bf2b3c41ced4025813',
        following_count: 1,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [{ amount: '5m-10m', year: '2023', details: '' }],
      revenue: [],
      grants: [],
    },
    pricingModel: {
      type: 'pay_to_use',
      details:
        'Dedicated node as a service rates.  These nodes run on high performance baremetal servers around the globe with specs including: AMD Epyc Genoa, DDR5 Ram, NVME5 drives, 10+ GB unmetered network.\n\nOptimism-Reth Full - Monthly rate: $542\nBase-Reth Full - $433\nOP-Erigon Archive - $891\nOP-Geth Archive - $891\nOP-Reth Archive - $650\nBase-Reth Archive - $542',
    },
    impactStatement: {
      category: 'OP_STACK_TOOLING',
      subcategory: [
        'Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.',
        'Services for deploying and hosting an OP Chain.',
      ],
      statement: {
        create: [
          {
            answer:
              "We’ve built our infrastructure from the ground up to manage the deployment and operation of any blockchain node image on high-performance bare metal servers. This not only simplifies the deployment, testing, and operation of OP chains, but also enhances performance, reduces latency, improves decentralization, and significantly lowers costs compared to cloud-based solutions.\n\nOur infrastructure maintains archival snapshots, enabling fast node deployment near the chain tip, and takes care of upgrades, monitoring, and any custom configurations.   The user has the option to deploy nodes on their servers, or our global network of high performance baremetal servers.  This enables super low latency at a low cost.\n\nIn 2024, we've integrated support to include images for OP-Geth-Archive, OP-Reth-Archive, OP-Reth-Full, OP-Erigon-Archive, Base-Reth-Archive, Base-Reth-Full.  We also support any custom binaries, node settings, and sidecar applications that the user request. ",
            question:
              'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?',
          },
          {
            answer:
              'High-profile projects such as Goldsky, 0x, Indexing Company, and Test In Prod have been using BlockJoy.  Some testimonials include:\n\n"We\'re using BlockJoy\'s dedicated nodes to support the development of OP-Erigon, which has been a huge advantage for our team, allowing us to focus on our core development efforts without the headache of maintaining our own node. Additionally, BlockJoy has integrated support for OP-Erigon into their platform, enabling easy one-click deployment. This has made it incredibly simple to scale and helps spread the availability of OP-Erigon to more users, which is vital for the growth of the ecosystem."\n- Taem Park, Test in Prod\n\n“BlockJoy has been a perfect fit for us. Their unmetered nodes offer incredible cost-efficiency, and their system lets us get the benefits of running our own nodes without worrying about upgrades or maintenance, especially when coupled with arguably cheaper pricing than even hosted providers"\n- Brock H., Indexing Company\n',
            question:
              'Who has used your tooling and how has it benefited them?',
          },
        ],
      },
    },
    testimonials:
      'https://www.metricsgarden.xyz/projects/One-click%20bare%20metal%20node%20deployment',
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
    team: [
      {
        fid: 5882,
        object: 'user',
        pfp_url: 'https://i.imgur.com/w1imp0V.jpg',
        profile: { bio: { text: 'bug huntooor' } },
        username: 'obront',
        power_badge: false,
        display_name: 'obront',
        active_status: 'inactive',
        verifications: [],
        follower_count: 26,
        custody_address: '0x4ac17bf46fff1d6174403c43e7a96413aa102869',
        following_count: 62,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 4226,
        object: 'user',
        pfp_url: 'https://i.imgur.com/Lu9oXEo.jpg',
        profile: { bio: { text: '...' } },
        username: 'ratan',
        power_badge: false,
        display_name: 'Ratan Kaliani',
        active_status: 'inactive',
        verifications: [],
        follower_count: 10,
        custody_address: '0x61595d6cbe5d063c9c3fe3ac2f9f9d652a8680d5',
        following_count: 83,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 3735,
        object: 'user',
        pfp_url: 'https://i.imgur.com/ZjbQBaj.jpg',
        profile: { bio: { text: 'boo' } },
        username: 'jtguibas',
        power_badge: false,
        display_name: 'jtguibas',
        active_status: 'inactive',
        verifications: [],
        follower_count: 74,
        custody_address: '0xef822d0b449cc53a262a659efb0de91067634e8a',
        following_count: 75,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 5323,
        object: 'user',
        pfp_url: 'https://i.imgur.com/6XwFdDv.jpg',
        profile: { bio: { text: 'zkSNARK enjoyer' } },
        username: 'uma',
        power_badge: false,
        display_name: 'Uma',
        active_status: 'inactive',
        verifications: [],
        follower_count: 204,
        custody_address: '0x0e3fa735cbdaee0e36a9c47139c4679552131fb0',
        following_count: 77,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: 'b44c44de-1741-4467-9f40-e98b0d5e43a3',
        type: 'github',
        url: 'https://github.com/succinctlabs/op-succinct',
        name: 'OP Succinct',
        description:
          'Upgrade any OP Stack chain to use ZKPs using SP1 in 1 hour.',
        verified: true,
        openSource: true,
        containsContracts: true,
        createdAt: '2024-09-03T06:46:45.045Z',
        updatedAt: '2024-09-03T21:54:54.119Z',
        projectId:
          '0xfad78fad680d407f81e7fd46632b4b4936676d1776a5cbf02694b94698495746',
        metrics: {
          artifact_url: 'https://github.com/succinctlabs/op-succinct',
          num_contributors: '2.0',
          num_trusted_contributors: '2.0',
          num_contributors_last_6_months: '2.0',
          num_stars: '71',
          num_trusted_stars: '1.0',
          trust_weighted_stars: '0.0856842894796554',
          num_forks: '7',
          num_trusted_forks: '0.0',
          trust_weighted_forks: '1.5261274547957256e-05',
          trust_rank_for_repo_in_category: '6.0',
          age_of_project_years: '0.16666666666674246',
          license: 'Apache-2.0',
        },
      },
      {
        id: '1c57e072-0574-447a-bbd8-e9dd59e892fe',
        type: 'github',
        url: 'https://github.com/succinctlabs/sp1',
        name: 'SP1',
        description:
          'A blazing fast, general-purpose zkVM that makes ZKPs accessible to any developer.',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-03T21:54:31.714Z',
        updatedAt: '2024-09-03T21:54:54.753Z',
        projectId:
          '0xfad78fad680d407f81e7fd46632b4b4936676d1776a5cbf02694b94698495746',
        metrics: {
          artifact_url: 'https://github.com/succinctlabs/sp1',
          num_contributors: '110.0',
          num_trusted_contributors: '11.0',
          num_contributors_last_6_months: '110.0',
          num_stars: '927',
          num_trusted_stars: '34.0',
          trust_weighted_stars: '0.0845123591716126',
          num_forks: '277',
          num_trusted_forks: '7.0',
          trust_weighted_forks: '0.0079171228112408',
          trust_rank_for_repo_in_category: '5.0',
          age_of_project_years: '0.5833333333332575',
          license: 'Apache-2.0',
        },
      },
    ],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [
        {
          amount: 'above-50m',
          year: '2024',
          details: 'Raised a seed and series A funding round from Paradigm.',
        },
      ],
      revenue: [],
      grants: [
        {
          grant: 'foundation-mission',
          link: 'https://github.com/ethereum-optimism/ecosystem-contributions/issues/76',
          amount: '15000',
          date: '2023-07-25',
          details: '',
        },
      ],
    },
    pricingModel: {
      type: 'freemium',
      details:
        'SP1 is our zkVM that is open-source and will always be free to use locally. We also provide a freemium proof generation service (users start with free credits and then pay after a certain volume of proofs) to make generating SP1 proofs simple, so users can use SP1 without setting up their own proving infrastructure.',
    },
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
      ],
      statement: {
        create: [
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
    testimonials:
      'https://www.metricsgarden.xyz/projects/OP%20Succinct%3A%20Full%20ZK%20Validity%20Proving%20of%20OP%20Stack%20Rollups%20with%20SP1',
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
        profile: { bio: { text: 'a.k.a optimizoor' } },
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
        id: '34e3affe-b0df-4926-97b9-2b1b75516bb8',
        type: 'github',
        url: 'https://github.com/Vectorized/solady',
        name: 'Solady',
        description: 'Optimized Solidity snippets',
        verified: true,
        openSource: true,
        containsContracts: true,
        createdAt: '2024-08-23T20:16:00.613Z',
        updatedAt: '2024-08-23T20:17:42.572Z',
        projectId:
          '0x9151666888d0ca532a529be98a50d2eb992988117e202163f865fa9a27eb7149',
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
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '99379',
          date: '',
          details: null,
        },
        {
          grant: 'retroFunding',
          link: null,
          amount: '45018',
          date: '',
          details: null,
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
      ],
      statement: {
        create: [
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
    testimonials: 'https://www.metricsgarden.xyz/projects/Solady',
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
          bio: { text: 'Securing web3 with CrowdSec at Immunefi' },
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
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
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
    },
    pricingModel: {
      type: 'pay_to_use',
      details:
        'Immunefi offers several security products. The first is our traditional bug bounty program. The minimum package starts around ~ $18K for a year of coverage, and includes drafting of the program (scope/rewards by threat levels etc), education to the SR community, marketing, managed triage, mitigation reviews, and more. We try to make the bug bounty program accessible for projects of all shapes and sizes. We offer additional services that increase price based on projects\' stated needs. We leverage a network of around 45,000 security researchers from around the world to provide "Crowd Security" resulting in always-on coverage for projects that care deeply about security. Another is our Invite Only Program, which taps a select group of Security Researchers based on our Hacker Sync algorithm, in order to provide the best talent specific to a projects codebase, for a security audit (ideal for closed source projects). Finally, Immunefi offers audit competitions which are time-bound audits that leverage our network of security researchers to hunt for bugs in order to unlock rewards. For audit competitions we take a percentage of the prize pool ranging from 20-27.5% based on parameters set by the customer. Immunefi\'s products offer incredible ROI whether a project is bootstrapped in testnet or established with millions in TVL. ',
    },
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Security audits specifically on the OP Stack or its components.',
      ],
      statement: {
        create: [
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
    testimonials:
      'https://www.metricsgarden.xyz/projects/Immunefi%20Bug%20Bounty%20Platform',
  },
  {
    id: '0xda3416979010249d4c8095d87a539006743741be970d41c0b5affca2fdfbaeef',
    applicationId:
      '0xda3416979010249d4c8095d87a539006743741be970d41c0b5affca2fdfbaeef',
    projectId:
      '0x326b198b5e8fafe18aa163b5a6e3e1c2a5d539eb0006245b40ba4dbc927f7953',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: {
      name: 'Robust Incentives Group',
      description:
        'The Robust Incentives Group is an Ethereum Foundation research team dedicated to the study of protocol mechanisms through the lens of game theory, mechanism design, crypto-economics, formal methods and data science. ',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/cc95bbba-fb92-47c6-acbb-b039210304f3.png',
      organizationCoverImageUrl: '',
      socialLinks: {
        website: ['https://rig.ethereum.org'],
        farcaster: [],
        twitter: '',
        mirror: '',
      },
      team: ['5451', '16191', '3329', '19820', '9068', '215506'],
    },
    name: 'RIG Ethereum Core Research',
    description:
      "The Robust Incentives Group is an Ethereum Foundation research team dedicated to the study of protocol mechanisms through the lens of game theory, mechanism design, crypto-economics, formal methods and data science. \n\nOver the past year, we have significantly contributed to a broad array of discussions on improving Ethereum’s core protocol, such as the decentralization of its staking set, its ability to enforce and defend its neutrality, as well as to preserve its security.\n\nWe briefly introduce our main research directions from the past year.\n\nCensorship resistance. We are developing mechanisms to ensure the L1 protocol maintains chain neutrality by empowering Ethereum’s decentralized set of validators to enforce the inclusion of transactions in Ethereum blocks through inclusion lists (ILs). Over the past year, we have explored the design space and made significant progress towards a proposal called Fork-Choice Enforced Inclusion Lists (FOCIL), which we believe could be considered for inclusion in a future Ethereum upgrade. We have also collaborated with the Commit-Boost effort to develop out-of-protocol inclusion lists bridging the gap until a protocol solution is available.\n\nTiming games. Nearly a year ago, we named and introduced the concept of timing games in a publication, describing how proposers have an incentive to wait until the last moment to propose their blocks in order to maximize MEV rewards. Since then, we have observed timing games occurring in practice and have been working on mitigation strategies to maintain consensus stability. Timing games were central to critical discussions by the Ethereum research and builder communities over the last year.\n\nPBS. Our group has been at the forefront of PBS research for more than two years now. During the time period considered for this retroactive funding, we have deepened our understanding of the practice of PBS with research supporting EIP-7732 (“Enshrined Proposer–Builder Separation”). We have also been active in exploring MEV burn mechanisms, as well as the newer idea of “Attester–Proposer Separation”, with posts and publications.\n\nStaking economics. This group put forward the idea of rainbow staking dealing with an ever-changing staking landscape. It intends to embrace the heterogeneity of Ethereum's staking set and foresees different roles for different types of participants. Separately but related, this group has proposed changes to Ethereum's issuance policy in order to maintain a healthy staking level that is long-term sustainable. \n\nIf any of this catches your attention, please take a look at rig.ethereum.org to find links to all resources.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/b9dd7341-7c9c-43cf-bc3d-3746ed7b60d4.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/44a0a772-d44a-4c98-9418-2bf872ca008b.png',
    socialLinks: {
      website: ['https://rig.ethereum.org'],
      farcaster: [],
      twitter: null,
      mirror: null,
    },
    team: [
      {
        fid: 5451,
        object: 'user',
        pfp_url:
          'https://i.seadn.io/s/raw/files/c96d616068088202ad5b3cc5dfadb372.png?w=500&auto=format',
        profile: {
          bio: {
            text: 'Robust Incentives Group @ Ethereum Foundation\n\nhttps://rig.ethereum.org',
          },
        },
        username: 'barnabe',
        power_badge: false,
        display_name: 'Barnabé Monnot',
        active_status: 'inactive',
        verifications: ['0x915aa445720020eb1a59151e831111369b08e118'],
        follower_count: 1993,
        custody_address: '0xe241fedafe4938a6e0381c792d5abc7703de3062',
        following_count: 157,
        verified_addresses: {
          eth_addresses: ['0x915aa445720020eb1a59151e831111369b08e118'],
          sol_addresses: [],
        },
      },
      {
        fid: 16191,
        object: 'user',
        pfp_url: 'https://i.imgur.com/OoAEhsf.jpg',
        profile: { bio: { text: 'ethereum protocol research' } },
        username: '!16191',
        power_badge: false,
        display_name: 'caspar',
        active_status: 'inactive',
        verifications: ['0x67f52cb4df6049510073d2141e1b770ec482625a'],
        follower_count: 368,
        custody_address: '0x7cb3ab2a94fa5bc7d26e60a92f17f7eaf0433a06',
        following_count: 196,
        verified_addresses: {
          eth_addresses: ['0x67f52cb4df6049510073d2141e1b770ec482625a'],
          sol_addresses: [],
        },
      },
      {
        fid: 3329,
        object: 'user',
        pfp_url: 'https://i.imgur.com/5YIq5P5.jpg',
        profile: {
          bio: {
            text: 'research @Ethereum Foundation, Robust Incentives Group',
          },
        },
        username: 'soispoke',
        power_badge: false,
        display_name: 'soispoke',
        active_status: 'inactive',
        verifications: ['0x7c236a719c0af04c78ec0074b44734c3573d71a1'],
        follower_count: 219,
        custody_address: '0xf7baa1a922fea51d5c191778a9fb678738ab9c90',
        following_count: 139,
        verified_addresses: {
          eth_addresses: ['0x7c236a719c0af04c78ec0074b44734c3573d71a1'],
          sol_addresses: [],
        },
      },
      {
        fid: 19820,
        object: 'user',
        pfp_url: 'https://i.imgur.com/ka51C68.jpg',
        profile: {
          bio: { text: 'Research at Robust Incentives Group, EF' },
        },
        username: 'julianma',
        power_badge: false,
        display_name: 'Julian',
        active_status: 'inactive',
        verifications: ['0x554dcbaf9d1df74c195490d64e37ec0fdfed3c90'],
        follower_count: 162,
        custody_address: '0x0f440356019c18ec1fb58b0c2c9ef469293953ba',
        following_count: 109,
        verified_addresses: {
          eth_addresses: ['0x554dcbaf9d1df74c195490d64e37ec0fdfed3c90'],
          sol_addresses: [],
        },
      },
      {
        fid: 9068,
        object: 'user',
        pfp_url: 'https://i.imgur.com/GIdknFV.jpg',
        profile: {
          bio: {
            text: 'ethereum protocol research /ethrd + Crypto x AI /dacc ',
          },
        },
        username: 'davidecrapis',
        power_badge: false,
        display_name: 'Davide Crapis',
        active_status: 'inactive',
        verifications: ['0x0afb51f268532abdc517a6c206036ace2d60c0fc'],
        follower_count: 419,
        custody_address: '0x215c9b194e3fe26e92a771da0d7dc33d54fcda15',
        following_count: 115,
        verified_addresses: {
          eth_addresses: ['0x0afb51f268532abdc517a6c206036ace2d60c0fc'],
          sol_addresses: [],
        },
      },
      {
        fid: 215506,
        object: 'user',
        pfp_url: 'https://i.imgur.com/I5ED4IO.jpg',
        profile: {
          bio: { text: 'Developing transparent finance for @ethereum' },
        },
        username: 'anderselowsson',
        power_badge: false,
        display_name: 'Anders Elowsson ',
        active_status: 'inactive',
        verifications: [],
        follower_count: 183,
        custody_address: '0xabc37a5e7bd1a18d2e88cabed9d911a59e3d25df',
        following_count: 74,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [],
    packages: [],
    links: [
      {
        url: 'https://rig.ethereum.org',
        name: 'RIG website',
        description:
          'The RIG website has an exhaustive list of all our writings/talks/papers.',
      },
    ],
    contracts: [],
    grantsAndFunding: { ventureFunding: [], revenue: [], grants: [] },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Research which informs Ethereum core development'],
      statement: {
        create: [
          {
            answer:
              'RIG contributes to the research and development of the Ethereum core protocol, upon which the OP stack relies. Inherently the Superchain benefits from an improved and resilient settlement layer, i.e. Ethereum.\n\nThere are particular research topics that support the OP Stack, such as PBS research. Today on Ethereum L1, the vast majority of blocks is produced by relying on trusted third-parties called relays. Our work on ePBS aims to remove this trust assumption. Fewer trust assumptions on Ethereum are also inherited by the Superchain, such as forced transaction inclusion. PBS research is also relevant to the OP Stack, who may [borrow](https://x.com/tyneslol/status/1813672789112737954) its concepts for the decentralization of their sequencer.\n',
            question:
              'How does your project support, or is a dependency of, the OP Stack?',
          },
          {
            answer:
              'We briefly explore the link between our research and its impact on the OP stack more explicitly. \n\n**Censorship resistance.** Our work helps Ethereum maintain its credible neutrality, ensuring all valid transactions are eventually included. This property is directly relevant to OP Chains, e.g. the guaranteed ability to force a transaction’s inclusion on OP mainnet by sending a transaction on Ethereum, or the ability to force the inclusion of a fraud proof on L1.\n\n**Timing games.** At the limit, timing games are harmful for the stability of consensus formation, especially if proposer timing games spiral into attester timing games. Thus, our work helps to maintain reliable consensus formation of Ethereum, the Superchain’s settlement layer.\n\n**Staking economics.** Our work towards maintaining a healthy staking environment, both in its composition and overall staking levels, helps to sustain important properties of a good settlement layer.\n',
            question:
              'How would it impact the OP Stack if your project ceased to exist?',
          },
        ],
      },
    },
    testimonials:
      'https://www.metricsgarden.xyz/projects/RIG%20Ethereum%20Core%20Research',
  },
  {
    id: '0xdbb1c00bcb783a6d57f89e21708b28a2f46e68012eba282142a05f2616c90dce',
    applicationId:
      '0xdbb1c00bcb783a6d57f89e21708b28a2f46e68012eba282142a05f2616c90dce',
    projectId:
      '0x881736756bdcc544ef526f7719608161ca00c6aed5d8f9b8837bdc1914f2abc6',
    category: 'Utility',
    applicationCategory: 'OP_STACK_TOOLING',
    organization: null,
    name: 'Understanding-Optimism-Codebase ',
    description:
      'This document provides a comprehensive explanation of the Optimism codebase, aiming to help newcomers to Optimism quickly get started and truly understand how the code flow in the codebase works.\nWritten in two language versions right now, EN & CN.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/34fca888-92f0-44e7-be25-bcb1da8e28a2.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/904d0d9d-e969-4b21-9251-20b15e3a79fa.png',
    socialLinks: {
      website: [
        'https://github.com/joohhnnn/Understanding-Optimism-Codebase',
        'https://github.com/joohhnnn/Understanding-Optimism-Codebase-CN',
      ],
      farcaster: [],
      twitter: 'https://x.com/JoohhnnnChase',
      mirror: null,
    },
    team: [
      {
        fid: 191318,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/0e3f80da-ae32-4a7c-a240-cc3ec6019000/original',
        profile: { bio: { text: 'Hi there' } },
        username: 'joohhnnn',
        power_badge: false,
        display_name: 'joohhnnn',
        active_status: 'inactive',
        verifications: [],
        follower_count: 15,
        custody_address: '0xd316740dfd65ca564b4b02e1298f0b7193c920e2',
        following_count: 80,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: 'ae515155-7ef6-48da-afa4-5c9ce3ab6a3d',
        type: 'github',
        url: 'https://github.com/joohhnnn/Understanding-Optimism-Codebase',
        name: 'Understanding-Optimism-Codebase',
        description:
          'This guide is crafted to assist both newcomers and seasoned developers in navigating the Optimism codebase with ease.',
        verified: true,
        openSource: false,
        containsContracts: false,
        createdAt: '2024-08-29T07:34:30.627Z',
        updatedAt: '2024-09-04T20:49:42.640Z',
        projectId:
          '0x881736756bdcc544ef526f7719608161ca00c6aed5d8f9b8837bdc1914f2abc6',
      },
      {
        id: 'b637e9ae-594b-442c-b808-fe55d96b750b',
        type: 'github',
        url: 'https://github.com/joohhnnn/Understanding-Optimism-Codebase-CN',
        name: 'Understanding-Optimism-Codebase-CN',
        description:
          'This guide is crafted to assist both newcomers and seasoned developers in navigating the Optimism codebase with ease in Chinese version.',
        verified: true,
        openSource: false,
        containsContracts: false,
        createdAt: '2024-09-04T20:48:37.568Z',
        updatedAt: '2024-09-04T20:49:43.269Z',
        projectId:
          '0x881736756bdcc544ef526f7719608161ca00c6aed5d8f9b8837bdc1914f2abc6',
      },
    ],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '29814',
          date: '',
          details: null,
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_TOOLING',
      subcategory: [
        'Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.',
      ],
      statement: {
        create: [
          {
            answer:
              "# Understanding Optimism Codebase\n\nThis document provides a comprehensive explanation of the Optimism codebase, aiming to help newcomers to Optimism quickly get started and truly understand how the code flow in the codebase works in two language version, EN & CN.\n\nDue to the word limit, only the first few will be briefly introduced. For a complete introduction, check:Due to the word limit, only the first few will be briefly introduced. For a complete introduction, see.\n\n## Brief Introduction：\n\n- **00-how-sequencer-generates-L2-blocks**\n  - The sequencer plays a critical role in Layer 2 (L2) solutions, handling transaction aggregation, L1 data derivation, L2 block generation, and proposing the L2 state root in L1. This document explains the sequencer's process for generating L2 blocks, focusing on the creation of a block payload, event loop structure, code flow for block generation, and error handling.",
            question:
              'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?',
          },
          {
            answer:
              "This document includes, but is not limited to, assisting engineers from teams like Avail and Eigenlayer to quickly understand the OP-stack mechanism from perspectives different from the official specs. I've received numerous inquiries through various channels seeking further details, and I have helped answer these questions and improve the documentation. The document is also included in the Optimism developer repository to help more people get started quickly. The Chinese version has been published on the 'learnblockchain' forum in the Chinese blockchain community, accumulating tens of thousands of views.",
            question:
              'Who has used your tooling and how has it benefited them?',
          },
        ],
      },
    },
    testimonials:
      'https://www.metricsgarden.xyz/projects/Understanding-Optimism-Codebase%20',
  },
  {
    id: '0xdbc857989b31f11432bed73b26e7316ce7aa749662088b0b95739250d6aff9ef',
    applicationId:
      '0xdbc857989b31f11432bed73b26e7316ce7aa749662088b0b95739250d6aff9ef',
    projectId:
      '0xbb3291f2e0a56c4f8fe8250613c5487e4447fce05bb75854472fe3e01eebaffa',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: null,
    name: 'Besu',
    description: 'Besu client teams ',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/8c45caea-3468-43bc-a5a3-358b83f51135.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/577869f8-47cc-4246-8592-155aff000689.png',
    socialLinks: {
      website: [],
      farcaster: [],
      twitter: null,
      mirror: null,
    },
    team: [
      {
        fid: 846237,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/d9eaacf1-c9b1-45c3-7371-a5e64fc30d00/rectcrop3',
        profile: { bio: { text: '' } },
        username: 'monz-eth',
        power_badge: false,
        display_name: 'Monz',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0xb3b1a21752f90a5132b97be882ad53e076296bfb',
        following_count: 0,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [],
    packages: [],
    links: [
      {
        url: 'https://github.com/hyperledger/besu',
        name: 'Hyperledger Besu',
        description:
          'The Besu execution client has been instrumental in client diversity efforts, in supporting Ethereum Mainnet via EIP-1559, and provides a Java implementation of the Ethereum protocol. ',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '48400',
          date: '',
          details: null,
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Ethereum client implementations'],
      statement: {
        create: [
          {
            answer:
              'EIP-1559: Besu championed EIP-1559 and led its adoption on Mainnet, with the first client implementation. This is part of the Bedrock fee structure. \n\nBesu is run on ~15% of Mainnet L1 nodes that secure the L2.\n\nBesu team is active in Mainnet development. This supports L2 through work on 4844 and other L2-pertinent spec updates. A lot of these advancements rollup to the OP-Stack in one form or another. \n\nBesu is being supported on Optimism as another node implementation via https://github.com/optimism-java/op-besu',
            question:
              'How does your project support, or is a dependency of, the OP Stack?',
          },
          {
            answer:
              'The Besu team is filled with Ethereum Core Developers that advance Ethereum L1 and promote client diversity. Our team takes part in shaping and testing specs, and participation in EIP writing, editing, workshops, research, and more. Ethereum R&D would lose 20 individual devs that are progressing various topics like Verkle/statelessness (where we are translating and applying  a lot of the advancements of our Bonsai trie structure). \n\nAdditionally, client diversity on 15% of Ethereum validators would suffer on L1. \n\nThe Besu client serves many Enterprise private networks as well. Many of these enterprise networks build out use-cases like CBDCs, clearing and settlement, trade, and more that are seeking access to public networks and rollups. The Besu team has consistently pushed the "convergence" theory of public and private networks to bring more enterprises and institutions on-chain. We seek to further this work with L2s and app-chains. \n\n',
            question:
              'How would it impact the OP Stack if your project ceased to exist?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/Besu',
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
    team: [
      {
        fid: 245756,
        object: 'user',
        pfp_url: 'https://i.imgur.com/aphr8Wf.jpg',
        profile: {
          bio: {
            text: 'Building better web3\n\nCreator of web3:// and EthStorage',
          },
        },
        username: 'qiz',
        power_badge: false,
        display_name: 'Qi Zhou',
        active_status: 'inactive',
        verifications: [],
        follower_count: 23,
        custody_address: '0xf96087ff8ae13e7914238e8cd21dcc6e98cae6cd',
        following_count: 24,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 498701,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/98e02b3c-5957-40cb-2897-6f5f6bb9bc00/rectcrop3',
        profile: { bio: { text: 'EthStorage ZK Engineer' } },
        username: 'buaa',
        power_badge: false,
        display_name: 'Po@EthStorage.io',
        active_status: 'inactive',
        verifications: ['0xb3329fcd12c175a236a02ec352044ce44dc2c3ba'],
        follower_count: 8,
        custody_address: '0xeab914a339e4d5bb47c6338aa925607ab274a6af',
        following_count: 78,
        verified_addresses: {
          eth_addresses: ['0xb3329fcd12c175a236a02ec352044ce44dc2c3ba'],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        id: '7b40191c-ada3-4683-b596-e1aacc837774',
        type: 'github',
        url: 'https://github.com/ethstorage/optimism',
        name: '',
        description:
          "The 'develop' contains the latest development of multi-section fault proof.",
        verified: true,
        openSource: true,
        containsContracts: true,
        createdAt: '2024-09-05T05:39:53.281Z',
        updatedAt: '2024-09-05T05:40:31.858Z',
        projectId:
          '0xdbc21abd2657c839060753eada61f93a6d835a0a2f3bdfb530339a2c85f23516',
        metrics: {
          artifact_url: 'https://github.com/ethstorage/optimism',
          num_contributors: '8.0',
          num_trusted_contributors: '4.0',
          num_contributors_last_6_months: '6.0',
          num_stars: '2',
          num_trusted_stars: '1.0',
          trust_weighted_stars: '0.005443923887763',
          num_forks: '2',
          num_trusted_forks: '0.0',
          trust_weighted_forks: '0.0001263660485679',
          trust_rank_for_repo_in_category: '11.0',
          age_of_project_years: '1.0833333333332575',
          license: 'MIT',
        },
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
      revenue: [],
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
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
      ],
      statement: {
        create: [
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
    testimonials:
      'https://www.metricsgarden.xyz/projects/Research%20and%20development%20on%20multi-section%20fault%20dispute%20game',
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
        profile: { bio: { text: '' } },
        username: 'benprice',
        power_badge: false,
        display_name: 'Ben Price',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0x295e1018f05f282c89fbc134127b71b356abfb13',
        following_count: 0,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
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
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: '80d7fa9e-7e1f-4f94-85e1-108374f636c3',
        type: 'github',
        url: 'https://github.com/gelatodigital/optimism',
        name: '1-Click Price Oracle',
        description:
          'Natively integrated price oracles. Please note that all changes are present in the gelato/oracle branch rather than the default develop branch.',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-05T07:57:26.529Z',
        updatedAt: '2024-09-05T08:22:41.117Z',
        projectId:
          '0x36dd18c9e9a4bba1acfd94263e1d53c69a24376bf7129e38d60c83ef461e6ab5',
        metrics: {
          artifact_url: 'https://github.com/gelatodigital/optimism',
          num_contributors: '1.0',
          num_trusted_contributors: '0.0',
          num_contributors_last_6_months: '1.0',
          num_stars: '0',
          num_trusted_stars: '0.0',
          trust_weighted_stars: '0.0',
          num_forks: '0',
          num_trusted_forks: '0.0',
          trust_weighted_forks: '0.0',
          trust_rank_for_repo_in_category: '19.0',
          age_of_project_years: '1.5',
          license: 'MIT',
        },
      },
      {
        id: '3ad7f1d1-e14e-44b8-bba5-0a210a490957',
        type: 'github',
        url: 'https://github.com/gelatodigital/gelato-native-oracle-nft-example',
        name: 'Example NFT Mint',
        description:
          'This repository demonstrates an NFT mint using the native oracle. ',
        verified: true,
        openSource: false,
        containsContracts: true,
        createdAt: '2024-09-05T08:15:17.262Z',
        updatedAt: '2024-09-05T08:22:40.499Z',
        projectId:
          '0x36dd18c9e9a4bba1acfd94263e1d53c69a24376bf7129e38d60c83ef461e6ab5',
        metrics: {
          artifact_url:
            'https://github.com/gelatodigital/gelato-native-oracle-nft-example',
          num_contributors: '',
          num_trusted_contributors: '',
          num_contributors_last_6_months: '',
          num_stars: '1',
          num_trusted_stars: '',
          trust_weighted_stars: '0.0',
          num_forks: '0',
          num_trusted_forks: '',
          trust_weighted_forks: '0.0',
          trust_rank_for_repo_in_category: '40.0',
          age_of_project_years: '',
          license: '',
        },
      },
      {
        id: '49c6edaf-f36d-46a1-863e-b94fe82b7464',
        type: 'github',
        url: 'https://github.com/gelatodigital/gelato-native-oracle-sdk',
        name: 'Oracle Solidity SDK',
        description:
          'This repository contains the L2PriceOracle Solidity SDK. This is also published on npm.',
        verified: true,
        openSource: false,
        containsContracts: true,
        createdAt: '2024-09-05T08:13:52.266Z',
        updatedAt: '2024-09-05T08:22:41.168Z',
        projectId:
          '0x36dd18c9e9a4bba1acfd94263e1d53c69a24376bf7129e38d60c83ef461e6ab5',
        metrics: {
          artifact_url:
            'https://github.com/gelatodigital/gelato-native-oracle-sdk',
          num_contributors: '',
          num_trusted_contributors: '',
          num_contributors_last_6_months: '',
          num_stars: '0',
          num_trusted_stars: '',
          trust_weighted_stars: '0.0',
          num_forks: '0',
          num_trusted_forks: '',
          trust_weighted_forks: '0.0',
          trust_rank_for_repo_in_category: '41.0',
          age_of_project_years: '',
          license: '',
        },
      },
      {
        id: 'eabc6d1c-d112-446c-8377-21252207afad',
        type: 'github',
        url: 'https://github.com/gelatodigital/gelato-native-oracle-periphery',
        name: 'Periphery Gelato Native Oracle L1 Smart Contract & Web3Function',
        description:
          'This repository contains the L1PriceOracle smart contract and Web3 Function responsible for pushing Pyth prices every two seconds.',
        verified: true,
        openSource: false,
        containsContracts: true,
        createdAt: '2024-09-05T08:14:35.268Z',
        updatedAt: '2024-09-05T08:22:41.200Z',
        projectId:
          '0x36dd18c9e9a4bba1acfd94263e1d53c69a24376bf7129e38d60c83ef461e6ab5',
        metrics: {
          artifact_url:
            'https://github.com/gelatodigital/gelato-native-oracle-periphery',
          num_contributors: '',
          num_trusted_contributors: '',
          num_contributors_last_6_months: '',
          num_stars: '0',
          num_trusted_stars: '',
          trust_weighted_stars: '0.0',
          num_forks: '0',
          num_trusted_forks: '',
          trust_weighted_forks: '0.0',
          trust_rank_for_repo_in_category: '42.0',
          age_of_project_years: '',
          license: '',
        },
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
      ventureFunding: [
        {
          amount: '10m-25m',
          year: '2021',
          details:
            'This project is part of contributions made by Gelato. All funding information can be seen in other project.',
        },
      ],
      revenue: [],
      grants: [],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Work on core components of the OP Stack, including client implementations, modules, and modifications.',
      ],
      statement: {
        create: [
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
    testimonials:
      'https://www.metricsgarden.xyz/projects/1-Click%20Price%20Oracle',
  },
  {
    id: '0xe65a2684781bdc49edc859a49d1e3f692a0f58fabcd8fe49098df3a0f9ad69a6',
    applicationId:
      '0xe65a2684781bdc49edc859a49d1e3f692a0f58fabcd8fe49098df3a0f9ad69a6',
    projectId:
      '0x518706ed6e45ba99aaf9fe6ed3d647373cd67b8632492e59c294b835758c2194',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: null,
    name: 'quic-go',
    description:
      'quic-go is an open-source implementation of the QUIC protocol (RFC 9000) in Go.\nIt is a general-purpose QUIC implementation that, among others, provides support for HTTP/3 (RFC 9114), WebTransport (soon-to-be an RFC) and CONNECT-UDP (RFC 9298).\n\nquic-go powers QUIC support in Prysm. The main advantages for the Ethereum network are:\n1. Lower handshake latency: Establishing a libp2p-capable QUIC connection saves ~3 network roundtrips compared to TCP.\n2. Faster transfer performance due to built-in stream multiplexing, lack of head-of-line blocking, advanced loss recovery and congestion control.\n3. Easy interoperability: Every major programming language provides a QUIC interface. This is a significant simplification to the connection setup logic (multistream + Noise + mplex / yamux) necessary for TCP.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/d231af7c-780d-4e4c-83bb-45c2c6023876.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/2753584c-d289-41b8-a7c1-07f595b6575e.png',
    socialLinks: {
      website: ['https://quic-go.net'],
      farcaster: [],
      twitter: null,
      mirror: null,
    },
    team: [
      {
        fid: 843709,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/18241e4a-f9ee-4ab5-5c01-56d6820e2900/rectcrop3',
        profile: { bio: { text: '' } },
        username: 'marten-seemann',
        power_badge: false,
        display_name: 'Marten',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0x6b2c63b67b258166208d4bbccbef3deda9fd3df5',
        following_count: 0,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: '242fe49a-6adb-4150-a6c4-62aa434e3bb4',
        type: 'github',
        url: 'https://github.com/quic-go/quic-go',
        name: 'quic-go',
        description: '',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-08-30T06:46:54.597Z',
        updatedAt: '2024-08-31T06:02:53.687Z',
        projectId:
          '0x518706ed6e45ba99aaf9fe6ed3d647373cd67b8632492e59c294b835758c2194',
        metrics: {
          artifact_url: 'https://github.com/quic-go/quic-go',
          num_contributors: '639.0',
          num_trusted_contributors: '4.0',
          num_contributors_last_6_months: '71.0',
          num_stars: '9983',
          num_trusted_stars: '12.0',
          trust_weighted_stars: '0.0004139584447415',
          num_forks: '1301',
          num_trusted_forks: '4.0',
          trust_weighted_forks: '0.000277873476353',
          trust_rank_for_repo_in_category: '26.0',
          age_of_project_years: '8.416666666666742',
          license: 'MIT',
        },
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://quic-go.net',
        name: 'quic-go documentation',
        description: 'In-depth documentation of quic-go and all its features.',
      },
    ],
    contracts: [],
    grantsAndFunding: { ventureFunding: [], revenue: [], grants: [] },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Ethereum client implementations'],
      statement: {
        create: [
          {
            answer:
              'quic-go significantly simplifies the process of establishing libp2p connections in Prysm. Unlike the old TCP-based approach, which required multiple bespoke layers (multistream, Noise, mplex / yamux), QUIC is a standardized, widely adopted protocol with ready-to-use implementations available in most programming languages. With 2 major implementation (Prsym and Lighthouse) now offering QUIC support, it becomes feasible to launch QUIC-only Ethereum implementation, reducing the complexity and development overhead for new Ethereum clients, promoting client diversity.',
            question:
              'How does your project support, or is a dependency of, the OP Stack?',
          },
          {
            answer:
              'If quic-go ceased to exist, the Ethereum network would lose a vital alternative to the TCP-based connection methods, decreasing flexibility and potentially slowing new client deployment. Relying solely on the older, more complex TCP-based approach would reduce resilience, as there would be no fallback in case of vulnerabilities or performance issues in those layers. Having two distinct transport options, including the more straightforward QUIC, increases the network’s security and fault tolerance, directly contributing to the reliability and scalability of Optimism’s transactions.',
            question:
              'How would it impact the OP Stack if your project ceased to exist?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/quic-go',
  },
  {
    id: '0xe69b6f216d79523341253eb2cfec0ff615d0d272723ebc463140702b961d65c0',
    applicationId:
      '0xe69b6f216d79523341253eb2cfec0ff615d0d272723ebc463140702b961d65c0',
    projectId:
      '0xfef0eaf3c745a7175550a75ecfc0056d0a3276eeb0ce8fbc45dd7254411985ec',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: {
      name: 'smoo.th',
      description:
        'Smooth is a versatile platform providing cryptographic open-source tools designed to redefine and enhance how users interact with their wallets and Dapps. It is powered by Account Abstraction (EIP 4337) to aims to provide:\n- Frictionless onboarding and interactions using familiar authentication (TouchID/FaceID) through the use of a WebAuthn-compatible UserOp.\n- Cryptographic foundations to build the Dapps of the next decade.\n',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/15d31bf9-94de-4696-a6e1-735e2b9b7864.png',
      organizationCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/0af8e8da-0016-429e-91dd-45f5d66151a7.png',
      socialLinks: {
        website: ['https://github.com/get-smooth/crypto-lib'],
        farcaster: [],
        twitter: '@RenaudDubois10',
        mirror: null,
      },
      team: ['585499'],
    },
    name: 'Smoo.th Cryptolib',
    description:
      'This project is eligible for round 5 as a Research project. \n\nSmoo.th conducts research project to push generic elliptic computations over Ethereum. While previous FCL enabled only P256, SCL, delivered this year enables any curve.\n\n\nAs such, it developped two cryptolibs : \n- FCL, currently used by Coinbase smarwallet, metamask delegation toolkit, \n- SCL, which supersedes FCL both in term of \n\nSmoo.th is also authoring RIP7696, as implemented in SCL, enabling both Ed25519, starkcurve, palla, vesta curves and P256 for lesser cost than any other solidity lib.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/5c7fad2d-0472-436b-a963-27ecf314919d.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/9fd789bb-db6e-4acc-81d8-16b136528f42.png',
    socialLinks: {
      website: ['https://github.com/get-smooth/crypto-lib'],
      farcaster: [],
      twitter: '@RenaudDubois10',
      mirror: null,
    },
    team: [
      {
        fid: 585499,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/36b1057d-291b-4a9b-916c-9fc5445bc900/rectcrop3',
        profile: { bio: { text: 'Cryptographer at smoo.th' } },
        username: 'rdubois-crypto',
        power_badge: false,
        display_name: 'Renaud',
        active_status: 'inactive',
        verifications: [],
        follower_count: 12,
        custody_address: '0xd96e6cc436aa770062fd29bd8369d4f28206e00f',
        following_count: 65,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: '60607440-a228-468c-abc8-8cd10a21c683',
        type: 'github',
        url: 'https://github.com/rdubois-crypto/FreshCryptoLib',
        name: 'FCL',
        description:
          'This repo contains our previous FCL, which implement RIP7212 and was used prior to its adoption by OP mainnet by many actors. It is currently deployed in every Coinbase Smartwallet at address\nhttps://basescan.org/address/0x0BA5ED0c6AA8c49038F819E587E2633c4A9F428a#code\nand in soulWallet\nhttps://optimistic.etherscan.io/address/0x31585171cd8e80111180a2f66AE6cc9aEB4dbA84#code\n\nUnfortunately, all actors use a copy of the library, thus i don\'t have the ownership of it and can\'t provide  a proof in the "contracts" section of the application.\n\n',
        verified: true,
        openSource: true,
        containsContracts: true,
        createdAt: '2024-08-29T08:47:31.531Z',
        updatedAt: '2024-08-30T08:59:24.511Z',
        projectId:
          '0xfef0eaf3c745a7175550a75ecfc0056d0a3276eeb0ce8fbc45dd7254411985ec',
      },
      {
        id: '4d1cfd16-c98c-472b-a81e-3893715b0c91',
        type: 'github',
        url: 'https://github.com/get-smooth/crypto-lib',
        name: 'Smoo.th Crypto Lib (SCL)',
        description:
          'This repo contains the latest of our cryptolib, audited by cryptoExperts (and ongoing by Veridise).\n\nIt implements RIP7696, enabling generic elliptic curve cryptography, superseding FCL and RIP7212.\nIt is the result of our latest research, presented at ETHCC and ETH Zurich.\n\nWe are also participating actively to RollCalls, and explained our work at RollCall5 :\nhttps://github.com/get-smooth/crypto-lib/blob/main/doc/Conferences/RollCall_8_5_2024.pdf\n\nsmoo.th conducted two different audits both with CryptoExperts and Veridise for a total spending of 60K$, which appear in separate branch of the repo. (audit result summarized in README).',
        verified: true,
        openSource: false,
        containsContracts: true,
        createdAt: '2024-08-28T15:37:25.621Z',
        updatedAt: '2024-08-30T08:59:23.842Z',
        projectId:
          '0xfef0eaf3c745a7175550a75ecfc0056d0a3276eeb0ce8fbc45dd7254411985ec',
        metrics: {
          artifact_url: 'https://github.com/get-smooth/crypto-lib',
          num_contributors: '3.0',
          num_trusted_contributors: '1.0',
          num_contributors_last_6_months: '3.0',
          num_stars: '40',
          num_trusted_stars: '1.0',
          trust_weighted_stars: '0.0004201146837294',
          num_forks: '2',
          num_trusted_forks: '0.0',
          trust_weighted_forks: '2.130994210434059e-06',
          trust_rank_for_repo_in_category: '35.0',
          age_of_project_years: '0.33333333333325754',
          license: '',
        },
      },
    ],
    packages: [],
    links: [
      {
        url: 'https:ethereum-magicians.org/t/rip-7696-generic-double-scalar-multiplication-dsm-for-all-curves/19798',
        name: '',
        description: 'Discussions about RIP7696',
      },
      {
        url: 'https://github.com/ethereum/RIPs/blob/master/RIPS/rip-7696.md',
        name: 'RIP7696 ',
        description:
          'This RIP implements generic elliptic curve computation. It also provide the asset code to do so (it is the SCL code). Using this, it is possible to use Ed25519 over ethereum, making it compatible with private keys of COSMOS and SOLANA. It is also provide a full webauthn compatibility, while RIP7212 is limited to P256.\n\nThe day devices integrate ed25519, SOLANA and COSMOS will natively enable to store their private key in the secure enclave through passkeys. \n\n',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '19875',
          date: '',
          details: null,
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Research which informs Ethereum core development'],
      statement: {
        create: [
          {
            answer:
              'We delivered the first and still fastest full solidity EIP7212 emulation last year, enabling PoC before EIP7212 integration to OP stack. We are now first and fastest for ANY weierstrass curve through ed25519.\n\nFCL and SCL enables Dapp builders to extend their OP stack application using passkeys (EIP7212, native to OP) on any chain, solving impossible crosschain use of the smooth onboarding passkeys enables.\n\nOur work is currently used by the Coinbase SmartWallet, SoulWallet, Safe Passkey Module. We benefited last year from retroPGF for FCL. Since then, it has been widely integrated and we moved on step further with SCL by:\n- conducting two public audits, providing more security to users of said wallets\n- propose the RIP7696, which was discussed in Rollcalls and ACD.\n- enabling generic elliptic curve implementation as a possible next step to improve the OP stack, enabling easy bridging with Solana, Cosmos and Starknet.',
            question:
              'How does your project support, or is a dependency of, the OP Stack?',
          },
          {
            answer:
              'By maintaining a faster and efficient cryptolib, we ensure securities of Wallets using our framework. Without maintenance, crosschain deployments of Dapps beyond OP stack would be endangered. We are also convinced that passkeys will in the future integrate the Ed25519 curve, without this being deployed in time, it would be a step back for UX of users, and a limitation. For instance YUBIKEY implements ed25519 Webauthn. Our framework is the only one enabling full WebAuthn compliance.',
            question:
              'How would it impact the OP Stack if your project ceased to exist?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/Smoo.th%20Cryptolib',
  },
  {
    id: '0xe8819060824137f5b433d8afa05360173be11509f53358a249c5aa470bb8f446',
    applicationId:
      '0xe8819060824137f5b433d8afa05360173be11509f53358a249c5aa470bb8f446',
    projectId:
      '0x2704cd27b8c60b098d4fe8c5c0fbae2f8f5fe9067c687c501a4c6dc6e9887876',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: {
      name: 'Formal Verification @ Ethereum Foundation',
      description:
        'Ethereum Foundation team dedicated at developing Formal Verification Tools for Ethereum Smart Contracts',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/5b371001-feaf-4002-8671-c4314150460c.png',
      organizationCoverImageUrl: null,
      socialLinks: {
        website: ['https://fv.ethereum.org'],
        farcaster: [],
        twitter: '',
        mirror: '',
      },
      team: ['843949', '844134', '845018', '848682'],
    },
    name: 'Act',
    description:
      'Act is a smart contract specification language and toolkit for formal verification. Act specifications are a formal, high-level description of all possible behaviours of an EVM program. Act allows many existing general purpose verification tools to be leveraged to prove properties about the specification. Such tools include SMT solvers (cvc5, z3, bitwuzla), theorem provers (Coq) and economic analysis tooling (CheckMate, Open Games). Act specifications can be automatically proved equivalent to concrete implementations in EVM. For very simple contracts, Act specifications can be automatically generated from EVM bytecode.\n\nThis is an end-to-end pipeline that supports principled reasoning about high level properties of EVM bytecode. It supports reasoning about both correctness (e.g. accounting invariants) and economic properties (e.g. incentive compatibility). Act specifications serve as a high-level smart contract representation, allowing for easy integration of existing general purpose analysis and verification tooling into the EVM context.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/a08fa912-3bc7-4957-9a64-5b10bc13397e.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/16e8a1cb-69b1-4098-8c40-fd25a5a29b8f.png',
    socialLinks: {
      website: [
        'https://github.com/ethereum/act',
        'https://ethereum.github.io/act/',
      ],
      farcaster: [],
      twitter: null,
      mirror: null,
    },
    team: [
      {
        fid: 843949,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/3c06e9f4-a279-46c8-95ca-8f442b82a800/rectcrop3',
        profile: { bio: { text: '' } },
        username: 'zoepar',
        power_badge: false,
        display_name: 'Zoe Par',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0xa5ccabf951e698fdd5fb8351f209b67dfe800d57',
        following_count: 0,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 844134,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/2ecdf9e0-8529-4ed6-716f-ecb9b6087600/rectcrop3',
        profile: {
          bio: { text: 'Symbolic Execution, SAT solving, Model Counting' },
        },
        username: 'msoos',
        power_badge: false,
        display_name: 'Mate Soos',
        active_status: 'inactive',
        verifications: [
          '0x5e8c31a0fdc254703aa47f6a56acc841c7695f6c',
          '0x5e8c31a0fdc254703aa47f6a56acc841c7695f6c',
        ],
        follower_count: 1,
        custody_address: '0xaa0a0e3ea0377a068f5ddd1a97b88d37397d41ea',
        following_count: 0,
        verified_addresses: {
          eth_addresses: [
            '0x5e8c31a0fdc254703aa47f6a56acc841c7695f6c',
            '0x5e8c31a0fdc254703aa47f6a56acc841c7695f6c',
          ],
          sol_addresses: [],
        },
      },
      {
        fid: 845018,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/7687568d-7499-457f-3d33-4457de55a800/rectcrop3',
        profile: { bio: { text: '' } },
        username: 'blishko',
        power_badge: false,
        display_name: 'blishko',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0x85dc38e7ed932370fad4d865384401f3720e6099',
        following_count: 0,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 848682,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/d1157019-9a42-4db6-5c83-4082c1343e00/rectcrop3',
        profile: { bio: { text: '' } },
        username: 'dxo-',
        power_badge: false,
        display_name: 'dxo',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0xa5543ddbb26700244b1b9b5f8721f204ca199abe',
        following_count: 0,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: 'c4abfa54-334e-44a2-9821-d4956a479dfa',
        type: 'github',
        url: 'https://github.com/ethereum/act',
        name: 'Act',
        description: 'The Act Smart Contract Specification Language',
        verified: true,
        openSource: false,
        containsContracts: false,
        createdAt: '2024-08-26T09:52:19.582Z',
        updatedAt: '2024-09-03T11:57:15.876Z',
        projectId:
          '0x2704cd27b8c60b098d4fe8c5c0fbae2f8f5fe9067c687c501a4c6dc6e9887876',
        metrics: {
          artifact_url: 'https://github.com/ethereum/act',
          num_contributors: '16.0',
          num_trusted_contributors: '1.0',
          num_contributors_last_6_months: '4.0',
          num_stars: '215',
          num_trusted_stars: '13.0',
          trust_weighted_stars: '0.0636500533645902',
          num_forks: '36',
          num_trusted_forks: '0.0',
          trust_weighted_forks: '0.0002698784777922',
          trust_rank_for_repo_in_category: '22.0',
          age_of_project_years: '5.0',
          license: 'AGPL-3.0',
        },
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://ethereum.github.io/act/',
        name: 'Act Documentation',
        description:
          'The Act Book provides documentation for the Act language.',
      },
    ],
    contracts: [],
    grantsAndFunding: { ventureFunding: [], revenue: [], grants: [] },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Languages which are dedicated to developing smart contracts',
      ],
      statement: {
        create: [
          {
            answer:
              'Formal Verification is widely recognized to be one of the most effective ways to construct bug free systems. It is used as a best practice in high assurance domains (e.g. aerospace, processor design). \n\nThe Act language can be used to formally verify contracts deployed to any EVM-based blockchain. It can be used to enhance the security and reliability of programs that are deployed on the OP stack. Since October 2023 we have made the following enhancements to Act: \n\n- A decompiler from EVM -> Act\n- Experimental support for verification of game theoretic properties (via integration with the CheckMate tool)\n- Extensions to the core language (e.g. multi-contract specifications, case consistency checks) \n- General improvements (bug fixes, ui enhancements, documentation)\n\nThese features have expanded the range of contracts that can be specified, the complexity of the properties that can be verified, and lowered the friction for generating specifications and using the tool.',
            question:
              'How does your project support, or is a dependency of, the OP Stack?',
          },
          {
            answer:
              'OP stack developers would lose access to a powerful and cutting edge suite of formal verification tooling. This would make it harder for developers of applications that are deployed on the OP stack to reason about the correctness and safety of their systems.',
            question:
              'How would it impact the OP Stack if your project ceased to exist?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/Act',
  },
  {
    id: '0xe8bfa7f5bee60dc487b7f61e9f95b933e7302383570de2339ff557f829140268',
    applicationId:
      '0xe8bfa7f5bee60dc487b7f61e9f95b933e7302383570de2339ff557f829140268',
    projectId:
      '0xda38e275285330082433713e32b03c7ccd482bfca5e52719766f16555e05f699',
    category: 'Utility',
    applicationCategory: 'OP_STACK_TOOLING',
    organization: {
      name: 'ethPandaOps',
      description:
        'We are a team of DevOps engineers at the Ethereum Foundation dedicated to coordinating and testing Ethereum protocol upgrades. Our mission is to build reusable tools for the entire ecosystem, with a focus on enhancing the deployment and testing stack of Ethereum. We manage the deployment, maintenance, and testing of upcoming upgrades through devnets, working closely with Ethereum client teams to identify and resolve bugs.\n\nIn addition to testing, we actively collect and monitor data from the Ethereum mainnet and testnets to detect anomalies and gain research insights. This data stack provides valuable insights into the network’s state and lays the groundwork for future, data-driven upgrades.\n\nRecently, we have expanded our efforts to include Layer 2 (L2) support for the automation tools we use on L1. This initiative aims to facilitate easier interoperability and accelerate testing processes.',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/79ddd288-f60d-4985-ae21-dfa433d92472.png',
      organizationCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/fbab7e54-5168-4c5f-9a1e-6dd29bfec921.png',
      socialLinks: {
        website: ['https://ethpandaops.io'],
        farcaster: ['https://warpcast.com/ethpandaops'],
        twitter: 'https://x.com/ethPandaOps',
        mirror: '',
      },
      team: [
        '840195',
        '212735',
        '843933',
        '11652',
        '840686',
        '811515',
        '212493',
      ],
    },
    name: 'Kurtosis optimism package',
    description:
      "Kurtosis is an advanced tool for creating local, modular Ethereum devnets with easy to read definitions. It supports deployment on Docker or Kubernetes, providing extensive access to a wide range of tools. The ethPandaOps team actively maintains a Layer 1 Ethereum blockchain definition through the ethereum-package, which is utilized to validate and test future Ethereum upgrades, facilitating the identification of semi-reproducible bugs.\n\nLeveraging Kurtosis's modular architecture, we have developed an Optimism package that builds on top of the maintained L1 devnet. This allows OP-Chains to develop, test, and verify changes independently, without the need to continuously monitor L1 changes.\n\nThe local deployment capabilities of our package enable rapid feedback cycles during development, while the built-in multi-client support ensures interoperability across different clients. We have collaborated with the op-reth, op-erigon, and op-nethermind node teams to verify and fix bugs using the Optimism package.\n",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/5a68f3f9-2945-48b6-ad10-89bf4cfda2de.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/ebc40e94-f5bc-4c14-a940-e328d6daa952.png',
    socialLinks: {
      website: ['https://ethpandaops.io/'],
      farcaster: [],
      twitter: 'https://x.com/ethPandaOps',
      mirror: null,
    },
    team: [
      {
        fid: 840195,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/ae9157c1-c304-4e67-bfbf-145df3189f00/original',
        profile: {
          bio: {
            text: "🐼🌿 We're a bamboo-munching, crypto-loving team of pandas who've traded the forest for the Ethereum blockchain! We were born during #TestingTheMerge",
          },
        },
        username: 'ethpandaops',
        power_badge: false,
        display_name: 'ethPandaOps',
        active_status: 'inactive',
        verifications: [],
        follower_count: 13,
        custody_address: '0xc3d05750f67e1d5de185e1a6cadcc77226ec428f',
        following_count: 6,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 212735,
        object: 'user',
        pfp_url: 'https://i.imgur.com/Ow1ac7t.jpg',
        profile: {
          bio: { text: 'I do devops at the Ethereum Foundation' },
        },
        username: 'parithosh',
        power_badge: false,
        display_name: 'Parithosh',
        active_status: 'inactive',
        verifications: [],
        follower_count: 164,
        custody_address: '0x2f1a6b538e88a832ae12999f5ad5a520ca0e4fd4',
        following_count: 107,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 843933,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/7e41d9f7-3b52-4bbe-e163-997163723200/original',
        profile: { bio: { text: 'pk910.eth @ EF DevOps / ethPandaOps' } },
        username: 'pk910',
        power_badge: false,
        display_name: 'pk910',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0x37ab37e0697110db112d20bb618940a1893151c7',
        following_count: 0,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 11652,
        object: 'user',
        pfp_url: 'https://i.imgur.com/lqVpcEY.jpg',
        profile: {
          bio: {
            text: 'Doing Ethereum stuff at the Ethereum Foundation. @ethPandaOps',
          },
        },
        username: 'skylenet',
        power_badge: false,
        display_name: 'Rafael Matias',
        active_status: 'inactive',
        verifications: ['0x9c1c550c14a8d5406203fc6f468663aa1593be5f'],
        follower_count: 74,
        custody_address: '0x4b03aaf612da2135ba224241842ec35ef0f51186',
        following_count: 38,
        verified_addresses: {
          eth_addresses: ['0x9c1c550c14a8d5406203fc6f468663aa1593be5f'],
          sol_addresses: [],
        },
      },
      {
        fid: 840686,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/969689c4-e7ad-4a3e-04ed-3661a6e56200/rectcrop3',
        profile: { bio: { text: '' } },
        username: 'savid',
        power_badge: false,
        display_name: 'savid',
        active_status: 'inactive',
        verifications: ['0x5c45bb5c63e2dc6c3622b694cc66c4ca098c6b6d'],
        follower_count: 3,
        custody_address: '0xc5c713a6a01d081f1fe2058d4cf72524eb54853f',
        following_count: 6,
        verified_addresses: {
          eth_addresses: ['0x5c45bb5c63e2dc6c3622b694cc66c4ca098c6b6d'],
          sol_addresses: [],
        },
      },
      {
        fid: 811515,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/73ee4b7f-5576-4eb3-a180-06e7342d2600/rectcrop3',
        profile: { bio: { text: '' } },
        username: 'bbusa',
        power_badge: false,
        display_name: 'Barnabas Busa',
        active_status: 'inactive',
        verifications: [],
        follower_count: 8,
        custody_address: '0x25db65e52524f6bc9df01a7e8ecb579b4cb6a723',
        following_count: 7,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 212493,
        object: 'user',
        pfp_url: 'https://i.imgur.com/MeSHUdt.jpg',
        profile: { bio: { text: 'Devops at EF (EthPandaOps)' } },
        username: 'samcm',
        power_badge: false,
        display_name: 'Sam Calder-Mason',
        active_status: 'inactive',
        verifications: ['0xd73ed3cde005b195350b3024ecb39c1159f71615'],
        follower_count: 77,
        custody_address: '0x185f7599885b08d7d5c31692c953bfee6f73b2c8',
        following_count: 148,
        verified_addresses: {
          eth_addresses: ['0xd73ed3cde005b195350b3024ecb39c1159f71615'],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        id: '7ab0f93a-0653-4eb3-8103-62da020900af',
        type: 'github',
        url: 'https://github.com/ethpandaops/optimism-package',
        name: 'Kurtosis optimism package',
        description:
          'This repository contains the optimism-package definitions that is executed by Kurtosis. It imports the L1 definition from the ethereum-package, making it far easier to maintain. The package can be run against Docker or Kubernetes and allows a host of L1 testing and monitoring tools to be used. Since it is predominantly a local testing tool, it allows for devs to share configs and reproduce/fix bugs with little overhead. ',
        verified: true,
        openSource: false,
        containsContracts: false,
        createdAt: '2024-08-26T09:35:03.456Z',
        updatedAt: '2024-09-05T09:05:25.708Z',
        projectId:
          '0xda38e275285330082433713e32b03c7ccd482bfca5e52719766f16555e05f699',
        metrics: {
          artifact_url: 'https://github.com/ethpandaops/optimism-package',
          num_contributors: '9.0',
          num_trusted_contributors: '6.0',
          num_contributors_last_6_months: '9.0',
          num_stars: '33',
          num_trusted_stars: '15.0',
          trust_weighted_stars: '0.1168107143631238',
          num_forks: '19',
          num_trusted_forks: '1.0',
          trust_weighted_forks: '0.054854098627922',
          trust_rank_for_repo_in_category: '3.0',
          age_of_project_years: '0.25',
          license: '',
        },
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://ethpandaops.io/posts/kurtosis-l2/',
        name: 'Blog post describing the optimism package',
        description:
          'This explains our approach to the optimism package as well as the various ways of configuring it.',
      },
    ],
    contracts: [],
    grantsAndFunding: { ventureFunding: [], revenue: [], grants: [] },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_TOOLING',
      subcategory: [
        'Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.',
        'Services for deploying and hosting an OP Chain.',
      ],
      statement: {
        create: [
          {
            answer:
              'The OP stack wants to support client diversity, however building a new client to interop with existing ones is a difficult proposition. The optimism-package helps make this easier with simple to use definitions, allowing new clients to run against existing/working clients and to test their implementation. The package now also support the definition of future OP forks, allowing for client teams to prototype and trial the forks locally with readable config files. ',
            question:
              'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?',
          },
          {
            answer:
              "The optimism-package currently supports multiple clients on the execution side (op-geth, op-reth, op-erigon, op-nethermind and op-besu) as well as the consensus side (op-node, hildr). While building this package, we were able to find bugs or missing features in op-nethermind, op-erigon and op-besu. Additionally, we support the magi OP CL client in an open PR, which the team can use to iterate on.The optimism-package doesn't stop at finding these issues, but it also provided an environment to test the fixes, making it a holistic local testing tool. ",
            question:
              'Who has used your tooling and how has it benefited them?',
          },
        ],
      },
    },
    testimonials:
      'https://www.metricsgarden.xyz/projects/Kurtosis%20optimism%20package',
  },
  {
    id: '0xefe90dc598c4aa16089ecd6f57fa5270388d42f36e1c5db7f00bacc8f1d46832',
    applicationId:
      '0xefe90dc598c4aa16089ecd6f57fa5270388d42f36e1c5db7f00bacc8f1d46832',
    projectId:
      '0x15888c525d6efc5ca1d66714644aace3d2e8598cecd7e37be1e6fd57fd958c07',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: null,
    name: 'Ethereum on ARM',
    description:
      'Contributing to the Ethereum L1/L2 decentralisation by providing images that turn ARM64/RISCV boards into L1/L2 Ethereum nodes.\n\nStaking from day zero on a $189 ARM board using ~10w.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/4f8da6a7-635a-41fc-b65b-cee09e666102.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/8eb0cc3f-87d0-40a7-bd83-610f669add57.png',
    socialLinks: {
      website: ['https://ethereum-on-arm-documentation.readthedocs.io/'],
      farcaster: ['https://warpcast.com/ethereumonarm'],
      twitter: 'https://x.com/EthereumOnARM',
      mirror: null,
    },
    team: [
      {
        fid: 22954,
        object: 'user',
        pfp_url: 'https://i.imgur.com/9HMXzkI.jpg',
        profile: {
          bio: {
            text: 'Contributing to the Ethereum decentralisation by providing OS images that turn ARM64 boards into full Ethereum nodes.',
          },
        },
        username: 'ethereumonarm',
        power_badge: false,
        display_name: 'Ethereum On ARM',
        active_status: 'inactive',
        verifications: ['0xd1933df1c223ad7cb5716b066ca26bc24569e622'],
        follower_count: 189,
        custody_address: '0xf680f9d71ea6c1b6abeb2dd0119a726237c03ed0',
        following_count: 374,
        verified_addresses: {
          eth_addresses: ['0xd1933df1c223ad7cb5716b066ca26bc24569e622'],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        id: 'e042411b-2e4e-45ba-a17d-7ba033713ab8',
        type: 'github',
        url: 'https://github.com/EOA-Blockchain-Labs/ethereumonarm',
        name: '',
        description: '',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-08-30T16:13:22.067Z',
        updatedAt: '2024-08-30T16:16:34.057Z',
        projectId:
          '0x15888c525d6efc5ca1d66714644aace3d2e8598cecd7e37be1e6fd57fd958c07',
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://discord.com/invite/ve2Z8fxz5N',
        name: 'Ethereum on ARM Discord channel',
        description:
          'More than 500 users that contribute and discuss about running full nodes and staking on resource-constrained devices.',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
          link: null,
          amount: '133449.98',
          date: '',
          details: null,
        },
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Ethereum client implementations',
        'Ethereum test networks',
        'Infrastructure to test and deploy chains',
      ],
      statement: {
        create: [
          {
            answer:
              '**Ethereum on ARM** supports the OP Stack by providing an accessible way for users to run L1 and L2 (particularly Optimism nodes) on ARM64 resource-constrained devices. It enhances the ecosystem in the following ways: \n\n- By enabling Optimism stack to run on affordable ARM64 devices, we lower the barrier to entry for users who may not have access to high-powered hardware. This contributes to network decentralization.\n\n- Ethereum on ARM reduces the complexity of setting up and managing Optimism nodes by consolidating all necessary configurations, binaries, and scripts into images the make it easy to run nodes and accelerate the onboarding process for new users. \n\n- The capability to run both L1 (Ethereum) and L2 (Optimism) nodes on the same ARM64 device allows for a more integrated and efficient setup, where users can support both layers of the OP Stack simultaneously. This contributes to the robustness and resilience of the Optimism network by encouraging more users to run full nodes.',
            question:
              'How does your project support, or is a dependency of, the OP Stack?',
          },
          {
            answer:
              "Ethereum on ARM maintains a low barrier for running a node by minimizing costs, energy consumption, and hardware requirements. By lowering these barriers, we ensure that both Ethereum L1 and L2 nodes can be operated by any user from home. This accessibility is important for enhancing the decentralization, security, and scalability of the Ethereum network.\n\nWithout this reference, the hardware requirements and costs associated with running a node could increase, potentially restricting participation to only those with more resources. This would undermine the core principles of decentralization and inclusivity that are fundamental to the Ethereum ecosystem. By keeping node operation accessible and affordable, we help preserve Ethereum's resilience and long-term viability as a decentralized network.",
            question:
              'How would it impact the OP Stack if your project ceased to exist?',
          },
        ],
      },
    },
    testimonials: 'https://www.metricsgarden.xyz/projects/Ethereum%20on%20ARM',
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
    team: [
      {
        fid: 811328,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/c006aa58-212e-4908-8503-a2406259b400/rectcrop3',
        profile: { bio: { text: 'I scale & test in prod.' } },
        username: 'taem',
        power_badge: false,
        display_name: 'Taem Park',
        active_status: 'inactive',
        verifications: [
          '0x490c91f38ec57e3ab00811e0c51a62bfed7e81f4',
          '0x490c91f38ec57e3ab00811e0c51a62bfed7e81f4',
          '0x490c91f38ec57e3ab00811e0c51a62bfed7e81f4',
        ],
        follower_count: 4,
        custody_address: '0xf4353b7394a21eb410c8274ab8cc8aa75c42fcc4',
        following_count: 5,
        verified_addresses: {
          eth_addresses: [
            '0x490c91f38ec57e3ab00811e0c51a62bfed7e81f4',
            '0x490c91f38ec57e3ab00811e0c51a62bfed7e81f4',
            '0x490c91f38ec57e3ab00811e0c51a62bfed7e81f4',
          ],
          sol_addresses: [],
        },
      },
      {
        fid: 849695,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/64e99985-d928-4393-0303-0d2fbb0b7b00/rectcrop3',
        profile: { bio: { text: '' } },
        username: 'diff72840089',
        power_badge: false,
        display_name: 'Changwan Park',
        active_status: 'inactive',
        verifications: [],
        follower_count: 1,
        custody_address: '0x2528d878bae4a4168ab097e82bc5c592433730b0',
        following_count: 0,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 284703,
        object: 'user',
        pfp_url: 'https://i.imgur.com/ADllGMs.jpg',
        profile: {
          bio: { text: 'TestinProd | Engineer | Photographer | Optimist' },
        },
        username: 'imtei',
        power_badge: false,
        display_name: 'Tei Im',
        active_status: 'inactive',
        verifications: [],
        follower_count: 25,
        custody_address: '0xb570343406892c211f660619b0ad3a34f99c8676',
        following_count: 80,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 849643,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/100425b0-d822-488d-0485-62ae82409c00/rectcrop3',
        profile: { bio: { text: '' } },
        username: 'parkgunou',
        power_badge: false,
        display_name: 'Gunou Park',
        active_status: 'inactive',
        verifications: [],
        follower_count: 2,
        custody_address: '0x33a856a767ab69e376c8db517905da1b64ebd9d3',
        following_count: 4,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
      {
        fid: 849704,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/6a376bdb-4675-4270-6882-e5bc9898b100/rectcrop3',
        profile: { bio: { text: '' } },
        username: 'mininny',
        power_badge: false,
        display_name: 'Minhyuk Kim',
        active_status: 'inactive',
        verifications: [],
        follower_count: 1,
        custody_address: '0x320e3ff9bf2a6a3af31ca7e99fd9a98c2699d8e2',
        following_count: 2,
        verified_addresses: { eth_addresses: [], sol_addresses: [] },
      },
    ],
    github: [
      {
        id: '60458df0-4601-4994-b953-051e008e3785',
        type: 'github',
        url: 'https://github.com/testinprod-io/op-erigon',
        name: 'OP Erigon Main Repository',
        description: 'This is a main repository for OP Erigon.',
        verified: true,
        openSource: true,
        containsContracts: false,
        createdAt: '2024-09-02T22:34:14.464Z',
        updatedAt: '2024-09-02T22:34:46.105Z',
        projectId:
          '0xff3bed7d64f6f616e89032f8661f61259bc0b416ff39e1c8584ae8b34c48dbaa',
        metrics: {
          artifact_url: 'https://github.com/testinprod-io/op-erigon',
          num_contributors: '27.0',
          num_trusted_contributors: '9.0',
          num_contributors_last_6_months: '19.0',
          num_stars: '86',
          num_trusted_stars: '18.0',
          trust_weighted_stars: '0.3446439870918796',
          num_forks: '14',
          num_trusted_forks: '2.0',
          trust_weighted_forks: '0.0076808340809625',
          trust_rank_for_repo_in_category: '1.0',
          age_of_project_years: '1.5833333333332575',
          license: 'LGPL-3.0',
        },
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
      ventureFunding: [
        {
          amount: '1m-5m',
          year: '2022',
          details: 'Initial friends & family rounds to kick off Test in Prod.',
        },
      ],
      revenue: [],
      grants: [
        {
          grant: 'retroFunding',
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
      ],
    },
    pricingModel: { type: 'free', details: '' },
    impactStatement: {
      category: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
      subcategory: [
        'Work on core components of the OP Stack, including client implementations, modules, and modifications.',
      ],
      statement: {
        create: [
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
    testimonials: 'https://www.metricsgarden.xyz/projects/OP%20Erigon',
  },
] as const;
