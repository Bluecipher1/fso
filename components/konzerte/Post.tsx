import { Card, Column, Row, Text } from "@once-ui-system/core";
import { formatEventDate } from "@/app/konzerte/utils";
import type { ConcertMetadata } from "@/app/konzerte/utils";

interface PostProps {
  post: { slug: string; metadata: ConcertMetadata };
}

export default function Post({ post }: PostProps) {
  return (
    <Card
      fillWidth
      href={`/konzerte/${post.slug}`}
      transition="micro-medium"
      border="neutral-alpha-weak"
      background="surface"
      padding="4"
      radius="l-4"
    >
      <Row fillWidth>
        <Column fillWidth paddingY="20" paddingX="l" gap="8">
          <Text variant="label-strong-s" onBackground="brand-weak">
            {formatEventDate(post.metadata.publishedAt)}
          </Text>
          <Text variant="heading-strong-l" wrap="balance">
            {post.metadata.title}
          </Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            {post.metadata.summary}
          </Text>
        </Column>
      </Row>
    </Card>
  );
}
