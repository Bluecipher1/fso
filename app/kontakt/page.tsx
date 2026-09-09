import { Column, Heading, Meta, Text } from "@once-ui-system/core";
import { baseURL } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Kontakt",
    description: "Kontaktieren Sie das Freie Sinfonieorchester an der Rudolf Steiner Schule.",
    baseURL,
    path: "/kontakt",
  });
}

export default function KontaktPage() {
  return (
    <Column maxWidth="s" gap="16" paddingY="24">
      <Heading variant="display-strong-l" align="center">
        Kontakt
      </Heading>
      <Text variant="body-default-l" onBackground="neutral-weak" align="center">
        Hast Du Fragen zum Freien Sinfonieorchester, möchtest mitspielen oder
        mehr über unsere Konzerte erfahren? Melde dich gerne bei unserer
        Dirigentin Julia Prigge.
      </Text>
      <Text variant="body-default-m" onBackground="neutral-weak" align="center">
        Weitere Kontaktmöglichkeiten folgen in Kürze.
      </Text>
    </Column>
  );
}
