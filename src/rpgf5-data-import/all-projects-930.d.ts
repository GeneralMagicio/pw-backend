export declare const projects: ({
    id: string;
    applicationId: string;
    projectId: string;
    category: string;
    applicationCategory: string;
    organization: null;
    name: string;
    description: string;
    profileAvatarUrl: string;
    projectCoverImageUrl: string;
    socialLinks: {
        website: string[];
        farcaster: null;
        twitter: string;
        mirror: null;
    };
    team: {
        fid: number;
        object: string;
        pfp_url: string;
        profile: {
            bio: {
                text: string;
            };
        };
        username: string;
        power_badge: boolean;
        display_name: string;
        active_status: string;
        verifications: string[];
        follower_count: number;
        custody_address: string;
        following_count: number;
        verified_addresses: {
            eth_addresses: string[];
            sol_addresses: string[];
        };
    }[];
    github: {
        id: string;
        type: string;
        url: string;
        name: string;
        description: string;
        verified: boolean;
        openSource: boolean;
        containsContracts: boolean;
        createdAt: string;
        updatedAt: string;
        projectId: string;
        metrics: {
            artifact_url: string;
            num_contributors: string;
            num_trusted_contributors: string;
            num_contributors_last_6_months: string;
            num_stars: string;
            num_trusted_stars: string;
            trust_weighted_stars: string;
            num_forks: string;
            num_trusted_forks: string;
            trust_weighted_forks: string;
            trust_rank_for_repo_in_category: string;
            age_of_project_years: string;
            license: string;
        };
    }[];
    packages: null;
    links: null;
    contracts: null;
    grantsAndFunding: {
        investments: null;
        revenue: null;
        grants: {
            grant: string;
            link: null;
            amount: string;
            date: string;
            details: null;
            fundingRound: string;
        }[];
    };
    pricingModel: {
        type: string;
        details: string;
    };
    impactStatement: {
        category: string;
        subcategory: string[];
        statement: {
            create: {
                answer: string;
                question: string;
            }[];
        };
    };
    testimonials: string;
} | {
    id: string;
    applicationId: string;
    projectId: string;
    category: string;
    applicationCategory: string;
    organization: {
        name: string;
        description: string;
        organizationAvatarUrl: string;
        organizationCoverImageUrl: string;
        socialLinks: {
            website: string[];
            farcaster: null;
            twitter: string;
            mirror: string;
        };
        team: string[];
    };
    name: string;
    description: string;
    profileAvatarUrl: string;
    projectCoverImageUrl: string;
    socialLinks: {
        website: string[];
        farcaster: string[];
        twitter: string;
        mirror: null;
    };
    team: {
        fid: number;
        object: string;
        pfp_url: string;
        profile: {
            bio: {
                text: string;
            };
        };
        username: string;
        power_badge: boolean;
        display_name: string;
        active_status: string;
        verifications: string[];
        follower_count: number;
        custody_address: string;
        following_count: number;
        verified_addresses: {
            eth_addresses: string[];
            sol_addresses: null;
        };
    }[];
    github: {
        id: string;
        type: string;
        url: string;
        name: string;
        description: string;
        verified: boolean;
        openSource: boolean;
        containsContracts: boolean;
        createdAt: string;
        updatedAt: string;
        projectId: string;
        metrics: {
            artifact_url: string;
            num_contributors: string;
            num_trusted_contributors: string;
            num_contributors_last_6_months: string;
            num_stars: string;
            num_trusted_stars: string;
            trust_weighted_stars: string;
            num_forks: string;
            num_trusted_forks: string;
            trust_weighted_forks: string;
            trust_rank_for_repo_in_category: string;
            age_of_project_years: string;
            license: string;
        };
    }[];
    packages: null;
    links: {
        url: string;
        name: string;
        description: string;
    }[];
    contracts: null;
    grantsAndFunding: {
        investments: {
            amount: string;
            year: string;
            details: string;
        }[];
        revenue: null;
        grants: null;
    };
    pricingModel: {
        type: string;
        details: string;
    };
    impactStatement: {
        category: string;
        subcategory: string[];
        statement: {
            create: {
                answer: string;
                question: string;
            }[];
        };
    };
    testimonials: string;
} | {
    id: string;
    applicationId: string;
    projectId: string;
    category: string;
    applicationCategory: string;
    organization: {
        name: string;
        description: string;
        organizationAvatarUrl: string;
        organizationCoverImageUrl: string;
        socialLinks: {
            website: string[];
            farcaster: string[];
            twitter: string;
            mirror: string;
        };
        team: string[];
    };
    name: string;
    description: string;
    profileAvatarUrl: string;
    projectCoverImageUrl: string;
    socialLinks: {
        website: string[];
        farcaster: string[];
        twitter: string;
        mirror: string;
    };
    team: {
        fid: number;
        object: string;
        pfp_url: string;
        profile: {
            bio: {
                text: string;
            };
        };
        username: string;
        power_badge: boolean;
        display_name: string;
        active_status: string;
        verifications: string[];
        follower_count: number;
        custody_address: string;
        following_count: number;
        verified_addresses: {
            eth_addresses: string[];
            sol_addresses: null;
        };
    }[];
    github: null;
    packages: null;
    links: {
        url: string;
        name: string;
        description: string;
    }[];
    contracts: null;
    grantsAndFunding: {
        investments: {
            amount: string;
            year: string;
            details: string;
        }[];
        revenue: null;
        grants: ({
            grant: string;
            link: null;
            amount: string;
            date: string;
            details: null;
            fundingRound: string;
        } | {
            grant: string;
            link: string;
            amount: string;
            date: string;
            details: string;
            fundingRound: null;
        })[];
    };
    pricingModel: {
        type: string;
        details: string;
    };
    impactStatement: {
        category: string;
        subcategory: string[];
        statement: {
            create: {
                answer: string;
                question: string;
            }[];
        };
    };
    testimonials: string;
} | {
    id: string;
    applicationId: string;
    projectId: string;
    category: string;
    applicationCategory: string;
    organization: null;
    name: string;
    description: string;
    profileAvatarUrl: string;
    projectCoverImageUrl: string;
    socialLinks: {
        website: string[];
        farcaster: string[];
        twitter: string;
        mirror: null;
    };
    team: {
        fid: number;
        object: string;
        pfp_url: string;
        profile: {
            bio: {
                text: string;
            };
        };
        username: string;
        power_badge: boolean;
        display_name: string;
        active_status: string;
        verifications: string[];
        follower_count: number;
        custody_address: string;
        following_count: number;
        verified_addresses: {
            eth_addresses: string[];
            sol_addresses: null;
        };
    }[];
    github: {
        id: string;
        type: string;
        url: string;
        name: string;
        description: string;
        verified: boolean;
        openSource: boolean;
        containsContracts: boolean;
        createdAt: string;
        updatedAt: string;
        projectId: string;
    }[];
    packages: null;
    links: {
        url: string;
        name: string;
        description: string;
    }[];
    contracts: null;
    grantsAndFunding: {
        investments: null;
        revenue: null;
        grants: {
            grant: string;
            link: null;
            amount: string;
            date: string;
            details: null;
            fundingRound: string;
        }[];
    };
    pricingModel: {
        type: string;
        details: string;
    };
    impactStatement: {
        category: string;
        subcategory: string[];
        statement: {
            create: {
                answer: string;
                question: string;
            }[];
        };
    };
    testimonials: string;
} | {
    id: string;
    applicationId: string;
    projectId: string;
    category: string;
    applicationCategory: string;
    organization: {
        name: string;
        description: string;
        organizationAvatarUrl: string;
        organizationCoverImageUrl: string;
        socialLinks: {
            website: string[];
            farcaster: null;
            twitter: string;
            mirror: string;
        };
        team: string[];
    };
    name: string;
    description: string;
    profileAvatarUrl: string;
    projectCoverImageUrl: string;
    socialLinks: {
        website: string[];
        farcaster: null;
        twitter: string;
        mirror: string;
    };
    team: {
        fid: number;
        object: string;
        pfp_url: string;
        profile: {
            bio: {
                text: string;
            };
        };
        username: string;
        power_badge: boolean;
        display_name: string;
        active_status: string;
        verifications: string[];
        follower_count: number;
        custody_address: string;
        following_count: number;
        verified_addresses: {
            eth_addresses: string[];
            sol_addresses: null;
        };
    }[];
    github: {
        id: string;
        type: string;
        url: string;
        name: string;
        description: string;
        verified: boolean;
        openSource: boolean;
        containsContracts: boolean;
        createdAt: string;
        updatedAt: string;
        projectId: string;
        metrics: {
            artifact_url: string;
            num_contributors: string;
            num_trusted_contributors: string;
            num_contributors_last_6_months: string;
            num_stars: string;
            num_trusted_stars: string;
            trust_weighted_stars: string;
            num_forks: string;
            num_trusted_forks: string;
            trust_weighted_forks: string;
            trust_rank_for_repo_in_category: string;
            age_of_project_years: string;
            license: string;
        };
    }[];
    packages: null;
    links: {
        url: string;
        name: string;
        description: string;
    }[];
    contracts: null;
    grantsAndFunding: {
        investments: {
            amount: string;
            year: string;
            details: string;
        }[];
        revenue: null;
        grants: ({
            grant: string;
            link: null;
            amount: string;
            date: string;
            details: null;
            fundingRound: string;
        } | {
            grant: string;
            link: string;
            amount: string;
            date: string;
            details: string;
            fundingRound: null;
        })[];
    };
    pricingModel: {
        type: string;
        details: string;
    };
    impactStatement: {
        category: string;
        subcategory: string[];
        statement: {
            create: {
                answer: string;
                question: string;
            }[];
        };
    };
    testimonials: string;
} | {
    id: string;
    applicationId: string;
    projectId: string;
    category: string;
    applicationCategory: string;
    organization: {
        name: string;
        description: string;
        organizationAvatarUrl: string;
        organizationCoverImageUrl: string;
        socialLinks: {
            website: null;
            farcaster: null;
            twitter: string;
            mirror: string;
        };
        team: string[];
    };
    name: string;
    description: string;
    profileAvatarUrl: string;
    projectCoverImageUrl: string;
    socialLinks: {
        website: string[];
        farcaster: null;
        twitter: null;
        mirror: null;
    };
    team: {
        fid: number;
        object: string;
        pfp_url: string;
        profile: {
            bio: {
                text: string;
            };
        };
        username: string;
        power_badge: boolean;
        display_name: string;
        active_status: string;
        verifications: string[];
        follower_count: number;
        custody_address: string;
        following_count: number;
        verified_addresses: {
            eth_addresses: string[];
            sol_addresses: null;
        };
    }[];
    github: {
        id: string;
        type: string;
        url: string;
        name: string;
        description: string;
        verified: boolean;
        openSource: boolean;
        containsContracts: boolean;
        createdAt: string;
        updatedAt: string;
        projectId: string;
    }[];
    packages: null;
    links: {
        url: string;
        name: string;
        description: string;
    }[];
    contracts: null;
    grantsAndFunding: {
        investments: null;
        revenue: null;
        grants: {
            grant: string;
            link: null;
            amount: string;
            date: string;
            details: null;
            fundingRound: string;
        }[];
    };
    pricingModel: {
        type: string;
        details: string;
    };
    impactStatement: {
        category: string;
        subcategory: string[];
        statement: {
            create: {
                answer: string;
                question: string;
            }[];
        };
    };
    testimonials: string;
} | {
    id: string;
    applicationId: string;
    projectId: string;
    category: string;
    applicationCategory: string;
    organization: null;
    name: string;
    description: string;
    profileAvatarUrl: string;
    projectCoverImageUrl: string;
    socialLinks: {
        website: string[];
        farcaster: null;
        twitter: string;
        mirror: null;
    };
    team: {
        fid: number;
        object: string;
        pfp_url: string;
        profile: {
            bio: {
                text: string;
            };
        };
        username: string;
        power_badge: boolean;
        display_name: string;
        active_status: string;
        verifications: string[];
        follower_count: number;
        custody_address: string;
        following_count: number;
        verified_addresses: {
            eth_addresses: string[];
            sol_addresses: null;
        };
    }[];
    github: ({
        id: string;
        type: string;
        url: string;
        name: null;
        description: null;
        verified: boolean;
        openSource: boolean;
        containsContracts: boolean;
        createdAt: string;
        updatedAt: string;
        projectId: string;
        metrics?: undefined;
    } | {
        id: string;
        type: string;
        url: string;
        name: string;
        description: string;
        verified: boolean;
        openSource: boolean;
        containsContracts: boolean;
        createdAt: string;
        updatedAt: string;
        projectId: string;
        metrics: {
            artifact_url: string;
            num_contributors: string;
            num_trusted_contributors: string;
            num_contributors_last_6_months: string;
            num_stars: string;
            num_trusted_stars: string;
            trust_weighted_stars: string;
            num_forks: string;
            num_trusted_forks: string;
            trust_weighted_forks: string;
            trust_rank_for_repo_in_category: string;
            age_of_project_years: string;
            license: string;
        };
    })[];
    packages: {
        url: string;
        name: null;
        description: null;
    }[];
    links: {
        url: string;
        name: string;
        description: string;
    }[];
    contracts: {
        address: string;
        deploymentTxHash: string;
        deployerAddress: string;
        verificationProof: string;
        chainId: number;
    }[];
    grantsAndFunding: {
        investments: null;
        revenue: null;
        grants: {
            grant: string;
            link: null;
            amount: string;
            date: string;
            details: null;
            fundingRound: string;
        }[];
    };
    pricingModel: {
        type: string;
        details: string;
    };
    impactStatement: {
        category: string;
        subcategory: string[];
        statement: {
            create: {
                answer: string;
                question: string;
            }[];
        };
    };
    testimonials: string;
} | {
    id: string;
    applicationId: string;
    projectId: string;
    category: string;
    applicationCategory: string;
    organization: {
        name: string;
        description: string;
        organizationAvatarUrl: string;
        organizationCoverImageUrl: string;
        socialLinks: {
            website: null;
            farcaster: null;
            twitter: string;
            mirror: string;
        };
        team: string[];
    };
    name: string;
    description: string;
    profileAvatarUrl: string;
    projectCoverImageUrl: string;
    socialLinks: {
        website: string[];
        farcaster: string[];
        twitter: string;
        mirror: null;
    };
    team: null;
    github: {
        id: string;
        type: string;
        url: string;
        name: string;
        description: string;
        verified: boolean;
        openSource: boolean;
        containsContracts: boolean;
        createdAt: string;
        updatedAt: string;
        projectId: string;
    }[];
    packages: null;
    links: {
        url: string;
        name: string;
        description: string;
    }[];
    contracts: null;
    grantsAndFunding: {
        investments: null;
        revenue: null;
        grants: null;
    };
    pricingModel: {
        type: string;
        details: string;
    };
    impactStatement: {
        category: string;
        subcategory: string[];
        statement: {
            create: null;
        };
    };
    testimonials: string;
} | {
    id: string;
    applicationId: string;
    projectId: string;
    category: string;
    applicationCategory: string;
    organization: {
        name: string;
        description: string;
        organizationAvatarUrl: string;
        organizationCoverImageUrl: string;
        socialLinks: {
            website: string[];
            farcaster: string[];
            twitter: string;
            mirror: string;
        };
        team: string[];
    };
    name: string;
    description: string;
    profileAvatarUrl: string;
    projectCoverImageUrl: string;
    socialLinks: {
        website: string[];
        farcaster: string[];
        twitter: string;
        mirror: null;
    };
    team: {
        fid: number;
        object: string;
        pfp_url: string;
        profile: {
            bio: {
                text: string;
            };
        };
        username: string;
        power_badge: boolean;
        display_name: string;
        active_status: string;
        verifications: null;
        follower_count: number;
        custody_address: string;
        following_count: number;
        verified_addresses: {
            eth_addresses: null;
            sol_addresses: null;
        };
    }[];
    github: {
        id: string;
        type: string;
        url: string;
        name: string;
        description: string;
        verified: boolean;
        openSource: boolean;
        containsContracts: boolean;
        createdAt: string;
        updatedAt: string;
        projectId: string;
        metrics: {
            artifact_url: string;
            num_contributors: string;
            num_trusted_contributors: string;
            num_contributors_last_6_months: string;
            num_stars: string;
            num_trusted_stars: string;
            trust_weighted_stars: string;
            num_forks: string;
            num_trusted_forks: string;
            trust_weighted_forks: string;
            trust_rank_for_repo_in_category: string;
            age_of_project_years: string;
            license: string;
        };
    }[];
    packages: null;
    links: {
        url: string;
        name: string;
        description: string;
    }[];
    contracts: null;
    grantsAndFunding: {
        investments: {
            amount: string;
            year: string;
            details: string;
        }[];
        revenue: null;
        grants: ({
            grant: string;
            link: null;
            amount: string;
            date: string;
            details: null;
            fundingRound: string;
        } | {
            grant: string;
            link: string;
            amount: string;
            date: string;
            details: string;
            fundingRound: null;
        })[];
    };
    pricingModel: {
        type: string;
        details: string;
    };
    impactStatement: {
        category: string;
        subcategory: string[];
        statement: {
            create: {
                answer: string;
                question: string;
            }[];
        };
    };
    testimonials: string;
} | {
    id: string;
    applicationId: string;
    projectId: string;
    category: string;
    applicationCategory: string;
    organization: {
        name: string;
        description: string;
        organizationAvatarUrl: string;
        organizationCoverImageUrl: string;
        socialLinks: {
            website: string[];
            farcaster: null;
            twitter: string;
            mirror: null;
        };
        team: string[];
    };
    name: string;
    description: string;
    profileAvatarUrl: string;
    projectCoverImageUrl: string;
    socialLinks: {
        website: null;
        farcaster: null;
        twitter: null;
        mirror: null;
    };
    team: {
        fid: number;
        object: string;
        pfp_url: string;
        profile: {
            bio: {
                text: string;
            };
        };
        username: string;
        power_badge: boolean;
        display_name: string;
        active_status: string;
        verifications: string[];
        follower_count: number;
        custody_address: string;
        following_count: number;
        verified_addresses: {
            eth_addresses: string[];
            sol_addresses: null;
        };
    }[];
    github: {
        id: string;
        type: string;
        url: string;
        name: string;
        description: string;
        verified: boolean;
        openSource: boolean;
        containsContracts: boolean;
        createdAt: string;
        updatedAt: string;
        projectId: string;
        metrics: {
            artifact_url: string;
            num_contributors: string;
            num_trusted_contributors: string;
            num_contributors_last_6_months: string;
            num_stars: string;
            num_trusted_stars: string;
            trust_weighted_stars: string;
            num_forks: string;
            num_trusted_forks: string;
            trust_weighted_forks: string;
            trust_rank_for_repo_in_category: string;
            age_of_project_years: string;
            license: string;
        };
    }[];
    packages: null;
    links: null;
    contracts: {
        address: string;
        deploymentTxHash: string;
        deployerAddress: string;
        verificationProof: string;
        chainId: number;
    }[];
    grantsAndFunding: {
        investments: null;
        revenue: null;
        grants: {
            grant: string;
            link: string;
            amount: string;
            date: string;
            details: string;
            fundingRound: null;
        }[];
    };
    pricingModel: {
        type: string;
        details: string;
    };
    impactStatement: {
        category: string;
        subcategory: string[];
        statement: {
            create: {
                answer: string;
                question: string;
            }[];
        };
    };
    testimonials: string;
} | {
    id: string;
    applicationId: string;
    projectId: string;
    category: string;
    applicationCategory: string;
    organization: {
        name: string;
        description: string;
        organizationAvatarUrl: string;
        organizationCoverImageUrl: string;
        socialLinks: {
            website: string[];
            farcaster: string[];
            twitter: string;
            mirror: string;
        };
        team: string[];
    };
    name: string;
    description: string;
    profileAvatarUrl: string;
    projectCoverImageUrl: string;
    socialLinks: {
        website: string[];
        farcaster: string[];
        twitter: string;
        mirror: string;
    };
    team: {
        fid: number;
        object: string;
        pfp_url: string;
        profile: {
            bio: {
                text: string;
            };
        };
        username: string;
        power_badge: boolean;
        display_name: string;
        active_status: string;
        verifications: string[];
        follower_count: number;
        custody_address: string;
        following_count: number;
        verified_addresses: {
            eth_addresses: string[];
            sol_addresses: null;
        };
    }[];
    github: ({
        id: string;
        type: string;
        url: string;
        name: null;
        description: null;
        verified: boolean;
        openSource: boolean;
        containsContracts: boolean;
        createdAt: string;
        updatedAt: string;
        projectId: string;
        metrics?: undefined;
    } | {
        id: string;
        type: string;
        url: string;
        name: string;
        description: string;
        verified: boolean;
        openSource: boolean;
        containsContracts: boolean;
        createdAt: string;
        updatedAt: string;
        projectId: string;
        metrics: {
            artifact_url: string;
            num_contributors: string;
            num_trusted_contributors: string;
            num_contributors_last_6_months: string;
            num_stars: string;
            num_trusted_stars: string;
            trust_weighted_stars: string;
            num_forks: string;
            num_trusted_forks: string;
            trust_weighted_forks: string;
            trust_rank_for_repo_in_category: string;
            age_of_project_years: string;
            license: string;
        };
    })[];
    packages: {
        url: string;
        name: null;
        description: null;
    }[];
    links: {
        url: string;
        name: string;
        description: string;
    }[];
    contracts: null;
    grantsAndFunding: {
        investments: null;
        revenue: null;
        grants: ({
            grant: string;
            link: null;
            amount: string;
            date: string;
            details: null;
            fundingRound: string;
        } | {
            grant: string;
            link: string;
            amount: string;
            date: string;
            details: string;
            fundingRound: null;
        })[];
    };
    pricingModel: {
        type: string;
        details: string;
    };
    impactStatement: {
        category: string;
        subcategory: string[];
        statement: {
            create: {
                answer: string;
                question: string;
            }[];
        };
    };
    testimonials: string;
} | {
    id: string;
    applicationId: string;
    projectId: string;
    category: string;
    applicationCategory: string;
    organization: {
        name: string;
        description: string;
        organizationAvatarUrl: string;
        organizationCoverImageUrl: string;
        socialLinks: {
            website: null;
            farcaster: null;
            twitter: string;
            mirror: string;
        };
        team: string[];
    };
    name: string;
    description: string;
    profileAvatarUrl: string;
    projectCoverImageUrl: string;
    socialLinks: {
        website: null;
        farcaster: null;
        twitter: null;
        mirror: null;
    };
    team: {
        fid: number;
        object: string;
        pfp_url: string;
        profile: {
            bio: {
                text: string;
            };
        };
        username: string;
        power_badge: boolean;
        display_name: string;
        active_status: string;
        verifications: null;
        follower_count: number;
        custody_address: string;
        following_count: number;
        verified_addresses: {
            eth_addresses: null;
            sol_addresses: null;
        };
    }[];
    github: {
        id: string;
        type: string;
        url: string;
        name: string;
        description: string;
        verified: boolean;
        openSource: boolean;
        containsContracts: boolean;
        createdAt: string;
        updatedAt: string;
        projectId: string;
        metrics: {
            artifact_url: string;
            num_contributors: string;
            num_trusted_contributors: string;
            num_contributors_last_6_months: string;
            num_stars: string;
            num_trusted_stars: string;
            trust_weighted_stars: string;
            num_forks: string;
            num_trusted_forks: string;
            trust_weighted_forks: string;
            trust_rank_for_repo_in_category: string;
            age_of_project_years: string;
            license: string;
        };
    }[];
    packages: null;
    links: {
        url: string;
        name: string;
        description: string;
    }[];
    contracts: {
        address: string;
        deploymentTxHash: string;
        deployerAddress: string;
        verificationProof: string;
        chainId: number;
    }[];
    grantsAndFunding: {
        investments: {
            amount: string;
            year: string;
            details: string;
        }[];
        revenue: null;
        grants: null;
    };
    pricingModel: {
        type: string;
        details: string;
    };
    impactStatement: {
        category: string;
        subcategory: string[];
        statement: {
            create: {
                answer: string;
                question: string;
            }[];
        };
    };
    testimonials: string;
})[];
