import React, { ReactElement, useState } from "react";
import * as Styled from "./style";

interface Props {
  onChange?: any;
  checked?: boolean;
  children?:any;
}

export const CheckboxComponent = ({
  onChange,
  checked,
  children,
  ...props
}: Props) => {
  return (
    <Styled.Container>
      <Styled.CheckboxSimbol>
        <input type="checkbox" defaultChecked={false} onChange={onChange} />
      </Styled.CheckboxSimbol>
      <Styled.Text>{children}</Styled.Text>
    </Styled.Container>
  );
};
