import React from "react";
import { EuiButton, EuiFlexGroup, EuiFlexItem } from "@elastic/eui";

export class Stack extends React.Component {
  render() {
    return (
      <div>
        <EuiFlexGroup gutterSize="s" alignItems="center">
          <EuiFlexItem grow={false}>
            <EuiButton color="warning">Secondary</EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    );
  }
}
