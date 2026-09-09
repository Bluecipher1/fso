import { Column, Heading, Meta, Text } from "@once-ui-system/core";
import { baseURL } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Impressum",
    description: "Anbieterkennzeichnung des Freien Sinfonieorchesters.",
    baseURL,
    path: "/impressum",
  });
}

export default function ImpressumPage() {
  return (
    <Column maxWidth="s" gap="32" paddingY="24">
      <Heading variant="display-strong-l" align="center">
        Anbieterkennzeichnung
      </Heading>

      <Column gap="8">
        <Heading as="h2" variant="heading-strong-m">
          Verantwortlich für den Inhalt dieser Website
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          V.i.S.d.P. gemäß § 6 MDStV.:
        </Text>
      </Column>

      <Column gap="8">
        <Heading as="h2" variant="heading-strong-m">
          Bildnachweis
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Fotos: Rebecca Seemann & mehr
        </Text>
      </Column>
    </Column>
  );
}
