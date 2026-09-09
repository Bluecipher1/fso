import { notFound } from "next/navigation";
import { Column, Heading, Meta, Row, Schema, SmartLink, Text } from "@once-ui-system/core";
import { CustomMDX } from "@/components/Mdx";
import { getConcertPosts, formatEventDate } from "@/app/konzerte/utils";
import { baseURL, konzerte, organization } from "@/resources";

export async function generateStaticParams() {
  const concerts = getConcertPosts();
  return concerts.map((concert) => ({ slug: concert.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const concert = getConcertPosts().find((c) => c.slug === slug);
  if (!concert) return {};

  return Meta.generate({
    title: concert.metadata.title,
    description: concert.metadata.summary,
    baseURL,
    path: `${konzerte.path}/${concert.slug}`,
  });
}

export default async function KonzertPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const concert = getConcertPosts().find((c) => c.slug === slug);

  if (!concert) {
    notFound();
  }

  return (
    <Row fillWidth horizontal="center">
      <Column as="section" maxWidth="s" horizontal="center" gap="l" paddingTop="24">
        <Schema
          as="article"
          baseURL={baseURL}
          path={`${konzerte.path}/${concert.slug}`}
          title={concert.metadata.title}
          description={concert.metadata.summary}
          author={{ name: organization.name, url: `${baseURL}${konzerte.path}` }}
        />
        <Column maxWidth="s" gap="12" horizontal="center" align="center">
          <SmartLink href="/konzerte">
            <Text variant="label-strong-m">Konzerte</Text>
          </SmartLink>
          <Text variant="body-default-xs" onBackground="neutral-weak">
            {formatEventDate(concert.metadata.publishedAt)}
          </Text>
          <Heading variant="display-strong-m" wrap="balance" align="center">
            {concert.metadata.title}
          </Heading>
        </Column>

        <Column as="article" maxWidth="s" fillWidth>
          <CustomMDX source={concert.content} />
        </Column>
      </Column>
    </Row>
  );
}
