import type { MetadataRoute } from "next";
import { getConcertPosts } from "@/app/konzerte/utils";
import { baseURL, routes } from "@/resources";

export default function sitemap(): MetadataRoute.Sitemap {
  const concerts = getConcertPosts().map((post) => ({
    url: `${baseURL}/konzerte/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const staticRoutes = [...Object.keys(routes), "/impressum", "/datenschutz"].map((route) => ({
    url: `${baseURL}${route === "/" ? "" : route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...staticRoutes, ...concerts];
}
