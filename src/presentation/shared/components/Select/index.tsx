import React, {
  HTMLAttributes,
  ReactElement,
  SelectHTMLAttributes,
} from "react";
import * as Styled from "./style";
import { IconComponent } from "../Icon";
interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  id: string;
  value: string;
  defaultValue?: string;
  onChange: any;
  error?: string;
  placeholder?: string;
  Icon?: any;
  options: Array<{
    label: string;
    value: string | number;
    icon?: string;
  }>;
}
export const SelectComponent = ({
  label,
  id,
  options,
  value,
  placeholder,
  onChange,
  ...rest
}: Props) => {
  return (
    <Styled.SelectContainer>
      {label && <Styled.Label htmlFor={id}>{label}</Styled.Label>}
      <Styled.StyledSelect
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...rest}
      >
        {placeholder && <option hidden>{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.icon && <img src={option.icon} alt={option.label} />}
            {option.label}
          </option>
        ))}
      </Styled.StyledSelect>
    </Styled.SelectContainer>
  );
};
