import styled, { css } from "styled-components";
import { device } from "../../../../global/utils/device";

const NotFound = css`
  min-height: 308px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
interface ContainerProps {
  size?: Array<string>;
  isEmpty: boolean;
  mobileCols: string;
}
export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-rows: 1fr;

  ${({ isEmpty }) => isEmpty && NotFound}
  @media screen and (${device.mobile}) {
    box-shadow: none;
    grid-template-columns: ${({ mobileCols }) => mobileCols};
    column-gap: 16px;
    row-gap: 16px;
    padding: 0 16px;
  }

  & > div {
    padding: 0 16px;
    display: grid;
    grid-template-columns: ${({ size }) => size && size.join(" ")};
    &:nth-child(even) {
      background-color: #fbfbfb;
    }

    @media screen and (${device.mobile}) {
      grid-template-columns: 1fr;
      padding: 0;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 16px;
      border-radius: 8px;
      background-color: ${(props) => props.theme.colors.white}!important;
    }
  }
`;
export const Header = styled.div`
  div {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }
  @media screen and (${device.mobile}) {
    div {
      display: none;
    }
  }
`;
