import { Row, Column, SmartLink, Text } from "@once-ui-system/core";
import { organization } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Row as="footer" fillWidth padding="8" horizontal="center" s={{ direction: "column" }}>
      <Column
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="8"
        horizontal="center"
        s={{ align: "center" }}
      >
        <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance" align="center">
          Für die bessere Lesbarkeit benutzen wir überwiegend das generische
          Maskulin. Es bezieht sich auf alle Geschlechter (m/w/d) und
          geschlechtlichen Identitäten.
        </Text>
        <Row gap="16" wrap horizontal="center">
          <SmartLink href="/impressum">Impressum</SmartLink>
          <SmartLink href="/datenschutz">Datenschutz</SmartLink>
        </Row>
        <Text variant="body-default-xs" onBackground="neutral-weak">
          © {currentYear} {organization.name} / Design nach{" "}
          <SmartLink href="https://once-ui.com/products/magic-portfolio">Once UI</SmartLink>
        </Text>
      </Column>
      <Row height="80" hide s={{ hide: false }} />
    </Row>
  );
};
