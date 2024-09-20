export const projects = [
  {
    id: '0x1ebd314438920197b1b37ab41de3678c4f7d5e0b844420527d5e0e2b437bed17',
    applicationId:
      '0x1ebd314438920197b1b37ab41de3678c4f7d5e0b844420527d5e0e2b437bed17',
    projectId:
      '0x09b95c7697625da4915338750c5f78446817a3634cb38bc9155e26bbbc0c87f1',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum client implementations',
    impactStatement_subcategory: "['Ethereum client implementations']",
    organization_name: 'Sigma Prime',
    organization_description:
      'We are a team of researchers engineers and developers working towards improving decentralized technology as best we can.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/156370a7-5b85-4b7b-a5a8-ddf2b47c9d39.png',
    organizationCoverImageUrl: '',
    socialLinks_website: "['https://sigmaprime.io']",
    socialLinks_farcaster: [],
    socialLinks_twitter: '@sigp_io',
    socialLinks_mirror: '',
    team: "['845911']",
    name: 'Lighthouse',
    description:
      'Lighthouse is a leading Ethereum consensus client written in the rust programming language. \n\nIt is built and maintained by a team of engineers, researchers and developers dedicated to advancing the current state of decentralized technology.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/f32836f7-e483-43c8-94a3-098d7bcaf040.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/34a19c11-c391-40e3-b16a-24372308a4ea.png',
    project_socialLinks_website: "['https://lighthouse.sigmaprime.io']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '@sigp_io',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'Lighthouse is core client of the Ethereum consensus ecosystem. There are a variety of metrics, but in regards to validators on the network Lighthouse holds around ~30% of the network. \\n\\nWe are a core component of the network. Our client has proven resilience to a variety of attacks on the network and on numerous cases remained online when other clients failed, keeping the Ethereum chain alive. \\n\\nIf our project did not exist, the Ethereum chain would definitely lose some resilience to attacks, diversity in performance and network connectivity. We also like to think we help out with improving specifications and implementations of new features which not only help layer 1 but also layer 2s. ', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}, {'answer': 'There have been three main areas R&D that we have been working on in the last 8-10 months. These are the Ethereum Electra Fork, PeerDAS and network R&D. \\n\\nThe Electra Ethereum fork is a core milestone and planned upgrade for Ethereum. It contains a number of upgrades for the core Ethereum network which indirectly benefits the OP stack. \\n\\nPeerDAS has a more direct benefit for the OP stack. With PeerDAS we are aiming to reduce the load on individual nodes to increase the throughput of the layer 1 chain. This should result in lower gas fees for OP and improve the scalability of the entire Ethereum and layer 2 ecosystems.\\n\\nWe have been working on structures and improvements for our networking layer which is used not only in Lighthouse but as dependencies for an OP node implementation. We defer this work to a separate project, rust-libp2p and omit it from this one.', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x20f4347b57f82b8c7da5b6a1e88e25b5e37662484ab029b4bef81b4ba85fd06a',
    applicationId:
      '0x20f4347b57f82b8c7da5b6a1e88e25b5e37662484ab029b4bef81b4ba85fd06a',
    projectId:
      '0x0e87091523c98dd4e4a4e4e1b695bf67c3db239bba68e7e45e01932293936985',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum client implementations',
    impactStatement_subcategory: "['Ethereum client implementations']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'Nimbus',
    description:
      'Nimbus is a client implementation for both Ethereum’s Consensus Layer and Execution Layer that strives to be as lightweight as possible in terms of resources used.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/cf0751ef-d8aa-4814-80c7-70e3a305499d.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/14ef8c04-600b-4449-a501-2c8e1880ac9e.png',
    project_socialLinks_website: "['https://nimbus.team/']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://twitter.com/ethnimbus',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'Nimbus is one of the Consensus clients in the Ethereum network. Between Oct 2023 to July 2024, one of the main contributions of Nimbus to the Op Stack was its contributions to EIP 4844 and the associated implementation for proto-danksharding as part of the Dencun hardfork, which led to significant reduction in cost for rollups. \\n\\nThis involved reviewing the EIP and providing feedback on the specifications from the perspective of a Consensus client, and consistently participating in all devnets and testnets leading up to the hardfork on the mainnet by ensuring client readiness in line with the specs to maintain the timelines. \\n\\n', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'Nimbus consensus client has approx 11-12% representation in the network based on https://blockprint.sigp.io .Nimbus has actively advocated for better client diversity in the network and through these contributions, ensures a more robust L1 for the Op-stack. \\n\\nFor additional context, Nimbus is also developing an Execution Layer client with a goal to develop an OP version of Nimbus EL subsequently. During the timeframe between Oct 2023 - July 2024 the Nimbus EL project has made significant progress, however as this is not on mainnet yet, we do not advocate for considering its impact as part of this Retro Funding round. \\n\\nIf the Nimbus project ceases to exist, it would impact the client diversity on both, the Execution Layer and Consensus Layer of L1, impacting the robustness of L1 and hampering efforts to work on future improvements proposals benefiting rollups (e.g. PeerDAS, which is likely to be included in the Pectra hardfork and results in continued lower costs for rollups). ', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 24850,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x21812d33e89a28c04f68dc3932b532c25f644747eb7e2f5c4aecf23afef1291a',
    applicationId:
      '0x21812d33e89a28c04f68dc3932b532c25f644747eb7e2f5c4aecf23afef1291a',
    projectId:
      '0xa7d3f54fe62bbff857bba25d18d385d943741e6d970e5491d1341218e54a6762',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum client implementations',
    impactStatement_subcategory: "['Ethereum client implementations']",
    organization_name: 'Formal Verification @ Ethereum Foundation',
    organization_description:
      'Ethereum Foundation team dedicated at developing Formal Verification Tools for Ethereum Smart Contracts',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/5b371001-feaf-4002-8671-c4314150460c.png',
    organizationCoverImageUrl: '',
    socialLinks_website: "['https://fv.ethereum.org']",
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['843949', '844134', '845018', '848682']",
    name: 'hevm',
    description:
      'hevm is an open source, state-of-the art, fast symbolic and concrete EVM execution engine. It has a library interface and can be used as a component in high level tooling. It can be used stand-alone for ad-hoc analysis and symbolic unit test execution.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/d7cf4059-4f9c-48aa-a37a-df2f8c81933c.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/020d34f6-e8bb-43b5-8508-7935d2b00583.png',
    project_socialLinks_website:
      "['https://hevm.dev/', 'https://github.com/ethereum/hevm/']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'The application of formal methods is widely recognized as one of the most effective techniques for ensuring correctness in software development. Symbolic execution is generally considered a best practice within smart contract development, as well as in traditional high assurance domains.\\n\\nhevm is a cutting edge symbolic execution engine for the EVM. Its library interface allows developers to build and experiment with new symbolic analysis tooling. It can be used to analyze programs deployed to any EVM based blockchain.\\n\\nhevm has been under active development since 2017. Since October 2023 we have made the following improvements:\\n\\n- Significant performance optimizations\\n- Improved ux and documentation\\n- A fully symbolic model for addresses\\n- An abstract gas model\\n- Support for the Cancun hardfork (WIP)\\n- Expanded support for testing specific features (\"cheat-codes\")\\n\\nThese improvements make hevm faster, easier to use, and expand the range of programs that can be analyzed.', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'OP stack developers would lose access to a powerful and cutting edge symbolic EVM implementation. Development of analysis tooling for the OP stack would become harder. Application developers targeting the OP stack would lose access to tools checking for safety and correctness.', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x26745e0179576c46f9e9c310d24f2a44091c4c96a96ea7dee908d5b935301df3',
    applicationId:
      '0x26745e0179576c46f9e9c310d24f2a44091c4c96a96ea7dee908d5b935301df3',
    projectId:
      '0x5a7e7c7acb21521e99021d746740b368801cbfe531301e50bdbaafdc24a0aac5',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum client implementations',
    impactStatement_subcategory: "['Ethereum client implementations']",
    organization_name: 'Grandine',
    organization_description:
      'Grandine core team builds a high-performance Ethereum consensus client.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/c9b32f23-3c6a-4a81-a079-7c5514aedb6e.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/8213d4c7-9ffe-4db0-8548-1f09bb1306c9.png',
    socialLinks_website: "['https://grandine.io/']",
    socialLinks_farcaster: "['https://warpcast.com/grandine']",
    socialLinks_twitter: 'https://twitter.com/grandineio',
    socialLinks_mirror: '',
    team: "['846030']",
    name: 'Grandine',
    description:
      "Grandine is a high-performance Ethereum consensus layer client. The core team started to work on Grandine in 2019 and in 2024 Grandine was open-sourced. The client is fast and resource-efficient so it's suitable for a wide range of uses from home stakers to institutional stakers running tens of thousands of validators.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/d1cdd615-20b8-4ff6-94dc-91d2a463969d.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/7a6d7bfc-0f2c-42d0-af89-695e706c42ce.png',
    project_socialLinks_website: "['https://grandine.io/']",
    project_socialLinks_farcaster: "['https://warpcast.com/grandine']",
    project_socialLinks_twitter: 'https://twitter.com/grandineio',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'The main impact - we shipped and open-sourced Grandine Ethereum consensus layer client with Deneb support that introduced blobs (EIP-4844) to the Ethereum mainnet. EIP-4844 enables L2 scaling by providing a data availability layer for L2s. Unlike other clients, Grandine uses our own Rust-KZG library so it adds additional diversity related to EIP-4844 functionality. Grandine is also working on upcoming PeerDAS support that will further increase scalability for L2s such as Optimism.\\n', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'There would be a lower diversity at the main layer which means higher risks for all Ethereum users including L2s such as Optimism and their users. The team is also working on the Rust-KZG library, which provides high-performance cryptography for blobs-related functionality. So there would be less diversity in the data availability layer that OP Stack uses.', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 76445.53,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x29689510e5add50d929566fcbb78a8f85fac28545928859f97ce6c5ca3c97da1',
    applicationId:
      '0x29689510e5add50d929566fcbb78a8f85fac28545928859f97ce6c5ca3c97da1',
    projectId:
      '0x8c76c13d8d0e63a7de499d47b9da5a4495d1151c0b2003c92379f41f14e404c0',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum client implementations',
    impactStatement_subcategory: "['Ethereum client implementations']",
    organization_name: 'Nethermind',
    organization_description: '',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/ead85a0e-7517-4e76-a094-4ca53869d34c.png',
    organizationCoverImageUrl: '',
    socialLinks_website: "['https://www.nethermind.io/']",
    socialLinks_farcaster: "['https://warpcast.com/nethermind']",
    socialLinks_twitter: 'https://x.com/NethermindEth',
    socialLinks_mirror: '',
    team: "['230074', '292202']",
    name: 'OP Nethermind',
    description:
      'OP Nethermind brings the Nethermind Execution Client to the OP Stack, including OP Mainnet and Base, with all the same features as our L1 client. Nethermind is known for its performance, extensibility and stability. It brings client diversity to the Superchain.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/0415c07b-027a-46dd-8826-c4dca1cccece.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/c8883caa-2948-4ea3-a38e-eff279f93b8d.png',
    project_socialLinks_website:
      "['https://www.nethermind.io/nethermind-client']",
    project_socialLinks_farcaster: "['https://warpcast.com/nethermind']",
    project_socialLinks_twitter: 'https://x.com/nethermindeth',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': \"OP Nethermind brings the full range of Nethermind's features to the OP Stack, enhancing client diversity across OP chains and providing node operators with a reliable alternative. The performance of OP Nethermind can increase the throughput of OP chains, thus supporting their future growth.\", 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'Without OP Nethermind, the client diversity of the OP Stack would be reduced, affecting its overall security and stability. The performance and features provided by OP Nethermind, along with future innovations from the team, would no longer be available.', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x2b5b44d0e98599b5c877792367dcd0ed8f8f849fb267812a936897aa17baa6c4',
    applicationId:
      '0x2b5b44d0e98599b5c877792367dcd0ed8f8f849fb267812a936897aa17baa6c4',
    projectId:
      '0x314a419355259f8afede37756c7d603a7d7f0f9a9e77b8b2d6a7b165548eb629',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum client implementations',
    impactStatement_subcategory: "['Ethereum client implementations']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'MATUBMA',
    description:
      'I just registered for the SUNNY Awards to be eligible for 540K OP!',
    profileAvatarUrl:
      'https://cdn.charmverse.io/user-content/9100e3fe-1f1e-47cd-a424-e67c1ac6d523/50f6c156-3fd6-4220-80d5-045ef1658f8d/wazowski-mike.gif',
    projectCoverImageUrl:
      'https://cdn.charmverse.io/user-content/9100e3fe-1f1e-47cd-a424-e67c1ac6d523/84aaead4-8b2c-4cc2-8f4e-9ea1d4579984/6181.jpg',
    project_socialLinks_website: "['https://zora.co/@compile']",
    project_socialLinks_farcaster: "['https://warpcast.com/matubma']",
    project_socialLinks_twitter: 'https://x.com/extremelyluxury',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'I introduced people to the capabilities of the NFT marketplace Zora, now its development is going further and I also continue to work, for example, the weekly update with the listing of NFT on the Uniswap dex was warmly received by people', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'Many people don’t even understand what cryptocurrency is and how to work with it, I help in this regard, I’m sure that if guys like me disappear, it will set the development of cryptocurrency technology back several years', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 165460,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x2da519cc5be2bf70ab4fd79c979bf2d7d956e5a11be5eefb1f21d9363928d07f',
    applicationId:
      '0x2da519cc5be2bf70ab4fd79c979bf2d7d956e5a11be5eefb1f21d9363928d07f',
    projectId:
      '0x8e05097e0cd6d79100e77cc5f8efe1b405633ee56c79f54ce657eaa58d3c995c',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum client implementations',
    impactStatement_subcategory: "['Ethereum client implementations']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'Erigon',
    description:
      'Erigon is an implementation of Ethereum (execution layer and consensus layer), on the efficiency frontier. Archive node by default.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/9fb17067-0203-4b8a-8508-1a3d3236a8b0.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/72a312c6-31fd-457d-a887-3740b2b59a3e.png',
    project_socialLinks_website: "['https://erigon.tech']",
    project_socialLinks_farcaster: "['https://warpcast.com/erigon']",
    project_socialLinks_twitter: 'https://x.com/ErigonEth',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': \"Erigon is the upstream of its Optimistic fork [op-erigon](https://op-erigon.testinprod.io), part of the OP Stack. Erigon has been consistently pushing the boundaries of what's technological possible for an archive node. The upcoming [Erigon 3](https://erigon.tech/erigon-3-alpha-2-introducing-blazingly-fast-sync-on-archive-nodes-with-ottersync-and-other-improvements/) is bringing further improvements such as blazingly fast sync and transaction-level granularity of state history.\", 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': \"If Erigon ceases to exist, its forks, including [op-erigon](https://op-erigon.testinprod.io), will probably wither away. Without Erigon there'll be less innovation on pushing the blockchain efficiency frontier in terms of optimal (compact, performant, fast to sync) archive, full, and EIP-4444 nodes.\", 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x2e12440c85ca56b172a63d1a17061f858e1111f5eb97efc47d4c1bb223ff52e9',
    applicationId:
      '0x2e12440c85ca56b172a63d1a17061f858e1111f5eb97efc47d4c1bb223ff52e9',
    projectId:
      '0xc998478cdd600933c5e5723be6ab1db19d445d6ac53cf28fe8927f050a8b1faf',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum client implementations',
    impactStatement_subcategory: "['Ethereum client implementations']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'An indepedent ethereum execution client contributor',
    description:
      "I have been actively involved in the Ethereum execution clients and ecosystem for more than 6 years as an independent contributor. Since 2018, I have been involved in various projects within the Ethereum ecosystem. During that time, I created a Chinese guide called [Hitchhikers-guide-to-the-Ethereum](https://github.com/jsvisa/Hitchhikers-guide-to-the-Ethereum), which serves as a valuable resource for beginners to understand the inner workings of Ethereum using the [go-ethereum](https://github.com/ethereum/go-ethereum) implementation. This guide covers a wide range of topics about Ethereum, transactions, smart contracts, data structures, wallets, block synchronization, state synchronization, miners, consensus, RPC, and P2P protocols.\n\nOver the past 6 years, I've made significant contributions to the Ethereum ecosystem, including the following:\n\n- go-ethereum: merged 119 PRs\n- reth: merged 79 PRs\n- prysm: merged 11 PRs\n- erigon: merged 9 PRs\n- others: merged 21 Prs",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/60078a18-aa1d-4f54-95f0-16b955e36ef2.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/61e675e1-034e-4098-a139-76a8ebb66211.png',
    project_socialLinks_website: "['https://github.com/jsvisa/retro5']",
    project_socialLinks_farcaster: "['@jsvisa']",
    project_socialLinks_twitter: '@jsvisa',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'My contributions to the Ethereum ecosystem focus primarily on enhancing performance, fixing bugs, and introducing new useful features. These improvements ensure the underlying Ethereum network, which the OP Stack builds upon, operates smoothly and efficiently. \\n\\nAdditionally, my work on optimizing key components and ensuring they are bug-free directly boosts the reliability and performance of the OP Stack. By providing a robust and efficient foundation, my contributions help pave the way for new features and capabilities within the OP Stack, thereby supporting its growth and scalability.', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'If my contributions ceased, the OP Stack could face several potential challenges. Performance optimizations I’ve implemented may no longer be up-to-date, leading to increased latency and reduced efficiency. Bug fixes that enhance the stability of the ecosystem would no longer be maintained, potentially reintroducing critical vulnerabilities or operational issues. Furthermore, the absence of new features could stifle innovation and limit the OP Stack’s ability to adapt to emerging needs and technologies. In essence, my continued involvement ensures a smoother, more secure, and forward-looking OP Stack.', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 84018,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x30fae4e752f5b084ed2a743e515374988876ce8b0cf0672311907c5b7254729b',
    applicationId:
      '0x30fae4e752f5b084ed2a743e515374988876ce8b0cf0672311907c5b7254729b',
    projectId:
      '0x6d2ee66c931e5c3be17e1417e38617f1efee5be223cf53dd507779d68229a198',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum client implementations',
    impactStatement_subcategory: "['Ethereum client implementations']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'Revm',
    description:
      'Revm is a critical component in the Ethereum ecosystem used by builders, toolings, clients and chains.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/57aeca37-e53b-4bcb-b161-0608d09e5c62.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/786c9752-af70-4856-9be0-38f4141769d2.png',
    project_socialLinks_website: "['https://github.com/bluealloy/revm']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://x.com/rakitadragan',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': \"* Revm is an EVM library that supports Optimism.\\n* it implemented the newest Prague hardfork changes (the main being EOF and EIP-7702) and passed all tests.\\n* had a community-driven audit done by Guido Vranken (top eth bug hunter)\\n* It is EVM used by Reth that got stable this year\\n* It is the core component of tooling, foundry and hardhat (recently announced EDR framework).\\n* Used by a lot of Ethereum builders and searchers.\\n* Work is done to support abstraction for any Optimism or other L2/L1 chains. The idea is to remove repository fork hell and allow the extension of core EVM code.\\n* And it is used extensively by zkvm's for zkEVM support.\", 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': \"Revm is a critical component, I can't imagine it ceasing to exist as it is one of the most used rust libraries in the Ethereum ecosystem. It would impact almost every tooling, block builder/searcher or chain wanting to use or experiment on Reth.\", 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x3142a5d468f9c6cd587619a0fccf73dc77835149f1ca31e579cb51501dcfd285',
    applicationId:
      '0x3142a5d468f9c6cd587619a0fccf73dc77835149f1ca31e579cb51501dcfd285',
    projectId:
      '0xf04c2c47624bc0191001f655e147986439541493ee06e5ec5b8576d26d26d057',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum client implementations',
    impactStatement_subcategory: "['Ethereum client implementations']",
    organization_name: '🏰 BuidlGuidl',
    organization_description:
      'BuidlGuidl is a curated group of builders creating open source tools and educational content.\n\nThe main focus is developer growth and mentoring. We build tools and educational content to teach the next wave of builders how/what they can build on Ethereum / EVMs.\n\n- **Tooling**: We built and actively maintain [🏗 Scaffold-ETH-2](https://scaffoldeth.io/), an open-source toolkit which allows for rapid prototyping and full scale dApp development on Ethereum.  \nWe have also lots of handy tools (OSS) created with SE-2 by our community, like [Abi.Ninja](https://abi.ninja/), [Hacked Wallet Recovery,](https://hackedwalletrecovery.com/) [address.vision](http://address.vision) and others.\n\n- **Education**: We provide a free curriculum at 🏃‍♀️ SpeedRunEthereum.com. A hands on, guided series of challenges to learn how to code and deploy smart contracts all while receiving the assistance of our community. \nWe also conduct monthly batches with developers who have just finished SRE, in which we encourage teamwork and collaboration among them, developing a group project.\nAlso lots of content in youtube, like BG Labs, Web2 to Web3, BG Episodes, among other video series, and IRL talks and workshops in ETH Global, Edcon and other events.\n\n- **Small Grants** We have different funding mechanisms to support high-impact devs, like BuidlGuidl streams, Cohort Streams towards a common objective, Ecosystem impact grants and BG Community Grants.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/f6ed26e1-c5be-4ea9-bbce-d314c1a1034d.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/f1b0c3a8-64a7-4bbb-8150-8817f47a1dbb.png',
    socialLinks_website: "['https://buidlguidl.com/']",
    socialLinks_farcaster: "['https://warpcast.com/buidlguidl']",
    socialLinks_twitter: 'https://x.com/buidlguidl',
    socialLinks_mirror: 'https://mirror.xyz/news.buidlguidl.eth',
    team: "['6048', '343051', '390184']",
    name: '🏰 BuidlGuidl Client',
    description:
      "Project is in the early stages, but we already have an MVP that helps you get a reth full node up the fastest. One command, wait a couple days, and that’s it!\n\nOur goals with the client are:\n\n- Put lots of ETH nodes in LATAM, SEA and Africa.\n- Second highest priority is getting devs their own local node to build their dapps (indexers.. ). We aren't just strengthening the network but helping devs continue their edudaction\n- Third priority is building the distributed RPC and transaction service\n\nHere are the components we've built so far:\n\n- **Bootstrap Script**: We have created a bootstrap script, a one-liner command that users can paste into their terminal to clone and run the BuidlGuidl client. It is publicly available here: nodes.buidlguidl.com This script simplifies the setup process for new node operators. The code for this script is publicly available here: https://github.com/BuidlGuidl/buidlguidl-client\n\n- **BuidlGuidl Client**: We've developed a preliminary version of the BuidlGuidl client that can spin up both Execution Layer (EL) and Consensus Layer (CL) nodes. This client also includes an RPC proxy that checks in with our central hub. You can check out the initial code here: https://github.com/BuidlGuidl/buidlguidl-client\nWhile these components are functional, they are still in undergoing continuous improvement. Our focus now is on refining these tools and expanding their capabilities to ensure reliable performance and ease of use for the community.\n\n- **Proxy Server**: We have set up an initial version of our proxy server (rpc.buidlguidl.com), which will act as the hub for our distributed RPC system.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/95eb3b60-a01d-4142-b9f2-f7d8b1deaeb2.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/98f8992d-d350-410c-abc0-de560fdc070e.png',
    project_socialLinks_website:
      "['https://client.buidlguidl.com/', 'https://buidlguidl.com/']",
    project_socialLinks_farcaster: "['https://warpcast.com/buidlguidl']",
    project_socialLinks_twitter: 'https://twitter.com/buidlguidl',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'Our project supports the OP Stack by:\\n\\n1. **Expanding potential OP Stack node operators**: Our one-command setup simplifies node running, potentially increasing future OP Stack node operators.\\n2. **Growing the developer community**: Easier participation in Ethereum at the peer to peer level, potentially increasing exploration of Layer 2 solutions like OP Stack. This may lead to more dapps developed in the OP Stack, further enriching its ecosystem and driving adoption.\\n3. **Enhancing Ethereum mainnet decentralization**: More nodes in underserved regions also strengthen indirectly the OP Stack.\\n4. **Improving infrastructure reliability**: A safer and more robust networking layer on Ethereum makes everything up the stack safer and more robust', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': \"There probably wouldn't be a huge gap if the BuidlGuidl Client didn't exist. It's more of an efficiency play, making it easier to run nodes and, in turn, helping the Ethereum network — which the OP stack settles on — become more decentralized. \\n\\nWithout us, some node runners certainly wouldn't have their nodes up, while others would have to deal with the poor user experience of manually spinning up EL and CL pairs.\", 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 135200,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x34d6f272baccb8bb8ee494ec6c31d8d3e0f66623f57a040ea04cdd4d7e03bd1a',
    applicationId:
      '0x34d6f272baccb8bb8ee494ec6c31d8d3e0f66623f57a040ea04cdd4d7e03bd1a',
    projectId:
      '0xbc6524eaed9585ebbca313f8112c3d8ed4a4ac7ff9b5bd6ef92eff715d0d2a58',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum client implementations',
    impactStatement_subcategory: "['Ethereum client implementations']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'RubyScore',
    description:
      'RubyScore - decentralized on-chain ranking protocol that represents layer 2 segmentation on 10+ parameters and scores the performance of wallets on various parameters. Key features of the platform include a unique on-chain reputation system utilizing SBT, advanced analytics to evaluate 10+ network parameters, and a distinctive ranking system with NFT rewards. API offering, which will allow user wallets to be verified through RubyScore, as well as using the API for verification through other dApps.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/598566b6-6d99-4476-a7a0-3842629b7d71.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/b4311568-e6e6-4362-94d6-37af529d974c.png',
    project_socialLinks_website: "['https://rubyscore.io/']",
    project_socialLinks_farcaster: "['https://warpcast.com/rubyscore']",
    project_socialLinks_twitter: 'https://twitter.com/rubyscore_io',
    project_socialLinks_mirror: 'https://medium.com/@rubyscore.io',
    pricingModel: 'freemium',
    impactStatement_statement:
      "[{'answer': 'RubyScore core is built on Optimism and RubyScore also provides network and wallet metrics on a set of parameters. The RubyScore metrics dashboard includes such projects as Base, Zora, Mantle, opBNB, Blast, Manta built on OP-Stack, as well as Ethereum itself is integrated into the RubyScore metrics dashboard.', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'If RubyScore ceases to exist, it will have no critical impact, but users will be left without accurate metrics of networks built on OP-Stack and Ethereum, as well as viewing statistics of their wallet in these networks.', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x3562585a218194b1d74252545914f6b23b17c78de46f63bc50b1220dfa077994',
    applicationId:
      '0x3562585a218194b1d74252545914f6b23b17c78de46f63bc50b1220dfa077994',
    projectId:
      '0x7161c183e6d6f3f44499ffb4e28ed03c569089437778961f5b5544fb54791d4c',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum client implementations',
    impactStatement_subcategory: "['Ethereum client implementations']",
    organization_name: 'Paradigm OSS',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: [],
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['3860']",
    name: 'OP Reth',
    description:
      "The OP Stack is built to be modular, and allows any EL to plug as long as it's following the spec. \n\nWe proceeded to adjust Reth, a new EL for Ethereum, to be compatible with the OP Stack by adding support for Deposit transactions, the new Engine API modifications and more. This brings down OP Stack chain sizes down by >5x and provides improved runtime performance.\n\nOP Reth supports the latest Optimism upgrades, as well as OP Mainnet.\n\nhttps://reth.rs/run/optimism.html\nhttps://reth.rs/run/sync-op-mainnet.html",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/e20ba37b-2751-4976-938f-9f0915231c7d.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/de2004b9-a85c-4846-8d84-c3246d7a53c5.png',
    project_socialLinks_website: "['https://github.com/paradigmxyz/reth']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'OP Reth is an additional client implementation of OP Stack in Rust.\\n\\nIt is based off of the Reth project and is implemented as a \"Reth Core SDK\" module under: https://github.com/paradigmxyz/reth/tree/main/crates/optimism.', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'The OP Stack would struggle with scaling and with supporting its multi-client roadmap such as supporting multiproofs.\\n\\nOP Reth provides best-in-class performance for OP Stack L2s, and is already adopted by OP Stack users like Base, Worldchain, Conduit and others. It reduces archive node size by >5x, and it is the most performant L2 node to date.', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x37df31043d401a09c24ba1066e602ff34c2906ac92397040b5b90694d74eb8d7',
    applicationId:
      '0x37df31043d401a09c24ba1066e602ff34c2906ac92397040b5b90694d74eb8d7',
    projectId:
      '0x28a18006a584489339f6d5266a7585f1c8cbabcb89b2f52e15866e974bcfe802',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum client implementations',
    impactStatement_subcategory: "['Ethereum client implementations']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'Mysth NFT',
    description:
      'NFT works based on block Chain with a collection of Myth Canvas',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/25d67767-622f-4a1b-b62c-4bdadc9e145b.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/e90d87d2-aac9-46f3-90bf-3708f4e30807.png',
    project_socialLinks_website:
      "['https://opensea.io/0x8Df4e551cC464492eF7858256e57A57006D338e5']",
    project_socialLinks_farcaster: "['https://warpcast.com/0xethl2']",
    project_socialLinks_twitter: 'https://x.com/Hula_ardi',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'Keep support lokal pride jangan lupa makan nasi goreng french fries RM Padang Panjang yang telah berpartisipasi mengikuti kuis Kak Joewita kau tak pernah menjadi planet Neptunus memiliki tubuh dan dapat menyebabkan', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'A will be fans artistik shoujo bola jd ha depe instan kondisi uang tunai bekasi barat dan familia Cerambycidae cek ya kak Ega telah ditebang KONTLOTLDN jadi orang yang telah berpartisipasi dalam bahasa', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x38f4b51e1d89c1efce3c71fd155fa253d7fffe73cd239fcbd2f9309e4cc6e67b',
    applicationId:
      '0x38f4b51e1d89c1efce3c71fd155fa253d7fffe73cd239fcbd2f9309e4cc6e67b',
    projectId:
      '0x8431c44e2f0903879f34134e68fba4c05833b02451ccbf4cdb69620a6715bcdd',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum client implementations',
    impactStatement_subcategory: "['Ethereum client implementations']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'MetaCRM',
    description:
      'MetaCRM provides a suite of innovative software solutions empowering marketing efficiency & personalized customer service for Web3 businesses.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/f3d4c02b-2511-4026-a886-1b74a7a4c206.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/1d6693d9-6b5e-489e-83dc-c4416f78ca93.png',
    project_socialLinks_website: "['https://metacrm.inc/#/']",
    project_socialLinks_farcaster: "['https://warpcast.com/metacrm']",
    project_socialLinks_twitter: 'https://x.com/metacrm_inc',
    project_socialLinks_mirror: '',
    pricingModel: 'freemium',
    impactStatement_statement:
      "[{'answer': 'MetaCRM offers a suite of innovative software solutions that enhance marketing efficiency and deliver personalized customer service designed for Web3 projects and the Optimism ecosystem. By providing these tailored tools, MetaCRM supports the OP Stack by enabling projects to optimize their user engagement and growth strategies, ultimately contributing to the overall success and scalability of the ecosystem.', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'If our project were to cease to exist, it would leave a significant gap in the Optimism ecosystem. Currently, there are no comprehensive, all-in-one solutions that are natively built with blockchain compatibility for customer support and user growth. This would be a setback for projects looking to thrive within the Optimism ecosystem.\\n\\nMoreover, two of the core goals of the Optimism Foundation are to ensure that end-users have an excellent user experience and that projects have access to the necessary tools to succeed. Our project directly addresses these objectives by providing valuable solutions, so our absence would create a substantial challenge for the entire Optimism ecosystem.', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 17391,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x39dcea49de981733d6f74863a8bc1473e18ba11ec1ad0e0bd4622ab6226552f8',
    applicationId:
      '0x39dcea49de981733d6f74863a8bc1473e18ba11ec1ad0e0bd4622ab6226552f8',
    projectId:
      '0x54eef6526ed4a28f771e2bc9b4a18884afcd92437cbee5ea4175c0a6b8970ac2',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum client implementations',
    impactStatement_subcategory: "['Ethereum client implementations']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'quic-go',
    description:
      'quic-go is an open-source implementation of the QUIC protocol (RFC 9000) in Go.\nIt is a general-purpose QUIC implementation that, among others, provides support for HTTP/3 (RFC 9114), WebTransport (soon-to-be an RFC) and CONNECT-UDP (RFC 9298).\n\nquic-go powers QUIC support in Prysm. The main advantages for the Ethereum network are:\n1. Lower handshake latency: Establishing a libp2p-capable QUIC connection saves ~3 network roundtrips compared to TCP.\n2. Faster transfer performance due to built-in stream multiplexing, lack of head-of-line blocking, advanced loss recovery and congestion control.\n3. Easy interoperability: Every major programming language provides a QUIC interface. This is a significant simplification to the connection setup logic (multistream + Noise + mplex / yamux) necessary for TCP.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/d231af7c-780d-4e4c-83bb-45c2c6023876.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/2753584c-d289-41b8-a7c1-07f595b6575e.png',
    project_socialLinks_website: "['https://quic-go.net']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'quic-go significantly simplifies the process of establishing libp2p connections in Prysm. Unlike the old TCP-based approach, which required multiple bespoke layers (multistream, Noise, mplex / yamux), QUIC is a standardized, widely adopted protocol with ready-to-use implementations available in most programming languages. With 2 major implementation (Prsym and Lighthouse) now offering QUIC support, it becomes feasible to launch QUIC-only Ethereum implementation, reducing the complexity and development overhead for new Ethereum clients, promoting client diversity.', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'If quic-go ceased to exist, the Ethereum network would lose a vital alternative to the TCP-based connection methods, decreasing flexibility and potentially slowing new client deployment. Relying solely on the older, more complex TCP-based approach would reduce resilience, as there would be no fallback in case of vulnerabilities or performance issues in those layers. Having two distinct transport options, including the more straightforward QUIC, increases the network’s security and fault tolerance, directly contributing to the reliability and scalability of Optimism’s transactions.', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x0403926badb0cd173b98ea187d30423bfbd1d8a7c9c6ba5e874d0ed3872b58c7',
    applicationId:
      '0x0403926badb0cd173b98ea187d30423bfbd1d8a7c9c6ba5e874d0ed3872b58c7',
    projectId:
      '0xc9561ba3e4eca5483b40f8b1a254a73c91fefe4f8aee32dc20c0d96dcf33fe80',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum test networks',
    impactStatement_subcategory:
      "['Ethereum client implementations', 'Ethereum test networks', 'Infrastructure to test and deploy chains', 'Languages which are dedicated to developing smart contracts', 'Research which informs Ethereum core development']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'Jonas Project',
    description: 'This is a description',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/72790b69-7d90-4f9c-9266-bc5ab8016183.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/600b373a-da34-49c9-a7de-cd9306a7e90c.png',
    project_socialLinks_website: [],
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': ' \\nIt is very dependency and very important to Mrs OP \\nIt is very dependency and very important to Mrs OP \\nIt is very dependency and very important to Mrs OP \\nIt is very dependency and very important to Mrs OP awdwadawdawdawdadwawdawadwwadawdwa\\nIt is very dependency and very important to Mrs OP \\nIt is very dependency and very important to Mrs OP \\nIt is very dependency and very important to Mrs OP \\nIt is very dependency and very important to Mrs OP \\nIt is very dependency and very important to Mrs OP \\nIt is very dependency and very important to Mrs OP \\nIt is very dependency and very important to Mrs OP \\nIt is very dependency and very important to Mrs OP \\nIt is very dependency and very important to Mrs OP \\nIt is very dependency and very important to Mrs OP \\nIt is very dependency and very important to Mrs OP \\nIt is very dependency and very important to Mrs OP ', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'It is very dependency and very important to Mrs OP \\nIt is very dependency and very important to Mrs OP \\nIt is very dependency and very important to Mrs OP \\nIt is very dependency and very important to Mrs OP awdwadawdawdawdadwawdawadwwadawdwa\\nIt is very dependency and very important to Mrs OP \\nIt is very dependency and very important to Mrs OP \\nIt is very dependency and very important to Mrs OP \\nIt is very dependency and very important to Mrs OP \\nIt is very dependency and very important to Mrs OP \\nIt is very dependency and very important to Mrs OP \\nIt is very dependency and very important to Mrs OP \\nIt is very dependency and very important to Mrs OP \\nIt is very dependency and very important to Mrs OP \\nIt is very dependency and very important to Mrs OP \\nIt is very dependency and very important to Mrs OP \\nIt is very dependency and very important to Mrs OP ', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x04d4b89e72e276bebc4bb4359145bc89e12f64a1edb1d85e97a5aa9c65660da5',
    applicationId:
      '0x04d4b89e72e276bebc4bb4359145bc89e12f64a1edb1d85e97a5aa9c65660da5',
    projectId:
      '0x53499d3243b2c26b1f09d49f911a9d9300d29b2196576d417cf852ac9e8dfe4c',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum test networks',
    impactStatement_subcategory:
      "['Ethereum client implementations', 'Ethereum test networks', 'Infrastructure to test and deploy chains', 'Research which informs Ethereum core development']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'Protocol Guild',
    description:
      'Protocol Guild is a funding collective for 181 Ethereum Layer 1 R&D maintainers. These individuals come from 27 different ecosystem teams/projects and are the backbone of Ethereum\'s core protocol development. Protocol Guild ensures that funding goes directly to these individuals and Ethereum stewardship over the long term.\n----------------------------------\n\n--> Optimism\'s relationship with the Ethereum commons\n\nThe Ethereum commons is a broad set of peer-produced artifacts which share infrastructure or software resources. Optimism shares both with the Ethereum L1:\n\n1. Infrastructure relationships link the censorship resistance, security, and settlement of OP-stack L2s with the L1 network.\n\n2. Software powers the L1 distributed system and extensions of it, produced in part by the ongoing research and development of contributors supported through Protocol Guild. These individuals come from 27 different ecosystem teams and projects:\n\n- Client teams: Erigon, EthereumJS, Geth, Besu, Lighthouse, Lodestar, Nethermind, Nimbus, Prysm, Reth and Teku\n- Research groups: Applied Research Group, Consensys DDS, Consensus R&D, Ipsilon, Robust Incentives Group, Stateless Consensus and TXRX\n- Coordination & support groups: EELS, EthPandaOps, EthereumJS, EF Protocol Support, EF Protocol Security, EF Testing, Ethereum Cat Herders and Portal​​​​​​​\n\nOther impact includes:\n\n- the research, testing, and introduction of blobs through EIP-4844 (ie. proto-danksharding) in March 2024, has lowered L2 transaction costs by 10-100X\n- ongoing research into peerDAS and related constructions for the anticipated Pectra network upgrade, which will potentially lower the bandwidth requirements and/or further lower transaction costs for users\n- Optimism’s execution clients are modified L1 clients, which are maintained by Guild members\n- research, implementations, testing of EVM improvements. Optimism\'s EVM-equivalent architecture, makes the ecosystem more accessible to builders\n- ongoing maintainence of code-bases, support for network upgrades to make Ethereum more censorship resistant, secure, and accessible\n---------------------------------------\n\n--> A commons funding mechanism\n\nNo single individual/project could reproduce this software on their own. In recognition of this, the design of Protocol Guild is also grounded within the commons frame:\n\n1. Four year onchain vest, to individuals\n\nCommons stewardship plays out over time. Any funding drips slowly via immutable contracts to create legible guarantees for members + funders. Each member\'s share is time-weighted by their start date - which recognizes the local knowledge they\'ve accumulated.\n\n2. Broad membership, regularly updated\n\nMembers come from +25 projects/teams across the entire Layer 1 contributor set. This wide-ranging curation ensures that less well known but equally impactful contributions are surfaced.\nThis membership is regularly updated onchain every quarter. When paired with the vest, this ensures funding goes to contributors that stick around long-term, or those that show up in the future - not just those that are around today.\n\nThrough these features, Protocol Guild is able to support long-term, transparent, & comprehensive Layer 1 stewardship.\n\n---------------------------\n--> "Project", not "Org"\n\nWithin the Retro Program context, Protocol Guild opts to represent itself as a "Project" instead of as an "Organization."\n\n1. Fund the entire commons\n\nProtocol Guild aims to holistically fund the individuals engaged in Ethereum\'s core protocol , and not "features" or discrete projects of the protocol which will then compete against each other in the funding round.\n\n2. Funding, not project oversight\n\nProtocol Guild is scope-limited to allocate funding. The day-to-day activities of Ethereum projects/teams are not directed through Protocol Guild as an entity, or by any members in their affiliation as beneficiaries. Governance deliberations and roadmap decisions remain the responsibility of the broader community reaching rough consensus in public fora.\n\n3. Independent funding requests\n\nPresenting as an Organization with Projects might overlap with funding requests from individual core protocol projects/teams in the Retro round. These entities may have contributors/employees which are also members of Protocol Guild. However, these are are distinct entities from Protocol Guild itself. Protocol Guild funding goes directly to the individuals. In general, the membership does not have insight where this funding goes or how it is allocated.\n------------------------------\n\n--> Conclusion\n\nProtocol Guild’s design as a funding collective for individual Ethereum maintainers ensures that the network\'s ongoing evolution is sufficiently supported. By funding Protocol Guild through the Retro Program, badgeholders can ensure that it remains robust and capable of supporting innovations like Optimism.\n\nThank you for your consideration ❤️',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/889516a6-277c-4b6e-8453-74e798df7a2b.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/a95ff874-a643-4cd6-825d-b12efb805250.png',
    project_socialLinks_website: "['https://protocol-guild.readthedocs.io/']",
    project_socialLinks_farcaster: "['https://warpcast.com/protocolguild']",
    project_socialLinks_twitter: 'https://x.com/ProtocolGuild',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'Over the specified time period, Protocol Guild has supported individual members who maintain Ethereum related software resources, which enable OP-stack L2 chains to exist.\\n\\nLayer 1\\n- the client software powering the Ethereum Layer 1 has enabled the network to produce blocks, resolve reorgs, and finalize the chain regularly and without downtime\\n\\nDencun Upgrade [live march 2024, 9 EIPs](https://eips.ethereum.org/EIPS/eip-7569)\\n- EIP-4844: implementations, testing + activation of blobs: 10-100X transaction cost reductions for all Layer 2s\\n- the upgrade also included new EVM opcodes, improvements to the validator lifecycle, and cleanups up technical debt\\n\\nPectra Upgrade Devnets [20 EIPs currently](https://eips.ethereum.org/EIPS/eip-7600)\\n- PeerDAS: scaling blobs for L2s\\n- MaxEB: networking + validator improvements\\n- EIP 7702: better UX for users, more capabilities for devs\\n- EOF: EVM improvements\\n\\nOngoing stewardship\\n- increasing L1 censorship resistance\\n- bug fixes, more performant nodes', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': \"The infrastructure and software resources of the Ethereum commons are existential dependencies of OP-stack L2s.\\n\\nIf client software stopped being maintained long-term, bugs would likely be found and exploited on the mainnet L1. The L1 being unable to produce blocks or reach finality would be immediately catastrophic for all OP-stack chains. The impacts to users, projects, infra, brand would be deeply damaging. The Optimism community would have to take on the massive burden of maintaining all client repos in perpetuity.\\n\\nIf scaling research, network upgrade coordination and support stopped today, OP-stack chains would not be able to fully scale the Ethereum L1's security, censorship resistance, and credible neutrality assurances to more people.\\n\\nIf cryptography research stopped today, the network would not be able to develop new cryptographic mechanisms for use in the Ethereum context.\\n\\nThe continued funding support of Ethereum Layer 1 maintainers is positive sum for all participants!\", 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x056236fa3b7b2517f22e884bf78e048e6a29f58f882d5cc186afec84f632664b',
    applicationId:
      '0x056236fa3b7b2517f22e884bf78e048e6a29f58f882d5cc186afec84f632664b',
    projectId:
      '0xdf1bb03d08808e2d789f5eac8462bdc560f1bb5b0877f0cf8c66ab53a0bc2f5c',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum test networks',
    impactStatement_subcategory:
      "['Ethereum client implementations', 'Ethereum test networks', 'Infrastructure to test and deploy chains', 'Research which informs Ethereum core development']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'Lodestar',
    description:
      'Lodestar is a Typescript ecosystem for Ethereum consensus, developed by ChainSafe Systems. Our flagship products are our production-capable beacon chain and validator client. In addition, we maintain public repositories of useful tools for public use. Some of these libraries include JS implementations for BLS, SSZ, Discv5, Gossipsub, Noise and Yamux. Our work contributes to the backbone infrastructure required to keep the Ethereum blockchain progressing within the rules as defined by the specification.\n\nLodestar’s niche is in its implementation language, TypeScript. Our software and tooling is uniquely situated as the go-to for researchers and developers for rapid prototyping such as our Prover, a verified web3 provider using light clients to increase decentralization and security of the JSON-RPC. Millions of developers around the world are familiar with Typescript, and Lodestar’s high-quality codebases are excellent introductions to the Ethereum protocol, with the goal of increasing client diversity and attracting new talent from one of the largest groups of developers in the world.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/973ba7db-8101-405b-98a0-1f7d93a0f344.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/3bb2834a-dcfd-4a71-ae2f-1e4fbef4209c.png',
    project_socialLinks_website:
      "['https://lodestar.chainsafe.io', 'https://github.com/ChainSafe/lodestar', 'https://chainsafe.github.io/lodestar/', 'https://chainsafe.io']",
    project_socialLinks_farcaster: "['https://warpcast.com/lodestar']",
    project_socialLinks_twitter: 'https://x.com/lodestar_eth',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': \"Lodestar provides ongoing research, development and implementation of core infrastructure relied upon by OP Stack for consensus on Layer 1. Most notably, EIP-4844 (Shard Blob Transactions) has allowed for scaling Ethereum to allow L2s such as OP to utilize blob transactions instead of calldata for efficiencies in cost for utilizing Ethereum settlement. By contributing to the Typescript implementation, testing infrastructure and maintaining other libraries required for its success (such as nodeJS bindings for c-kzg), we were able to deliver this feature for the benefit of OP. In addition, EIPs such as EIP-4788 allows for embedding L1 beacon block roots into Layer 2 to reduce trust assumptions relating to Ethereum's consensus state. \", 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'Without the impact of Lodestar and its efforts to Ethereum protocol R&D, the specification would lack input from engineers familiar with the consensus specifications and how it impacts protocol implementation on a Typescript-based client. We regularly contribute to research, spec design, devnets, testnets and provide continuous infrastructure to support a increasingly larger network which requires more than one entity to provide stability and reliability, especially for networks where nothing is actually at stake (e.g. public testnets). ', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '5m-10m',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x078cf11f1d64911d10f1d57c1da9c09d67a167472afc530f3412c304ee0f239e',
    applicationId:
      '0x078cf11f1d64911d10f1d57c1da9c09d67a167472afc530f3412c304ee0f239e',
    projectId:
      '0x2e075fb37977668c15af474229f2f2abb009850a6a867b8bbf4adb5e293d1fe3',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum test networks',
    impactStatement_subcategory:
      "['Ethereum client implementations', 'Ethereum test networks', 'Infrastructure to test and deploy chains']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'Ethereum on ARM',
    description:
      'Contributing to the Ethereum L1/L2 decentralisation by providing images that turn ARM64/RISCV boards into L1/L2 Ethereum nodes.\n\nStaking from day zero on a $189 ARM board using ~10w.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/4f8da6a7-635a-41fc-b65b-cee09e666102.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/8eb0cc3f-87d0-40a7-bd83-610f669add57.png',
    project_socialLinks_website:
      "['https://ethereum-on-arm-documentation.readthedocs.io/']",
    project_socialLinks_farcaster: "['https://warpcast.com/ethereumonarm']",
    project_socialLinks_twitter: 'https://x.com/EthereumOnARM',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': '**Ethereum on ARM** supports the OP Stack by providing an accessible way for users to run L1 and L2 (particularly Optimism nodes) on ARM64 resource-constrained devices. It enhances the ecosystem in the following ways: \\n\\n- By enabling Optimism stack to run on affordable ARM64 devices, we lower the barrier to entry for users who may not have access to high-powered hardware. This contributes to network decentralization.\\n\\n- Ethereum on ARM reduces the complexity of setting up and managing Optimism nodes by consolidating all necessary configurations, binaries, and scripts into images the make it easy to run nodes and accelerate the onboarding process for new users. \\n\\n- The capability to run both L1 (Ethereum) and L2 (Optimism) nodes on the same ARM64 device allows for a more integrated and efficient setup, where users can support both layers of the OP Stack simultaneously. This contributes to the robustness and resilience of the Optimism network by encouraging more users to run full nodes.', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': \"Ethereum on ARM maintains a low barrier for running a node by minimizing costs, energy consumption, and hardware requirements. By lowering these barriers, we ensure that both Ethereum L1 and L2 nodes can be operated by any user from home. This accessibility is important for enhancing the decentralization, security, and scalability of the Ethereum network.\\n\\nWithout this reference, the hardware requirements and costs associated with running a node could increase, potentially restricting participation to only those with more resources. This would undermine the core principles of decentralization and inclusivity that are fundamental to the Ethereum ecosystem. By keeping node operation accessible and affordable, we help preserve Ethereum's resilience and long-term viability as a decentralized network.\", 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 99379,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x0a15ff59c1e8f4cf37610ff25b5f42ac06abae78cf4ad81e39146f7f50d42314',
    applicationId:
      '0x0a15ff59c1e8f4cf37610ff25b5f42ac06abae78cf4ad81e39146f7f50d42314',
    projectId:
      '0xbde4ef89d6c7719a9e514a74ba1f6accc016f8cbdc4e76ca50108927d45c4c4a',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum test networks',
    impactStatement_subcategory:
      "['Ethereum client implementations', 'Ethereum test networks', 'Research which informs Ethereum core development', 'Infrastructure to test and deploy chains']",
    organization_name: 'Sigma Prime',
    organization_description:
      'We are a team of researchers engineers and developers working towards improving decentralized technology as best we can.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/156370a7-5b85-4b7b-a5a8-ddf2b47c9d39.png',
    organizationCoverImageUrl: '',
    socialLinks_website: "['https://sigmaprime.io']",
    socialLinks_farcaster: [],
    socialLinks_twitter: '@sigp_io',
    socialLinks_mirror: '',
    team: "['845911']",
    name: 'Rust Libp2p',
    description:
      'The rust implementation of libp2p. Libp2p is a modular framework for a variety of p2p protocols. These protocols are used widely by a variety of projects to establish p2p communications in a decentralized manner.\n\nThe rust implementation is used by a variety of projects in the space including, Magi (OP Stack rollup client), Lighthouse (Ethereum consensus client) and Forest (Filecoin client). \n\nThe rust implementation specifically, is used by a variety of projects in the',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/352a5108-5f07-4765-a43d-7ba0b4b27054.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/01e43966-8955-4584-b45d-84645a97dc5d.png',
    project_socialLinks_website: "['https://sigmaprime.io']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '@sigp_io',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'Rust-libp2p underpins a number of projects in the blockchain ecosystem. Directly relevant projects are Magi (the rust OP rollup client) and Lighthouse (the rust Ethereum consensus client). \\n\\nThere are a number of efforts currently undertaken in this project that support the OP stack (albeit indirectly). \\n\\n1. Research efforts - Improvements to the specifications and protocols. This has resulted in faster networks, reduced bandwidth on clients and therefore lowering spec requirements to run nodes.\\n2. Security efforts - This project is actively tested and fuzzed for security vulnerabilities. Over the last few months we have identified and patched bugs in a variety of dependencies helping the security posture of the entire ecosystem.\\n3. Maintenance - Upgrades to core protocols, improved APIs and efficiency gains as the ecosytem advances.', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': \"This project is one implementation of many. Client diversity is a necessity in blockchain systems. With multiple implementations running on a network, a catastrophic bug in one implementation will not destroy an entire network/chain. \\n\\nWithout rust-libp2p, the rust Magi OP client and rust Lighthouse Ethereum consensus clients wouldn't function and would reduce the client diversity and therefore resilience of the OP stack to bugs and attack vectors. \\n\\nFurthermore the extensive research on the p2p network layer that has been done by the rust-libp2p team wouldn't continue and improve network health. As networks evolve over time, new and improved ways to handle larger networks and connectivity as well as improving efficiency becomes increasingly important. This is a direct focus of this project.\", 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '1m-5m',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x0b0732b7b9d8521f68d5b19a99bd6a62d0b66d8035e21596fc599c02060b7e00',
    applicationId:
      '0x0b0732b7b9d8521f68d5b19a99bd6a62d0b66d8035e21596fc599c02060b7e00',
    projectId:
      '0x04b1cd5a7c59117474ce414b309fa48e985bdaab4b0dab72045f74d04ebd8cff',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum test networks',
    impactStatement_subcategory:
      "['Ethereum client implementations', 'Ethereum test networks', 'Research which informs Ethereum core development']",
    organization_name: 'EthereumJS',
    organization_description:
      'A research team under the Ethereum Foundation dedicated to maintaining core Ethereum protocol primitives built in Javascript as well as continuously supporting the future of the protocol by building initial implementations of new EIPs and helping build and validate client test suites.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/4a6a80d2-0175-4785-a430-d869a974040c.png',
    organizationCoverImageUrl: '',
    socialLinks_website: [],
    socialLinks_farcaster: [],
    socialLinks_twitter: 'https://x.com/EFJavaScript',
    socialLinks_mirror: '',
    team: "['8687', '845732', '845750', '20870', '850246', '195598']",
    name: 'ethereumjs-monorepo',
    description:
      'A collection of Javascript/TypeScript libraries implementing Ethereum primitives, including an implementation of the Ethereum Virtual Machine (EVM) ready to be used in Node.js or a browser environment, implementations of core structural blockchain building blocks like an Ethereum Tx, Block or Blockchain as well as a Trie (Merkle Patricia Tree), devp2p (execution networking layer) implementation, and an experimental Verkle Trie implementation.\n\nAbove are complemented by helper packages like RLP for data encoding/decoding or Util, providing helper functionalities like (byte) conversion, signatures, types and others.\n\nFinally, the EthereumJS Execution Client is fully functional Execution Layer client used mainly testing out of new EIP implementations as well as participating in devnets and testnets preparing for hardfork upgrades.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/218036da-e153-4b4d-9730-4802bb4546f6.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/42d99706-ec97-446b-9abe-9c9de5028e33.png',
    project_socialLinks_website:
      "['https://github.com/ethereumjs/ethereumjs-monorepo']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://x.com/EFJavaScript/',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'The EthereumJS project has been a major contributor to implementing and testing new spec changes for the core Ethereum roadmap, including extensive participation in the merge through testnet participation and interop testing with other clients, an early implementation of EIP-4844 that participated in and helped power the 4844 devnets, and also ongoing participation in implementing new EIPs including both Verkle and EOF related EIPs.  Our code (notably our EVM implementation and lower level block/tx primitives) power numerous developer tooling projects (including TEVM, Remix, evm.codes, and others).  ', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'If the EthereumJS project goes away, there will cease to be any fully-featured implementation of the Ethereum core stack (which primarily powers the OP stack) in Javascript, which is the language of the web.  Our libraries are used by all sorts of wallets and signing applications to create and sign transactions, by developer toolchains to run the EVM and process bytecode, and by the core developer community as reference implementations of upcoming proposed EIPs and producing new interop tests (in partnership with Ethereum Foundation test team).', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 42236,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x0bae27264b02cc7ab3b54a595b2f85d067554642e5089612db4f6a00f92867fa',
    applicationId:
      '0x0bae27264b02cc7ab3b54a595b2f85d067554642e5089612db4f6a00f92867fa',
    projectId:
      '0xb39431ee9d3ab706b0607075dea81f00ecfac821e53b04afef57e44c47feec38',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum test networks',
    impactStatement_subcategory:
      "['Ethereum client implementations', 'Ethereum test networks', 'Research which informs Ethereum core development']",
    organization_name: 'Interplanetary Shipyard',
    organization_description:
      'Interplanetary Shipyard is an independent engineering team maintaining, operating, and developing the canonical IPFS and libp2p implementations.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/cc5bdce9-2076-4218-bb6e-08c08a03f9fe.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/f1bfae12-e2c7-4d3c-b5a6-036fe77579e5.png',
    socialLinks_website: "['https://ipshipyard.com/']",
    socialLinks_farcaster: [],
    socialLinks_twitter: 'https://x.com/ipshipyard',
    socialLinks_mirror: '',
    team: "['845866', '779819', '468804', '849466']",
    name: 'js-libp2p',
    description:
      "The canonical JavaScript implementation of libp2p. Js-libp2p is a collection of protocols that support a wide range of functionalities, such as; connection establishment, remote node protocol identification and negotiation (through its identify protocol), data encryption, content/peer discovery (through its Kademlia DHT component), and data transfer through its pub-sub protocol (Gossipsub).\n\nThe stakeholders of js-libp2p include the Interplanetary Shipyard team who maintain this implementation as well as projects that depend on js-libp2p like ChainSafe's Lodestar (Ethereum consensus client written in Typescript), Ocean Protocol (in their Ocean Nodes implementation), OrbitDB (a serverless, distributed, peer-to-peer database), Warden Protocol, and many more: https://github.com/libp2p/js-libp2p/tree/main#used-by and https://github.com/libp2p/js-libp2p/network/dependents.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/11d09c62-9356-40b2-9cd2-06b98f816bfb.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/826fafd9-28a8-49f8-9d07-0e5e57880f20.png',
    project_socialLinks_website:
      "['https://ipshipyard.com/', 'https://github.com/libp2p/js-libp2p']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://x.com/ipshipyard',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': \"js-libp2p powers Lodestar, the Typescript implementation of Ethereum consensus client.\\nLodestar makes us of js-libp2p's protocol per the Beacon Chain networking spec and is chiefly reliant on the TCP transport, yamux and mplex for multiplexing, TLS and Noise secure channels, and GossipSub for p2p messaging.\\nBetween Oct 1 2023 - July 31 2024, js-libp2p has had numerous releases ranging from v0.46.x to v1.8.x - the first major 1.x.x version of js-libp2p was released and the releases contained improvements like implementing Circuit Relay v2, NAT hole punching with DCUtR, an 80%+ improvement in connection establishment time between two js-libp2p nodes, continuously improving the throughput of js-libp2p nodes, improving developer experience by making js-libp2p a monorepo, and much more.\", 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': \"If js-libp2p ceased to exist, Lodestar could not function as a Beacon Chain node. Client diversity and resiliency are important to the health of the Ethereum network. Because Ethereum underpins L2's like Optimism, its health is important to the OP Stack. According to Miga Labs' data source Beacon Chain client diversity metrics, js-libp2p Lodestar nodes consist of 3.07% of the network (2024-09-05). Additionally, without js-libp2p, there would be no JS/TS implementation of libp2p to interoperate with other language implementations such as go-libp2p or rust-libp2p.\", 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x11c3d1437e8ac8ee38b29886eeb14061c06e372a5d5a08ec629d5fdeef8cd1f6',
    applicationId:
      '0x11c3d1437e8ac8ee38b29886eeb14061c06e372a5d5a08ec629d5fdeef8cd1f6',
    projectId:
      '0xe346264e87202b47f1057eb0b0fcaa0ea7f83e14507ca4585a91a5d94e0e92c0',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum test networks',
    impactStatement_subcategory:
      "['Ethereum client implementations', 'Ethereum test networks', 'Research which informs Ethereum core development']",
    organization_name: 'Interplanetary Shipyard',
    organization_description:
      'Interplanetary Shipyard is an independent engineering team maintaining, operating, and developing the canonical IPFS and libp2p implementations.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/cc5bdce9-2076-4218-bb6e-08c08a03f9fe.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/f1bfae12-e2c7-4d3c-b5a6-036fe77579e5.png',
    socialLinks_website: "['https://ipshipyard.com/']",
    socialLinks_farcaster: [],
    socialLinks_twitter: 'https://x.com/ipshipyard',
    socialLinks_mirror: '',
    team: "['845866', '779819', '468804', '849466']",
    name: 'go-libp2p',
    description:
      "The canonical Golang implementation of libp2p. Go-libp2p is a collection of protocols that support a wide range of functionalities, such as; connection establishment, remote node protocol identification and negotiation (through its identify protocol), data encryption, content/peer discovery (through its Kademlia DHT component), and data transfer through its pub-sub protocol (Gossipsub).\n\nThe stakeholders of go-libp2p include the Interplanetary Shipyard team who maintain this implementation as well as projects that depend on go-libp2p like Optimism's op-node (the reference implementation of the rollup-node spec), the Ethereum Beacon Chain (via Prysm, the Go consensus client), Filecoin (Lotus and Venus), Celestia node, and many more: https://github.com/libp2p/go-libp2p?tab=readme-ov-file#notable-users.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/277d8353-44c4-4e16-a2bd-2dfb3fb9e65f.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/4c70ca4a-8b38-47ee-97d0-2a64a63700f8.png',
    project_socialLinks_website:
      "['https://ipshipyard.com/', 'https://github.com/libp2p/go-libp2p']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://x.com/ipshipyard',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': \"go-libp2p powers the Optimism mainnet through its use in op-node and similarly powers the Optimism Superchain ecosystem via it's use in the OP Stack. In op-node and OP stack, go-libp2p's  TCP transport, Connection Manager, Peerstore, Identify, AutoNAT & Ping protocols are used. As well as multiplexers like mplex and yamux, the TLS and Noise secure channels, and GossipSub for p2p messaging.\\nIn the period between Oct 1 2023 - July 31 2024, go-libp2p has 3 major releases from v0.32.x to v0.35.x used in the OP stack and beacon chain. Major improvements include efficiencies like improving the dial prioritization logic to avoid spurious dials (Happy eyeballs for TCP), TLS encryption for TCP by default (for better performance), multiple improvements to the go-libp2p Resource manager, and more. Furthermore, in this period, go-libp2p has released multiple security fixes that improve the health of the Ethereum and Optimism mainnet.\", 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'Because the Ethereum Beacon Chain and the OP stack are completely reliant on libp2p for its networking capabilities, if the go-libp2p project did not exist then both projects would have to have to write a libp2p implementation in Golang from scratch. A key yet understated feature that libp2p provides is interoperability across implementations in different languages. For example, a go-libp2p Prysm node can communicate with a rust-libp2p Lighthouse node seamlessly; without go-libp2p, there would be no Golang implementation to interoperate or form p2p networks with other language implementations. As a result, without go-libp2p Ethereum and the OP stack would lose a crucial libp2p implementation that powers the OP mainnet and a significant percentage of the Beacon Chain.', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x1547a722f7731b439b97428c31925100ef49ae443e32f5bba766268c296a3379',
    applicationId:
      '0x1547a722f7731b439b97428c31925100ef49ae443e32f5bba766268c296a3379',
    projectId:
      '0xa9860e1ba61461740831e00d03eb22660e47e8e9087b2ea2e4441f21210fb786',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum test networks',
    impactStatement_subcategory:
      "['Ethereum client implementations', 'Ethereum test networks']",
    organization_name: 'GregCardo',
    organization_description:
      'GregCardo  is a software developer with a passion for innovation and problem-solving. Experienced in collaborating with global teams and eager to contribute creative solutions within the Ethereum Ecosystem.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/1e73fbdc-3319-4e74-9d4a-a0a14325ced1.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/ca72c3c1-190b-493a-ab8d-1a5dafa296d5.png',
    socialLinks_website: [],
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['261806']",
    name: 'Ethereum Execution Client Specification Code Quality and Refactor Enhancements',
    description:
      'This project is dedicated to improving the robustness, maintainability, and efficiency of the Ethereum execution specs clients through targeted code quality enhancements and refactoring efforts.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/cc7123c4-abe2-45b8-8d21-9088a643869a.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/38c4523d-4b0d-48ec-bc64-6b854005ba10.png',
    project_socialLinks_website:
      "['https://github.com/richardgreg/execution-specs', 'https://github.com/richardgreg/execution-spec-tests']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'My contributions to the Ethereum Execution Specs and Ethereum Execution Specs Test projects are crucial in supporting the OP Stack.\\n\\nUpdating and maintaining the projects ensured that the projects were immaculate so the OP Stack could adhere to the latest Ethereum specifications and standards. That helps preserve compatibility and reliability across different forks and transaction types within the OP Stack ecosystem, among other benefits.\\n\\nFurthermore, my work on the Execution Specs Test project, which involves updating tests to align with new Solidity versions and refactoring types in the Execution Specs for better maintainability, is of utmost importance. This work ensures the correct and efficient operation of the OP Stack, catching issues early and validating compliance with specifications. I also contributed to documenting the execution specs and related test frameworks, making it easier for developers to understand and implement the OP Stack’s requirements and functionalities.', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'I provide immense support to the main developers; if they lose that, it will put a significant strain on them. In turn, the OP Stack might struggle to stay in sync with evolving Ethereum specifications updates, potentially leading to compatibility issues and deviations from established standards.\\n\\nFurthermore, without updated documentation and tests, it would become more challenging for developers to understand and work with the OP Stack effectively, potentially slowing down development and leading to implementation errors.\\n\\nMy contributions play a vital role in supporting Ethereum core devs and providing clear documentation. Without these efforts, the OP Stack would face increased risks and challenges in maintaining its network integrity and functionality.', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: 'foundation-grant',
    grant_1_link: 'https://app.charmverse.io/op-grants/page-472203923295754',
    grant_1_amount: 40000,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x3cad2fcfc5dc8fb8f549dbd057700f58619a1a9d03d2390dcb7f2041fd71dce7',
    applicationId:
      '0x3cad2fcfc5dc8fb8f549dbd057700f58619a1a9d03d2390dcb7f2041fd71dce7',
    projectId:
      '0xdc64b926541adf4b79f4dd2bce21bae08a72926dcf85833c9c59119623996b28',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum test networks',
    impactStatement_subcategory:
      "['Ethereum test networks', 'Infrastructure to test and deploy chains']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'Ethereum POS Testnet',
    description:
      'Quick and Easy Way to Bootstrap your own Local Ethereum PoS Testnet. Great for testing consensus',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/337dbbb2-74f9-4eee-9685-95922c926e38.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/e76d2c47-741f-4277-9b6f-e2930a492b47.png',
    project_socialLinks_website: [],
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': \"This project is used to spin up an L1 chain that can and has been used as a base layer for OP Stack. In the past year, I've had more than 200 clones of the project and [received testimony](https://github.com/rzmahmood/ethereum-pos-testnet/issues/23#issuecomment-2300014549) that it has been used to launch chains such as CoNet https://x.com/CoNET_Network, and is actively being used as a base layer for OP Stack chains. \\n\\nExisting ephemeral test net solutions do not allow developers to modify the base layer without significant effort such as rebuilding docker images on each change. This solution fills the gap, speeding up development time and easing more engineers into protocol development.\", 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'If my project ceased to exist, there would be no easy way for OP Stack deployers to launch their chain on a customised L1. Customising the L1 allows for forward-thinking as Ethereum evolves, allowing us to toy with ideas that further accelerate the Rollup scalability roadmap. ', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x3e6e0104e18f3c083a8209cbea0b2b36f51d38fd72e71604eb57d757581998e3',
    applicationId:
      '0x3e6e0104e18f3c083a8209cbea0b2b36f51d38fd72e71604eb57d757581998e3',
    projectId:
      '0xc49d46c5606148617c4202a6a0f745ce194418ca81f1c27d1ff75ea84e32a0cc',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum test networks',
    impactStatement_subcategory: "['Infrastructure to test and deploy chains']",
    organization_name: 'Vac',
    organization_description:
      'Vac is a principle-driven research and development group that provides technical support to the Institute of Free Technology (IFT). It comprises R&D Service Units, Deep Research, and Incubator Projects. We do applied research based on which we build protocols, libraries, specifications, and publications. As custodians of these protocols, our aim is to adhere to a set of principles that ensure their alignment with our core values and objectives.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/b827d993-ab96-46f1-87b9-db390a7c699a.png',
    organizationCoverImageUrl: '',
    socialLinks_website: "['https://vac.dev/']",
    socialLinks_farcaster: [],
    socialLinks_twitter: 'https://x.com/vacp2p',
    socialLinks_mirror: '',
    team: "['849530']",
    name: 'nim-libp2p',
    description:
      "libp2p is a Peer-to-Peer networking stack, with implementations in multiple languages derived from the same specifications.\n\nBuilding large scale peer-to-peer systems has been complex and difficult in the last 15 years and libp2p is a way to fix that. It's striving to be a modular stack, with sane and secure defaults, useful protocols, while remaining open and extensible. This implementation in native Nim, relying on chronos for async. It's used in production by a few projects.\n\nLearn more about libp2p at libp2p.io and follow libp2p's documentation docs.libp2p.io.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/0a383e33-111b-4b55-8380-b9efbb5b8c79.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/b5e4e8f2-f625-445b-b802-817890372687.png',
    project_socialLinks_website: "['https://github.com/vacp2p/nim-libp2p']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': \"ibp2p is an open source networking library used by the world's most important distributed systems such as Ethereum, IPFS, Filecoin, Optimism and countless others. There are native implementations in Go, Rust, Javascript, C++, Nim, Java/Kotlin, Python, .Net, Swift and Zig. It is the simplest solution for global scale peer-to-peer networking and includes support for pub-sub message passing, distributed hash tables, NAT hole punching and browser-to-browser direct communication.\", 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': \"The OP Stack leverages libp2p for efficient block propagation between nodes and to handle other P2P communication needs. The GossipSub protocol, which is part of the libp2p framework, is used for broadcasting blocks and managing topics on the network to improve latency and bandwidth efficiency. This helps nodes to share information such as blocks and messages more effectively, a critical component of Optimism’s rollup architecture.\\n\\nMoreover, the OP mainnet specifically uses the Go implementation of libp2p for its networking stack, demonstrating the framework's integration and importance in maintaining secure, decentralized communication within Optimism's ecosystem.\", 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: 'token-house-mission',
    grant_1_link:
      'https://app.charmverse.io/op-grants/the-op-fault-proof-ctf-39249094150592323',
    grant_1_amount: 50000,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x3ba0b3e5456e209ea494e8f58197f3b46c20040a3cda99ae448fa355509132f4',
    applicationId:
      '0x3ba0b3e5456e209ea494e8f58197f3b46c20040a3cda99ae448fa355509132f4',
    projectId:
      '0xd4ed99cc6aaf73ca63b32f7a03b5427ac1d2955bf9efc31eb14f5773016988d0',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Infrastructure to test and deploy',
    impactStatement_subcategory:
      "['Ethereum test networks', 'Infrastructure to test and deploy chains', 'Research which informs Ethereum core development']",
    organization_name: 'ethPandaOps',
    organization_description:
      'We are a team of DevOps engineers at the Ethereum Foundation dedicated to coordinating and testing Ethereum protocol upgrades. Our mission is to build reusable tools for the entire ecosystem, with a focus on enhancing the deployment and testing stack of Ethereum. We manage the deployment, maintenance, and testing of upcoming upgrades through devnets, working closely with Ethereum client teams to identify and resolve bugs.\n\nIn addition to testing, we actively collect and monitor data from the Ethereum mainnet and testnets to detect anomalies and gain research insights. This data stack provides valuable insights into the network’s state and lays the groundwork for future, data-driven upgrades.\n\nRecently, we have expanded our efforts to include Layer 2 (L2) support for the automation tools we use on L1. This initiative aims to facilitate easier interoperability and accelerate testing processes.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/79ddd288-f60d-4985-ae21-dfa433d92472.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/fbab7e54-5168-4c5f-9a1e-6dd29bfec921.png',
    socialLinks_website: "['https://ethpandaops.io']",
    socialLinks_farcaster: "['https://warpcast.com/ethpandaops']",
    socialLinks_twitter: 'https://x.com/ethPandaOps',
    socialLinks_mirror: '',
    team: "['840195', '212735', '843933', '11652', '840686', '811515', '212493']",
    name: 'Ethereum devnets and testing tools',
    description:
      'As a team, we focus on Ethereum testing and protocol upgrades. In order to do this well, We build and maintain many projects that help ship Ethereum upgrades safely and quickly. A full list of our open-source tools can be found on our website at https://ethpandaops.io/projects/.\n\nOne of the major projects the team undertakes is supporting Ethereum hardforks with devnets. Devnets are fully-fledged Ethereum networks that we use for testing new features. We have infrastructure tooling that makes it possible to run a local devnet on your machine. For more intricate tests and networks, we also provide tools to deploy nodes across multiple remote servers. All of these networks come with tools to analyze, test, and debug them. Devnets help Ethereum core developers to make their clients more reliable by identifying issues before they happen on Ethereum mainnet.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/0be4f6a2-ff4f-4681-a888-8abeb659bfd3.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/dabbf4f6-1a92-4562-a563-7a5749c055ef.png',
    project_socialLinks_website: "['https://ethpandaops.io']",
    project_socialLinks_farcaster: "['https://warpcast.com/ethpandaops']",
    project_socialLinks_twitter: 'https://x.com/ethpandaops',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'The Ethereum devnets and tooling that we build help speed up the delivery of forks on mainnet. These tools were instrumental to testing and analysing Ethereum mainnet helping lead to the chosen blob target and max for the Dencun fork, which subsequently aided the OP-stack by reducing the cost of operations. The analysis tools additionally help us monitor the health of Ethereum, which directly contributes to decisions we make about scaling the L1. ', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'Since a lot of the tools are used by Core developers to test and ship forks, it would directly impact their ability to do so or increase the amount of friction they need to go through. Core dev friction directly correlates to the stability of the L1 chain as well as ability to ship future forks. These shifts would negatively impact the OP stacks operations. ', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x3d99c996bf2979b7ff827a4b2b2c56c65580bc75854ac41b30f034465801f301',
    applicationId:
      '0x3d99c996bf2979b7ff827a4b2b2c56c65580bc75854ac41b30f034465801f301',
    projectId:
      '0x5606763865e540ae9ff0c58f206a708f58ea117c08d8d8d1e74f768abeff084c',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Infrastructure to test and deploy',
    impactStatement_subcategory:
      "['Ethereum test networks', 'Infrastructure to test and deploy chains']",
    organization_name: 'Dappnode',
    organization_description:
      'Dappnode is a decentralized infrastructure platform that allows users to easily host their own decentralized applications (dApps) and blockchain nodes. Dappnode makes it easy to host and run various types of blockchain software, such as Ethereum, Bitcoin, IPFS, and others. The platform also provides users with a user-friendly interface to manage and monitor nodes.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/8f9f9f23-b2de-4498-b7a9-5763d312ccb0.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/49eb70d6-4b32-4b14-aebb-c8862c7bd490.png',
    socialLinks_website:
      "['https://dappnode.com', 'https://smooth.dappnode.io']",
    socialLinks_farcaster: "['https://warpcast.com/dappnode']",
    socialLinks_twitter: 'https://twitter.com/dappnode',
    socialLinks_mirror: '',
    team: "['8263', '15703']",
    name: 'Dappnode',
    description:
      'Since 2018, Dappnode has been a key software for blockchain infrastructure and a big part of decentralization in Ethereum.\nDappnode is a decentralized infrastructure platform that allows users to easily host their own decentralized applications (dApps) and blockchain nodes. Dappnode makes it easy to host and run various types of blockchain software, such as Ethereum, Bitcoin, IPFS, and others. The platform also provides users with a user-friendly interface to manage and monitor their nodes.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/69817332-d0d8-41e4-98bf-d691ac36a92f.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/7337ad49-5899-4fcf-9420-931cb7c45277.png',
    project_socialLinks_website: "['https://dappnode.com']",
    project_socialLinks_farcaster: "['https://warpcast.com/dappnode']",
    project_socialLinks_twitter: 'https://twitter.com/dappnode',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': \"Dappnode provides critical infrastructure and tools that enhance the usability, security, and decentralization of Ethereum. By integrating Optimism clients into the Dappnode Rollups menu, it simplifies node setup and maintenance, boosting network participation and resilience. The launch of the Smooth MEV Smoothing Pool incentivizes solo stakers with increased rewards, contributing to the economic security of the broader Ethereum ecosystem.\\nAdditionally, Dappnode's Driving School tutorial series has been key in onboarding new users by simplifying node syncing, thereby supporting a broader base of node operators. The integration of the Holesky testnet and support for Holesky MEV Boost ensure that developers and stakers have access to the latest testing environments. Improvements in Ethical Metrics and Dencun upgrades further demonstrate Dappnode's commitment to addressing the evolving needs of node operators.\", 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'If Dappnode ceased to exist, the OP Stack would be missing significant features . First, the ease of node setup and maintenance provided by the Dappnode platform would be lost, leading to a potential decrease in the number of independent nodes operating on the Ethereum network. This reduction in decentralization could make the network more vulnerable to centralization risks and diminish its overall resilience.\\nThe absence of the Smooth MEV Smoothing Pool would likely result in reduced staking rewards for solo stakers, which could discourage participation from smaller, independent operators. This would concentrate staking power in the hands of larger entities, reducing the economic security and diversity of Ethereum that makes the OP Stack possible.', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 2342424248,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x3fe005facaaa824b2fd2190be9a1fa124577580dbcdf91f85308725161a79990',
    applicationId:
      '0x3fe005facaaa824b2fd2190be9a1fa124577580dbcdf91f85308725161a79990',
    projectId:
      '0x7333cac46b20999de07f4d7be5146c10a30f19586907bd2ce986b81af340cb97',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Infrastructure to test and deploy',
    impactStatement_subcategory: "['Infrastructure to test and deploy chains']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'rhinofi',
    description:
      'rhino.fi is the ultimate Layer 2 bridge for effortlessmulti-chain token movement',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/ddd580ed-71e8-4a88-be3b-32d302c4821c.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/719357a2-dff4-43d7-a508-cbf7999186d1.png',
    project_socialLinks_website: "['rhino.fi', 'https://app.rhino.fi/']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://x.com/rhinofi',
    project_socialLinks_mirror: '',
    pricingModel: 'pay_to_use',
    impactStatement_statement:
      "[{'answer': 'As a layer2 bridge rhinofi plays a crucial role in fostering interoperability within the blockchain ecosystem, and especially for the OP Stack ecosystem. \\n\\nBy facilitating cross-chain transactions across 27+ Active EVM and non-EVM chains, and therefore providing a route for users to transition from non-OP Stack chains to OP Stack chains, rhinofi significantly lowers the barrier to entry for users interested in discovering the unique opportunities within the OP Stack ecosystem. This improved user experience not only benefits individual users but also contributes to the overall growth and adoption of OP Stack-based platforms.\\n\\nTo date, rhinofi has achieved the following in regards to the OP Stack ecosystem:\\n\\n- 7 chains supported - OP Mainnet, Base, Mode, Blast, Zircuit, Mantle, opBNB\\n- Total bridged volume on OP Stack chains - $810mio+\\n- Total TX on OP Stack chains - 1,7mio+\\n- Total User bridged from/to OP Stack chains - 1,3mio+\\n- OP Stack campaign - https://rhino.fi/rhino-summer/', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'Over the years, rhinofi has positioned itself as a trusted bridge that users often choose as their primary option due to its excellent user interface and overall experience. The absence of rhinofi would not only diminish the potential for new liquidity to flow in from non-OP Stack chains but also reduce the fluidity and ease of movement of liquidity across the OP Stack chain.\\n\\nMoreover, a reduction in available bridging routes to the OP Stack - following a hypothetical decommissioning of rhinofi - would lead to an increased reliance on a smaller number of bridge partners, potentially concentrating risks among fewer actors. Such a scenario could make the ecosystem more vulnerable to disruptions and limit the diversity of options for users seeking to interact with OP Stack chains.', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: 'token-house-mission',
    grant_1_link:
      'https://app.charmverse.io/op-grants/research-on-using-yubihsm-and-aws-kms-hardware-signer-on-op-stack-41211765826072866',
    grant_1_amount: 15000,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x40de60e9c823d1a278f432a95d4393218c8c0fd9ab8bc6c5e3202fa1b040c7a6',
    applicationId:
      '0x40de60e9c823d1a278f432a95d4393218c8c0fd9ab8bc6c5e3202fa1b040c7a6',
    projectId:
      '0xbd7efe4f47254e152bc1193b095dbad6711748577df2cd8f6a55c125ea58a376',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Infrastructure to test and deploy',
    impactStatement_subcategory:
      "['Languages which are dedicated to developing smart contracts']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'Vyper',
    description: 'Pythonic Smart Contract Language for the EVM',
    profileAvatarUrl:
      'https://cdn.charmverse.io/user-content/5302de23-eae6-4cda-97aa-25fefd829726/9aa6f15f-e32a-4bca-a40a-5b1e1122babb/2024-06-11_23-25.png',
    projectCoverImageUrl:
      'https://cdn.charmverse.io/user-content/5302de23-eae6-4cda-97aa-25fefd829726/6c137923-55fc-4dc9-9424-5dad59f82ab4/vyper-optimism.png',
    project_socialLinks_website:
      "['https://github.com/vyperlang/vyper', 'https://vyperlang.org/']",
    project_socialLinks_farcaster: "['https://warpcast.com/~/channel/vyper']",
    project_socialLinks_twitter: 'https://x.com/vyperlang?lang=en',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': \"- Vyper contracts account for over 5% ($30m) of the TVL on Optimism and secure more than $2 billion across multiple chains for major protocols such as Curve, Velodrome, Lido, Perpetual Protocol and Yearn.\\n- Vyper is the currently the only production-ready alternative to Solidity, as such it is the main driver of language diversity on the OP stack, hereby reducing the risk of a systemic failure arising from vulnerabilities in a single programming language.\\n- Vyper's commitment to security through its language design choices and stringent audit process increases the security of the OP Stack.\\n- Vyper's easy, Pythonic syntax is great to onboard web2 developers already familiar with Python to web3\\n- The Vyper team's continued efforts to bring optimizations to the compiler enhance the efficiency of the OP stack.\", 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': '- Major projects of the OP stack such as Velodrome, Curve or Yearn which rely on Vyper would see their future development hindered and would not receive support as all or part of their contracts are written in Vyper\\n- Smart contracts on the OP Stack would be entirely dominated by a single programming language with all the centralization risks that this situation implies \\n- Lose out on an excellent gateway for onboarding new developers', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 10000,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x41275977def21cc80eaddabfc98c04cf02df9c92c918070437d9619a8151b9f5',
    applicationId:
      '0x41275977def21cc80eaddabfc98c04cf02df9c92c918070437d9619a8151b9f5',
    projectId:
      '0x60f8ab8d1ae00182f9afaf6ec35213a200ed8ac21d39b24a9794f2ba21f6aa59',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Infrastructure to test and deploy',
    impactStatement_subcategory:
      "['Languages which are dedicated to developing smart contracts']",
    organization_name: 'Fe Language',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: [],
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['850320']",
    name: 'Fe Language',
    description:
      'Fe is a high-level language for the EVM. It is heavily inspired by Rust and implemented in it too. You can use Fe to write smart contracts for Ethereum or any EVM-equivalent platform. Developers who have come to appreciate Rust will enjoy many of the features currently supported by Fe.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/05ac5706-2a13-4325-8333-183a730e7797.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/f733c3ee-3819-40f8-9ee8-b94416a770d9.png',
    project_socialLinks_website: "['fe-lang.org']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'The absence of our project would reduce language diversity, which is crucial for fostering innovation and attracting a broader range of developers with diverse skill sets. Language diversity improves accessibility, lowers entry barriers, and drives broader adoption. A more homogeneous language ecosystem could slow down growth and limit the flexibility and inclusiveness that encourage long-term ecosystem development within the OP Stack.', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}, {'answer': 'The Fe compiler, which targets the EVM, enables developers to write Fe code for Ethereum and any EVM-compatible platform, including OP Stack. Fe introduces valuable features such as enums, pattern matching, libraries, modules, a standard library, traits, and built-in testing. By advancing programming languages like Fe, we enhance both the development experience and the overall blockchain ecosystem, offering greater flexibility and capability for developers within the OP Stack.', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 'under-1m',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x417e4e0fab598eee0958d618dfa22dc4ad60eaaa659b811c4780da1df7c7aad6',
    applicationId:
      '0x417e4e0fab598eee0958d618dfa22dc4ad60eaaa659b811c4780da1df7c7aad6',
    projectId:
      '0x7d69da70e6453a7abb641a770cad602c0a7893186cb20f990efe22c0cb248115',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Infrastructure to test and deploy',
    impactStatement_subcategory:
      "['Languages which are dedicated to developing smart contracts']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'Solidity',
    description:
      'Solidity is an object-oriented, high-level language for implementing smart contracts.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/b6f312d0-1025-4a19-baa9-3aa218fe0833.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/bca65077-a87b-4fd8-bcc3-9ad0a65d9d27.png',
    project_socialLinks_website: "['https://soliditylang.org/']",
    project_socialLinks_farcaster: "['https://warpcast.com/soliditylang.eth']",
    project_socialLinks_twitter: 'https://x.com/solidity_lang',
    project_socialLinks_mirror: 'https://soliditylang.org/blog/',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': '→ As of today, Etherscan has 32,441 verified smart contracts deployed on Optimism. Out of the latest 500 verified smart contracts, 5 are written in Vyper and 495 in Solidity, making Solidity the most used language for writing smart contracts deployed on Optimism. Based on this, it is safe to assume that at least 95% of the contracts on Optimism are written in Solidity.\\nSee, for reference: https://optimistic.etherscan.io/contractsVerified\\n→ All of Optimism’s L1 and L2 contracts itself are written in solidity:\\nhttps://github.com/ethereum-optimism/optimism/tree/develop/packages/contracts-bedrock/src\\n→ In a TVL analysis, Solidity is at 91.05% as of Sep 3 among 17 other languages: https://defillama.com/languages\\n\\nSolidity, as a widely used smart contract language, enables developers to build a a wide range of dapps on the OP Stack that are secure and reliable. Additionally, testing frameworks and debugging tools designed for Solidity seamlessly integrate with the OP Stack.', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'If Solidity is no longer maintained or there are no future releases, all projects based on Optimism would eventually need to rewrite their contracts in another smart contract language. Additionally, future updates to the L1 and L2 contracts of Optimism might need to be rewritten in another language due to missing updates and security patterns in the language.\\n\\nSolidity’s existing impact on the OP stack enables smart contract compatibility and portability. As the OP stack continues to evolve, Solidity’s role in its growth and adoption remains pivotal as the most used smart contract language.', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 557301,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x41e9bd84d87b85a4190e4ce47865b14733f12e803cf97c0300d89b75c9bf0c32',
    applicationId:
      '0x41e9bd84d87b85a4190e4ce47865b14733f12e803cf97c0300d89b75c9bf0c32',
    projectId:
      '0x52d9a9709aeb50c10afb0f67a35f1a538bc6897c9f45161d39c37fd566fbe19a',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Infrastructure to test and deploy',
    impactStatement_subcategory:
      "['Languages which are dedicated to developing smart contracts']",
    organization_name: 'Formal Verification @ Ethereum Foundation',
    organization_description:
      'Ethereum Foundation team dedicated at developing Formal Verification Tools for Ethereum Smart Contracts',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/5b371001-feaf-4002-8671-c4314150460c.png',
    organizationCoverImageUrl: '',
    socialLinks_website: "['https://fv.ethereum.org']",
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['843949', '844134', '845018', '848682']",
    name: 'Act',
    description:
      'Act is a smart contract specification language and toolkit for formal verification. Act specifications are a formal, high-level description of all possible behaviours of an EVM program. Act allows many existing general purpose verification tools to be leveraged to prove properties about the specification. Such tools include SMT solvers (cvc5, z3, bitwuzla), theorem provers (Coq) and economic analysis tooling (CheckMate, Open Games). Act specifications can be automatically proved equivalent to concrete implementations in EVM. For very simple contracts, Act specifications can be automatically generated from EVM bytecode.\n\nThis is an end-to-end pipeline that supports principled reasoning about high level properties of EVM bytecode. It supports reasoning about both correctness (e.g. accounting invariants) and economic properties (e.g. incentive compatibility). Act specifications serve as a high-level smart contract representation, allowing for easy integration of existing general purpose analysis and verification tooling into the EVM context.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/a08fa912-3bc7-4957-9a64-5b10bc13397e.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/16e8a1cb-69b1-4098-8c40-fd25a5a29b8f.png',
    project_socialLinks_website:
      "['https://github.com/ethereum/act', 'https://ethereum.github.io/act/']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'Formal Verification is widely recognized to be one of the most effective ways to construct bug free systems. It is used as a best practice in high assurance domains (e.g. aerospace, processor design). \\n\\nThe Act language can be used to formally verify contracts deployed to any EVM-based blockchain. It can be used to enhance the security and reliability of programs that are deployed on the OP stack. Since October 2023 we have made the following enhancements to Act: \\n\\n- A decompiler from EVM -> Act\\n- Experimental support for verification of game theoretic properties (via integration with the CheckMate tool)\\n- Extensions to the core language (e.g. multi-contract specifications, case consistency checks) \\n- General improvements (bug fixes, ui enhancements, documentation)\\n\\nThese features have expanded the range of contracts that can be specified, the complexity of the properties that can be verified, and lowered the friction for generating specifications and using the tool.', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'OP stack developers would lose access to a powerful and cutting edge suite of formal verification tooling. This would make it harder for developers of applications that are deployed on the OP stack to reason about the correctness and safety of their systems.', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 62608.95,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x54d4b15fc19bb1d56a611e650d54847ee6fbc24cc19ed3ecb464a4269268270e',
    applicationId:
      '0x54d4b15fc19bb1d56a611e650d54847ee6fbc24cc19ed3ecb464a4269268270e',
    projectId:
      '0x834139065d671234f9a922e6b55c33cc45ece1316cfc6e477b07488b76ce27c2',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Infrastructure to test and deploy',
    impactStatement_subcategory:
      "['Services for deploying and hosting an OP Chain.', 'Languages which are dedicated to developing smart contracts']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'Opstack For Cats Dream ☑️',
    description:
      'I am a builder who deals with the production of nft in all L2s. I create my NFTs with artificial intelligence. I think my imaginary collection of cats is worthy of receiving an award on optimism.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/aaff6a85-cd3e-4066-8f03-f09359b3a900.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/318a51e5-edfa-4564-8937-8508d3041a72.png',
    project_socialLinks_website:
      "['https://element.market/collections/opstack-for-cats-dream']",
    project_socialLinks_farcaster: "['@zeus199803']",
    project_socialLinks_twitter: 'https://twitter.com/CiyiltepeE32442',
    project_socialLinks_mirror: '',
    pricingModel: 'pay_to_use',
    impactStatement_statement:
      "[{'answer': 'My project name directly includes Opstack. This is a project that advertises you in your weak NFT market. First of all, instead of dealing with coding etc., increase your TPS rate by activating your NFT market. At this rate, you will be a ghostchain, not a superchain.', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'Your NFT market will be completely finished and you will turn into a nonsensical network with no color. As we try to be with you with our projects, you are giving grants to many projects that do not need them and that already receive grants. I wonder if you are making yourself rich under the name of grant distribution. I will investigate this.', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 130577.81,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x5886472cf166ffa3671aa8c9bc303f8644e1ad90d67a53aec0f97eb6c9e6844d',
    applicationId:
      '0x5886472cf166ffa3671aa8c9bc303f8644e1ad90d67a53aec0f97eb6c9e6844d',
    projectId:
      '0x20c5765632f669a3d5167f95cc7963d7bbf060b68e4621d0c9091b7f7e1b26ab',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Infrastructure to test and deploy',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.', 'Ethereum client implementations']",
    organization_name: 'Nethermind',
    organization_description: '',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/ead85a0e-7517-4e76-a094-4ca53869d34c.png',
    organizationCoverImageUrl: '',
    socialLinks_website: "['https://www.nethermind.io/']",
    socialLinks_farcaster: "['https://warpcast.com/nethermind']",
    socialLinks_twitter: 'https://x.com/NethermindEth',
    socialLinks_mirror: '',
    team: "['230074', '292202']",
    name: 'Nethermind Ethereum Execution Client',
    description:
      'Nethermind is a robust and highly configurable Ethereum Execution Client built with .NET. Nethermind is recognized for its high performance in syncing and tip-of-chain processing and its extensibility, thanks to a flexible plugin system. As one of the main execution clients on the Ethereum mainnet, Nethermind plays a crucial role in Ethereum’s client diversity.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/fb68b628-fa43-4bb2-90fc-9f011f9a5c9a.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/c2e45279-ee86-4869-a726-79475d7f707a.png',
    project_socialLinks_website:
      "['https://www.nethermind.io/nethermind-client']",
    project_socialLinks_farcaster: "['https://warpcast.com/nethermind']",
    project_socialLinks_twitter: 'https://x.com/NethermindEth',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': \"Client diversity is crucial for the long-term stability and security of the Ethereum network. Ethereum mainnet serves as the underlying layer for Optimism and other OP Stack chains. Nethermind, as one of the primary mainnet execution clients, helps prevent any single client implementation from dominating the Ethereum network. This enhances the Ethereum network's resiliency against attacks and bugs, whilst enhancing decentralization.\", 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'Without the Nethermind Execution Client, the Ethereum network would face a greater risk of a supermajority client, increasing the chances of severe consequences in the event of a bug. Consensus issues within a supermajority client would have catastrophic effects on Ethereum, and thus Optimism and all OP Stack L2s.\\n\\nThe stability and high performance of the Nethermind Execution Client makes it an appealing alternative for stakers and node operators. According to Supermajority.info, Nethermind is now one of the most utilized execution clients.', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 273293.03,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x15ad7707cbebf66f201e96a81fb821bd0afab6a6e93dc63a82f787bd09dbb53f',
    applicationId:
      '0x15ad7707cbebf66f201e96a81fb821bd0afab6a6e93dc63a82f787bd09dbb53f',
    projectId:
      '0x9ca1f7b0e0d10d3bd2619e51a54f2e4175e029c87a2944cf1ebc89164ba77ea0',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum core development Research',
    impactStatement_subcategory:
      "['Ethereum client implementations', 'Research which informs Ethereum core development', 'Ethereum test networks']",
    organization_name: 'Interplanetary Shipyard',
    organization_description:
      'Interplanetary Shipyard is an independent engineering team maintaining, operating, and developing the canonical IPFS and libp2p implementations.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/cc5bdce9-2076-4218-bb6e-08c08a03f9fe.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/f1bfae12-e2c7-4d3c-b5a6-036fe77579e5.png',
    socialLinks_website: "['https://ipshipyard.com/']",
    socialLinks_farcaster: [],
    socialLinks_twitter: 'https://x.com/ipshipyard',
    socialLinks_mirror: '',
    team: "['845866', '779819', '468804', '849466']",
    name: 'Hermes - a GossipSub listener and tracer for libp2p-based networks.',
    description:
      'The ProbeLab team has recently built Hermes, a GossipSub listener and tracer for libp2p-based networks. Hermes-based experiments aim to measure the efficiency and performance of the GossipSub message broadcasting protocol in any libp2p-based network. Acting as a light node of sorts, Hermes can help developers collect valuable data and tune their network’s protocols based on the message propagation latency, control message overhead and a variety of other metrics. Hermes currently supports the Ethereum consensus layer network.\n\nThe ProbeLab team specialises in network-layer measurements and monitoring. The team operates a variety of tools and uses the data it collects to propose network protocol optimisations.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/90c0de0c-cc0e-4959-afb7-a78ae4c9d674.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/e1d59a51-3f6f-4642-bc88-553026d2d067.png',
    project_socialLinks_website:
      "['https://probelab.io', 'https://probelab.network']",
    project_socialLinks_farcaster: "['@yiannisbot']",
    project_socialLinks_twitter: '@yiannisbot',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': \"Hermes has been used to produce high-impact research and inform developments of the Ethereum core protocol. The studies that Hermes enabled have revealed important insights wrt central protocols of the Ethereum stack, such as Gossipsub.\\n\\nHighlights include capturing metrics such as the number of duplicate messages in the network [1], the bandwidth consumption of Ethereum nodes [2] and the effectiveness of Gossipsub's gossip technique [3].\\n\\nLast but not least, Hermes has been used by EF and other teams to inform design decisions related to PeerDAS and for making data available to the public to dig into and reuse through the integration with Xatu [4].\\n\\n[1] https://ethresear.ch/t/number-duplicate-messages-in-ethereums-gossipsub-network/19921\\n[2] https://ethresear.ch/t/ethereum-node-message-propagation-bandwidth-consumption/19952\\n[3] https://ethresear.ch/t/gossip-iwant-ihave-effectiveness-in-ethereums-gossipsusb-network/19686\\n[4] https://ethpandaops.io/posts/xatu-consensus-layer-p2p/\\n\\n\", 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'Ethereum is securing L2 networks, such as Optimism. The correct, secure and optimised operation of Ethereum is a prerequisite for the health of Optimism. Acting as a light client of sorts, Hermes is making it easier to experiment with network protocol setups and parameter settings and ensures that informed decisions are made when it comes to Ethereum core protocol developments.\\n\\nAs such, if Hermes ceased to exist, Ethereum (and L2s) core developers would have less insights on the internals of the P2P network. Other similar tools and infrastructure would have to be set up in order to be able to extract metrics, such as the following from the network.\\n\\n- Bandwidth consumption of Ethereum nodes\\n- Number of Duplicate messages in the network\\n- Gossip Effectiveness\\n- Number of IDONTWANTs and resulting bandwidth saving\\n- Block propagation latency', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: 'token-house-mission',
    grant_1_link:
      'https://app.charmverse.io/op-grants/op-besu-an-op-stack-execution-client-based-on-hyperledger-besu-2818630304747294',
    grant_1_amount: 50000,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x19c6b7b2fd40036f3a778cf3c3998ad1ecb19dc285cebdd164b52939fa4ea3b4',
    applicationId:
      '0x19c6b7b2fd40036f3a778cf3c3998ad1ecb19dc285cebdd164b52939fa4ea3b4',
    projectId:
      '0x7504e494cb8d227193182e083128912173c14eaeecec9b90fa453de28377b269',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum core development Research',
    impactStatement_subcategory:
      "['Ethereum client implementations', 'Research which informs Ethereum core development', 'Ethereum test networks']",
    organization_name: 'libp2p',
    organization_description:
      "libp2p is an open source networking library used by the world's most important distributed systems such as Ethereum, IPFS, Filecoin, Optimism and countless others. There are native implementations in Go, Rust, Javascript, C++, Nim, Java/Kotlin, Python, .Net, Swift and Zig. It is the simplest solution for global scale peer-to-peer networking and includes support for pub-sub message passing, distributed hash tables, NAT hole punching and browser-to-browser direct communication.",
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/39689f3b-3e4c-48a2-ab37-f57b85998e69.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/e8ef83e2-0eb0-48a2-b931-2221e8ae5ed9.png',
    socialLinks_website:
      "['https://libp2p.io', 'https://github.com/libp2p/libp2p']",
    socialLinks_farcaster: [],
    socialLinks_twitter: 'https://x.com/libp2p',
    socialLinks_mirror: '',
    team: "['827799', '845866']",
    name: 'jvm-libp2p',
    description:
      'The canonical JVM implementation of libp2p written in Kotlin.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/19ff1307-15ef-4783-887c-c50c429af401.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/42d1e5bc-8bd6-4604-9e4a-548a144dc721.png',
    project_socialLinks_website: "['https://github.com/libp2p/jvm-libp2p']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': \"jvm-libp2p powers Teku, the Ethereum consensus client written in Java which contains a full beacon node and validator client implementation.\\nTeku adheres to the Ethereum Beacon Chain's networking specifications and relies on jvm-libp2p's TCP transport, yamux and mplex multiplexing capabilities, secure communication via TLS and Noise, and GossipSub for messaging.\\nIn the period between Oct 1 2023 - July 31 2024, jvm-libp2p has had 2 releases which included major improvements like implementing Circuit Relay v2, improvements to the yamux multiplexer, and many fixes/improvements to GossipSub. \", 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': \"If jvm-libp2p ceased to exist, Teku would no longer be viable as a beacon node. Nodes implemented in different languages are important for client diversity, and according to Sigma Prime's Blockprint data source for Beacon Chain client diversity metrics, jvm-libp2p Teku nodes consist of 22.64% of the network (as of 2024-09-04). Because Ethereum underpins L2 network (i.e. Optimism), a resilient, diverse Ethereum is crucial to the health of the OP stack as well.\", 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 44000,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x1c8ed7271463dff518cd4bc65e7c57d70746996a755bd9c5db403f3b389b8d5c',
    applicationId:
      '0x1c8ed7271463dff518cd4bc65e7c57d70746996a755bd9c5db403f3b389b8d5c',
    projectId:
      '0xcb0434aaf86a5dca68f96edefc22bf04a16bbfaa48b0a4a40c844f1afb8d7b1e',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum core development Research',
    impactStatement_subcategory:
      "['Ethereum client implementations', 'Research which informs Ethereum core development']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'go-ethereum',
    description:
      'The go-ethereum team develops the software which the OP Stack is built on, contributes to Ethereum upgrades which benefit the OP Stack, and work with the Optimism team on occasion to upstream changes to the core code base.\n\nAlthough we are not the most active Optimism contributors day-to-day, we believe that we play a fundamental role in the OP Stack.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/ba199d56-5d0d-4c5c-8b52-1c7257c92242.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/9e0541a5-a7c3-40fc-9bd2-2b29c80c38de.png',
    project_socialLinks_website: "['https://github.com/ethereum/go-ethereum']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://twitter.com/go_ethereum',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'Since the OP Stack is built on top of go-ethereum, every decision we make upstream affect the efficiency, security, and resilience of Optimism downstream. This is true in more ways than just the core protocol. \\n\\nOur team also develops and maintains the JSON-RPC interface used by many developers to interact with the OP Stack. Through this, it is fair to say that we have a large impact on the developer ecosystem.\\n\\nAnd finally, our work on the Ethereum protocol itself and future network upgrades has and will substantially impact end users of Optimism and the adoption of the OP Stack.', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'The OP stack core node is based around the go-ethereum project. If our project ceased to exist, the OP community would need maintain the stack and integrate Ethereum mainnet changes into the client to retain Ethereum equivalence.', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 99378,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x1d333bf10026574b8df913bd83cff4c7e737fa0f2e18f55659672b6c001478eb',
    applicationId:
      '0x1d333bf10026574b8df913bd83cff4c7e737fa0f2e18f55659672b6c001478eb',
    projectId:
      '0x6830f24e2e893931d62d8118146a7bbffb5cd1f78945318865a52bd6a6cbe245',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum core development Research',
    impactStatement_subcategory:
      "['Ethereum client implementations', 'Research which informs Ethereum core development']",
    organization_name: 'libp2p',
    organization_description:
      "libp2p is an open source networking library used by the world's most important distributed systems such as Ethereum, IPFS, Filecoin, Optimism and countless others. There are native implementations in Go, Rust, Javascript, C++, Nim, Java/Kotlin, Python, .Net, Swift and Zig. It is the simplest solution for global scale peer-to-peer networking and includes support for pub-sub message passing, distributed hash tables, NAT hole punching and browser-to-browser direct communication.",
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/39689f3b-3e4c-48a2-ab37-f57b85998e69.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/e8ef83e2-0eb0-48a2-b931-2221e8ae5ed9.png',
    socialLinks_website:
      "['https://libp2p.io', 'https://github.com/libp2p/libp2p']",
    socialLinks_farcaster: [],
    socialLinks_twitter: 'https://x.com/libp2p',
    socialLinks_mirror: '',
    team: "['827799', '845866']",
    name: 'libp2p Ecosystem',
    description:
      'A modular and extensible networking stack which solves many challenges of peer-to-peer applications. libp2p is widely deployed in many notable web3 projects such as Ethereum, Optimism, Filecoin, Polkadot, Celestia, and more. This a general application for the libp2p Core Fund, a vehicle which funds the libp2p ecosystem (implementations, development infrastructure, community outreach & events, etc.) both proactively and retroactively.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/dcee4e9a-3de0-4868-ad76-5d8d31467342.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/509d70f7-242e-4812-ba2e-00805cae971e.png',
    project_socialLinks_website:
      "['https://libp2p.io', 'https://github.com/libp2p/libp2p']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://x.com/libp2p',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'libp2p is a critical part of the Beacon Chain which powers Ethereum and is a core dependency of OP mainnet & OP stack. libp2p offers Ethereum and Optimism a modular, extensible, peer to peer networking stack across multiple programming languages.\\nThe ecosystems project serves as a coordination space between the various libp2p implementers e.g. the libp2p specs repo where optimizations to GossipSub (used in both Ethereum and Optimism) are made in the pubic, and other protocols (transports, multiplexers, etc.)\\nThis project enables ecosystem functions like retroPGF programs, CI/CD infrastructure for impls and interop, Github hosting, Discourse forums, hosting websites, Social media presence, as well as in-person libp2p Community events and the responsible disclosure security process. The ecosystem also coordinates across impls & community members. The libp2p Project is a key part of the OP and Ethereum stacks and ensures the security and resiliency of the distributed blockchain networks.', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'The libp2p networking library is a critical piece of L1, L2, and many other related applications in the OP and Ethereum ecosystem. If the libp2p project ceased to exist, there would be no central organization coordinating the critical functions of maintaining and deploying the libp2p software. Furthermore, if libp2p ceased to exist, Ethereum, Optimism, and other chains would have to rely on bespoke networking stacks. libp2p offers re-usable, cross implementation, modular peer to peer networking in an application agonistic way, and without it, p2p networking would have to rely on custom solutions that may not be as widely deployed in production across multiple major decentralized networks.', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x42f449a7238b2d19785a41371e6902a0e782bbf28270d8ff1690b87a43a0b80a',
    applicationId:
      '0x42f449a7238b2d19785a41371e6902a0e782bbf28270d8ff1690b87a43a0b80a',
    projectId:
      '0x7e4eb6294ad8e97eceb3bb6a39891eb386bfbaa5d4e8f16a9939d18ad79d789c',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum core development Research',
    impactStatement_subcategory:
      "['Research which informs Ethereum core development']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'Rust KZG',
    description:
      'Rust-KZG ( https://github.com/grandinetech/rust-kzg ) is a high performance KZG library that is used for Ethereum blobs related cryptography. The project brought the fastest cryptography for EIP-4844 that enabled L2 scaling on Ethereum.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/184d8460-1eab-4d2d-819b-b33f6b30fef9.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/646f8695-adab-4ea3-a279-700d61498a78.png',
    project_socialLinks_website: "['https://github.com/grandinetech/rust-kzg']",
    project_socialLinks_farcaster: "['https://warpcast.com/saulius']",
    project_socialLinks_twitter: 'https://github.com/grandinetech/grandine',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'Rust-KZG project contains both research and actual implementations of high-performance KZG cryptography that is used in Ethereum data availability layer (blobs, EIP-4844, PeerDAS) that L2s including Optimism are using. We also provide benchmarks that shows our results are the highest performance among benchmarked libraries.', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'There are not much projects that pushes performance of EIP-4844 and related cryptography. This performance eventually translates to L1 and L2 performance. There would be less efforts pushing performance with Rust-kzg.', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x431cfc98fc6400743da8e926ebd8dbb9aafe32ce2e280e71d8fba7a568f71796',
    applicationId:
      '0x431cfc98fc6400743da8e926ebd8dbb9aafe32ce2e280e71d8fba7a568f71796',
    projectId:
      '0x80a7a36ae190817283d49b64d9ce3ff729cf93a6f55135442162866c581cfa63',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum core development Research',
    impactStatement_subcategory:
      "['Research which informs Ethereum core development']",
    organization_name: 'Blocknative',
    organization_description: '',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/67b75c95-4f8c-4cc9-9dca-2d4b12b2b682.png',
    organizationCoverImageUrl: '',
    socialLinks_website: [],
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['410300']",
    name: 'Blocknative Blob Archive and Research',
    description:
      'Blocknative is dedicated to building developer-friendly tools that enhance user experience and ecosystem growth. We specialize in creating innovative solutions for gas fee estimation across various blockchains and have been building, running, and maintaining advanced gas estimation and optimization infrastructure since 2021.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/89b7357e-0cb5-45d1-8c20-b1c835ad584c.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/735c2a57-e42e-4b09-8f55-67e6bcdab127.png',
    project_socialLinks_website: "['Blocknative.com']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'x.com/blocknative',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'The Blocknative Blob Archive offers a critical solution for researchers and developers working on Ethereum by providing permanent access to ephemeral blob data introduced with EIP-4844. This data is essential for analyzing network behavior, identifying trends, and informing future Ethereum core development.\\n\\n- Preserving Ephemeral Data: Our Blob Archive captures and stores blob data beyond its typical lifespan, preventing valuable insights from being lost.\\n- Empowering Research: Researchers can leverage the Blob Archive to analyze historical data, identify protocol inefficiencies, and propose improvements to Ethereum.\\n- Facilitating Development: Developers can use the Blob Archive to understand real-world usage patterns and test applications that interact with blobs.\\n- Enhancing Transparency: The Blob Archive promotes transparency within the Ethereum ecosystem by making historical data readily available.\\n', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'The Blocknative Blob Archive and research initiative directly contribute to the advancement of Ethereum by preserving valuable data, empowering researchers, and informing core development decisions. We are committed to supporting the Ethereum ecosystem and believe our project plays a crucial role in enabling a deeper understanding of the network.\\n\\nWe are the only provider of this data set at this time. ', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 55495.2,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x43a266d84aa8ce67af3e6afc1bed4021fd7a06693e9eee94e1ef4767b429cc0d',
    applicationId:
      '0x43a266d84aa8ce67af3e6afc1bed4021fd7a06693e9eee94e1ef4767b429cc0d',
    projectId:
      '0x2c97e213fef2bd3f30a71edf6ed48232640368d0083dc0a134a1b59391639bde',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum core development Research',
    impactStatement_subcategory:
      "['Research which informs Ethereum core development']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'Account Abstraction - ERC-4337',
    description:
      'The AA team is working on standards for decentralized account abstraction, enabling better UX and security for the next billion users.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/35570d3a-c51f-48cd-b236-0098f734dd0e.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/9c9385ff-9ce2-46a1-9aa1-0e3274a04392.png',
    project_socialLinks_website: "['https://www.erc4337.io/']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://twitter.com/erc4337',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'This project became a dependency of the OP Stack when its contracts (EntryPoint v0.6 and v0.7) were [included](https://github.com/ethereum-optimism/optimism/blob/998b8de8923db35dde76b20700e1cca5193e19c3/op-e2e/bindings/entrypoint.go#L86) as OP stack predeployed contracts.\\n\\nThe project is widely used across the Ethereum ecosystem, beyond OP stack, which is why it\\'s submitted in the \"Ethereum core contributions\" category.  But it also became a part of the OP stack when it was added to the main repo.', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'Account abstraction improved UX on OP chains and has gained wide adoption, as can be seen in this [dashboard](https://www.bundlebear.com/overview/all).  At the time of this submission over 2M accounts were deployed on the OP chains, which submitted over 30M UserOps.\\n\\nIf the project did not exist, many apps built on it would have worse UX or would not exist.', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x4402a5bf69839aacfc90a3ab33252260ae0fa549634b3f8955ea7e597a6ab942',
    applicationId:
      '0x4402a5bf69839aacfc90a3ab33252260ae0fa549634b3f8955ea7e597a6ab942',
    projectId:
      '0x5bf4cb9356352d8d123d9925d213594088a16a5aacb407030a2b25de728217bd',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum core development Research',
    impactStatement_subcategory:
      "['Research which informs Ethereum core development']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'Based Italia',
    description:
      'Based Italia is the Italian side community of Base through which, with my colleagues, we try to onboard in a nation that has a low crypto adoption rate.\nIn recent months we have engaged artists and influencers, published articles and shared experiences with the Base Global Community.\nThe project was born as part of Crypto4bunnies, a 360-degree crypto dissemination project.',
    profileAvatarUrl:
      'https://cdn.charmverse.io/user-content/9a446931-d305-407c-891e-5df7065eb99b/67e582d9-957a-41ab-acf9-0fff07434971/ItalyNFT.png',
    projectCoverImageUrl:
      'https://cdn.charmverse.io/user-content/9a446931-d305-407c-891e-5df7065eb99b/8b8b8a60-ea49-4b8f-9c8e-16ea4f4f07d5/onboardsolo_5.gif',
    project_socialLinks_website:
      "['https://paragraph.xyz/@baseitalia/community/Base%20Italia', 'https://paragraph.xyz/@crypto4bunnies', 'https://medium.com/@fr.dinardo', 'https://x.com/basedita']",
    project_socialLinks_farcaster: "['https://warpcast.com/~/channel/base-it']",
    project_socialLinks_twitter: 'ifiwasfrank',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'Based Italia can support OP stack with its specific outreach and onboarding of new users. Since we are not devs, our goal is to make onchain access easy for all users who would like to approach this world but, due to technical difficulties, fail. ', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'By losing Based Italia, OP Stack would lose an important territorial community. Although we have only recently started, we are well established in the Based environment and already have a decent community. Without us, a fresh start would have to be made. ', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 496896.42,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x48636b24079a7a3d2694f0d5d4f80e0828a68fecc8e36cca4e47618bd6073b1c',
    applicationId:
      '0x48636b24079a7a3d2694f0d5d4f80e0828a68fecc8e36cca4e47618bd6073b1c',
    projectId:
      '0x0242f727cd5dc0878cfc297be8046e3527563cc12f28021ea1eeb6611d86eb0e',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum core development Research',
    impactStatement_subcategory:
      "['Research which informs Ethereum core development']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'ERC 6551 Token Bound Accounts Public Goods Dune Research by sealaunch',
    description:
      'sealaunch is onchain intel team dedicated in-depth onchain and Dune research for chains, protocols and dApps building on Ethereum. We worked closely with the ERC-6551 core dev team to develop and provide onchain data research that informed the development, strategy and adoption of this standard across EVM chains and OP Stack chains. Currently on the Top #10 Wizards on Dune.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/e79623bd-9a9a-4fea-a6cd-2bfdd76b2ae4.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/b83423b3-5421-4d51-ba77-1e92be871768.png',
    project_socialLinks_website: "['https://sealaunch.xyz/']",
    project_socialLinks_farcaster: "['https://warpcast.com/sealaunch']",
    project_socialLinks_twitter: 'https://x.com/sealaunch_',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'The ERC 6551 Token Bound Accounts Dune dashboards and research by sealaunch proved to be a useful onchain data resource to first inform the core dev team on product strategy, growth and partnerships. Secondly, as public good and readily available to anyone and media to track and educate on this standard and our analysis was mentioned by media outlets like this [CoinDesk example](https://www.coindesk.com/learn/what-is-erc-6551-unpacking-the-backpack-wallet/). And lastly, had an impact in attracting builders on the OP Stack namely on Base and Optimism to adopt and build with this standard on their projects, like for example the [Perma App](https://per.ma/) - a photo social app built on Base. Helping the expansion and diversity of use-cases and utility of the OP Stack.\\n', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'We believe that onchain data dashboards helps build trust in projects building on the OP stack by providing visibility but above all transparency for any stakeholders who wish to verify the data. Additionally, having resources like open Dune dashboards helps anyone better understand and educate themselves on ERC 6551 key metrics and analytics and its ecosystem of chains, projects and builders.', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 42236,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x4b4627904b97d79cf68f11637d19d05bdb1bc2499e2c16df0c8519841ece9e21',
    applicationId:
      '0x4b4627904b97d79cf68f11637d19d05bdb1bc2499e2c16df0c8519841ece9e21',
    projectId:
      '0x79c2ae8858a5a3bd7f2e0da9509d727833ffa01f358b5969355f38ff32b20122',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum core development Research',
    impactStatement_subcategory:
      "['Research which informs Ethereum core development']",
    organization_name: 'LexDAO',
    organization_description: '',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/ba15df22-7f86-42af-bbec-1013e2643e5c.png',
    organizationCoverImageUrl: '',
    socialLinks_website: [],
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['317851']",
    name: 'LexDAO',
    description:
      'LexDAO is a legal engineering guild bringing law to code and coded law to the masses. Law is a public good.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/47a526bd-99c9-4d75-9798-c4cbfaf90c3a.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/98c31632-2782-43aa-af23-9727cbd886e2.png',
    project_socialLinks_website: "['https://lexdao.org/']",
    project_socialLinks_farcaster: "['@lexdao']",
    project_socialLinks_twitter: '@lex_dao',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': \"LexDAO supports the OP Stack by providing decentralized legal tooling and smart contract enforcement, ensuring compliance and dispute resolution for dApps built on the OP Stack. Our services enhance the security and trustworthiness of transactions, making legal mechanisms accessible, reducing legal risks, and fostering safer adoption of Optimism's modular blockchain infrastructure. This support is crucial for maintaining operational integrity and regulatory compliance within the OP Stack ecosystem, contributing to the overall growth and resilience of projects leveraging the technology.\", 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': \"If LexDAO ceased to exist, the OP Stack would lose a critical suppor element of the layer of decentralized legal support, impacting dApps' ability to resolve disputes, enforce smart contracts, and manage legal compliance effectively. This would increase legal uncertainties, potential liabilities, and operational risks for developers and users, potentially undermining trust and adoption of the OP Stack ecosystem. Without LexDAO, projects would need to seek traditional, less efficient legal solutions, reducing the OP Stack’s appeal as a secure, compliant blockchain infrastructure for decentralized applications.\", 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x4b61cd661477522b1243f51329dbaaef13edd3b43130746801ece70ce4d79cb9',
    applicationId:
      '0x4b61cd661477522b1243f51329dbaaef13edd3b43130746801ece70ce4d79cb9',
    projectId:
      '0xc1899658402b1373d1beb84e069a3eca066aaf01c0654502dbba51b66aeb6214',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum core development Research',
    impactStatement_subcategory:
      "['Research which informs Ethereum core development']",
    organization_name: 'Consensus R&D',
    organization_description:
      'The Consensus R&D team focuses on both short and long-term research and development projects that aim to improve Ethereum’s security, sustainability, and scalability while retaining strong decentralization. This includes proof-of-stake consensus design, crypto-economic mechanism design, software simulations and experiments, spec writing, security assessments, testing, and more.',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: [],
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['7717', '8521', '7236']",
    name: 'Consensus R&D (Ethereum Research)',
    description:
      'The Consensus R&D team focuses on both short and long-term research and development projects that aim to improve Ethereum’s security, sustainability, and scalability while retaining strong decentralization. This includes proof-of-stake consensus design, crypto-economic mechanism design, software simulations and experiments, spec writing, security assessments, testing, and more.\n\nHere are some of the projects and research directions that we have been involved with over the period covered by this RPGF round:\n\n- Inclusion lists: in the first half of 2024, an existing inclusion list proposal has been refined together with client teams, culminating in [EIP-7547](https://eips.ethereum.org/EIPS/eip-7547), which was for a time considered for inclusion in Electra. Though that has not transpired, the work on EIP-7547 has still informed our understanding of the inclusion list design space. Eventually, this work has led to further research on more distributed inclusion list mechanisms, such as [FOCIL](https://ethresear.ch/t/fork-choice-enforced-inclusion-lists-focil-a-simple-committee-based-inclusion-list-proposal/19870)\n\n- MaxEB: our team has greatly contributed to the development of the MaxEB proposal, both with [early research and security analysis](https://notes.ethereum.org/nHqON5l7SACkL_nPwz8Vqw) and with spec development. This has led to [EIP-7251](https://eips.ethereum.org/EIPS/eip-7251), which has been included in the Electra fork. The MaxEB spec has meanwhile been incorporated in the [Electra spec](https://github.com/ethereum/consensus-specs/tree/dev/specs/electra).\n\n- PeerDAS: research, spec writing and coordination of the development effort. Starting from last fall, many research posts have been written on the topic, culminating in the [PeerDAS spec](https://github.com/ethereum/consensus-specs/tree/dev/specs/_features/eip7594) as a feature in the Ethereum consensus specifications, and with the corresponding [EIP-7594](https://eips.ethereum.org/EIPS/eip-7594) being considered for inclusion in the next fork. \n\n- Consensus protocol research: much research work has gone into the topic of Single Slot Finality, with papers, [ethresearch posts](https://ethresear.ch/t/orbit-ssf-solo-staking-friendly-validator-set-management-for-ssf/19928), [notes](https://vitalik.eth.limo/general/2024/06/30/epochslot.html) and a [wip high-level spec](https://github.com/fradamt/ssf) being worked on, among other things. \n\n- Staking economics: our team actively participates in research around staking economics and generally the future of staking.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/0c2afd20-d954-478d-aaf5-db96fcb16ff6.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/8788941d-7915-440e-8570-9e0f9926e374.png',
    project_socialLinks_website:
      "['https://github.com/ethereum/consensus-specs/']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'Our team, and the various research and specification projects it is involved in, are one of the primary drivers of the first part of the Ethereum R&D pipeline. Besides the general dependency of the OP stack on Ethereum, we are also specifically quite involved in DA layer scaling work, which is crucial to allowing OP chains, and all rollups, to become amenable for all kinds of real world applications', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'Unless other teams stepped in to fill some of the functions that we currently do, the OP stack would probably have to migrate to a different L1. We believe there is much work still to do on the core L1 protocol, without which Ethereum cannot continue to be the ideal place for rollups to settle.', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x525940d18c0128bd891b8f8e343d93609cb191b4d582f92edc174bc65a754406',
    applicationId:
      '0x525940d18c0128bd891b8f8e343d93609cb191b4d582f92edc174bc65a754406',
    projectId:
      '0x3f8baf6d4f2cbe2d02f471274f32ad259a446e84dd82c600f034d36f84a2a3d3',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum core development Research',
    impactStatement_subcategory:
      "['Research which informs Ethereum core development']",
    organization_name: 'Robust Incentives Group',
    organization_description:
      'The Robust Incentives Group is an Ethereum Foundation research team dedicated to the study of protocol mechanisms through the lens of game theory, mechanism design, crypto-economics, formal methods and data science.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/cc95bbba-fb92-47c6-acbb-b039210304f3.png',
    organizationCoverImageUrl: '',
    socialLinks_website: "['https://rig.ethereum.org']",
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['5451', '16191', '3329', '19820', '9068', '215506']",
    name: 'RIG Ethereum Core Research',
    description:
      "The Robust Incentives Group is an Ethereum Foundation research team dedicated to the study of protocol mechanisms through the lens of game theory, mechanism design, crypto-economics, formal methods and data science. \n\nOver the past year, we have significantly contributed to a broad array of discussions on improving Ethereum’s core protocol, such as the decentralization of its staking set, its ability to enforce and defend its neutrality, as well as to preserve its security.\n\nWe briefly introduce our main research directions from the past year.\n\nCensorship resistance. We are developing mechanisms to ensure the L1 protocol maintains chain neutrality by empowering Ethereum’s decentralized set of validators to enforce the inclusion of transactions in Ethereum blocks through inclusion lists (ILs). Over the past year, we have explored the design space and made significant progress towards a proposal called Fork-Choice Enforced Inclusion Lists (FOCIL), which we believe could be considered for inclusion in a future Ethereum upgrade. We have also collaborated with the Commit-Boost effort to develop out-of-protocol inclusion lists bridging the gap until a protocol solution is available.\n\nTiming games. Nearly a year ago, we named and introduced the concept of timing games in a publication, describing how proposers have an incentive to wait until the last moment to propose their blocks in order to maximize MEV rewards. Since then, we have observed timing games occurring in practice and have been working on mitigation strategies to maintain consensus stability. Timing games were central to critical discussions by the Ethereum research and builder communities over the last year.\n\nPBS. Our group has been at the forefront of PBS research for more than two years now. During the time period considered for this retroactive funding, we have deepened our understanding of the practice of PBS with research supporting EIP-7732 (“Enshrined Proposer–Builder Separation”). We have also been active in exploring MEV burn mechanisms, as well as the newer idea of “Attester–Proposer Separation”, with posts and publications.\n\nStaking economics. This group put forward the idea of rainbow staking dealing with an ever-changing staking landscape. It intends to embrace the heterogeneity of Ethereum's staking set and foresees different roles for different types of participants. Separately but related, this group has proposed changes to Ethereum's issuance policy in order to maintain a healthy staking level that is long-term sustainable. \n\nIf any of this catches your attention, please take a look at rig.ethereum.org to find links to all resources.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/b9dd7341-7c9c-43cf-bc3d-3746ed7b60d4.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/44a0a772-d44a-4c98-9418-2bf872ca008b.png',
    project_socialLinks_website: "['https://rig.ethereum.org']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'RIG contributes to the research and development of the Ethereum core protocol, upon which the OP stack relies. Inherently the Superchain benefits from an improved and resilient settlement layer, i.e. Ethereum.\\n\\nThere are particular research topics that support the OP Stack, such as PBS research. Today on Ethereum L1, the vast majority of blocks is produced by relying on trusted third-parties called relays. Our work on ePBS aims to remove this trust assumption. Fewer trust assumptions on Ethereum are also inherited by the Superchain, such as forced transaction inclusion. PBS research is also relevant to the OP Stack, who may [borrow](https://x.com/tyneslol/status/1813672789112737954) its concepts for the decentralization of their sequencer.\\n', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'We briefly explore the link between our research and its impact on the OP stack more explicitly. \\n\\n**Censorship resistance.** Our work helps Ethereum maintain its credible neutrality, ensuring all valid transactions are eventually included. This property is directly relevant to OP Chains, e.g. the guaranteed ability to force a transaction’s inclusion on OP mainnet by sending a transaction on Ethereum, or the ability to force the inclusion of a fraud proof on L1.\\n\\n**Timing games.** At the limit, timing games are harmful for the stability of consensus formation, especially if proposer timing games spiral into attester timing games. Thus, our work helps to maintain reliable consensus formation of Ethereum, the Superchain’s settlement layer.\\n\\n**Staking economics.** Our work towards maintaining a healthy staking environment, both in its composition and overall staking levels, helps to sustain important properties of a good settlement layer.\\n', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x5276d4d412a177b622203b0692ebd9be3cce24eb412ec5a50f025345ba4f4159',
    applicationId:
      '0x5276d4d412a177b622203b0692ebd9be3cce24eb412ec5a50f025345ba4f4159',
    projectId:
      '0x55bff36906b3e55bff995b4a7d73fd6651eeba4274ad49e269b29157bbf2fee2',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum core development Research',
    impactStatement_subcategory:
      "['Research which informs Ethereum core development']",
    organization_name: 'smoo.th',
    organization_description:
      'Smooth is a versatile platform providing cryptographic open-source tools designed to redefine and enhance how users interact with their wallets and Dapps. It is powered by Account Abstraction (EIP 4337) to aims to provide:\n- Frictionless onboarding and interactions using familiar authentication (TouchID/FaceID) through the use of a WebAuthn-compatible UserOp.\n- Cryptographic foundations to build the Dapps of the next decade.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/15d31bf9-94de-4696-a6e1-735e2b9b7864.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/0af8e8da-0016-429e-91dd-45f5d66151a7.png',
    socialLinks_website: "['https://github.com/get-smooth/crypto-lib']",
    socialLinks_farcaster: [],
    socialLinks_twitter: '@RenaudDubois10',
    socialLinks_mirror: '',
    team: "['585499']",
    name: 'Smoo.th Cryptolib',
    description:
      'This project is eligible for round 5 as a Research project. \n\nSmoo.th conducts research project to push generic elliptic computations over Ethereum. While previous FCL enabled only P256, SCL, delivered this year enables any curve.\n\n\nAs such, it developped two cryptolibs : \n- FCL, currently used by Coinbase smarwallet, metamask delegation toolkit, \n- SCL, which supersedes FCL both in term of \n\nSmoo.th is also authoring RIP7696, as implemented in SCL, enabling both Ed25519, starkcurve, palla, vesta curves and P256 for lesser cost than any other solidity lib.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/5c7fad2d-0472-436b-a963-27ecf314919d.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/9fd789bb-db6e-4acc-81d8-16b136528f42.png',
    project_socialLinks_website: "['https://github.com/get-smooth/crypto-lib']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '@RenaudDubois10',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'We delivered the first and still fastest full solidity EIP7212 emulation last year, enabling PoC before EIP7212 integration to OP stack. We are now first and fastest for ANY weierstrass curve through ed25519.\\n\\nFCL and SCL enables Dapp builders to extend their OP stack application using passkeys (EIP7212, native to OP) on any chain, solving impossible crosschain use of the smooth onboarding passkeys enables.\\n\\nOur work is currently used by the Coinbase SmartWallet, SoulWallet, Safe Passkey Module. We benefited last year from retroPGF for FCL. Since then, it has been widely integrated and we moved on step further with SCL by:\\n- conducting two public audits, providing more security to users of said wallets\\n- propose the RIP7696, which was discussed in Rollcalls and ACD.\\n- enabling generic elliptic curve implementation as a possible next step to improve the OP stack, enabling easy bridging with Solana, Cosmos and Starknet.', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': 'By maintaining a faster and efficient cryptolib, we ensure securities of Wallets using our framework. Without maintenance, crosschain deployments of Dapps beyond OP stack would be endangered. We are also convinced that passkeys will in the future integrate the Ed25519 curve, without this being deployed in time, it would be a step back for UX of users, and a limitation. For instance YUBIKEY implements ed25519 Webauthn. Our framework is the only one enabling full WebAuthn compliance.', 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 'under-1m',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x5960585d5dd67b7778d390be4b8fce7da98d5f056efd2c892e340faebb1d7bc6',
    applicationId:
      '0x5960585d5dd67b7778d390be4b8fce7da98d5f056efd2c892e340faebb1d7bc6',
    projectId:
      '0x7d3f1d8e9da32b6e81e791a440b28ce9fbd79a5396acc4039d1cdc44c609c6d3',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum core development Research',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.', 'Research which informs Ethereum core development']",
    organization_name: 'Tokenomics',
    organization_description: '',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/4b6f5412-22cb-4e2d-8030-f1e7d1ccaad1.png',
    organizationCoverImageUrl: '',
    socialLinks_website: [],
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['373516']",
    name: 'Tokenomics Mechanism Research',
    description: 'Research and Develop new tokenomics models',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/fa9260a3-49ff-4ea4-aba5-efb946b96d24.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/a5b446ae-c554-431f-8d24-d9d873d030e3.png',
    project_socialLinks_website: [],
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'Increasing effectiveness and efficiency of token distribution algorithms. Producing research relevant to retro PGF distribution algorithms, reputation, and incentivizing contributors to participate more frequently in the development of OP Stack.', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': \"The OP Stack will continue to develop and thrive. Other tokenomics experts will continue to produce more mechanisms and research that improve the OP Stack tokenomics and incentives. The research I've published so far may influence future research.\", 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x596cd6262d7f32e44aa79e79ee75d60d191e28b5eab1206204ed22f24666f23f',
    applicationId:
      '0x596cd6262d7f32e44aa79e79ee75d60d191e28b5eab1206204ed22f24666f23f',
    projectId:
      '0x334fa6de0243cd1509870ea95f400fd524bd9c8f909e7f629d5457e4ca52e6fc',
    applicationCategory: 'ETHEREUM_CORE_CONTRIBUTIONS',
    'PW subcategory': 'Ethereum core development Research',
    impactStatement_subcategory:
      "['Work on core components of the OP Stack, including client implementations, modules, and modifications.', 'Research or development that introduces new features, improvements, or capabilities to the OP Stack.', 'Ethereum client implementations', 'Research which informs Ethereum core development']",
    organization_name: 'WID3+ Consortium',
    organization_description:
      'The WID3+ Consortium is a group of leading Web3 and digital identity experts in Germany and Malta, who joined forces to solve some of the most pressing issues in Web3 contracting. As a business-to-business (B2B) suite WID3+ maintains the digital identity bridge wid3.app, as well as conducts research and development for creating AUTHBOND as bid bond platform. The WID3+ Consortium is lead by ACURRAENT UG and previously included the University of Malta. In 2023, WID3+ participated in NGI TRUSTCHAIN #OC1 and has now become part of NGI TRUSTCHAIN OC3.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/c63083a0-b4fb-4951-9ed5-90dfe7399ce7.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/95b565ff-ccb8-4de9-8f67-d1e9acdf35df.png',
    socialLinks_website:
      "['https://wid3.xyz/', 'https://www.linkedin.com/showcase/wide-consortium/', 'https://github.com/Consortium-WIDE', 'https://acurraent.com/']",
    socialLinks_farcaster: [],
    socialLinks_twitter: 'https://twitter.com/acurraent',
    socialLinks_mirror:
      'https://mirror.xyz/0x81865ebc7694dfba6608f6503bba50abb04644b4',
    team: "['226300', '11745', '850759']",
    name: 'WID3 - Web3 Identity for DAOs and Education',
    description:
      'WIDE is on a mission to bridge the gap between your skills and the opportunities available in Web3. Proving one’s credentials and accessing relevant opportunities is a time-consuming process. WIDE simplifies validating your credentials by allowing you to easily access and share your qualifications (and more). The goal is to allow you to participate in online governance, enrol to local initiatives, and join your favourite DAO based on your skills – enhancing your engagement in the Web3 world and beyond.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/b8a6f5d1-f6e0-444e-9235-7f36253ea259.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/2f52dab1-3f31-46bb-868f-49558f19ce44.png',
    project_socialLinks_website:
      "['https://wid3.xyz/', 'https://wid3.app', 'https://dungeonmaster.wid3-demo.app/', 'https://cryptohubmalta.wid3-demo.app/', 'https://trustchain.ngi.eu/wide/']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://twitter.com/acurraent',
    project_socialLinks_mirror:
      'https://mirror.xyz/0x81865ebc7694dfba6608f6503bba50abb04644b4',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'WID3 relies on OPs capability of providing fast and reliable testnet works to allow for the verifiability of encrypted credentials on the WIDE digital identity bridge. Through the provisioning of the Sepolia testnet, where the WIDE credential logging takes place, it enables users to break out of the closed identity ecosystems, such as Google and onboard their digital government EU identity document to Web3 in a privacy preserving way.\\n\\nThe OP not only lends legitimacy to WID3, but WID3 also enhances the feature and functionality set of the OP Stack by providing a novel concept of identity bridging - making the Superchain the hub for  privacy-preserving onboarding of metadata-rich credentials in a user firendly way.', 'question': 'How does your project support, or is a dependency of, the OP Stack?'}, {'answer': \"The OP stack would not only lose relevance for the pan-European digital identity initiative, particularly in Malta, Germany, and Greece, but also turn into a monolithic trust layer for digital identity initiatives.\\n\\nWID3's ceasure to exist will put the OP Stack at risk of becoming irrelevant for non-financial interactions for EU residents and citizens when it comes to EU-compliant DAO creation, governmental digital identity interactions, and digital identity use cases that focus on Web3 social.\\n\\nIn short, it will hamper the openness of the OP Stack to a broad variety of use cases and make the integration of Lit Protocol with the OP Stack fall short of cross-chain and cross-domain digital identity bridging fall short of coming to fruition.\", 'question': 'How would it impact the OP Stack if your project ceased to exist?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 10000,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x59b05c5888d0f16bedd7fb467b1e823a76b591b7e9b5b066b3017377ee4f692a',
    applicationId:
      '0x59b05c5888d0f16bedd7fb467b1e823a76b591b7e9b5b066b3017377ee4f692a',
    projectId:
      '0x541b7b08401d799b87f583c102a6c94cee7105f1b29dc630de5edbbd966d7c13',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Research or development of new features',
    impactStatement_subcategory:
      "['Research or development that introduces new features, improvements, or capabilities to the OP Stack.', 'Work on core components of the OP Stack, including client implementations, modules, and modifications.', 'Security audits specifically on the OP Stack or its components.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'Orderly Network',
    description:
      'Orderly Network is a combination of an orderbook-based trading infrastructure and a robust liquidity layer offering perpetual futures. Unlike traditional platforms, Orderly doesn’t have a front end; instead, it operates at the core of the ecosystem, providing essential services to projects built on top of it.\n\nBuilt on top of the OP Stack, Orderly Chain settles trades across multiple blockchains leveraging its asset management vaults for user deposits. These asset vaults are currently deployed across Arbitrum, OP Mainnet, Base, Polygon POS and Mantle. \n\nOrderly has 12 brokers built on top of its infrastructure currently - 11/12 of these are deployed to the OP and Base mainnet asset vaults. These brokers/projects include WOOFi Pro, LogX, SharpeAI, Bitoro, EMDX, Ascendex, CoolWallet and more. Orderly has an additional 10+ projects in the "integration underway" stage and/or on testnet to deploy in the coming months. \n\nDetails on Orderly OP Stack can be found on our explorer: \nhttps://explorer.orderly.network/\n\nOrderly overall TVL: $38.5m\nTVL Breakdown in OP & Base - \nOptimism Mainnet TVL: $8,608,017\nBase TVL: $1,348,071\n\nUp to date statistics can be found at: \nhttps://dune.com/orderly_network/orderly-dashboard\n\nTeam Members and Roles: 45+ Team members across 10+ countries.\nCore contributors: Ran (CEO), Terence (CTO), Arjun (COO), Bryan (Product), Slava (Product), Amine (Product), Midoji (BD & Product), Aurora (BD), Henry (Institutional BD), Drew (Marketing), Brandon (Social & Content Marketing), Irene (Growth Marketing)',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/76ccd2c5-0225-4e7f-a2c7-e5541d3b46e4.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/3039461d-66da-43e6-bd08-ec5bc721c37c.png',
    project_socialLinks_website: "['orderly.network']",
    project_socialLinks_farcaster: "['https://warpcast.com/orderly']",
    project_socialLinks_twitter: '@orderlynetwork',
    project_socialLinks_mirror: '',
    pricingModel: 'freemium',
    impactStatement_statement:
      "[{'answer': 'Orderly is a custom OP Stack chain that acts as a decentralised clearing house alongside a unified orderbook for perpetual trading. An Omnichain settlement layer for DeFi. \\n\\nThe Orderly OP stack as surpassed 21.493M transactions on the chain leverages Celestia for Data Availability. \\n\\nThe Orderly OP stack connects to an off chain matching engine as well as asset management smart contract vaults on multiple other EVM chains, enabling users to be able to deposit and withdraw collateral on the chain of their choice, trade perpetuals on over 20+ different \"brokers\" and/or retail facing front ends whilst settling every trade on the Orderly OP stack every block. In order to do this, the Orderly OP stack is directly integrated with the LayerZero network to enable clear cross chain messaging between chains - This is responsible for approx 25-30% of all messages on LayerZero directly to the Orderly OP Stack. ', 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': 'Orderly powers 21+ different perpetual trading interfaces from WOOFi Pro, LogX, Bitoro, Unibot perps, OX Markets to name just a few. All of these perp dexs are able to allow their users to have a real time trading experience, settled via the Orderly OP Stack every single block. Using this, Orderly process anywhere from 100m-1bn in 24hr trading volume across the 21+ builders who have integrated the stack. \\n\\nAn overview of the metrics can be found here:\\nhttps://dune.com/orderly_network/orderly-dashboard\\n\\nOrderly OP Stack Block Explorer here:\\nhttps://explorer.orderly.network/\\n\\nDetails on the Omnichain Settlement Layer:\\nhttps://medium.com/@orderlynetwork/introducing-orderly-app-chain-powering-orderly-omnichain-settlement-layer-170d6c890029\\n\\n', 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 99379,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x5ae4c1508b793a092c32c06000735c31f36b35759f655b8644174ff2cbd7903c',
    applicationId:
      '0x5ae4c1508b793a092c32c06000735c31f36b35759f655b8644174ff2cbd7903c',
    projectId:
      '0x679e661b67e85d937baace0bc56a6274dddfdffd8cce0e7232af86620d8d2ba4',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Research or development of new features',
    impactStatement_subcategory:
      "['Research or development that introduces new features, improvements, or capabilities to the OP Stack.', 'Work on core components of the OP Stack, including client implementations, modules, and modifications.']",
    organization_name: 'Kroma',
    organization_description: '',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/8db1b63b-ea9f-435b-bcb0-34417a1a9c97.png',
    organizationCoverImageUrl: '',
    socialLinks_website: "['https://kroma.network']",
    socialLinks_farcaster: [],
    socialLinks_twitter: 'https://x.com/kroma_network',
    socialLinks_mirror: '',
    team: "['602876', '217355', '662916']",
    name: 'Native Account Abstraction on OP Stack',
    description:
      "Kroma Network has implemented Native Account Abstraction on the OP Stack and is currently operating a public devnet called Pioneer Alpha, which is open for anyone to test. Compared to ERC-4337, which relies on off-chain components, Native Account Abstraction offers advantages such as lower gas fees for users (approximately 40% reduction) and a more consistent experience for builders. Because of these benefits, we believe that Account Abstraction should be enshrined within the protocol, and we have been continuously working towards this goal.\n\nOne of the most important aspects is conducting all development processes in an open environment, and making it easy for anyone to test. To achieve this, Kroma team launched the public devnet Pioneer Alpha, which incorporates RIP-7560, RIP-7711, and RIP-7712 into the OP Stack. Additionally, we have developed an RIP-7560 compatible bundler in Golang, based on Stackup's bundler, and provide a Blockscout page and scripts that allow anyone to easily verify and test these implementations.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/f4561652-9847-4c8c-b744-43d0d91f0a4e.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/82a98589-84af-48d9-abd8-854ece2661a0.png',
    project_socialLinks_website: "['https://docs.pioneer.kroma.network/']",
    project_socialLinks_farcaster: "['https://warpcast.com/kroma-network']",
    project_socialLinks_twitter: 'https://x.com/kroma_network',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'While our work on the OP Stack has not yet reached a production level where it can deliver widespread benefits, it has already been invaluable to researchers and builders focused on AA. Our extensive R&D efforts have created a public platform for experimentation, such as our public Devnet Pioneer Alpha, where new concepts can be tested and validated. This environment, supported by [a dedicated group of 30 active members](https://t.me/rip7560_pioneer), has become a vital testing ground for gas benchmarks and the implementation of additional RIPs, such as RIP-7711 and RIP-7712. These contributions have supported the early-stage development and understanding of how Native AA can be effectively integrated into the OP Stack, laying the groundwork for future advancements in the space.', 'question': 'Who has benefited the most from your work on the OP Stack and how?'}, {'answer': \"Our project has been at the forefront of exploring Native Account Abstraction on the OP Stack. Our intention is to create a public platform for various experiments on Native AA, fostering exploration within the ecosystem. To support this goal, we launched a public Devnet, allowing anyone to engage with Native AA. This space, Pioneer Alpha, also includes an open-source bundler compatible with RIP-7560 and a native tracer integrated into the geth client, both essential tools for facilitating these tests.\\n\\nWe've conducted some experiments ourselves, including gas benchmarks, which showed that gas fees under RIP-7560 are reduced to 62% compared to ERC-4337, and the implementation of additional RIPs. \\n\\n![img](https://native-aa-gas-benchmark.s3.ap-northeast-2.amazonaws.com/benchmark.png)\\n\\nAs a part of our exploration, we implemented RIP-7711 to prevent DoS attacks to sequencer, and developed the RIP-7712 NonceManager predeploy contract to enable 2D nonce functionality for smart accounts.\", 'question': 'How has your project advanced the development of the OP Stack?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '5m-10m',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x5f8e06ced087848712b56730976a7a31f3fbd14a862a75174d6e7fc56eebc627',
    applicationId:
      '0x5f8e06ced087848712b56730976a7a31f3fbd14a862a75174d6e7fc56eebc627',
    projectId:
      '0xb98778ca9ff41446e2bc304f7b5d27f0fa7c2bcd11df19e22d1352c06698a1f6',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Research or development of new features',
    impactStatement_subcategory:
      "['Research or development that introduces new features, improvements, or capabilities to the OP Stack.']",
    organization_name: 'zenbit.eth',
    organization_description:
      'Zenbit.eth is an organization focused on Research, Development, and Innovation (R&D&I) for public goods in cities',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/ec00baf5-be52-41e7-9618-c4091db66257.png',
    organizationCoverImageUrl: '',
    socialLinks_website:
      "['https://zenbit.mx', 'https://github.com/zenbitETH']",
    socialLinks_farcaster: "['https://warpcast.com/zenbit']",
    socialLinks_twitter: 'https://x.com/zenbitMX',
    socialLinks_mirror: 'https://mirror.xyz/zenbit.eth',
    team: "['212738']",
    name: 'OPcity stack',
    description:
      "The OP City Stack is a comprehensive research initiative focused on exploring the operation of the OP Stack and testing the capabilities of the Canon Fault Proofs Virtual Machine (Canon Fault Proofs VM). Through practical deployments, benchmarking, and innovative proposals, this project seeks to push the boundaries of Optimistic Rollup performance and functionality, contributing to the broader goal of Ethereum scalability.\n\nThe project covers several key areas. First, the Node & Rollup Setup involved detailed documentation of the deployment process for both an L1 node (Holesky testnet) and an L2 rollup using the OP Stack. To address RPC calls limitations, the project transitioned from relying on a remote virtual machine and third-party RPC services to a local environment. This shift improved performance reliability and security.\n\nIn the OP Stack Version Benchmarking, multiple test deployments were conducted to compare the OP Stack versions V4.0.0 (Canyon) and V7.0.0 (Fjord). Significant findings from these tests included a 75% reduction in total gas fees when upgrading from V4.0.0 to V7.0.0. Additionally, a comparison of calldata versus data blob methods revealed that using data blobs resulted in a 60% reduction in resource usage, demonstrating the efficiency gains of advanced data handling techniques.\n\nFor the Proposed Changes to Fault Proofs, the project explored integrating the OP Stack's Canon Fault Proofs VM with the opML's Multi-Phase Fault Proof protocol. The proposed modifications included developing a state transition function model to handle merkelized decision trees or neural network outputs. The project also focused on analyzing memory management strategies for handlig large datasets required by machine learning models, and enhancing syscalls and I/O operations to optimize the ML-driven data processing. To ensure system integrity, formal verification, and error analysis were implemented. Additionally, simulations were developed to evaluate the system's performance under real-world operational conditions.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/f9feb4b3-ff72-43c5-b3b5-008aa6ec8f45.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/ed478c5a-8181-465d-a02f-b2b5d72bf44f.png',
    project_socialLinks_website:
      "['https://zenbit.mx', 'https://badges.zenbit.mx/']",
    project_socialLinks_farcaster: "['https://warpcast.com/zenbit']",
    project_socialLinks_twitter:
      'https://x.com/zenbitMX/status/1731886578673254564',
    project_socialLinks_mirror: 'https://mirror.xyz/zenbit.eth/',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': \"OP City researches the capabilities of the OP Stack by testing and enhancing the Canon Fault Proofs VM to handle disputes related to block states and machine learning inferences from opML. We focused on integrating the Canon Fault Proofs VM with opML's Multi-Phase Fault Proof protocol to optimize performance and efficiency. This effort contributed to the OP Stack's scalability and cost-effectiveness, significantly reducing gas fees. Additionally, by transitioning from a remote virtual machine and third-party RPC services to a local node setup, we addressed RPC call limitations, enhancing the reliability and security of OP Stack deployments.\\n\\nWhile expanding our knowledge about the OP stack, we made a version benchmark from December 2023 to June 2024, comparing the Operation cost between V4.0.0 and V7.0.0.0 and then comparing the call data and data blobs' performance to identify the optimal configuration test for deploying the OP stack in a local environment. \", 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': 'Multiple developers and researchers worldwide have accessed our tooling and progress through the Zenbit Discord server, where our findings are shared with a broader community. Specifically, university students in Querétaro, México, contributed to the Zenbit project and have since used the OP City repository to facilitate technology transfer within their institutions. This has benefited our immediate team and enabled other researchers and developers to build upon our work, further advancing OP chain technology.\\n\\nSeed Gov Delegation reflected our opinions and security concerns about the Protocol Upgrade #7: Fault Proofs update by voting with abstention during its approval ballot. These concerns were later confirmed after the Granite upgrade announcement, which tackled multiple issues found after the audits made by third-party organizations.\\n\\nhttps://gov.optimism.io/t/final-protocol-upgrade-7-fault-proofs/8161/42\\n\\nhttps://gov.optimism.io/t/upgrade-proposal-10-granite-network-upgrade/8733', 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x6190ca70e5196f582a65d1f73236eff346b72cd922df3305da001bd34c17c348',
    applicationId:
      '0x6190ca70e5196f582a65d1f73236eff346b72cd922df3305da001bd34c17c348',
    projectId:
      '0x1ea2fc7183a8ad244a97ecc287ca922209274c11dd9e991a04315e8399e118fc',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Research or development of new features',
    impactStatement_subcategory:
      "['Research or development that introduces new features, improvements, or capabilities to the OP Stack.']",
    organization_name: 'Be Part Of Art Collective',
    organization_description:
      "The Be Part Of Art Collective has one goal. Build and maintain the first infinite art canvas. A neverending art canvas that connects people through art. Imagine it as a giant puzzle that hadn't been designed yet. It starts with one piece and keep growing by adding new art by different artists. On this canvas it's not only about the artist's art but also about how he can merge his/her art with the art that already exists on the canvas.",
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/dbddfc21-a8c4-42b9-b7cc-f29707c04ef9.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/bfb32a2a-dd80-44e6-b9f5-219700b8ee29.png',
    socialLinks_website: "['Bepartofart.com']",
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['413209']",
    name: 'Be Part Of Art',
    description:
      "In a time where the world is divided, I feel it is time to build projects that connect. In a time where everyone is focusing on themselves, I feel it is time to build projects that focus on collaboration. \n\nBe Part Of Art is a one of a kind art project. It is a blank infinite art canvas that invites graphic artists from around the world to contribute and collaborate with each other to create something that has never been done before. An artwork that is never finished, an artwork that is always growing into something bigger. An artwork that evolves as time goes by. \n\nI imagine it as a digital \"cave painting\"... A place where you can see art, the artists and life merge into something that will be forever available to mankind.\n\nDo you have what it takes to Be Part Of Art? \n\nIn this first stage of the project I'd like to do a bit more research about the technical requirements and technical feasibility of the project. Find the initial group of artists to create the first piece and spend time planning the next phases. \n\nI'd like to spend some time brainstorming with different artists to see how they feel about the project and if they would want to collaborate. Since this all takes time I'd like to request an initial capital to cover the costs so I can focus on this project and the research full-time.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/53ee4bea-4882-4f2c-8f71-2b6d747a28b2.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/8fd63b00-4bcd-447a-9e9b-7bfd805f3242.png',
    project_socialLinks_website: "['Www.Bepartofart.com']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'freemium',
    impactStatement_statement:
      "[{'answer': \"There hasn't been any impact yet because I have only recently decided to start working on this project again. With the initial funding I will make sure do the research needed to decide if this project has any marit and what the best way will be moving forward.\\n\\n\", 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': \"1. Digital Artists \\n2. Consumers that love art\\n3. The OP Stack \\n\\nFor digital artists it's a new way to showcase their work and skills. It will not be easy to claim a spot on the canvas, it will require winning multiple voting rounds and convincing the community you are the right fit for that spot. But once you do, your work will be there forever. \\n\\nFor people that love art, it will be a new way to interact with it. Not only being able to decide how the canvas should move forward by voting, they'll also be able to buy their favorite pieces of the canvas to gift to their friends or family or keep for themselves.\\n\\nThe OP stack will have a new innovative way to display it's strength, this time not rooted in DeFi. I feel a lot of people are not yet comfortable with blockchain and/or DeFi and because of that they aren't using the OP stack yet. With this project the OP stack will be able to show how a blockchain can be used to keep track of ownership of the first infinite art canvas. \\n\\n\\n\\n\\n\\n\\n\\n\", 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 12422,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x6272a864b7793e1a0ac1b8a2767366f56e8234cb969a7e9f3f21cd70d374a357',
    applicationId:
      '0x6272a864b7793e1a0ac1b8a2767366f56e8234cb969a7e9f3f21cd70d374a357',
    projectId:
      '0x7c2460f0e048edd08abb4279db8fc5318168145672399cb37c9f19c9381d5273',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Research or development of new features',
    impactStatement_subcategory:
      "['Research or development that introduces new features, improvements, or capabilities to the OP Stack.']",
    organization_name: 'Derive (Formerly Lyra)',
    organization_description:
      'Derive L2 is an Ethereum rollup built using the OP stack and is the home of the Derive Protocol. It is a permissionless smart contract platform that boosts the performance of Ethereum whilst inheriting its security. Derive Network enables users to trade options, spot, and perpetuals on a self-custodial, modular, and performant technology stack. Derive operates as a leading DeFi derivatives exchange, providing tools for traders to manage risk, speculate on price movements, and earn yield through various strategies.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/8a25c755-15c3-4446-b180-3d37b79cc67f.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/1477d7fb-aa13-4357-8a9f-3496f13cf474.png',
    socialLinks_website: "['https://www.derive.xyz/']",
    socialLinks_farcaster: "['https://warpcast.com/lyra.eth']",
    socialLinks_twitter: 'https://x.com/derivexyz',
    socialLinks_mirror: 'https://blog.derive.xyz/derive/',
    team: "['230590', '257725']",
    name: 'Derive (Formerly Lyra) OP Custom Gas Limit Research',
    description:
      'Derive is one of the first op-stack rollups, pushing the limits of gas usage with a custom gas implementation that led to the identification and patching of a GETH client bug. The team aims to fully utilize the maximum GETH gas throughput, crucial for delivering trustless, on-chain portfolio margin. Derive has processed over 400,000 trading transactions, consuming over 1 trillion gas.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/454e843a-a2e1-480d-93d6-4dde35464baa.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/a772aa2d-b98e-4b9a-91c5-532d04f4e26a.png',
    project_socialLinks_website: "['https://www.derive.xyz/']",
    project_socialLinks_farcaster: "['https://warpcast.com/lyra.eth']",
    project_socialLinks_twitter: 'https://x.com/derivexyz',
    project_socialLinks_mirror: 'https://blog.derive.xyz/derive/',
    pricingModel: 'freemium',
    impactStatement_statement:
      "[{'answer': 'Derive is one of first op-stack rollups to deploy and is one of few pushing the limits of gas. Derive has been working on improvements to the custom gas implementation and in doing so, pushed the GETH client to limit of 400m gas per block enabling Conduit to find and patch this bug: https://github.com/ethereum-optimism/optimism/pull/11169#pullrequestreview-2188753413\\n\\nDerive intends to be one of the few L2s using the MAX geth gas throughput overtime given the computational intensity of derivatives and delivering trustless, on-chain, portfolio margin in the most capital efficient way possible. to date, we have had > 400k transactions just from trading and > 1 Trillion Gas consumed https://explorer.lyra.finance/address/0xeB8d770ec18DB98Db922E9D83260A585b9F0DeAD', 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': 'Derive’s work pushing the limits of Max gas has benefited two main groups:\\n\\n1. **OP superchains** can now operate at a higher gas throughput without encountering a bug that could potentially cause a reorg in the event they publish in a block too much data (10MB), so increasing over 40Mgas would have been unsafe for chains that are heavy calldata. \\n2. **End users** - improvements to max geth gas enhance end user experience by allowing OP stack chains to operate at a higher throughput and increase speed of execution which allows greater capital efficiency and transparency for those operating on chain by allowing more data to be published per block transaction', 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 61332.92,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x62855986b48353248f0feaea9e4afceb298505ec0cc1a515c3fc9cbffaff62e0',
    applicationId:
      '0x62855986b48353248f0feaea9e4afceb298505ec0cc1a515c3fc9cbffaff62e0',
    projectId:
      '0x3a103436d12a3d54ade1a44f87ce255417fd530b6ec55abd3bea1898b32c61c1',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Research or development of new features',
    impactStatement_subcategory:
      "['Research or development that introduces new features, improvements, or capabilities to the OP Stack.']",
    organization_name: 'Zotto',
    organization_description: '',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/273c1263-c85e-4308-baf7-bff2f041e4b7.png',
    organizationCoverImageUrl: '',
    socialLinks_website: [],
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['849758']",
    name: 'Zotto',
    description:
      'Zotto is an automated perpDEX and memecoin aggregator to snipe and sell tokens at lightning speed. The platform allows each trader to tailor its custom strategies for auto-buy/sell based on predefined conditions set by onchain intents. These smart agents are fully customizable, multi-condition, asynchronous, cross-chain, and non-custodial.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/7a7824ce-cdff-4ca2-a917-fbce0d3d5e47.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/00ca0aac-7555-48af-aa37-015b68ac777d.png',
    project_socialLinks_website: "['https://zotto.ai/']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://x.com/zottoAI',
    project_socialLinks_mirror: '',
    pricingModel: 'freemium',
    impactStatement_statement:
      "[{'answer': \"Zotto has created a automation engine live on Base, designed to be leveraged by any OP Stack chain and developer. Our first use case focuses on automating perpetual, spot, and DeFi trading on Base through the Zotto app. \\n\\nWe're also developing APIs and SDKs to enable integration of our engine across the broader ecosystem, automating a wide range of tasks. We're already in discussions with RaaS providers to natively integrate automation into various rollups. This not only strengthens the OP Stack ecosystem but opens up new opportunities for developers to make automation a core feature of their on-chain activities.\\n\\n\", 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': \"The biggest beneficiaries of our work on the OP Stack have been developers and DeFi projects that require automation for their on-chain activities. For example, we've helped Orderly with the first fully automated perp trading. Our advancements are increasing user activity as it no longer requires manual intervention to initiate trades and create volume on-chain.\\n\\nWe are integrating the engine with various DEX and DeFi protocols to offer a new way to interact with their platform.\", 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 273293.03,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x65231830e92dbe255251d382e23b1fbe1763de5f88f25ceddacc90e13e1fa295',
    applicationId:
      '0x65231830e92dbe255251d382e23b1fbe1763de5f88f25ceddacc90e13e1fa295',
    projectId:
      '0x7f1256b007e1156494e43b58d5e85e6ec20f4fcf1e5cac6ebb17b702e9c0b5fb',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Research or development of new features',
    impactStatement_subcategory:
      "['Research or development that introduces new features, improvements, or capabilities to the OP Stack.']",
    organization_name: 'EthStorage',
    organization_description: '',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/aff6e73e-f3f5-49e7-8c25-707738dd526a.png',
    organizationCoverImageUrl: '',
    socialLinks_website: [],
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['245756', '498701', '438493']",
    name: 'Dynamic Inbox Contract For OP Stack',
    description:
      'This feature aims to allow the batch inbox to be a contract, enabling customized batch submission conditions such as:\n\nRequiring the batch transaction to be signed by a quorum of sequencers in a decentralized sequencing network; or\nMandating that the batch transaction call a BLOB storage contract (e.g., EthStorage) with a long-term storage fee, which is then distributed to data nodes that prove BLOB storage over time.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/fa88a614-4de4-4ae0-9363-0b819540724c.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/6560734b-a095-4659-94ea-0e6dfa8373f6.png',
    project_socialLinks_website: [],
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'This feature aims to allow the batch inbox to be a contract, enabling customized batch submission conditions such as:\\n\\n1. Enable a decentralized sequencing network (such as Based rollup), which requires the batch transaction to be signed by a quorum of sequencers; or\\n2. Mandate that the batch transaction call a BLOB storage contract (e.g., EthStorage) with a long-term storage fee, which is then distributed to data nodes that prove BLOB storage over time.\\n\\nFor the specific advancements, we have proposed a spec here:\\n\\nhttps://github.com/ethereum-optimism/specs/pull/284\\n\\nwhich receives positive feedback from Mark Tynes.\\n\\nIn addition, we have completed a reference implementation:\\n\\n1. [example inbox contract for EthStorage](https://github.com/blockchaindevsh/es-op-batchinbox/blob/main/src/BatchInbox.sol)\\n2. [op-node & op-batcher changes](https://github.com/blockchaindevsh/optimism/compare/5137f3b74c6ebcac4f0f5a118b0f4909df03aec6...02e3b7248f1b590a2adf1f81488829760fa2ba03)', 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': 'Quarkchain L2 has deployed a OP Stack testnet using the genesis inbox contract feature to permanently store BLOBs on EthStorage Network: https://github.com/ethstorage/pm/blob/main/L2/testnet_usage.md\\n\\nAnd after discussing with Mark, we think it can be more valuable to make it possible for existing OP Stack instances to also migrate to inbox contract, thus \"Dynamic Inbox Contract\". The next step is to add the feature to the official OP Stack upgrade in the future.', 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: 'token-house-mission',
    grant_1_link: 'https://app.charmverse.io/op-grants/page-36156815313550994',
    grant_1_amount: 30000,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x6605b6f2cb8bad86dd1d82061b0fb7333a6b8d31b9f8c05a2f47cb7d76d0b14f',
    applicationId:
      '0x6605b6f2cb8bad86dd1d82061b0fb7333a6b8d31b9f8c05a2f47cb7d76d0b14f',
    projectId:
      '0xbea008dac0a4a2d2cc88ed14468f7ce06b1a13d43ead38f31df3ca5f6d70d12e',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Research or development of new features',
    impactStatement_subcategory:
      "['Research or development that introduces new features, improvements, or capabilities to the OP Stack.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'OP Stack Chains: Economics, Adoption and Activity Overview Dune Dashboards and Research',
    description:
      'sealaunch is onchain intel team dedicated in-depth onchain and Dune research for chains, protocols and dApps building on Ethereum, namely on the OP Stack. This project offers a comprehensive view of OP rollups that range from economic metrics benchmark, onchain activity cross-chain but also OP rollup specific and features that highlight the diversity of the OP Stack. Currently on the Top #10 Wizards on Dune.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/01d213eb-35fa-4485-9844-c38a816b0f67.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/76b97430-0103-4219-8003-018f11f1814f.png',
    project_socialLinks_website: "['https://sealaunch.xyz/']",
    project_socialLinks_farcaster: "['https://warpcast.com/sealaunch']",
    project_socialLinks_twitter: 'https://x.com/sealaunch_',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'Our dashboards have helped Optimism, Base, Zora and Mode teams have onchain data resources and dashboards that help understand and highlight not only what is happening on their rollup specifically, but also on the OP stack as a whole. The cross-chain data research helps shows the diversity and success of these chains. Our data shows a thriving OP stack that helps attracts new builders looking to develop on a stack with verifiable adoption and activity.', 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': 'Directly, it served dev and leadership teams of Base, Zora and Mode to use onchain data to prove a track record and showcase adoption. As well, as a granular understanding of activity on their L2s when comparing with other EVM L2s and other OP rollups. Additionally for Zora Creators specifically, our research on a Zora feature like its protocol rewards and as a direct result of our action of contacting creators with unclaimed rewards, benefited [companies and individual creators to claim their forgotten funds](https://x.com/sealaunch_/status/1802817823829368971) and a resource that is still available for any Zora account to check.\\nIndirectly, all this onchain data resources can benefit builders that want to identify underserved users or verticals on a dynamic ecosytem like the OP Stack.', 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 74534,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x697cbc5fd1f276c033ea45c901889eead0d75900abeeff034e4ff00140ef095b',
    applicationId:
      '0x697cbc5fd1f276c033ea45c901889eead0d75900abeeff034e4ff00140ef095b',
    projectId:
      '0xf2da6b1d4ab4bcc61b5318f3b2f2f7d568fb0e6a9fbf0ca240130160953ea8fa',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Research or development of new features',
    impactStatement_subcategory:
      "['Research or development that introduces new features, improvements, or capabilities to the OP Stack.']",
    organization_name: 'Ethereum Attestation Service (EAS)',
    organization_description:
      'Infrastructure public good for making attestations onchain or offchain about anything. \nPermissionless. Tokenless. Free to Use. Over 1M attestations have been made on the Superchain from entities like Coinbase, Gitcoin, and OP.\n\nEAS is natively integrated into OP Bedrock and linked by two predeploy addresses ensuring standardization across the Superchain for making attestations:\nhttps://github.com/ethereum-optimism/optimism/tree/3542398896d9faca6b379fe67e3985d722cf80b6/packages/contracts-bedrock/src/EAS\n\nPredeploy Addresses on OP Bedrock:\n- SchemaRegistry: 0x420....020\n- EAS: 0x420....021\n\nDid you know? The following schemas are used by OP for retro funding projects & applications:\nhttps://docs.optimism.io/chain/identity/schemas\n- Project & Organization Identifiers\n- Organization metadata\n- Project metadata\n- Retro Funding application\n- Retro Funding application approval/rejection\n- Retro Funding Rewards\n- Retro Funding badgeholders\n- Retro Funding Governance contribution\n- Governance Contribution',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/8a52a407-196f-440d-86b4-1e8e1b31c132.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/2c05a16b-8bdf-4a00-a5c6-68346dcd4d97.png',
    socialLinks_website: "['https://attest.org']",
    socialLinks_farcaster: "['https://warpcast.com/~/channel/eas']",
    socialLinks_twitter: 'https://twitter.com/eas_eth',
    socialLinks_mirror:
      'https://mirror.xyz/0xeee68aECeB4A9e9f328a46c39F50d83fA0239cDF',
    team: "['9848']",
    name: 'Ethereum Attestation Service (EAS)',
    description:
      'EAS is an infrastructure public good for making attestations onchain or offchain about anything. Attestations are digital signatures on structured pieces of data used to build more trust online and onchain. Over 1M+ attestations have been made in the Superchain from over 14k+ unique attesters.\n\nEAS is natively integrated into OP Bedrock and linked by two predeploy addresses:\nhttps://github.com/ethereum-optimism/optimism/tree/3542398896d9faca6b379fe67e3985d722cf80b6/packages/contracts-bedrock/src/EAS',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/e74ff6ef-578b-4dcb-b155-e663822b2f94.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/a447bb2c-d43d-433c-b66c-2506c12858f4.png',
    project_socialLinks_website:
      "['https://attest.org', 'https://docs.attest.org']",
    project_socialLinks_farcaster: "['https://warpcast.com/~/channel/eas']",
    project_socialLinks_twitter: 'https://twitter.com/eas_eth',
    project_socialLinks_mirror:
      'https://mirror.xyz/0xeee68aECeB4A9e9f328a46c39F50d83fA0239cDF',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'EAS is **[natively integrated into the OP Stack](https://github.com/ethereum-optimism/optimism/tree/36f093a10da09496c3ef5a706cd494a4e2a9b9bd/packages/contracts-bedrock/src/EAS)** for making onchain and offchain attestations.\\n\\nWhen a new chain joins the Superchain, **EAS is automatically included at Genesis via two predeploys**, standardizing schema registration and attestations for all builders.\\n\\nThis infra enables the Superchain to decentralize beyond money and assets, enabling use cases in provenance, authenticity, reputation, voting systems, and beyond.\\n\\n**Superchain  Stats (Oct 2023 - Aug 2024):**\\n\\n-   **1M+** attestations\\n-   **572K+** unique addresses received attestations \\n-  **14K** attesters\\n    \\n**OP Bedrock predeploys:**\\n\\n-   SchemaRegistry: [0x4200...0020](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000020)\\n    \\n-   EAS: [0x4200...00021](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000021)\\n', 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': '## Attestations are rapidly being adopted across the Superchain\\n\\nSuperchain builders creating more trustful experiences in their products:\\n-   **Coinbase:** Launched “Coinbase Verifications” for verified user attestations\\n-   **Optimism:** Uses attestations for various Retro Funding use cases\\n-   **Gitcoin Passport:** Built an oracle to attest to passport stamps & scores onchain\\n-   **Centrifuge:** Integrated CB verifications for RWA lending markets\\n-   **Devfolio:** - Launched an onchain quadratic voting system for Onchain Summer\\n-   **Superhack:** - 69 teams developed novel use cases using EAS predeploys\\n-   **ETHGlobal:** - Used attestations for in-person hacker interactions\\n\\n## EAS is critical infra for Retro Funding\\n [**Several schemas are used by Optimism for Retro Funding**](https://docs.optimism.io/chain/identity/schemas): \\n- Project/org identifiers and metadata\\n- Applications, approvals, and rewards\\n- Badgeholders & governance contributions', 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 248448,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x6ad164877605c91d3182bcc0ba977f39c95fa48449884c001e85ab65a70355ef',
    applicationId:
      '0x6ad164877605c91d3182bcc0ba977f39c95fa48449884c001e85ab65a70355ef',
    projectId:
      '0xd8012752e512ed8c6a47e61293bbad8cd942c9d016de1dc78d64d2248373444a',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Research or development of new features',
    impactStatement_subcategory:
      "['Research or development that introduces new features, improvements, or capabilities to the OP Stack.']",
    organization_name: 'brainbot/Shutter',
    organization_description: '',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/d7e880ed-d48a-4329-97a9-75f21d815def.png',
    organizationCoverImageUrl: '',
    socialLinks_website: [],
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['316218', '358280']",
    name: 'Feasibility study for Front-running protection via shielded mempool for the OP Stack using threshold encryption',
    description:
      'Shutter is a threshold encryption protocol with a wide variety of applications, including: malicious MEV prevention, censorship resistance, voting integrity, and gaming fairness.\n\nShielded Trading is currently the main focus of Shutter Network. We aim to provide a solution for front-running prevention and real-time censorship resistance through transaction encryption using threshold cryptography-based distributed key generation (DKG). An encrypted mempool prevents the parts of MEV that are considered malicious (front-running, sandwich attacks) while leaving the distribution of the benign types of MEV (arbitrage, liquidations).\n\nShutter performed a feasibility study for Front-running protection via shielded mempool for the OP Stack using threshold encryption (https://gov.optimism.io/t/shutterized-optimism-an-encrypted-mempool-for-the-op-stack/). The resulting document serves as a requirements and technical architecture document for a threshold encryption-based front-running protection mechanism for the OP Stack and Bedrock codebase, capitalizing on the capabilities of the Shutter Network.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/1126620e-157b-49ae-aee8-2f3bcb6e4574.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/84db88db-e6ab-4c71-842d-104715b9d889.png',
    project_socialLinks_website:
      "['https://shutter.network/', 'https://linktr.ee/ShutterNetwork', 'https://blog.shutter.network/']",
    project_socialLinks_farcaster: "['https://warpcast.com/shutter']",
    project_socialLinks_twitter: 'https://x.com/ShutterNetwork',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'The feasibility study performed by brainbot serves as a requirements and technical architecture document for a threshold encryption-based front-running protection mechanism for the OP Stack and Bedrock codebase. \\n\\nThe resulting report (https://gov.optimism.io/t/shutterized-optimism-an-encrypted-mempool-for-the-op-stack/6387?ref=blog.shutter.network) provides a blueprint for OP Stack-based rollups to integrate mempol encryption becoming more secure and efficient layers, attracting safer trading for DeFi users, more robust censorship resistance, and increased profitability. Moreover, the sequencer operators will be able to claim immunity from front-running and censoring transactions by design, while retaining their ability to collect and/or distribute back-running related MEV.\\n\\nDecentralized Sequencer and MEVA designs are largely orthogonal to this proposal and complement it well.\\n', 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': 'The research has attracted the interest of several Optimism stakeholders, including the Developer Advisory Board, which voted unanimously to accept a Mission request to implement the research (https://gov.optimism.io/t/ready-to-vote-implement-a-prototype-of-an-op-stack-chain-with-mempool-encryption/7448/19?u=cotabe), and Mode, whom we partner with to launch the Shutterized Mode testnet to prevent censorship, front-running, and sandwich attacks. \\n\\nThis is especially relevant for the decentralization of the sequencer and to mitigate regulatory risks; for example, the Markets in Crypto-Assets Regulation MICA may treat front running and other types of MEV as “market abuse” (https://twitter.com/paddi_hansen/status/1795084797238256110)', 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: 'token-house-mission',
    grant_1_link:
      'https://app.charmverse.io/op-grants/blob-archiver-rs-a-robust-blob-archiver-service-in-rust-6388430437756178',
    grant_1_amount: 10000,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x6ad58623b17b1e11053007d266b59849c7d850ca4f34946bccf6f4db1e652c85',
    applicationId:
      '0x6ad58623b17b1e11053007d266b59849c7d850ca4f34946bccf6f4db1e652c85',
    projectId:
      '0x85bef37b528ec9d7e1a9cb864e298e3c117071507acd3f522c28561435d167f5',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Research or development of new features',
    impactStatement_subcategory:
      "['Research or development that introduces new features, improvements, or capabilities to the OP Stack.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'OP ENS Gateway by Opti.Domains',
    description:
      "Opti.Domains has developed an ENS Gateway implementation for OP Stack chains that supports various proofs, including those from L2OutputOracle, Dispute Game, and Anchor State. The appropriate proof is automatically selected based on the configuration of the OP Stack chain.\n\nThe Opti.Domains ENS Gateway automatically upgrades in response to the OP Stack's transition from L2OutputOracle to Dispute Game, requiring no manual intervention or updates to the verifier contract or gateway server.\n\nThe ENS Gateway, specifically the EVMGateway, enables trustless cross-chain data retrieval for ENS names deployed on Layer 2 networks like Optimism with a CCIP Gateway. When an ENS name lookup occurs, the resolver reverts with OffchainLookup containing the gateway URL. The client then contacts the gateway, which returns the requested data. This data is passed to a callback function on the resolver for verification before being returned to the client as the final result of the name lookup.\n\nOur ENS Gateway has a mechanism to ensure liveliness even in the event that the respected dispute game type has suddenly changed, as seen in the recent proposal, 'Upgrade Proposal #10: Granite Network Upgrade,' by storing a backup dispute game type and only trusting its anchor state.\n\nOpti.Domains has also developed social verification and attestation to EAS in collaboration with Bored Town. We are on our way to scaling ENS to OP. We have contributed to the ENS OP Gateway development, which is currently under review by ENS core developers.\n\nThe Namespace team has expressed interest and reached out to us with questions about using our OP ENS Gateway. Additionally, several teams have participated in discussions regarding the development of our OP ENS Gateway.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/8f6ad6e0-029a-4f59-b1d2-c7885248b99a.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/135853fe-2393-4a0a-a959-044ff973fcf0.png',
    project_socialLinks_website: "['https://opti.domains']",
    project_socialLinks_farcaster: "['https://warpcast.com/optidomains.eth']",
    project_socialLinks_twitter: 'https://x.com/optidomains',
    project_socialLinks_mirror: '',
    pricingModel: 'freemium',
    impactStatement_statement:
      "[{'answer': \"Opti.Domains has developed an ENS Gateway implementation for OP Stack chains that supports various proofs, including those from L2OutputOracle, Dispute Game, and Anchor State. The appropriate proof is automatically selected based on the configuration of the OP Stack chain.\\n\\nThe Opti.Domains ENS Gateway automatically upgrades in response to the OP Stack's transition from L2OutputOracle to Dispute Game, requiring no manual intervention or updates to the verifier contract or gateway server.\\n\\nOur ENS Gateway has a mechanism to ensure liveliness even in the event that the respected dispute game type has suddenly changed, as seen in the recent proposal, 'Upgrade Proposal #10: Granite Network Upgrade,' by storing a backup dispute game type and only trusting its anchor state.\", 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': '- Teams building an ENS identity and infrastructure on OP Stack chains do not need to reimplement the gateway and verifier while having a fully verifiable and decentralized way to launch their identity with ENS subdomains or similar solutions.\\n- ENS Labs benefit from not having to spend man-days researching and developing the EVM Gateway on OP Stack chains.\\n- The Namespace team has expressed interest and reached out to us with questions about using our OP ENS Gateway. Additionally, several teams have participated in discussions regarding the development of our OP ENS Gateway.', 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x6c524b0afee6ab66e507b86f07f0338c5d1e5b7257c4b6fd80efdc56f30899df',
    applicationId:
      '0x6c524b0afee6ab66e507b86f07f0338c5d1e5b7257c4b6fd80efdc56f30899df',
    projectId:
      '0x1874030dc79203f106c67f2b1f6a2b600c4efe9a2c1523ae1bce46140368ad04',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Research or development of new features',
    impactStatement_subcategory:
      "['Research or development that introduces new features, improvements, or capabilities to the OP Stack.']",
    organization_name: "Louie's Kingdom",
    organization_description: 'The dream team',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/c31efc70-9663-443c-a3ed-501ba694b1e6.png',
    organizationCoverImageUrl: '',
    socialLinks_website: [],
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['4289', '191212']",
    name: 'Test Project',
    description: 'This new',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/9f096f4a-099d-44e6-bbe8-262f3af73ee0.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/decabfe9-ebc2-4e01-89ff-1028dab807ca.png',
    project_socialLinks_website: [],
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'ddd projectprojectprojectprojectproject\\nMy project is good project\\nMy project is good project\\nMy project is good project\\nMy project is good project\\nMy project is good project\\nMy project is good projectMy project is good project', 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': 'My project is good project\\nMy project is good project\\nMy project is good project\\nMy project is good project\\nMy project is good project\\nMy project is good project\\nMy project is good project\\nMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project is good projectMy project i', 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x6e299c690e4ea63ec248ed245b97dd1a03bcf4d08a7721f660e74c8eae6d50ee',
    applicationId:
      '0x6e299c690e4ea63ec248ed245b97dd1a03bcf4d08a7721f660e74c8eae6d50ee',
    projectId:
      '0x09875cfe708f0c3acaca3d8af6b1ca2bd45b43c4a268a55c5d2b50ec9bdeef75',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Research or development of new features',
    impactStatement_subcategory:
      "['Research or development that introduces new features, improvements, or capabilities to the OP Stack.']",
    organization_name: 'Wonderland',
    organization_description: '',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/ec7c1348-9ce1-4672-bec7-1839943e2ec2.png',
    organizationCoverImageUrl: '',
    socialLinks_website: [],
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['17851', '19867']",
    name: 'opUSDC',
    description:
      'Bridged USDC Standard for the OP Stack allows for an efficient and modular solution for expanding the Bridged USDC Standard across the Optimism ecosystem.\nChain operators can use the Bridged USDC Standard for the OP Stack to get bridged USDC on their OP Stack chain while also providing the optionality for Circle to seamlessly upgrade bridged USDC to native USDC and retain existing supply, holders, and app integrations.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/783c8899-4a1c-45e8-9d97-35977c6c68b7.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/6730b8ba-2008-4aad-b1fa-61e2060d0c48.png',
    project_socialLinks_website: "['https://defi.sucks/']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://x.com/DeFi_Wonderland',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'To date, the primary beneficiaries of this implementation have been chain operators like Worldchain and Lisk, along with RaaS providers, who have been informed about the implementation and have currently conducted internal tests in preparation for launch. However, it is important to note that the implementation is still awaiting its first mainnet deployment by a chain operator for full use.', 'question': 'Who has benefited the most from your work on the OP Stack and how?'}, {'answer': 'opUSDC sets the standard for deploying the [Bridged USDC standard](https://www.circle.com/en/bridged-usdc) to any OP Stack Chain. Before opUSDC, chain operators were limited to non-standard USDC implementations, which caused liquidity fragmentation when Circle deployed its official version (USDC.e vs. native USDC). Now, as part of the [core features available](https://docs.optimism.io/builders/chain-operators/features/bridged-usdc-standard) to OP Stack Chain Operators, anyone can deploy a Bridged USDC version, which includes:\\n\\n- A factory implementation for one-click deployment on Ethereum and targeted OP Stack Chain.\\n- A seamless migration flow for tokens, in this case, to native USDC, in coordination with Circle.\\n- The ability to claim funds after the migration process is completed as well as other edge cases.\\n\\nThis referenced implementation also contributes to the development of custom token bridges for OP Stack Chains, particularly for those interested in the flows introduced.', 'question': 'How has your project advanced the development of the OP Stack?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 38223,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x6fc3b802b42153f99ca38a0a5b28f9d675b44aafa6317fddb7e33280b50e8d0a',
    applicationId:
      '0x6fc3b802b42153f99ca38a0a5b28f9d675b44aafa6317fddb7e33280b50e8d0a',
    projectId:
      '0x11a2255f272c84328438f5081139455d8fd2a302fd35f0f08acdff1f1c0d84e6',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Research or development of new features',
    impactStatement_subcategory:
      "['Research or development that introduces new features, improvements, or capabilities to the OP Stack.']",
    organization_name: 'Succinct',
    organization_description:
      'Succinct is building SP1: a blazing-fast, general-purpose zkVM. SP1 enables any developer to create real-world ZKP applications by simply writing Rust, with state of the art performance.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/d0fa60ed-6768-4950-b1a3-d939070b1141.png',
    organizationCoverImageUrl: '',
    socialLinks_website: "['https://succinct.xyz/']",
    socialLinks_farcaster: [],
    socialLinks_twitter: 'https://twitter.com/SuccinctLabs',
    socialLinks_mirror: '',
    team: "['5323']",
    name: 'OP Succinct: Full ZK Validity Proving of OP Stack Rollups with SP1',
    description:
      'OP Succinct combines OP Stack, a battle-tested, modular rollup framework, with SP1, a blazing-fast zkVM, to enable any OP Stack rollup to be fully proven with ZKPs.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/55feffd8-8eb4-42f9-a46a-d01336ce9c0f.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/87d02689-101f-4ee0-83d2-8720fad3073c.png',
    project_socialLinks_website: "['https://www.succinct.xyz/']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://twitter.com/SuccinctLabs',
    project_socialLinks_mirror: '',
    pricingModel: 'freemium',
    impactStatement_statement:
      "[{'answer': \"**Background:** Succinct is building SP1: a blazing-fast, general-purpose zkVM. SP1 enables *any developer* to create real-world ZKP applications by **simply writing Rust**, with state of the art performance. \\n\\nOP Succinct shows how to use SP1 to add *full type-1 ZK validity proofs* to any OP Stack rollup in < 2000 lines of code. Historically, zkEVM rollups have been difficult to build, requiring specialized cryptography expertise that makes customization + maintainability hard. This integration shows how combining SP1's magical developer experience for ZKPs + OP Stack yields a ZK rollup with the *best of all worlds*.\\n\\nWith OP Succinct, it is easy to upgrade any OP Stack chain to use ZKPs. Deployment takes < 1 hour and you get:\\n* 1-2 hour finality secured by ZKPs (a huge gain over the 7 day delay of traditional OP stack)\\n* Cost-effective proving (avg. 0.5-1 cent per transaction)\\n* Excellent devex for rollup teams, with unlimited customization (in Rust) and easy maintainability\\n\", 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': \"**Optimism Collective:** From day 1, Optimism designed OP Stack to be modular--with the goal of adding ZKP validity proofs once the technology was ready. SP1, with it's easy developer experience and fast performance, makes ZKPs ready for mainstream usage. OP Succinct integrates SP1 into the OP Stack to fulfill this original vision of a fully ZK proven OP Stack chain. The SP1 proofs of OP's STF also serve as a foundation for more scalable interoperability in the Superchain.\\n\\n**Broader Ethereum community:** All application or rollup developer in the Ethereum ecosystem benefit by having a simple and maintainable option for a fully type-1 zkEVM rollup that is performant, cheap and customizable. Existing OP stack chains can leverage OP Succinct for faster finality with ZKPs. New rollups can use OP Succinct as a viable option for deploying a ZK rollup.\\n\\nBroadly, OP Succinct shows the path to the endgame of Ethereum scaling where every rollup is a ZK rollup.\", 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x716ad2474c6acff63481ec2283e01a2c4bef79250a1e85119324edae7b8d53ce',
    applicationId:
      '0x716ad2474c6acff63481ec2283e01a2c4bef79250a1e85119324edae7b8d53ce',
    projectId:
      '0x8ec88058175ef4c1c9b1f26910c4d4f2cfa733d6fcd1dbd9385476a313d9e12d',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Research or development of new features',
    impactStatement_subcategory:
      "['Research or development that introduces new features, improvements, or capabilities to the OP Stack.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'Solady',
    description:
      "Solady is an open-source repository containing highly-optimized Solidity snippets. It offers efficient implementations of commonly-used libraries, such as MerkleProofLib, alongside cutting-edge features like LibZip.\n\nBy thoughtfully encapsulating low-level inline assembly within flexible APIs, Solady simplifies the process of writing clean and efficient Solidity code. More than just a library, Solady also serves as a learning resource and experimental laboratory for pioneering gas-optimization techniques.\n\nSolady is used in the codebases of Optimism and Coinbase.\n\nWith respect to the OP stack, Solady contributes in the following ways:\n- Provides a Solidity and JavaScript implementation of FastLZ compression algorithm, which is used for more accurate gas estimations in the Fjord upgrade. The JavaScript code is very minimal, allowing for it's easy translation into Go.\n- Various other utilities such as bytecode proxies and string operations.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/0e726459-df1e-4cea-bddb-25399f88acea.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/0615ef25-edbb-4b19-934d-79614daf8040.png',
    project_socialLinks_website: "['https://solady.org']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://twitter.com/optimizoor',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': \"Solady contributes in the following ways to the OP Stack:\\n\\n- Provides a Solidity and JavaScript implementation of FastLZ compression algorithm, which is used for more accurate gas estimations in the Fjord upgrade. The JavaScript code is very minimal, allowing for it's easy translation into Go.\\n\\n- Various other utilities such as bytecode proxies and string operations.\\n\\nhttps://github.com/search?q=repo%3Aethereum-optimism%2Foptimism%20solady&type=code\", 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': \"- Solady has done the heavy work on translating the FastLZ algorithm from it's original C implementation to a Solidity and JavaScript implementation that behaves exactly the same. The FastLZ algorithm is a fast and accurate approximation of the Brotli compression used to compress calldata. This allows both Optimism and end users to save more money on L1 blob fees.\\n\\n- Solady also allows the OP stack's smart contracts to save gas on L1 (e.g. MerkleProofLib, LibClone), which allows more cost savings for Optimism. These smart contracts have also been thoroughly tested and audited, enabling safer code. It also helps with making L2 smart contracts more efficient, so that the Superchain can accommodate more end users. \", 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 50462,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x74988422f40235f42bf41a73ed227cf78277c7c92ee0e73b220ddf3411089885',
    applicationId:
      '0x74988422f40235f42bf41a73ed227cf78277c7c92ee0e73b220ddf3411089885',
    projectId:
      '0x7ada1f0835c4c195d0dd8d9761b80f87dab88d21891b2a2e83220720560af7c1',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Research or development of new features',
    impactStatement_subcategory:
      "['Research or development that introduces new features, improvements, or capabilities to the OP Stack.']",
    organization_name: 'EthStorage',
    organization_description: '',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/7dcdefa2-18ab-457d-8a13-92e7c00049db.png',
    organizationCoverImageUrl: '',
    socialLinks_website: [],
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['498701']",
    name: 'Research and development on multi-section fault dispute game',
    description:
      'EthStorage is dedicated to advancing the next generation of Web3 infrastructure, focusing on areas such as data availability, Layer 2 scaling, multi-section fraud-proof, and decentralized storage. Our team has contributed to several Ethereum Improvement Proposals (EIPs), including EIP-4804, EIP-4972, EIP-5018, and EIP-5027. We have also been awarded multiple grants from the Ethereum Foundation, notably for projects like data availability sampling and proving Layer 2 storage through Layer 1 contracts.\n\nThis research aims to significantly expedite the fault-proof dispute by implementing a multi-section search approach. In contrast to the bi-section game, which demands log2(N) moves to identify the final disputable step, the K-section game (where K > 2) diminishes the moves to logK(N). However, in the K-section game, each player (defender/attacker) must publish a K-1 VM state hashes on-chain with every move. The introduction of EIP-4844 facilitates a substantial reduction in this cost through the utilization of EIP-4844 Binary Large Object (BLOB), capable of accommodating K=4096 VM hashes per BLOB. This allows the dispute process for an N=2^48 game to be resolved in just 4 moves, down from 48, facilitating quicker settlements and lowering gas costs.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/246a6f8a-8335-40b7-b7d9-2590bb1c7cf9.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/1d5c5564-489a-43f8-bb76-73ab8a30b1c5.png',
    project_socialLinks_website: "['https://ethstorage.io/']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://twitter.com/EthStorage',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': \"- The number of move() calls to complete a game is expected to reduce from 73 (MAX_DEPTH of Sepolia testnet) to 7 (3*12=36 for SPLIT_DEPTH, and 4*12=48 for EXECUTION_DEPTH). The potential main benefit will be a significant gas reduction for the challenger over the whole game and a reduction in fault proof window.\\n- We expect the additional gas cost of move() will be minimal: the additional fee will be mainly BLOB fee for each move(). \\n- The code changes to FaultDisputeGame.sol will be minimized, and the existing definitions such as Position, Depth, MIPS.sol, etc will be retained. Further, the N-section fault-proof game would subsume bisect FaultDisputeGame.sol when N=2. Therefore, all existing tests (unit tests, e2e tests) for FaultDisputeGame.sol can be also used to test the new multi-section fault-proof game.\\n- We've generalized the fault proof contract tests from Nary=1 to Nary>=2.\", 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': 'OP Stack developers who wish to use the multi-section fault proof feature will be benefited the most, as it enables a smaller fault proof window while the additional gas cost of move() will be minimal.', 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 49689,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x83309b7c35ba912832d40a0c9ca3c94ebcd73d169e9b39bd01f5d95e096b07bd',
    applicationId:
      '0x83309b7c35ba912832d40a0c9ca3c94ebcd73d169e9b39bd01f5d95e096b07bd',
    projectId:
      '0x965d10dd8af44d0286af95744897ac7e066f92114c080c021e628f4af3eda298',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Research or development of new features',
    impactStatement_subcategory:
      "['Services for deploying and hosting an OP Chain.', 'Work on core components of the OP Stack, including client implementations, modules, and modifications.', 'Research or development that introduces new features, improvements, or capabilities to the OP Stack.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'OP Stack Individual contributions',
    description: 'Web 3 enthusiast and indie developer.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/872bb13b-ee5e-41fc-baab-2c35063af98e.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/69471b4a-baca-4669-8bc8-dd3e040a94f5.png',
    project_socialLinks_website: "['https://github.com/kelreel']",
    project_socialLinks_farcaster: "['https://warpcast.com/kelreel']",
    project_socialLinks_twitter: 'https://x.com/0x_kir',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'My contributions to the codebase:\\n- improved template app design & layouts (op-scaffold, ecosystem/app)\\n- fixed wallet connection errors, interactions with rpc (wagmi) in some places (op-scaffold, ecosystem/app)\\n- small fixes related to the superchain console (ecosystem)\\n- improved env and documentation\\n\\nDetails are in the project links.', 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': 'New and current app developers on the OP stack will be able to scaffold new applications faster, with a better initial code base and past bugs fixed. Updated documentation details will help resolve issues more quickly when creating new applications.', 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 248448.21,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x8687895d7e9295384b77eea6a3ec763a9b7ac88cc5667104d6746c654acdacd3',
    applicationId:
      '0x8687895d7e9295384b77eea6a3ec763a9b7ac88cc5667104d6746c654acdacd3',
    projectId:
      '0xe15a32ba713cc025574ac6f69be3ad16133fb7561c3d7dc30fbf29b65b5a8be2',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Research or development of new features',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.', 'Research or development that introduces new features, improvements, or capabilities to the OP Stack.']",
    organization_name: 'Upnode',
    organization_description:
      'Upnode provides an infrastructure for launching a full-stack OP Stack chain.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/6fa57494-f966-451b-8f33-deea359565df.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/a687b332-8d00-4a50-a371-df7096b702bc.png',
    socialLinks_website: "['https://upnode.org']",
    socialLinks_farcaster: [],
    socialLinks_twitter: 'https://x.com/upnodeIntern',
    socialLinks_mirror: '',
    team: "['328679', '394600', '849514']",
    name: 'Alt-DA Server & Translation Hub',
    description:
      'An Optimism Alt-DA server enables OP Stack chains to use third-party data availability providers with an on-chain translation system that converts Keccak256 commitments into provider-specific CIDs (content identifier hashes).\n\nThis Alt-DA server uses Keccak256 commitments instead of generic commitments, providing a security advantage. The challenging contract for Keccak256 commitments is well-implemented, audited, and battle-tested, whereas generic commitments often lack an approved challenging logic. This Keccak256 commitments approach is approved for joining the Superchain, as seen in the Redstone chain.\n\nCurrent supported data availability providers:\n- Celestia\n- IPFS\n- Arweave\n- File\n\nFor the technical specifications, please refer to the grant proposal: https://app.charmverse.io/op-grants/plasmada-translation-hub-1014033406866528',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/dcad57db-c8dc-4a36-a833-053e1734b344.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/7e38488c-729a-4a0a-80b1-890c81fa555a.png',
    project_socialLinks_website: [],
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'An Optimism Alt-DA server enables OP Stack chains to use third-party data availability providers with an on-chain translation system that converts Keccak256 commitments into provider-specific CIDs (content identifier hashes).\\n\\nThis Alt-DA server uses Keccak256 commitments instead of generic commitments, providing a security advantage. The challenging contract for Keccak256 commitments is well-implemented, audited, and battle-tested, whereas generic commitments often lack an approved challenging logic. This Keccak256 commitments approach is approved for joining the Superchain, as seen in the Redstone chain.\\n\\nCurrent supported data availability providers:\\n- Celestia\\n- IPFS\\n- Arweave\\n- File', 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': \"OP Stack chain operator benefits from our Alt-DA server implementation by having an easy and secure way to use third-party DA in their OP Stack chain with approved security in the data availability challenging logic available for Keccak256 commitment, which is approved for joining the superchain.\\n\\nWithout our Alt-DA implementation, OP Stack chains using generic commitments will lack the necessary data availability challenging logic required for Superchain integration.\\n\\nData availability providers benefit from our solution by having third-party integrate their DA with the OP Stack chain in a way that's approved for the Superchain.\\n\\nOP Labs gains from our technology by having a different view on integrating third-party DA without compromising security.\", 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x89d1fdde640450d31363f3b225210cf7472f1376f5481f644b214a5725b6e6b5',
    applicationId:
      '0x89d1fdde640450d31363f3b225210cf7472f1376f5481f644b214a5725b6e6b5',
    projectId:
      '0x641dc2c289127d1964bd9882f3d4c536395635b846297a4f62cb887fe7c3a119',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Research or development of new features',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.', 'Work on core components of the OP Stack, including client implementations, modules, and modifications.', 'Research or development that introduces new features, improvements, or capabilities to the OP Stack.']",
    organization_name: 'Borderless Developers Programme',
    organization_description:
      "WHO WE ARE\nB<>rder/ess is a web3 not-for-profit started in 2022 that raises the next generation of web3 builders, Protocol builders, Smart Contract Developers, On-chain analysts, Cyber Security experts, Product Designers, and UX creatives from today's universities. \n\nWHAT WE DO\nWe do this through our (Proof of Work) PoWs;\n1. Building physical hubs on Campuses\n2. Organising quarterly Cipher Sessions\n3. Hosting web3 events\n4. Providing Crypto Education and Finance training in our communities\n5. Offering mentorship in different digital skill-set\n6. Establishing Campus Tech Clubs and\n7. Launching tech projects.\n\nOur most recent Impact Report with Opstack\nhttps://mirror.xyz/karlagod.eth/nVxg3z3Uk3N756UFdfydoyj21NCPBaZWpaHRuT9QTQI",
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/128790ad-24f8-4bb1-a6e0-57a7976ab484.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/4a1e8271-7bdf-4262-892e-086bfc6c579d.png',
    socialLinks_website: "['https://borderless.cryptosmartnow.io/']",
    socialLinks_farcaster: "['https://warpcast.com/karlagod']",
    socialLinks_twitter: 'https://x.com/borderlessdev',
    socialLinks_mirror:
      'https://mirror.xyz/karlagod.eth/nVxg3z3Uk3N756UFdfydoyj21NCPBaZWpaHRuT9QTQI',
    team: "['318515']",
    name: 'B<>rder/ess OPstack Cipher Sessions',
    description:
      'Borderless holds Opstack Cipher Sessions in partnership with Superchains in the Optimism Ecosystem to provide education and inspiration resources aimed at producing developers every quarter who are competent in building solutions on the Superchain in a 4 Phase strategy:\n\nGoal 1: B<>rder/ess Web3 Tech Clubs and Integrations (Community & User Education Strategy on interacting with the Optimism Superchain ecosystem)\nGoal 2: OPstack Themed Developer Programme and Dev Bootcamp (Education)\nGoal 3: OPstack Themed Hackathons and Event (Deployment)\nGoal 4: Certification and Business Dev Mentorship (Go to Market strategies)\n\nThis strategy brought;\n\n- Builders\n- Users\n- Products\n- Marketing\n- Updates and contributions to OPstack deployment documentation and Repos.\n\n\nPlease read our latest impact report with OPstack in the Lisk Superchain here\nhttps://mirror.xyz/karlagod.eth/nVxg3z3Uk3N756UFdfydoyj21NCPBaZWpaHRuT9QTQI',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/6276bdf0-ffbc-407d-bb5f-5401600ada70.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/33a91e1b-2237-464a-bf5a-079f93889cf1.png',
    project_socialLinks_website:
      "['https://borderless.cryptosmartnow.io/', 'https://www.notion.so/B-rder-ess-3-0-Byte-Onchain-dea61442c60243c4b1ba43f69009372f']",
    project_socialLinks_farcaster: "['https://warpcast.com/karlagod']",
    project_socialLinks_twitter: 'https://x.com/borderlessdev',
    project_socialLinks_mirror:
      'https://mirror.xyz/karlagod.eth/nVxg3z3Uk3N756UFdfydoyj21NCPBaZWpaHRuT9QTQI',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': \"**1. Increased Dev Familiarity with OP Stack:**\\nExposure to New web2 Developers: At leats 22 web2 developers, 90% of whom were not previously familiar with OPstack or web3 now build with OPstack.\\n\\n**2. Increased Practical Applications:**\\ni. Project Hacks and Deployments:\\nAt least 4 New projects on the Lisk Superchain, built using OP Stack from the Cipher Session.\\n\\nii. New Smart Contract Development Styles:\\nA student built a savings contract and used the Maths library to do the decimal place calculation interest for users, bypassing the temporary need for an oracle.\\n\\nWe've documented new Contract structures for Child/Parent contract development style for OPstack.\\n\\niii. New Protocol ideas like Co-operative protocols, Savings protocols introduced.\\n\\n**3 Updated Documentation and Educational Resources:**\\n24 hours of extensive documentation and educational content, including video recordings, presentations, and tutorials, all tailored to the OP Stack and repurposed to short-form contents.\\n\", 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': '**1.  OP Stack Benefits**\\ni. Adoption and Use Cases: Our work has expanded OP Stack’s reach by introducing it to new developers and businesses currently building on the Superchain, increasing the number of active projects and use cases built on OP Stack.\\n\\nii. Content and Documentation: The creation of educational content, documentation, and resources tailored to the OP Stack has enriched the Opstack ecosystem. These resources make it easier for future developers to learn and start building with OPstack.\\n\\niii. Web2 Devs Transitioning to web3\\nOpstack being the first building blocks for indie devs and new experiments.\\n\\n**2. Superchain Benefits**\\ni. Expansion of Developer/User Base: Our work increased the number of active contributors to the Lisk Superchain by 22 devs and 100+ users.\\n\\nii. Utility through Businesses: Our work increased the utility of the Lisk Superchain to a broader audience of businesses who wanted to expand their, payment, marketing and other business processes on-chain.\\n', 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x8c91a04b486ae88eee274a3a447c199598ee33c2e79bf97d353a1335d694bf54',
    applicationId:
      '0x8c91a04b486ae88eee274a3a447c199598ee33c2e79bf97d353a1335d694bf54',
    projectId:
      '0x6d30328dd0e058bdd4c55c51d5f785268770040a66edbd2830902c4d87efee9c',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Research or development of new features',
    impactStatement_subcategory:
      "['Work on core components of the OP Stack, including client implementations, modules, and modifications.', 'Research or development that introduces new features, improvements, or capabilities to the OP Stack.']",
    organization_name: 'Kroma',
    organization_description: '',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/8db1b63b-ea9f-435b-bcb0-34417a1a9c97.png',
    organizationCoverImageUrl: '',
    socialLinks_website: "['https://kroma.network']",
    socialLinks_farcaster: [],
    socialLinks_twitter: 'https://x.com/kroma_network',
    socialLinks_mirror: '',
    team: "['602876', '217355', '662916']",
    name: 'Permissionless ZK Fault Proof System',
    description:
      "Kroma is the first OP Stack rollup to feature an active, permissionless ZK Fault Proof system. This system allowed anyone to become a validator, who submits checkpoint outputs to L1 and validates them, thereby enabling the decentralized settlement of Kroma on L1.\n\nAdditionally, it reduced the costs associated with resolving disputes between different checkpoint outputs. It identifies the disputed point at the block level using multiple segments instead of bisection, requiring far fewer transactions. Moreover, it doesn’t necessitate storing large amounts of preimage oracle data on-chain, as verification can be achieved through ZK proofs. Operationally, we enhanced the ZK prover by reducing proof generation time using Tachyon, a Kroma original, GPU accelerated ZK backend library written in C++.\n\nHowever, there were several limitations in the existing system:\n- Maintaining the zkEVM circuit was challenging.\n- It did not guarantee that the execution of transactions was based on the batch data posted by the sequencer.\n- Compatibility with the interface of Optimism's DisputeGame was not considered.\n\nTo overcome these limitations, the Kroma team is developing an advanced ZK Fault Proof system using a zkVM. By using zkVM instead of zkEVM, no additional maintenance efforts are required for the ZK circuit. The new proving scheme ensures that transaction execution is based on the batch data posted by the sequencer. Additionally, the contract for dispute challenges will implement the interface of Optimism’s DisputeGame, making it fully compatible with Optimism's system. We anticipate that this could become one of the various dispute game types in the multi-proof system.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/55912c35-0fb3-4e6a-aa15-b234e260e314.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/8b5cceaf-96c6-435a-9192-a233c8615ba8.png',
    project_socialLinks_website: "['https://kroma.network/']",
    project_socialLinks_farcaster: "['https://warpcast.com/kroma-network']",
    project_socialLinks_twitter: 'https://x.com/kroma_network',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'Kroma has developed a permissionless ZK Fault Proof system based on the OP Stack, utilizing Scroll’s zkEVM. It has demonstrated that assets on OP Stack-based chain can be secured in a decentralized manner with ZK proof. Kroma has brought the OP Stack closer to decentralization and showcased the potential of using ZK proof for a Fault Proof system. Furthermore, this approach can contribute to a multi-proof system as a type of dispute game, enabling a more robust fault proof mechanism within the OP Stack. Moreover, when generating ZK proof becomes faster by utilizing Tachyon, it can enable the transition of the OP Stack to ZK rollups.', 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': 'Since the mainnet launch, over 360 accounts have been registered as validators at peak, and more than 8,700 checkpoint outputs have been submitted. Thanks to these decentralized validators, assets up to $30 million are securely stored on Kroma.\\n\\nOn April 1, the first incorrect checkpoint output was submitted on the mainnet. This marked the first challenge on mainnet within an optimistic rollup, and it was successfully resolved using our ZK Fault Proof system, securing the assets on Kroma. This demonstrated that our development can effectively secure assets on the OP Stack chain.\\n\\nAdditionally, we have improved our Fault Proof system. One of the main challenges we faced was the lengthy time required to generate a ZK proof for a single block. With our optimized modular ZK backend, Tachyon, we achieved a 150% increase in ZK proof generation speed, resulting in a 33% reduction in operational costs for the ZK prover.', 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 135600,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x8c9dc48abd56b9dd087c330879d38ad10c1be80349adaa14e0cbcc232dbe3918',
    applicationId:
      '0x8c9dc48abd56b9dd087c330879d38ad10c1be80349adaa14e0cbcc232dbe3918',
    projectId:
      '0xdd8b2e68cad9afa0701c8f27bf085302b152dbca3393083d3c664e3fc75945ab',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Research or development of new features',
    impactStatement_subcategory:
      "['Work on core components of the OP Stack, including client implementations, modules, and modifications.', 'Research or development that introduces new features, improvements, or capabilities to the OP Stack.']",
    organization_name: 'Moved Network',
    organization_description:
      "Moved is a high-performance optimistic rollup solution built on the Optimism OP Stack, utilizing the Move smart contract language, designed to unlock Ethereum's full potential. By leveraging the power of optimistic rollups and the efficiency of Move, Moved enables fast, secure, and cost-effective transactions on the Ethereum network.",
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/88bd6479-8ded-472a-9c59-3a40d414ddae.png',
    organizationCoverImageUrl: '',
    socialLinks_website: "['https://moved.network']",
    socialLinks_farcaster: [],
    socialLinks_twitter: 'https://x.com/MovedNetwork',
    socialLinks_mirror: '',
    team: "['831955']",
    name: 'Moved Network',
    description:
      "We're building the next generation Ethereum L2 blockchain on Optimism OP Stack that supports the most secure Move smart contract language. Our goal is to help the security and parallel execution of Move meet Ethereum’s vast liquidity.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/4088a7f3-ba0f-4ec6-a6bc-ff4caaf666eb.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/68088c9d-248f-4b4c-b8b7-1e8c52c5569a.png',
    project_socialLinks_website: "['https://moved.network']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://x.com/MovedNetwork',
    project_socialLinks_mirror: '',
    pricingModel: 'pay_to_use',
    impactStatement_statement:
      "[{'answer': \"Moved Network provides smart contracts for alternative VMs to be executed on the OP Stack and Superchain in the future. Almost all the smart contracts on OP Stack runs on EVM and we start providing access to Move smart contract execution.\\n\\nWe also started working on a zkMove implementation that will be used for ZK proof. As it turns out, it's easier to port ZK computation on a Move contract than a Solidity contract, because the Move bytecodes are a lot more similar to assembly language than the EVM bytecodes which makes them easier to transform into ZK computation language.\", 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': 'We believe bringing in Move smart contracts will make OP Stack a lot more secure, because Solidity has vulnerabilities which are solved in Move language.\\n\\nAnother benefit is with ZK proof the withdrawal times will be a lot shorter, currently in a few minutes and in the future in one block time when the underlying ZK computation speeds up. But still a few minutes is much better than 7 days.', 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x5d6b6bef33973adeaada0804d3fd860fad1c97ca612e6e96d38251cbf659cecc',
    applicationId:
      '0x5d6b6bef33973adeaada0804d3fd860fad1c97ca612e6e96d38251cbf659cecc',
    projectId:
      '0x43bb3210691d0a7fd15df10a5401020281f7ab57baa49a63225c5c262abc357d',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Security audits',
    impactStatement_subcategory:
      "['Research or development that introduces new features, improvements, or capabilities to the OP Stack.', 'Work on core components of the OP Stack, including client implementations, modules, and modifications.']",
    organization_name: 'Test in Prod (soon to be Sunnyside Labs)',
    organization_description:
      "Test in Prod is a core development team of Optimism Collective. Test in Prod will soon to be rebranded to 'Sunnyside Labs'.",
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/5354c3c3-da28-4097-bb82-b89b630a3d3e.png',
    organizationCoverImageUrl: '',
    socialLinks_website: "['testinprod.io', 'github.com/testinprod-io']",
    socialLinks_farcaster: [],
    socialLinks_twitter: 'https://x.com/testinprod_io',
    socialLinks_mirror: 'https://mirror.xyz/testinprod-io.eth',
    team: "['811328', '849695', '284703', '849643', '849704']",
    name: 'Asterisc',
    description:
      "Asterisc is an alternative fault-proof VM running RISC-V—initial code written by Protolambda. TiP, in collaboration with OP Labs, built and deployed Asterisc to OP Sepolia. Asterisc can allow a multi-proof system to OP Chains for better security and provide a future-proof alternative for MIPS (Cannon) as Asterisc runs RISC-V.\n\nThe multi-proof system was OP Stack's long-awaited vision and a crucial component of Stage 2 because it keeps the system sane when the primary implementation breaks. For that reason, Ethereum has long supported multi-client implementations, and in L2, we need a multi-proof system to fully achieve them.\n\nTest in Prod has been supporting OP Stack to pioneer the multi-client system. We helped execution clients diversify with OP Erigon and have also been working on fault-proof systems diversify with Asterisc.\n\nWe have been working on the following:\n- Upon Protolambda’s initial implementation, we finished implementing all required opcodes & fixed bugs.\n- Built test suites to run Asterisc against OP Sepolia & OP Mainnet.\n- Ran all blocks of OP Sepolia with Asterisc to verify its deployability on OP Sepolia.\n- Deployed Asterisc to OP Sepolia with cold path.\n- Implementing a different memory structure from Cannon using Radix trie so that Asterisc can save the system when there’s a problem with existing memory implementation.\n\n---\nHere are the commentaries for Asterisc:\n\nClabby (Senior Software Engineer from OP Labs): Asterisc is critical to the OP Stack’s multi-proof roadmap, serving as the compliment to cannon in the landscape of FPVMs. After the rollout of multi-proofs, it will add redundancy to the virtual machine component that runs the fault proof programs, reducing the likelihood of critical impact in the event of an issue with either the on-chain or off-chain FPVM implementations.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/a0697193-268a-411b-afba-8dee1ccb89b3.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/22dc56e6-a5af-4388-84fa-5d47485a6bd5.png',
    project_socialLinks_website:
      "['https://github.com/ethereum-optimism/asterisc', 'https://testinprod.io']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://x.com/testinprod_io',
    project_socialLinks_mirror: 'https://mirror.xyz/testinprod-io.eth',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': \"Asterisc allows a multi-proof system to OP Chains for better security and provide a future-proof alternative for MIPS (Cannon) as Asterisc runs RISC-V.\\n\\nThe multi-proof system was OP Stack's long-awaited vision and a crucial component of Stage 2 rollup because it keeps the system sane when the primary implementation breaks. For that reason, Ethereum has long supported multi-client implementations, and in L2, we need a multi-proof system to fully achieve them.\\n\\nTest in Prod has been supporting OP Stack to pioneer the multi-client system. We helped execution clients diversify with OP Erigon and have also been working on fault-proof systems diversify with Asterisc.\", 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': 'Asterisc benefits the Collective the most because it opens the door for Stage 2 rollup with the multi-proof system. \\n\\nAsterisc also benefits developers because it allows them to run RISC-V programs on OP Chains when their programs are not compilable to MIPS or inefficient on MIPS.\\n\\n---\\nHere are the commentaries for Asterisc:\\n\\nClabby (Senior Software Engineer from OP Labs): Asterisc is critical to the OP Stack’s multi-proof roadmap, serving as the compliment to cannon in the landscape of FPVMs. After the rollout of multi-proofs, it will add redundancy to the virtual machine component that runs the fault proof programs, reducing the likelihood of critical impact in the event of an issue with either the on-chain or off-chain FPVM implementations.', 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x77e86299f288162bccb5e09788c6df4e63f960e4711e10259ea5e6cb9b3ae3e1',
    applicationId:
      '0x77e86299f288162bccb5e09788c6df4e63f960e4711e10259ea5e6cb9b3ae3e1',
    projectId:
      '0x6664074da8453628ebad1cf90ca0a6a313febf2e4909d3aba0c0360f41204c73',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Security audits',
    impactStatement_subcategory:
      "['Security audits specifically on the OP Stack or its components.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'Fault Dispute Game Audit Contest',
    description:
      'The Fault Dispute Game Audit Contest was run from July 15-29th to secure the Superchain by looking for bugs in the Fault Dispute Game contracts.\n\nAfter learning that the OP Labs Audit Framework led to a decision to not fund an audit for the Fault Dispute Game (because the safeguards around it were carefully audited), this project was initiated to bring the top security talent in the space together to secure this crucial piece of infrastructure.\n\nThe result was a two week contest featuring legends like samczsun (the GOAT of whitehats), cts (founder of Zellic), Riley Holterhus (Spearbit Lead Security Researcher), pwning.eth (3rd place on Immunefi all time leaderboard), xuwinnie (winner of the largest audit contest pot of all time), as well as 1000+ other researchers.\n\nThis format proved very effective. The contest uncovered 5 High severity vulnerabilities, as well as 11 Medium severity issues and numerous smaller improvements. These findings spurred the Granite network upgrade (https://gov.optimism.io/t/upgrade-proposal-10-granite-network-upgrade/8733).\n\nMy role was to bring the full audit from idea to completion with the best possible results and minimal time commitment from the OP Labs team. This included:\n- Identifying that this was an important issue for Superchain security, writing the Mission Request, applying, and securing the funding to run the contest.\n- Determining the optimal format to use the funds to find bugs. After discussing an on chain CTF format, decided with OP Labs team that a contest (with some added features) would work best.\n- Negotiating with contest platforms to get the most appealing deal. In the end, Code4rena hosted the contest at zero fee (their typical fee would be 60k OP on a contest of this size).\n- Recruiting top auditors to focus their full time attention on this contest. Selected folks specifically who had the relevant skills for the codebase and worked with them to put together a deal.\n- Took the role of OP Labs representative in organizing the contest: writing scoping documents, organizing the contest repo, putting together ideas to focus researcher attention on the right areas of the codebase, hosting a livestream to walk through the codebase at kickoff, etc.\n- Answering all participant questions during the contest to ensure every valid idea was fully explored.\n- Judging the contest, reviewing all submissions, deduplicating issues, assessing the validity (with the support of OP Labs on final decisions), and putting together the final issues list for the OP Labs team to fix.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/35161dab-61be-49b8-8502-9accf8cc7629.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/48dba596-8cea-4efb-903d-aec2e284e279.png',
    project_socialLinks_website: [],
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://x.com/zachobront',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': \"The most important feature for the OP Stack shipped this year has been Fault Proofs. They moved the chain from Stage 0 to Stage 1 decentralization, and solidified the OP Stack as a full featured rollup stack for other teams to build on. The security of this feature is paramount to the trust in the system.\\n\\nWhile OP Labs has traditionally been responsible for audits, there are times when their audit framework doesn't match with the security priorities of the community. This contest represents the community filling this gap with a successful security engagement.\\n\\nThe results speak for themselves:\\n- 5 High severity vulnerabilities found, multiple of which would have required using the safeguards to freeze the bridge to secure funds\\n- 11 Medium severity issues, as well as numerous smaller fixes\\n- One of the main drivers of the Granite Network Upgrade, which majorly upgrades the security of OP Mainnet (and, eventually, the rest of the Superchain)\", 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': \"There are three groups who have benefitted most from this work:\\n\\n1) Users: While the safeguards on the bridge should be sufficient to protect funds, most users with large amounts of funds on Optimism would prefer that the contracts secure their funds and not need to rely on the Security Council. This contest helped resolve multiple vulnerabilities that would have required Security Council interference to keep funds safe.\\n\\n2) OP Token Holders: A Security Council override to freeze the bridge would have caused major damage to OP's reputation, and likely would have caused a major reduction in OP's token value.\\n\\n3) Superchain: The rest of the Superchain will be using these contracts, and may not have the diligence in safeguards that OP Mainnet has. Having more secure contracts keeps these chains safe.\", 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 'under-1m',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x78592f98adae5df9b8732474c80ec591ee3c034f128f43f702644473ccbfc40c',
    applicationId:
      '0x78592f98adae5df9b8732474c80ec591ee3c034f128f43f702644473ccbfc40c',
    projectId:
      '0xcd9dfcace81ae28b29b10c4ddf36bcb8db6d705cbb92e7d885e5b946a9f77910',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Security audits',
    impactStatement_subcategory:
      "['Security audits specifically on the OP Stack or its components.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'Fault Proofs security research',
    description:
      'Optimism initially launched with single-shot fraud proofs (now called fault proofs).  I audited the architecture and implementation, and performed extensive research on risks associated with fraud proofs.  In the course of this research I found many vulnerabilities and implemented PoC exploits to demonstrate them.  Optimism did not have a bounty program at the time of this audit so I submitted the results without asking for compensation.\n\nAfter coordinating the disclosure with the OP team, I disclosed my research, Optimistic Time Travel: https://medium.com/infinitism/optimistic-time-travel-6680567f1864\n\nThe results led to the conclusion that single shot fraud proofs are unsafe and should be replaced with interactive fraud proofs.  The vulnerable implementation was disabled.  The architecture was redesigned and interactive fault proofs were introduced in an upgrade earlier this year: https://gov.optimism.io/t/final-protocol-upgrade-7-fault-proofs/8161/1\n\nWhile the research was published in 2022, its impact happened in 2024 when optimism upgraded to the new and safer fault proofs architecture.  Hence I\'m submitting this security research in the OP stack research category "Security audits specifically on the OP Stack or its components".',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/4fc318f8-c806-4663-af90-75872fc29720.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/a725797c-f76a-4803-8a6e-942d32c678ca.png',
    project_socialLinks_website:
      "['https://medium.com/infinitism/optimistic-time-travel-6680567f1864']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter:
      'https://x.com/yoavw/status/1505581539081568261',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'The project discovered severe issues with the previous fraud proofs implementation.  It resulted in the vulnerable implementation getting deprecated, and led to developing a safer one: https://gov.optimism.io/t/final-protocol-upgrade-7-fault-proofs/8161/1\\n\\nThe project therefore contributed to the evolution of the OP stack, towards a more secure and decentralized network.', 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': \"All OP Stack users benefit from having a safe implementation of fault proofs.\\n- The vulnerable implementation would have put user funds at risk, as demonstrated in the article.\\n- Having no fault proofs would expose users to risks such as a sequencer bug resulting in irregular state changes, including unauthorized withdrawal to L1.\\n\\nAll OP users enjoy better security as a result of security research such as this project.\\n\\nThe project can't take credit for the extensive work done by the OP team to implement the new fault proofs implementation, but it contributed by showing what needs fixing and suggesting a way forward.\", 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 62112,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x78986f716f24bdb7fcf0118096f80d83e8bed1970f8c9800f4543addefb00044',
    applicationId:
      '0x78986f716f24bdb7fcf0118096f80d83e8bed1970f8c9800f4543addefb00044',
    projectId:
      '0x985a1ed485458d7c383c8b59a18856183197783883014c74b865468769436c52',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Security audits',
    impactStatement_subcategory:
      "['Security audits specifically on the OP Stack or its components.']",
    organization_name: 'Spearbit/Cantina Security Services',
    organization_description:
      'Incubated by Spearbit Labs, Cantina.xyz is a marketplace bringing together over 100 experienced security professionals and teams. We provide a wide range of code review and audit services to web3 clients, aiming to fortify the blockchain ecosystem. Our mission is to deliver top-tier security audits, continuous monitoring, advisory, and incident response services, ensuring organizations’ smart contracts and systems are thoroughly secured before deployment.\n\nWe have an established track record within the Optimism ecosystem, having successfully conducted multiple audits, including those for the Merkle Trie and Automation components. Our services align closely with Optimism’s goals by providing essential, high-quality security auditing and incident response solutions.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/1fba12f4-e663-47bf-92e5-63bb94c210c9.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/c8ac89b6-5f38-4aa1-8d43-5b797bdcacfb.png',
    socialLinks_website: "['https://spearbit.com/', 'http://cantina.xyz']",
    socialLinks_farcaster: [],
    socialLinks_twitter: 'https://x.com/SpearbitDAO',
    socialLinks_mirror: 'https://spearbit.mirror.xyz/',
    team: "['850761', '542384']",
    name: 'Cantina.xyz - OP Stack Audits',
    description:
      'Cantina.xyz is a marketplace incubated by Spearbit Labs, bringing together over 100 experienced security professionals and teams. We provide a wide range of code review and audit services to web3 clients, aiming to fortify the blockchain ecosystem. Our mission is to deliver top-tier security audits, continuous monitoring, advisory, and incident response services, ensuring organizations’ smart contracts and systems are thoroughly secured before deployment.\n\n\nWe have an established track record within the Optimism ecosystem, having successfully conducted multiple audits, including those for the OP Stack. Our services align closely with Optimism’s goals by providing essential, high-quality security auditing and incident response solutions.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/2214b43d-e761-4d05-a3e2-6a83128bab65.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/812335c7-28b8-48e0-8d55-b3ddda4e4e6e.png',
    project_socialLinks_website:
      "['https://cantina.xyz/', 'https://spearbit.com/']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://x.com/cantinaxyz',
    project_socialLinks_mirror: 'https://cantina.mirror.xyz/',
    pricingModel: 'pay_to_use',
    impactStatement_statement:
      "[{'answer': \"Cantina/Spearbit has advanced the development of the OP Stack by providing critical security audits and reviews to ensure the robustness and safety of its components. Our team has conducted multiple audits of the OP Stack, including security reviews of Optimism's EAS, which are crucial for cross-chain functionality and gas optimization. Through these audits, we have identified vulnerabilities, suggested optimizations, and collaborated with Optimism team to ensure that the OP Stack is secure and resilient.\\n\\nAdditionally, our continuous monitoring, advisory services, and incident response support help maintain the OP Stack's reliability, safeguarding its smart contracts and infrastructure.\\n\", 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': 'The primary beneficiaries of our work on the OP Stack have been developers and projects building within the Optimism ecosystem, as well as the broader Optimism community. By conducting thorough security audits, we have ensured that developers can deploy secure smart contracts, reducing the risk of exploits and vulnerabilities.\\n\\nProjects like Omni-x and Decent.xyz, which rely on cross-chain capabilities and transaction efficiency, have directly benefited from our security reviews, enabling them to operate safely and scale their solutions across multiple chains.\\n\\nOur work has enhanced trust and reliability in the OP Stack, making it safer for both developers and users.', 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: 'token-house-mission',
    grant_1_link:
      'https://app.charmverse.io/op-grants/plasmada-translation-hub-1014033406866528',
    grant_1_amount: 15000,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x78d76c8cd58f4334478c84da3080a9bd721c8463b1d3ff6d8f838821637419bb',
    applicationId:
      '0x78d76c8cd58f4334478c84da3080a9bd721c8463b1d3ff6d8f838821637419bb',
    projectId:
      '0xbcd609d06165ef58ca295b05c1c5a7bcbd500cc673f3fc4cbcb7b10774890b4a',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Security audits',
    impactStatement_subcategory:
      "['Security audits specifically on the OP Stack or its components.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'xuwinnie.review',
    description: 'Security Researcher.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/23976744-db3b-49b9-b5d4-3b629a28dd3a.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/f7905adc-4525-4ea2-bc64-925690c7069c.png',
    project_socialLinks_website: "['xuwinnie.review']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://x.com/xuwinniexu',
    project_socialLinks_mirror: '',
    pricingModel: 'freemium',
    impactStatement_statement:
      "[{'answer': '- Performed a security audit on the OP Stack Fault Proof implementation through Code4rena.\\n- Identified *C4 H-01: Invalid DISPUTED_L2_BLOCK_NUMBER is passed to VM.* This bug enables an attacker to counter a valid output claim by providing a trace containing one block after the original claim.\\n- One of the two High Severity issues to be fixed in the upcoming [Granite Network Upgrade](https://gov.optimism.io/t/upgrade-proposal-10-granite-network-upgrade/8733), and the only directly exploitable one.\\n- The first and the only reasercher to identify this issue during a series of third-party security audits.\\n', 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': 'Protocols & Users on OP Stack, Fault Proof Game participants. \\n- If this bug remains unfixed, valid state transition could be disputed, and chain-level liveness issue could occur.\\n- Malicious actor can steal the bond from honest dispute game participants.', 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 21600,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x7a43c1fa89ef5c1230765dd34d7d27c29f9ccf3c9853d8523bb5afda7af05d48',
    applicationId:
      '0x7a43c1fa89ef5c1230765dd34d7d27c29f9ccf3c9853d8523bb5afda7af05d48',
    projectId:
      '0xbe557cceb3d7b0d8827a4e62066c9ea53eb1f2da775437aa5c78c193735e872e',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Security audits',
    impactStatement_subcategory:
      "['Security audits specifically on the OP Stack or its components.']",
    organization_name: 'Code4rena',
    organization_description:
      'Code4rena invented the competitive audit, we’ve run 400+ of them, and we’re obsessed with delivering highest security outcomes.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/ff3072d8-6d76-456e-8f16-b2ea5f7ea961.png',
    organizationCoverImageUrl: '',
    socialLinks_website: "['https://code4rena.com']",
    socialLinks_farcaster: "['https://warpcast.com/code4rena']",
    socialLinks_twitter: 'https://x.com/code4rena',
    socialLinks_mirror: '',
    team: "['18354', '19716']",
    name: 'Code4rena',
    description:
      'Code4rena invented the competitive audit, we’ve run 400+ of them, and we’re obsessed with delivering highest security outcomes.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/953058ce-5e96-4711-b9df-afa02b1a3fca.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/1cf54e6c-50be-43c1-bce2-edc112c41c97.png',
    project_socialLinks_website: "['https://code4rena.com']",
    project_socialLinks_farcaster: "['https://warpcast.com/code4rena']",
    project_socialLinks_twitter: 'https://x.com/code4rena',
    project_socialLinks_mirror: '',
    pricingModel: 'freemium',
    impactStatement_statement:
      "[{'answer': 'In May 2024, Zach Obront contacted us regarding an opportunity to help secure Optimism fault proofs.\\n\\nWe\\'ve been long been interested in helping secure Optimism, so we proposed a unique format aimed to maximize participation of top talent:\\n\\n- Anyone could compete to gain a share of a pool of 200k $OP.\\n- Four elite security researchers vie for the 200k $OP _plus_ an $80k side pool.\\n- Anyone who beat the elites would gain the title \"Dark Horse\" and earn bonus awards.\\n\\nIn the spirit of public goods:\\n\\n- Code4rena waived our fees for these services, which would have been 60k $OP + $24k USDC.\\n- We fundraised the $80k USDC side pool with generous support from Base, Mode, Frax, Conduit, PoolTogether, and Metis.\\n- We heavily promoted the competition on social media and personally.\\n\\nThe end result delivered considerable value: 5 high severity and 11 medium severity issues, as can be seen in the [audit report detailing the community’s findings](https://code4rena.com/reports/2024-07-optimism).\\n', 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': 'All Superchain users and builders benefit from a more secure stack.\\n\\nFurther, the ecosystem will benefit long-term from the precedent set by this approach in its ability to maximize the attention of top security researchers in a cost-effective way while securing public goods.', 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x7b1045ef17287fe42e987ccf2960f710cbe2f6d55c1237f260c7c7801dd9c34c',
    applicationId:
      '0x7b1045ef17287fe42e987ccf2960f710cbe2f6d55c1237f260c7c7801dd9c34c',
    projectId:
      '0x81af86360a8e964cc907a5689a62e94231c7e42e05f49c0586716975d72e2e2e',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Security audits',
    impactStatement_subcategory:
      "['Security audits specifically on the OP Stack or its components.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'Sherlock',
    description:
      "Sherlock's audit process is revolutionary in the space, providing protocols with the focus, collaboration, and assurance of a traditional audit, alongside the breadth of security expert participation from an audit contest. Simply put, Sherlock finds more critical/high-severity bugs in less time than other audits. In addition, Sherlock is the only audit provider to offer bug bounty and exploit coverage to all customers.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/15c503f7-2dfe-4e10-a510-59ffcd8d490d.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/f3f1218f-c0ab-4307-bc4d-f8785b54adbf.png',
    project_socialLinks_website: "['https://www.sherlock.xyz/']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://x.com/sherlockdefi',
    project_socialLinks_mirror: '',
    pricingModel: 'pay_to_use',
    impactStatement_statement:
      "[{'answer': \"Sherlock has significantly advanced the development of the OP Stack through three dedicated audit contests focused on critical components of the Optimism infrastructure. Specifically, Sherlock conducted two separate contests for the Bedrock update, which plays a pivotal role in enhancing the scalability and efficiency of the OP Stack. In the first contest, Sherlock's security experts identified 13 Medium and 3 High vulnerabilities. The second contest further uncovered 6 Medium and 3 High vulnerabilities. By identifying and helping to remediate these vulnerabilities, Sherlock has ensured that the Bedrock update is robust, secure, and ready for deployment, ultimately contributing to the stability and security of the entire OP Stack. Additionally, Sherlock ran an audit contest for Optimism Fault Proofs, a critical element of the Optimism architecture, further securing the OP Stack against potential exploits.\", 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': 'The entire Optimism ecosystem has benefited from Sherlock\\'s rigorous audit processes, with the most significant impact felt by any Layer 2 (L2) solution within the Superchain. By securing the Bedrock update, Sherlock has indirectly ensured the security of every L2 built upon this foundation. Essentially, our audits have vetted the very \"bricks\" from which these L2s are constructed, providing a secure base that underpins the growth and stability of the broader Optimism ecosystem. This has not only reduced the risk of vulnerabilities across the ecosystem but also enhanced the overall trust and confidence in the security of projects leveraging the OP Stack.', 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 141650.27,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x7ee54d5d8514a8be9172e4ce0dfb54cc3eba6cf57c88b85e76262dc307178832',
    applicationId:
      '0x7ee54d5d8514a8be9172e4ce0dfb54cc3eba6cf57c88b85e76262dc307178832',
    projectId:
      '0x5492d1d4695dcf3cce3c31eb9883535d34da6c85a4978b384c0ecb0f3b17fbe9',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Security audits',
    impactStatement_subcategory:
      "['Security audits specifically on the OP Stack or its components.']",
    organization_name: 'Immunefi',
    organization_description:
      "Web3's leading bug bounty platform, protecting $190 billion in user funds",
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/6b654c3a-cebc-4a47-a8c8-cb6fb5e5bb50.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/ffe1f4b9-e98a-4f4f-ab1d-0b5d598137ec.png',
    socialLinks_website: "['https://immunefi.com/']",
    socialLinks_farcaster: [],
    socialLinks_twitter: '@immunefi',
    socialLinks_mirror: '',
    team: "['512390']",
    name: 'Immunefi Bug Bounty Platform',
    description:
      "Immunefi is Web3's leading bug bounty and crowd security platform, protecting $190 billion in user funds. We're currently partnered with 24+ Optimism protocols and seek to make Web3 safer for builders and users alike. Immunefi has partnered with Optimism to offer matching funds for payouts to white hats that uncover high and critical-level bugs on OP protocols like Velodrome, Synthetix, and Pika Protocol. One of Immunefi's milestone goals is to provide security coverage for >50% of the OP ecosystem.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/2d5fe6f2-d998-446b-9357-5e087c229fb6.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/b791f4a0-279f-4389-b027-b80e9ba78ff0.png',
    project_socialLinks_website: "['https://immunefi.com/']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://x.com/immunefi',
    project_socialLinks_mirror: '',
    pricingModel: 'pay_to_use',
    impactStatement_statement:
      "[{'answer': \"Immunefi has advanced the development of the OP Stack by operating bug bounty programs for various OP protocols including Velodrome, Synthetix, Pika Protocol, and many more. During the period from 10/1/2023-7/31/2024, security researchers on Immunefi's platform uncovered several bugs at various threat levels on OP projects, including Highs and Criticals. As the recipient of a mission grant, Immunefi used funds provided by OP to create a matching payout program, meaning OP protocols that opted in to the program could have their payouts to security researchers matched by OP. This has resulted in a reduction of operating costs to OP protocols, strengthened code, growth in the security researcher community focused on OP, and increased education of best security practices in web3. Immunefi publishes (with customer consent) reports after bugs are identified, that are available for all builders in the OP ecosystem to leverage when building security-minded projects. \", 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': \"Specifically, Velodrome has benefited the most as they received approximately 57,000 OP tokens to pass to security researchers that uncovered 5 critical/high bugs as part of the ecosystem-focused program. Pika Protocol is another beneficiary, as they received 5,772.3 tokens to subsidize 5 critical/high valid bug payouts. Additional OP projects that have live bug bounty programs on Immunefi include: Extra Finance, Perpetual, Beethoven X, dHedge, Yearn Finance, Idle, Aevo, Exactly, Vesper and Metronome Synth. In total there are ~24 OP-related projects protected by Immunefi's crowd security bug bounty platform. These protocols mutually benefit from Immunefi's work on the OP stack because results from valid bug reports are made available to them, enabling them to learn of potential attack vectors missed during traditional audits. Immunefi hopes to continue to assist smaller OP projects by partially subsidizing their critical and high bug bounty payouts.\", 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x7ffef9193c8275ba48b509796eb678d7cfecc4851d54ceae1cc3d688f35658ad',
    applicationId:
      '0x7ffef9193c8275ba48b509796eb678d7cfecc4851d54ceae1cc3d688f35658ad',
    projectId:
      '0x4d926f7d302cbb95fe37487892a49b0b6240601e3a84023f8a1518678d6e6dbe',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Security audits',
    impactStatement_subcategory:
      "['Security audits specifically on the OP Stack or its components.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'Cryptofuzz',
    description:
      'Differential fuzzing to find bugs in cryptographic libraries.\n\nHundreds of bugs found in major cryptographic libraries. Runs 24/7 on Google OSS-Fuzz.\n\nBug list: https://github.com/guidovranken/cryptofuzz?tab=readme-ov-file#bugs-found-by-cryptofuzz\nLibrary support: https://github.com/guidovranken/cryptofuzz/tree/master/modules',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/6215ed53-5260-4d95-8d45-7978686135cd.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/f5499378-c7bf-480d-8fbc-6ef4ec5d0856.png',
    project_socialLinks_website:
      "['https://github.com/guidovranken/cryptofuzz']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': '24/7 differential fuzzing of libsecp256k1, gnark, blst, golang cryptography and integer arithmetic. No relevant bugs were found within this specific time period, though previous findings include:\\n\\n- Various blst bugs (used by kzg) (e.g. https://github.com/supranational/blst/security/advisories/GHSA-x279-68rr-jp4p, https://github.com/search?q=repo%3Asupranational%2Fblst+vranken&type=commits)\\n- Two Go P256 scalar multiplication bugs (used by the P256 precompile) (CVE-2023-24532, Golang Github issue 60717, CVE-2022-23806)', 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': \"Every direct or indirect user of the OP stack has benefited from my work on the OP Stack. This broad impact stems from the nature of my research, which focuses on validating the security properties of components that are fundamental to the OP stack's operation.\", 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x5a41dd6db9348adfcd8bb0bb0a391a44ac7797094183d536edc8d5677aa985fa',
    applicationId:
      '0x5a41dd6db9348adfcd8bb0bb0a391a44ac7797094183d536edc8d5677aa985fa',
    projectId:
      '0x842f92e1a555fdbc6f0be1640997d1a6f6a96af3c19b5a035b649d806608ad19',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Work on core components of the OP Stack',
    impactStatement_subcategory:
      "['Research or development that introduces new features, improvements, or capabilities to the OP Stack.', 'Work on core components of the OP Stack, including client implementations, modules, and modifications.']",
    organization_name: 'Test in Prod (soon to be Sunnyside Labs)',
    organization_description:
      "Test in Prod is a core development team of Optimism Collective. Test in Prod will soon to be rebranded to 'Sunnyside Labs'.",
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/5354c3c3-da28-4097-bb82-b89b630a3d3e.png',
    organizationCoverImageUrl: '',
    socialLinks_website: "['testinprod.io', 'github.com/testinprod-io']",
    socialLinks_farcaster: [],
    socialLinks_twitter: 'https://x.com/testinprod_io',
    socialLinks_mirror: 'https://mirror.xyz/testinprod-io.eth',
    team: "['811328', '849695', '284703', '849643', '849704']",
    name: 'Delta Network Upgrade',
    description:
      'Delta is the second OP Stack Network Upgrade that activates Span Batches, which reduces up to 97% of the fixed L1 cost of OP Chains. With the initial idea of Protolambda, Test in Prod built & deployed the Delta Network Upgrade across all OP Chain Mainnets. Thanks to Delta, we could see more OP Chains in production, as it reduced the minimal annual operating cost from 165 ETH to 5 ETH (97%). Delta is effective for low-active chains, but active chains, such as Zora, are saving up to 30% of fixed L1 costs with Span Batches.\n\nFor the Superchain’s success, reducing the fixed on-chain cost is important. Chain Governors have to take risks for the fixed costs, and it’s difficult to launch an OP Chain if it’s unbearable. Since the deployment of Delta in February 2024, we saw a fast growth in the number of OP Chains, and Delta was one of the big enablers because the risk of Chain Governor went down from 165 ETH/year to 5 ETH/year.\n\nDelta was also a meaningful upgrade as it was the first network upgrade written by the external core dev team from OP Labs, showing that the OP Stack protocol development started to get decentralized.\n\nSince Retro Funding round 3, Test in Prod has worked on the following:\n- Fix bugs in the Span Batches code.\n- Conduct failure mode analysis & plan out the contingency plans with OP Labs.\n- Deploy to Sepolia, monitor, and fix codes.\n- Write & post a Governance Proposal for upgrades.\n- Deploy to all Superchain Mainnets & monitoring.\n\n---\nHere are the commentaries for Delta Network Upgrade:\n\nAndrew (CEO of Conduit): Delta lowered the barriers for Chain Governors by lowering the fixed costs. It made it easier to onboard Chain Governors, and existing customers were happy about the savings. Appreciate their work!',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/a9c34ac0-aeee-441b-baf2-7c2db4147068.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/62e367cb-373a-46f7-a1ca-39ac8a50262c.png',
    project_socialLinks_website:
      "['https://gov.optimism.io/t/final-upgrade-proposal-3-delta-network-upgrade/7310', 'https://testinprod.io']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://x.com/testinprod_io',
    project_socialLinks_mirror: 'https://mirror.xyz/testinprod-io.eth',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'Delta (Span Batches) reduces up to 97% of the fixed L1 cost of OP Chains. With the initial idea of Protolambda, Test in Prod built & deployed the Delta Network Upgrade across all OP Chain Mainnets. Thanks to Delta, we could see more OP Chains in production, as it reduced the minimal annual operating cost from 165 ETH to 5 ETH (97%).\\n\\nDelta is also a meaningful upgrade as it was the first network upgrade written by the external core dev team from OP Labs, showing that the OP Stack protocol development started to get decentralized.', 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': 'Delta benefits the Chain Governors the most, especially prospective governors or those who govern low-active chains. Chain Governors have to take risks for the fixed costs when they deploy an OP Chain, and it’s difficult to launch one if it’s unbearable. Since the deployment of Delta in February 2024, we saw a fast growth in the number of OP Chains, and Delta was one of the significant enablers because the risk of Chain Governor went down from 165 ETH/year to 5 ETH/year.\\n\\nDelta is most effective for low-active chains, but active chains, such as Zora, save up to 30% of fixed L1 costs with Span Batches.\\n\\n---\\nHere are the commentaries for Delta Network Upgrade:\\n\\nAndrew (CEO of Conduit): Delta lowered the barriers for Chain Governors by lowering the fixed costs. It made it easier to onboard Chain Governors, and existing customers were happy about the savings. Appreciate their work!', 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x8b28b3226a7135786daed49dd67aac6c97a29c768ea0337c54bbcfb4d9388a07',
    applicationId:
      '0x8b28b3226a7135786daed49dd67aac6c97a29c768ea0337c54bbcfb4d9388a07',
    projectId:
      '0xebc40a8bfaf3b8103e2b5da3a8c89b97daf6bd8b2096b847ef686dd3245ae960',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Work on core components of the OP Stack',
    impactStatement_subcategory:
      "['Work on core components of the OP Stack, including client implementations, modules, and modifications.', 'Research or development that introduces new features, improvements, or capabilities to the OP Stack.', 'Security audits specifically on the OP Stack or its components.']",
    organization_name: 'Runtime Verification',
    organization_description: '',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/44b30b3b-2bce-456e-be10-a04eabce257d.png',
    organizationCoverImageUrl: '',
    socialLinks_website: [],
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['465226']",
    name: "Formal Verification of Optimism's L1 pausability mechanism",
    description:
      'Runtime Verification has contributed to the security of OP Stack through formal verification proofs of the L1 pausability mechanism. Our open-source formal verification tool, Kontrol, has been successfully integrated into the Optimism CI to continuously ensure that the pausability mechanism remains intact as the code evolves. \n\nThe proofs with their respective documentation can be found at https://github.com/ethereum-optimism/optimism/tree/develop/packages/contracts-bedrock/test/kontrol. \n\nKontrol is an open source, free-to-use tool, which means that the existing and future proofs can be maintained by the Optimism team. At the same time, Kontrol is actively maintained and improved by our team at Runtime Verification, thus ensuring constant performance and user experience enhancements, which are regularly upstreamed to the Optimism monorepo.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/ae7b1252-7b56-4733-81c6-b7303737ce53.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/6f870785-6197-4eb6-8b53-3f6ecfb38eab.png',
    project_socialLinks_website: "['https://runtimeverification.com/']",
    project_socialLinks_farcaster: "['https://warpcast.com/rv-inc']",
    project_socialLinks_twitter: 'https://x.com/rv_inc',
    project_socialLinks_mirror: '',
    pricingModel: 'freemium',
    impactStatement_statement:
      "[{'answer': \"Our project has advanced the OP Stack development by integrating Kontrol, a formal verification tool, into Optimism's CI pipeline. This provides continuous, automated verification of critical properties, such as the L1 pausability mechanism, ensuring the security of the OP Stack as it evolves. By embedding formal verification into the process, developers can detect vulnerabilities early, reducing security risks and improving resilience. This strengthens security while accelerating development and deployment. Additionally, Kontrol updates in Optimism CI are regularly upstreamed (PRs #10159 and #10953). We've also offloaded Kontrol computations to our servers, easing the burden on the OP Labs dev team (PR #11015).\\n\\n\\n\\n\\n\\n\", 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': 'The primary beneficiaries of our work are the developers and projects building on the Superchain, OP Labs, and the broader Optimism community. By integrating Kontrol into the CI pipeline, we’ve provided a continuous, automated layer of security that verifies the correctness of critical properties as the code evolves. OP Labs, in particular, has benefited from the increased confidence in the security and reliability of the OP Stack, allowing them to focus on innovation without compromising safety. Performance and UX improvements implemented during and after the engagement allow Optimism developers to implement and maintain formal verification proofs independently of RV. In addition, setting up Kontrol proofs helped identify a bug in Foundry (see https://github.com/foundry-rs/foundry/issues/7603), benefitting a broader Ethereum developer community.  ', 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: 'token-house-mission',
    grant_1_link:
      'https://app.charmverse.io/op-grants/redprint-toolkit-an-interactive-code-generator-and-a-dev-framework-to-modify-deploy-opstack-s-contracts-9499729065142495',
    grant_1_amount: 38500,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x8ce52931f5528de3a378ae58d1281083744b62b47dff98fcd71b54434fa840b5',
    applicationId:
      '0x8ce52931f5528de3a378ae58d1281083744b62b47dff98fcd71b54434fa840b5',
    projectId:
      '0xc879d4a2a344a4027ee8abd520d65afdfe1300b6f080b223fafcebdf5640c218',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Work on core components of the OP Stack',
    impactStatement_subcategory:
      "['Work on core components of the OP Stack, including client implementations, modules, and modifications.']",
    organization_name: 'Rentality',
    organization_description:
      'Rentality is an innovative project aimed at tokenizing real assets – cars. We transformed the car rental business process from web2 to web3',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/500276b5-67df-434d-a96b-56b00ebbb81c.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/c6d3c01f-ba67-4f71-ab5e-2eea8e6759ee.png',
    socialLinks_website:
      "['https://app.rentality.xyz/', 'https://rentality.xyz/']",
    socialLinks_farcaster: "['https://warpcast.com/rentality']",
    socialLinks_twitter: 'https://x.com/Rentality_Info',
    socialLinks_mirror:
      'https://mirror.xyz/0x263660F0ab0014e956d42f85DccD918bBa2Df587',
    team: "['631453']",
    name: 'Rentality',
    description: 'Transforming the future of car rentals with blockchain',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/c6b7ce00-ff3c-4bbb-90a1-6cce594896e3.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/ef7d6609-1026-4387-b1f4-9ca108fc4c1b.png',
    project_socialLinks_website: "['https://app.rentality.xyz/']",
    project_socialLinks_farcaster: "['https://warpcast.com/rentality']",
    project_socialLinks_twitter: 'https://x.com/Rentality_Info',
    project_socialLinks_mirror:
      'https://mirror.xyz/0x263660F0ab0014e956d42f85DccD918bBa2Df587',
    pricingModel: 'freemium',
    impactStatement_statement:
      "[{'answer': 'We believe that our project can make a significant contribution to the OP blockchain ecosystem. We estimate that in 3 months after MVP we will have around 1,500 active users of the service and over 16,000 transactions per month. We will attract more than 80,000 customers who will make more than 2,000,000 transactions every month by the end of 2027, we plan to grow by 40% per month. \\nWe plan to actively engage the community to increase the TVL of our platform and blockchain in the next release. Our strategy involves raising a minimum of 5 million from the community. These funds will be directed to the mass purchase of cars. We believe that group investment is a more affordable and efficient way to get a car. For example, one person cannot always afford to buy a car for 100,000, but a thousand people united by our service can easily collect the required amount.', 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': 'The web3 community lacks quality services, which are usual for web2. Rentality is a project from the direction of RWA (Real World Assets), which offers car rental and tokenization services. Our experience allows us to build a new trend in web3 - the transformation of RWS (Real Word Services) services, which will later become a benchmark for the entire web3 direction. The entire web3 community gets access to the convenient services they are usually using web2, thereby bringing web3 closer to mass adoption. We eliminate intermediaries between the guest and the host, creating a fair price for the community.\\nExample\\nWhen booking a car on web2, both the guest and the host pay for the services and commissions of various intermediaries, from Google and financial institutions to Turo, which operates with an inefficient monopoly structure. These commissions significantly affect the price of the product. ', 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 89441.36,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x8d73a6f4342f92358b4a46e90336ce2e858d844fc78d3ca5d46f94ac09757918',
    applicationId:
      '0x8d73a6f4342f92358b4a46e90336ce2e858d844fc78d3ca5d46f94ac09757918',
    projectId:
      '0xb2d109759fe14e11ac5cc100ab6006321ebdd7ffdefbd2efac93a002105f8e92',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Work on core components of the OP Stack',
    impactStatement_subcategory:
      "['Work on core components of the OP Stack, including client implementations, modules, and modifications.']",
    organization_name: 'optimism-java',
    organization_description:
      '# Introduction\nWe continue to build open source public goods to help the Ethereum and Optimism community get better and better.\n\n## Our Works\nWe have currently developed two important components of core OP Stack protocol:\n\n- [Hildr](https://github.com/optimism-java/hildr) is an optimism rollup node written in Java.\n\n- [Op-besu](https://github.com/optimism-java/op-besu) is an optimism execution client written in Java, a fork of [Besu](https://github.com/hyperledger/besu).\n\nIn addition, we have also developed OP Stack related tools.\n\n- [Blob-archiver-rs](https://github.com/optimism-java/blob-archiver-rs) is a service to archive and allow querying of all historical blobs from the beacon chain written in Rust.\n\n- [Superproof](https://github.com/optimism-java/dispute-explorer-frontend) is a fault proof explorer to visualize dispute game progress and statistics.\n\nMeanwhile, we also contributed in other community projects.\n\n- [Shisui](https://github.com/optimism-java/shisui) is an ethereum portal network client written in Go.\n\n- [Mev-share-java](https://github.com/optimism-java/mev-share-java) is a Java client library for Flashbots MEV-share Matchmaker.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/9b5ba58e-c9ff-4b21-8b4c-4ab561b27b6b.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/b849eed4-c5b3-484e-b376-db756fb9e697.png',
    socialLinks_website: "['https://optimism-java.github.io']",
    socialLinks_farcaster: [],
    socialLinks_twitter: 'https://x.com/optimism_java',
    socialLinks_mirror: '',
    team: "['754190', '451368', '193400']",
    name: 'hildr',
    description:
      'Hildr is an OP Stack consensus client written in Java 21. \n\nWe are OptimismJ who continue to build open source public goods to help the Ethereum and Optimism community get better and better. Our main work is on OP Stack core protocols and ecosystem tools and libraries. You can view more detailed information on our official [website](https://optimism-java.github.io) .',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/d304db21-cc7e-4236-8a63-a2a5161c4aee.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/2d30ac8c-806b-4332-b596-c8b5faadc032.png',
    project_socialLinks_website:
      "['https://optimism-java.github.io/hildr-docs']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://x.com/optimism_java',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': '### The Importance of Client Diversity\\nThe best explanation is [here](https://clientdiversity.org/)\\n\\n### The impact of hildr\\nOur client, Hildr, is currently the only continuously maintained alternative consensus client and has been upgraded to the latest Granite hardfork of the OP Stack. We continue to promote the [decentralized development of OP Stack](https://gov.optimism.io/t/collective-intents-season-5/6883#intent-1-progress-towards-technical-decentralization-2). Similar to the approach taken by Consensys within the Ethereum community, we provide Java infrastructure in the OP Stack community to facilitate the use and integration of OP Stack for chain operators, dApp companies, developers, and end users utilizing Java technology.', 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': '- All users utilizing Java infrastructure, such as centralized exchanges (CEX), decentralized applications (Dapp), RaaS providers, and RPC providers, can run our client, Hildr, to utilize and integrate the OP Stack. \\n- In addition to supporting the OP mainnet and the Sepolia testnet, our client, Hildr, also accommodates other members of the superchain. Users from all superchain member chains can obtain the state of the chain by running their own Hildr client in a trustless manner. \\n- Our client has been integrated into the OP Stack interoperability test tool project, which can be found [here](https://github.com/ethpandaops/optimism-package). All developers who engage with or study the OP Stack can leverage our client, Hildr, within this tool to conduct their tests.', 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 198.758,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x8f96355ae6573c6c606e2f5a71155344cc42afc853adc4f84933dc7cd00b2e9f',
    applicationId:
      '0x8f96355ae6573c6c606e2f5a71155344cc42afc853adc4f84933dc7cd00b2e9f',
    projectId:
      '0xd2c2e6a44a7e28aaa9e3f324ac6f0bd963501250af6be842ea8e036b60fc1e08',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Work on core components of the OP Stack',
    impactStatement_subcategory:
      "['Work on core components of the OP Stack, including client implementations, modules, and modifications.']",
    organization_name: 'optimism-java',
    organization_description:
      '# Introduction\nWe continue to build open source public goods to help the Ethereum and Optimism community get better and better.\n\n## Our Works\nWe have currently developed two important components of core OP Stack protocol:\n\n- [Hildr](https://github.com/optimism-java/hildr) is an optimism rollup node written in Java.\n\n- [Op-besu](https://github.com/optimism-java/op-besu) is an optimism execution client written in Java, a fork of [Besu](https://github.com/hyperledger/besu).\n\nIn addition, we have also developed OP Stack related tools.\n\n- [Blob-archiver-rs](https://github.com/optimism-java/blob-archiver-rs) is a service to archive and allow querying of all historical blobs from the beacon chain written in Rust.\n\n- [Superproof](https://github.com/optimism-java/dispute-explorer-frontend) is a fault proof explorer to visualize dispute game progress and statistics.\n\nMeanwhile, we also contributed in other community projects.\n\n- [Shisui](https://github.com/optimism-java/shisui) is an ethereum portal network client written in Go.\n\n- [Mev-share-java](https://github.com/optimism-java/mev-share-java) is a Java client library for Flashbots MEV-share Matchmaker.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/9b5ba58e-c9ff-4b21-8b4c-4ab561b27b6b.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/b849eed4-c5b3-484e-b376-db756fb9e697.png',
    socialLinks_website: "['https://optimism-java.github.io']",
    socialLinks_farcaster: [],
    socialLinks_twitter: 'https://x.com/optimism_java',
    socialLinks_mirror: '',
    team: "['754190', '451368', '193400']",
    name: 'op-besu',
    description:
      'Op-besu is an OP Stack execution client written in Java 21. \n\nWe are OptimismJ who continue to build open source public goods to help the Ethereum and Optimism community get better and better. Our main work is on OP Stack core protocols and ecosystem tools and libraries. You can view more detailed information on our official [website](https://optimism-java.github.io) .',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/500dc76f-858e-4de3-985d-81056e23780b.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/c8255b9c-d41f-4d6b-8fa3-8c33194d752d.png',
    project_socialLinks_website:
      "['https://optimism-java.github.io/op-besu-docs']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://x.com/optimism_java',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': '### The Importance of Client Diversity\\nThe best explanation is [here](https://clientdiversity.org/)\\n\\n### The impact of op-besu\\nOur client, op-besu, is currently a continuously maintained alternative execution client that has been upgraded to the latest Granite hard fork of the OP Stack. We continue to promote the [decentralized development of OP Stack](https://gov.optimism.io/t/collective-intents-season-5/6883#intent-1-progress-towards-technical-decentralization-2). Similar to the initiatives undertaken by ConsenSys within the Ethereum community, we provide Java infrastructure in the OP Stack community to assist chain operators, dApp companies, developers, and end users who utilize Java technology in seamlessly using and integrating with OP Stack.', 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': '- All users utilizing Java infrastructure, such as centralized exchanges (CEX), decentralized applications (Dapp), RaaS providers, and RPC providers, can run our client, op-besu, to utilize and integrate the OP Stack. \\n- In addition to supporting the OP Sepolia testnet, our client, op-besu, also accommodates other members of the superchain. Users from all superchain member chains can obtain the state of the chain by running their own op-besu client in a trustless manner. \\n- Our client has been integrated into the OP Stack interoperability test tool project, which can be found [here](https://github.com/ethpandaops/optimism-package). All developers who engage with or study the OP Stack can leverage our client, op-besu, within this tool to conduct their tests.', 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x902bf20692598d573b33cf7d5006c2c5e488ecc7fbe4b972d67846e9fde5e65a',
    applicationId:
      '0x902bf20692598d573b33cf7d5006c2c5e488ecc7fbe4b972d67846e9fde5e65a',
    projectId:
      '0xf00518dc6abc147a7c46675cb76946afdd16868d7d4ab4689df0c48467158c26',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Work on core components of the OP Stack',
    impactStatement_subcategory:
      "['Work on core components of the OP Stack, including client implementations, modules, and modifications.']",
    organization_name: 'optimism-java',
    organization_description:
      '# Introduction\nWe continue to build open source public goods to help the Ethereum and Optimism community get better and better.\n\n## Our Works\nWe have currently developed two important components of core OP Stack protocol:\n\n- [Hildr](https://github.com/optimism-java/hildr) is an optimism rollup node written in Java.\n\n- [Op-besu](https://github.com/optimism-java/op-besu) is an optimism execution client written in Java, a fork of [Besu](https://github.com/hyperledger/besu).\n\nIn addition, we have also developed OP Stack related tools.\n\n- [Blob-archiver-rs](https://github.com/optimism-java/blob-archiver-rs) is a service to archive and allow querying of all historical blobs from the beacon chain written in Rust.\n\n- [Superproof](https://github.com/optimism-java/dispute-explorer-frontend) is a fault proof explorer to visualize dispute game progress and statistics.\n\nMeanwhile, we also contributed in other community projects.\n\n- [Shisui](https://github.com/optimism-java/shisui) is an ethereum portal network client written in Go.\n\n- [Mev-share-java](https://github.com/optimism-java/mev-share-java) is a Java client library for Flashbots MEV-share Matchmaker.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/9b5ba58e-c9ff-4b21-8b4c-4ab561b27b6b.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/b849eed4-c5b3-484e-b376-db756fb9e697.png',
    socialLinks_website: "['https://optimism-java.github.io']",
    socialLinks_farcaster: [],
    socialLinks_twitter: 'https://x.com/optimism_java',
    socialLinks_mirror: '',
    team: "['754190', '451368', '193400']",
    name: 'blob-archiver-rs',
    description:
      'Blob-archiver-rs is a service to archive and allow querying of all historical blobs from the beacon chain written in Rust.\n\nWe are OptimismJ who continue to build open source public goods to help the Ethereum and Optimism community get better and better. Our main work is on OP Stack core protocols and ecosystem tools and libraries. You can view more detailed information on our official website https://optimism-java.github.io .',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/c42c7205-45f2-4541-a522-9575e70d19ae.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/648ed09d-2f51-4800-9d18-8d1bfda30f75.png',
    project_socialLinks_website:
      "['https://optimism-java.github.io/blob-archiver-rs-docs']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://x.com/optimism_java',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'Due to the fact that Blobs are retained on the mainnet for only 18 days, long-term Blob persistent storage is a crucial element for Rollup. At present, the OP Stack offers specialized support for a [Blob archiver](https://docs.optimism.io/builders/node-operators/management/blobs#configure-a-blob-archiver-archive-nodes), while Base provides a Go [implementation](https://github.com/base-org/blob-archiver) of this service. The Blob-archiver-rs is designed in accordance with the OP Stack and fully replicates the functions of the Go implementation. Currently, it supports both local file storage and AWS S3.', 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': '- All users utilizing Rust infrastructure, such as centralized exchanges (CEX), decentralized applications (Dapp), RaaS providers, and RPC providers, can run blob-archiver-rs, to utilize and integrate the OP Stack. \\n- All Superchain members using OP Stack, as well as chains that fork OP Stack, can use the Blob-archiver-rs service to store Blob data for a long time.', 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: 'token-house-mission',
    grant_1_link:
      'https://app.charmverse.io/op-grants/generalized-mempool-encryption-interface-for-op-stack-chains-and-deployment-of-a-mempool-encrypted-op-stack-testnet-using-threshold-encryption-8763406955381605',
    grant_1_amount: 50000,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x907ab6a3f6b6e724797e52051ac04eb23025462f8d06866ee541c90681e0ec17',
    applicationId:
      '0x907ab6a3f6b6e724797e52051ac04eb23025462f8d06866ee541c90681e0ec17',
    projectId:
      '0xa88844cea135382e3484e39c3172033437121b35ca0bc8b10b9b8253984876b5',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Work on core components of the OP Stack',
    impactStatement_subcategory:
      "['Work on core components of the OP Stack, including client implementations, modules, and modifications.']",
    organization_name: 'brainbot/Shutter',
    organization_description: '',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/d7e880ed-d48a-4329-97a9-75f21d815def.png',
    organizationCoverImageUrl: '',
    socialLinks_website: [],
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['316218', '358280']",
    name: 'Deployment of the Shutterized Optimism (SHOP) testnet.',
    description:
      "Shutter is a threshold encryption protocol with a wide variety of applications, including: malicious MEV prevention, censorship resistance, voting integrity, and gaming fairness. Most relevant for the OP Stack ecosystem is that we have built and deployed a dedicated OP Stack L2 testnet Shutterized Optimism (SHOP) with an in-protocol threshold encrypted mempool and are looking into generalizing this solution to more advanced cryptography primitives as well as deploying it across OP Stack networks.\n\nThe Shutterized Optimism testnet L2 launch on Sepolia marks the availability of a Shutterized encrypted mempool for the OP Stack, aiming to prevent front-running and provide a censorship-resistant trading environment.\n\nShutterized OP Stack L2s bring a host of benefits, including:\n\n* Enhanced trading safety and profitability by mitigating front-running.\n* Added (real-time) censorship resistance.\n* Reduced trust assumptions in sequencers through transaction encryption.\n* Potential compliance and regulatory benefits by limiting the sequencer's ability to manipulate transactions.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/6f475f6f-302e-4550-bff3-d77818728e62.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/7b830942-f99a-4f31-8938-ae1c671a6e42.png',
    project_socialLinks_website:
      "['https://shutter.network/', 'https://linktr.ee/ShutterNetwork', 'https://blog.shutter.network/']",
    project_socialLinks_farcaster: "['https://warpcast.com/shutter']",
    project_socialLinks_twitter: 'https://x.com/ShutterNetwork',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'The Shutterized Optimism testnet L2 launch on Sepolia marks the availability of a Shutterized encrypted mempool for the OP Stack, aiming to prevent front-running and provide a censorship-resistant trading environment. \\n\\nThis is an important milestone for Shutter and, more importantly, for base layer neutrality on L2s. We are moving towards mainnet deployment and our collaboration with Mode. \\n', 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': '- \"The Optimism Developer Advisory Board views encrypted mempools as an important research area that can lead to better technical decentralization.\" This is a quote from brockelmore (https://gov.optimism.io/t/ready-to-vote-implement-a-prototype-of-an-op-stack-chain-with-mempool-encryption/7448/19?u=cotabe) from a post where the Developer Advisory Board voted unanimously to accept a Mission request to implement a Prototype of an OP Stack Chain with Mempool encryption. Brainbot/Shutter is executing this mission.\\n\\n- Mode (https://x.com/modenetwork/status/1757085779564609759) and other OP stack chains have expressed interest in getting shutterized to prevent censorship, front-running, and sandwich attacks. \\n\\nUltimately, end user are the prospective prime beneficiaries, because they will benefit from the front-running protection and real time censorship resistance.\\n', 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 219758,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x94af5fe205fbdfd29913aa243514bb6d3e2e1fe121aa2bd984f5eadbedbad751',
    applicationId:
      '0x94af5fe205fbdfd29913aa243514bb6d3e2e1fe121aa2bd984f5eadbedbad751',
    projectId:
      '0x3787feef9d17b0d7db30c90fb419f1e8b0587a60bc3031fd9452b1ef1ab77680',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Work on core components of the OP Stack',
    impactStatement_subcategory:
      "['Work on core components of the OP Stack, including client implementations, modules, and modifications.']",
    organization_name: 'Gelato',
    organization_description: '',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/6d9367bd-8ed7-4a36-9514-46d7c2e10dc4.png',
    organizationCoverImageUrl: '',
    socialLinks_website: [],
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['341724']",
    name: '1-Click Price Oracle',
    description:
      "Traditionally, price oracles are deployed on a per network basic (on each rollup individually). This manual deployment process can be lengthy, expensive, and may require legal agreements to be signed. Furthermore, prices are pushed to each rollup in a siloed manner, repeatedly incurring all associated overhead. Overall, there is a lot of duplicate computation taking place despite the underlying price data being identical. The traditional oracle architecture is unscalable in a world of 1000s of Rollups.\n\nGelato's 1-Click Price Oracles are natively integrated into rollups. These native oracles are immediately available without any manual deployment process and hyper scalable by leveraging a unique property of the rollup architecture. Prices are published to- and verified by a single rollup (Hub) and disseminated to all other rollups (Spokes) whilst avoiding duplicate computation and all associated overhead.\n\nThe key insight making this possible is that rollups essentially act as indexers over the L1 allowing us to consume data such as emitted events in a process known as derivation. The derivation layer is a crucial component as it facilitates, among other things, deposits which are initiated on the L1 and executed on the L2. This is what allows users on the L1 to securely deposit tokens to the L2.\n\nHere is how a deposit works under the hood:\n\n- The user invokes a smart contract which locks up tokens on the L1 and emits a deposited event.\n- Whenever the rollup enters a new epoch (new L1 block), it iterates through transaction receipts in that block and fetches all deposited event logs.\n- For all deposited event logs, the rollup constructs corresponding deposit transactions which are included at the top of the next L2 block.\n\nGelato 1-Click Price Oracles fork and slightly modify the OP Stack to introduce an additional source to the derivation layer. We first deploy an L1PriceOracle smart contract which receives price updates from Pyth every two seconds via a Gelato Web3 Function. This smart contract is deployed once and shared between all rollups. It verifies the associated signature to ensure the price update is legitimate and emits a PricesUpdated event containing all updated price feeds. When the rollup enters a new epoch, in addition to iterating through all deposited event logs as before, it also iterates through all PricesUpdated event logs. Just like with deposits, the rollup then constructs a special top-of-block transaction which updates prices on the L2. This top-of-block transaction calls an L2PriceOracle predeploy smart contract which stores prices on-chain and exposes them via a Pyth-like interface.\n\nIn summary, prices are pushed to and verified by a single smart contract living on the L1. On every epoch, rollups essentially copy fresh prices from L1 to L2 during derivation. Since publishing & verification is done in a single place rather than by each rollup individually, we reduce the complexity of publishing & verification from O(n) to O(1). However, despite avoiding duplicate computation, publishing prices to an L1 such as Ethereum every two seconds is prohibitively expensive. Instead, prices are published to a cheaper L2, in our case Base, and consumed by 1-Click (Base) L3 rollups. Unlike traditional oracles, 1-Click Oracles actually perform better at scale since the costs of publishing & verifying the data is amortized between all rollups. In essence, the constant cost is divided between many rollups (1/N). In addition, whenever a price feed is introduced on the Hub (Base), it is instantly available on all 1-Click rollups without any additional work. This allows us to rapidly introduce new price feeds. For more detailed information, please read the documentation.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/8a32c0c1-9adf-417a-a55e-f840e9d68166.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/cfc78341-b821-4da4-95ef-35cc9e460541.png',
    project_socialLinks_website: [],
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'The traditional oracle architecture, based on the assumptions of isolated blockchains, is unscalable in a world of 1000s of Rollups. Introducing the Gelato 1-Click Price Oracle Module which is natively integrated into the OP Stack and immediately available out of the box for all 1-Click Base L3s. Prices are published to- and verified by a single Rollup (Hub) and disseminated to all other Rollups (Spokes) whilst avoiding duplicate computation and all associated overhead.', 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': 'This is the first of many upcoming native modules. Native Modules deliver ultra-low latency and higher throughput by being hosted directly on the chain servers. This tight coupling enables more efficient communication & data transfer compared to relying on external services. Updates run smoother, compatibility issues drop, & the entire system operates more efficiently. Native modules redefine the boundaries of protocol design: Deep integration with core chain functionality unlocks advanced, new solutions, boosting performance far beyond what third-party integrations can achieve.', 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: 'token-house-mission',
    grant_1_link:
      'https://gov.optimism.io/t/draft-gf-phase-1-proposal-front-running-protection-via-shielded-mempool-for-op-stack-using-threshold-encryption/5036',
    grant_1_amount: 30000,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x95b0f6f25851da3d3ba17d4cd71e0925b7d234c1db32d5937c846d74ab62fb03',
    applicationId:
      '0x95b0f6f25851da3d3ba17d4cd71e0925b7d234c1db32d5937c846d74ab62fb03',
    projectId:
      '0x5742c7b3f7096fb9dd7a82cc62a4fda1e72aad9bdba9818c0d953fc82be9903d',
    applicationCategory: 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
    'PW subcategory': 'Work on core components of the OP Stack',
    impactStatement_subcategory:
      "['Work on core components of the OP Stack, including client implementations, modules, and modifications.']",
    organization_name: 'Test in Prod (soon to be Sunnyside Labs)',
    organization_description:
      "Test in Prod is a core development team of Optimism Collective. Test in Prod will soon to be rebranded to 'Sunnyside Labs'.",
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/5354c3c3-da28-4097-bb82-b89b630a3d3e.png',
    organizationCoverImageUrl: '',
    socialLinks_website: "['testinprod.io', 'github.com/testinprod-io']",
    socialLinks_farcaster: [],
    socialLinks_twitter: 'https://x.com/testinprod_io',
    socialLinks_mirror: 'https://mirror.xyz/testinprod-io.eth',
    team: "['811328', '849695', '284703', '849643', '849704']",
    name: 'OP Erigon',
    description:
      "OP Erigon is the first alternative execution client implemented to OP Stack. Test in Prod built & has been actively maintaining OP Erigon since April 2023. Since then, OP Erigon has been serving strategic use cases that require Erigon's high efficiency on disk & performance. Notable users are Blockaid, Chainstack, Blockjoy, etc. \n\nIn the Superchain’s vision, disk space is a huge problem. For example, the sum of OP Mainnet, Base, and Zora’s OP Geth archive node size is 16.16TB. On the other hand, OP Erigon only costs 3.55 TB, which is a 78% savings. Considering the challenger nodes need to run all nodes in Superchain with the interop future, leveraging OP Erigon is a huge win.\n\nSince Retro Funding round 3, Test in Prod has worked on the following:\n- Support users to run & troubleshoot OP-Erigon.\n- Update the up-to-date upstream codes.\n- Port Erigon 3, which saves 90.9% of disk footprint compared to Geth on L1.\n- Host the archive node snapshots for OP Mainnet, OP Sepolia, and Base Mainnet—350+ downloads per month.\n- Host the public RPC of OP Erigon & Otterscan, which serves 4.9k requests/day on average.\n\n---\nHere are the commentaries from the notable users: \n\nRaz (CTO of Blockaid): With OP-Erigon, Blockaid could protect users in the Optimism ecosystem (OP Mainnet, Base, and Zora) more effectively by leveraging its efficient disk space and performance. Moreover, working with Sunnyside Labs is a smooth experience—they help us troubleshoot, notify us of upcoming network upgrades, etc. We think their works are impactful, at least for us. \n\nEugene (CTO of Chainstack): Chainstack is using op-erigon for Global Elastic Nodes in OP Mainnet & Base. Thanks to op-erigon, we could run the archive nodes for the Optimism ecosystem more efficiently. Test in Prod was also helpful for the node operations by helping us troubleshoot, alerting us for upcoming upgrades, etc.\n\nChris (CEO of Blockjoy): Blockjoy provides dedicated unmetered op-erigon node services for customers needing high performance Erigon RPCs; notable customers are Trueblocks, Blockaid, etc. Operating nodes as efficiently as possible can require true expertise, this is why we enjoy working with Test in Prod & hope to continue working with them in the future!",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/9f0fd4cc-c85e-4794-970e-56afdf9b3761.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/d7c777b0-0220-4f5f-a4ed-f46931852bdf.png',
    project_socialLinks_website:
      "['https://op-erigon.testinprod.io', 'https://github.com/testinprod-io/op-erigon', 'https://testinprod.io']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://x.com/testinprod_io',
    project_socialLinks_mirror: 'https://mirror.xyz/testinprod-io.eth',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'OP Erigon advanced the OP Stack development by providing highly disk-efficient & performant nodes.\\n\\nIn the Superchain’s vision, disk space is a huge problem. For example, the sum of OP Mainnet, Base, and Zora’s OP Geth archive node size is 16.16TB. On the other hand, OP Erigon only costs 3.55 TB, which is a 78% savings. Considering the challenger nodes need to run all nodes in Superchain with the interop future, leveraging OP Erigon is a huge win.\\n\\nTherefore, OP Erigon lowers the burdens of infrastructure providers to run OP Chain nodes more properly by providing more disk-efficient nodes.', 'question': 'How has your project advanced the development of the OP Stack?'}, {'answer': 'Node providers. We are providing them with highly efficient clients they can use in OP Chains and helping them to successfully run it for OP Chains.\\n\\nPlease refer to the commentaries from Blockaid, Chainstack, and Blockjoy in the project descriptions for detailed examples.', 'question': 'Who has benefited the most from your work on the OP Stack and how?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 400000,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x981b75ccf20308ec809c133e42edeb87031964d718753a949e9b9b3397775b97',
    applicationId:
      '0x981b75ccf20308ec809c133e42edeb87031964d718753a949e9b9b3397775b97',
    projectId:
      '0x0b0abc06da9c1288848a05e4a330ae3ac54474143f1c2a61d71c2c3fb37cf217',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Research/Education tool',
    impactStatement_subcategory:
      "['Research or development that introduces new features, improvements, or capabilities to the OP Stack.', 'Services for deploying and hosting an OP Chain.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'FANBASE ✨',
    description:
      'This is a fanbase community that operates in the field of social engagement.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/2578a4d4-b88e-4461-aecf-2278e1fe9bdf.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/6e5a0785-93ce-438a-af3d-d81460919f57.png',
    project_socialLinks_website: [],
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'The infrastructure built with OP Stack Deployer has significantly streamlined the process of testing, deploying, and operating OP chains. By automating complex tasks such as building repositories, generating keys, configuring networks, and deploying contracts, it reduces setup time and minimizes human error. This efficiency enables developers to focus on innovation rather than setup procedures. Additionally, the robust configuration ensures consistent and reliable network operations, which is crucial for maintaining the stability and security of OP chains. Overall, this infrastructure accelerates development timelines and enhances the robustness of blockchain projects.', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': \"The OP Stack Deployer has been instrumental in helping numerous developers streamline the setup and deployment of OP chains. One notable project that benefited is Karak(https://karak.network/), which was so impressed with the tool and how it solved their issues that they hired me to continue building their rollup on OP Stack. This led to my involvement with Andalusia Labs, the team behind Karak. At their request, I created a new GitHub account here: (https://github.com/aymentrosh) to continue contributing to innovative blockchain projects. The original OP Stack Deployer repository has received significant recognition, with many stars highlighting its impact and utility. You can view the stargazers here: (https://github.com/Aymen-Tirchi/op-stack-deployer/stargazers).\\nyou can check that I'm Andalusia Labs team member on LinkedIn\\nLinkedIn: https://www.linkedin.com/in/aymen-tirchi/\\nTwitter: https://x.com/aymentrosh\\n\", 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 227000,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x99c7f0d5f0463118627b633d3e0f0a2354544ee285d77569cded515bfbeadd18',
    applicationId:
      '0x99c7f0d5f0463118627b633d3e0f0a2354544ee285d77569cded515bfbeadd18',
    projectId:
      '0xf2a60464d2a56fb47d2f8c13001edea71eda11ffd8fffec5f559495c6a5878d4',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Research/Education tool',
    impactStatement_subcategory:
      "['Services for deploying and hosting an OP Chain.', 'Security audits specifically on the OP Stack or its components.', 'Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'Crypto4Bunnies🐰🥕',
    description:
      'Italian web3 community in which to popularize blockchain and its potential with the best projects to accelerate mass adoption and educate users on the transition from web2 to web3\nOur services include articles, live streaming on twitch, threads and giveaways on social, Youtube channel for video content, reels on tik tok, podcasts. We also have Italian communities on discord, a telegram channel and a channel on warpcast',
    profileAvatarUrl:
      'https://cdn.charmverse.io/user-content/6020d938-f07e-4f95-a756-5562f175762e/f6550061-4756-49ac-b3da-6dc87fd589a9/76716e6b0c575e52832cf0f58cae6f2c.jpg',
    projectCoverImageUrl:
      'https://cdn.charmverse.io/user-content/6020d938-f07e-4f95-a756-5562f175762e/906bad2e-6a95-4bba-9261-aeaf88ff7afe/Screenshot_20240823-030141_1.jpg',
    project_socialLinks_website: "['https://www.fanbase.app/']",
    project_socialLinks_farcaster:
      "['https://warpcast.com/denzooo', 'https://warpcast.com/phynn', 'https://warpcast.com/cepodr']",
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'My project is to spread OP chain services through my infrastructure, through various media and networks.', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'Everyone can use my tools to explore much deeper into the op chain, the benefit is to get to know more about the op chain through my infrastructure.', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xbbea5a9a59dc71358d4a4e687630a8a461efc17e56054f36e8c75246520a4199',
    applicationId:
      '0xbbea5a9a59dc71358d4a4e687630a8a461efc17e56054f36e8c75246520a4199',
    projectId:
      '0xe2f742ea351ea741e95f8cf4b2434317d8365c532b97601e8a27854003c2e396',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Research/Education tool',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.', 'Services for deploying and hosting an OP Chain.']",
    organization_name: 'Node Guardians',
    organization_description:
      'Node Guardians is a gamified educational platform for intermediate to advanced developers. We create lore-rich programming challenges for accomplished Solidity developers. Think of it as a skill-based RPG for developers and a platform to showcase their abilities.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/b9853684-1026-41a3-8f54-4b9a85efc4b3.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/2ae9ed07-0c7b-4d3a-80f4-3b61e3f49c25.png',
    socialLinks_website: "['https://nodeguardians.io/']",
    socialLinks_farcaster: "['https://warpcast.com/sam-ng']",
    socialLinks_twitter: 'https://x.com/nodeguardians',
    socialLinks_mirror: 'https://www.youtube.com/@nodeguardians',
    team: "['17309']",
    name: 'Node Guardians',
    description:
      'Node Guardians is a gamified educational platform for intermediate to advanced developers. We create lore-rich programming challenges for accomplished Solidity developers. Think of it as a skill-based RPG for developers and a platform to showcase their abilities.',
    profileAvatarUrl:
      'https://cdn.charmverse.io/user-content/e9e91a73-3525-4b78-a630-7886ebfc7937/a0f11e65-b793-4450-a471-47f5f739f74c/ArtGrids-Logo-1200px.png',
    projectCoverImageUrl:
      'https://cdn.charmverse.io/user-content/e9e91a73-3525-4b78-a630-7886ebfc7937/31d91e49-c777-4f28-b01d-96dd5d773250/Kopie-von-ridz-(1).png',
    project_socialLinks_website: "['https://artgridz.decentraplace.io']",
    project_socialLinks_farcaster: "['https://warpcast.com/artgridz']",
    project_socialLinks_twitter: 'artgridz',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': \"Easy Accessibility: Through the integration of user-friendly tools like the ThirdWeb SDK ArtGridz reduces the complexity of blockchain interactions, making it more accessible to a broader audience. Coinbase paymaster helps us with sponsoring transaction and the transaction bundler with reducing friction.\\n\\nOnchain Storage: The platform's unique art storage method, with event emissions for each pixels alteration, allows for live & historical tracking of the onchain states of our artworks, showcasing innovation in how art can be stored directly on the blockchain.\\n\\nA Truth Machine: By offering a secure digital canvas, ArtGridz not only makes collaborative art creation more engaging but also demonstrates the potential of permanent data if curated by a strong community.\\n\\nThese contributions align with the goals of improving the OP Stack's usability and accessibility, making ArtGridz a strong candidate for Category 3.\", 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'ArtGridz’s tooling has been embraced by both developers and artists, enhancing their ability to create fast, manage, and interact with digital art on the blockchain. The platform’s impact is evidenced by positive user feedback, increased onchain activity, and successful community collaborations. The integration of tools like the ThirdWeb SDK and Coinbase’s transaction bundler & paymaster has proven to be beneficial, reducing complexity and costs, thereby making blockchain technology more accessible to a broader audience and easy and fast to build for us developers.', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xd42d5fa61ac3f9488e7b5c5fd24709d9d2b130750a9e06df868fe0bf3d14b849',
    applicationId:
      '0xd42d5fa61ac3f9488e7b5c5fd24709d9d2b130750a9e06df868fe0bf3d14b849',
    projectId:
      '0x9151666888d0ca532a529be98a50d2eb992988117e202163f865fa9a27eb7149',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Research/Education tool',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.']",
    organization_name: 'Chomtana Individual Contribution',
    organization_description: '',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/5d53be60-ecad-4b57-8dbf-110c8b24dd89.png',
    organizationCoverImageUrl: '',
    socialLinks_website: [],
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['328679']",
    name: 'Maintaining simple-optimism-node',
    description:
      'I\'m maintaining "simple-optimism-node" created by @smartcontracts, an open-source Optimism\'s full/archive node docker compose deployment script used by more than 320 developers and featured in the official docs.\n\nBelow are some key metrics that indicate its adoption:\n\n- Stars: 321\n- Forks: 111\n\nFrom October 1, 2023, to July 31, 2024, the following metrics were observed:\n\n- External Contributors: 3\n- Issues Opened: 34\n- Issues Closed: 30\n- Merged Pull Requests: 28\n\nHowever, the actual usage is higher, as many instances are not being tracked.',
    profileAvatarUrl:
      'https://cdn.charmverse.io/user-content/9090e73a-29c0-4526-aa48-502931e587db/32fb3d1a-2380-489f-af46-05281394491c/simon-lee-eGALMCJ_Cvk-unsplash.jpg',
    projectCoverImageUrl:
      'https://cdn.charmverse.io/user-content/9090e73a-29c0-4526-aa48-502931e587db/eef933e3-67a1-4f67-9fb1-f83b721d928b/WhatsApp-Image-2024-06-20-at-01.15.39_89df9811.jpg',
    project_socialLinks_website:
      "['https://opensea.io/collection/pantone-planet-1']",
    project_socialLinks_farcaster: "['https://warpcast.com/zoopdrop.eth']",
    project_socialLinks_twitter: 'sakbaniiiii',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'To facilitate the testing, deployment, and operation of OP (Optimistic Rollup) chains, I’d focus on the following aspects of infrastructure:\\n\\nDevelopment Environment:\\n   - Simulators and Testnets: Infrastructure includes tools and environments like Kovan or Optimism’s own testnets, where developers can test their contracts and interactions without risking real assets. Simulators mimic the behavior of the mainnet, allowing for thorough testing.\\n   - Development Frameworks: Tools like Hardhat or Truffle are configured to support OP chains, enabling developers to deploy and interact with smart contracts in a local or test environment.\\n\\n\\n', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': \"Although I don't have direct experience with specific tooling or users, I can share how various types of tooling for OP chains are generally used and benefited by different stakeholders based on industry practices:\", 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 22117,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xda3416979010249d4c8095d87a539006743741be970d41c0b5affca2fdfbaeef',
    applicationId:
      '0xda3416979010249d4c8095d87a539006743741be970d41c0b5affca2fdfbaeef',
    projectId:
      '0x326b198b5e8fafe18aa163b5a6e3e1c2a5d539eb0006245b40ba4dbc927f7953',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Research/Education tool',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.']",
    organization_name: 'CryptoZombies',
    organization_description:
      'CryptoZombies is an interactive school that teaches students to write smart contracts by making their own crypto-collectibles game. CryptoZombies was the first tutorial on the internet for NFTs and is still very relevant to the new crop of web3 developers looking to enter the industry today. The curriculum is focused on Solidity development, which also helps onboard new developers to Optimism.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/ddb6b9ee-66da-4d4c-b070-8c1876b5b21d.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/fb81a27f-db98-45a3-a0a0-cfa08e07e547.png',
    socialLinks_website: "['https://cryptozombies.io']",
    socialLinks_farcaster: [],
    socialLinks_twitter: 'https://x.com/cryptozombieshq',
    socialLinks_mirror: '',
    team: "['847269']",
    name: 'CryptoZombies',
    description:
      "CryptoZombies is an interactive school that teaches students to write smart contracts by making their own crypto-collectibles game. CryptoZombies was the first tutorial on the internet for NFTs and is still very relevant to the new crop of web3 developers looking to enter the industry today. The curriculum is focused on Solidity development, which also helps onboard new developers to Optimism.\n\nOur platform is free and used by more than 500,000 developers worldwide. Consequently, we've broadened the Optimism Collective's audience while streamlining developer onboarding. In doing so, we've blended simplicity and humor, making the art of writing smart contracts on Optimism fun and accessible. Furthermore, our Telegram community ensures prompt support from our engineers, aiding both newcomers and experienced developers alike.\n\nWe've teamed up with the Optimism Foundation to build a course, Optimism Unleashed, that teaches students to write, test, and deploy smart contracts on the OP Mainnet and use the Superchain Faucet. The course is available at https://cryptozombies.io/en/optimism.\n\nWe're also building [CryptoZombies Apocalypse](https://apocalypse.cryptozombies.io/), an Optimism-based tower defense game where players fight zombie waves to save humanity. The game includes an educational curriculum providing hands-on experience building blockchain-powered game content.\n\nEarly adopters can now claim Early Bird Badge NFTs for game access. To boost adoption, we're covering minting fees on Optimism.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/3a0567f1-275b-46e2-b94e-040cc35dd014.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/c26eec87-530c-406c-8fb9-130c13ee40f0.png',
    project_socialLinks_website:
      "['https://x.com/crypto4bunnies', 'https://www.youtube.com/@crypto4bunnies', 't.me/RadioHolder', 'https://www.instagram.com/crypto4bunnies/', 'https://www.tiktok.com/@panofsky']",
    project_socialLinks_farcaster:
      "['https://warpcast.com/panofsky', 'https://warpcast.com/~/channel/base-it']",
    project_socialLinks_twitter: 'https://x.com/panofsky167',
    project_socialLinks_mirror:
      'https://mirror.xyz/0xd386E9bDC4095BED8333aF3F0d48F6dBc4cB0Cab',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'with our channels through both video and written tutorial articles we help newbies understand the mechanisms of superchains and guide them step by step helping them if they have problems thanks to our assitance on our community', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'we have concretely helped dozens of people who were incapable of it to use blockchain technology at airdrop by assisting them and explaining the main features also stayed to follow other projects having the minimum skills to follow the dynamics of the web world3', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: 'foundation-mission',
    grant_1_link:
      'https://gov.optimism.io/t/cycle-19-final-grants-roundup/7850',
    grant_1_amount: 60000,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xdacaf56aab0be9368356fa9bf036b5e0499ed3b8f4e04f0a826281e2939e7d06',
    applicationId:
      '0xdacaf56aab0be9368356fa9bf036b5e0499ed3b8f4e04f0a826281e2939e7d06',
    projectId:
      '0x356eee43066d2e12c46f06eb710b8d33d6655db061cb3b24d7a38433f228a45b',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Research/Education tool',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.']",
    organization_name: 'DappLearning',
    organization_description:
      "We are designed for developers to step into blockchain DAPP development, where they can learn DeFi, CRYPTO,  NFT, DAO projects. We are only focus on Ethereum and Layer2. \n\nour vision:\n\nWe hope we could not only give junior developers a feasible and easy-to-use **blockchain Dapp learning roadmap**, but also present advanced developers with a platform for **communication and cooperation**.\n\nWhat We Have Done\n\n- We maintain a widely acclaimed open-source web3 development tutorial on GitHub,  covering the fundamentals of web3 development, in-depth analysis of DeFi, CRYPTO, DAO，blockchain architecture and more. The Basic tasks  enable beginners to get the hang of web3 basics through coding examples, while the Project task section delves in to the architecture and processes of classic projects and dissects the key logic within the code。\n- Adhering to the concept of the open-source university, we regularly hold online tech-sharing sessions (typically once a week), with over 180 deep dives into hard-core technical topics. They're all up on platforms like YouTube and Bilibili for people to catch up on. For critical technologies or topics, we have organized several lecture series, such as DeFi series, ZK Series Courses, Optimism, Starknet, Scroll, UniswapV3, Account Abstraction, etc. Excellent presenters would receive a 160 DAI reward provided by the community funding pool.\n- We have a special team to translate influential English courses or articles into Chinese, making them accessible to a broader range of Chinese developers. To help learners understand the entire web3 industry's context and improve systemic cognition, we have organized the content of MIT 15.S12 Blockchain and Money (Prof. Gary Gensler) video course and translated it into Chinese version course notes.\n- We've built a community system using Ethereum Address as an identity marker, offering platforms for hiring and bounties alongside practical web3 tools like Redpacket and Airdrop, etc., on which we support layer2 (Optimism, Arbitrum one, scroll, zkSync Era, etc). We're continuously enhancing our community features with the goal of providing an enriched experience for our developers. We aim to foster learning, facilitate collaboration, and unlock new opportunities within the community.\n- We adhere to a DAO governance, decentralized, with global contributors, voting on significant community .",
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/9502c952-cc56-455a-9497-0b7d763421f4.png',
    organizationCoverImageUrl: '',
    socialLinks_website: "['https://dapplearning.org/']",
    socialLinks_farcaster: [],
    socialLinks_twitter: 'https://x.com/Dapp_learning',
    socialLinks_mirror: '',
    team: "['516941', '617880', '517069']",
    name: '[DappLearning] Web3 Development Tutorial',
    description:
      'DappLearning is the definitive guide to decentralized application (Dapp) development on blockchain technology. It offers step-by-step practical experience through classic projects. The GitHub repository has garnered over 5K stars. The OP Stack is a crucial component of this guide, and we have meticulously designed relevant experiments, as well as compiled a rich list of reference materials for those who wish to learn. Additionally, we organized two online OP Stack sharing sessions and uploaded the related videos to YouTube, which have received nearly 1K views. \nOur tutorial not only assists Mandarin-speaking developers in Mainland China but also extends its reach to support developers in regions such as Hong Kong, Singapore, Malaysia, and beyond.\n\nOP stack tutorial (docs + video course): \nhttps://github.com/Dapp-Learning-DAO/Dapp-Learning/blob/main/basic/28-optimism-layer2/README.md\nhttps://www.youtube.com/playlist?list=PLgPVMJY4tnFNXwnStKiI9FZ9cV-OqgZMT',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/00587623-0070-4b05-8ea3-64ac2669aff7.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/25fd447f-82c1-45cf-955b-98e5a540c247.png',
    project_socialLinks_website:
      "['https://www.ankr.com/rollup-as-a-service-raas/']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://x.com/ankr',
    project_socialLinks_mirror: '',
    pricingModel: 'freemium',
    impactStatement_statement:
      "[{'answer': 'Ankr has constructed a no-code RaaS deployment solution utilizing our already battle tested Optimism RPC infrastructure. As of today, Optimism sees 3 billion monthly requests via the fastest overall latency globally. Ankr plans to directly translate this to the greater Superchain ecosystem when the Optimism solution is live.', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': '\"Asphere is already a trusted partner that provides Optimism with node infrastructure, so providing high-quality RaaS is a natural extension of our partnership\" - Tess Rinearson, Head of Product at OP Labs\\n\\n\"Our alliance with Asphere provides seamless access to a decentralized infrastructure network with developer connections that are stable, fast, and secure to the community building on Mantle Network\" - Zuki Hong, Infra Growth Lead at Mantle', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xdad31a9e6fb92128c654b6c86b9d9ef3ec4aaf13b36bb0efc374ed8de0a7b759',
    applicationId:
      '0xdad31a9e6fb92128c654b6c86b9d9ef3ec4aaf13b36bb0efc374ed8de0a7b759',
    projectId:
      '0x20b1e383963c6d8c3aad208dd5b90b27462a47f9835d567ed44137ade1b5cb45',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Research/Education tool',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.']",
    organization_name: 'GregCardo',
    organization_description:
      'GregCardo  is a software developer with a passion for innovation and problem-solving. Experienced in collaborating with global teams and eager to contribute creative solutions within the Ethereum Ecosystem.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/1e73fbdc-3319-4e74-9d4a-a0a14325ced1.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/ca72c3c1-190b-493a-ab8d-1a5dafa296d5.png',
    socialLinks_website: [],
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['261806']",
    name: 'Optimism Collective and OP Stack Documentation Improvements',
    description:
      "Hello Optimism Collective! I'm Greg Cardo, a passionate developer focused on enhancing the usability, clarity, and accessibility of the OP Stack through high-standard documentation. This project primarily focuses around improving the OP Stack documentation, where I've introduced useful updates and clarifications to support developers and operators working with Optimism's core infrastructure.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/f7b97236-dce1-4e44-873c-74bb5f31b49c.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/963d18b8-32a1-4d7c-a09a-640cd20e4f22.png',
    project_socialLinks_website:
      "['https://element.market/collections/base-btc-earth']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'pay_to_use',
    impactStatement_statement:
      "[{'answer': \"My NFT collection enabled the testing, distribution and operation of OP chains with its sales and interactions. NFT collections with artificial intelligence content attracted people's attention and gained interaction.\", 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'Our tools were used by superchain users, which gave them easy access to the cheap and accessible nft side. They accessed and purchased the first AI-powered nft collections.This is true for all the projects I do.', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: 'token-house-mission',
    grant_1_link:
      'https://retrofunding.optimism.io/projects/0xb8ea29378df33c1bcb64c221a1e2e342a99d3fad8233dcec94eddd137a3eab05/grants',
    grant_1_amount: 10000,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xdbbddc9ceafb415395bc0d139c894428ddd3b53a94f459868d1ffcd86a8a0637',
    applicationId:
      '0xdbbddc9ceafb415395bc0d139c894428ddd3b53a94f459868d1ffcd86a8a0637',
    projectId:
      '0x1335476de5a24573f3fa1297827fbeb02921948d678b399c7367fb956d08a6cc',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Research/Education tool',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.']",
    organization_name: 'Optimism Design',
    organization_description: '',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/0f886e21-30aa-411f-bf60-da1cfe90c3fd.png',
    organizationCoverImageUrl: '',
    socialLinks_website: [],
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['5779', '844381']",
    name: 'Retro Funding Site Design',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/a7ef0d7f-ce00-4eba-b008-56b9097dbc43.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/85835697-4130-4543-9bbe-5cfd09034925.png',
    project_socialLinks_website: "['https://owlto.finance']",
    project_socialLinks_farcaster: "['https://warpcast.com/owltofinance']",
    project_socialLinks_twitter: 'https://x.com/Owlto_Finance',
    project_socialLinks_mirror: '',
    pricingModel: 'pay_to_use',
    impactStatement_statement:
      "[{'answer': 'Owlto Finance has developed a smart contract deployment tool: https://owlto.finance/deploy, which allows users to deploy smart contracts and ERC-20 tokens on superchains like Base, Mode, Zora, and Kroma. It only requires a simple one-step operation', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'As of now, users have deployed over 120,000 contracts using this tool, with 82,337 on Base, 6,293 on Kroma, 20,555 on Zora, and 15,628 on Mode. Made a significant contribution to superchains based on the OP Stack\\n', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: 'test',
    grant_1_link: '',
    grant_1_amount: 'under-250k',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xdfeced1045accaf24826bb678bc6c44624588c1d1b5a56d6b60ad2774fde4352',
    applicationId:
      '0xdfeced1045accaf24826bb678bc6c44624588c1d1b5a56d6b60ad2774fde4352',
    projectId:
      '0xdbc21abd2657c839060753eada61f93a6d835a0a2f3bdfb530339a2c85f23516',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Research/Education tool',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.']",
    organization_name: 'TechNERDs',
    organization_description: '',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/1fad18ed-2ac3-4966-a0aa-1929a40d0d84.png',
    organizationCoverImageUrl: '',
    socialLinks_website: [],
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['16340', '190594', '191318', '535575', '328679', '849507']",
    name: 'TechNERDs Program',
    description:
      "The TechNERDs program maintain a developers repository and the discussion section has evolved into a Stack Overflow style forum where 100s of threads have turned into reusable resources and have lead to documentation and developer experience improvements. https://github.com/ethereum-optimism/developers/discussions\n\nThe TechNERDS expand developer support and bridge technical knowledge gaps. They directly solve developer pain by answering questions, debugging issues via support tickets and dev channels, improve documentation, and making improvements to the code repositories. They're enabling developers to build and thrive with the OP Stack.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/98782a35-819f-4d02-a2dd-9e0156308b63.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/197fe561-4691-45ed-806f-60ca9851859f.png',
    project_socialLinks_website:
      "['https://launchpad.omnihub.xyz/', 'https://omnihub.xyz/']",
    project_socialLinks_farcaster: "['https://warpcast.com/omnihub']",
    project_socialLinks_twitter: 'https://x.com/omni_hub',
    project_socialLinks_mirror: '',
    pricingModel: 'pay_to_use',
    impactStatement_statement:
      "[{'answer': 'OmniHub NFT Launchpad infrastructure streamlines the testing, deployment, and operation of NFTs on Optimistic (OP) chains, making the process simple and efficient for creators.\\n\\nOmniHub NFT Launchpad provide scalable deployment, allowing NFT collections to be launched on OP chains with ease. Integrated testing environments let creators identify and fix issues before going live. Our AI-driven optimization enhances both performance and security. The automated deployment pipeline reduces errors and accelerates launches. Continuous monitoring ensures NFTs remain secure and operational post-deployment.\\n\\nThis allows creators to focus on their art while we manage the technical complexities of OP chain deployment.', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'OmniHub NFT Launchpad opens the door to a world where everyone can unlock the full potential of NFTs. With its unique features, it transforms the traditional launchpad experience into an accessible, inviting users to explore and capitalize on the boundless possibilities within the NFT launchpad by OmniHub.', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xe65a2684781bdc49edc859a49d1e3f692a0f58fabcd8fe49098df3a0f9ad69a6',
    applicationId:
      '0xe65a2684781bdc49edc859a49d1e3f692a0f58fabcd8fe49098df3a0f9ad69a6',
    projectId:
      '0x518706ed6e45ba99aaf9fe6ed3d647373cd67b8632492e59c294b835758c2194',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Research/Education tool',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'The book of optimism fault proof',
    description:
      'The Book of Optimism Fault Proof\n\nThe Book of Optimism Fault Proof repository is a resource aimed at demystifying the fault proof system for newcomers and seasoned developers alike. Centered around the transformative concept of a fault proof system, this project shifts away from centralized proposers to a mechanism grounded in game theory. The purpose of this document is to offer a multifaceted explanation of the fault proof system, providing newcomers with a rapid understanding of its mechanics and the specific details of its code.\n\n1. Starting with the Basics\n\nThe journey into understanding fault proof begins with the simplest design of such a system. This approach breaks down the complexity of fault proof into manageable parts, making it easier for newcomers to grasp the fundamental concepts and how they interconnect within the broader system architecture.\n\n2. Key Components Explained\n\nFault Proof: At its core, the fault proof mechanism replaces centralized proposer systems, which are susceptible to biases and inefficiencies, with a decentralized, game-theory-based approach.\nFault Proof Game: This component employs a binary search technique to pinpoint and verify discrepancies between parties on the blockchain, ensuring transparency and fairness in dispute resolution.\nCannon: An off-chain program, Cannon is pivotal in generating verifiable data needed for on-chain interactions, bridging the gap between theoretical fault proof and practical implementation.\nop-program: This tool provides the necessary prototype files for Cannon, facilitating services for pre-image data crucial for the system’s operations.\nop-challenger: Automating the gameplay elements of the fault proof system, op-challenger utilizes both Cannon and op-program to streamline processes and enhance system integrity.\n\n3. Architecture Mechanics\n\nUnderstanding the architecture of the fault proof system involves exploring how these components work together to form a robust mechanism. From the deployment of smart contracts and proxies on the Ethereum blockchain, identified by specific addresses such as MIPS and DisputeGameFactoryProxy, to the integration of off-chain computations with on-chain verifications, the architecture is designed for scalability and security.\n\n4. Comprehensive Resources\n\nFurther enriching this document, an extensive collection of articles and videos is summarized, providing deep dives into each component and the fault proof mechanism as a whole. These resources are meticulously curated to extend learning beyond the initial explanations, offering insights into potential applications and optimizations of the fault proof system.\n\n5. For Newcomers and Experts\n\nWhether you are a new entrant eager to understand the basics or an expert looking to refine your knowledge of decentralized systems, the repository offers a wealth of information designed to bring all readers up to speed on the innovative fault proof system.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/efb45dc3-f969-486a-94db-b1ba08172fdd.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/834addf6-c0fa-45e3-85d1-c85444cee8ce.png',
    project_socialLinks_website: "['https://www.altlayer.io/']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://x.com/alt_layer',
    project_socialLinks_mirror: '',
    pricingModel: 'pay_to_use',
    impactStatement_statement:
      "[{'answer': 'AltLayer through its RaaS services has helped onboard several big gaming, social and other applications to building using OP Stack and become a part of Superchain. Several of these chains have attracted over hundreds of millions of transactions from over tens of millions of wallets.\\n\\nWe also pioneered a new framework called restaked rollups with the goal to bring the benefits of restaking to OP Stack rollups through specific actively validated services (AVSs) such as a fast finality layer. We have deployed 4 AVSes  for our RaaS clients that have collectively garnered over $10B in restaked TVL with tens of thousands of delegators.', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'Our services are used by developers who wish to launch their app-tailored rollups using OP Stack. We have launched and managed 20 different OP stack rollups with very heterogenous system configurations for e.g., different alternative DA layers.\\n\\nWe have helped many of our clients scale over time, in the sense that their rollup nodes were able to easily handle increased transaction traffic as their chain became more established.\\n\\nSome of our client testimonials can be found on our website: https://www.altlayer.io/. A common feedback that we get from our clients is that they believe we offer more than a tech service but rather a wholistic suite of services that covers marketing of their chains, helping with their business and go-to-market strategies and more. \\n', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xe8bfa7f5bee60dc487b7f61e9f95b933e7302383570de2339ff557f829140268',
    applicationId:
      '0xe8bfa7f5bee60dc487b7f61e9f95b933e7302383570de2339ff557f829140268',
    projectId:
      '0xda38e275285330082433713e32b03c7ccd482bfca5e52719766f16555e05f699',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Research/Education tool',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'Understanding-Optimism-Codebase',
    description:
      'This document provides a comprehensive explanation of the Optimism codebase, aiming to help newcomers to Optimism quickly get started and truly understand how the code flow in the codebase works.\nWritten in two language versions right now, EN & CN.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/85d305c3-f250-4e81-b2eb-d228b5058020.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/972a1713-f830-4ae1-a1b1-cea0d72a3e61.png',
    project_socialLinks_website: "['https://blockchef.io']",
    project_socialLinks_farcaster: "['https://warpcast.com/blockchef']",
    project_socialLinks_twitter: 'https://x.com/blockchefio',
    project_socialLinks_mirror: '',
    pricingModel: 'freemium',
    impactStatement_statement:
      "[{'answer': \"BlockChef aims to revolutionize the food supply chain by providing businesses with a transparent and efficient solution to track products from **farm to fork**. To achieve this, we are building a robust infrastructure powered by an OP Stack-based sequencer and network. This infrastructure will serve as the foundation for creating an immutable ledger that records every step of a product's journey.\\n\\nBy leveraging existing tools and blockchain technology, we will enable businesses to deploy and operate a chain that provides full traceability, security, and transparency. Our network will streamline processes, automate verification through smart contracts, and reduce inefficiencies, all while enhancing the user experience. This ensures businesses can easily track, verify, and authenticate their products, giving them and their customers complete peace of mind.\", 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'We are currently in the testing phase of our product and actively engaging in discussions with various suppliers, producers, and stakeholders within the food supply chain across Europe. Our goal is to attract potential customers by demonstrating the value of our solution. The power of the OP Stack and Superchain allows us to offer our clients a fully transparent, trustworthy, and easily traceable process. This ensures that every step in the supply chain is secure and verifiable.\\n\\nWhile we do not yet have public testimonials or data from active users, these ongoing negotiations are helping us build a strong list of potential clients who are interested in adopting our solution in the near future.', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x99e3bf049a80e9eab20de707bf5d328175e1f45b8e3152d3838e40b6394ceff7',
    applicationId:
      '0x99e3bf049a80e9eab20de707bf5d328175e1f45b8e3152d3838e40b6394ceff7',
    projectId:
      '0x7348ae42266ff626319e8ea5398343b847603b3cc7101b03d8e4fb2b75ea8db3',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Services for deploying and hosting an OP Chain',
    impactStatement_subcategory:
      "['Services for deploying and hosting an OP Chain.', 'Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.']",
    organization_name: 'Ankr',
    organization_description: '',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/ffc77656-bacc-4cb1-a178-d8f67f6f3487.png',
    organizationCoverImageUrl: '',
    socialLinks_website: [],
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['849685']",
    name: 'Asphere Rollup-as-a-Service',
    description:
      "Asphere's RaaS, a key part of its Scaling Services, equips developers with fast, secure tools for building Rollups and other scaling solutions like Sidechains across blockchain ecosystems. Merging decentralized infrastructure with financial incentives via Liquid Staking, Ankr offers a comprehensive and sustainable development experience, catering to the demand for scalable, OP-secure projects, and establishing itself as a RaaS leader",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/c5ebe0aa-0eeb-40e0-8c47-469b57f0929c.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/08ba45cb-5bf8-4840-a63e-7dfc1f7d3eb4.png',
    project_socialLinks_website: "['https://www.gelato.network/raas']",
    project_socialLinks_farcaster: "['https://warpcast.com/gelatonetwork']",
    project_socialLinks_twitter: 'https://twitter.com/gelatonetwork',
    project_socialLinks_mirror: '',
    pricingModel: 'pay_to_use',
    impactStatement_statement:
      "[{'answer': \"Gelato offers the Rollup as a Service platform, enabling projects to effortlessly launch and operate within the Superchain ecosystem. We provide extensive pre-deployment support and continuous assistance throughout the project’s lifecycle. Understanding the importance of launching an OP chain, Gelato has created a holistic platform that simplifies deployment on both testnet and mainnet, making it as easy as a few clicks. With Gelato, spinning up a chain has never been easier. Additionally, we offer essential infrastructure services such as bridges, block explorers, oracles, RPCs, as well as Gelato's proprietary middleware solutions. Our robust infrastructure guarantees smooth operations with a remarkable 99.99%+ uptime.\", 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'Gelato powers several OP chains, including some in stealth mode, enabling over 19.5M transactions in just a few months. Lisk’s OP chain on Gelato has grown to become the 4th largest OP Superchain by TVL. Ethernity launched the first entertainment-focused, AI-powered L2, already surpassing 3.5M transactions on testnet. Similarly, Camp developed a modular identity layer for monetizing data from platforms like Instagram & Spotify. And GameSwift facilitated millions of transactions by joining the Superchain and creating a scalable, one-stop gaming ecosystem.', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x9b70e4a6f08471455d1d674f4e430da7b4fd43848002b47d1b6e1c1a1e0a36db',
    applicationId:
      '0x9b70e4a6f08471455d1d674f4e430da7b4fd43848002b47d1b6e1c1a1e0a36db',
    projectId:
      '0x52d53d44856f5a356053e55e3ad339d7207486b0210fe48aa2c1a0ec79c55d9c',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Services for deploying and hosting an OP Chain',
    impactStatement_subcategory:
      "['Services for deploying and hosting an OP Chain.', 'Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'BASE BTC EARTH 🌍',
    description:
      "Hello, I am a designer. I am an artificial intelligence designer. I am 25 years old. I'm from Turkey. I need some support. I want to do more for Optimisim. I don't know much about Github. But everything I did here is as you want. I increased the on-chain activity and interacted with 420 wallets. https://element.market/collections/base-btc-earth",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/0396a5dd-24c9-4cd1-87ea-8c93b74bb130.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/447dce96-b7cf-462b-ae97-06308f42c105.png',
    project_socialLinks_website: [],
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xa12edd4e01e572e23dd88650881778884bea6410ba06aa8f5aa2544a3e444398',
    applicationId:
      '0xa12edd4e01e572e23dd88650881778884bea6410ba06aa8f5aa2544a3e444398',
    projectId:
      '0x1c0db0217d2aafd77b89d864fb87ef9d52bca0a2fc05e6faabe22ac81ec49503',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Services for deploying and hosting an OP Chain',
    impactStatement_subcategory:
      "['Services for deploying and hosting an OP Chain.', 'Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'Owlto Finance',
    description:
      '🦉 An intent-centric interoperability protocol, "Bridge the World with AI Agent". \n\nBuild on #BTC | #ETH | #SOL Eco \n\n⚡️ Safe, Fast, Low-priced and Easy-to-use.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/729b2f2b-25ac-4668-a715-61b0471e025a.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/dfec054e-366f-4db0-8603-372f715d012f.png',
    project_socialLinks_website: [],
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 10500,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xa5446a9856ac6e5de47d9a75c9b5633f60a40c07fe23297863b794ca8842984c',
    applicationId:
      '0xa5446a9856ac6e5de47d9a75c9b5633f60a40c07fe23297863b794ca8842984c',
    projectId:
      '0x66a3f6245dc3ac966d3ed9dd8c076a723cfc3aaaf5ea3721c634d46c3be46331',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Services for deploying and hosting an OP Chain',
    impactStatement_subcategory:
      "['Services for deploying and hosting an OP Chain.']",
    organization_name: 'AltLayer',
    organization_description: '',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/01ff7161-3a25-4615-9bb5-9fbfdb91f6a8.png',
    organizationCoverImageUrl: '',
    socialLinks_website: [],
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['846722']",
    name: 'RaaS and Restaking for OP Stack rollups',
    description:
      'AltLayer is a rollups-as-a-service provider with the goal to onboard applications to build using OP Stack and join the Superchain ecosystem.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/70be0977-18f4-4638-83a5-909bdb7547fd.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/37797c19-fde3-47ca-a06e-781d63e85941.png',
    project_socialLinks_website: "['redstone.finance']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://x.com/redstone_defi',
    project_socialLinks_mirror: '',
    pricingModel: 'freemium',
    impactStatement_statement:
      "[{'answer': \"Oracles being the backbone of DeFi are essential piece of infra needed for operating your OP-stack chain. Price feeds are essential to have any kind of DeFi activity on your chain. (enabling Lending, Derivatives, CDPs, Composable leverage and much more). Thanks to our modular architecture (easy EVM deployments, which is a perfect fit for OP stack chains) and previous grant recieved from foundation (Season 4 Grant) we were able to establish close cooperation with multiple OP-Stack chains, on a lot of these chains we're available in both pull & push models (where we need to deploy and maintain relayer infrastructure), and became the oracle of choice for those ecosystems (bootstraping them also with our partners intros and connections to help onboard new dApps).\\n\\nRedStone is currently available on these chains:\\n- Op Mainnet\\nIn the Pull & push model, we have integrations with Silo, Granary.\\n- Base\\nIn the Pull & push model, currently on base our feeds are used by Morpho, Reserve\\n\", 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': \"\\n- Blast\\n  - In the Pull & push model, we're the main oracle provider on blast and were first ones to introduce push model feeds there (including ecosystem native ones), we won big bang competition, currently ~8 protocols use our price feeds there.\\n- Mantle\\n   - In the Pull & push model, we have integrations with Pendle, Native, Skate Fi protocols there.\\n- Mode\\n   -In the Pull & push model, we are the oracle of choice for mode and helped bootstrap their ecosystem together with our partners. We cover all dApps there with our price feeds: LayerBank, IONIC, Ironclad, LogX.\\n- Fraxtal\\n   - In the Pull & push model, again we were the oracle of choice for this ecosystem our push feeds were essential for defi there and are used by all significant protocols (i.e. Fraxlend)\\n- BOB\\n   - In the Pull & push model, all major lending markets there use our feeds.\\n- opBNB\\n    - In the Pul model.\\n- Zircuit\\n     - In the Pull & push model, we're the oracle of choice there.\\n\", 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '5m-10m',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xa555f2cc261179e744f961525e3c506a0a53cc02389cb8d59b93c8a9220ed7d7',
    applicationId:
      '0xa555f2cc261179e744f961525e3c506a0a53cc02389cb8d59b93c8a9220ed7d7',
    projectId:
      '0xd9d3c625d5d821c6cea40f671dae15bc5ef9b9e159abcefe94864cddf11750a4',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Services for deploying and hosting an OP Chain',
    impactStatement_subcategory:
      "['Services for deploying and hosting an OP Chain.']",
    organization_name: 'Blockchef',
    organization_description: '',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/d0a1c9f9-1f0e-4e20-83f2-e2e4c55cc42a.png',
    organizationCoverImageUrl: '',
    socialLinks_website: [],
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['842471']",
    name: 'Blockchef | Blockchain; From Farm to Fork',
    description:
      'The modern food supply chain is a complex web of interactions involving farmers, processors, distributors, retailers, and consumers.\n\nThis complexity often leads to inefficiencies, fraud, and a lack of transparency. Traditional supply chains are vulnerable to numerous issues, such as counterfeit products, where unscrupulous entities introduce fake or substandard items into the supply chain. This undermines consumer trust and compromises safety.\n\nBlockChef addresses the challenges in the area by utilizing blockchain technology to create an immutable, transparent, and secure ledger of every transaction and interaction in the food supply chain.',
    profileAvatarUrl:
      'https://cdn.charmverse.io/user-content/5884c2ec-f7dc-4176-ba5c-c04931d55117/a9c1d70c-476b-4bfa-a5aa-dc6586443751/web3drop.jpg',
    projectCoverImageUrl:
      'https://cdn.charmverse.io/user-content/5884c2ec-f7dc-4176-ba5c-c04931d55117/bfc3b09a-0b59-401f-b67a-914718dea130/photo1711950336.jpeg',
    project_socialLinks_website: "['https://linktr.ee/web3_drop']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'Web3_Drop',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'Web3Drop is a comprehensive, free alpha community that offers a range of services for Web3 enthusiasts. It provides members with access to giveaways, the latest NFT collections, specialized tools, platforms, and in-depth analysis. The community is designed to keep its members informed and ahead in the rapidly evolving Web3 space.', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'Web3Drop is a comprehensive, free alpha community that offers a range of services for Web3 enthusiasts. It provides members with access to giveaways, the latest NFT collections, specialized tools, platforms, and in-depth analysis. The community is designed to keep its members informed and ahead in the rapidly evolving Web3 space.', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '25m-50m',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xa61bcee8283f00abfca8890d602ea9542a75c925f43e05d85cb4e017c60f8017',
    applicationId:
      '0xa61bcee8283f00abfca8890d602ea9542a75c925f43e05d85cb4e017c60f8017',
    projectId:
      '0x353abbe13c196db288730b62e7a6d8f2755ee968681a67bc7d5e381621ad211a',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Services for deploying and hosting an OP Chain',
    impactStatement_subcategory:
      "['Services for deploying and hosting an OP Chain.']",
    organization_name: 'Gelato',
    organization_description: '',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/6d9367bd-8ed7-4a36-9514-46d7c2e10dc4.png',
    organizationCoverImageUrl: '',
    socialLinks_website: [],
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['341724']",
    name: 'Rollup-as-a-Service Platform',
    description:
      'Launch enterprise-grade L2 & L3 ⛓️ chains integrated with industry-standard Web3 services in just 1-click!\n\nGelato powers several OP chains, including some in stealth mode, enabling over 19.5M transactions in just a few months.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/ef7bc6d3-c915-4390-9d7f-f781d6f7fea3.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/6cf81b2e-43b7-4645-ab66-39f71cb1132b.png',
    project_socialLinks_website:
      "['https://element.market/collections/monstersonbase']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'freemium',
    impactStatement_statement:
      "[{'answer': \"My NFT collection enabled the testing, distribution and operation of OP chains with its sales and interactions. NFT collections with artificial intelligence content attracted people's attention and gained interaction.\", 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'Our tools were used by superchain users, which gave them easy access to the cheap and accessible nft side. They accessed and purchased the first AI-powered nft collections.', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xa65ce0321eca02b484622525733d9e5d1ebe01618c901125cca9ec3f84900916',
    applicationId:
      '0xa65ce0321eca02b484622525733d9e5d1ebe01618c901125cca9ec3f84900916',
    projectId:
      '0x1480383a90f1ab95cfedee6ea130dca700e5236eceb7dcf3f08a0e96b43c90aa',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Services for deploying and hosting an OP Chain',
    impactStatement_subcategory:
      "['Services for deploying and hosting an OP Chain.']",
    organization_name: 'Optimism Design',
    organization_description: '',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/e36735c6-d940-44c9-926d-ccddca4123d9.png',
    organizationCoverImageUrl: '',
    socialLinks_website: [],
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['5779', '844381']",
    name: 'Retro Funding Site Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/a00a360c-7b74-4fc9-896a-c6652df70ffb.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/9be7d3fa-efda-4100-a238-8aaefa1dac95.png',
    project_socialLinks_website:
      "['https://open.spotify.com/show/29qTM8M07UYM5QveEEvuDQ']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://x.com/hedgio_fa',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'We are developing a platform that enables individuals to engage with cutting-edge blockchain technologies. Our mission is to bridge the knowledge gap by offering resources and tools that educate users on the most up-to-date advancements in the space. A primary focus of this platform has been Optimism and the OP Stack, which we’ve consistently highlighted as a key technology. To facilitate this, we organize sessions with well-known experts in the blockchain industry, where they introduce and demonstrate the latest tools within the OP Stack. These sessions not only serve to inform but also empower users to deploy and operate solutions using OP technology. By prioritizing Optimism’s infrastructure, we aim to create an accessible learning environment that accelerates innovation and adoption in the blockchain space. Through our content and expert-led discussions, participants can stay current with evolving tools and leverage them for testing, deployment, and scaling their projects.', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'Our podcast has a large Persian-speaking audience, spanning countries like Tajikistan, Iran, and Afghanistan. You can verify this through our active presence on Twitter, Telegram, and various podcast platforms. Many listeners benefit from the information we provide, especially on blockchain and OP Stack technologies. If needed, we can shift our focus even more toward unique aspects of Optimism and OP Stack, ensuring deeper engagement. With sufficient support, we also have the technical capability to develop an interactive platform, similar to coding challenge platforms or online courses, where users can onboard quickly into the Optimism ecosystem. This platform would guide users through OP Stack concepts, enabling them to actively participate and contribute to the community. Such a tool would not only educate but also empower developers to use Optimism’s infrastructure effectively.', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 99378,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xa6d24467fee1f912ca1e3fd6c5b37578b57ebcf5e10a3eac75a6ea43bfcc2d49',
    applicationId:
      '0xa6d24467fee1f912ca1e3fd6c5b37578b57ebcf5e10a3eac75a6ea43bfcc2d49',
    projectId:
      '0x522e410dc5c49ce03c9babaa1dd3f97b042e3bd25c4da22c0a484a2992ac2ac0',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Services for deploying and hosting an OP Chain',
    impactStatement_subcategory:
      "['Services for deploying and hosting an OP Chain.']",
    organization_name: 'Optimism Unlimited',
    organization_description: '',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/bcfee716-1862-4879-8d86-de2215840a82.png',
    organizationCoverImageUrl: '',
    socialLinks_website: [],
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['5779', '844381']",
    name: 'Retro Funding Site Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/1f8fbd18-d1e1-4229-84c3-94f4578e0d65.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/d0b63dc6-a2eb-4b52-af55-f237411d319e.png',
    project_socialLinks_website: [],
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget eros eu leo sodales dapibus. Ut auctor, erat eu facilisis interdum, mi leo ultricies tellus, id scelerisque risus tellus vitae nulla. Etiam vitae dolor imperdiet, viverra mauris quis, convallis sapien. Quisque leo nisi, euismod sed aliquam sit amet, convallis at tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis in libero ut risus euismod cursus sed ac nibh. Nulla nec urna nec nisi dignissim sagittis. Ut vel augue vitae orci facilisis faucibus. Sed tellus mauris, maximus quis justo nec, pellentesque rhoncus est. Duis maximus sed massa eu blandit. Mauris non ligula mattis ante maximus tincidunt vitae sit amet nisi.', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget eros eu leo sodales dapibus. Ut auctor, erat eu facilisis interdum, mi leo ultricies tellus, id scelerisque risus tellus vitae nulla. Etiam vitae dolor imperdiet, viverra mauris quis, convallis sapien. Quisque leo nisi, euismod sed aliquam sit amet, convallis at tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis in libero ut risus euismod cursus sed ac nibh. Nulla nec urna nec nisi dignissim sagittis. Ut vel augue vitae orci facilisis faucibus. Sed tellus mauris, maximus quis justo nec, pellentesque rhoncus est. Duis maximus sed massa eu blandit. Mauris non ligula mattis ante maximus tincidunt vitae sit amet nisi.', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 98000,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xac859a911407aa694e23d1616d9ce086d3d53b90789186a94bfbbb8e7294036b',
    applicationId:
      '0xac859a911407aa694e23d1616d9ce086d3d53b90789186a94bfbbb8e7294036b',
    projectId:
      '0x6e250ff96f9c00b664d519d20531150df875dff20efcd37de2738f8b3286e7f6',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Services for deploying and hosting an OP Chain',
    impactStatement_subcategory:
      "['Services for deploying and hosting an OP Chain.']",
    organization_name: 'RedStone Oracles',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: "['https://redstone.finance/']",
    socialLinks_farcaster: [],
    socialLinks_twitter: 'https://x.com/redstone_defi',
    socialLinks_mirror: '',
    team: "['849400']",
    name: 'RedStone Oracles for OP-stack chains',
    description:
      "RedStone is fastest growing Modular Oracle with clients including Pendle, Morpho, Ethena, Etherfi, Renzo, Puffer, Venus, Silo, Sommelier, Gearbox, Frax, Merlin Chain, BOB and 70+ other companies. We're live on Optimism and OP-Stack chains.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/1aac843e-d242-4bf1-aca5-fe698740d276.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/b12dec8b-f04b-4a73-b8fc-7660ef7692b4.png',
    project_socialLinks_website: "['http://blockjoy.com']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://x.com/BlockJoyWeb3',
    project_socialLinks_mirror: '',
    pricingModel: 'pay_to_use',
    impactStatement_statement:
      "[{'answer': \"We’ve built our infrastructure from the ground up to manage the deployment and operation of any blockchain node image on high-performance bare metal servers. This not only simplifies the deployment, testing, and operation of OP chains, but also enhances performance, reduces latency, improves decentralization, and significantly lowers costs compared to cloud-based solutions.\\n\\nOur infrastructure maintains archival snapshots, enabling fast node deployment near the chain tip, and takes care of upgrades, monitoring, and any custom configurations.   The user has the option to deploy nodes on their servers, or our global network of high performance baremetal servers.  This enables super low latency at a low cost.\\n\\nIn 2024, we've integrated support to include images for OP-Geth-Archive, OP-Reth-Archive, OP-Reth-Full, OP-Erigon-Archive, Base-Reth-Archive, Base-Reth-Full.  We also support any custom binaries, node settings, and sidecar applications that the user request. \", 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'High-profile projects such as Goldsky, 0x, Indexing Company, and Test In Prod have been using BlockJoy.  Some testimonials include:\\n\\n\"We\\'re using BlockJoy\\'s dedicated nodes to support the development of OP-Erigon, which has been a huge advantage for our team, allowing us to focus on our core development efforts without the headache of maintaining our own node. Additionally, BlockJoy has integrated support for OP-Erigon into their platform, enabling easy one-click deployment. This has made it incredibly simple to scale and helps spread the availability of OP-Erigon to more users, which is vital for the growth of the ecosystem.\"\\n- Taem Park, Test in Prod\\n\\n“BlockJoy has been a perfect fit for us. Their unmetered nodes offer incredible cost-efficiency, and their system lets us get the benefits of running our own nodes without worrying about upgrades or maintenance, especially when coupled with arguably cheaper pricing than even hosted providers\"\\n- Brock H., Indexing Company\\n', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 217300,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xb0913f628928698951760223a5691480a8f63b4545b5177490959b8966330272',
    applicationId:
      '0xb0913f628928698951760223a5691480a8f63b4545b5177490959b8966330272',
    projectId:
      '0x83b46efce8ff1937a49883b323b22d3483d1843522f614ab4f20cc20545067bb',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Services for deploying and hosting an OP Chain',
    impactStatement_subcategory:
      "['Services for deploying and hosting an OP Chain.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'Web3Drop',
    description:
      'Web3Drop is an all in one free alpha community. Providing giveaways, new NFT collections, tools, platforms and analysis.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/734a6d63-e401-4459-951a-44af205b034f.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/633a4362-00eb-45e9-a7cb-ee092e3d463a.png',
    project_socialLinks_website: "['https://www.conduit.xyz/']",
    project_socialLinks_farcaster: "['https://warpcast.com/conduit']",
    project_socialLinks_twitter: 'https://twitter.com/conduitxyz',
    project_socialLinks_mirror: '',
    pricingModel: 'pay_to_use',
    impactStatement_statement:
      "[{'answer': \"Conduit brought the first OP Stack fork to mainnet with the launch of Aevo in the summer of last year. Since then, hundreds of OP Stack chains have launched on our rollup platform, with more than 200 currently running across testnet and mainnet. \\n\\nOur team works very closely with stakeholders in the Optimism ecosystem. Our team members have made multiple contributions directly to the Optimism codebase, finding various fixes and suggesting improvements.\\n\\nWe invest countless hours testing Beta features like custom gas tokens, Alt-DA mode, and L3s. We also spend a lot of time testing and speccing network upgrades and hard forks like Ecotone, Fjord, and the upcoming Granite fork.\\n\\nMore than 1/3 of the rollups in the OP Superchain use Conduit to deploy, operate, and maintain their OP Stack chain. We were one of the earliest infrastructure supporters of the OP Stack and Superchain and we're excited to bring hundreds and thousands of more chains into the ecosystem!\", 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': \"More than 200 teams use Conduit to launch and operate their OP Stack chains. Our platform dramatically lowers the barriers to entry for teams to launch their own chain, enabling new types of applications and business models that weren't previously possible. This currently includes classic crypto use cases like DEXs, NFTs, and games but is also expanding to new and exciting verticals that were previously too expensive or difficult to do onchain. \\n\\nA list of Conduit customers is on our site: https://www.conduit.xyz/customers\", 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xb0acb1a252cdb3b2a7dfadc8c5925da71f005082ec045d8bb3855f64ac4774b9',
    applicationId:
      '0xb0acb1a252cdb3b2a7dfadc8c5925da71f005082ec045d8bb3855f64ac4774b9',
    projectId:
      '0xc71faa1bcb4ceb785816c3f22823377e9e5e7c48649badd9f0a0ce491f20d4b3',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Services for deploying and hosting an OP Chain',
    impactStatement_subcategory:
      "['Services for deploying and hosting an OP Chain.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'MonstersOnBase',
    description:
      "Hello, I am a designer. I am an artificial intelligence designer. I am 25 years old. I'm from Turkey. I need some support. I want to do more for Optimisim. I don't know much about Github. But everything I did here is as you want. I increased the on-chain activity and interacted with 420 wallets.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/5a68f3f9-2945-48b6-ad10-89bf4cfda2de.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/ebc40e94-f5bc-4c14-a940-e328d6daa952.png',
    project_socialLinks_website: "['https://ethpandaops.io/']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://x.com/ethPandaOps',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'The OP stack wants to support client diversity, however building a new client to interop with existing ones is a difficult proposition. The optimism-package helps make this easier with simple to use definitions, allowing new clients to run against existing/working clients and to test their implementation. The package now also support the definition of future OP forks, allowing for client teams to prototype and trial the forks locally with readable config files. ', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': \"The optimism-package currently supports multiple clients on the execution side (op-geth, op-reth, op-erigon, op-nethermind and op-besu) as well as the consensus side (op-node, hildr). While building this package, we were able to find bugs or missing features in op-nethermind, op-erigon and op-besu. Additionally, we support the magi OP CL client in an open PR, which the team can use to iterate on.The optimism-package doesn't stop at finding these issues, but it also provided an environment to test the fixes, making it a holistic local testing tool. \", 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xb4fc05ba3a42e23c1f272eeb8cf98a881bc5e4402d2eb5accdc52cd20624aedf',
    applicationId:
      '0xb4fc05ba3a42e23c1f272eeb8cf98a881bc5e4402d2eb5accdc52cd20624aedf',
    projectId:
      '0x039dd46c72b1c02723e8f81a08b606a54b5f413c6756e60ba9e3a467dbbcf38b',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Services for deploying and hosting an OP Chain',
    impactStatement_subcategory:
      "['Services for deploying and hosting an OP Chain.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'Hedgio Podcast',
    description:
      "We launched the Hedgio Podcast two months ago, and it’s quickly gaining momentum, with each episode attracting 2-3k listeners across various platforms. The podcast focuses on educating both beginners and professionals in blockchain and cryptocurrency. We cover in-depth topics such as OP Stack, Optimistic Rollups, and their impact on Ethereum's ecosystem. By addressing technical subjects and comparing blockchain technologies with traditional systems, we aim to bridge the knowledge gap, and our growing audience demonstrates the value and impact of our content on the crypto community.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/74f9790e-98f6-4590-bf6d-64a67d313f36.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/1a925fdb-b228-43e0-b020-d754ec680758.png',
    project_socialLinks_website:
      "['https://gateway.fm/', 'https://presto.gateway.fm/']",
    project_socialLinks_farcaster: "['https://warpcast.com/gateway-fm']",
    project_socialLinks_twitter: 'https://x.com/gateway_eth',
    project_socialLinks_mirror: '',
    pricingModel: 'pay_to_use',
    impactStatement_statement:
      "[{'answer': 'Our Presto platform enables seamless deployment and ensures optimal operation of any deployed rollup. We have deployed and are maintaining an OP testnet used for testing and optimisation purposes, that will soon become available as a sandbox environment to our Presto users, to enable them testing and experimentation on OP based rollup.\\n\\nWe service any clients looking to deploy OP based rollups with enterprise grade solution and support and maintenance ensuring SLA, advisory, use case development and access to our numerous in house and 3rd party solutions and products.\\n\\nWe are servicing partners and customers coming from both native web3 space as well as bug enterprise including but not limited to fortune 500 companies.', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'As mentioned we have recently implemented OP stack to our platform and have so far deployed our internal testnet to be offered to end users as well, and along we have deployed our first testnet for a customer. We are looking forward to supporting our partners with OP stack based rollup deployment and operations and use our extensive infrastructure expertise to optimise performance and improve the costs of OP based rollups.', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 156463.05,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xb6a47d2320d9ed131185bb78d349d4fc7887e599bc0d99bb3d8978b1afed65c7',
    applicationId:
      '0xb6a47d2320d9ed131185bb78d349d4fc7887e599bc0d99bb3d8978b1afed65c7',
    projectId:
      '0x193256f7753cf4350332ab5222990944b45d7ae280cd64e2bef8127ede2a2343',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Services for deploying and hosting an OP Chain',
    impactStatement_subcategory:
      "['Services for deploying and hosting an OP Chain.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: "Stepan's test project",
    description: 'Hello',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/6878f254-b99f-47ad-8cf8-7f6cd1601300.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/8f285391-e69f-40f3-aa14-1456fbb92440.png',
    project_socialLinks_website: "['https://nodeguardians.io/']",
    project_socialLinks_farcaster: "['https://warpcast.com/sam-ng']",
    project_socialLinks_twitter: 'https://x.com/nodeguardians',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'Our campaign, a series of three programming challenges called \"quests,\" was designed to help developers understand and work with the OP Stack infrastructure, enabling testing, deployment, and operation of OP chains.\\n\\nThe first quest, \"Introduction to the OP Stack,\" provides a theoretical overview of the key components of the OP Stack.\\n\\nThe second quest, \"Cross Layer Messaging,\" a CTF challenge, focuses on cross-layer communication, simulating real-world interactions that are critical to operating OP chains.\\n\\nThe third and final quest, \"Custom OP Rollup,\" guides users through deploying a custom OP rollup on Sepolia, allowing hands-on experience with the OP Stack\\'s deployment and operational features.', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'Our platform, nodeguardians.io, currently supports 700 monthly active developers. Of these, 118 started the OP Stack campaign, and 104 have successfully completed it. This campaign remains live on our platform and will be updated as the OP Stack evolves.\\n\\nThe CTF-style challenges within the campaign introduce contracts deployed on OP Sepolia. By tracking contract interactions, we can monitor user progress and completion of the quests. You can view relevant data on this dashboard here: https://snapshots.raintank.io/dashboard/snapshot/TcugNERAptas4auBDdkpwRfQAZx0WBvs\\n\\nAdditionally, 32 participants from this campaign applied to join the OP Stack demo we hosted during the Optimistic Gathering event in Brussels. As solvers of the campaign, they were automatically whitelisted and accepted into the event. You can find details of the event here: https://x.com/opgathering/status/1814336529457938861\\n', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '5m-10m',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xcd76f92636f76d63419d461b6e79cfc76979b24598d164226e90f27bd5ad996b',
    applicationId:
      '0xcd76f92636f76d63419d461b6e79cfc76979b24598d164226e90f27bd5ad996b',
    projectId:
      '0xc85a922368c764bfe1774e37d299a751f629fa1945131597e6620fe9230337f4',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Services for deploying and hosting an OP Chain',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.', 'Services for deploying and hosting an OP Chain.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'GasHawk',
    description:
      'GasHawk makes living onchain more efficient, safe, and secure. We’ve started with a service that saves retail and institutional clients up to 95% on transaction fees by accepting signed TXs and time sensitivities from users and executing in the optimal block during that window',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/f7fc289b-8ff6-4e14-82af-992103f6cd3f.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/cec5a3ac-03d9-4336-bc2e-28f41d10046c.png',
    project_socialLinks_website: "['https://syndicate.io']",
    project_socialLinks_farcaster: "['https://warpcast.com/syndicate']",
    project_socialLinks_twitter: 'https://x.com/syndicateio',
    project_socialLinks_mirror: '',
    pricingModel: 'freemium',
    impactStatement_statement:
      "[{'answer': \"Syndicate's Transaction Cloud, SmartRPC and L3 tooling have boosted the surface area of the OP-stack by allowing high-performance L3s and app chains to be built on the Superchain, for specific use cases. We are constantly helping our partner companies, and the ecosystem at large, explore use cases that merge the security and stability of L2s with the customizability offered by L3s.\", 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'We have fully deployed [HAM Chain](https://medium.com/@hamlabs/announcing-ham-chain-5597a1082769), [Degen Chain](https://syndicate.io/blog/degen-chain), the [Frame API on Warpcast](https://frame.syndicate.io) and worked with partners such as Nike on their [.SWOOSH initiative](https://twitter.com/syndicateio/status/1592280354089365505?s=61).', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 67.262,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xcf3e15274565ac49b2d05237bceaa0c3d0b4d984691bbead7c724f0328fe452f',
    applicationId:
      '0xcf3e15274565ac49b2d05237bceaa0c3d0b4d984691bbead7c724f0328fe452f',
    projectId:
      '0xe88826f4dde8d4abaa647a68763a4826fbb446e977cc00017e63dde91556b48d',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Services for deploying and hosting an OP Chain',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.', 'Services for deploying and hosting an OP Chain.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'Dragons On Op Stack 🔴',
    description:
      "Hello, I am a designer. I am an artificial intelligence designer. I am 25 years old. I'm from Turkey. I need some support. I want to do more for Optimisim. I don't know much about Github. But everything I did here is as you want. I increased the on-chain activity and interacted with 420 wallets.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/37c05bc5-3c74-41c5-ab7c-496fa673e57d.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/ff35a2ff-6a02-4a30-9da0-0808af1d67d8.png',
    project_socialLinks_website:
      "['https://www.zeeve.io', 'https://www.zeeve.io/appchains/optimistic-rollups/']",
    project_socialLinks_farcaster:
      "['https://warpcast.com/ghan-zeeve', 'https://warpcast.com/rchamria']",
    project_socialLinks_twitter: 'https://twitter.com/0xZeeve',
    project_socialLinks_mirror: '',
    pricingModel: 'freemium',
    impactStatement_statement:
      "[{'answer': '64 Op Stack-based L2 Rollup Testnets and Mainnets running on the Zeeve RaaS platform during the given period.\\n\\n146 OP enthusiasts have tried the Public Demo OP Network to deploy their smart contracts and test the fully featured L2 OP rollup during the given period.\\n\\n1000s of web3 users have accessed the OP Stack articles, blogs, and tutorials on the Zeeve platform. \\n', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'https://www.expresscomputer.in/news/leading-web3-infrastructure-innovation-the-binary-holdings-partners-with-zeeve-to-launch-layer-2-chain/112034/\\n\\nhttps://www.zeeve.io/blog/zeeve-raas-partners-with-pandasea-for-the-launch-of-their-op-stack-powered-layer2-chain/', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xd33479c5420a69c1ce3c8ba955593a63dcd454feeac43a4de417aa0bb793980a',
    applicationId:
      '0xd33479c5420a69c1ce3c8ba955593a63dcd454feeac43a4de417aa0bb793980a',
    projectId:
      '0xfad78fad680d407f81e7fd46632b4b4936676d1776a5cbf02694b94698495746',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Services for deploying and hosting an OP Chain',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.']",
    organization_name: 'brainbot/Shutter',
    organization_description: '',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/d7e880ed-d48a-4329-97a9-75f21d815def.png',
    organizationCoverImageUrl: '',
    socialLinks_website: [],
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['316218', '358280']",
    name: 'Shutterize Optimism SDK (SHOP SDK)',
    description:
      'shop-sdk is a custom ethersjs provider, that allows to send shutter encrypted ("shutterized") transactions on Shutter-Optimism.\n\nShutter-Optimism is an Optimism testnet, that provides a mechanism to include Shutter encrypted transactions.\n\nShutter is a distributed key generation (DKG) threshold encryption protocol, that enables applications and/or users to encrypt arbitrary data, commit the encrypted message (i.e. by sending it in a transaction) and have it revealed after a certain condition is met (i.e. once the position of the transaction in a future block is confirmed). Shutter\'s threshold decryption scheme, where a threshold of n out of m key holders ("keypers") need to release their decryption key share for successful reveal, enables an environment where censorship, by not releasing decryption keys, and collusion, by peeking into encrypted messages before the reveal condition was reached, become very unlikely.\n\nIn Shutter-Optimism this allows to build MEV-resistant applications.\n\nThe intention of shop-sdk is to make it as easy as possible to transform a traditional application, that could run on Optimism, into a MEV protected version running on Shutter-Optimism.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/b9e15e7a-8d23-4b25-83ab-88fc333c417f.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/a5f679ab-f06a-401f-a73c-d93f27a2f9ee.png',
    project_socialLinks_website:
      "['https://jefetoken.com', 'https://rewards.jefetoken.com']",
    project_socialLinks_farcaster: "['https://warpcast.com/jefetoken']",
    project_socialLinks_twitter: 'https://x.com/JefeTOKEN',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'Integrating an educative progress & development of a blockchain with the Op Stack brought challenges & improvements this new way to have impact in the use case of the Superchain with the tool developed kosotl (link on github repo) served as a quick reference for new users to deploy configure & test an op chain used in workshops in person & online expanding the use of the open source code at a collage level in our local community at a university teaching students & collaborating w/ professors for the development of a university blockchain experimenting a simplified route of what a decentralized system is & how to deploy, network & storage test with Optimism OPstack Open Source. This shared knowledge w/ the community simplified building the Superchain for free engaging w/updated studies groups that use these tools as art of their formation & with the bilingual research & development follow a constant documentation of the whole & how to overcome critical aspects of building an op chain', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'The approach was directly with the university Instituto Technologico Superior de San Luis Potosi in Mexico, professors, students & graduated, from the careers of technology & software engineers from different collage degrees learned the implementation of the layer 2 solutions of the open source op stack in workshops studying & in practice in creating a testnet blockchain the ability to configure it in simplified steps from the theory & in practice\\n\\nhttps://www.facebook.com/share/p/tZ6u1CoMo2CjUzhQ/\\n\\nhttps://www.facebook.com/alejandrocesar.ricomartinez/posts/pfbid02PhcgsnRqUAcbjTYty3TrgiQaHR1tEBveLnUwh94gpwFfAdBXHSkcfPCD5yTauTprl?rdid=VtwbRUyaP5uvnv99\\n\\nThis series of workshops motivated the public university directors to step forward in building & connect w/ the op blockchain for their academics & processes integrating it in their academic formation on students. Professors build, maintenance & update improvements of the Superchain blockchain built everybody all together\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xde61c4ad48fd0a8e1e783490aeab9e2d8aa05aaeba1c619e3d520f7e277e461e',
    applicationId:
      '0xde61c4ad48fd0a8e1e783490aeab9e2d8aa05aaeba1c619e3d520f7e277e461e',
    projectId:
      '0x853976b3804833ac5e65592a308ee871f6f38038d25bc6f4dac4a63892c09c5f',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Services for deploying and hosting an OP Chain',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.']",
    organization_name: 'Punk Shield',
    organization_description:
      'Punkshield is an advanced security solution designed to protect your valuable digital assets. It offers a multi-signature (multi-sig) wallet, adding multiple layers of security to safeguard your crypto holdings. Punkshield allows users to enable two-factor authentication (2FA) through Email or Google Authenticator for enhanced protection. The platform also includes a mobile-friendly interface, making it easy to manage your assets on the go.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/7c370767-c18c-48ae-9032-ce1124d08c04.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/5cd98b48-08ab-4087-a133-c2e4d410a896.png',
    socialLinks_website: "['https://punkshield.xyz/']",
    socialLinks_farcaster: "['https://warpcast.com/punkshield.eth']",
    socialLinks_twitter: 'punkonmint',
    socialLinks_mirror: '',
    team: "['841741']",
    name: 'Punk Shield',
    description:
      'Punkshield is an advanced security solution designed to protect your valuable digital assets. It offers a multi-signature (multi-sig) wallet, adding multiple layers of security to safeguard your crypto holdings. Punkshield allows users to enable two-factor authentication (2FA) through Email or Google Authenticator for enhanced protection. The platform also includes a mobile-friendly interface, making it easy to manage your assets on the go.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/3cc6bd19-1ade-4c0d-8fe3-ec6ea6f50183.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/d2d120fb-11fa-456c-b7e0-b0ed52b477e0.png',
    project_socialLinks_website: "['https://redprint.ninja/']",
    project_socialLinks_farcaster: "['https://warpcast.com/ratimon']",
    project_socialLinks_twitter: 'https://twitter.com/RATi_MOn',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'Redprint Toolkit (including `redprint-forge` and `Redprint Wizard`)’s contribution aids in usability and accessibility of the OPStack.\\n\\nThe justifications are as follows:\\n\\n1. redprint-forge\\n\\nThe contribution involves restructuring OPStack’s DeploySuperchain script. More context could be found here ( https://github.com/Ratimon/redprint-wizard/blob/main/src/routes/blog/_assets/posts/3-metric-hub.md?plain=1#L36-L48 )\\n\\nTherefore, this suggests alignment with Collective Intent 1 “Progress towards technical decentralization” due to different implementations by different team.\\n\\n2. Redprint Wizard\\n\\nIt can be thought as an interactive technical documentation and step-by-step tutorials to deploy OPStack components.\\n\\nMore detail could be found here : ( https://redprint.ninja/blog/3-metric-hub )\\n\\nI note that although part of our toolkit is a dev tool to deploy smart contract but those contracts are tailored for OPStack**, general ones. \\n', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': \"#redprint-forge\\n\\n1. Version Releases\\nNow, the versions release are at `v0.2.x`. In short, we have finished two working component (Governance and superchain) (out of four).\\n\\nThe relevant links are:\\n- [Github's Version Released](https://github.com/Ratimon/redprint-forge/releases/tag/v0.2.1)\\n- [Github's Closed Milestones](https://github.com/Ratimon/redprint-forge/milestones?state=closed)\\n\\n2. and 3 Number of Github repo likes forks\\n[redprint-forge's Repo Link](https://github.com/Ratimon/redprint-forge)\\n\\n4. Number of npm packages downloaded\\n[redprint-forge's Package Link](https://www.npmjs.com/package/redprint-forge)\\n\\n#Redprint Wizard\\n1. Number of Monthly Visitor\\n\\n2. Number of Link Clicks Toward the Code copy button\\n\\n3. Number of Downloaded code as zip file\\n\\n4. Number of visitors to our technical articles in our blog \\n\\n> we provide more details and all source of truths (GA report) including link and export files at [this page](https://redprint.ninja/blog/3-metric-hub)\", 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 149069,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xe1ad77b0271d0ad3cff469e000757b74beb8b80cf73cd9814f76161b2cd01c77',
    applicationId:
      '0xe1ad77b0271d0ad3cff469e000757b74beb8b80cf73cd9814f76161b2cd01c77',
    projectId:
      '0xf839a585342327848d4541a6fcc315404e879537a60a1370f2cd45a94283a1ba',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Services for deploying and hosting an OP Chain',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.']",
    organization_name: 'Unruggable',
    organization_description: '',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/ed676837-e1eb-45df-9066-2eb6eedb52e0.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/82442bd0-9394-450a-a95e-e5ad0761755a.png',
    socialLinks_website: "['https://unruggable.com/']",
    socialLinks_farcaster: "['https://warpcast.com/unruggable']",
    socialLinks_twitter: 'https://x.com/unruggable_eth',
    socialLinks_mirror: '',
    team: "['841173', '9778', '12956']",
    name: 'Unruggable',
    description:
      "Unruggable is focused on building the next generation of blockchain-based naming services. Our mission is to create secure and user-friendly solutions that enable projects and Layer 2 networks to establish their own naming systems using the Ethereum Name Service (ENS). As part of our commitment to open-source software development, we provide essential infrastructure that allows everyone to benefit from the scaling of ENS and L2 blockchains:\n\n'Unruggable Gateways' is an open source codebase that implements a complete solution for fetching proofs of data from rollup chains and verifying that data on Layer 1 Ethereum. We operate our own gateways using the codebase and are committed to supporting the trustless resolution of ENS names.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/e74ad0ba-d2bc-449d-9411-cbcad9bc8105.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/c7c58454-c6b7-4ce0-8b5f-cd60576940f4.png',
    project_socialLinks_website:
      "['https://github.com/rabbitprincess/builderism']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': '- User-friendly commands for launch and run op stack chain\\n- Step-by-step process and customizable configs\\n- Supports latest features like Alt-DA and Custom Gas Token\\n- Rapid patch updates in reponse to Optimism changes\\n- Deploy config generator : https://github.com/ethereum-optimism/developers/discussions/559\\n- Provides FAQ support for common issues', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'Builderism is a public repository that has received 24 stars and 4 forks for now. As an open-source initiative, it has inspired many developers to explore and utilize OP Stack tooling in their projects.\\n\\nBy simplifying the complexity and improving the accessibility of the OP Stack, Builderism contributes to the Optimism ecosystem, making it easier for developers to integrate and build OP Stack.', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: 'foundation-mission',
    grant_1_link: 'https://app.charmverse.io/op-grants/page-11949409404374878',
    grant_1_amount: 200000,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xe2a811d58e02ae68d37e584117e9ebb6ec64192a2fea99f4c8881b163e61c74f',
    applicationId:
      '0xe2a811d58e02ae68d37e584117e9ebb6ec64192a2fea99f4c8881b163e61c74f',
    projectId:
      '0xd94d69cffd7c74f4c8337b7a09462b6dd5ebd877a94f379ab67ca4881a06f554',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Services for deploying and hosting an OP Chain',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.']",
    organization_name: 'Upnode',
    organization_description:
      'Upnode provides an infrastructure for launching a full-stack OP Stack chain.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/6fa57494-f966-451b-8f33-deea359565df.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/a687b332-8d00-4a50-a371-df7096b702bc.png',
    socialLinks_website: "['https://upnode.org']",
    socialLinks_farcaster: [],
    socialLinks_twitter: 'https://x.com/upnodeIntern',
    socialLinks_mirror: '',
    team: "['328679', '394600', '849514']",
    name: 'AWS KMS and YubiHSM signer for OP Stack',
    description:
      'We have developed a signer proxy software that enables the OP Stack chain to use an external signer (currently supporting AWS KMS and YubiHSM) through the official signer client to signer the sequencer, batcher, proposer and challenger transactions. However, the official signer client does not integrate with external signers, so we have implemented this functionality in our signer proxy.\n\nCurrently, the process outlined in the Optimism documentation for setting up a sequencer, batcher, and proposer requires using plain private keys, creating an insecure environment for mainnet deployment. Although the documentation suggests using hardware security modules (HSMs) for key management, it lacks detailed guidance beyond referencing source code. Chain operators, particularly those using bare metal setups, often prefer YubiHSM2 over cloud-based solutions like AWS KMS due to its hardware-native security.\n\nTo enhance security, mainnet chain operators are encouraged to use industry-standard hardware signers like YubiHSM2 or AWS KMS. This approach allows operators to deploy Optimism stack chains securely by protecting private keys with hardware-based solutions. Existing resources, such as the integration of YubiHSM2 into the Keplr wallet and the TMKMS YubiHSM installer, provide relevant experiences that support this approach.\n\nOur AWS KMS Signer proxy has been used by the Lisk team for their op-challenger. We are working with them to make signer proxy perfect and production ready.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/8c78ad33-fb6f-432e-8530-b9c889bfc3d3.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/5ccb2584-6344-48bb-85a0-2c2d0e41d2d3.png',
    project_socialLinks_website: "['https://www.gashawk.io/']",
    project_socialLinks_farcaster: "['https://warpcast.com/dhannum8']",
    project_socialLinks_twitter: 'https://x.com/gashawkio',
    project_socialLinks_mirror: 'https://dhannum8.mirror.xyz/',
    pricingModel: 'freemium',
    impactStatement_statement:
      "[{'answer': 'GasHawk provides a non custodial, automated, transaction manager focused on making any interaction onchain more safe, efficient, and secure. We provide multiple services that can be used by end users, contract deployers, institutions and projects building on ETH mainnet, OP, Base and Sepolia. GasHawk enables developers to cheaply and securely deploy/interact with dapps, driving considerable value to the Optimism ecosystem, help retain projects and developers, and unlock new application designs. GasHawk allows developers and users to transact/deploy on chain at any time and level of volatility, with confidence that they will get the best transaction fee available on chain, within their chosen time frame. GasHawk has also provided research and implementation into Optimisms Sequencer Address which shows we can save Optimism millions per year. We are now researching a blob based submission service to implement savings for OP, Base, Worldchain, and other chains built on the OP Stack.\\n', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'GasHawk improves the user and developer experience through intelligent submission strategies on ETH mainnet, OP, Base, and Seoplia. GasHawk is a versatile service designed for a wide range of users, including developers deploying contracts, artists releasing NFT collections, platforms, protocols, relayers, collectors, investors, and everyday users. GasHawk has successfully processed tens of thousands transactions for over 7,500 users. Additionally we have shown through a customized case study that at minimum GasHawk can save Optimism millions of dollars per year with our intelligent submission strategies for its sequencer address. As we continue research on blob based execution services we plan to create another public case study and show how that can create more savings/value for the OP ecosystem.', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: 'foundation-grant',
    grant_1_link:
      'https://app.superfluid.finance/stream/optimism/0x41bf11e307426c750b84a160891d09a2751cbaa5-0x59215cad2ae02365d79884cb9c1758e403209d5f-0x1828bff08bd244f7990eddcd9b19cc654b33cdb4-0.0?view=0x59215cad2AE02365D79884CB9c1758E403209D5F',
    grant_1_amount: 50000,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xe4ad25cfe18eccc531582634d03b78b03b7115d5fc77de001e735fe178f768f3',
    applicationId:
      '0xe4ad25cfe18eccc531582634d03b78b03b7115d5fc77de001e735fe178f768f3',
    projectId:
      '0x36dd18c9e9a4bba1acfd94263e1d53c69a24376bf7129e38d60c83ef461e6ab5',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Services for deploying and hosting an OP Chain',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: '8 Bit Cats☑️',
    description:
      '8-bit cats are NFTs produced with artificial intelligence. It is a successful nft collection that has reached 420 network interactions on the base network with its unique designs.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/7d8db529-7225-43f2-bc2c-ade2f7aaf7af.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/af6a4fb6-52e3-4570-840a-e6c949ff905e.png',
    project_socialLinks_website:
      "['https://element.market/collections/dragons-on-op-stack']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'pay_to_use',
    impactStatement_statement:
      "[{'answer': \"My NFT collection enabled the testing, distribution and operation of OP chains with its sales and interactions. NFT collections with artificial intelligence content attracted people's attention and gained interaction.\", 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'Our tools were used by superchain users, which gave them easy access to the cheap and accessible nft side. They accessed and purchased the first AI-powered nft collections.', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xe5b3fe7cd3e5fee98cac3f6e248b565d2f388d92cfee64da52b43ad9d6d33ade',
    applicationId:
      '0xe5b3fe7cd3e5fee98cac3f6e248b565d2f388d92cfee64da52b43ad9d6d33ade',
    projectId:
      '0x51cda5996ef1a2ccd8fcf4ee5792337695599454c83eb1218c3ad4388dcb5bf5',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Services for deploying and hosting an OP Chain',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'NFT Starter',
    description:
      'NFT STARTER is a platform designed to help creators, artists, and entrepreneurs launch their own NFT projects. It acts as a launchpad, providing the tools and resources to create and mint NFTs. Currently working on version 2.0',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/6445d309-3c48-429b-85c7-46b3013baeb7.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/514008b5-80bb-4cf3-87e8-45b4ce67beb3.png',
    project_socialLinks_website: "['Blocknative.com']",
    project_socialLinks_farcaster: "['https://warpcast.com/blocknative']",
    project_socialLinks_twitter: 'x.com/blocknative',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'The Blocknative Decoding API removes a significant barrier to entry for developers building on Optimism. By providing effortless decoding of complex transaction data, we empower developers to focus on building innovative applications instead of wasting time and resources on manual decoding.\\n\\n- Effortless Decoding: Our API eliminates the need for developers to manually decode bytes of data. We handle the complex computations and translate them into clear, human-readable JSON format.\\n- Reduced Dev Time: Developers can integrate our API and get started building L2 applications much faster.\\n- Improved DeEx: No more deciphering complex data formats or worrying about format changes. - - Enhanced Observability: Developers and end-users can track transaction status throughout the entire journey, from L2 to L1. This provides valuable insights for debugging and troubleshooting.\\n- Future-Proof: The Blocknative Decoding API automatically handles updates behind the scenes\\n', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'Support for the Superchain Network: We currently support Optimism, Base, Mode, Zora, Kroma, and Blast making it a one-stop shop for Optimism Superchain L2 development. We are actively working on supporting more Superchains.\\n\\nIntegration into Optimism Documentation: Our API is featured in the official Optimism documentation for decoding, showcasing its value to the Optimism developer community.\\n\\nEthernow.xyz Integration: The Blocknative Decoding API powers the transaction decoding displayed on Ethernow.xyz, a popular platform for exploring how transactions settle onto the ETH L1.\\n\\nBy simplifying L2 development, the Blocknative Decoding API directly contributes to the growth and adoption of the OP Stack. We are committed to supporting the Optimism ecosystem and believe our API plays a crucial role in enabling developers to build the future of blockchain applications.\\n\\n\\n', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '5m-10m',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x969f411e6dc247aab187d46953a9823e0d9efcc82e12065494c05f34316b7515',
    applicationId:
      '0x969f411e6dc247aab187d46953a9823e0d9efcc82e12065494c05f34316b7515',
    projectId:
      '0x88f63d18a020e4aefd6093b5234cc5e11e085698bcc7652b370d38939c39097f',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Deployment and Infrastructure Management Tools',
    impactStatement_subcategory:
      "['Ethereum test networks', 'Infrastructure to test and deploy chains', 'Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.', 'Services for deploying and hosting an OP Chain.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'OP STACK DEPLOYER',
    description:
      "OP Stack Deployer is a comprehensive tool designed to streamline the setup and deployment of an OP Stack chain. By automating complex tasks, it offers a seamless experience for developers. Whether you're an experienced blockchain developer or a newcomer, OP Stack Deployer provides the necessary resources to quickly get your OP Stack-based EVM Rollup operational.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/db450965-ac30-4d2e-a635-39d40d1e4179.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/48fb767e-4b37-432b-91b6-be8671b99c45.png',
    project_socialLinks_website: "['https://op.rpchub.io']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://x.com/RealRPCHub',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'The tool is an open source RPC aggregator that offers developers the fastest and most robust RPC services by integrating owned nodes, private and public endpoints. \\nThis is a very comprehensive node management tool.\\nDevelopers can use this tool to test different OP node client implementations, and they can also deploy it on their own servers in a production environment, using it to proxy and distribute RPC requests from their projects to different OP RPC providers.\\n\\nAdditionally, we have collaborated with security companies. This tool integrates security libraries from Slowmist and Goplus. Developers can choose to turn on this functionality to protect against phishing attacks, blacklisted addresses, and other security threats.', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'The primary users of this tool are developers. We have a dedicated RPChub Discord channel where there are discussions related to this tool. Developers have generally provided positive feedback on this tool. We also collect suggestions in this channel to optimize the tool, and we encourage the community to submit pull requests for collaborative development.\\nhttps://discord.com/channels/900985418202365982/1083240109811445801', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xb70d28d9ff1d684d80f2c34512d914652c7e8af6bd8ecc64f44f61ba9cd43f52',
    applicationId:
      '0xb70d28d9ff1d684d80f2c34512d914652c7e8af6bd8ecc64f44f61ba9cd43f52',
    projectId:
      '0xcc8d03e014e121d10602eeff729b755d5dc6a317df0d6302c8a9d3b5424aaba8',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Deployment and Infrastructure Management Tools',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.', 'Services for deploying and hosting an OP Chain.']",
    organization_name: 'BlockJoy',
    organization_description: '',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/571a38bd-3602-48fd-8dfc-93f6b4913dca.png',
    organizationCoverImageUrl: '',
    socialLinks_website: [],
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['215046', '850705']",
    name: 'One-click bare metal node deployment',
    description:
      "BlockJoy makes it easy to deploy and manage dedicated, unmetered blockchain nodes on any bare metal infrastructure.\n\nIn 2024, we've expanded our support to include OP-Geth-Archive, OP-Reth-Archive, OP-Reth-Full, OP-Erigon-Archive, OP-Reth-Base-Archive, and OP-Erigon-Zora-Archive.  We also support any custom binaries, node settings, and sidecar applications that the user request. \n\nOur infrastructure maintains snapshots, enabling fast node deployment near the chain tip, and takes care of upgrades, monitoring, and any custom configurations.   The user has the option to deploy nodes on their servers, or our global network of high performance baremetal servers.  This enables super low latency access at a low cost.\n\nHigh-profile projects like Goldsky, 0x, Indexing Company, and Test In Prod have been using BlockJoy nodes throughout the past year.\n\nThe next phase of our project will enable self-serve access for users to integrate custom binaries and images, creating a truly self-serve rollup-as-a-service platform running on high-performance bare metal servers.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/e18bade7-4f41-4c9a-b531-cc7f55826d3a.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/4abcba4f-797d-4600-bf03-8c4200ff2494.png',
    project_socialLinks_website:
      "['https://cryptozombies.io/', 'https://apocalypse.cryptozombies.io/']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://twitter.com/cryptozombieshq',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': \"CryptoZombies is an interactive school that teaches students to write smart contracts by making their own crypto-collectibles game. CryptoZombies was the first tutorial on the internet for NFTs and is still very relevant to the new crop of web3 developers looking to enter the industry today. The curriculum is focused on Solidity development, which also helps onboard new developers to Optimism. \\n\\n\\nFurthermore, we've teamed up with the Optimism Foundation to build a new course, Optimism Unleashed, that teaches students to write, test, and deploy smart contracts on the OP Mainnet and use the Superchain Faucet. The course is available at https://cryptozombies.io/en/optimism\", 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'Developer interest has grown this year. Since January, our user base has increased by 23%, reaching 138,000 users.\\n\\n\\nGooge Analytics: https://drive.google.com/file/d/1qOmax2pbKkyVt_ho5RFQD-oT3zWosFWQ/view?usp=share_link', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: 'foundation-mission',
    grant_1_link:
      'https://github.com/ethereum-optimism/ecosystem-contributions/issues/76',
    grant_1_amount: 15000,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xb9925193731f8998688d37bef30f6fa484e186c5b427c44ce8fa5e5ae609f326',
    applicationId:
      '0xb9925193731f8998688d37bef30f6fa484e186c5b427c44ce8fa5e5ae609f326',
    projectId:
      '0x6bd057da522918a4675396313ae33a2f2788a1ceeb3bd7ae228015e3eb317a7d',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Deployment and Infrastructure Management Tools',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.', 'Services for deploying and hosting an OP Chain.']",
    organization_name: 'Gateway.fm',
    organization_description:
      'We pioneer Web3 infrastructure to empower builders and organisations alike to harvest paramount utilities of blockchain technology. gateway.fm',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/7888c17b-73d7-480f-8af8-aee473b9cb50.png',
    organizationCoverImageUrl: '',
    socialLinks_website: "['https://gateway.fm/']",
    socialLinks_farcaster: "['https://warpcast.com/gateway-fm']",
    socialLinks_twitter: 'https://x.com/gateway_eth',
    socialLinks_mirror: '',
    team: "['726637']",
    name: 'Presto by Gateway.fm',
    description:
      'Platform/Rollup as a Service product built by Gateway.fm enabling seamless deployments and maintenance of rollups based on several stacks including OP',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/c121ea9f-65c7-49d1-ab27-479c56b1b390.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/cbf6b9d1-98d1-4b9d-9ef4-3cf79ce43c3d.png',
    project_socialLinks_website: "['https://www.nethermind.io/sedge']",
    project_socialLinks_farcaster: "['https://warpcast.com/nethermind']",
    project_socialLinks_twitter: 'https://x.com/nethermindeth',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'Sedge enhances the ease of deploying and managing OP Stack, Ethereum and other nodes and validators, by streamlining the setup process into just a few commands. It minimizes the time needed to understand the functionality and configuration of each component. With a flexible architecture, Sedge allows users to set up the entire infrastructure on a single machine, including both L1 and OP L2 nodes. Alternatively, users can seamlessly integrate with existing L1 execution and consensus clients by passing a few straightforward arguments. This makes Sedge an efficient tool for supporting the OP Stack and improving its usability.', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'Sedge simplified the set-up and maintenance of OP Stack nodes, especially benefitting less technical operators. Sedge abstracts away many of the complexities of running a node. It helps to manage arguments and connections between components. Sedge makes the OP Stack accessible to a wider audience.', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 99379,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xc50d4140e8bf03ab7be6ef7d4375033c7081217ab46a062437636dab12c8d1cc',
    applicationId:
      '0xc50d4140e8bf03ab7be6ef7d4375033c7081217ab46a062437636dab12c8d1cc',
    projectId:
      '0xb199463048fa09ea0bf66027e2e9b73c6268b342aaf77d5aa1088a0afd801e12',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Deployment and Infrastructure Management Tools',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.', 'Services for deploying and hosting an OP Chain.']",
    organization_name: 'Zeeve Inc.',
    organization_description:
      'Zeeve is the leading platform for managed Rollups and AppChains infrastructure. Zeeve is a RaaS provider for OP Stack with other tools like TraceHawk Block Explorer and Traceye Data Indexing protocol. \n\nWe have experience of 4 years in managed infrastructure and serve 30,000+ web3 startups and enterprises. We have been managing 350+ Blockchain networks backed by a seasoned engineering team.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/4267749d-7bff-4705-b202-132f5f61ed66.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/51edb256-cacf-4856-be7a-7b5d939c4bd0.png',
    socialLinks_website: "['https://www.zeeve.io']",
    socialLinks_farcaster: [],
    socialLinks_twitter: 'https://twitter.com/0xZeeve',
    socialLinks_mirror: '',
    team: "['380166', '848716']",
    name: 'Zeeve RaaS for OP Stack',
    description:
      'Launch your Superchain-compatible Optimism L2 Rollup in a few clicks. It features a fully managed Rollup dashboard, in-depth monitoring, analytics, and alerts, as well as automated setup and deployment of Block Explorer and Bridge UI with all the required contracts. \n\nZeeve RaaS also brings 45+ 34d party integrations spanning Data Availability, Interoperability, Account Abstraction, Decentralized Storage, etc for the L2 Rollup.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/12f5886c-60f5-4e25-961b-6b940e563edf.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/05060e60-2d96-4031-a565-fb5a528a4fc4.png',
    project_socialLinks_website:
      "['https://optimism-java.github.io/superproof-docs']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://x.com/optimism_java',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'The Superproof Explorer is designed to simulate fault-proof moves. Users, particularly developers, can easily initiate attack or defense steps on their own development network or the Sepolia test network, allowing them to observe the progress of the fault proof in real time. The simulation can be conducted using both incorrectly and correctly calculated claims, which aids testers in evaluating the accuracy of the fault proof.', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'Superproof is an convenient tool for blockchain developers working with the OP stack, as well as for individuals eager to engage in dispute games.\\n\\nFor developers, Superproof provides real-time data on dispute games, allowing them to monitor key metrics such as the total games played and win numbers for both \"Attackers\" and \"Defenders.\"   This visibility is easy for understanding game dynamics on the blockchain.\\n\\nFor users, Superproof simplifies participation in the fault-proof module, making it easy to invoke game methods like \"attack\" and \"defend\" .  Additionally, the platform offers clear visualizations that detail each step in the dispute process, enhancing user comprehension.\\n\\nIn summary, Superproof not only helps developers easily access vital information but also streamlines user participation in dispute games, benefiting all involved in fault-proof interactions.', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 126726.5,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xc6ce7c19e261fb70c69dd6a721637b82fa21a048bf668295487af011c8700186',
    applicationId:
      '0xc6ce7c19e261fb70c69dd6a721637b82fa21a048bf668295487af011c8700186',
    projectId:
      '0x5759249c433d67eeb2ca1b6ff827feec164b60b92e849d6ce0db0974cedc4a89',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Deployment and Infrastructure Management Tools',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.', 'Services for deploying and hosting an OP Chain.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'Redprint',
    description:
      "Redprint toolkit, is a \\ toolkit and knowledge hub to improve OPStack accessibility, tailored for developer. It includes:\n\n1) Redprint wizard: It is a code generator/ interactive developer playground to modify OPStack ’s codebase.  It supports a space to experience, and build features which aren't yet available on the production at all, empowering developers to tinker, and push the boundaries of what's possible by composing their own different OPStack components together. \n\n2) redprint-forge: It is a developer-friendly framework/library in solidity to deploy OPStack ’s contracts in a modular style. It supports type-safe smart contract deployment, re-usable testing pipeline, all-Solidity-based ( no context switching), and tx Management via Safe Smart Contract Deploy Script",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/fedec4f8-1b92-4e5c-a717-59258b0dd2ba.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/e0035388-4b23-4215-98e3-c96e712cc18c.png',
    project_socialLinks_website:
      "['https://runtimeverification.com/', 'https://kontrol.runtimeverification.com/']",
    project_socialLinks_farcaster: "['https://warpcast.com/rv-inc']",
    project_socialLinks_twitter: 'https://x.com/rv_inc',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'The infrastructure we built, centred around Kontrol, has greatly facilitated the testing, deployment, and operation of OP chains by integrating formal verification directly into the CI pipeline. Kontrol automates the verification of critical properties, such as the L1 pausability mechanism, ensuring that every code change is rigorously tested before deployment. This continuous and automated testing reduces the likelihood of vulnerabilities making it to production, enhancing the overall security and reliability of the OP chains. By catching issues early in the development process, Kontrol accelerates deployment cycles and ensures that the operation of OP chains remains robust and secure, ultimately supporting a more resilient and dependable Optimism ecosystem.', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': \"OP Labs is one of the biggest users of Kontrol. Here's Matt's feedback on our work with Optimism: https://x.com/msolomon44/status/1828523849832612016\\n\\nWonderland team is also actively using Kontrol to test the interoperability mechanism that the Optimism team recently introduced. We are helping them out in the dedicated channel on the Optimism Protocol R&D server. We've conducted a Kontrol intro workshop for their team and here are the demo tests we've used: https://github.com/runtimeverification/kontrol-demo/pull/20 \\n\", 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xdbb1c00bcb783a6d57f89e21708b28a2f46e68012eba282142a05f2616c90dce',
    applicationId:
      '0xdbb1c00bcb783a6d57f89e21708b28a2f46e68012eba282142a05f2616c90dce',
    projectId:
      '0x881736756bdcc544ef526f7719608161ca00c6aed5d8f9b8837bdc1914f2abc6',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Deployment and Infrastructure Management Tools',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.']",
    organization_name: 'Nethermind',
    organization_description: '',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/ead85a0e-7517-4e76-a094-4ca53869d34c.png',
    organizationCoverImageUrl: '',
    socialLinks_website: "['https://www.nethermind.io/']",
    socialLinks_farcaster: "['https://warpcast.com/nethermind']",
    socialLinks_twitter: 'https://x.com/NethermindEth',
    socialLinks_mirror: '',
    team: "['230074', '292202']",
    name: 'Sedge',
    description:
      'Sedge is a command-line tool that simplifies running nodes for the OP Stack, Ethereum mainnet, and other networks, including testnets.\nSedge makes it easy to set up nodes for OP Mainnet, Base Mainnet, OP Sepolia, and Base Sepolia. Sedge also supports various client implementations, not just Nethermind, allowing users to manage OP Stack and Ethereum nodes quickly and efficiently.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/ae73d3f5-61cc-48ef-84e9-2b553d1f0739.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/46c64ba6-5c38-4bc0-9ac7-d32a55a32637.png',
    project_socialLinks_website:
      "['https://rfg1-demo.wakeuplabs.link/', 'https://www.wakeuplabs.io/', 'https://platform.wakeuplabs.io/']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'x.com/wakeuplabs',
    project_socialLinks_mirror:
      'https://mirror.xyz/0x9dFa9dfD15d2b2fa9717b4fc545c2bB35a29215c',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'The Token Historical Balance service provides a crucial tool for developers, auditors, and analysts in the Optimism ecosystem by enabling access to historical blockchain states at any specific point in time. This capability allows for more comprehensive testing of new features, optimizations, and upgrades on the OP Stack, ensuring greater reliability and security. \\n\\nIt also improves deployment strategies by allowing teams to analyze and validate changes under real past conditions, and supports ongoing operations by aiding in quick diagnostics, compliance, and transparency. This service ultimately enhances the efficiency and resilience of OP chain deployments and operations, fostering growth and trust in the ecosystem.', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'The OP Token Historical Balance service has been used by developers, auditors, and research teams across various ERC20-compatible blockchains.\\n\\n- Developers have used the tool to test smart contracts and applications by accessing historical data from multiple chains, enabling them to identify and resolve issues before deployment.\\n\\n- Auditors have leveraged our service to trace past transactions and ensure contract integrity, streamlining their audits and improving accuracy.\\n\\n- Research teams have analyzed trends and patterns over time, gaining valuable insights into blockchain behavior.\\n\\nFeedback indicates that our tool has enhanced testing, deployment, and operational efficiency, providing crucial data for decision-making and compliance.', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 'under-1m',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xde58eb0c8a9a29596b86be117d3f289e43aad908796d64e1da00712e769bf82e',
    applicationId:
      '0xde58eb0c8a9a29596b86be117d3f289e43aad908796d64e1da00712e769bf82e',
    projectId:
      '0x3060f55f50773c14b116537afebf8fa9f934664d022084f644f387e3d8e507bb',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Deployment and Infrastructure Management Tools',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.']",
    organization_name: 'optimism-java',
    organization_description:
      '# Introduction\nWe continue to build open source public goods to help the Ethereum and Optimism community get better and better.\n\n## Our Works\nWe have currently developed two important components of core OP Stack protocol:\n\n- [Hildr](https://github.com/optimism-java/hildr) is an optimism rollup node written in Java.\n\n- [Op-besu](https://github.com/optimism-java/op-besu) is an optimism execution client written in Java, a fork of [Besu](https://github.com/hyperledger/besu).\n\nIn addition, we have also developed OP Stack related tools.\n\n- [Blob-archiver-rs](https://github.com/optimism-java/blob-archiver-rs) is a service to archive and allow querying of all historical blobs from the beacon chain written in Rust.\n\n- [Superproof](https://github.com/optimism-java/dispute-explorer-frontend) is a fault proof explorer to visualize dispute game progress and statistics.\n\nMeanwhile, we also contributed in other community projects.\n\n- [Shisui](https://github.com/optimism-java/shisui) is an ethereum portal network client written in Go.\n\n- [Mev-share-java](https://github.com/optimism-java/mev-share-java) is a Java client library for Flashbots MEV-share Matchmaker.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/9b5ba58e-c9ff-4b21-8b4c-4ab561b27b6b.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/b849eed4-c5b3-484e-b376-db756fb9e697.png',
    socialLinks_website: "['https://optimism-java.github.io']",
    socialLinks_farcaster: [],
    socialLinks_twitter: 'https://x.com/optimism_java',
    socialLinks_mirror: '',
    team: "['754190', '451368', '193400']",
    name: 'superproof',
    description:
      'This is the first open source fault proof explorer. The aim of the project is to show the fault proof process to users in a visual way. \n\nWe are OptimismJ who continue to build open source public goods to help the Ethereum and Optimism community get better and better. Our main work is on OP Stack core protocols and ecosystem tools and libraries. You can view more detailed information on our official website https://optimism-java.github.io .',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/171f60c2-1e3e-4b0a-998e-4015a7f468f7.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/64c06023-a910-4646-ba3e-81baa2d935dc.png',
    project_socialLinks_website: "['https://viem.sh']",
    project_socialLinks_farcaster: "['https://warpcast.com/wevm']",
    project_socialLinks_twitter: 'https://x.com/wevm_dev',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': \"Viem is a TypeScript-based integration tool for the OP Stack that provides interfaces for Applications to interact with the OP Stack protocol. Since RetroPGF 3, Viem has added support for Actions & Utilities to facilitate Withdrawals, Deposits, and other functionalities for the OP Stack. On top of this, Viem has liased closely with Optimism Labs to:\\n- integrate OP Stack Withdrawals and Deposits into Viem\\n- deprecate the Optimism TypeScript SDK for OP Stack, and migrate consumers to Viem,\\n- update Viem's OP Stack integration for the Fault Proofs (and permissioned fallback) upgrades\\n- assist with writing of documentation of OP Stack integration with Viem\\n\", 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'Consumers of OP Viem include:\\n- Uniswap\\n- Sushiswap \\n- Optimism Bridge\\n- Superbridge (OP Stack bridge)\\n- Brid.gg (OP Stack bridge)\\n- Stripe\\n- Shopify Blockchain\\n- friend.tech\\n- Coinbase\\n- Coinbase Bridge \\n- Zora\\n- mint.fun\\n- many more...', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '1m-5m',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xe2ad55d517e5ae80f9a1c009a1368d661e7b4c951c2976090679307c29800c12',
    applicationId:
      '0xe2ad55d517e5ae80f9a1c009a1368d661e7b4c951c2976090679307c29800c12',
    projectId:
      '0x966804cb492e1a4bde5d781a676a44a23d69aa5dd2562fa7a4f95bb606021c8b',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Deployment and Infrastructure Management Tools',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.']",
    organization_name: 'Upnode',
    organization_description:
      'Upnode provides an infrastructure for launching a full-stack OP Stack chain.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/6fa57494-f966-451b-8f33-deea359565df.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/a687b332-8d00-4a50-a371-df7096b702bc.png',
    socialLinks_website: "['https://upnode.org']",
    socialLinks_farcaster: [],
    socialLinks_twitter: 'https://x.com/upnodeIntern',
    socialLinks_mirror: '',
    team: "['328679', '394600', '849514']",
    name: 'Upnode Deploy',
    description:
      'Upnode Deploy allows chain operators and developers to quickly launch their OP Stack chain with the necessary infrastructure, including an explorer, bridge, faucet, and monitoring system, by modifying a few environment variables related to the RPC endpoint, private keys, and chain information.\n\nWith a single Docker Compose command, they can launch and manage every component of the OP Stack chain, including the ability to deploy a replica node by providing `rollup.json` and `genesis.json`. Upnode Deploy also offers a user interface similar to Conduit, which simplifies the OP Stack deployment process.\n\nUnlike Conduit, Upnode Deploy provides developers and chain operators with a tool to deploy OP Stack chains on their own servers instead of relying on third-party managed servers. Upnode Deploy is free, open-source, and fully transparent, whereas Conduit is a paid, closed-source solution.\n\nUpnode Deploy supports the latest OP Stack v1.9.0 and is prepared for the upcoming migration from `pnpm` to `just`.\n\nUpnode Deploy has won Fraxtal Hackathon: https://dorahacks.io/buidl/13971\n\nVideo of docker compose deploying an OP Stack L3 on Fraxtal: https://www.youtube.com/watch?v=8dytrXGjDG4',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/46663b96-a394-4298-9ab1-bbd2f3739669.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/fc36ef5f-4347-4d44-ad13-b68906265782.png',
    project_socialLinks_website: "['https://github.com/0xFableOrg/roll-op']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': \"// You'll forgive me for copying the project description here, as it does really answer the question.\\n// For concrete uses, see the next question!\\n\\nroll-op is a script that makes it trivial for any developer to spin up an OP stack rollup, both for dev and production use.\\n\\nThe script lets you configure and run your own rollup by running only two or three commands. It uses a single well-documented config file.\\n\\nAdditionally, it supports EIP-4337 AA infrastructure (bundler + paymaster) and helps you automatically subsidize gas for transactions that match certain criteria.\\n\\nSpinning a rollup on Sepolia is as simple as:\\n\\n> git clone git@github.com:0xFableOrg/roll-op.git\\n> cd roll-op\\n> cp conf.toml.example conf.toml\\n# conf.toml: uncomment Sepolia section, add your keys & rpc\\n> ./rollop setup --yes\\n> ./rollop --preset=prod --conf=conf.toml l2\\n\\nMore info: https://twitter.com/norswap/status/1707188816455622899\", 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'Celestia has used roll-op to demonstrate the use of Celestia as an alternative DA layer for OP stack rollups:\\n\\n- https://x.com/JoshCStein/status/1816558353172300114\\n- https://docs.celestia.org/developers/optimism#run-an-op-stack-rollup-with-celestia-underneath\\n\\nI\\'ve received praise for how this helps explain the operational setup of the OP stack (e.g. https://github.com/0xFableOrg/roll-op/blob/master/docs/opstack.md)\\n\\nMy tweet about it got 130 likes, mostly from builders: https://x.com/norswap/status/1740432731790832051/likes\\n\\nroll-op was used to build RICRolling, a proof-of-concept decentralized RaaS that won first place in the Ethcon Korea hackaton:\\n- https://x.com/norswap/status/1720768605049303383\\n- https://x.com/ethconkr/status/1698269334555312501\\n\\nEndorsement by Noah Pravacek, founder of Nodekit who\\'s thinking about using roll-op: \"Roll-op makes it super easy for anyone to launch or test a new variant of the OP Stack. We have loved using it at NodeKit.\"\\n\\n', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 29814,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xe504d43ba86f679ab31ee4affb69107798ab575a77d6d1644ca7d2ea17e95998',
    applicationId:
      '0xe504d43ba86f679ab31ee4affb69107798ab575a77d6d1644ca7d2ea17e95998',
    projectId:
      '0xbdd994bf9b06072f6f8603591c8907ca5a09a21fa14dcda0cebeaaea4e074d9b',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Deployment and Infrastructure Management Tools',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'roll-op',
    description:
      'roll-op is a script that makes it trivial for any developer to spin up an OP stack rollup, both for dev and production use.\n\nThe script lets you configure and run your own rollup by running only two or three commands. It uses a single well-documented config file.\n\nAdditionally, it supports EIP-4337 AA infrastructure (bundler + paymaster) and helps you automatically subsidize gas for transactions that match certain criteria.\n\nSpinning a rollup on Sepolia is as simple as:\n\n> git clone git@github.com:0xFableOrg/roll-op.git\n> cd roll-op\n> cp conf.toml.example conf.toml\n# conf.toml: uncomment Sepolia section, add your keys & rpc\n> ./rollop setup --yes\n> ./rollop --preset=prod --conf=conf.toml l2\n\nMore info: https://twitter.com/norswap/status/1707188816455622899\n\nIt has most notably been used by Celestia as the official way to let people experiment with devnet OP stack rollups using Celestia as DA layer: https://x.com/JoshCStein/status/1816558353172300114',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/4aa97110-63e2-4703-a3f5-e42bdebceaee.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/50e95639-885c-4657-8141-4a3357fd732e.png',
    project_socialLinks_website: "['https://clear-wallet.flashsoft.eu/']",
    project_socialLinks_farcaster: "['andrei0x309', 'clearwallet']",
    project_socialLinks_twitter: 'andrei0x309',
    project_socialLinks_mirror: 'https://mirror.xyz/andrei0x309.eth',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'Is very developer friendly has advanced features for devs like direct writing and reading from contracts, very rapid switching between accounts, is open-source, super private no analytics no trackers, has OP stack in template network both OP chain and Base chain.', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': '- Chrome users that have downloaded tested and used the extension. ( current active users 200, a few thousand over the years)\\n- Users that have used code from the GitHub repository.\\n- Users that have built and used extensions from source ( unknown number)\\n- Farcaster users that have used it to SIWF on desktop and log in on warpcast.com\\n\\n', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xe8819060824137f5b433d8afa05360173be11509f53358a249c5aa470bb8f446',
    applicationId:
      '0xe8819060824137f5b433d8afa05360173be11509f53358a249c5aa470bb8f446',
    projectId:
      '0x2704cd27b8c60b098d4fe8c5c0fbae2f8f5fe9067c687c501a4c6dc6e9887876',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Deployment and Infrastructure Management Tools',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'PORTERS',
    description:
      "PORTERS is a developer-centric RPC gateway that offers fast and easy access to blockchain functionalities. PORTERS simplifies the creation and management of RPC endpoints for blockchain applications, allowing developers to focus on innovation without the hassle of backend complexities. PORTERS leverages the POKT Network's extensive node infrastructure, consisting of thousands of nodes globally, to provide its RPC services.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/34fca888-92f0-44e7-be25-bcb1da8e28a2.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/904d0d9d-e969-4b21-9251-20b15e3a79fa.png',
    project_socialLinks_website:
      "['https://github.com/joohhnnn/Understanding-Optimism-Codebase', 'https://github.com/joohhnnn/Understanding-Optimism-Codebase-CN']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://x.com/JoohhnnnChase',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': \"# Understanding Optimism Codebase\\n\\nThis document provides a comprehensive explanation of the Optimism codebase, aiming to help newcomers to Optimism quickly get started and truly understand how the code flow in the codebase works in two language version, EN & CN.\\n\\nDue to the word limit, only the first few will be briefly introduced. For a complete introduction, check:Due to the word limit, only the first few will be briefly introduced. For a complete introduction, see.\\n\\n## Brief Introduction：\\n\\n- **00-how-sequencer-generates-L2-blocks**\\n  - The sequencer plays a critical role in Layer 2 (L2) solutions, handling transaction aggregation, L1 data derivation, L2 block generation, and proposing the L2 state root in L1. This document explains the sequencer's process for generating L2 blocks, focusing on the creation of a block payload, event loop structure, code flow for block generation, and error handling.\", 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': \"This document includes, but is not limited to, assisting engineers from teams like Avail and Eigenlayer to quickly understand the OP-stack mechanism from perspectives different from the official specs. I've received numerous inquiries through various channels seeking further details, and I have helped answer these questions and improve the documentation. The document is also included in the Optimism developer repository to help more people get started quickly. The Chinese version has been published on the 'learnblockchain' forum in the Chinese blockchain community, accumulating tens of thousands of views.\", 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x98fcf3545132be6c7fee5e0164445eb0b414d983b2a5a3a2e4e694d9a2581c4f',
    applicationId:
      '0x98fcf3545132be6c7fee5e0164445eb0b414d983b2a5a3a2e4e694d9a2581c4f',
    projectId:
      '0xc1311ae4d779bb4a627759aaf66dfcd6da029a770adf015035d86e4c682f6a35',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Developer Tools and Libraries',
    impactStatement_subcategory:
      "['Research or development that introduces new features, improvements, or capabilities to the OP Stack.', 'Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'ArtGridz',
    description:
      "Dive into the new internet. Eternal and Yours.\nPreserving today for tomorrow using pixel art and blockchain storage.\n\nOur smart contract records every alteration for each pixel onchain using event emissions. These events are used to fetch the live state of the artwork and past artworks from finished canvases. A new canvas starts after all 10'000 pixels are claimed.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/563c3a20-cbfb-4a1f-b03a-058b580eb2ba.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/0407765b-33f4-4c22-9392-faeae91c37cc.png',
    project_socialLinks_website:
      "['https://shutter.network/', 'https://linktr.ee/ShutterNetwork', 'https://blog.shutter.network/']",
    project_socialLinks_farcaster: "['https://warpcast.com/shutter']",
    project_socialLinks_twitter: 'https://x.com/ShutterNetwork',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'The intention of shop-SDK is to make it as easy as possible to transform a traditional application that could run on Optimism into an MEV-protected version running on Shutter-Optimism.\\n\\nshop-sdk is a custom ethersjs provider that allows to send shutter encrypted (\"shutterized\") transactions on Shutter-Optimism.\\n\\nShutter-Optimism is an Optimism testnet, that provides a mechanism to include Shutter encrypted transactions.\\n\\nShutter is a distributed key generation (DKG) threshold encryption protocol, that enables applications and/or users to encrypt arbitrary data, commit the encrypted message (i.e. by sending it in a transaction) and have it revealed after a certain condition is met (i.e. once the position of the transaction in a future block is confirmed).\\n', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'DEXs and DeFi applications, along with their users, stand to benefit the most from our work on the OP Stack, particularly from our SDK. The SDK allows for easy integration of encryption at the front-end level, providing shielded trading and protection against front-running and sandwich attacks. This results in fairer pricing and enhanced security for users. Although we are still in discussions with DEXs like Velodrome on Optimism, they are actively researching how to integrate these features.', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0x9932b50339f36c2327df7eac42965014d561c7401e6fdf50550727ad228f56f2',
    applicationId:
      '0x9932b50339f36c2327df7eac42965014d561c7401e6fdf50550727ad228f56f2',
    projectId:
      '0x66cce776ce6eaa99192120fc25b91ecc7b98e03210a08f0d3bfda82f542d3e1a',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Developer Tools and Libraries',
    impactStatement_subcategory:
      "['Research which informs Ethereum core development', 'Research or development that introduces new features, improvements, or capabilities to the OP Stack.', 'Work on core components of the OP Stack, including client implementations, modules, and modifications.', 'Services for deploying and hosting an OP Chain.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'PANTONE PLANET',
    description:
      'Pantone Planet, is an NFT series from the universe, with different colors and has its own uniqueness',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/88286a99-4f87-423a-8d13-2ed8ebe4f47c.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/6e9dc772-39bd-48ef-b113-988854d3062b.png',
    project_socialLinks_website:
      "['https://github.com/smartcontracts/simple-optimism-node']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'The simple-optimism-node is an open-source Docker Compose deployment script for Optimism\\'s full/archive node, used by over 320 developers and featured in the official documentation: https://docs.optimism.io/builders/node-operators/tutorials/node-from-docker\\n\\nWithout simple-optimism-node, node operators need to follow a lengthy set of instructions on the \"Running an OP Mainnet Node from Source\" (https://docs.optimism.io/builders/node-operators/tutorials/mainnet) page.\\n\\nWith simple-optimism-node, node operators can simply set the L1 endpoint in the .env file and launch the node with a single Docker Compose command.', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'The simple-optimism-node is used by over 320 developers and node operators to deploy OP and Base full nodes on their servers. Below are some key metrics that indicate its adoption:\\n\\n- Stars: 321\\n- Forks: 111\\n\\nFrom October 1, 2023, to July 31, 2024, the following metrics were observed:\\n\\n- External Contributors: 3\\n- Issues Opened: 34\\n- Issues Closed: 30\\n- Merged Pull Requests: 28\\n\\nHowever, the actual usage is higher, as many instances are not being tracked.', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 6.093,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xa36ae760edb91ba8bfcc2b52b664fb4731ec09b78033b1bbec9d83d167d590e8',
    applicationId:
      '0xa36ae760edb91ba8bfcc2b52b664fb4731ec09b78033b1bbec9d83d167d590e8',
    projectId:
      '0x9b6e73ac9e887b808c56aba853cfadad39df635d11bd5a9d6697f2e2658f4b5c',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Developer Tools and Libraries',
    impactStatement_subcategory:
      "['Services for deploying and hosting an OP Chain.', 'Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'OmniHub',
    description:
      'OmniHub NFT launchpad invites you to explore the boundless realms of creativity. Create your own collection in just a few clicks. This is where the future of art is born.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/6b0b4d90-65d2-4e98-9e26-b8fd2216e943.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/d2a87b39-c867-4110-a5cc-faabe009c0de.png',
    project_socialLinks_website: "['https://citizenwallet.xyz/']",
    project_socialLinks_farcaster: "['https://warpcast.com/citizenwallet']",
    project_socialLinks_twitter: 'https://x.com/citizenwallet',
    project_socialLinks_mirror: '',
    pricingModel: 'freemium',
    impactStatement_statement:
      "[{'answer': 'With our NFC wallet implementation, we build a solution to create smart wallet accounts on any NFC tag using account abstraction. People can send tokens to their NFC tag and tap to pay at a series of whitelisted stations (to avoid abuse).\\n\\nIt allows you to do simple transactions in stablecoins or any other token. It can be used at events to manage payments and to allocate finite resources to make sure that these are distributed fairly (e.g. swag). It could also be used as a way to reward people (e.g. earn tokens by doing some positive actions at the event, tap your wristband to receive the tokens). Can can read more about it here: \\nhttps://citizenwallet.xyz/nfc-wallet-intro', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'Our NFC Wallet has been used at several events within the web3 and Optimism ecosystem over the last few months. We would like to highlight two of them: \\n- Celo Gather Berlin (1 June 2024): NFC wallet was used to create an in-event economy where users could complete challenges to earn tokens and buy SWAG. \\n    - Full report here: https://citizenwallet.xyz/posts/implementing-nfc-wallet-at-celogather.\\n    - During the event 761 transactions were made on Celo.\\n    - Token contract: https://celoscan.io/address/0x3C960E72BBbD837293e75080E1d0Fee6a4640357\\n- Regen village during EthCC Brussels(8-12 July):\\n    - https://www.regenvillage.brussels/\\n    - https://x.com/citizenwallet/status/1804793942807834811\\n    - During the event 1,383 transactions were made on Base.\\n    - https://basescan.org/token/0x9e179257BE653C56F734Ad0bE8C59503592309Eb\\n    - Full report: https://citizenwallet.xyz/posts/regen-village-brussels-2024\\n    - Event video recap: https://www.youtube.com/watch?v=FSCi_173Alw', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: 'token-house-mission',
    grant_1_link: 'https://app.charmverse.io/op-grants/page-29596258544520615',
    grant_1_amount: 30000,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xb79e4919dfe7b72d966ad36ff7aa4619204a47d7e281f9bf955114a366f7189b',
    applicationId:
      '0xb79e4919dfe7b72d966ad36ff7aa4619204a47d7e281f9bf955114a366f7189b',
    projectId:
      '0x0be3a0fa062180bdfbfdefa993b09acd9edcae93ba0d8d5829dd01c138268f40',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Developer Tools and Libraries',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.', 'Services for deploying and hosting an OP Chain.']",
    organization_name: 'Conduit',
    organization_description:
      'The rollup-native cloud platform. Conduit gives builders dedicated blockspace so they can scale their onchain apps and ecosystems.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/44db5c0b-6ff2-4d33-aa47-bd06a9b1f7fc.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/daaebce5-30af-4b75-91f5-0e4ee90ee96f.png',
    socialLinks_website: "['https://www.conduit.xyz/']",
    socialLinks_farcaster: "['https://warpcast.com/conduit']",
    socialLinks_twitter: 'https://twitter.com/conduitxyz',
    socialLinks_mirror: '',
    team: "['301193']",
    name: 'Conduit OP Stack Contributions',
    description:
      'The rollup-native cloud platform. Conduit gives builders dedicated blockspace and throughput to scale their onchain apps and ecosystems.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/8edaf178-239d-4396-85f0-15b9a13eff91.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/23f1881a-a148-4a96-b974-97e0a4016d0b.png',
    project_socialLinks_website: "['https://dapplearning.org/']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://x.com/Dapp_learning',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'DappLearning is the definitive guide to decentralized application (Dapp) development on blockchain technology. It offers step-by-step practical experience through classic projects. The GitHub repository has garnered over 5K stars. The OP Stack is a crucial component of this guide, and we have meticulously designed relevant experiments, as well as compiled a rich list of reference materials for those who wish to learn. Additionally, we organized two online OP Stack sharing sessions and uploaded the related videos to YouTube, which have received nearly 1K views. \\nOur tutorial not only assists Mandarin-speaking developers in Mainland China but also extends its reach to support developers in regions such as Hong Kong, Singapore, Malaysia, and beyond.\\n\\nOP stack tutorial (docs + video course): \\nhttps://github.com/Dapp-Learning-DAO/Dapp-Learning/blob/main/basic/28-optimism-layer2/README.md\\nhttps://www.youtube.com/playlist?list=PLgPVMJY4tnFNXwnStKiI9FZ9cV-OqgZMT\\n', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'Our development tutorials have reached thousands of developers, with the OP Stack-related tutorials being particularly popular. To date, our GitHub repository has garnered over 5K stars, and our YouTube channel has surpassed 5K subscribers, making it highly influential in the Asia-Pacific region.', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 248448.21,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xb8245308e1c3254dcff6ff8e2839cdf1db8337cbae359062241543eec883b909',
    applicationId:
      '0xb8245308e1c3254dcff6ff8e2839cdf1db8337cbae359062241543eec883b909',
    projectId:
      '0xdf0dda3c4884be5e562f35b299dccd8bc4e468843197166b3fc87a93dd211055',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Developer Tools and Libraries',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.', 'Services for deploying and hosting an OP Chain.']",
    organization_name: 'ethPandaOps',
    organization_description:
      'We are a team of DevOps engineers at the Ethereum Foundation dedicated to coordinating and testing Ethereum protocol upgrades. Our mission is to build reusable tools for the entire ecosystem, with a focus on enhancing the deployment and testing stack of Ethereum. We manage the deployment, maintenance, and testing of upcoming upgrades through devnets, working closely with Ethereum client teams to identify and resolve bugs.\n\nIn addition to testing, we actively collect and monitor data from the Ethereum mainnet and testnets to detect anomalies and gain research insights. This data stack provides valuable insights into the network’s state and lays the groundwork for future, data-driven upgrades.\n\nRecently, we have expanded our efforts to include Layer 2 (L2) support for the automation tools we use on L1. This initiative aims to facilitate easier interoperability and accelerate testing processes.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/79ddd288-f60d-4985-ae21-dfa433d92472.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/fbab7e54-5168-4c5f-9a1e-6dd29bfec921.png',
    socialLinks_website: "['https://ethpandaops.io']",
    socialLinks_farcaster: "['https://warpcast.com/ethpandaops']",
    socialLinks_twitter: 'https://x.com/ethPandaOps',
    socialLinks_mirror: '',
    team: "['840195', '212735', '843933', '11652', '840686', '811515', '212493']",
    name: 'Kurtosis optimism package',
    description:
      "Kurtosis is an advanced tool for creating local, modular Ethereum devnets with easy to read definitions. It supports deployment on Docker or Kubernetes, providing extensive access to a wide range of tools. The ethPandaOps team actively maintains a Layer 1 Ethereum blockchain definition through the ethereum-package, which is utilized to validate and test future Ethereum upgrades, facilitating the identification of semi-reproducible bugs.\n\nLeveraging Kurtosis's modular architecture, we have developed an Optimism package that builds on top of the maintained L1 devnet. This allows OP-Chains to develop, test, and verify changes independently, without the need to continuously monitor L1 changes.\n\nThe local deployment capabilities of our package enable rapid feedback cycles during development, while the built-in multi-client support ensures interoperability across different clients. We have collaborated with the op-reth, op-erigon, and op-nethermind node teams to verify and fix bugs using the Optimism package.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/eb2f9786-782a-4c8a-86ef-fa3aca286e98.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/1233d4d9-ddf6-414b-aba3-f91e821584ef.png',
    project_socialLinks_website: "['https://github.com/richardgreg/op-docs']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': \"My contributions, though focused on documentation rather than new infrastructure, have greatly enhanced OP chains' testing, deployment, and operation by making the OP Stack more accessible.\\n\\n**Improved Resource Discoverability:** Enhancing the searchability of Docker images allows developers to find containerized environments for testing, saving time quickly.\\n\\n**Clear Operational Guidelines:** I've documented key aspects like the derivation pipeline and node log levels, helping operators deploy and monitor OP chains effectively while reducing the learning curve and preventing misconfigurations.\\n\\n**Enhanced Feature Understanding:** Documenting features like span batches and internal reverts has provided operators with clarity, reducing errors during testing and deployment.\\n\\nThese efforts and others not highlighted make OP Stack easier to use and ensure smoother operations for developers and operators.\", 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'Since documentation is vital in any open-source project, my contributions have benefited a broad range of users:\\n\\n**Core Developers:** Enhanced documentation, particularly on the derivation pipeline and span batches, helps developers better understand OP Stack operations and implement features in a structured way.\\n\\n**OP Chain Operators:** By documenting key operational aspects like node log levels and the derivation pipeline, operators now have clearer instructions, helping them avoid common issues and run their systems more efficiently.\\n\\n**Developers Building on OP Stack:** Developers integrating the OP Stack have gained clearer guidance on features like span batches and internal reverts, enabling more thorough testing before production deployment.\\n\\nThe benefits are evident in the increased ease of use and understanding for anyone interacting with the OP Stack.', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '1m-5m',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xbfd7b95f33e8c7a404c83f66590f3e39b05403211615887b0cd2dcd37cb9eea7',
    applicationId:
      '0xbfd7b95f33e8c7a404c83f66590f3e39b05403211615887b0cd2dcd37cb9eea7',
    projectId:
      '0x482720e73e91229b5f7d5e2d80a54eb8a722309c26dba03355359788b18f4373',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Developer Tools and Libraries',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.', 'Services for deploying and hosting an OP Chain.']",
    organization_name: 'Syndicate',
    organization_description:
      'Syndicate helps companies build high-performance communities on-chain through our products such as Transaction Cloud, our work with L3s, and the Metabased initiative.',
    organizationAvatarUrl: '',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/2eeefee4-8cfd-49e6-b452-fbd951d355a4.png',
    socialLinks_website: "['syndicate.io']",
    socialLinks_farcaster: "['https://warpcast.com/syndicate']",
    socialLinks_twitter: 'https://x.com/syndicateio',
    socialLinks_mirror: '',
    team: "['2987']",
    name: 'Mirror',
    description:
      'Syndicate helps companies build high-performance communities on-chain through our products such as Transaction Cloud, our work with L3s, and the Metabased initiative. Mirror is our project that allows you to listen to offchain events or poll offchain resources & mirror that data to other chains.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/86341a25-24ac-4e74-bd33-ebf7622e8863.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/2183cd4a-1222-48d8-9f15-09edcb6aaf39.png',
    project_socialLinks_website: [],
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 298137.85,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xc662f93196869bd6f0d5bff407c17482ad7670f83ef687dd994c20ff8abd67ae',
    applicationId:
      '0xc662f93196869bd6f0d5bff407c17482ad7670f83ef687dd994c20ff8abd67ae',
    projectId:
      '0xd97260a3e245900619162288374fe95a901e462c2429a44bea21ff68ad7c0174',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Developer Tools and Libraries',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.', 'Services for deploying and hosting an OP Chain.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'JEFE TOKEN',
    description:
      "JEFETOKEN is a software development project focused on smart contracts, blockchain technology, video games & mobile applications. Our goal is to create an ecosystem of web3 applications, based on our own token that powers our platforms and services. Additionally, we offer education through interactive workshops, both in-person and digital, to facilitate user integration into the blockchain ecosystem.\nBlockchain: The JEFE token is developed Open source under the MIT license,  coded in Solidity and forms the foundation of the project, deployed on the mainnet in Optimism as $JEFE with the vision of being part of the SUPERCHAIN.\n\nApplication Development: We implement web3 activities within the community, promoting healthy competition through participation in educational workshops and learning activities on blockchain usage. All information is accessible to users from our website and with direct support on our social media channels. We have our own video game, Jefe Zombie, available on Android and iOS. This game introduces users to using their ERC-20 address to rank within the community and earn on-chain rewards, such as $JEFE & NFTs, and off-chain rewards, such as game appearances & accessories.\n\nCommunity Support: We also support community talent in areas like sports (American football and paintball), audiovisual art, helping artists transition to the web3 world, and e-sports, promoting competition and game streaming among users.\n\nJEFE University: We have JEFE University, a tour of presentations  and workshops at universities about Optimism, blockchain & web3. We generate POAPs (Proof of Attendance Protocol) for attendees, promoting learning and knowledge sharing.\n\nRewards Program: We incentivize talent and user engagement within our ecosystem through a comprehensive rewards program, prominently featured on our website. Additionally, we're currently developing JEFE COMPASS, an innovative mobile Dapp where users can seamlessly monitor the global community ranking, organize activities, and track both on-chain and off-chain interactions from community addresses and VOTE for events, competitions, top players and more. By participating, users earn rewards points, enabling them to evolve their progress and level of their ranking within the community. \nThis program recurrently lists community activities that integrate web3, providing an access point to understand the use case of JEFE TOKEN. We act as a compass for navigating the web3 world, with a vision of a Superchain. Our utility is to support the transition from web2 to its integration with the Superchain in web3 interactively.",
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/7782a4d3-48ab-4027-b2ac-7685dd744470.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/31d95f35-43e6-4c07-821b-70221b57e233.png',
    project_socialLinks_website: "['https://punkshield.xyz/']",
    project_socialLinks_farcaster: "['https://warpcast.com/punkshield.eth']",
    project_socialLinks_twitter: 'https://x.com/Punkonbase',
    project_socialLinks_mirror: '',
    pricingModel: 'freemium',
    impactStatement_statement:
      "[{'answer': '', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': '', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xc8a03780dc632e8fad9356662e52723f5e6cff9ba457c0f29e15653c2d26fe7c',
    applicationId:
      '0xc8a03780dc632e8fad9356662e52723f5e6cff9ba457c0f29e15653c2d26fe7c',
    projectId:
      '0x28a8b14613c3a5790b2d0c7b7d32384ecd187b3b86fc66ba9d9244944d20b422',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Developer Tools and Libraries',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.', 'Services for deploying and hosting an OP Chain.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'Builderism',
    description: 'Make your op stack with just a few commands!',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/339e37a6-4383-431f-be9a-fd40d82586c0.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/d40c4486-fd46-4b2b-9bdf-d28c9dd636b5.png',
    project_socialLinks_website: [],
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'The TechNERDs have played an essential role as highly active contributors to the Optimism Collective. They’re primarily focused on assisting with deployment, troubleshooting, and operation of OP Chains across Discord and GitHub.\\n\\nTheir activity has generated reusable knowledge bases within GitHub threads that future OP Stack developers can refer to, streamlining the onboarding process and reducing the learning curve for new adopters.\\n\\nAs front-line support, the TechNERDs also assist with troubleshooting, often helping developers overcome technical challenges that otherwise hinder the devx of the OP Stack. This day-to-day involvement with developers allows them to act as an early detection system for bugs and potential issues in the OP Stack. Their feedback has directly contributed to the identification of bugs, accelerating the remediation process and ultimately improving the developer experience for the broader OP Stack community.', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': '# Metrics\\n\\n### Questions Answered\\n\\n**The TechNERDs answered over 491 questions related to the OP Stack during this period.** It should be noted that not all contributions during this time period have been submitted yet. Therefore, the numbers presented here are an undercount of the actual total questions answered. \\n\\n### Discord Activity\\n\\n**They have also collectively sent over 2153 messages in the technical support channels of the Optimism Discord server during this period supporting.**\\n\\n### High Impact Examples\\n\\n- [Troubleshooting mega thread](https://github.com/ethereum-optimism/developers/discussions/17)\\n- [Direct feedback that led to improved communication around network upgrades](https://github.com/ethereum-optimism/developers/discussions/184)\\n- We have seen chains get their first level of support and getting off the ground through this programs support.\\n- We have also supported answering questions for top protocols like RocketPool, ENS, Hop, etc.', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 19875.86,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xcf7477b956b4001b44a618139890f8decf0ad34ae55f0db1f01789040a17af0c',
    applicationId:
      '0xcf7477b956b4001b44a618139890f8decf0ad34ae55f0db1f01789040a17af0c',
    projectId:
      '0x5c7ef2866a2370e1e24397b22dfaf937c2b801778335a755b258c7e8fe19d027',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Developer Tools and Libraries',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.']",
    organization_name: 'Blocknative',
    organization_description: '',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/67b75c95-4f8c-4cc9-9dca-2d4b12b2b682.png',
    organizationCoverImageUrl: '',
    socialLinks_website: [],
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['410300']",
    name: 'Blocknative Decoding API',
    description:
      'Blocknative is dedicated to building developer-friendly tools that enhance user experience and ecosystem growth. We specialize in creating innovative solutions for gas fee estimation across various blockchains and have been building, running, and maintaining advanced gas estimation and optimization infrastructure since 2021.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/ff2964ec-4435-4cf8-b993-e16f49b47b96.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/49cf8f2c-bea6-4a22-bd7f-75a65138bd71.png',
    project_socialLinks_website: "['https://unruggable.com/']",
    project_socialLinks_farcaster: "['https://warpcast.com/unruggable.eth']",
    project_socialLinks_twitter: 'https://x.com/unruggable_eth',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'Our `OPFaultVerifier` and `OPVerifier` contracts (deployed on L1) allow for the provable verification of any data stored on an OP Stack chain on L1. This includes both chains that do and do not implement fault proofs. Implementors can utilise our simple, well documented public API ([Unruggable Gateway Documentation](https://gateway-docs.unruggable.com)) to write smart contracts that utilise the power of [ERC-3668](https://eips.ethereum.org/EIPS/eip-3668) (CCIP Read) to trustlessly fetch data from OP stack chains. This significantly improves interoperability, and lowers the barrier to entry for working with the Optimism ecosystem.', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'One example of our tooling in action is with NameSpace, a subname management platform that enables users to create subnames on Base using their ENS name. In a recent [forum post](https://gov.optimism.io/t/namespace-builder-grant-update-season-5-cycle-19/8794), they detailed their setup, which includes the use of Unruggable’s tooling.\\n\\nUnruggable’s tooling \"makes it possible to have fully verified ENS subnames by using proofs,\" ensuring that each subname is verifiable and secure. \\n\\nThe ability to leverage Unruggable’s system for fully verified subnames is a key advancement, providing enhanced trust and reliability to users managing their subnames within the ENS ecosystem.\\n\\n[opdemo.eth](https://discuss.ens.domains/t/ens-dao-newsletter-64-07-02-24/19354#new-optimistic-fault-proof-gateway-launched-34), which demonstrates resolving ENS names from the Optimism mainnet using fully proven resolution, showcasing secure and verifiable name resolution across L2 networks.', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '10m-25m',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xd261ecf2a0de917337ca2256a45c6c898dbfb1bd6f3a1486276cad0055843913',
    applicationId:
      '0xd261ecf2a0de917337ca2256a45c6c898dbfb1bd6f3a1486276cad0055843913',
    projectId:
      '0xa17b3d5e5ef47fe50e56d9fea3c4c90e72b0c9127b8eab54058e5ca82111378c',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Developer Tools and Libraries',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.']",
    organization_name: 'BlockPI Network',
    organization_description:
      'BlockPI is a multi-chain globally distributed RPC Network, offers topnotch RPC services with low cost, high performance, low latency for all web3 projects. Additionally, BlockPI is paving its way on building a unified platform with a suite of tools designed for Account Abstraction infrastructures.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/5a6e9fd1-3924-4cdc-a57a-a6fd33506d2d.png',
    organizationCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/af3bac68-ebef-49e5-a9cb-a4b7c845a097.png',
    socialLinks_website:
      "['https://blockpi.io/', 'https://x.com/RealRPCHub', 'https://aaexplorer.com/']",
    socialLinks_farcaster: "['https://warpcast.com/alberthe']",
    socialLinks_twitter: 'https://x.com/RealBlockPI',
    socialLinks_mirror: '',
    team: "['568168']",
    name: 'RPCHub',
    description:
      'RPCHub is an open source RPC aggregator allowing you to customize configurations and set own strategies, enabling the fastest and most robust RPC services.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/a73d46f5-87ba-4204-88eb-7ce51ab055de.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/ffb2a694-74be-48f3-897d-96034c088b3a.png',
    project_socialLinks_website: [],
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'Our AWS KMS Signer proxy has been used by the Lisk team for their op-challenger. We are working with them to make signer proxy perfect and production ready.\\n\\nThere may be other teams looking into this solution but have not contacted us, especially those who are looking to launch a mainnet OP stack chain on-premises.', 'question': 'Who has used your tooling and how has it benefited them?'}, {'answer': 'We have developed a signer proxy software that enables the OP Stack chain to use an external signer (currently supporting AWS KMS and YubiHSM) through the official signer client to signer the sequencer, batcher, proposer and challenger transactions. However, the official signer client does not integrate with external signers, so we have implemented this functionality in our signer proxy.\\n\\nThe Optimism documentation for setting up a sequencer, batcher, and proposer relies on plain private keys, posing security risks for mainnet deployments. Although hardware security modules (HSMs) like YubiHSM2 and AWS KMS are recommended, detailed guidance is limited. To improve security, mainnet chain operators should use industry-standard hardware signers like YubiHSM2, favored for its hardware-native protection, or AWS KMS, to safeguard private keys during deployment.\\n\\n', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xd890d5c2369e84688d196a6181ddfde1f1fc9d2d3f4e55ee93a3da851145f96f',
    applicationId:
      '0xd890d5c2369e84688d196a6181ddfde1f1fc9d2d3f4e55ee93a3da851145f96f',
    projectId:
      '0x1cdc515cbaa37d126f91ca367bc7b3b2126562a2fd1a10a8ad8b1b1d9bc06a69',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Developer Tools and Libraries',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.']",
    organization_name: 'Citizen Wallet',
    organization_description: '',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/de05e730-c051-4e58-956f-0db7fe6d11bf.png',
    organizationCoverImageUrl: '',
    socialLinks_website: [],
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['20674', '266214', '393897']",
    name: 'Citizen Wallet Core development',
    description:
      'Citizen Wallet, offers communities the web 3 tools they need to easily launch, use and manage community currencies.\n\nSo far we have built:\n- Easy-to-use wallet native mobile app that takes away all the complexity of Web 3 (no gas fees, no configuration)\n- transaction monitoring dashboards\n- NFC wallet solution for simple tap-to-pay or tap-to-earn in-person transactions\n- Administration dashboard with simple flow to create token faucets for easy distribution.\n- Dedicated Point of Sale application to accept tokens in shops.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/91ebe6cd-12a6-42fb-b3ef-d717e79ac9b8.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/84ec5980-5e06-4630-92b4-16ce9e9e3f83.png',
    project_socialLinks_website:
      "['https://deploy.upnode.org', 'https://upnode.org', 'https://dorahacks.io/buidl/13971', 'https://www.youtube.com/watch?v=8dytrXGjDG4']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://x.com/upnodeIntern',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'Upnode Deploy allows chain operators and developers to quickly launch their OP Stack chain with the necessary infrastructure, including an explorer, bridge, faucet, and monitoring system, by modifying a few environment variables related to the RPC endpoint, private keys, and chain information.\\n\\nWith a single Docker Compose command, they can launch and manage every component of the OP Stack chain, including the ability to deploy a replica node by providing `rollup.json` and `genesis.json`. Upnode Deploy also offers a user interface similar to Conduit, which simplifies the OP Stack deployment process.\\n\\nUnlike Conduit, Upnode Deploy provides developers and chain operators with a tool to deploy OP Stack chains on their own servers instead of relying on third-party managed servers. Upnode Deploy is free, open-source, and fully transparent, whereas Conduit is a paid, closed-source solution.', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'Upnode Deploy has won Fraxtal Hackathon: https://dorahacks.io/buidl/13971\\n\\nVideo of docker compose deploying an OP Stack L3 on Fraxtal: https://www.youtube.com/watch?v=8dytrXGjDG4\\n\\nOur main opstack-compose repository has received 5 stars and 1 fork', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 30700,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xde7b3a40765064191246ddb590967ba43e97fc31c4a5c7359438c7ee72bb622c',
    applicationId:
      '0xde7b3a40765064191246ddb590967ba43e97fc31c4a5c7359438c7ee72bb622c',
    projectId:
      '0xd7a8e115b2b3772d7d5656d7798e349dcdedf2463302c78528c9e9686ab4efe3',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Developer Tools and Libraries',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.']",
    organization_name: 'Runtime Verification',
    organization_description: '',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/44b30b3b-2bce-456e-be10-a04eabce257d.png',
    organizationCoverImageUrl: '',
    socialLinks_website: [],
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['465226']",
    name: 'Kontrol - formal verification tool based on Foundry and KEVM',
    description:
      'Runtime Verification has been at the forefront of open-source formal verification tools for more than a decade. Our generalistic approach allows us to use our technology on multiple blockchains. While KEVM offers our verification infrastructure to all EVM-based smart contracts, Kontrol greatly reduces the barrier to entry to formal verification for Solidity smart contracts.\nOur tooling is completely open source and freely accessible to all developers of the Optimism ecosystem at no additional cost.\n\nKEVM is an EVM executable formal semantics written in the K framework. KEVM passes all Ethereum conformance tests and is the entry point for formally verifying smart contracts with the K framework. However, using plain KEVM requires ad-hoc training on the K framework to write specifications. Additionally, these specifications can be quite verbose, increasing the difficulty of writing them.\n\nKontrol solves this by allowing developers to write the formal specification of their smart contracts directly as Foundry property tests. These tests are automatically translated into KEVM specifications, keeping all the verification guarantees whilst allowing for a much more easy developer experience.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/a6bd06ef-a0bd-4aa1-be8e-00a211a6015b.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/436760bb-94e6-4220-9102-b65ff5005758.png',
    project_socialLinks_website:
      "['https://element.market/collections/8-bit-cats-d4614f4b1']",
    project_socialLinks_farcaster: "['@zeus199803']",
    project_socialLinks_twitter: 'https://twitter.com/CiyiltepeE32442',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'It was a very good welcome, I am happy with opstack, OPTIMISIM IS KING. We only had problems with block speeds in the infrastructure, the rest was pretty good. A slightly faster block technology update is a must for you.', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'It was a very good welcome, I am happy with opstack, OPTIMISIM IS KING. We only had problems with block speeds in the infrastructure, the rest was pretty good. A slightly faster block technology update is a must for you.', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xe33893222dd3821254fa554823aa69248fe9ffeb611f3dd4acdc8b04e47c9b85',
    applicationId:
      '0xe33893222dd3821254fa554823aa69248fe9ffeb611f3dd4acdc8b04e47c9b85',
    projectId:
      '0xf6ab5ce1bb1cade3c885b0668addb79ea8997b6dd2b106e95ef1ada65d6f10b7',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Developer Tools and Libraries',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.']",
    organization_name: 'WakeUp Labs',
    organization_description:
      'WakeUp Labs is a software engineering company that builds applications, infrastructures, and protocols.\n\nWe provide end-to-end development services, from ideation and strategy to design and implementation, helping our clients unlock the full potential of technology.\n\nWith our deep expertise in development and our commitment to delivering high-quality results, we empower startups, enterprises, tech enthusiasts, business owners, entrepreneurs, and DAOs to transform their vision into reality. Whether you are looking to build a product or accelerate the development of your ecosystem, WakeUp Labs is your trusted partner for innovation and growth.',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/35ef9da2-fbf8-4bfc-a2f3-9d25ddf257c4.png',
    organizationCoverImageUrl: '',
    socialLinks_website: "['wakeuplabs.io']",
    socialLinks_farcaster: [],
    socialLinks_twitter: 'x.com/wakeuplabs',
    socialLinks_mirror: '',
    team: "['850118', '450183']",
    name: 'Token Historical Balance',
    description:
      "The OP Token Historical Balance is a critical tool developed by WakeUp Labs that improves the usability and functionality of the Optimism blockchain. This service empowers developers, analysts, and users by enabling them to query historical blockchain data at any specific moment in time. It supports queries for any public view function of smart contracts deployed on Optimism, from the very first block to the present. By providing access to historical state data, this project directly supports transparency, research, and analytics, which are crucial for the evolution and understanding of the Optimism ecosystem.\n\nOur project contributes to the OP Stack Tooling category by providing a fundamental utility that facilitates better decision-making, auditing, and research within the Optimism network. This tool is vital for developers who require accurate historical data to test, validate, and optimize their applications. Additionally, it promotes the growth of the Optimism ecosystem by reducing barriers to entry and fostering a more robust environment for innovation.\n\nWakeUp Labs is dedicated to advancing the capabilities of Ethereum's Layer 2 solutions, and we believe that tools like the OP Token Historical Balance are essential for driving adoption and enhancing the overall developer experience. By making Optimism's blockchain data more accessible and usable, we aim to empower the community and fuel the next wave of development on the OP Stack.",
    profileAvatarUrl:
      'https://cdn.charmverse.io/user-content/d30a1da7-8e25-495b-9961-f332bcfc43a1/44113f51-1a0b-40cb-b5b1-f4cb5241d913/GDUQ_lQU_400x400.jpg',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/0f8ad22d-b07f-422a-a341-5c2d9df1e570.png',
    project_socialLinks_website: "['https://nftstarter.lol/']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'Nftstarter',
    project_socialLinks_mirror: '',
    pricingModel: 'freemium',
    impactStatement_statement:
      "[{'answer': 'The NFT Launchpad is designed to simplify the process for artists to launch their NFT projects and make it easy for their supporters to mint these NFTs. By focusing on Layer 2 networks, the platform significantly reduces costs and enhances scalability, making NFT creation and distribution more accessible and efficient for a broader audience.\\n\\nImpact Statement: Our Launchpad democratizes access to the NFT space by reducing barriers for creators and collectors, enabling a more inclusive and thriving digital art ecosystem on Layer 2 networks.', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'During 2023-24, several NFT collections were successfully launched on our platform. \\nThese collections were deployed across various chains, often coinciding with the launch of those chains’ mainnets. By doing so, we provided users with an opportunity to familiarize themselves with new networks and ecosystems from the outset, making our platform a key resource for early adopters and NFT enthusiasts alike.\\n', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 19875,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xe3b57bf8126a9997a70a31dfe9335b9d7ecdf53d2bcf56d9977df7eea453524f',
    applicationId:
      '0xe3b57bf8126a9997a70a31dfe9335b9d7ecdf53d2bcf56d9977df7eea453524f',
    projectId:
      '0x10e9fc6dd7d01e09bd9440d507846432333a06f779287b29199010e2f50579cd',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Developer Tools and Libraries',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.']",
    organization_name: 'wevm',
    organization_description: '',
    organizationAvatarUrl:
      'https://storage.googleapis.com/op-atlas/d546477e-bfc2-4fb5-9ba1-e9624e94e608.png',
    organizationCoverImageUrl: '',
    socialLinks_website: [],
    socialLinks_farcaster: [],
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: "['6143']",
    name: 'Viem: TypeScript Tooling for OP Stack',
    description:
      'Viem is the most used TypeScript Interface for Ethereum and the OP Stack. Viem provides robust, performant, and type-safe modules to be the foundation for building Web Applications, TypeScript Libraries, Wallets, Backends, Indexers, Scripts, and more, on top of Ethereum (and the OP Stack). With over 2.5 million monthly downloads, Viem is used in production by most at-scale (and small scale!) OP Stack projects like Optimism, Uniswap, Zora, Coinbase, Opensea, WalletConnect, Friend.tech, Rainbow, and so much more.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/6003ee42-3418-4021-af28-0f997e615893.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/d141ff4f-c241-44a1-9da6-c16c1dcab7ea.png',
    project_socialLinks_website:
      "['https://github.com/joohhnnn/The-book-of-optimism-fault-proof', 'https://github.com/joohhnnn/The-book-of-optimism-fault-proof-CN']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://x.com/JoohhnnnChase',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': '\"The \\'Book of Optimism Fault Proof\\' repository is an resource aimed at demystifying the fault proof system for newcomers and seasoned developers alike. Centered around the transformative concept of a fault proof system, this project shifts away from centralized proposers to a mechanism grounded in game theory. The purpose of this document is to offer a multifaceted explanation of the fault proof system, providing newcomers with a rapid understanding of its mechanics and the specific details of its code.\\n\\nStarting with the Basics The journey into understanding fault proof begins with the simplest design of such a system. This approach breaks down the complexity of fault proof into manageable parts, making it easier for newcomers to grasp the fundamental concepts and how they interconnect within the broader system architecture.', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': \"Engineer Feedback:\\n\\nEngineers have leveraged this documentation and tools to clarify complex concepts and integrate fault proof systems into their projects.\\n \\nCommunity Engagement:\\n\\nThe documentation is referenced in the Optimism community. This inclusion underscores the value and credibility of the resources.\\nThe Chinese version of our document has been especially impactful, published on the 'learnblockchain' forum, where it has accumulated tens of thousands of views, demonstrating its relevance and utility to a broad audience.\", 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xe69b6f216d79523341253eb2cfec0ff615d0d272723ebc463140702b961d65c0',
    applicationId:
      '0xe69b6f216d79523341253eb2cfec0ff615d0d272723ebc463140702b961d65c0',
    projectId:
      '0xfef0eaf3c745a7175550a75ecfc0056d0a3276eeb0ce8fbc45dd7254411985ec',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Developer Tools and Libraries',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'Clear Wallet',
    description:
      'Clear EVM wallet is a fully open-source EVM browser wallet based on Ethers, Ionic, Manifest V3, and Vue. It implements Metamask API and will work as a replacement for Metamask, websites will detect it as Metamask, so select Metamask when interacting with Dapps. Websites that implement EIP-6963 will detect it as Clear EVM Wallet.\n\nIt has been public on Chrome Store since August 2022.',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/d860e678-62c1-497e-880b-03339cb1387c.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/f508014c-f1e5-49b0-a284-63f0246da7f3.png',
    project_socialLinks_website: "['https://porters.xyz']",
    project_socialLinks_farcaster: "['https://warpcast.com/porters']",
    project_socialLinks_twitter: 'https://x.com/PORTERSXYZ',
    project_socialLinks_mirror: '',
    pricingModel: 'freemium',
    impactStatement_statement:
      "[{'answer': 'Projects can access decentralized, unstoppable and high quality RPC services in Base and Optimism through Porters via the POKT Network.\\n\\nFurthermore, we have initiated native RPC markets in Optimism and Base through chain-specific payment for RPC services through the $PORTR token deployed on OP and Base.\\n \\n', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'We enabled the POKT community to further decentralize their offering of RPC services for the Superchain and OP Stack by the development and operation of the PORTERS gateway. This fosters the integration and relevance of POKT for OP Stack builders.\\n\\nThrough the development of our Token Name Service API, we have enabled further growth and increased community engagement for the TKN DAO. It also enables the open source community around RaidGuild DAO to expedite the development of public goods projects in Base and Optimism.\\n\\nPORTERS also educates and empowers core impact infrastructure projects on the Superchain, such as Hypercerts, in DePIN RPC services for the provisioning of hypercerts to the public goods and Web3 community. Also highlighted by our ongoing efforts to enable Onchain Elephants to access resilient, censorship-resistant, and performant RPC services for funding the protection of elephants in Asia.\\n', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '0xefe90dc598c4aa16089ecd6f57fa5270388d42f36e1c5db7f00bacc8f1d46832',
    applicationId:
      '0xefe90dc598c4aa16089ecd6f57fa5270388d42f36e1c5db7f00bacc8f1d46832',
    projectId:
      '0x15888c525d6efc5ca1d66714644aace3d2e8598cecd7e37be1e6fd57fd958c07',
    applicationCategory: 'OP_STACK_TOOLING',
    'PW subcategory': 'Developer Tools and Libraries',
    impactStatement_subcategory:
      "['Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management.']",
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: 'Sourcify',
    description:
      'Sourcify is a decentralized and open-source smart contract verification service',
    profileAvatarUrl:
      'https://storage.googleapis.com/op-atlas/f219ada1-9d7d-4d1c-8a90-ea1b09eda31f.png',
    projectCoverImageUrl:
      'https://storage.googleapis.com/op-atlas/3d5c829b-3fc4-4dcd-995d-978aceca64dc.png',
    project_socialLinks_website: "['https://sourcify.dev']",
    project_socialLinks_farcaster: [],
    project_socialLinks_twitter: 'https://twitter.com/sourcifyeth',
    project_socialLinks_mirror: '',
    pricingModel: 'free',
    impactStatement_statement:
      "[{'answer': 'Sourcify verifies contracts on Optimism (+1.8M contracts) and Base (+800k contracts) chains. It serves as a credibly neutral, open-source, decentralized verifier that makes access to contracts easier in bulk by sharing the whole contract repo. ', 'question': 'How has the infrastructure you built enabled the testing, deployment, and operation of OP chains?'}, {'answer': 'Sourcify is used as a data source for Blockscout, and Otterscan, as well as many tools for getting contract ABIs. Anyone deploying contracts via Foundry, Hardhat or Remix can verify the contracts with a single command on Sourcify.', 'question': 'Who has used your tooling and how has it benefited them?'}]",
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 133449.98,
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '',
    applicationId: '',
    projectId: '',
    applicationCategory: '',
    'PW subcategory': '',
    impactStatement_subcategory: '',
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: '',
    description: '',
    profileAvatarUrl: '',
    projectCoverImageUrl: '',
    project_socialLinks_website: '',
    project_socialLinks_farcaster: '',
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: '',
    impactStatement_statement: '',
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '',
    applicationId: '',
    projectId: '',
    applicationCategory: '',
    'PW subcategory': '',
    impactStatement_subcategory: '',
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: '',
    description: '',
    profileAvatarUrl: '',
    projectCoverImageUrl: '',
    project_socialLinks_website: '',
    project_socialLinks_farcaster: '',
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: '',
    impactStatement_statement: '',
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '',
    applicationId: '',
    projectId: '',
    applicationCategory: '',
    'PW subcategory': '',
    impactStatement_subcategory: '',
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: '',
    description: '',
    profileAvatarUrl: '',
    projectCoverImageUrl: '',
    project_socialLinks_website: '',
    project_socialLinks_farcaster: '',
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: '',
    impactStatement_statement: '',
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '',
    applicationId: '',
    projectId: '',
    applicationCategory: '',
    'PW subcategory': '',
    impactStatement_subcategory: '',
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: '',
    description: '',
    profileAvatarUrl: '',
    projectCoverImageUrl: '',
    project_socialLinks_website: '',
    project_socialLinks_farcaster: '',
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: '',
    impactStatement_statement: '',
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: '',
    'Column 1': '',
    'Column 2': '',
  },
  {
    id: '',
    applicationId: '',
    projectId: '',
    applicationCategory: '',
    'PW subcategory': '',
    impactStatement_subcategory: '',
    organization_name: '',
    organization_description: '',
    organizationAvatarUrl: '',
    organizationCoverImageUrl: '',
    socialLinks_website: '',
    socialLinks_farcaster: '',
    socialLinks_twitter: '',
    socialLinks_mirror: '',
    team: '',
    name: '',
    description: '',
    profileAvatarUrl: '',
    projectCoverImageUrl: '',
    project_socialLinks_website: '',
    project_socialLinks_farcaster: '',
    project_socialLinks_twitter: '',
    project_socialLinks_mirror: '',
    pricingModel: '',
    impactStatement_statement: '',
    grant_1: '',
    grant_1_link: '',
    grant_1_amount: 273293.03,
    'Column 1': '',
    'Column 2': '',
  },
];
