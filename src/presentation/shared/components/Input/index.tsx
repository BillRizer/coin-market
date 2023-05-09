import React, { InputHTMLAttributes } from "react";
import * as S from "./style";
import { IconComponent } from "../Icon";
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;

  value: string;
  onChange: any;
  error?: string;
  placeholder?: string;
  Icon?: any;
}
export const InputComponent = ({
  label,
  id,

  value,
  onChange,
  placeholder,
  error,
  Icon,
  ...rest
}: Props) => {
  const errorMessage = "";
  return (
    <S.InputContainer>
      {label && <S.Label htmlFor={id}>{label}</S.Label>}
      {/* <Styled.Label htmlFor={id}>{label}</Styled.Label> */}
      {Icon && (
        <S.Icon>
          <IconComponent Icon={Icon} size="16px" />
        </S.Icon>
      )}
      <S.InputElement
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        haveIcon={!!Icon}
        {...rest}
      />
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.InputContainer>
  );
};
