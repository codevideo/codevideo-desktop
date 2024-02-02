import {
  Box,
  Button,
  Text,
  Grid,
  TextArea,
  Flex,
  Code,
} from "@radix-ui/themes";
import * as React from "react";
import { useEffect } from "react";
import { StepsEditor } from "../../../components/utils/StepsEditor";

export interface IDashboardScreenProps {}

export interface IStep {
  name: string;
  value: string;
}

export function DashboardScreen(props: IDashboardScreenProps) {
  const [rawJson, setRawJson] = React.useState<string>("");
  const [parsedJson, setParsedJson] = React.useState<Array<IStep>>([]);

  useEffect(() => {
    try {
      const parsed = JSON.parse(rawJson) as Array<IStep>;
      setParsedJson(parsed);
    } catch (e) {
      console.error(e);
    }
  }, [rawJson]);

  return (
    <Grid columns="2">
      <Flex direction="column">
        <Button>Load Steps</Button>
        <Text>- or -</Text>
        <Text>Paste steps here:</Text>
        <TextArea
          value={rawJson}
          onChange={(e) => setRawJson(e.target.value)}
        />
        <Text>Ex.:</Text>
        <Code>
          <pre>
            {`[
    {
        "name": "speak-only",
        "value": "Today we're going to build a simple sum function in TypeScript."
    },
    {
        "name": "type",
        "value": "const sum = (a: number, b: number) => {\n  return a + b;\n};"
    },
    {
        "name": "speak-only",
        "value": "I'll just leave a comment here to signify this file is called 'sum.ts'"
    }
]`}
          </pre>
        </Code>
      </Flex>
      <Flex direction="column">
        <StepsEditor steps={parsedJson} />
        <Flex direction="row" gap="2">
          <Button>Create Audio...</Button>
          <Button>Check Audio...</Button>
          <Button>Make Video!</Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
