export interface WPPost {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  _links: WPLinks;
  _embedded?: WPEmbedded;
}

export interface WPLinks {
  self: WPLink[];
  collection: WPLink[];
  about: WPLink[];
  author?: WPAuthorLink[];
  replies?: WPLink[];
  "version-history"?: WPVersionHistory[];
  "predecessor-version"?: WPPredecessorVersion[];
  "wp:featuredmedia"?: WPLink[];
  "wp:attachment"?: WPLink[];
  "wp:term"?: WPLink[];
  curies?: WPCurie[];
}

export interface WPLink {
  href: string;
  targetHints?: {
    allow: string[];
  };
}

export interface WPAuthorLink extends WPLink {
  embeddable: boolean;
}

export interface WPVersionHistory {
  count: number;
  href: string;
}

export interface WPPredecessorVersion {
  id: number;
  href: string;
}

export interface WPCurie {
  name: string;
  href: string;
  templated: boolean;
}

export interface WPEmbedded {
  author?: WPAuthor[];
  "wp:featuredmedia"?: WPFeaturedMedia[];
  "wp:term"?: WPTagCategory[][];
}

export interface WPAuthor {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls: {
    [size: string]: string;
  };
  _links: WPLinks;
}

export interface WPFeaturedMedia {
  id: number;
  date: string;
  slug: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  author: number;
  featured_media: number;
  caption: {
    rendered: string;
  };
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: MediaDetails;
  source_url: string;
  _links: WPLinks;
}

export interface MediaDetails {
  width: number;
  height: number;
  file: string;
  filesize: number;
  sizes: {
    medium?: MediaSize;
    thumbnail?: MediaSize;
    full?: MediaSize;
  };
  image_meta: ImageMeta;
}

export interface MediaSize {
  file: string;
  width: number;
  height: number;
  filesize?: number;
  mime_type: string;
  source_url: string;
}

export interface ImageMeta {
  aperture: string;
  credit: string;
  camera: string;
  caption: string;
  created_timestamp: string;
  copyright: string;
  focal_length: string;
  iso: string;
  shutter_speed: string;
  title: string;
  orientation: string;
  keywords: string[];
}

export interface WPTagCategory {
  id: number;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  _links: WPLinks;
}
