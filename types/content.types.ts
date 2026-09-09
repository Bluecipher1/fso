import { IconName } from "@/resources/icons";
import { zones } from "tzdata";

export type IANATimeZone = Extract<keyof typeof zones, string>;

/**
 * The organization featured on the site (the orchestra itself).
 */
export type Organization = {
  name: string;
  role: string;
  email: string;
  location: IANATimeZone;
  languages?: string[];
  locale?: string;
};

export type NavItem = {
  path: `/${string}`;
  label: string;
  icon: IconName;
};

export interface BasePageConfig {
  path: `/${string}` | string;
  label: string;
  title: string;
  description: string;
  image?: `/images/${string}` | string;
}

export interface Home extends BasePageConfig {
  image: `/images/${string}` | string;
  headline: React.ReactNode;
  featured: {
    display: boolean;
    title: React.ReactNode;
    href: string;
  };
  subline: React.ReactNode;
}

export interface About extends BasePageConfig {
  intro: {
    display: boolean;
    title: string;
    description: React.ReactNode;
  };
  work: {
    display: boolean;
    title: string;
    experiences: Array<{
      company: string;
      timeframe: string;
      role: string;
      achievements: React.ReactNode[];
    }>;
  };
}

export interface Blog extends BasePageConfig {}
