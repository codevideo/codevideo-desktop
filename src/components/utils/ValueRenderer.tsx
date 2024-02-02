import { Pencil1Icon } from "@radix-ui/react-icons";
import { TextArea, TextField } from "@radix-ui/themes";
import * as React from "react";

export interface IValueRendererProps {
  value: string;
}

export function ValueRenderer(props: IValueRendererProps) {
  const { value } = props;
  return (
    <TextArea value={value} onChange={(e) => console.log(e.target.value)} />
  );
}
