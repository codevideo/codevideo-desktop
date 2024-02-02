import * as React from 'react';
import { useEffect } from 'react';
import { useCheckIfCommandInstalledOnSystem } from '../../hooks/useCheckIfCommandInstalledOnSystem';
import { Code, Text } from "@radix-ui/themes";

export interface ICommandInstalledWidgetProps {
    command: string;
    onIsInstalled: () => void;
    onIsError: () => void;
    delay: number;
}

export function CommandInstalledWidget (props: ICommandInstalledWidgetProps) {
    const { command, onIsInstalled, onIsError, delay } = props;
    const { isLoading, isInstalled, isError } = useCheckIfCommandInstalledOnSystem(command, delay);

    useEffect(() => {
        if (isInstalled) {
            onIsInstalled();
        }
    }, [isInstalled]);

    useEffect(() => {
        if (isError) {
            onIsError();
        }
    }, [isError]);

    if (isLoading) {
        return (
            <Text>ℹ️ Checking if <Code>{command}</Code> is installed...</Text>
        )
    }
    if (isError) {
        return (
            <Text>❌ There was an error checking if <Code>{command}</Code> is installed!</Text>
        )
    }
    if (isInstalled) {
        return (
            <Text>✅ <Code>{command}</Code> is installed</Text>
        )
    }
    return (
        <Text>❌<Code>{command}</Code> is not installed</Text>
    )
}
