import { Column, Heading, Meta, Text } from "@once-ui-system/core";
import { baseURL } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Datenschutz",
    description: "Datenschutzerklärung des Freien Sinfonieorchesters.",
    baseURL,
    path: "/datenschutz",
  });
}

export default function DatenschutzPage() {
  return (
    <Column maxWidth="s" gap="16" paddingY="24">
      <Heading variant="display-strong-l" align="center">
        Datenschutz
      </Heading>
      <Text variant="body-default-m" onBackground="neutral-weak" align="center">
        Die Datenschutzerklärung folgt in Kürze.
      </Text>
    </Column>
  );
}
