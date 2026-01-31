import type { SiteConfig, SEOProps } from "../types/seo";

export const siteConfig: SiteConfig = {
  name: "Luis von Rondow",
  url: "https://rondow.dev",
  author: "Luis von Rondow",
  description:
    "Software engineer building modern web applications. Portfolio showcasing projects, talks, and technical writing.",
  locale: "en_US",
  twitter: {
    site: "@luisrondow",
    creator: "@luisrondow",
  },
};

export const pageSEO: Record<string, SEOProps> = {
  home: {
    title: "Luis von Rondow",
    description:
      "Software engineer building modern web applications. Portfolio showcasing projects, work experience, and open source contributions.",
    openGraph: {
      type: "profile",
    },
  },
  blog: {
    title: "Blog | Luis von Rondow",
    description:
      "Articles and thoughts on software development, web technologies, and engineering best practices.",
    openGraph: {
      type: "website",
    },
  },
  projects: {
    title: "Projects | Luis von Rondow",
    description:
      "Open source projects and side projects built with modern web technologies.",
    openGraph: {
      type: "website",
    },
  },
  bookmarks: {
    title: "Bookmarks | Luis von Rondow",
    description:
      "Curated collection of useful resources, tools, and articles for developers.",
    openGraph: {
      type: "website",
    },
  },
  talks: {
    title: "Talks | Luis von Rondow",
    description:
      "Conference talks and presentations on software development and web technologies.",
    openGraph: {
      type: "website",
    },
  },
};
