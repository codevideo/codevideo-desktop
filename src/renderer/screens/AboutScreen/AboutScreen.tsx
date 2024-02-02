import { Heading, Text } from "@radix-ui/themes";
import React from "react";

export function AboutScreen() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Heading size="9">About</Heading>
      <Text>(c) {currentYear} Full Stack Craft LLC</Text>
    </>
  );
}
