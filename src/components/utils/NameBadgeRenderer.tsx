import { Badge } from "@radix-ui/themes";
import * as React from "react";

export interface INameBadgeRendererProps {
  name: string;
}

export function NameBadgeRenderer(props: INameBadgeRendererProps) {
  const { name } = props;
  switch (name) {
    case "speak-only":
      return <Badge color="orange">speak</Badge>;
    case "type":
      return <Badge color="blue">type</Badge>;
    default:
      return <Badge color="gray">unknown</Badge>;
  }
}
