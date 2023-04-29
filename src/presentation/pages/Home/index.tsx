import React from "react";
import { ButtonComponent } from "../../shared/components/Button";
import iconSun from "../../../assets/icons/icon-sun.svg";
import { FaPlus } from 'react-icons/fa';

export const HomePage = () => {

  return (
    <div>
      <ButtonComponent color="tertiary" Icon={FaPlus} size="small">
        Buy
      </ButtonComponent>
      <br></br>
      <br></br>
      <ButtonComponent color="primary" Icon={iconSun} size="medium">
        Add Crypto
      </ButtonComponent>
      <br></br>
      <br></br>
      <ButtonComponent color="primary" size="small">
        Add crypto
      </ButtonComponent>
    </div>
  );
};
