import { Column, Heading, Meta, Row, Schema, Text } from "@once-ui-system/core";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { baseURL, orchester, organization } from "@/resources";

const stimmen = [
  {
    text: "„Wir in der Bratschengruppe haben den allerbesten Platz im Orchester: Wir sitzen mitten im Klang und haben freie Sicht auf die Dirigentin! Besser geht´s nicht.“",
    name: "Kristin, Bratschistin",
  },
  {
    text: "„Wir sind bei unseren anspruchsvollen Musikprojekten mit spielerischer Leichtigkeit und Freude unterwegs. Dies verdanken wir auch unserer Konzertmeisterin Julia Pérez Gámez. Sie gibt uns Orientierung und Sicherheit und dies mit viel Humor und menschlicher Wärme.“",
    name: "Hartmut, Geiger",
  },
  {
    text: "„Die Streicher klingen wie Honig.“",
    name: "Adrian Heger, Pianist & Dirigent",
  },
];

export async function generateMetadata() {
  return Meta.generate({
    title: orchester.title,
    description: orchester.description,
    baseURL,
    path: orchester.path,
  });
}

export default function OrchesterPage() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={orchester.title}
        description={orchester.description}
        path={orchester.path}
        author={{ name: organization.name, url: `${baseURL}${orchester.path}` }}
      />
      <Row fillWidth horizontal="center">
        <Column maxWidth={40}>
          <Column id={orchester.intro.title} fillWidth paddingY="40" vertical="center" marginBottom="32">
            <Heading variant="display-strong-xl" align="center">
              {organization.name}
            </Heading>
            <Text variant="display-default-xs" onBackground="neutral-weak" align="center">
              {organization.role}
            </Text>
          </Column>

          {orchester.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {orchester.intro.description}
            </Column>
          )}

          {orchester.work.display && (
            <>
              <Heading as="h2" id={orchester.work.title} variant="display-strong-s" marginBottom="m">
                {orchester.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {orchester.work.experiences.map((experience, index) => (
                  <Column
                    key={`${experience.company}-${experience.role}-${index}`}
                    fillWidth
                    background="surface"
                    border="neutral-alpha-weak"
                    radius="l"
                    padding="24"
                    gap="8"
                  >
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                      <Text variant="heading-strong-l">{experience.company}</Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <Text as="li" variant="body-default-m" key={`${experience.company}-${achievementIndex}`}>
                          {achievement}
                        </Text>
                      ))}
                    </Column>
                  </Column>
                ))}
              </Column>
            </>
          )}

          <Column gap="12" marginBottom="40">
            <Heading as="h2" variant="heading-strong-m" align="center">
              Orchesterstimmen …
            </Heading>
            <TestimonialCarousel items={stimmen} />
          </Column>
        </Column>
      </Row>
    </Column>
  );
}
