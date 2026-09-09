"use client";

import { useEffect, useState } from "react";
import { Column, Row, Text } from "@once-ui-system/core";

export type Stimme = {
  text: string;
  name: string;
};

const HOLD_MS = 6000;
const FADE_MS = 1000;

export default function TestimonialCarousel({ items }: { items: Stimme[] }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (items.length <= 1) return;

    let fadeTimeout: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setVisible(false);
      fadeTimeout = setTimeout(() => {
        setIndex((i) => (i + 1) % items.length);
        setVisible(true);
      }, FADE_MS);
    }, HOLD_MS);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimeout);
    };
  }, [items.length]);

  const current = items[index];

  return (
    <Row fillWidth horizontal="center">
      <Column
        maxWidth={22}
        minHeight={14}
        horizontal="center"
        vertical="center"
        radius="l"
        shadow="m"
        padding="24"
        gap="8"
        style={{
          // Same faded red as the selected nav-pill entry (white 22% over
          // the brand red #c8102e — see .navPill in Header.module.scss).
          backgroundColor: "#d4455c",
          opacity: visible ? 1 : 0,
          transition: `opacity ${FADE_MS}ms ease-in-out`,
        }}
      >
        <Text
          variant="body-default-m"
          align="center"
          style={{ fontStyle: "italic", color: "#ffffff" }}
        >
          {current.text}
        </Text>
        <Text variant="label-default-s" align="center" style={{ color: "rgba(255,255,255,0.8)" }}>
          – {current.name}
        </Text>
      </Column>
    </Row>
  );
}
