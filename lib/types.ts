import { LINKS } from "@/constants";

export type SectionName = (typeof LINKS)[number]["name"];

export type PostData = {
    slug: string;
    title: string;
    subtitle: string;
    author: string;
    date: string;
    contentHtml: string;
    tags: string[];
  };
  