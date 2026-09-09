import { Column, Heading, List, ListItem, Meta, Text } from "@once-ui-system/core";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { baseURL } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Mitspielen",
    description:
      "Hast Du Interesse, mit dem Freien Sinfonieorchester zu spielen? Wir suchen Musizierende!",
    baseURL,
    path: "/mitspielen",
  });
}

const stimmen = [
  { text: "„Mittwoch ist mein Lieblingstag!“", name: "Minka, Geigerin" },
  {
    text: "„Ich kam zunächst als Verstärkung zum Konzert April 2026 – und blieb. Mir gefällt, dass ich freundlich aufgenommen wurde und wir bei der Interpretation der Musikwerke mitwirken können.“",
    name: "Gesa, Geigerin",
  },
  {
    text: "„Manchmal bin ich mittwochabends etwas müde, wenn ich aus dem Büro zur Probe fahre. Aber hinterher, auf dem Weg nach Hause, singe ich jedesmal.“",
    name: "Christian, Oboist",
  },
  {
    text: "„Musik verbindet Menschen und das tut sie an vielen Mittwochabenden um 20 Uhr, wenn wir gemeinsam proben.“",
    name: "Christel, Klarinettistin",
  },
  {
    text: "„Das Freie Sinfonieorchester ist das netteste Laienorchester, das ich kenne. Jeder Musizierende wird freundlich aufgenommen, niemand schaut kritisch auf die Mitspielenden.“",
    name: "Susanne, Geigerin",
  },
];

export default function MitspielenPage() {
  return (
    <Column maxWidth="s" gap="24" paddingY="24">
      <Heading variant="display-strong-l" align="center" wrap="balance">
        Hast Du Interesse, mit dem Freien Sinfonieorchester zu spielen?
      </Heading>
      <Text variant="heading-default-m" onBackground="neutral-weak" align="center">
        Wir suchen Musizierende! Jung oder alt, mit oder ohne Bezug zur
        Rudolf Steiner Schule – wir freuen uns auf dich.
      </Text>

      <Column background="surface" border="neutral-alpha-weak" radius="l" padding="24" gap="12">
        <Heading as="h2" variant="heading-strong-m">
          Wir proben:
        </Heading>
        <List>
          <ListItem>mittwochs | außer in den Berliner Schulferien</ListItem>
          <ListItem>20–22 Uhr</ListItem>
          <ListItem>2 Probenwochenenden im Frühjahr und Herbst</ListItem>
          <ListItem>
            in der Rudolf Steiner Schule Berlin | Musiksaal 1. Stock,
            Clayallee 104 | 14195 Berlin
          </ListItem>
          <ListItem>
            öffentlicher Nahverkehr: Busse X10, 115, X83 | U2
            Oskar-Helene-Heim, ca. 10 Min. zu Fuß
          </ListItem>
          <ListItem>Der Probenraum ist leider nicht barrierefrei zugänglich</ListItem>
        </List>
      </Column>

      <Text variant="body-default-m" onBackground="neutral-weak" align="center">
        Du kannst auch in ein laufendes Musikprojekt einsteigen. Melde dich
        bitte bei unserer Dirigentin Julia Prigge.
      </Text>

      <Column gap="12" marginTop="24">
        <Heading as="h2" variant="heading-strong-m" align="center">
          Orchesterstimmen …
        </Heading>
        <TestimonialCarousel items={stimmen} />
      </Column>
    </Column>
  );
}
