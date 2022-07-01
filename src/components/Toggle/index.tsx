import React from "react";
import { Container, ToggleLabel, ToggleSelector } from "./styled";

const Toggle: React.FC = () => {
  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector
        checked
        onChange={() => {}}
        uncheckedIcon={false}
        checkedIcon={false}
      ></ToggleSelector>
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  );
};

export default Toggle;
