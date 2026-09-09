import type { MetadataRoute } from "next";
import { baseURL } from "@/resources";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*" }],
    sitemap: `${baseURL}/sitemap.xml`,
  };
}
