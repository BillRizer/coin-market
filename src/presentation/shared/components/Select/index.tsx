import React, { ReactElement } from "react";
import * as Styled from "./style";
import { IconComponent } from "../Icon";
interface Props {
  label: string;
  id: string;
  value: string;
  defaultValue?: string;
  onChange: any;
  error?: string;
  Icon?: any;
  options: Array<{ label: string; value: string|number; icon?: ReactElement }>;
}
export const SelectComponent = ({
  label,
  id,
  options,
  value,
  onChange,
}: Props) => {
  return (
    <Styled.SelectContainer>
      <Styled.Label htmlFor={id}>{label}</Styled.Label>
      <Styled.StyledSelect
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Styled.StyledSelect>
    </Styled.SelectContainer>
  );
};
