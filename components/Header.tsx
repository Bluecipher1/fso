"use client";

import { usePathname } from "next/navigation";

import { Fade, Line, Row } from "@once-ui-system/core";
import { ToggleButton } from "@once-ui-system/core";

import { navItems, routes } from "@/resources";
import styles from "./Header.module.scss";

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade s={{ hide: true }} fillWidth position="fixed" height="80" zIndex={9} />
      <Fade
        hide
        s={{ hide: false }}
        fillWidth
        position="fixed"
        bottom="0"
        to="top"
        height="80"
        zIndex={9}
      />
      <Row
        fitHeight
        className={styles.position}
        position="sticky"
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
        s={{ position: "fixed" }}
      >
        <Row fillWidth horizontal="center">
          <Row
            className={styles.navPill}
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Row gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
              {navItems.map((item, index) => {
                if (!routes[item.path]) return null;
                const selected =
                  item.path === "/" ? pathname === "/" : pathname.startsWith(item.path);

                return (
                  <Row key={item.path}>
                    {index > 0 && <Line background="neutral-alpha-medium" vert maxHeight="24" />}
                    <Row s={{ hide: true }}>
                      <ToggleButton
                        prefixIcon={item.icon}
                        href={item.path}
                        label={item.label}
                        selected={selected}
                      />
                    </Row>
                    <Row hide s={{ hide: false }}>
                      <ToggleButton prefixIcon={item.icon} href={item.path} selected={selected} />
                    </Row>
                  </Row>
                );
              })}
            </Row>
          </Row>
        </Row>
      </Row>
    </>
  );
};
