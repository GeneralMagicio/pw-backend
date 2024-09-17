export const projects = [
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
        profile: {
          bio: {
            text: '',
          },
        },
        username: 'filip-ift',
        power_badge: false,
        display_name: 'Filip IFT',
        active_status: 'inactive',
        verifications: [],
        follower_count: 12,
        custody_address: '0x66b21071aeb095ebcff2f6d9f5d3793e97922aaa',
        following_count: 5,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        url: 'https://github.com/vacp2p/nim-libp2p',
        name: null,
        description: null,
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
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Infrastructure to test and deploy chains'],
      statement: [
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
        profile: {
          bio: {
            text: 'Sigma Prime',
          },
        },
        username: 'agemanning',
        power_badge: false,
        display_name: 'Adrian Manning',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0x7a0ae3851146324920cd94c43ef635973b6a1243',
        following_count: 0,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        url: 'https://github.com/libp2p/rust-libp2p',
        name: 'Rust-Libp2p',
        description:
          'Collection of p2p protocols in the rust programming language',
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
    grantsAndFunding: {
      ventureFunding: [],
      grants: [],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Ethereum client implementations',
        'Ethereum test networks',
        'Research which informs Ethereum core development',
        'Infrastructure to test and deploy chains',
      ],
      statement: [
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
    team: null,
    github: [
      {
        url: 'https://github.com/sigp/lighthouse',
        name: 'Lighthouse',
        description: 'Leading Ethereum consensus client in rust.',
      },
    ],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: null,
          link: null,
          amount: '165460',
          date: '',
          details: null,
        },
        {
          grant: null,
          link: null,
          amount: '298138',
          date: '',
          details: null,
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Ethereum client implementations'],
      statement: [
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
  {
    id: '0x0bae27264b02cc7ab3b54a595b2f85d067554642e5089612db4f6a00f92867fa',
    applicationId:
      '0x0bae27264b02cc7ab3b54a595b2f85d067554642e5089612db4f6a00f92867fa',
    projectId:
      '0xb39431ee9d3ab706b0607075dea81f00ecfac821e53b04afef57e44c47feec38',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: {
      name: 'WID3+ Consortium',
      description:
        'The WID3+ Consortium is a group of leading Web3 and digital identity experts in Germany and Malta, who joined forces to solve some of the most pressing issues in Web3 contracting. As a business-to-business (B2B) suite WID3+ maintains the digital identity bridge wid3.app, as well as conducts research and development for creating AUTHBOND as bid bond platform. The WID3+ Consortium is lead by ACURRAENT UG and previously included the University of Malta. In 2023, WID3+ participated in NGI TRUSTCHAIN #OC1 and has now become part of NGI TRUSTCHAIN OC3.',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/c63083a0-b4fb-4951-9ed5-90dfe7399ce7.png',
      organizationCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/95b565ff-ccb8-4de9-8f67-d1e9acdf35df.png',
      socialLinks: {
        website: [
          'https://wid3.xyz/',
          'https://www.linkedin.com/showcase/wide-consortium/',
          'https://github.com/Consortium-WIDE',
          'https://acurraent.com/',
        ],
        farcaster: [],
        twitter: 'https://twitter.com/acurraent',
        mirror: 'https://mirror.xyz/0x81865ebc7694dfba6608f6503bba50abb04644b4',
      },
      team: ['226300', '11745', '850759'],
    },
    name: 'WID3 - Web3 Identity for DAOs and Education',
    description:
      'WIDE is on a mission to bridge the gap between your skills and the opportunities available in Web3. Proving one’s credentials and accessing relevant opportunities is a time-consuming process. WIDE simplifies validating your credentials by allowing you to easily access and share your qualifications (and more). The goal is to allow you to participate in online governance, enrol to local initiatives, and join your favourite DAO based on your skills – enhancing your engagement in the Web3 world and beyond.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/b8a6f5d1-f6e0-444e-9235-7f36253ea259.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/2f52dab1-3f31-46bb-868f-49558f19ce44.png',
    socialLinks: {
      website: [
        'https://wid3.xyz/',
        'https://wid3.app',
        'https://dungeonmaster.wid3-demo.app/',
        'https://cryptohubmalta.wid3-demo.app/',
        'https://trustchain.ngi.eu/wide/',
      ],
      farcaster: [],
      twitter: 'https://twitter.com/acurraent',
      mirror: 'https://mirror.xyz/0x81865ebc7694dfba6608f6503bba50abb04644b4',
    },
    team: [
      {
        fid: 11745,
        object: 'user',
        pfp_url: 'https://i.imgur.com/kieDigg.jpg',
        profile: {
          bio: {
            text: 'web3 researcher and DID enthusiast',
          },
        },
        username: 'benedictvs',
        power_badge: false,
        display_name: 'benedictvs',
        active_status: 'inactive',
        verifications: [
          '0x81865ebc7694dfba6608f6503bba50abb04644b4',
          '0x7bc48221928f11184b376da7a57650768dfd3332',
        ],
        follower_count: 43,
        custody_address: '0xb2c2ab6d71d94e3c5571d9935f6fd99d2e6d58ce',
        following_count: 84,
        verified_addresses: {
          eth_addresses: [
            '0x81865ebc7694dfba6608f6503bba50abb04644b4',
            '0x7bc48221928f11184b376da7a57650768dfd3332',
          ],
          sol_addresses: [],
        },
      },
      {
        fid: 226300,
        object: 'user',
        pfp_url: 'https://i.imgur.com/I8Q0CaA.jpg',
        profile: {
          bio: {
            text: 'intersectional feminist, interdisciplinary researcher, visual designer, sleepyhead ',
          },
        },
        username: 'vicos',
        power_badge: false,
        display_name: 'vika',
        active_status: 'inactive',
        verifications: ['0xb1a87b31d3c13c47a1dac755d48845abe49cfe2d'],
        follower_count: 16,
        custody_address: '0x05978b7a8e010cf989409c25b9859077a022271b',
        following_count: 91,
        verified_addresses: {
          eth_addresses: ['0xb1a87b31d3c13c47a1dac755d48845abe49cfe2d'],
          sol_addresses: [],
        },
      },
      {
        fid: 850759,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/036c1fc3-01b5-4ee3-4b23-f7a9d3a8ee00/original',
        profile: {
          bio: {
            text: 'Web3 developer, wildlife photographer, motorsport enthusiast',
          },
        },
        username: 'matthewscerri',
        power_badge: false,
        display_name: 'Matthew Scerri',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0xe7f3d8f719dc4af2fc3edc9db8b1a61f031a9c5b',
        following_count: 0,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        url: 'https://github.com/Consortium-WIDE/wide-client',
        name: 'WIDE Client',
        description:
          'The WIDE client handles encryption, credential upload, and wallet interactions for the WID3 identity service through a graphical user interface built on Angular.',
      },
      {
        url: 'https://github.com/Consortium-WIDE/wide-contract',
        name: 'WIDE Smart Contract for Credential Logging ',
        description:
          'This project is the Smart Contract for the WIDE platform, designed using hardhat. It logs signatures over encrypted credentials uploaded to the WIDE platform to Optimism Sepolia.',
      },
      {
        url: 'https://github.com/Consortium-WIDE/wide-server',
        name: 'WIDE Server',
        description:
          'WIDE Server is responsible for the storage layer of WIDE. It assumes all data received and all the data it transmits is encrypted, with the exception of addresses and public keys, which are meant to be public anyway.\n\nAny data transmitted on the server should be via HTTPS for an added layer of security.',
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://www.eu-startups.com/2024/07/these-are-the-15-startups-combating-online-misinformation-that-have-been-granted-e1-8-million-by-the-ec/',
        name: 'EU Start Ups: Combatting Misinformation Online',
        description:
          "This publication acknowledges WIDE's contribution to the combatting of misinformation online.",
      },
      {
        url: 'https://www.instagram.com/p/C7AV34HCI72/?igsh=MWF1Mjk1bjJ5eG9pbA==',
        name: 'Contributions to DAO Building at CryptoHub Malta',
        description:
          'WIDE support with its identity solution the DAO creation of a local community of crypto and decentralisation enthusiasts in Malta.',
      },
      {
        url: 'https://ieee-cybermatics.org/2024/IEEE-Cybermatics-Congress2024-Program.pdf',
        name: 'Contribution to the Academic Cybersecurity Community',
        description:
          'WIDE published an Open Access article and presented it at Blockchain Workshop as part of the IEEE Cybermatics Conference 2024 in Copenhagen.',
      },
      {
        url: 'https://www.linkedin.com/posts/tdisecworkshop_eudi-digitalidentity-bridging-activity-7183442704901558272-4IC4?utm_source=share&utm_medium=member_desktop',
        name: 'Contribution to the Open Source Digital Identity Community in Europe',
        description:
          'WIDE presented its privacy-preserving digital identity bridge between Web3 and the European Digital Identity at the 2nd Trends in Digital Identity Workshop (TDI) 2024 in Rome.',
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
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Work on core components of the OP Stack, including client implementations, modules, and modifications.',
        'Research or development that introduces new features, improvements, or capabilities to the OP Stack.',
        'Ethereum client implementations',
        'Research which informs Ethereum core development',
      ],
      statement: [
        {
          answer:
            'WID3 relies on OPs capability of providing fast and reliable testnet works to allow for the verifiability of encrypted credentials on the WIDE digital identity bridge. Through the provisioning of the Sepolia testnet, where the WIDE credential logging takes place, it enables users to break out of the closed identity ecosystems, such as Google and onboard their digital government EU identity document to Web3 in a privacy preserving way.\n\nThe OP not only lends legitimacy to WID3, but WID3 also enhances the feature and functionality set of the OP Stack by providing a novel concept of identity bridging - making the Superchain the hub for  privacy-preserving onboarding of metadata-rich credentials in a user firendly way.',
          question:
            'How does your project support, or is a dependency of, the OP Stack?',
        },
        {
          answer:
            "The OP stack would not only lose relevance for the pan-European digital identity initiative, particularly in Malta, Germany, and Greece, but also turn into a monolithic trust layer for digital identity initiatives.\n\nWID3's ceasure to exist will put the OP Stack at risk of becoming irrelevant for non-financial interactions for EU residents and citizens when it comes to EU-compliant DAO creation, governmental digital identity interactions, and digital identity use cases that focus on Web3 social.\n\nIn short, it will hamper the openness of the OP Stack to a broad variety of use cases and make the integration of Lit Protocol with the OP Stack fall short of cross-chain and cross-domain digital identity bridging fall short of coming to fruition.",
          question:
            'How would it impact the OP Stack if your project ceased to exist?',
        },
      ],
    },
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
        url: 'https://github.com/status-im/nimbus-eth2',
        name: 'Nimbus Consensus Client Repo',
        description:
          'Nim implementation of the Ethereum Beacon Chain (Consensus Client)',
      },
    ],
    packages: [],
    links: [],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: null,
          link: null,
          amount: '84018',
          date: '',
          details: null,
        },
        {
          grant: null,
          link: null,
          amount: '198758',
          date: '',
          details: null,
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Ethereum client implementations'],
      statement: [
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
        profile: {
          bio: {
            text: 'DeFi plumber',
          },
        },
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
        profile: {
          bio: {
            text: '/vyper',
          },
        },
        username: 'big-tech-sux',
        power_badge: false,
        display_name: 'sudo init vyper',
        active_status: 'inactive',
        verifications: [],
        follower_count: 74,
        custody_address: '0x24b1d2817d8a2cdbaf2b36d54b7c23deb235932e',
        following_count: 4,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        url: 'https://github.com/vyperlang/vyper',
        name: 'Vyper',
        description: 'Pythonic Smart Contract Language for the EVM',
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
      grants: [
        {
          grant: null,
          link: null,
          amount: '135200',
          date: '',
          details: null,
        },
        {
          grant: null,
          link: null,
          amount: '248448.21',
          date: '',
          details: null,
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Languages which are dedicated to developing smart contracts',
      ],
      statement: [
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
    team: null,
    github: [
      {
        url: 'https://github.com/probe-lab/hermes',
        name: 'Hermes',
        description: 'Main project repository.',
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
    grantsAndFunding: {
      ventureFunding: [],
      grants: [],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Ethereum client implementations',
        'Research which informs Ethereum core development',
        'Ethereum test networks',
      ],
      statement: [
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
        profile: {
          bio: {
            text: '',
          },
        },
        username: 'scottypoi',
        power_badge: false,
        display_name: 'Scotty',
        active_status: 'inactive',
        verifications: [],
        follower_count: 1,
        custody_address: '0xf38d5a1c123b87049176e9f69ef4c50b22e5f51d',
        following_count: 1,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
      {
        fid: 8687,
        object: 'user',
        pfp_url:
          'https://i.seadn.io/gae/pf2nOIZVUXx1KexICjK1tGO0O2pDZ0BZ9Ny2thR_9I4FMQNK7Ipox3OUibWRaNwBSQbZJK4KEAcRVicqViScEUhnVBpw6AGGSFXqPQI?w=500&auto=format',
        profile: {
          bio: {
            text: 'I sharpen shurikens by day',
          },
        },
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
        profile: {
          bio: {
            text: '',
          },
        },
        username: 'jochem-brouwer',
        power_badge: false,
        display_name: 'Jochem Brouwer',
        active_status: 'inactive',
        verifications: [],
        follower_count: 1,
        custody_address: '0xb3465ea3f95d00a9f59d5c95ab25623aac1e78b6',
        following_count: 0,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
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
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
      {
        fid: 20870,
        object: 'user',
        pfp_url: 'https://i.imgur.com/GOeW1GA.jpg',
        profile: {
          bio: {
            text: 'Just a techie',
          },
        },
        username: 'g11tech',
        power_badge: false,
        display_name: 'Gajpower',
        active_status: 'inactive',
        verifications: [],
        follower_count: 12,
        custody_address: '0x3f7f2777080302ac64db965eea296aa2a1a12b91',
        following_count: 83,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
      {
        fid: 850246,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/76943707-466d-4e5b-b81c-e00935342500/rectcrop3',
        profile: {
          bio: {
            text: '',
          },
        },
        username: 'systemsenjoyer',
        power_badge: false,
        display_name: 'Amir',
        active_status: 'inactive',
        verifications: [],
        follower_count: 11,
        custody_address: '0xcc9a8c2a3a19aa749d17a096f22be534e100b6f5',
        following_count: 2,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
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
        url: 'https://github.com/ethereumjs/ethereumjs-monorepo',
        name: 'ethereumjs-monorepo',
        description:
          'This is the main monorepo where the EthereumJS team modules live, including separate packages for transactions, blocks, our EVM implementation, a devp2p implementation, our implementation of the EthereumJS full node, and various utility packages.',
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
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Ethereum client implementations',
        'Ethereum test networks',
        'Research which informs Ethereum core development',
      ],
      statement: [
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
    team: null,
    github: [
      {
        url: 'https://github.com/libp2p/js-libp2p',
        name: 'js-libp2p',
        description: 'The main js-libp2p code repository.',
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
    grantsAndFunding: {
      ventureFunding: [],
      grants: [],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Ethereum client implementations',
        'Ethereum test networks',
        'Research which informs Ethereum core development',
      ],
      statement: [
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
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        url: 'https://github.com/grandinetech/rust-kzg',
        name: 'Rust-KZG',
        description:
          'The repository contains L2 scaling enabling blobs (EIP-4844) cryptography implementations using multiple elliptic curve backends (blst, constantine, mcl, arkworks, zkcrypto). It also contains benchmark results, test harness etc.',
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
      grants: [
        {
          grant: null,
          link: null,
          amount: '42236',
          date: '',
          details: null,
        },
        {
          grant: null,
          link: null,
          amount: '2120',
          date: '',
          details: null,
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Research which informs Ethereum core development'],
      statement: [
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
  {
    id: '0x3cad2fcfc5dc8fb8f549dbd057700f58619a1a9d03d2390dcb7f2041fd71dce7',
    applicationId:
      '0x3cad2fcfc5dc8fb8f549dbd057700f58619a1a9d03d2390dcb7f2041fd71dce7',
    projectId:
      '0xdc64b926541adf4b79f4dd2bce21bae08a72926dcf85833c9c59119623996b28',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
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
    name: 'Ethereum Execution Client Specification Code Quality and Refactor Enhancements',
    description:
      'This project is dedicated to improving the robustness, maintainability, and efficiency of the Ethereum execution specs clients through targeted code quality enhancements and refactoring efforts.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/cc7123c4-abe2-45b8-8d21-9088a643869a.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/38c4523d-4b0d-48ec-bc64-6b854005ba10.png',
    socialLinks: {
      website: [
        'https://github.com/richardgreg/execution-specs',
        'https://github.com/richardgreg/execution-spec-tests',
      ],
      farcaster: [],
      twitter: null,
      mirror: null,
    },
    team: [
      {
        fid: 261806,
        object: 'user',
        pfp_url: 'https://i.imgur.com/JmAQWvZ.jpg',
        profile: {
          bio: {
            text: '',
          },
        },
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
        url: 'https://github.com/richardgreg/execution-spec-tests',
        name: 'Execution Spec Tests',
        description:
          'This repository is a fork of the main Execution Spec Tests which is both a collection of test cases and a framework implemented in Python to generate tests for Ethereum execution clients.  Forking the repo is necessary to contribute to it.',
      },
      {
        url: 'https://github.com/richardgreg/execution-specs',
        name: 'Ethereum Execution Client Specifications',
        description:
          'This repository is a fork of the main Ethereum Execution Client Specifications which contains the specifications related to the Ethereum execution client, specifically the pyspec and specifications for network upgrades. Forking the repo is necessary to contribute to it.',
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://github.com/ethereum/execution-specs/pull/995',
        name: 'Transaction Nonce Type to U64 Update [Under Review]',
        description:
          'I updated the transaction nonce type from U256 to U64 across each fork’s transaction class in response to EIP-2671',
      },
      {
        url: 'https://github.com/ethereum/execution-specs/pull/884/files',
        name: '`make_receipt` Control Flow Refactor',
        description:
          'This task involved refactoring the control flow in the `make_receipt` function to enhance its coherence and readability. The changes included replacing the `if` statement with `elif` for the `FeeMarketTransaction` type and streamlining the return statements.\n\n',
      },
      {
        url: 'https://github.com/ethereum/execution-spec-tests/pull/373',
        name: 'Framework Tests and Documentation Update for Solidity v0.8.23',
        description:
          'This task involved updating the framework tests and documentation of the Ethereum Execution Specs Tests to align with Solidity version 0.8.23. It included modifying existing tests to ensure compatibility with Solidity v0.8.23 and updating the related documentation to reflect the changes and improvements in Solidity v0.8.23',
      },
      {
        url: 'https://github.com/ethereum/execution-spec-tests/issues/395',
        name: 'Further Investigation of Solidity v0.8.23',
        description:
          'Made further investigation into the alignment of Solidity v0.8.23 with Ethereum Execution Specs Test, most specifically to discover if the commandline Interface: An empty --yul-optimizations sequence can now be always provided. ',
      },
      {
        url: 'https://github.com/ethereum/execution-specs/pull/960/files',
        name: 'Access List Type Refactor to Improve Code Maintainability [Under Review]',
        description:
          'The objective of this task involved refactoring the access list type used across various transaction classes to reduce redundancy and enhance maintainability. Key updates included:\n\n• Creating a new Access class to encapsulate the access list structure, which comprises an account and a tuple of slots (i.e., Tuple[Address, Tuple[Bytes32, ...]])\n\n•  Developing helper functions encode_access_list and decode_access_list to handle the conversion between the new Access type and the previous tuple structure used for RLP encoding and decoding\n\n• Modifying existing test cases to reflect the new Access class, ensuring that tests continue to validate the correct functionality with the updated type.',
      },
      {
        url: 'https://github.com/ethereum/execution-specs/pull/957/files',
        name: 'Opcodes Variant Sorting',
        description:
          'A comprehensive refactor of the Ops variants within the Ethereum Execution Specs project. The goal was to enhance code readability and maintainability by restructuring and sorting Opcodes variants for each fork in the repositoy.',
      },
      {
        url: 'https://github.com/ethereum/execution-specs/pull/916/files',
        name: 'Unused Imports Cleanup in Test Files',
        description:
          'This task involved the investigation and removal of unused imports within the `tests/*` directory of the Execution Specs project. Identifying and eliminating these redundant imports improved overall readability and maintainability.',
      },
      {
        url: 'https://github.com/ethereum/execution-specs/pull/984/files',
        name: 'Mypy Diagnostics Enhanced [Under Review]',
        description:
          'I configured `mypy` to enable additional diagnostics for more comprehensive type checking.',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: null,
          link: null,
          amount: '10000',
          date: '',
          details: null,
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Ethereum client implementations',
        'Ethereum test networks',
      ],
      statement: [
        {
          answer:
            'My contributions to the Ethereum Execution Specs and Ethereum Execution Specs Test projects are crucial in supporting the OP Stack.\n\nUpdating and maintaining the projects ensured that the projects were immaculate so the OP Stack could adhere to the latest Ethereum specifications and standards. That helps preserve compatibility and reliability across different forks and transaction types within the OP Stack ecosystem, among other benefits.\n\nFurthermore, my work on the Execution Specs Test project, which involves updating tests to align with new Solidity versions and refactoring types in the Execution Specs for better maintainability, is of utmost importance. This work ensures the correct and efficient operation of the OP Stack, catching issues early and validating compliance with specifications. I also contributed to documenting the execution specs and related test frameworks, making it easier for developers to understand and implement the OP Stack’s requirements and functionalities.',
          question:
            'How does your project support, or is a dependency of, the OP Stack?',
        },
        {
          answer:
            'I provide immense support to the main developers; if they lose that, it will put a significant strain on them. In turn, the OP Stack might struggle to stay in sync with evolving Ethereum specifications updates, potentially leading to compatibility issues and deviations from established standards.\n\nFurthermore, without updated documentation and tests, it would become more challenging for developers to understand and work with the OP Stack effectively, potentially slowing down development and leading to implementation errors.\n\nMy contributions play a vital role in supporting Ethereum core devs and providing clear documentation. Without these efforts, the OP Stack would face increased risks and challenges in maintaining its network integrity and functionality.',
          question:
            'How would it impact the OP Stack if your project ceased to exist?',
        },
      ],
    },
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
    team: null,
    github: [
      {
        url: 'https://github.com/protocolguild/membership',
        name: 'Protocol Guild Membership + Documentation',
        description:
          "This repo is used to curate Protocol Guild's membership registry of Ethereum's active L1 R&D maintainers, and to generate our documentation: https://protocol-guild.readthedocs.io",
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
      grants: [
        {
          grant: null,
          link: null,
          amount: '557301.00',
          date: '',
          details: null,
        },
        {
          grant: null,
          link: null,
          amount: '663853.62',
          date: '',
          details: null,
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Ethereum client implementations',
        'Ethereum test networks',
        'Infrastructure to test and deploy chains',
        'Research which informs Ethereum core development',
      ],
      statement: [
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
    team: null,
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
      ventureFunding: [],
      grants: [
        {
          grant: null,
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
        {
          grant: null,
          link: null,
          amount: '10m-25m',
          date: '2021',
          details:
            'https://www.blocknative.com/blog/blocknative-raises-15m-for-block-building',
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Research which informs Ethereum core development'],
      statement: [
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
  {
    id: '0x43a266d84aa8ce67af3e6afc1bed4021fd7a06693e9eee94e1ef4767b429cc0d',
    applicationId:
      '0x43a266d84aa8ce67af3e6afc1bed4021fd7a06693e9eee94e1ef4767b429cc0d',
    projectId:
      '0x2c97e213fef2bd3f30a71edf6ed48232640368d0083dc0a134a1b59391639bde',
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
    name: 'hevm',
    description:
      'hevm is an open source, state-of-the art, fast symbolic and concrete EVM execution engine. It has a library interface and can be used as a component in high level tooling. It can be used stand-alone for ad-hoc analysis and symbolic unit test execution.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/d7cf4059-4f9c-48aa-a37a-df2f8c81933c.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/020d34f6-e8bb-43b5-8508-7935d2b00583.png',
    socialLinks: {
      website: ['https://hevm.dev/', 'https://github.com/ethereum/hevm/'],
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
        profile: {
          bio: {
            text: '',
          },
        },
        username: 'zoepar',
        power_badge: false,
        display_name: 'Zoe Par',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0xa5ccabf951e698fdd5fb8351f209b67dfe800d57',
        following_count: 0,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
      {
        fid: 844134,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/2ecdf9e0-8529-4ed6-716f-ecb9b6087600/rectcrop3',
        profile: {
          bio: {
            text: 'Symbolic Execution, SAT solving, Model Counting',
          },
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
        profile: {
          bio: {
            text: '',
          },
        },
        username: 'blishko',
        power_badge: false,
        display_name: 'blishko',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0x85dc38e7ed932370fad4d865384401f3720e6099',
        following_count: 0,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
      {
        fid: 848682,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/d1157019-9a42-4db6-5c83-4082c1343e00/rectcrop3',
        profile: {
          bio: {
            text: '',
          },
        },
        username: 'dxo-',
        power_badge: false,
        display_name: 'dxo',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0xa5543ddbb26700244b1b9b5f8721f204ca199abe',
        following_count: 0,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        url: 'https://github.com/ethereum/hevm',
        name: 'hevm',
        description: 'hevm source code',
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://hevm.dev/',
        name: 'hevm documentation and tutorial webpage',
        description: 'documentation and tutorials',
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
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Ethereum client implementations'],
      statement: [
        {
          answer:
            'The application of formal methods is widely recognized as one of the most effective techniques for ensuring correctness in software development. Symbolic execution is generally considered a best practice within smart contract development, as well as in traditional high assurance domains.\n\nhevm is a cutting edge symbolic execution engine for the EVM. Its library interface allows developers to build and experiment with new symbolic analysis tooling. It can be used to analyze programs deployed to any EVM based blockchain.\n\nhevm has been under active development since 2017. Since October 2023 we have made the following improvements:\n\n- Significant performance optimizations\n- Improved ux and documentation\n- A fully symbolic model for addresses\n- An abstract gas model\n- Support for the Cancun hardfork (WIP)\n- Expanded support for testing specific features ("cheat-codes")\n\nThese improvements make hevm faster, easier to use, and expand the range of programs that can be analyzed.',
          question:
            'How does your project support, or is a dependency of, the OP Stack?',
        },
        {
          answer:
            'OP stack developers would lose access to a powerful and cutting edge symbolic EVM implementation. Development of analysis tooling for the OP stack would become harder. Application developers targeting the OP stack would lose access to tools checking for safety and correctness.',
          question:
            'How would it impact the OP Stack if your project ceased to exist?',
        },
      ],
    },
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
        profile: {
          bio: {
            text: 'go-ethereum',
          },
        },
        username: 'lightclient',
        power_badge: false,
        display_name: 'lightclient',
        active_status: 'inactive',
        verifications: [],
        follower_count: 459,
        custody_address: '0x1d83e3f7cee2166519a24ad370002b18cb1b5ce9',
        following_count: 11,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        url: 'https://github.com/ethereum/go-ethereum',
        name: 'go-ethereum',
        description: 'Go implementation of the Ethereum protocol ',
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
      grants: [
        {
          grant: null,
          link: null,
          amount: '496896.42',
          date: '',
          details: null,
        },
        {
          grant: null,
          link: null,
          amount: '230590.08',
          date: '',
          details: null,
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Ethereum client implementations',
        'Research which informs Ethereum core development',
      ],
      statement: [
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
          bio: {
            text: 'Grandine - Ethereum Consensus Client',
          },
        },
        username: 'grandine',
        power_badge: false,
        display_name: 'Grandine',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0x82dc9436fa0d5f4020f9fb8b5c0cd719a9a18e9c',
        following_count: 0,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        url: 'https://github.com/grandinetech/grandine',
        name: 'Grandine',
        description: '',
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
      grants: [
        {
          grant: null,
          link: null,
          amount: '42236',
          date: '',
          details: null,
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Ethereum client implementations'],
      statement: [
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
        profile: {
          bio: {
            text: 'Programming language.',
          },
        },
        username: 'fe-lang',
        power_badge: false,
        display_name: 'Fe Lang',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0x5133d3e6d7b3d41892f5bf3ad479a10203ddfaf6',
        following_count: 0,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        url: 'https://github.com/ethereum/fe',
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
          grant: null,
          link: null,
          amount: '99379',
          date: '',
          details: null,
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Languages which are dedicated to developing smart contracts',
      ],
      statement: [
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
    github: [
      {
        url: 'https://github.com/eth-infinitism/account-abstraction',
        name: '',
        description: '',
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
      grants: [
        {
          grant: null,
          link: null,
          amount: '61332.92',
          date: '',
          details: null,
        },
        {
          grant: null,
          link: null,
          amount: '248448.21',
          date: '',
          details: null,
        },
        {
          grant: null,
          link: null,
          amount: '227800.2',
          date: '',
          details: null,
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Research which informs Ethereum core development'],
      statement: [
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
  {
    id: '0x65231830e92dbe255251d382e23b1fbe1763de5f88f25ceddacc90e13e1fa295',
    applicationId:
      '0x65231830e92dbe255251d382e23b1fbe1763de5f88f25ceddacc90e13e1fa295',
    projectId:
      '0x7f1256b007e1156494e43b58d5e85e6ec20f4fcf1e5cac6ebb17b702e9c0b5fb',
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
      ventureFunding: [],
      grants: [
        {
          grant: null,
          link: null,
          amount: '248448',
          date: '',
          details: null,
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Ethereum client implementations'],
      statement: [
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
  {
    id: '0x6ad58623b17b1e11053007d266b59849c7d850ca4f34946bccf6f4db1e652c85',
    applicationId:
      '0x6ad58623b17b1e11053007d266b59849c7d850ca4f34946bccf6f4db1e652c85',
    projectId:
      '0x85bef37b528ec9d7e1a9cb864e298e3c117071507acd3f522c28561435d167f5',
    category: 'DeFi',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: null,
    name: 'rhinofi',
    description:
      'rhino.fi is the ultimate Layer 2 bridge for effortlessmulti-chain token movement',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/ddd580ed-71e8-4a88-be3b-32d302c4821c.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/719357a2-dff4-43d7-a508-cbf7999186d1.png',
    socialLinks: {
      website: ['rhino.fi', 'https://app.rhino.fi/'],
      farcaster: [],
      twitter: 'https://x.com/rhinofi',
      mirror: null,
    },
    team: [
      {
        fid: 450895,
        object: 'user',
        pfp_url: 'https://i.imgur.com/bQ8iuGW.jpg',
        profile: {
          bio: {
            text: 'BD@Rhino.fi',
          },
        },
        username: 'bertienamnam',
        power_badge: false,
        display_name: 'bertienamnam',
        active_status: 'inactive',
        verifications: [],
        follower_count: 1,
        custody_address: '0x35a1577a25718a70d09e50efc00be48143985436',
        following_count: 73,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        url: 'https://github.com/rhinofi/contracts_public',
        name: null,
        description: null,
      },
    ],
    packages: [],
    links: [],
    contracts: [
      {
        address: '0x0bCa65bf4b4c8803d2f0B49353ed57CAAF3d66Dc',
        deploymentTxHash:
          '0xa1410357c7de0a63a7f6c971869a6ef7de2479ffcd116577c6aec3654165acbc',
        deployerAddress: '0x5472Cf4F1bE2aA6ad27C6F93101f7899cCAdBaf7',
        verificationProof:
          '0x2d2b38704275224c25cd65629a4a856eb1ff4076780c54744391614f059d269c6b8053552b3e843483cb4d6b577f7219ce0577f79bf8d504305d71a30e8fd1d91b',
        chainId: 10,
      },
      {
        address: '0x2f59E9086ec8130E21BD052065a9E6B2497bb102',
        deploymentTxHash:
          '0x3dce3005a6a142b38baee868e56c00013fad3dcf2bf1bdcf5526810023262150',
        deployerAddress: '0x48b47C07DCCebdBecf76eC70890bADC59e722386',
        verificationProof:
          '0xca9d6191db0f9247e590c7198a1e457bec1061710ca4c0df0e8188420df838622ddafbb45ec4d3f77a93d68108c9c4590ba272343cd4a975bd116f215da5b2171c',
        chainId: 8453,
      },
      {
        address: '0x5e023c31E1d3dCd08a1B3e8c96f6EF8Aa8FcaCd1',
        deploymentTxHash:
          '0x54fa9845d81ca9a1bd4c48b58001eb6939659dc8b0750daab05385ccdd793f7c',
        deployerAddress: '0xca9f1FebF310D72549777b7364949Ebcc24Bc766',
        verificationProof:
          '0x2e4b4aa4dee195b5b5757b5bb3fb6961fe57091ed9d1c1df156c46aac7a5aad96b51492d99e93b778433b2c43af48db09ea1016fb8253d2ebe8f4839f935548c1b',
        chainId: 34443,
      },
    ],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: null,
          link: null,
          amount: '38223',
          date: '',
          details: null,
        },
      ],
      revenue: [],
    },
    pricingModel: 'pay_to_use',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Infrastructure to test and deploy chains'],
      statement: [
        {
          answer:
            'As a layer2 bridge rhinofi plays a crucial role in fostering interoperability within the blockchain ecosystem, and especially for the OP Stack ecosystem. \n\nBy facilitating cross-chain transactions across 27+ Active EVM and non-EVM chains, and therefore providing a route for users to transition from non-OP Stack chains to OP Stack chains, rhinofi significantly lowers the barrier to entry for users interested in discovering the unique opportunities within the OP Stack ecosystem. This improved user experience not only benefits individual users but also contributes to the overall growth and adoption of OP Stack-based platforms.\n\nTo date, rhinofi has achieved the following in regards to the OP Stack ecosystem:\n\n- 7 chains supported - OP Mainnet, Base, Mode, Blast, Zircuit, Mantle, opBNB\n- Total bridged volume on OP Stack chains - $810mio+\n- Total TX on OP Stack chains - 1,7mio+\n- Total User bridged from/to OP Stack chains - 1,3mio+\n- OP Stack campaign - https://rhino.fi/rhino-summer/',
          question:
            'How does your project support, or is a dependency of, the OP Stack?',
        },
        {
          answer:
            'Over the years, rhinofi has positioned itself as a trusted bridge that users often choose as their primary option due to its excellent user interface and overall experience. The absence of rhinofi would not only diminish the potential for new liquidity to flow in from non-OP Stack chains but also reduce the fluidity and ease of movement of liquidity across the OP Stack chain.\n\nMoreover, a reduction in available bridging routes to the OP Stack - following a hypothetical decommissioning of rhinofi - would lead to an increased reliance on a smaller number of bridge partners, potentially concentrating risks among fewer actors. Such a scenario could make the ecosystem more vulnerable to disruptions and limit the diversity of options for users seeking to interact with OP Stack chains.',
          question:
            'How would it impact the OP Stack if your project ceased to exist?',
        },
      ],
    },
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
        url: 'https://github.com/ChainSafe/lodestar',
        name: 'Lodestar',
        description: 'TypeScript Implementation of Ethereum Consensus',
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
      grants: [
        {
          grant: null,
          link: null,
          amount: '248448.21',
          date: '',
          details: null,
        },
        {
          grant: null,
          link: null,
          amount: '79662.51',
          date: '',
          details: null,
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Ethereum client implementations',
        'Ethereum test networks',
        'Infrastructure to test and deploy chains',
        'Research which informs Ethereum core development',
      ],
      statement: [
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
        profile: {
          bio: {
            text: 'Protocol Blockchain Engineer',
          },
        },
        username: 'zoraiz',
        power_badge: false,
        display_name: 'Zoraiz',
        active_status: 'inactive',
        verifications: [],
        follower_count: 16,
        custody_address: '0xee96b3bcbaf80ff06e7ff1c0f8600d07e36efcc4',
        following_count: 54,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        url: 'https://github.com/rzmahmood/ethereum-pos-testnet',
        name: 'Ethereum PoS Testnet',
        description:
          'This deployment process allows you to setup and deploy your own local ethereum PoS networks with multiple nodes. This repository is targeted to developers who want to quickly modify client source code and deploy a PoS network. This setup can is can serve as a reference for building your own production deployments.',
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
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Ethereum test networks',
        'Infrastructure to test and deploy chains',
      ],
      statement: [
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
  {
    id: '0x77e86299f288162bccb5e09788c6df4e63f960e4711e10259ea5e6cb9b3ae3e1',
    applicationId:
      '0x77e86299f288162bccb5e09788c6df4e63f960e4711e10259ea5e6cb9b3ae3e1',
    projectId:
      '0x6664074da8453628ebad1cf90ca0a6a313febf2e4909d3aba0c0360f41204c73',
    category: 'NFT',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: null,
    name: 'MATUBMA',
    description:
      'I just registered for the SUNNY Awards to be eligible for 540K OP!',
    profileAvatarUrl:
      'https://cdn.charmverse.io/user-content/9100e3fe-1f1e-47cd-a424-e67c1ac6d523/50f6c156-3fd6-4220-80d5-045ef1658f8d/wazowski-mike.gif',
    projectCoverImageUrl:
      'https://cdn.charmverse.io/user-content/9100e3fe-1f1e-47cd-a424-e67c1ac6d523/84aaead4-8b2c-4cc2-8f4e-9ea1d4579984/6181.jpg',
    socialLinks: {
      website: ['https://zora.co/@compile'],
      farcaster: ['https://warpcast.com/matubma'],
      twitter: 'https://x.com/extremelyluxury',
      mirror: null,
    },
    team: [
      {
        fid: 590905,
        object: 'user',
        pfp_url:
          'https://ipfs.decentralized-content.com/ipfs/bafybeiaxfgtpocnju4gmkqom55s2kiq5xhtf53awbwdinf75d5fqeb3exm',
        profile: {
          bio: {
            text: 'Just crypto ',
          },
        },
        username: 'matubma',
        power_badge: false,
        display_name: 'Nikita',
        active_status: 'inactive',
        verifications: ['0x2f742272e0d4b9737c5598678cdc59c5be252d39'],
        follower_count: 87,
        custody_address: '0x092caafe04aead40d0d6e635c37130efcfd335da',
        following_count: 25,
        verified_addresses: {
          eth_addresses: ['0x2f742272e0d4b9737c5598678cdc59c5be252d39'],
          sol_addresses: ['3AAfe9JP9k7iXFH8EfNYdRnVP1SHWq2D8mL4KYjBV72z'],
        },
      },
    ],
    github: [
      {
        url: 'https://github.com/tsvyntar',
        name: '',
        description: '',
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://zora.co/@compile',
        name: 'MATUBMA',
        description: 'I make a nice collection and photo and imagine',
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
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Ethereum client implementations'],
      statement: [
        {
          answer:
            'I introduced people to the capabilities of the NFT marketplace Zora, now its development is going further and I also continue to work, for example, the weekly update with the listing of NFT on the Uniswap dex was warmly received by people',
          question:
            'How does your project support, or is a dependency of, the OP Stack?',
        },
        {
          answer:
            'Many people don’t even understand what cryptocurrency is and how to work with it, I help in this regard, I’m sure that if guys like me disappear, it will set the development of cryptocurrency technology back several years',
          question:
            'How would it impact the OP Stack if your project ceased to exist?',
        },
      ],
    },
  },
  {
    id: '0x78592f98adae5df9b8732474c80ec591ee3c034f128f43f702644473ccbfc40c',
    applicationId:
      '0x78592f98adae5df9b8732474c80ec591ee3c034f128f43f702644473ccbfc40c',
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
        url: 'https://github.com/NethermindEth/nethermind',
        name: 'Nethermind Execution Client',
        description:
          'A robust and performant execution client for Ethereum stakers and node operators.',
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
      ventureFunding: [],
      grants: [
        {
          grant: null,
          link: null,
          amount: '135600',
          date: '',
          details: null,
        },
        {
          grant: null,
          link: null,
          amount: '248448',
          date: '',
          details: null,
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.',
        'Ethereum client implementations',
      ],
      statement: [
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
        profile: {
          bio: {
            text: '',
          },
        },
        username: 'yperbasis',
        power_badge: false,
        display_name: 'Andrew Ashikhmin',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0xf3e25d57719bddb16f954567a12ba846a5222559',
        following_count: 0,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
      {
        fid: 213400,
        object: 'user',
        pfp_url: 'https://i.imgur.com/g3j5DKt.jpg',
        profile: {
          bio: {
            text: 'I don’t know',
          },
        },
        username: 'wmitsuda',
        power_badge: false,
        display_name: 'Willian Mitsuda',
        active_status: 'inactive',
        verifications: [],
        follower_count: 7,
        custody_address: '0xd067317ec2de41eb69ef7a630f154d877e88c0e1',
        following_count: 29,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        url: 'https://github.com/erigontech/erigon',
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
          grant: null,
          link: null,
          amount: '141650.27',
          date: '',
          details: null,
        },
        {
          grant: null,
          link: null,
          amount: '339545.72',
          date: '',
          details: null,
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Ethereum client implementations'],
      statement: [
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
    team: null,
    github: [
      {
        url: 'https://github.com/jsvisa/retro5',
        name: 'Ethereum execution client contributor',
        description:
          'List  my contributions to the Ethereum ecosystem in the past years.',
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
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Ethereum client implementations'],
      statement: [
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
  {
    id: '0x8b28b3226a7135786daed49dd67aac6c97a29c768ea0337c54bbcfb4d9388a07',
    applicationId:
      '0x8b28b3226a7135786daed49dd67aac6c97a29c768ea0337c54bbcfb4d9388a07',
    projectId:
      '0xebc40a8bfaf3b8103e2b5da3a8c89b97daf6bd8b2096b847ef686dd3245ae960',
    category: 'Social',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: null,
    name: 'Based Italia',
    description:
      'Based Italia is the Italian side community of Base through which, with my colleagues, we try to onboard in a nation that has a low crypto adoption rate.\nIn recent months we have engaged artists and influencers, published articles and shared experiences with the Base Global Community.\nThe project was born as part of Crypto4bunnies, a 360-degree crypto dissemination project. ',
    profileAvatarUrl:
      'https://cdn.charmverse.io/user-content/9a446931-d305-407c-891e-5df7065eb99b/67e582d9-957a-41ab-acf9-0fff07434971/ItalyNFT.png',
    projectCoverImageUrl:
      'https://cdn.charmverse.io/user-content/9a446931-d305-407c-891e-5df7065eb99b/8b8b8a60-ea49-4b8f-9c8e-16ea4f4f07d5/onboardsolo_5.gif',
    socialLinks: {
      website: [
        'https://paragraph.xyz/@baseitalia/community/Base%20Italia',
        'https://paragraph.xyz/@crypto4bunnies',
        'https://medium.com/@fr.dinardo',
        'https://x.com/basedita',
      ],
      farcaster: ['https://warpcast.com/~/channel/base-it'],
      twitter: 'ifiwasfrank',
      mirror: null,
    },
    team: [
      {
        fid: 331948,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/efea2fbe-62e8-457c-8e22-5521f1c29e00/original',
        profile: {
          bio: {
            text: "Building on /baseitaly\nFor a better world /vegetarian\nweb 3 and nft lover\nI love music, I'm in love with /westcoast\nCrazy like /bart",
          },
        },
        username: 'flooooooo.eth',
        power_badge: false,
        display_name: 'Flo 🎩🔵🖖🏻',
        active_status: 'inactive',
        verifications: ['0x971a6da29c0103d8ad1bc46b884b8abff9d66514'],
        follower_count: 1378,
        custody_address: '0x7009675eb342921a9f923e4c624bc2101d5072a6',
        following_count: 1749,
        verified_addresses: {
          eth_addresses: ['0x971a6da29c0103d8ad1bc46b884b8abff9d66514'],
          sol_addresses: [],
        },
      },
      {
        fid: 214025,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/f84cc51d-a7ae-43e2-4ef2-61c8a3f01500/rectcrop3',
        profile: {
          bio: {
            text: 'Crypto blogger, NFT collector, rekt degen.\nCo-founder Crypto4Bunnies🐰\nBuilding /baseitaly\nHosting /base-it\n\n',
          },
        },
        username: 'ifiwasfrank',
        power_badge: false,
        display_name: 'ifiwasfrank 🎩🔄🍖🍔',
        active_status: 'inactive',
        verifications: [
          '0x30bec89100f144aad632153de93b58a32772cf58',
          '0xa902628900bf31a8bff7caf11f052ee6abc42f66',
        ],
        follower_count: 649,
        custody_address: '0x3c162e13c43b60aa0e54e1b19bedeb5da1d884e3',
        following_count: 522,
        verified_addresses: {
          eth_addresses: [
            '0x30bec89100f144aad632153de93b58a32772cf58',
            '0xa902628900bf31a8bff7caf11f052ee6abc42f66',
          ],
          sol_addresses: [],
        },
      },
      {
        fid: 329078,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/7c11b732-0691-451f-cd9e-ad0b51f3bf00/original',
        profile: {
          bio: {
            text: 'Co-founder Crypto4Bunnies🐰 & Based Italia 🇮🇹 || web3 educator, crypto blogger, KOL & KOC, content creator. \nCo-Host /base-it 🤌🏻 & /baseitaly ',
          },
        },
        username: 'panofsky',
        power_badge: false,
        display_name: 'Panofsky',
        active_status: 'inactive',
        verifications: [
          '0xcb1db9d48f45ce50ce1642c48d829d23593eed33',
          '0xcb1db9d48f45ce50ce1642c48d829d23593eed33',
        ],
        follower_count: 167,
        custody_address: '0xfc853ca968e911a26702d619a3fe8153096d324e',
        following_count: 836,
        verified_addresses: {
          eth_addresses: [
            '0xcb1db9d48f45ce50ce1642c48d829d23593eed33',
            '0xcb1db9d48f45ce50ce1642c48d829d23593eed33',
          ],
          sol_addresses: ['3eziCvovEGsCS4C3qyrapgvURZuDf8fHbXXrjVcErKrA'],
        },
      },
    ],
    github: [
      {
        url: 'ifiwasfrank',
        name: '',
        description: '',
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
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Research which informs Ethereum core development'],
      statement: [
        {
          answer:
            'Based Italia can support OP stack with its specific outreach and onboarding of new users. Since we are not devs, our goal is to make onchain access easy for all users who would like to approach this world but, due to technical difficulties, fail. ',
          question:
            'How does your project support, or is a dependency of, the OP Stack?',
        },
        {
          answer:
            'By losing Based Italia, OP Stack would lose an important territorial community. Although we have only recently started, we are well established in the Based environment and already have a decent community. Without us, a fresh start would have to be made. ',
          question:
            'How would it impact the OP Stack if your project ceased to exist?',
        },
      ],
    },
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
    team: null,
    github: [
      {
        url: 'https://github.com/bluealloy/revm',
        name: '',
        description: '',
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
      grants: [
        {
          grant: null,
          link: null,
          amount: '198.758',
          date: '',
          details: null,
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Ethereum client implementations'],
      statement: [
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
  {
    id: '0x969f411e6dc247aab187d46953a9823e0d9efcc82e12065494c05f34316b7515',
    applicationId:
      '0x969f411e6dc247aab187d46953a9823e0d9efcc82e12065494c05f34316b7515',
    projectId:
      '0x88f63d18a020e4aefd6093b5234cc5e11e085698bcc7652b370d38939c39097f',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: {
      name: '🏰 BuidlGuidl',
      description:
        'BuidlGuidl is a curated group of builders creating open source tools and educational content.\n\nThe main focus is developer growth and mentoring. We build tools and educational content to teach the next wave of builders how/what they can build on Ethereum / EVMs.\n\n- **Tooling**: We built and actively maintain [🏗 Scaffold-ETH-2](https://scaffoldeth.io/), an open-source toolkit which allows for rapid prototyping and full scale dApp development on Ethereum.  \nWe have also lots of handy tools (OSS) created with SE-2 by our community, like [Abi.Ninja](https://abi.ninja/), [Hacked Wallet Recovery,](https://hackedwalletrecovery.com/) [address.vision](http://address.vision) and others.\n\n- **Education**: We provide a free curriculum at 🏃‍♀️ SpeedRunEthereum.com. A hands on, guided series of challenges to learn how to code and deploy smart contracts all while receiving the assistance of our community. \nWe also conduct monthly batches with developers who have just finished SRE, in which we encourage teamwork and collaboration among them, developing a group project.\nAlso lots of content in youtube, like BG Labs, Web2 to Web3, BG Episodes, among other video series, and IRL talks and workshops in ETH Global, Edcon and other events.\n\n- **Small Grants** We have different funding mechanisms to support high-impact devs, like BuidlGuidl streams, Cohort Streams towards a common objective, Ecosystem impact grants and BG Community Grants.',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/f6ed26e1-c5be-4ea9-bbce-d314c1a1034d.png',
      organizationCoverImageUrl:
        'https://storage.googleapis.com/op-atlas/f1b0c3a8-64a7-4bbb-8150-8817f47a1dbb.png',
      socialLinks: {
        website: ['https://buidlguidl.com/'],
        farcaster: ['https://warpcast.com/buidlguidl'],
        twitter: 'https://x.com/buidlguidl',
        mirror: 'https://mirror.xyz/news.buidlguidl.eth',
      },
      team: ['6048', '343051', '390184'],
    },
    name: '🏰 BuidlGuidl Client',
    description:
      "Project is in the early stages, but we already have an MVP that helps you get a reth full node up the fastest. One command, wait a couple days, and that’s it!\n\nOur goals with the client are:\n\n- Put lots of ETH nodes in LATAM, SEA and Africa.\n- Second highest priority is getting devs their own local node to build their dapps (indexers.. ). We aren't just strengthening the network but helping devs continue their edudaction\n- Third priority is building the distributed RPC and transaction service\n\nHere are the components we've built so far:\n\n- **Bootstrap Script**: We have created a bootstrap script, a one-liner command that users can paste into their terminal to clone and run the BuidlGuidl client. It is publicly available here: nodes.buidlguidl.com This script simplifies the setup process for new node operators. The code for this script is publicly available here: https://github.com/BuidlGuidl/buidlguidl-client\n\n- **BuidlGuidl Client**: We've developed a preliminary version of the BuidlGuidl client that can spin up both Execution Layer (EL) and Consensus Layer (CL) nodes. This client also includes an RPC proxy that checks in with our central hub. You can check out the initial code here: https://github.com/BuidlGuidl/buidlguidl-client\nWhile these components are functional, they are still in undergoing continuous improvement. Our focus now is on refining these tools and expanding their capabilities to ensure reliable performance and ease of use for the community.\n\n- **Proxy Server**: We have set up an initial version of our proxy server (rpc.buidlguidl.com), which will act as the hub for our distributed RPC system.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/95eb3b60-a01d-4142-b9f2-f7d8b1deaeb2.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/98f8992d-d350-410c-abc0-de560fdc070e.png',
    socialLinks: {
      website: ['https://client.buidlguidl.com/', 'https://buidlguidl.com/'],
      farcaster: ['https://warpcast.com/buidlguidl'],
      twitter: 'https://twitter.com/buidlguidl',
      mirror: null,
    },
    team: [
      {
        fid: 818956,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/1ebc2882-ea07-499e-dbf4-336977da6c00/rectcrop3',
        profile: {
          bio: {
            text: '',
          },
        },
        username: 'sfaber34',
        power_badge: false,
        display_name: 'Spencer Faber',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0x930247d13c00ce82d5fdb08e265d03cc15bf9d2b',
        following_count: 0,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
      {
        fid: 6048,
        object: 'user',
        pfp_url: 'https://i.imgur.com/9JxgXQD.jpg',
        profile: {
          bio: {
            text: '👩‍🎤 builder 🧑‍🏫 http://SpeedRunEthereum.com 🏗 http://scaffoldeth.io 🏰 http://buidlguidl.com 🎨 http://nifty.ink 🛠 http://eth.build 🏷 atg.eth',
          },
        },
        username: 'austingriffith',
        power_badge: false,
        display_name: 'Austin Griffith',
        active_status: 'inactive',
        verifications: ['0x34aa3f359a9d614239015126635ce7732c18fdf3'],
        follower_count: 3615,
        custody_address: '0xe1e037a64c9c45ca0a49bdc4a2f8ac8655130228',
        following_count: 651,
        verified_addresses: {
          eth_addresses: ['0x34aa3f359a9d614239015126635ce7732c18fdf3'],
          sol_addresses: [],
        },
      },
      {
        fid: 343051,
        object: 'user',
        pfp_url: 'https://i.imgur.com/0bIB746.jpg',
        profile: {
          bio: {
            text: 'Building things 👾',
          },
        },
        username: 'carletex',
        power_badge: false,
        display_name: 'Carlos',
        active_status: 'inactive',
        verifications: [],
        follower_count: 19,
        custody_address: '0x0b9c176b0360fc3ffd6b210b9432ff0424095751',
        following_count: 71,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
      {
        fid: 390184,
        object: 'user',
        pfp_url: 'https://i.imgur.com/tuLItVd.jpg',
        profile: {
          bio: {
            text: 'Building stuff in /buidlguidl , member of 👾Sand Garden',
          },
        },
        username: 'pabl0cks',
        power_badge: false,
        display_name: 'Pablo',
        active_status: 'inactive',
        verifications: [],
        follower_count: 20,
        custody_address: '0x39ea286ccb51befa6fb25738f540404593c87a94',
        following_count: 77,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        url: 'https://github.com/BuidlGuidl/buidlguidl-client',
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
          grant: null,
          link: null,
          amount: '227000',
          date: '',
          details: null,
        },
        {
          grant: null,
          link: null,
          amount: '18000',
          date: '',
          details: null,
        },
        {
          grant: null,
          link: null,
          amount: '221000',
          date: '',
          details: null,
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Ethereum client implementations'],
      statement: [
        {
          answer:
            'Our project supports the OP Stack by:\n\n1. **Expanding potential OP Stack node operators**: Our one-command setup simplifies node running, potentially increasing future OP Stack node operators.\n2. **Growing the developer community**: Easier participation in Ethereum at the peer to peer level, potentially increasing exploration of Layer 2 solutions like OP Stack. This may lead to more dapps developed in the OP Stack, further enriching its ecosystem and driving adoption.\n3. **Enhancing Ethereum mainnet decentralization**: More nodes in underserved regions also strengthen indirectly the OP Stack.\n4. **Improving infrastructure reliability**: A safer and more robust networking layer on Ethereum makes everything up the stack safer and more robust',
          question:
            'How does your project support, or is a dependency of, the OP Stack?',
        },
        {
          answer:
            "There probably wouldn't be a huge gap if the BuidlGuidl Client didn't exist. It's more of an efficiency play, making it easier to run nodes and, in turn, helping the Ethereum network — which the OP stack settles on — become more decentralized. \n\nWithout us, some node runners certainly wouldn't have their nodes up, while others would have to deal with the poor user experience of manually spinning up EL and CL pairs.",
          question:
            'How would it impact the OP Stack if your project ceased to exist?',
        },
      ],
    },
  },
  {
    id: '0x981b75ccf20308ec809c133e42edeb87031964d718753a949e9b9b3397775b97',
    applicationId:
      '0x981b75ccf20308ec809c133e42edeb87031964d718753a949e9b9b3397775b97',
    projectId:
      '0x0b0abc06da9c1288848a05e4a330ae3ac54474143f1c2a61d71c2c3fb37cf217',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: null,
    name: 'ERC 6551 Token Bound Accounts Public Goods Dune Research by sealaunch',
    description:
      'sealaunch is onchain intel team dedicated in-depth onchain and Dune research for chains, protocols and dApps building on Ethereum. We worked closely with the ERC-6551 core dev team to develop and provide onchain data research that informed the development, strategy and adoption of this standard across EVM chains and OP Stack chains. Currently on the Top #10 Wizards on Dune.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/e79623bd-9a9a-4fea-a6cd-2bfdd76b2ae4.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/b83423b3-5421-4d51-ba77-1e92be871768.png',
    socialLinks: {
      website: ['https://sealaunch.xyz/'],
      farcaster: ['https://warpcast.com/sealaunch'],
      twitter: 'https://x.com/sealaunch_',
      mirror: null,
    },
    team: null,
    github: [],
    packages: [],
    links: [
      {
        url: 'https://dune.com/sealaunch/erc-6551',
        name: 'ERC-6551 - Non-fungible Tokenbound Accounts',
        description:
          'We developed Dune Dashboards to provide ERC 6551 core devs an accurate and updated onchain data on the development and adoption of this standard. This helped core team, contributors and projects have deep and wide overview of key metrics to help understand patterns and outliers and define strategies for dev and growth teams. We also participated in regular dev calls to update all stakeholders involved with onchain data insights and analysis.',
      },
      {
        url: 'https://dune.com/sealaunch/erc-6551-v3-adoption',
        name: 'ERC-6551 V3 adoption',
        description: '',
      },
      {
        url: 'https://dune.com/sealaunch/erc-6551-contracts-analysis',
        name: 'ERC-6551 - Implementation and Registry breakdown',
        description: '',
      },
      {
        url: 'https://dune.com/sealaunch/erc-6551-tbas-created-per-nft-project',
        name: 'ERC-6551 TBAs created per NFT project',
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
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Research which informs Ethereum core development'],
      statement: [
        {
          answer:
            'The ERC 6551 Token Bound Accounts Dune dashboards and research by sealaunch proved to be a useful onchain data resource to first inform the core dev team on product strategy, growth and partnerships. Secondly, as public good and readily available to anyone and media to track and educate on this standard and our analysis was mentioned by media outlets like this [CoinDesk example](https://www.coindesk.com/learn/what-is-erc-6551-unpacking-the-backpack-wallet/). And lastly, had an impact in attracting builders on the OP Stack namely on Base and Optimism to adopt and build with this standard on their projects, like for example the [Perma App](https://per.ma/) - a photo social app built on Base. Helping the expansion and diversity of use-cases and utility of the OP Stack.\n',
          question:
            'How does your project support, or is a dependency of, the OP Stack?',
        },
        {
          answer:
            'We believe that onchain data dashboards helps build trust in projects building on the OP stack by providing visibility but above all transparency for any stakeholders who wish to verify the data. Additionally, having resources like open Dune dashboards helps anyone better understand and educate themselves on ERC 6551 key metrics and analytics and its ecosystem of chains, projects and builders.',
          question:
            'How would it impact the OP Stack if your project ceased to exist?',
        },
      ],
    },
  },
  {
    id: '0xb0913f628928698951760223a5691480a8f63b4545b5177490959b8966330272',
    applicationId:
      '0xb0913f628928698951760223a5691480a8f63b4545b5177490959b8966330272',
    projectId:
      '0x83b46efce8ff1937a49883b323b22d3483d1843522f614ab4f20cc20545067bb',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: null,
    name: 'Jonas Project',
    description: 'This is a description',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/72790b69-7d90-4f9c-9266-bc5ab8016183.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/600b373a-da34-49c9-a7de-cd9306a7e90c.png',
    socialLinks: {
      website: [],
      farcaster: [],
      twitter: null,
      mirror: null,
    },
    team: null,
    github: ['https://github.com/JSeiferth/op-analytics'],
    packages: [],
    links: [
      {
        url: 'https://retrofunding.optimism.io/projects/0x83b46efce8ff1937a49883b323b22d3483d1843522f614ab4f20cc20545067bb/repos',
        name: 'Nu link who this',
        description: 'this is a link',
      },
    ],
    contracts: [
      {
        address: '0x7c713D28784165C0648CEbE22C2210A534C3a1B0',
        deploymentTxHash:
          '0x66115f65a40352b61f452eb18d93fe6501920cff6591e74d6daee48cb65fb8cb',
        deployerAddress: '0x4a6894Dd556fab996f8D50b521f900CAEedC168e',
        verificationProof:
          '0x4ee242d2885bae453ebbf426af4b13e4a4b3d4f07e710617000ac0a8741c09bc378a7f93c6b554813398289b0d7e7f31b8d6c784777f0e7fc4c1b17b66b31c3f1c',
        chainId: 10,
      },
    ],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: null,
          link: null,
          amount: '25m-50m',
          date: '2020',
          details: 'I received a smol lone from my farther ',
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Ethereum client implementations',
        'Ethereum test networks',
        'Infrastructure to test and deploy chains',
        'Languages which are dedicated to developing smart contracts',
        'Research which informs Ethereum core development',
      ],
      statement: [
        {
          answer:
            ' \nIt is very dependency and very important to Mrs OP \nIt is very dependency and very important to Mrs OP \nIt is very dependency and very important to Mrs OP \nIt is very dependency and very important to Mrs OP awdwadawdawdawdadwawdawadwwadawdwa\nIt is very dependency and very important to Mrs OP \nIt is very dependency and very important to Mrs OP \nIt is very dependency and very important to Mrs OP \nIt is very dependency and very important to Mrs OP \nIt is very dependency and very important to Mrs OP \nIt is very dependency and very important to Mrs OP \nIt is very dependency and very important to Mrs OP \nIt is very dependency and very important to Mrs OP \nIt is very dependency and very important to Mrs OP \nIt is very dependency and very important to Mrs OP \nIt is very dependency and very important to Mrs OP \nIt is very dependency and very important to Mrs OP ',
          question:
            'How does your project support, or is a dependency of, the OP Stack?',
        },
        {
          answer:
            'It is very dependency and very important to Mrs OP \nIt is very dependency and very important to Mrs OP \nIt is very dependency and very important to Mrs OP \nIt is very dependency and very important to Mrs OP awdwadawdawdawdadwawdawadwwadawdwa\nIt is very dependency and very important to Mrs OP \nIt is very dependency and very important to Mrs OP \nIt is very dependency and very important to Mrs OP \nIt is very dependency and very important to Mrs OP \nIt is very dependency and very important to Mrs OP \nIt is very dependency and very important to Mrs OP \nIt is very dependency and very important to Mrs OP \nIt is very dependency and very important to Mrs OP \nIt is very dependency and very important to Mrs OP \nIt is very dependency and very important to Mrs OP \nIt is very dependency and very important to Mrs OP \nIt is very dependency and very important to Mrs OP ',
          question:
            'How would it impact the OP Stack if your project ceased to exist?',
        },
      ],
    },
  },
  {
    id: '0xb0acb1a252cdb3b2a7dfadc8c5925da71f005082ec045d8bb3855f64ac4774b9',
    applicationId:
      '0xb0acb1a252cdb3b2a7dfadc8c5925da71f005082ec045d8bb3855f64ac4774b9',
    projectId:
      '0xc71faa1bcb4ceb785816c3f22823377e9e5e7c48649badd9f0a0ce491f20d4b3',
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
    team: null,
    github: [
      {
        url: 'https://github.com/libp2p/go-libp2p',
        name: 'go-libp2p',
        description: 'Main project repository.',
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
    grantsAndFunding: {
      ventureFunding: [],
      grants: [],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Ethereum client implementations',
        'Ethereum test networks',
        'Research which informs Ethereum core development',
      ],
      statement: [
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
  {
    id: '0xb6a47d2320d9ed131185bb78d349d4fc7887e599bc0d99bb3d8978b1afed65c7',
    applicationId:
      '0xb6a47d2320d9ed131185bb78d349d4fc7887e599bc0d99bb3d8978b1afed65c7',
    projectId:
      '0x193256f7753cf4350332ab5222990944b45d7ae280cd64e2bef8127ede2a2343',
    category: 'Governance',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: {
      name: 'LexDAO',
      description: '',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/ba15df22-7f86-42af-bbec-1013e2643e5c.png',
      organizationCoverImageUrl: '',
      socialLinks: {
        website: [],
        farcaster: [],
        twitter: '',
        mirror: '',
      },
      team: ['317851'],
    },
    name: 'LexDAO',
    description:
      'LexDAO is a legal engineering guild bringing law to code and coded law to the masses. Law is a public good.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/47a526bd-99c9-4d75-9798-c4cbfaf90c3a.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/98c31632-2782-43aa-af23-9727cbd886e2.png',
    socialLinks: {
      website: ['https://lexdao.org/'],
      farcaster: ['@lexdao'],
      twitter: '@lex_dao',
      mirror: null,
    },
    team: [
      {
        fid: 317851,
        object: 'user',
        pfp_url: 'https://i.imgur.com/yJSYZCw.jpg',
        profile: {
          bio: {
            text: 'Legal Engineering Guild | Law is a public good | Bringing the legal settlement layer to code',
          },
        },
        username: 'lexdao',
        power_badge: false,
        display_name: 'LexDAO',
        active_status: 'inactive',
        verifications: [],
        follower_count: 88,
        custody_address: '0xf8a10503988a2a18b2694a97ccd82560cd777182',
        following_count: 67,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        url: 'https://github.com/lexDAO/LexCorpus',
        name: 'LexDAO',
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
          grant: null,
          link: null,
          amount: '98000',
          date: '',
          details: null,
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Research which informs Ethereum core development'],
      statement: [
        {
          answer:
            "LexDAO supports the OP Stack by providing decentralized legal tooling and smart contract enforcement, ensuring compliance and dispute resolution for dApps built on the OP Stack. Our services enhance the security and trustworthiness of transactions, making legal mechanisms accessible, reducing legal risks, and fostering safer adoption of Optimism's modular blockchain infrastructure. This support is crucial for maintaining operational integrity and regulatory compliance within the OP Stack ecosystem, contributing to the overall growth and resilience of projects leveraging the technology.",
          question:
            'How does your project support, or is a dependency of, the OP Stack?',
        },
        {
          answer:
            "If LexDAO ceased to exist, the OP Stack would lose a critical suppor element of the layer of decentralized legal support, impacting dApps' ability to resolve disputes, enforce smart contracts, and manage legal compliance effectively. This would increase legal uncertainties, potential liabilities, and operational risks for developers and users, potentially undermining trust and adoption of the OP Stack ecosystem. Without LexDAO, projects would need to seek traditional, less efficient legal solutions, reducing the OP Stack’s appeal as a secure, compliant blockchain infrastructure for decentralized applications.",
          question:
            'How would it impact the OP Stack if your project ceased to exist?',
        },
      ],
    },
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
    team: null,
    github: [
      {
        url: 'https://github.com/ethereum/solidity',
        name: 'Solidity GitHub repository',
        description:
          'Official GitHub open source repository for Solidity—an object-oriented, high-level language for implementing smart contracts. 🌐',
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
      grants: [
        {
          grant: null,
          link: null,
          amount: '217300',
          date: '',
          details: null,
        },
        {
          grant: null,
          link: null,
          amount: '422361',
          date: '',
          details: null,
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Languages which are dedicated to developing smart contracts',
      ],
      statement: [
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
    team: null,
    github: [
      {
        url: 'https://github.com/libp2p/jvm-libp2p',
        name: 'jvm-libp2p',
        description: 'The main repository for jvm-libp2p',
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
    grantsAndFunding: {
      ventureFunding: [],
      grants: [],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Ethereum client implementations',
        'Research which informs Ethereum core development',
        'Ethereum test networks',
      ],
      statement: [
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
  {
    id: '0xbfd7b95f33e8c7a404c83f66590f3e39b05403211615887b0cd2dcd37cb9eea7',
    applicationId:
      '0xbfd7b95f33e8c7a404c83f66590f3e39b05403211615887b0cd2dcd37cb9eea7',
    projectId:
      '0x482720e73e91229b5f7d5e2d80a54eb8a722309c26dba03355359788b18f4373',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: null,
    name: 'RubyScore',
    description:
      'RubyScore - decentralized on-chain ranking protocol that represents layer 2 segmentation on 10+ parameters and scores the performance of wallets on various parameters. Key features of the platform include a unique on-chain reputation system utilizing SBT, advanced analytics to evaluate 10+ network parameters, and a distinctive ranking system with NFT rewards. API offering, which will allow user wallets to be verified through RubyScore, as well as using the API for verification through other dApps.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/598566b6-6d99-4476-a7a0-3842629b7d71.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/b4311568-e6e6-4362-94d6-37af529d974c.png',
    socialLinks: {
      website: ['https://rubyscore.io/'],
      farcaster: ['https://warpcast.com/rubyscore'],
      twitter: 'https://twitter.com/rubyscore_io',
      mirror: 'https://medium.com/@rubyscore.io',
    },
    team: [
      {
        fid: 525960,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/b653a3ae-a516-4648-07f3-33fd436b7400/rectcrop3',
        profile: {
          bio: {
            text: 'CBDO RubyScore',
          },
        },
        username: 'egormajj',
        power_badge: false,
        display_name: 'egormajj',
        active_status: 'inactive',
        verifications: ['0xd50a234082c1cea12a7a9dd6f37a85fcc55ed459'],
        follower_count: 18,
        custody_address: '0x86f6c1383f1e98d21cbf7a9ccb8d4cc9b33c822c',
        following_count: 72,
        verified_addresses: {
          eth_addresses: ['0xd50a234082c1cea12a7a9dd6f37a85fcc55ed459'],
          sol_addresses: [],
        },
      },
      {
        fid: 569953,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/c33201f0-11ec-4fca-9ed6-3ea795b26600/rectcrop3',
        profile: {
          bio: {
            text: 'Ronald',
          },
        },
        username: 'ronald29',
        power_badge: false,
        display_name: 'Ilya',
        active_status: 'inactive',
        verifications: ['0xab4ee3e9a48057bcfb2fbc8872dcf0273c115e49'],
        follower_count: 12,
        custody_address: '0x377a8545af73d03591762426852c0b800e8c0690',
        following_count: 106,
        verified_addresses: {
          eth_addresses: ['0xab4ee3e9a48057bcfb2fbc8872dcf0273c115e49'],
          sol_addresses: ['9QSwZxMTgrcS9iup4YcjQouWhJfeGVKCMbjmSweXmEY9'],
        },
      },
      {
        fid: 392091,
        object: 'user',
        pfp_url: 'https://i.imgur.com/usJeOu0.jpg',
        profile: {
          bio: {
            text: 'On-chain ranking protocol.\nWebSite: https://rubyscore.io/dashboard',
          },
        },
        username: 'rubyscore',
        power_badge: false,
        display_name: 'RubyScore',
        active_status: 'inactive',
        verifications: ['0x0d0d5ff3cfef8b7b2b1cac6b6c27fd0846c09361'],
        follower_count: 57,
        custody_address: '0xa0717353ebb41c7f77da36974d03f42d894c00be',
        following_count: 84,
        verified_addresses: {
          eth_addresses: ['0x0d0d5ff3cfef8b7b2b1cac6b6c27fd0846c09361'],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        url: 'https://github.com/Rubyscoreio/main_contracts',
        name: '',
        description: '',
      },
    ],
    packages: [],
    links: [],
    contracts: [
      {
        address: '0xB9cC0Bb020cF55197C4C3d826AC87CAdba51f272',
        deploymentTxHash:
          '0xcec2938d309e3009052eced872e594bcd59358a6f2645c11fd99ef8eb81da427',
        deployerAddress: '0x72f46FFBd3213218137015EBCcf70bFAaF619513',
        verificationProof:
          '0x861e5550e00e6d535ea491978c6d821a140703d48bba575a5d2dae19cc87e7211e2171c9f6d8dd89a0d53a85f74ba6c251a831a216f3dda028de77a85f1ab4fa1c',
        chainId: 10,
      },
      {
        address: '0x009DBFEe9E155766AF434ED1652CA3769B05E76f',
        deploymentTxHash:
          '0x787a152f33cc685f02ea31c4e5d819f920a021019cf067f5e3cdbd18a8d2f7e8',
        deployerAddress: '0x72f46FFBd3213218137015EBCcf70bFAaF619513',
        verificationProof: '0x0',
        chainId: 10,
      },
      {
        address: '0xbDB018e21AD1e5756853fe008793a474d329991b',
        deploymentTxHash:
          '0x73dedda26a2b1531a605eef3debaa2e40e1adfc4c2bf9953064b734b77ac4aa2',
        deployerAddress: '0x72f46FFBd3213218137015EBCcf70bFAaF619513',
        verificationProof: '0x0',
        chainId: 8453,
      },
      {
        address: '0xe10Add2ad591A7AC3CA46788a06290De017b9fB4',
        deploymentTxHash:
          '0x78b9606146f0c0fef8623022241d4e1309af75863a4fe9e6889673b92523066f',
        deployerAddress: '0x381c031bAA5995D0Cc52386508050Ac947780815',
        verificationProof:
          '0xda772df0896173252b645b16e8bc651788691033802b46b5caf8b42285beedd27bf6ae07c1314a3dcdb19d076216b647c0d82d6071f1d470cdcb362da5810abe1b',
        chainId: 8453,
      },
      {
        address: '0xbDB018e21AD1e5756853fe008793a474d329991b',
        deploymentTxHash:
          '0xc1fd94b4ecd83249d0d452606624bd9df298954b28fa1b26454295b0df30998b',
        deployerAddress: '0x72f46FFBd3213218137015EBCcf70bFAaF619513',
        verificationProof: '0x0',
        chainId: 7777777,
      },
      {
        address: '0xDC3D8318Fbaec2de49281843f5bba22e78338146',
        deploymentTxHash:
          '0x6e7f6b84c44bfcebe743982f07dc2cf9a72daeb4fed7835afed18ecf90e3370f',
        deployerAddress: '0x72f46FFBd3213218137015EBCcf70bFAaF619513',
        verificationProof: '0x0',
        chainId: 7777777,
      },
    ],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: null,
          link: null,
          amount: '67.262',
          date: '',
          details: null,
        },
      ],
      revenue: [],
    },
    pricingModel: 'freemium',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Ethereum client implementations'],
      statement: [
        {
          answer:
            'RubyScore core is built on Optimism and RubyScore also provides network and wallet metrics on a set of parameters. The RubyScore metrics dashboard includes such projects as Base, Zora, Mantle, opBNB, Blast, Manta built on OP-Stack, as well as Ethereum itself is integrated into the RubyScore metrics dashboard.',
          question:
            'How does your project support, or is a dependency of, the OP Stack?',
        },
        {
          answer:
            'If RubyScore ceases to exist, it will have no critical impact, but users will be left without accurate metrics of networks built on OP-Stack and Ethereum, as well as viewing statistics of their wallet in these networks.',
          question:
            'How would it impact the OP Stack if your project ceased to exist?',
        },
      ],
    },
  },
  {
    id: '0xc662f93196869bd6f0d5bff407c17482ad7670f83ef687dd994c20ff8abd67ae',
    applicationId:
      '0xc662f93196869bd6f0d5bff407c17482ad7670f83ef687dd994c20ff8abd67ae',
    projectId:
      '0xd97260a3e245900619162288374fe95a901e462c2429a44bea21ff68ad7c0174',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: {
      name: 'Consensus R&D',
      description:
        'The Consensus R&D team focuses on both short and long-term research and development projects that aim to improve Ethereum’s security, sustainability, and scalability while retaining strong decentralization. This includes proof-of-stake consensus design, crypto-economic mechanism design, software simulations and experiments, spec writing, security assessments, testing, and more.',
      organizationAvatarUrl: null,
      organizationCoverImageUrl: null,
      socialLinks: {
        website: [],
        farcaster: [],
        twitter: null,
        mirror: null,
      },
      team: ['7717', '8521', '7236'],
    },
    name: 'Consensus R&D (Ethereum Research)',
    description:
      'The Consensus R&D team focuses on both short and long-term research and development projects that aim to improve Ethereum’s security, sustainability, and scalability while retaining strong decentralization. This includes proof-of-stake consensus design, crypto-economic mechanism design, software simulations and experiments, spec writing, security assessments, testing, and more.\n\nHere are some of the projects and research directions that we have been involved with over the period covered by this RPGF round:\n\n- Inclusion lists: in the first half of 2024, an existing inclusion list proposal has been refined together with client teams, culminating in [EIP-7547](https://eips.ethereum.org/EIPS/eip-7547), which was for a time considered for inclusion in Electra. Though that has not transpired, the work on EIP-7547 has still informed our understanding of the inclusion list design space. Eventually, this work has led to further research on more distributed inclusion list mechanisms, such as [FOCIL](https://ethresear.ch/t/fork-choice-enforced-inclusion-lists-focil-a-simple-committee-based-inclusion-list-proposal/19870)\n\n- MaxEB: our team has greatly contributed to the development of the MaxEB proposal, both with [early research and security analysis](https://notes.ethereum.org/nHqON5l7SACkL_nPwz8Vqw) and with spec development. This has led to [EIP-7251](https://eips.ethereum.org/EIPS/eip-7251), which has been included in the Electra fork. The MaxEB spec has meanwhile been incorporated in the [Electra spec](https://github.com/ethereum/consensus-specs/tree/dev/specs/electra).\n\n- PeerDAS: research, spec writing and coordination of the development effort. Starting from last fall, many research posts have been written on the topic, culminating in the [PeerDAS spec](https://github.com/ethereum/consensus-specs/tree/dev/specs/_features/eip7594) as a feature in the Ethereum consensus specifications, and with the corresponding [EIP-7594](https://eips.ethereum.org/EIPS/eip-7594) being considered for inclusion in the next fork. \n\n- Consensus protocol research: much research work has gone into the topic of Single Slot Finality, with papers, [ethresearch posts](https://ethresear.ch/t/orbit-ssf-solo-staking-friendly-validator-set-management-for-ssf/19928), [notes](https://vitalik.eth.limo/general/2024/06/30/epochslot.html) and a [wip high-level spec](https://github.com/fradamt/ssf) being worked on, among other things. \n\n- Staking economics: our team actively participates in research around staking economics and generally the future of staking.\n\n',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/0c2afd20-d954-478d-aaf5-db96fcb16ff6.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/8788941d-7915-440e-8570-9e0f9926e374.png',
    socialLinks: {
      website: ['https://github.com/ethereum/consensus-specs/'],
      farcaster: [],
      twitter: null,
      mirror: null,
    },
    team: [
      {
        fid: 7717,
        object: 'user',
        pfp_url: 'https://i.imgur.com/A9B5Wve.jpg',
        profile: {
          bio: {
            text: 'Ethereum researcher',
          },
        },
        username: 'fradamt',
        power_badge: false,
        display_name: 'Francesco',
        active_status: 'inactive',
        verifications: ['0x2f7384ad20392cc22263f83001ea67320ec4c3e7'],
        follower_count: 165,
        custody_address: '0x1fb36c3c2f082cc791dd9029dad9d8f0236ee7ab',
        following_count: 32,
        verified_addresses: {
          eth_addresses: ['0x2f7384ad20392cc22263f83001ea67320ec4c3e7'],
          sol_addresses: [],
        },
      },
      {
        fid: 8521,
        object: 'user',
        pfp_url: 'https://i.imgur.com/AhGXGGN.png',
        profile: {
          bio: {
            text: 'Ethereum Research',
          },
        },
        username: 'carlbeek',
        power_badge: false,
        display_name: 'CarlBeek',
        active_status: 'inactive',
        verifications: ['0xd20beba9efa30fb34af93af5c91c9a4d6854eac4'],
        follower_count: 197,
        custody_address: '0xa23bb97b2779e3634f703f34e8c5694310b3bd96',
        following_count: 51,
        verified_addresses: {
          eth_addresses: ['0xd20beba9efa30fb34af93af5c91c9a4d6854eac4'],
          sol_addresses: [],
        },
      },
      {
        fid: 7236,
        object: 'user',
        pfp_url: 'https://i.imgur.com/U98ppk4.jpg',
        profile: {
          bio: {
            text: 'Ethereum R&D || Bulbasaur Research intern',
          },
        },
        username: 'hww',
        power_badge: false,
        display_name: 'Hsiao-Wei Wang',
        active_status: 'inactive',
        verifications: ['0xc577b071a2cbe812c44db125a87f66d08301c200'],
        follower_count: 175254,
        custody_address: '0x6448c78130cd42520bf5627703e5e3da2b0d8320',
        following_count: 70,
        verified_addresses: {
          eth_addresses: ['0xc577b071a2cbe812c44db125a87f66d08301c200'],
          sol_addresses: [],
        },
      },
    ],
    github: [],
    packages: [],
    links: [
      {
        url: 'https://github.com/ethereum/consensus-specs/',
        name: 'Consensus Specs',
        description: 'the Ethereum Consensus Layer specifications',
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
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Research which informs Ethereum core development'],
      statement: [
        {
          answer:
            'Our team, and the various research and specification projects it is involved in, are one of the primary drivers of the first part of the Ethereum R&D pipeline. Besides the general dependency of the OP stack on Ethereum, we are also specifically quite involved in DA layer scaling work, which is crucial to allowing OP chains, and all rollups, to become amenable for all kinds of real world applications',
          question:
            'How does your project support, or is a dependency of, the OP Stack?',
        },
        {
          answer:
            'Unless other teams stepped in to fill some of the functions that we currently do, the OP stack would probably have to migrate to a different L1. We believe there is much work still to do on the core L1 protocol, without which Ethereum cannot continue to be the ideal place for rollups to settle.',
          question:
            'How would it impact the OP Stack if your project ceased to exist?',
        },
      ],
    },
  },
  {
    id: '0xc6ce7c19e261fb70c69dd6a721637b82fa21a048bf668295487af011c8700186',
    applicationId:
      '0xc6ce7c19e261fb70c69dd6a721637b82fa21a048bf668295487af011c8700186',
    projectId:
      '0x5759249c433d67eeb2ca1b6ff827feec164b60b92e849d6ce0db0974cedc4a89',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
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
        url: 'https://github.com/paradigmxyz/reth',
        name: 'OP Reth',
        description: '',
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
      grants: [
        {
          grant: null,
          link: null,
          amount: '149069',
          date: '',
          details: null,
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Ethereum client implementations'],
      statement: [
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
  {
    id: '0xd261ecf2a0de917337ca2256a45c6c898dbfb1bd6f3a1486276cad0055843913',
    applicationId:
      '0xd261ecf2a0de917337ca2256a45c6c898dbfb1bd6f3a1486276cad0055843913',
    projectId:
      '0xa17b3d5e5ef47fe50e56d9fea3c4c90e72b0c9127b8eab54058e5ca82111378c',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
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
    name: 'Ethereum devnets and testing tools',
    description:
      'As a team, we focus on Ethereum testing and protocol upgrades. In order to do this well, We build and maintain many projects that help ship Ethereum upgrades safely and quickly. A full list of our open-source tools can be found on our website at https://ethpandaops.io/projects/.\n\nOne of the major projects the team undertakes is supporting Ethereum hardforks with devnets. Devnets are fully-fledged Ethereum networks that we use for testing new features. We have infrastructure tooling that makes it possible to run a local devnet on your machine. For more intricate tests and networks, we also provide tools to deploy nodes across multiple remote servers. All of these networks come with tools to analyze, test, and debug them. Devnets help Ethereum core developers to make their clients more reliable by identifying issues before they happen on Ethereum mainnet. ',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/0be4f6a2-ff4f-4681-a888-8abeb659bfd3.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/dabbf4f6-1a92-4562-a563-7a5749c055ef.png',
    socialLinks: {
      website: ['https://ethpandaops.io'],
      farcaster: ['https://warpcast.com/ethpandaops'],
      twitter: 'https://x.com/ethpandaops',
      mirror: null,
    },
    team: null,
    github: [
      {
        url: 'https://github.com/ethpandaops/pectra-devnets',
        name: 'Pectra devnets',
        description:
          'Pectra is the next upgrade scheduled on Ethereum. The linked config repo contains all the code that is used for defining and spinning up the devnets used to test the Pectra upgrade. These devnets also help developers iteratively add features and testing teams can focus on finding bugs in devnets before adding more features. ',
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://notes.ethereum.org/@ethpandaops/dencun-devnet-10-analysis',
        name: 'Devnet Analysis document',
        description:
          'The above example is an example of a Dencun devnet analysis we performed for the Dencun fork. We will perform similar analysis for Pectra once the devnets are more stable. ',
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
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Ethereum test networks',
        'Infrastructure to test and deploy chains',
        'Research which informs Ethereum core development',
      ],
      statement: [
        {
          answer:
            'The Ethereum devnets and tooling that we build help speed up the delivery of forks on mainnet. These tools were instrumental to testing and analysing Ethereum mainnet helping lead to the chosen blob target and max for the Dencun fork, which subsequently aided the OP-stack by reducing the cost of operations. The analysis tools additionally help us monitor the health of Ethereum, which directly contributes to decisions we make about scaling the L1. ',
          question:
            'How does your project support, or is a dependency of, the OP Stack?',
        },
        {
          answer:
            'Since a lot of the tools are used by Core developers to test and ship forks, it would directly impact their ability to do so or increase the amount of friction they need to go through. Core dev friction directly correlates to the stability of the L1 chain as well as ability to ship future forks. These shifts would negatively impact the OP stacks operations. ',
          question:
            'How would it impact the OP Stack if your project ceased to exist?',
        },
      ],
    },
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
    team: null,
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
    grantsAndFunding: {
      ventureFunding: [],
      grants: [],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Research which informs Ethereum core development'],
      statement: [
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
  {
    id: '0xdacaf56aab0be9368356fa9bf036b5e0499ed3b8f4e04f0a826281e2939e7d06',
    applicationId:
      '0xdacaf56aab0be9368356fa9bf036b5e0499ed3b8f4e04f0a826281e2939e7d06',
    projectId:
      '0x356eee43066d2e12c46f06eb710b8d33d6655db061cb3b24d7a38433f228a45b',
    category: 'NFT',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: null,
    name: 'Mysth NFT',
    description:
      'NFT works based on block Chain with a collection of Myth Canvas',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/25d67767-622f-4a1b-b62c-4bdadc9e145b.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/e90d87d2-aac9-46f3-90bf-3708f4e30807.png',
    socialLinks: {
      website: [
        'https://opensea.io/0x8Df4e551cC464492eF7858256e57A57006D338e5',
      ],
      farcaster: ['https://warpcast.com/0xethl2'],
      twitter: 'https://x.com/Hula_ardi',
      mirror: null,
    },
    team: [
      {
        fid: 330020,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/82433e12-26ba-4623-1d48-aeed0833af00/rectcrop3',
        profile: {
          bio: {
            text: 'NOT - Your Priority  But your Fav \nNormal Human ',
          },
        },
        username: '0xethl2',
        power_badge: false,
        display_name: 'Miracle 🎩',
        active_status: 'inactive',
        verifications: ['0x8df4e551cc464492ef7858256e57a57006d338e5'],
        follower_count: 991,
        custody_address: '0x8df4e551cc464492ef7858256e57a57006d338e5',
        following_count: 799,
        verified_addresses: {
          eth_addresses: ['0x8df4e551cc464492ef7858256e57a57006d338e5'],
          sol_addresses: ['DijPS9LoKgqjs1rJhDRNR7iXq5XKTnuTaC3wRRfySimb'],
        },
      },
      {
        fid: 19697,
        object: 'user',
        pfp_url: 'https://i.imgur.com/qM9t21Y.jpg',
        profile: {
          bio: {
            text: 'Digital Artist On Optimism Ecosystem. Find my art on Optimism, Base and Zora\n\nhttps://aethernity.xyz',
          },
        },
        username: 'travenesia',
        power_badge: false,
        display_name: 'travenesia',
        active_status: 'inactive',
        verifications: ['0xa49cee842116a89299a721d831bcf0511e8f6a15'],
        follower_count: 166,
        custody_address: '0x066bc08cecb6eaa74c093297afacdefd00dba0bd',
        following_count: 330,
        verified_addresses: {
          eth_addresses: ['0xa49cee842116a89299a721d831bcf0511e8f6a15'],
          sol_addresses: ['AXGExrJwaGDKF46H4ZnEwFnpEHqMX1WKVEUggsESgimD'],
        },
      },
      {
        fid: 5092,
        object: 'user',
        pfp_url:
          'https://i.seadn.io/gae/K_nUxh4Zv4thfyBlgr3e4WO1YXcWU_Eu5W1wApR-tsRjjk7b2fSn3CuRQmn7vILXbqYviV6J37o8eTfBjTYr_rc2l96Nee-qnor0Kqo?w=500&auto=format',
        profile: {
          bio: {
            text: 'Building Agora. Know lots about blockchain indexing. Bought Jack a coffee once. He refused it.',
          },
        },
        username: 'kent',
        power_badge: true,
        display_name: 'Kent {{Agora}}',
        active_status: 'inactive',
        verifications: ['0xc323ee1d28d2508667f4bebfc26f93c60abdd203'],
        follower_count: 1434,
        custody_address: '0x696b85acf6cef6b924b9acb15670a27eeec53643',
        following_count: 140,
        verified_addresses: {
          eth_addresses: ['0xc323ee1d28d2508667f4bebfc26f93c60abdd203'],
          sol_addresses: [],
        },
      },
    ],
    github: [],
    packages: [],
    links: [
      {
        url: 'https://warpcast.com/0xethl2',
        name: 'Miracle ',
        description:
          'NFT works based on block Chain with a collection of Myth Canvas',
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
          date: '2021',
          details: 'For support a project',
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Ethereum client implementations'],
      statement: [
        {
          answer:
            'Keep support lokal pride jangan lupa makan nasi goreng french fries RM Padang Panjang yang telah berpartisipasi mengikuti kuis Kak Joewita kau tak pernah menjadi planet Neptunus memiliki tubuh dan dapat menyebabkan',
          question:
            'How does your project support, or is a dependency of, the OP Stack?',
        },
        {
          answer:
            'A will be fans artistik shoujo bola jd ha depe instan kondisi uang tunai bekasi barat dan familia Cerambycidae cek ya kak Ega telah ditebang KONTLOTLDN jadi orang yang telah berpartisipasi dalam bahasa',
          question:
            'How would it impact the OP Stack if your project ceased to exist?',
        },
      ],
    },
  },
  {
    id: '0xdad31a9e6fb92128c654b6c86b9d9ef3ec4aaf13b36bb0efc374ed8de0a7b759',
    applicationId:
      '0xdad31a9e6fb92128c654b6c86b9d9ef3ec4aaf13b36bb0efc374ed8de0a7b759',
    projectId:
      '0x20b1e383963c6d8c3aad208dd5b90b27462a47f9835d567ed44137ade1b5cb45',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: null,
    name: 'MetaCRM',
    description:
      'MetaCRM provides a suite of innovative software solutions empowering marketing efficiency & personalized customer service for Web3 businesses.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/f3d4c02b-2511-4026-a886-1b74a7a4c206.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/1d6693d9-6b5e-489e-83dc-c4416f78ca93.png',
    socialLinks: {
      website: ['https://metacrm.inc/#/'],
      farcaster: ['https://warpcast.com/metacrm'],
      twitter: 'https://x.com/metacrm_inc',
      mirror: null,
    },
    team: [
      {
        fid: 477715,
        object: 'user',
        pfp_url: 'https://i.imgur.com/mZulcms.jpg',
        profile: {
          bio: {
            text: '',
          },
        },
        username: 'metacrm',
        power_badge: false,
        display_name: 'MetaCRM',
        active_status: 'inactive',
        verifications: [],
        follower_count: 7,
        custody_address: '0xcb15e788f322445a7ddb9f50218e0e6f96034ec2',
        following_count: 69,
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
        url: 'https://app.radiant.capital/#/markets',
        name: 'Use case',
        description: 'Examples - dApps installed our front-end widget',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: null,
          link: null,
          amount: '1m-5m',
          date: '2023',
          details:
            'Seed Round. Investors are Cherubic Ventures, Red Building Capital, Blockchain Founders Fund, and Ondine Capital',
        },
      ],
      revenue: [],
    },
    pricingModel: 'freemium',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Ethereum client implementations'],
      statement: [
        {
          answer:
            'MetaCRM offers a suite of innovative software solutions that enhance marketing efficiency and deliver personalized customer service designed for Web3 projects and the Optimism ecosystem. By providing these tailored tools, MetaCRM supports the OP Stack by enabling projects to optimize their user engagement and growth strategies, ultimately contributing to the overall success and scalability of the ecosystem.',
          question:
            'How does your project support, or is a dependency of, the OP Stack?',
        },
        {
          answer:
            'If our project were to cease to exist, it would leave a significant gap in the Optimism ecosystem. Currently, there are no comprehensive, all-in-one solutions that are natively built with blockchain compatibility for customer support and user growth. This would be a setback for projects looking to thrive within the Optimism ecosystem.\n\nMoreover, two of the core goals of the Optimism Foundation are to ensure that end-users have an excellent user experience and that projects have access to the necessary tools to succeed. Our project directly addresses these objectives by providing valuable solutions, so our absence would create a substantial challenge for the entire Optimism ecosystem.',
          question:
            'How would it impact the OP Stack if your project ceased to exist?',
        },
      ],
    },
  },
  {
    id: '0xdbbddc9ceafb415395bc0d139c894428ddd3b53a94f459868d1ffcd86a8a0637',
    applicationId:
      '0xdbbddc9ceafb415395bc0d139c894428ddd3b53a94f459868d1ffcd86a8a0637',
    projectId:
      '0x1335476de5a24573f3fa1297827fbeb02921948d678b399c7367fb956d08a6cc',
    category: 'NFT',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: null,
    name: 'Opstack For Cats Dream ☑️',
    description:
      'I am a builder who deals with the production of nft in all L2s. I create my NFTs with artificial intelligence. I think my imaginary collection of cats is worthy of receiving an award on optimism.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/aaff6a85-cd3e-4066-8f03-f09359b3a900.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/318a51e5-edfa-4564-8937-8508d3041a72.png',
    socialLinks: {
      website: ['https://element.market/collections/opstack-for-cats-dream'],
      farcaster: ['@zeus199803'],
      twitter: 'https://twitter.com/CiyiltepeE32442',
      mirror: null,
    },
    team: [
      {
        fid: 569148,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/6d1ceaaf-80a7-4152-357f-6288a5f6ad00/rectcrop3',
        profile: {
          bio: {
            text: 'Nf creator',
          },
        },
        username: 'zeus199803',
        power_badge: false,
        display_name: 'Emre ',
        active_status: 'inactive',
        verifications: [],
        follower_count: 1,
        custody_address: '0x779eb61d0676d7f50ba95a0972ea5e15fed6de8b',
        following_count: 68,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        url: 'https://github.com/zeus199803/Opstack-For-Cats-Dream-',
        name: null,
        description: null,
      },
    ],
    packages: [
      {
        url: 'https://github.com/users/zeus199803/projects/1',
        name: null,
        description: null,
      },
    ],
    links: [],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [],
      revenue: [],
    },
    pricingModel: 'pay_to_use',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Services for deploying and hosting an OP Chain.',
        'Languages which are dedicated to developing smart contracts',
      ],
      statement: [
        {
          answer:
            'My project name directly includes Opstack. This is a project that advertises you in your weak NFT market. First of all, instead of dealing with coding etc., increase your TPS rate by activating your NFT market. At this rate, you will be a ghostchain, not a superchain.',
          question:
            'How does your project support, or is a dependency of, the OP Stack?',
        },
        {
          answer:
            'Your NFT market will be completely finished and you will turn into a nonsensical network with no color. As we try to be with you with our projects, you are giving grants to many projects that do not need them and that already receive grants. I wonder if you are making yourself rich under the name of grant distribution. I will investigate this.',
          question:
            'How would it impact the OP Stack if your project ceased to exist?',
        },
      ],
    },
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
        id: '0bb3129e-b685-4d5d-8646-e83085a41ced',
        role: 'admin',
        user: {
          id: '41f7f4bc-3f95-4663-bc84-5511cb2f0bb3',
          bio: '',
          fid: 846237,
          name: 'Monz',
          email: 'besu@consensys.net',
          github: 'non-fungible-nelson',
          object: 'user',
          pfp_url:
            'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/d9eaacf1-c9b1-45c3-7371-a5e64fc30d00/rectcrop3',
          profile: {
            bio: {
              text: '',
            },
          },
          imageUrl:
            'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/d9eaacf1-c9b1-45c3-7371-a5e64fc30d00/rectcrop3',
          username: 'monz-eth',
          createdAt: '2024-08-29T16:43:30.096Z',
          deletedAt: null,
          updatedAt: '2024-09-12T19:35:59.623Z',
          farcasterId: '846237',
          power_badge: false,
          display_name: 'Monz',
          notDeveloper: false,
          active_status: 'inactive',
          emailVerified: false,
          verifications: [],
          follower_count: 0,
          custody_address: '0xb3b1a21752f90a5132b97be882ad53e076296bfb',
          following_count: 0,
          verified_addresses: {
            eth_addresses: [],
            sol_addresses: [],
          },
        },
        userId: '41f7f4bc-3f95-4663-bc84-5511cb2f0bb3',
        createdAt: '2024-08-29T16:46:15.270Z',
        deletedAt: null,
        projectId:
          '0xbb3291f2e0a56c4f8fe8250613c5487e4447fce05bb75854472fe3e01eebaffa',
        updatedAt: '2024-08-29T16:46:15.270Z',
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
      grants: [
        {
          grant: null,
          link: null,
          amount: '48400',
          date: '',
          details: null,
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Ethereum client implementations'],
      statement: [
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
  {
    id: '0xde58eb0c8a9a29596b86be117d3f289e43aad908796d64e1da00712e769bf82e',
    applicationId:
      '0xde58eb0c8a9a29596b86be117d3f289e43aad908796d64e1da00712e769bf82e',
    projectId:
      '0x3060f55f50773c14b116537afebf8fa9f934664d022084f644f387e3d8e507bb',
    category: 'Utility',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    organization: {
      name: 'Tokenomics',
      description: '',
      organizationAvatarUrl:
        'https://storage.googleapis.com/op-atlas/4b6f5412-22cb-4e2d-8030-f1e7d1ccaad1.png',
      organizationCoverImageUrl: '',
      socialLinks: {
        website: [],
        farcaster: [],
        twitter: '',
        mirror: '',
      },
      team: ['373516'],
    },
    name: 'Tokenomics Mechanism Research',
    description: 'Research and Develop new tokenomics models',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/fa9260a3-49ff-4ea4-aba5-efb946b96d24.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/a5b446ae-c554-431f-8d24-d9d873d030e3.png',
    socialLinks: {
      website: [],
      farcaster: [],
      twitter: null,
      mirror: null,
    },
    team: [
      {
        fid: 373516,
        object: 'user',
        pfp_url:
          'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/6b035d1a-e956-4c69-47a8-7bbb1c9d9100/original',
        profile: {
          bio: {
            text: 'Token Architect',
          },
        },
        username: '0xcryptozach.eth',
        power_badge: false,
        display_name: 'CryptoZach',
        active_status: 'inactive',
        verifications: ['0x4615c12a57b9acdd5e4d6aae100d952440cf2177'],
        follower_count: 10,
        custody_address: '0x3f1995e08e31245c0eca39907a7337470322dcd4',
        following_count: 86,
        verified_addresses: {
          eth_addresses: ['0x4615c12a57b9acdd5e4d6aae100d952440cf2177'],
          sol_addresses: [],
        },
      },
    ],
    github: [],
    packages: [],
    links: [
      {
        url: 'https://medium.com/@CryptoZach/the-future-of-tokenomics-7-game-changing-innovations-set-to-reshape-decentralized-networks-2a4742562527',
        name: '',
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
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.',
        'Research which informs Ethereum core development',
      ],
      statement: [
        {
          answer:
            'Increasing effectiveness and efficiency of token distribution algorithms. Producing research relevant to retro PGF distribution algorithms, reputation, and incentivizing contributors to participate more frequently in the development of OP Stack.',
          question:
            'How does your project support, or is a dependency of, the OP Stack?',
        },
        {
          answer:
            "The OP Stack will continue to develop and thrive. Other tokenomics experts will continue to produce more mechanisms and research that improve the OP Stack tokenomics and incentives. The research I've published so far may influence future research.",
          question:
            'How would it impact the OP Stack if your project ceased to exist?',
        },
      ],
    },
  },
  {
    id: '0xe1ad77b0271d0ad3cff469e000757b74beb8b80cf73cd9814f76161b2cd01c77',
    applicationId:
      '0xe1ad77b0271d0ad3cff469e000757b74beb8b80cf73cd9814f76161b2cd01c77',
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
        url: 'https://github.com/dappnode/DAppNode',
        name: 'Dappnode',
        description: 'General repository for Dappnode',
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
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: null,
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
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Ethereum test networks',
        'Infrastructure to test and deploy chains',
      ],
      statement: [
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
  {
    id: '0xe2ad55d517e5ae80f9a1c009a1368d661e7b4c951c2976090679307c29800c12',
    applicationId:
      '0xe2ad55d517e5ae80f9a1c009a1368d661e7b4c951c2976090679307c29800c12',
    projectId:
      '0x966804cb492e1a4bde5d781a676a44a23d69aa5dd2562fa7a4f95bb606021c8b',
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
    name: 'libp2p Ecosystem',
    description:
      'A modular and extensible networking stack which solves many challenges of peer-to-peer applications. libp2p is widely deployed in many notable web3 projects such as Ethereum, Optimism, Filecoin, Polkadot, Celestia, and more. This a general application for the libp2p Core Fund, a vehicle which funds the libp2p ecosystem (implementations, development infrastructure, community outreach & events, etc.) both proactively and retroactively.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/dcee4e9a-3de0-4868-ad76-5d8d31467342.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/509d70f7-242e-4812-ba2e-00805cae971e.png',
    socialLinks: {
      website: ['https://libp2p.io', 'https://github.com/libp2p/libp2p'],
      farcaster: [],
      twitter: 'https://x.com/libp2p',
      mirror: '',
    },
    team: null,
    github: [
      {
        url: 'https://github.com/libp2p/libp2p',
        name: '',
        description:
          'This is the home repo for the entire libp2p project. There are implementations in many different languages that are maintained and stewarded by other organizations. ',
      },
      {
        url: 'https://github.com/libp2p/docs',
        name: 'libp2p Documentation',
        description:
          'The shared libp2p documentation repo which contains technical docs and explainers on what libp2p is, its protocols, and how to use them.',
      },
      {
        url: 'https://github.com/libp2p/specs',
        name: 'libp2p Specifications Repository',
        description:
          'The repository is for work on the libp2p specifications. The different libp2p implementations adhere to the same set of specifications for transports, multiplexers, messaging protocols, and more. The specifications work done here is a cross organization and cross community effort to advance the libp2p project together.',
      },
      {
        url: 'https://github.com/libp2p/test-plans',
        name: 'libp2p Interoperability and Benchmarking Repository',
        description:
          'The repository houses libp2p interoperability tests (which tests the permutation of transports, multiplexers, secure channels, etc.) across libp2p implementations and their versions. It also houses libp2p performance benchmarking tests which help get metrics on latency, throughput, time it takes to establish connections, for different libp2p implementations and different transport protocols.',
      },
      {
        url: 'https://github.com/libp2p/blog',
        name: 'libp2p Blog',
        description:
          'Blog articles about advancements and updates across libp2p implementations.',
      },
      {
        url: 'https://github.com/libp2p/website-new',
        name: 'libp2p Website',
        description:
          'The main libp2p project website which holds information about libp2p implementations, community events, and media.',
      },
    ],
    packages: [],
    links: [
      {
        url: 'https://easyretropgf.xyz/libp2p-r-pgf-1/stats',
        name: 'libp2p rPGF round 1 ',
        description:
          'The first libp2p retroPGF round, 125k USD worth of OP tokens were awarded to 18 projects across the libp2p ecosystem using rewards the libp2p project received from Optimism Round 3.\n\nBlog post: https://blog.libp2p.io/2024-04-08-libp2p-rpgf/.',
      },
      {
        url: 'https://www.opensource.observer/projects/libp2p',
        name: 'Open Source Observer Metrics for the libp2p Project',
        description:
          'At the end of 2023, the libp2p Ecosystems group was put together to transition the libp2p project into a fully independent open source community. The OSO metrics show that the team was successful in ensuring continuity and preserving project health.',
      },
      {
        url: 'https://docs.google.com/spreadsheets/d/1nSz8xmaqJVrCJXtYDN0-pmnCQn84BmxVtQIOZoBYyRA/edit?usp=sharing',
        name: '2024 YTD Community Metrics Report',
        description:
          'This spreadsheet tracks key community metrics based on Github events data as well as meeting attendance data. Key libp2p community project health metrics are meeting attendance, daily unique contributors, daily merges and stars. These all directly measure community investment in the project. The numbers for 2024 show steady growth in all four areas. The number of people attending meetings has nearly tripled since the project became independent and projects like py-libp2p have been revived due to the efforts of the Paper Aviation team hired to execute the community function for libp2p.',
      },
    ],
    contracts: [],
    grantsAndFunding: {
      ventureFunding: [],
      grants: [
        {
          grant: null,
          link: null,
          amount: '298137.85',
          date: '',
          details: null,
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Ethereum client implementations',
        'Research which informs Ethereum core development',
      ],
      statement: [
        {
          answer:
            'libp2p is a critical part of the Beacon Chain which powers Ethereum and is a core dependency of OP mainnet & OP stack. libp2p offers Ethereum and Optimism a modular, extensible, peer to peer networking stack across multiple programming languages.\nThe ecosystems project serves as a coordination space between the various libp2p implementers e.g. the libp2p specs repo where optimizations to GossipSub (used in both Ethereum and Optimism) are made in the pubic, and other protocols (transports, multiplexers, etc.)\nThis project enables ecosystem functions like retroPGF programs, CI/CD infrastructure for impls and interop, Github hosting, Discourse forums, hosting websites, Social media presence, as well as in-person libp2p Community events and the responsible disclosure security process. The ecosystem also coordinates across impls & community members. The libp2p Project is a key part of the OP and Ethereum stacks and ensures the security and resiliency of the distributed blockchain networks.',
          question:
            'How does your project support, or is a dependency of, the OP Stack?',
        },
        {
          answer:
            'The libp2p networking library is a critical piece of L1, L2, and many other related applications in the OP and Ethereum ecosystem. If the libp2p project ceased to exist, there would be no central organization coordinating the critical functions of maintaining and deploying the libp2p software. Furthermore, if libp2p ceased to exist, Ethereum, Optimism, and other chains would have to rely on bespoke networking stacks. libp2p offers re-usable, cross implementation, modular peer to peer networking in an application agonistic way, and without it, p2p networking would have to rely on custom solutions that may not be as widely deployed in production across multiple major decentralized networks.',
          question:
            'How would it impact the OP Stack if your project ceased to exist?',
        },
      ],
    },
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
        profile: {
          bio: {
            text: '',
          },
        },
        username: 'marten-seemann',
        power_badge: false,
        display_name: 'Marten',
        active_status: 'inactive',
        verifications: [],
        follower_count: 0,
        custody_address: '0x6b2c63b67b258166208d4bbccbef3deda9fd3df5',
        following_count: 0,
        verified_addresses: {
          eth_addresses: [],
          sol_addresses: [],
        },
      },
    ],
    github: [
      {
        url: 'https://github.com/quic-go/quic-go',
        name: 'quic-go',
        description: '',
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
    grantsAndFunding: {
      ventureFunding: [],
      grants: [],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Ethereum client implementations'],
      statement: [
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
    team: null,
    github: [
      {
        url: 'https://github.com/rdubois-crypto/FreshCryptoLib',
        name: 'FCL',
        description:
          'This repo contains our previous FCL, which implement RIP7212 and was used prior to its adoption by OP mainnet by many actors. It is currently deployed in every Coinbase Smartwallet at address\nhttps://basescan.org/address/0x0BA5ED0c6AA8c49038F819E587E2633c4A9F428a#code\nand in soulWallet\nhttps://optimistic.etherscan.io/address/0x31585171cd8e80111180a2f66AE6cc9aEB4dbA84#code\n\nUnfortunately, all actors use a copy of the library, thus i don\'t have the ownership of it and can\'t provide  a proof in the "contracts" section of the application.\n\n',
      },
      {
        url: 'https://github.com/get-smooth/crypto-lib',
        name: 'Smoo.th Crypto Lib (SCL)',
        description:
          'This repo contains the latest of our cryptolib, audited by cryptoExperts (and ongoing by Veridise).\n\nIt implements RIP7696, enabling generic elliptic curve cryptography, superseding FCL and RIP7212.\nIt is the result of our latest research, presented at ETHCC and ETH Zurich.\n\nWe are also participating actively to RollCalls, and explained our work at RollCall5 :\nhttps://github.com/get-smooth/crypto-lib/blob/main/doc/Conferences/RollCall_8_5_2024.pdf\n\nsmoo.th conducted two different audits both with CryptoExperts and Veridise for a total spending of 60K$, which appear in separate branch of the repo. (audit result summarized in README).',
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
      grants: [
        {
          grant: null,
          link: null,
          amount: '19875',
          date: '',
          details: null,
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: ['Research which informs Ethereum core development'],
      statement: [
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
    team: null,
    github: [
      {
        url: 'https://github.com/ethereum/act',
        name: 'Act',
        description: 'The Act Smart Contract Specification Language',
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
    grantsAndFunding: {
      ventureFunding: [],
      grants: [],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Languages which are dedicated to developing smart contracts',
      ],
      statement: [
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
        url: 'https://github.com/EOA-Blockchain-Labs/ethereumonarm',
        name: '',
        description: '',
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
      grants: [
        {
          grant: null,
          link: null,
          amount: '133449.98',
          date: '',
          details: null,
        },
      ],
      revenue: [],
    },
    pricingModel: 'free',
    impactStatement: {
      category: 'ETHEREUM_CORE_CONTRIBUTIONS',
      subcategory: [
        'Ethereum client implementations',
        'Ethereum test networks',
        'Infrastructure to test and deploy chains',
      ],
      statement: [
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
];
