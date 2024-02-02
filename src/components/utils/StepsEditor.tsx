import * as React from "react";
import { IStep } from "../../renderer/screens/DashboardScreen/DashboardScreen";
import { Table } from "@radix-ui/themes";
import { NameBadgeRenderer } from "./NameBadgeRenderer";
import { ValueRenderer } from "./ValueRenderer";

export interface IStepsEditorProps {
  steps: Array<IStep>;
}

export function StepsEditor(props: IStepsEditorProps) {
  const { steps } = props;
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Action Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Action Value</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {steps.map((step, index) => (
          <Table.Row key={index}>
            <Table.RowHeaderCell>
                <NameBadgeRenderer name={step.name} />
                </Table.RowHeaderCell>
            <Table.Cell>
                <ValueRenderer value={step.value} />
                </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
