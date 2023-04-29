import React, { useState } from "react";

interface Props {
  labelOn: string;
  labelOff: string;
  onClick?: () => void;
}

export const CheckboxWithLabel = ({ labelOn, labelOff, ...props }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  const onChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      {isChecked ? labelOn : labelOff}
    </label>
  );
};
