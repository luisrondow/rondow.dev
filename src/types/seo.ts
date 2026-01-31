export interface OpenGraphProps {
  title?: string;
  description?: string;
  image?: string;
  type?: "website" | "article" | "profile";
}

export interface TwitterProps {
  card?: "summary" | "summary_large_image";
  title?: string;
  description?: string;
  image?: string;
}

export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  openGraph?: OpenGraphProps;
  twitter?: TwitterProps;
}

export interface SiteConfig {
  name: string;
  url: string;
  author: string;
  description: string;
  locale: string;
  twitter: {
    site: string;
    creator: string;
  };
}
