import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { Posts } from "@/components/konzerte/Posts";
import { baseURL, konzerte, organization } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: konzerte.title,
    description: konzerte.description,
    baseURL,
    path: konzerte.path,
  });
}

export default function KonzertePage() {
  return (
    <Column maxWidth="m" paddingTop="24" gap="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={konzerte.title}
        description={konzerte.description}
        path={konzerte.path}
        author={{ name: organization.name, url: `${baseURL}${konzerte.path}` }}
      />
      <Heading marginLeft="24" variant="display-strong-s">
        {konzerte.title}
      </Heading>
      <Text marginLeft="24" onBackground="neutral-weak" variant="heading-default-m">
        Wir laden Sie/Euch herzlich zu unserem nächsten Konzert ein! Eintritt
        frei – Spenden erbeten.
      </Text>
      <Posts />
    </Column>
  );
}
