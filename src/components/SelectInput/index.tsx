import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";

import { Container } from "./styles";

interface ISelectInputProps {
  options: {
    label: string | number;
    value: string | number;
  }[];
  OnChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
  defaultValue?: string | number;
}

const SelectInput: React.FC<ISelectInputProps> = ({
  options,
  OnChange,
  defaultValue,
}) => {
  return (
    <Container>
      <select onChange={OnChange} defaultValue={defaultValue}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
};
export default SelectInput;
