import * as React from "react";
import { Flex, Text, Button, Code, Heading, Card } from "@radix-ui/themes";
import { CommandInstalledWidget } from "../../../components/utils/CommandInstalledWidget";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScreenConstants } from "../../../constants/ScreenConstants";

export interface IWelcomeScreenProps {}

export function WelcomeScreen(props: IWelcomeScreenProps) {
  const [successCount, setSuccessCount] = useState(0);
  const [isAnyError, setIsAnyError] = useState(false);
  const navigate = useNavigate();

  const renderStartButton = () => {
    if (isAnyError) {
      return (
        <Button disabled>
          Please ensure you have <Code>ffmpeg</Code> and <Code>puppeteer</Code>{" "}
          installed.
        </Button>
      );
    }
    if (successCount === 2) {
      return <Button onClick={() => navigate(ScreenConstants.DASHBOARD)}>Get started!</Button>;
    }
    return <Button disabled>Checking Requirements...</Button>;
  };

  return (
    <Flex direction="column" justify="center" align="center" gap="2">
      <Card>
        <Flex direction="column" gap="2">
          <Flex direction="column" justify="center" align="center" gap="2">
        <Heading size="9">CodeVideo</Heading>
        <Heading size="7" align="center">
          Revolutionizing the way educators create educational videos.
        </Heading>
        </Flex>
        <Text>Checking requirements...</Text>
        <CommandInstalledWidget
          command="ffmpeg"
          onIsInstalled={() => setSuccessCount(successCount + 1)}
          onIsError={() => setIsAnyError(true)}
          delay={2000}
        />
        <CommandInstalledWidget
          command="puppeteer"
          onIsInstalled={() => setSuccessCount(successCount + 1)}
          onIsError={() => setIsAnyError(true)}
          delay={4000}
        />
        {renderStartButton()}
        </Flex>
      </Card>
    </Flex>
  );
}
