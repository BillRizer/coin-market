import styled from "styled-components";
import { device } from "../../../../global/utils/device";

export const Container = styled.div<{ size?: Array<string> }>`
  display: grid;
  grid-template-rows: 1fr;
  @media screen and (${device.mobile}) {
    box-shadow: none;
    grid-template-columns: 1fr 1fr;
    column-gap: 16px;
    row-gap: 16px;
  }

  & > div {
    display: grid;
    grid-template-columns: ${({ size }) => size && size.join(" ")};
    &:nth-child(even) {
      background-color: ${(props) => props.theme.colors.secondary.w100};
    }

    @media screen and (${device.mobile}) {
      grid-template-columns: 1fr;
      
      box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 16px;
      border-radius: 8px;
      background-color: ${(props) => props.theme.colors.white}!important;
    }
  }
`;
