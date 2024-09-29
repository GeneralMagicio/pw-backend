declare const projects: (
    {
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
    github: {
        url: string;
        name: string;
        description: string;
    }[];
    packages: null;
    links: {
        url: string;
        name: string;
        description: string;
    }[];
    contracts: null;
    grantsAndFunding: {
        ventureFunding: null;
        grants: {
            grant: string;
            link: string;
            amount: string;
            date: string;
            details: string;
        }[];
        revenue: null;
        investment: null;
    };
    pricingModel: {
        type: string;
        details: string;
    };
    impactStatement: {
        category: string;
        subcategory: string[];
        statement: {
            answer: string;
            question: string;
        }[];
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
        url: string;
        name: string;
        description: string;
        metrics?: undefined;
    } | {
        url: string;
        name: string;
        description: string;
        metrics: {
            trust_rank_for_repo_in_category: string;
            num_contributors: string;
            num_trusted_contributors: string;
            num_contributors_last_6_months: string;
            num_stars: string;
            num_trusted_stars: string;
            trust_weighted_stars: string;
            num_forks: string;
            num_trusted_forks: string;
            trust_weighted_forks: string;
            age_of_project_years: string;
            license: string;
        };
    })[];
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
        ventureFunding: null;
        grants: null;
        revenue: null;
        investment: null;
    };
    pricingModel: {
        type: string;
        details: string;
    };
    impactStatement: {
        category: string;
        subcategory: string[];
        statement: {
            answer: string;
            question: string;
        }[];
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
            sol_addresses: string[];
        };
    }[];
    github: {
        url: string;
        name: string;
        description: string;
        metrics: {
            trust_rank_for_repo_in_category: string;
            num_contributors: string;
            num_trusted_contributors: string;
            num_contributors_last_6_months: string;
            num_stars: string;
            num_trusted_stars: string;
            trust_weighted_stars: string;
            num_forks: string;
            num_trusted_forks: string;
            trust_weighted_forks: string;
            age_of_project_years: string;
            license: string;
        };
    }[];
    packages: null;
    links: null;
    contracts: null;
    grantsAndFunding: {
        ventureFunding: null;
        grants: {
            grant: string;
            link: null;
            amount: string;
            date: string;
            details: null;
        }[];
        revenue: null;
        investment: null;
    };
    pricingModel: {
        type: string;
        details: string;
    };
    impactStatement: {
        category: string;
        subcategory: string[];
        statement: {
            answer: string;
            question: string;
        }[];
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
    github: ({
        url: string;
        name: string;
        description: string;
        metrics?: undefined;
    } | {
        url: string;
        name: string;
        description: string;
        metrics: {
            trust_rank_for_repo_in_category: string;
            num_contributors: string;
            num_trusted_contributors: string;
            num_contributors_last_6_months: string;
            num_stars: string;
            num_trusted_stars: string;
            trust_weighted_stars: string;
            num_forks: string;
            num_trusted_forks: string;
            trust_weighted_forks: string;
            age_of_project_years: string;
            license: string;
        };
    })[];
    packages: null;
    links: {
        url: string;
        name: string;
        description: string;
    }[];
    contracts: null;
    grantsAndFunding: {
        ventureFunding: null;
        grants: null;
        revenue: null;
        investment: {
            amount: string;
            details: string;
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
            answer: string;
            question: string;
        }[];
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
        ventureFunding: null;
        grants: {
            grant: string;
            link: string;
            amount: string;
            date: string;
            details: string;
        }[];
        revenue: null;
        investment: {
            amount: string;
            details: string;
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
            answer: string;
            question: string;
        }[];
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
    github: {
        url: string;
        name: null;
        description: null;
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
        ventureFunding: null;
        grants: null;
        revenue: null;
        investment: null;
    };
    pricingModel: {
        type: string;
        details: string;
    };
    impactStatement: {
        category: string;
        subcategory: string[];
        statement: {
            answer: string;
            question: string;
        }[];
    };
    testimonials: string;
} | {
    id: string;
    applicationId: string;
    projectId: string;
    category: string;
    applicationCategory: null;
    organization: null;
    name: string;
    description: string;
    profileAvatarUrl: string;
    projectCoverImageUrl: string;
    socialLinks: {
        website: string[];
        farcaster: string[];
        twitter: null;
        mirror: null;
    };
    team: null;
    github: null;
    packages: null;
    contracts: null;
    grantsAndFunding: {
        ventureFunding: null;
        grants: {
            grant: string;
            link: string;
            amount: string;
            date: string;
            details: string;
        }[];
        revenue: null;
        investment?: undefined;
    };
    impactStatement: {
        category: null;
        subcategory: null;
        statement: null;
    };
    testimonials: string;
    links?: undefined;
    pricingModel?: undefined;
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
        url: string;
        name: string;
        description: string;
        metrics: {
            trust_rank_for_repo_in_category: string;
            num_contributors: string;
            num_trusted_contributors: string;
            num_contributors_last_6_months: string;
            num_stars: string;
            num_trusted_stars: string;
            trust_weighted_stars: string;
            num_forks: string;
            num_trusted_forks: string;
            trust_weighted_forks: string;
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
        ventureFunding: null;
        grants: {
            grant: string;
            link: string;
            amount: string;
            date: string;
            details: string;
        }[];
        revenue: null;
        investment: {
            amount: string;
            details: string;
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
            answer: string;
            question: string;
        }[];
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
            mirror: null;
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
    github: null;
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
        ventureFunding: null;
        grants: null;
        revenue: null;
        investment: null;
    };
    pricingModel: {
        type: string;
        details: string;
    };
    impactStatement: {
        category: string;
        subcategory: string[];
        statement: {
            answer: string;
            question: string;
        }[];
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
        url: string;
        name: string;
        description: string;
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
        ventureFunding: null;
        grants: {
            grant: string;
            link: null;
            amount: string;
            date: string;
            details: null;
        }[];
        revenue: null;
        investment: null;
    };
    pricingModel: {
        type: string;
        details: string;
    };
    impactStatement: {
        category: string;
        subcategory: string[];
        statement: {
            answer: string;
            question: string;
        }[];
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
    github: {
        url: string;
        name: string;
        description: string;
        metrics: {
            trust_rank_for_repo_in_category: string;
            num_contributors: string;
            num_trusted_contributors: string;
            num_contributors_last_6_months: string;
            num_stars: string;
            num_trusted_stars: string;
            trust_weighted_stars: string;
            num_forks: string;
            num_trusted_forks: string;
            trust_weighted_forks: string;
            age_of_project_years: string;
            license: string;
        };
    }[];
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
        ventureFunding: null;
        grants: {
            grant: string;
            link: null;
            amount: string;
            date: string;
            details: null;
        }[];
        revenue: null;
        investment: null;
    };
    pricingModel: {
        type: string;
        details: string;
    };
    impactStatement: {
        category: string;
        subcategory: string[];
        statement: {
            answer: string;
            question: string;
        }[];
    };
    testimonials: string;
} | {
    id: string;
    applicationId: string;
    projectId: string;
    category: string;
    applicationCategory: null;
    organization: null;
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
    team: null;
    github: null;
    packages: string[];
    contracts: null;
    grantsAndFunding: {
        ventureFunding: null;
        grants: null;
        revenue: null;
        investment?: undefined;
    };
    impactStatement: {
        category: null;
        subcategory: null;
        statement: null;
    };
    testimonials: string;
    links?: undefined;
    pricingModel?: undefined;
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
        url: string;
        name: string;
        description: string;
    }[];
    packages: null;
    links: {
        url: string;
        name: string;
        description: string;
    }[];
    contracts: null;
    grantsAndFunding: {
        ventureFunding: null;
        grants: {
            grant: string;
            link: string;
            amount: string;
            date: string;
            details: string;
        }[];
        revenue: null;
        investment: {
            amount: string;
            details: string;
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
            answer: string;
            question: string;
        }[];
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
            sol_addresses: string[];
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
        ventureFunding: null;
        grants: null;
        revenue: null;
        investment: null;
    };
    pricingModel: {
        type: string;
        details: string;
    };
    impactStatement: {
        category: string;
        subcategory: string[];
        statement: {
            answer: string;
            question: string;
        }[];
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
        organizationAvatarUrl: null;
        organizationCoverImageUrl: string;
        socialLinks: {
            website: string[];
            farcaster: string[];
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
            sol_addresses: string[];
        };
    }[];
    github: {
        url: string;
        name: string;
        description: string;
    }[];
    packages: null;
    links: {
        url: string;
        name: string;
        description: string;
    }[];
    contracts: null;
    grantsAndFunding: {
        ventureFunding: null;
        grants: null;
        revenue: null;
        investment: {
            amount: string;
            details: string;
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
            answer: string;
            question: string;
        }[];
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
    github: ({
        url: string;
        name: string;
        description: string;
        metrics?: undefined;
    } | {
        url: string;
        name: string;
        description: string;
        metrics: {
            trust_rank_for_repo_in_category: string;
            num_contributors: string;
            num_trusted_contributors: string;
            num_contributors_last_6_months: string;
            num_stars: string;
            num_trusted_stars: string;
            trust_weighted_stars: string;
            num_forks: string;
            num_trusted_forks: string;
            trust_weighted_forks: string;
            age_of_project_years: string;
            license: string;
        };
    })[];
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
        ventureFunding: null;
        grants: {
            grant: string;
            link: string;
            amount: string;
            date: string;
            details: string;
        }[];
        revenue: null;
        investment: null;
    };
    pricingModel: {
        type: string;
        details: string;
    };
    impactStatement: {
        category: string;
        subcategory: string[];
        statement: {
            answer: string;
            question: string;
        }[];
    };
    testimonials: string;
} | {
    id: string;
    applicationId: string;
    projectId: string;
    category: string;
    applicationCategory: null;
    organization: null;
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
    team: null;
    github: null;
    packages: null;
    links: null;
    contracts: null;
    grantsAndFunding: {
        ventureFunding: null;
        grants: null;
        revenue: null;
        investment?: undefined;
    };
    pricingModel: string;
    impactStatement: {
        category: null;
        subcategory: null;
        statement: null;
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
        url: string;
        name: string;
        description: string;
        metrics: {
            trust_rank_for_repo_in_category: string;
            num_contributors: string;
            num_trusted_contributors: string;
            num_contributors_last_6_months: string;
            num_stars: string;
            num_trusted_stars: string;
            trust_weighted_stars: string;
            num_forks: string;
            num_trusted_forks: string;
            trust_weighted_forks: string;
            age_of_project_years: string;
            license: string;
        };
    } | {
        url: string;
        name: string;
        description: string;
        metrics?: undefined;
    })[];
    packages: null;
    links: {
        url: string;
        name: string;
        description: string;
    }[];
    contracts: null;
    grantsAndFunding: {
        ventureFunding: null;
        grants: {
            grant: string;
            link: string;
            amount: string;
            date: string;
            details: string;
        }[];
        revenue: null;
        investment: null;
    };
    pricingModel: {
        type: string;
        details: string;
    };
    impactStatement: {
        category: string;
        subcategory: string[];
        statement: {
            answer: string;
            question: string;
        }[];
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
    github: {
        url: string;
        name: string;
        description: string;
        metrics: {
            trust_rank_for_repo_in_category: string;
            num_contributors: string;
            num_trusted_contributors: string;
            num_contributors_last_6_months: string;
            num_stars: string;
            num_trusted_stars: string;
            trust_weighted_stars: string;
            num_forks: string;
            num_trusted_forks: string;
            trust_weighted_forks: string;
            age_of_project_years: string;
            license: string;
        };
    }[];
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
        ventureFunding: null;
        grants: {
            grant: string;
            link: string;
            amount: string;
            date: string;
            details: string;
        }[];
        revenue: null;
        investment: null;
    };
    pricingModel: {
        type: string;
        details: string;
    };
    impactStatement: {
        category: string;
        subcategory: string[];
        statement: {
            answer: string;
            question: string;
        }[];
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
        url: string;
        name: string;
        description: string;
    }[];
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
        ventureFunding: null;
        grants: {
            grant: string;
            link: string;
            amount: string;
            date: string;
            details: string;
        }[];
        revenue: null;
        investment: null;
    };
    pricingModel: {
        type: string;
        details: string;
    };
    impactStatement: {
        category: string;
        subcategory: string[];
        statement: {
            answer: string;
            question: string;
        }[];
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
            mirror: null;
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
    github: ({
        url: string;
        name: string;
        description: string;
        metrics?: undefined;
    } | {
        url: string;
        name: string;
        description: string;
        metrics: {
            trust_rank_for_repo_in_category: string;
            num_contributors: string;
            num_trusted_contributors: string;
            num_contributors_last_6_months: string;
            num_stars: string;
            num_trusted_stars: string;
            trust_weighted_stars: string;
            num_forks: string;
            num_trusted_forks: string;
            trust_weighted_forks: string;
            age_of_project_years: string;
            license: string;
        };
    })[];
    packages: null;
    links: {
        url: string;
        name: string;
        description: string;
    }[];
    contracts: null;
    grantsAndFunding: {
        ventureFunding: null;
        grants: {
            grant: string;
            link: string;
            amount: string;
            date: string;
            details: string;
        }[];
        revenue: null;
        investment: null;
    };
    pricingModel: {
        type: string;
        details: string;
    };
    impactStatement: {
        category: string;
        subcategory: string[];
        statement: {
            answer: string;
            question: string;
        }[];
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
        url: string;
        name: string;
        description: string;
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
        ventureFunding: null;
        grants: null;
        revenue: null;
        investment: {
            amount: string;
            details: string;
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
            answer: string;
            question: string;
        }[];
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
            sol_addresses: string[];
        };
    }[];
    github: {
        url: string;
        name: string;
        description: string;
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
        ventureFunding: null;
        grants: {
            grant: string;
            link: null;
            amount: string;
            date: string;
            details: null;
        }[];
        revenue: null;
        investment: null;
    };
    pricingModel: {
        type: string;
        details: string;
    };
    impactStatement: {
        category: string;
        subcategory: string[];
        statement: {
            answer: string;
            question: string;
        }[];
    };
    testimonials: string;
} | {
    id: string;
    applicationId: string;
    projectId: string;
    category: string;
    applicationCategory: null;
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
    team: null;
    github: null;
    packages: null;
    contracts: null;
    grantsAndFunding: {
        ventureFunding: {
            amount: string;
            year: string;
            details: string;
        }[];
        grants: null;
        revenue: null;
        investment?: undefined;
    };
    impactStatement: {
        category: null;
        subcategory: null;
        statement: null;
    };
    testimonials: string;
    links?: undefined;
    pricingModel?: undefined;
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
    github: ({
        url: string;
        name: string;
        description: string;
        metrics?: undefined;
    } | {
        url: string;
        name: string;
        description: string;
        metrics: {
            trust_rank_for_repo_in_category: string;
            num_contributors: string;
            num_trusted_contributors: string;
            num_contributors_last_6_months: string;
            num_stars: string;
            num_trusted_stars: string;
            trust_weighted_stars: string;
            num_forks: string;
            num_trusted_forks: string;
            trust_weighted_forks: string;
            age_of_project_years: string;
            license: string;
        };
    })[];
    packages: null;
    links: null;
    contracts: null;
    grantsAndFunding: {
        ventureFunding: null;
        grants: {
            grant: string;
            link: string;
            amount: string;
            date: string;
            details: string;
        }[];
        revenue: null;
        investment: {
            amount: string;
            details: string;
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
            answer: string;
            question: string;
        }[];
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
        website: null;
        farcaster: null;
        twitter: null;
        mirror: null;
    };
    team: {
        id: string;
        role: string;
        user: {
            id: string;
            bio: string;
            fid: number;
            name: string;
            email: string;
            github: string;
            object: string;
            pfp_url: string;
            profile: {
                bio: {
                    text: string;
                };
            };
            imageUrl: string;
            username: string;
            createdAt: string;
            deletedAt: null;
            updatedAt: string;
            farcasterId: string;
            power_badge: boolean;
            display_name: string;
            notDeveloper: boolean;
            active_status: string;
            emailVerified: boolean;
            verifications: null;
            follower_count: number;
            custody_address: string;
            following_count: number;
            verified_addresses: {
                eth_addresses: null;
                sol_addresses: null;
            };
        };
        userId: string;
        createdAt: string;
        deletedAt: null;
        projectId: string;
        updatedAt: string;
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
        ventureFunding: null;
        grants: {
            grant: string;
            link: null;
            amount: string;
            date: string;
            details: null;
        }[];
        revenue: null;
        investment: null;
    };
    pricingModel: {
        type: string;
        details: string;
    };
    impactStatement: {
        category: string;
        subcategory: string[];
        statement: {
            answer: string;
            question: string;
        }[];
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
        url: string;
        name: null;
        description: null;
        metrics: {
            trust_rank_for_repo_in_category: string;
            num_contributors: string;
            num_trusted_contributors: string;
            num_contributors_last_6_months: string;
            num_stars: string;
            num_trusted_stars: string;
            trust_weighted_stars: string;
            num_forks: string;
            num_trusted_forks: string;
            trust_weighted_forks: string;
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
        ventureFunding: null;
        grants: {
            grant: string;
            link: null;
            amount: string;
            date: string;
            details: null;
        }[];
        revenue: null;
        investment: null;
    };
    pricingModel: {
        type: string;
        details: string;
    };
    impactStatement: {
        category: string;
        subcategory: string[];
        statement: {
            answer: string;
            question: string;
        }[];
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
        verifications: null;
        follower_count: number;
        custody_address: string;
        following_count: number;
        verified_addresses: {
            eth_addresses: null;
            sol_addresses: null;
        };
    }[];
    github: ({
        url: string;
        name: string;
        description: string;
        metrics?: undefined;
    } | {
        url: string;
        name: string;
        description: string;
        metrics: {
            trust_rank_for_repo_in_category: string;
            num_contributors: string;
            num_trusted_contributors: string;
            num_contributors_last_6_months: string;
            num_stars: string;
            num_trusted_stars: string;
            trust_weighted_stars: string;
            num_forks: string;
            num_trusted_forks: string;
            trust_weighted_forks: string;
            age_of_project_years: string;
            license: string;
        };
    })[];
    packages: null;
    links: {
        url: string;
        name: string;
        description: string;
    }[];
    contracts: null;
    grantsAndFunding: {
        ventureFunding: null;
        grants: {
            grant: string;
            link: null;
            amount: string;
            date: string;
            details: null;
        }[];
        revenue: null;
        investment: null;
    };
    pricingModel: {
        type: string;
        details: string;
    };
    impactStatement: {
        category: string;
        subcategory: string[];
        statement: {
            answer: string;
            question: string;
        }[];
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
    github: ({
        url: string;
        name: string;
        description: string;
        metrics?: undefined;
    } | {
        url: string;
        name: string;
        description: string;
        metrics: {
            trust_rank_for_repo_in_category: string;
            num_contributors: string;
            num_trusted_contributors: string;
            num_contributors_last_6_months: string;
            num_stars: string;
            num_trusted_stars: string;
            trust_weighted_stars: string;
            num_forks: string;
            num_trusted_forks: string;
            trust_weighted_forks: string;
            age_of_project_years: string;
            license: string;
        };
    })[];
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
        ventureFunding: null;
        grants: null;
        revenue: null;
        investment: {
            amount: string;
            details: string;
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
            answer: string;
            question: string;
        }[];
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
    github: ({
        url: string;
        name: string;
        description: string;
        metrics?: undefined;
    } | {
        url: string;
        name: string;
        description: string;
        metrics: {
            trust_rank_for_repo_in_category: string;
            num_contributors: string;
            num_trusted_contributors: string;
            num_contributors_last_6_months: string;
            num_stars: string;
            num_trusted_stars: string;
            trust_weighted_stars: string;
            num_forks: string;
            num_trusted_forks: string;
            trust_weighted_forks: string;
            age_of_project_years: string;
            license: string;
        };
    })[];
    packages: null;
    links: {
        url: string;
        name: string;
        description: string;
    }[];
    contracts: null;
    grantsAndFunding: {
        ventureFunding: null;
        grants: null;
        revenue: null;
        investment: null;
    };
    pricingModel: string;
    impactStatement: {
        category: string;
        subcategory: string[];
        statement: {
            answer: string;
            question: string;
        }[];
    };
    testimonials: string;
})[];
type Project = typeof projects;
