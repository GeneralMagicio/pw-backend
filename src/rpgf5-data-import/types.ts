export interface Project {
  id: string;
  applicationId: string;
  projectId: string;
  category: string;
  applicationCategory: string;
  organization: {
    name: string;
    description: string;
    organizationAvatarUrl: string;
    organizationCoverImageUrl: string | null;
    socialLinks: {
      website: string[];
      farcaster: string[];
      twitter: string | null;
      mirror: string | null;
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
    twitter: string | null;
    mirror: string | null;
  };
  team: string[];
  github: Array<{
    url: string;
    name: string | null;
    description: string | null;
  }>;
  packages: any[];
  links: Array<{
    url: string;
    name: string;
    description: string;
  }>;
  contracts: any[];
  grantsAndFunding: {
    ventureFunding: any[];
    grants: Array<{
      grant: string | null;
      link: string | null;
      amount: string;
      date: string;
      details: string | null;
    }>;
    revenue: any[];
  };
  pricingModel: string;
  impactStatement: {
    category: string;
    subcategory: string[];
    statement: Array<{
      answer: string;
      question: string;
    }>;
  };
}

export interface AgoraApiResponse {
  meta: {
    has_next: boolean;
    total_returned: number;
    next_offset: number;
  };
  data: Project[];
}
