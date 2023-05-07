import styled, { css } from "styled-components";
import { device } from "../../../../global/utils/device";

const NotFound = css`
  min-height: 308px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div<{ size?: Array<string>; isEmpty: boolean }>`
  display: grid;
  grid-template-rows: 1fr;
  ${({ isEmpty }) => isEmpty && NotFound}
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
