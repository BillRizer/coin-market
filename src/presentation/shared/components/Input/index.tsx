import React from "react";
import * as Styled from "./style";
import { IconComponent } from "../Icon";
interface Props {
  label: string;
  id: string;
  type: string;
  value: string;
  onChange: any;
  error?: string;
  placeholder?: string;
  Icon?: any;
}
export const InputComponent = ({
  label,
  id,
  type,
  value,
  onChange,
  placeholder,
  error,
  Icon,
}: Props) => {
  const errorMessage = '';
  return (
    <Styled.InputContainer>
      {/* <Styled.Label htmlFor={id}>{label}</Styled.Label> */}
      {Icon && (
        <div className="icon">
          <IconComponent Icon={Icon} size="small" />
        </div>
      )}
      <Styled.InputElement
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        haveIcon={!!Icon}
      />
      {errorMessage && (
        <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
      )}
    </Styled.InputContainer>
  );
};
