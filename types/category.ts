interface WPLink {
  href: string;
  targetHints?: {
    allow: string[];
  };
}

export interface WPCategory {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
  meta: any[];
  _links: {
    self: WPLink[];
    collection: WPLink[];
    about: WPLink[];
    "wp:post_type": WPLink[];
    curies: {
      name: string;
      href: string;
      templated: boolean;
    }[];
  };
}