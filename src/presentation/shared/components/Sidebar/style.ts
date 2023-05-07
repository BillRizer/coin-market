import styled, { css } from "styled-components";
import { device } from "../../../../global/utils/device";

export const Container = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  & .content {
    flex: 2;
  }
`;
const MenuOpen = css`
  width: auto;
  transition:width 1s;
`;
export const Menu = styled.div<{ isOpen: boolean }>`
  width: 86px;
  background: ${(p) => `${p.theme.colors.white}`};
  height: 100vh;
  display: block;
  position: relative;
  ${({ isOpen }) => isOpen && MenuOpen}
  
  @media screen and (${device.tablet}) {
    display: none;
  }
`;

export const Item = styled.div<{ isOpen?: boolean }>`
  padding: 12px;
  align-items: center;
  justify-content: center;
  display: flex;
  & >div{
    margin-right: 16px;
  }
`;

export const ToogleIcon = styled.img<{ isOpen?: boolean }>`
  cursor: pointer;
  width: 32px;
  height: 32px;
  margin-left: -18px;
  transform: rotate(180deg)
  ${({ isOpen }) => isOpen && `transform: rotate(180deg)`}
`;
