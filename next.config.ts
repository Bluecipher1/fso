import type { NextConfig } from "next";

// Repo is served at https://bluecipher1.github.io/fso/ (not a root
// "username.github.io" repo), so GitHub Pages builds need this base path.
// Only applied in CI so local `npm run dev`/`next build` still serve from "/".
const isGithubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const repoName = "fso";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // next/image doesn't auto-prepend basePath for unoptimized/static-export
  // images the way next/link does for routes, so we expose it here and
  // prepend it ourselves wherever a public/ asset path is passed to Media —
  // see resources/once-ui.config.ts's `assetPath` helper.
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPagesBuild ? `/${repoName}` : "",
  },
  ...(isGithubPagesBuild
    ? {
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
      }
    : {}),
};

export default nextConfig;
