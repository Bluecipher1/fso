"use client";

import { useEffect, useState } from "react";
import { Column, Text } from "@once-ui-system/core";

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
    <Column
      fillWidth
      minHeight={20}
      horizontal="center"
      vertical="center"
      paddingLeft="16"
      border="brand-alpha-medium"
      style={{
        borderLeftWidth: "3px",
        opacity: visible ? 1 : 0,
        transition: `opacity ${FADE_MS}ms ease-in-out`,
      }}
      gap="4"
    >
      <Text variant="body-default-m" align="center" style={{ fontStyle: "italic" }}>
        {current.text}
      </Text>
      <Text variant="label-default-s" onBackground="neutral-weak" align="center">
        – {current.name}
      </Text>
    </Column>
  );
}
