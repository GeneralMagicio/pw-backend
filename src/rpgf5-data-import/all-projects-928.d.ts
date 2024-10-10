export declare const projects: ({
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
            sol_addresses: any[];
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
    packages: any[];
    links: {
        url: string;
        name: string;
        description: string;
    }[];
    contracts: any[];
    grantsAndFunding: {
        ventureFunding: any[];
        revenue: any[];
        grants: {
            grant: string;
            link: string;
            amount: string;
            date: string;
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
    organization: any;
    name: string;
    description: string;
    profileAvatarUrl: string;
    projectCoverImageUrl: string;
    socialLinks: {
        website: string[];
        farcaster: any[];
        twitter: string;
        mirror: any;
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
    packages: any[];
    links: any[];
    contracts: any[];
    grantsAndFunding: {
        ventureFunding: any[];
        revenue: any[];
        grants: {
            grant: string;
            link: any;
            amount: string;
            date: string;
            details: any;
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
            farcaster: any[];
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
        mirror: any;
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
            sol_addresses: any[];
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
    packages: any[];
    links: {
        url: string;
        name: string;
        description: string;
    }[];
    contracts: any[];
    grantsAndFunding: {
        ventureFunding: {
            amount: string;
            year: string;
            details: string;
        }[];
        revenue: any[];
        grants: any[];
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
            sol_addresses: any[];
        };
    }[];
    github: any[];
    packages: any[];
    links: {
        url: string;
        name: string;
        description: string;
    }[];
    contracts: any[];
    grantsAndFunding: {
        ventureFunding: {
            amount: string;
            year: string;
            details: string;
        }[];
        revenue: any[];
        grants: {
            grant: string;
            link: string;
            amount: string;
            date: string;
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
            farcaster: any[];
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
        farcaster: any[];
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
            sol_addresses: any[];
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
    packages: any[];
    links: {
        url: string;
        name: string;
        description: string;
    }[];
    contracts: any[];
    grantsAndFunding: {
        ventureFunding: {
            amount: string;
            year: string;
            details: string;
        }[];
        revenue: any[];
        grants: {
            grant: string;
            link: string;
            amount: string;
            date: string;
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
    organization: any;
    name: string;
    description: string;
    profileAvatarUrl: string;
    projectCoverImageUrl: string;
    socialLinks: {
        website: string[];
        farcaster: any[];
        twitter: string;
        mirror: any;
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
            sol_addresses: any[];
        };
    }[];
    github: ({
        id: string;
        type: string;
        url: string;
        name: any;
        description: any;
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
        name: any;
        description: any;
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
        ventureFunding: any[];
        revenue: any[];
        grants: {
            grant: string;
            link: any;
            amount: string;
            date: string;
            details: any;
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
        mirror: any;
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
        verifications: any[];
        follower_count: number;
        custody_address: string;
        following_count: number;
        verified_addresses: {
            eth_addresses: any[];
            sol_addresses: any[];
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
    packages: any[];
    links: {
        url: string;
        name: string;
        description: string;
    }[];
    contracts: any[];
    grantsAndFunding: {
        ventureFunding: {
            amount: string;
            year: string;
            details: string;
        }[];
        revenue: any[];
        grants: {
            grant: string;
            link: string;
            amount: string;
            date: string;
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
            farcaster: any[];
            twitter: string;
            mirror: any;
        };
        team: string[];
    };
    name: string;
    description: string;
    profileAvatarUrl: string;
    projectCoverImageUrl: string;
    socialLinks: {
        website: any[];
        farcaster: any[];
        twitter: any;
        mirror: any;
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
            sol_addresses: any[];
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
    packages: any[];
    links: any[];
    contracts: {
        address: string;
        deploymentTxHash: string;
        deployerAddress: string;
        verificationProof: string;
        chainId: number;
    }[];
    grantsAndFunding: {
        ventureFunding: any[];
        revenue: any[];
        grants: {
            grant: string;
            link: string;
            amount: string;
            date: string;
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
            sol_addresses: any[];
        };
    }[];
    github: ({
        id: string;
        type: string;
        url: string;
        name: any;
        description: any;
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
        name: any;
        description: any;
    }[];
    links: {
        url: string;
        name: string;
        description: string;
    }[];
    contracts: any[];
    grantsAndFunding: {
        ventureFunding: any[];
        revenue: any[];
        grants: {
            grant: string;
            link: string;
            amount: string;
            date: string;
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
            website: any[];
            farcaster: any[];
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
        website: any[];
        farcaster: any[];
        twitter: any;
        mirror: any;
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
        verifications: any[];
        follower_count: number;
        custody_address: string;
        following_count: number;
        verified_addresses: {
            eth_addresses: any[];
            sol_addresses: any[];
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
    packages: any[];
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
        ventureFunding: {
            amount: string;
            year: string;
            details: string;
        }[];
        revenue: any[];
        grants: any[];
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
            farcaster: any[];
            twitter: string;
            mirror: any;
        };
        team: string[];
    };
    name: string;
    description: string;
    profileAvatarUrl: string;
    projectCoverImageUrl: string;
    socialLinks: {
        website: string[];
        farcaster: any[];
        twitter: string;
        mirror: any;
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
        verifications: any[];
        follower_count: number;
        custody_address: string;
        following_count: number;
        verified_addresses: {
            eth_addresses: any[];
            sol_addresses: any[];
        };
    }[];
    github: ({
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
    packages: any[];
    links: {
        url: string;
        name: string;
        description: string;
    }[];
    contracts: any[];
    grantsAndFunding: {
        ventureFunding: any[];
        revenue: any[];
        grants: {
            grant: string;
            link: any;
            amount: string;
            date: string;
            details: any;
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
})[];
