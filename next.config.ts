import type { NextConfig } from "next";

// Repo is served at https://bluecipher1.github.io/fso/ (not a root
// "username.github.io" repo), so GitHub Pages builds need this base path.
// Only applied in CI so local `npm run dev`/`next build` still serve from "/".
const isGithubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const repoName = "fso";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  ...(isGithubPagesBuild
    ? {
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
      }
    : {}),
};

export default nextConfig;
