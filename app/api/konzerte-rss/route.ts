import { baseURL as baseUrl } from "@/resources";
import { getConcertPosts } from "@/app/konzerte/utils";

export const dynamic = "force-static";

export async function GET() {
  const concerts = getConcertPosts().sort((a, b) =>
    new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1,
  );

  const itemsXml = concerts
    .map(
      (post) => `<item>
          <title>${post.metadata.title}</title>
          <link>${baseUrl}/konzerte/${post.slug}</link>
          <description>${post.metadata.summary || ""}</description>
          <pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>
        </item>`,
    )
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>Freies Sinfonieorchester – Konzerte</title>
        <link>${baseUrl}/konzerte</link>
        <description>Konzerte des Freien Sinfonieorchesters an der Rudolf Steiner Schule</description>
        ${itemsXml}
    </channel>
  </rss>`;

  return new Response(rssFeed, {
    headers: { "Content-Type": "text/xml" },
  });
}
