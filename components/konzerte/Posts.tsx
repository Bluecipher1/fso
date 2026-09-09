import { Column } from "@once-ui-system/core";
import { getConcertPosts } from "@/app/konzerte/utils";
import Post from "./Post";

interface PostsProps {
  range?: [number] | [number, number];
  exclude?: string[];
}

export function Posts({ range, exclude = [] }: PostsProps) {
  let allConcerts = getConcertPosts();

  if (exclude.length) {
    allConcerts = allConcerts.filter((post) => !exclude.includes(post.slug));
  }

  const sorted = allConcerts.sort(
    (a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime(),
  );

  const displayed = range
    ? sorted.slice(range[0] - 1, range.length === 2 ? range[1] : sorted.length)
    : sorted;

  return (
    <>
      {displayed.length > 0 && (
        <Column fillWidth gap="16">
          {displayed.map((post) => (
            <Post key={post.slug} post={post} />
          ))}
        </Column>
      )}
    </>
  );
}
