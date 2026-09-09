import { Column, Heading, Meta, Line, Text } from "@once-ui-system/core";
import { baseURL } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Leitung",
    description: "Die Leitung des Freien Sinfonieorchesters: Dirigentin und Konzertmeisterin.",
    baseURL,
    path: "/leitung",
  });
}

export default function LeitungPage() {
  return (
    <Column maxWidth="s" gap="40" paddingY="24">
      <Heading variant="display-strong-l" align="center">
        Leitung
      </Heading>

      <Column gap="16">
        <Heading as="h2" variant="display-strong-xs">
          Julia Prigge
        </Heading>
        <Text variant="label-strong-s" onBackground="brand-weak">
          Dirigentin
        </Text>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Julia Prigge leitet das Freie Sinfonieorchester als Dirigentin. Mehr
          über sie folgt in Kürze.
        </Text>
      </Column>

      <Line />

      <Column gap="16">
        <Heading as="h2" variant="display-strong-xs">
          Julia Pérez Gámez
        </Heading>
        <Text variant="label-strong-s" onBackground="brand-weak">
          Konzertmeisterin
        </Text>

        <Column
          paddingLeft="16"
          border="brand-alpha-medium"
          style={{ borderLeftWidth: "3px" }}
          gap="4"
        >
          <Text variant="body-default-m" style={{ fontStyle: "italic" }}>
            „Für mich ist jede Probe mit dem Freien Sinfonieorchester
            spannend: Tolle Dinge passieren, die ich nicht immer erwarte. Es
            hat für mich einen unschätzbaren Wert, alles gemeinsam mit dem
            Orchester zu erleben – auch die wunderbare Atmosphäre mit der
            hervorragenden Julia Prigge.“
          </Text>
          <Text variant="label-default-s" onBackground="neutral-weak">
            – Julia, Konzertmeisterin
          </Text>
        </Column>

        <Text variant="body-default-m" onBackground="neutral-weak">
          Julia Pérez Gámez ist auf die erste Waldorfschule in Spanien
          gegangen. Sie begann mit sieben Jahren, Geigenunterricht zu nehmen.
          In der Schule spielte sie in verschiedenen Orchestern und
          Ensembles.
        </Text>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Danach studierte sie Geige in Madrid am Conservatorio Profesional
          de Música Amaniel. Im Jahr 2007 zog sie für ein privates Studium
          bei Rainer Johannes Kimstedt nach Berlin.
        </Text>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Pérez Gámez unterrichtet Geige an Berliner Musikschulen und leitet
          dort ein Jugendorchester. Weiterhin coacht sie verschiedene
          Kammermusik-Ensembles. Außerdem ist sie Mitgründerin und
          Violinistin des Spring Quartett Berlin.
        </Text>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Seit 2025 ist Pérez Gámez projektweise Konzertmeisterin beim Freien
          Sinfonieorchester.
        </Text>

        <Column
          paddingLeft="16"
          border="brand-alpha-medium"
          style={{ borderLeftWidth: "3px" }}
          gap="4"
        >
          <Text variant="body-default-m" style={{ fontStyle: "italic" }}>
            „Wir sind sehr froh, dass Julia Pérez Gámez unsere
            Konzertmeisterin ist. Julia ist eine erfahrene professionelle
            Geigerin mit wunderbarem Klang & Technik. Alle Stimmgruppen des
            Orchesters unterstützt sie. Wir Geigerinnen und Geiger
            profitieren davon besonders.“
          </Text>
          <Text variant="label-default-s" onBackground="neutral-weak">
            – Wiltrud, Geigerin
          </Text>
        </Column>
      </Column>
    </Column>
  );
}
