import styled from "styled-components";
import { themeBase } from "../../../../global/styles/theme-base";


export const Container = styled.div`
  display: flex;
`;

export const Text = styled.div`
  margin-top: 3px;
`;
export const CheckboxSimbol = styled.div`
  input[type="checkbox"] {
    -moz-appearance: none;
    -webkit-appearance: none;
    -o-appearance: none;
    outline: none;
    content: none;
    cursor: pointer;
  }

  input[type="checkbox"]:before {
    content: "\f00c";
    color: transparent !important;
    display: block;
    width: 15px;
    height: 15px;
    border: 1px solid ${themeBase.colors.primary.base};
    border-radius: 3px;
    margin-right: 10px;
  }

  input[type="checkbox"]:checked:before {
    background: ${themeBase.colors.primary.w400} !important;
  }
`;
