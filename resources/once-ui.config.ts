import {
  DisplayConfig,
  EffectsConfig,
  FontsConfig,
  RoutesConfig,
  SchemaConfig,
  StyleConfig,
} from "@/types";
import { organization } from "./content";

export const baseURL: string =
  process.env.NEXT_PUBLIC_SITE_URL || "https://freies-sinfonieorchester.example.com";

export const routes: RoutesConfig = {
  "/": true,
  "/konzerte": true,
  "/mitspielen": true,
  "/orchester": true,
  "/leitung": true,
  "/kontakt": true,
};

export const display: DisplayConfig = {
  location: false,
  themeSwitcher: false,
};

import { Geist, Geist_Mono } from "next/font/google";

const heading = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Geist({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const code = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

export const fonts: FontsConfig = {
  heading,
  body,
  label,
  code,
};

// Locked to a fixed light theme with a red-branded palette — see
// resources/custom.css for the overrides that make body text red on a
// white page background, while the header nav pill stays red (scoped
// override in Header.module.scss).
export const style: StyleConfig = {
  theme: "light",
  neutral: "gray",
  brand: "red",
  accent: "red",
  solid: "contrast",
  solidStyle: "flat",
  border: "playful",
  surface: "translucent",
  transition: "all",
  scaling: "100",
};

export const effects: EffectsConfig = {
  mask: {
    cursor: false,
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: false,
    opacity: 100,
    x: 50,
    y: 60,
    width: 100,
    height: 50,
    tilt: 0,
    colorStart: "accent-background-strong",
    colorEnd: "page-background",
  },
  dots: {
    display: true,
    opacity: 40,
    size: "2",
    color: "neutral-alpha-medium",
  },
  grid: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-medium",
    width: "0.25rem",
    height: "0.25rem",
  },
  lines: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-weak",
    size: "16",
    thickness: 1,
    angle: 45,
  },
};

export const schema: SchemaConfig = {
  logo: "",
  type: "Organization",
  name: organization.name,
  description: `${organization.name} ${organization.role}`,
  email: organization.email,
};
