import React, { useState } from "react";
import * as Styled from "./style";

interface Props {
  onChange?: any;
  checked?: boolean;
  children?: string;
}

export const CheckboxComponent = ({
  onChange,
  checked ,
  children,
  ...props
}: Props) => {
  return (
    <Styled.Container>
      <Styled.CheckboxSimbol >
        <input type="checkbox" defaultChecked={checked} onChange={onChange} />
      </Styled.CheckboxSimbol>
      <Styled.Text >{children}</Styled.Text>
    </Styled.Container>
  );
};
