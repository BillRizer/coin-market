import styled, { css } from "styled-components";
import { device } from "../../../../global/utils/device";
export const Navigation = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 64px;
  width: 100%;
  background-color: ${(p) => `${p.theme.colors.white}`};
  justify-content: space-between;
`;
export const Brand = styled.div`
  text-decoration: none;
  color: black;
  
  margin-right: 41px;
  &.is-logged {
    flex: 1;
  }
  &.center {
    align-items: center;
    justify-content: center;
    display: flex;
  }
`;
export const Hamburger = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  display: block;
`;
export const MenuVertical = css`
  & ul {
    flex-direction: column;
    position: absolute;
    top: 87px;
    height: calc(100vh - 60px);
    display: none;
    right: 0;
    background: #fff;
    border: none;
    padding: 24px;
    z-index: 9;
    min-width: 50%;
    border-top: 1px solid ${(p) => `${p.theme.colors.secondary.w200}`};
    flex: 4;
  }

  & li {
    text-align: center;
    margin: 0;
  }

  & li a {
    color: black;
    width: 100%;
    padding: 1.5rem 0;
  }

  & li:hover {
    background-color: #eee;
  }

  &.expanded ul {
    display: block;
  }
`;
export const Menu = styled.div`
  margin-right: auto;

  & ul {
    display: flex;
    padding: 0;
    margin: 0;
  }
  & li {
    list-style: none;
    margin-right: 24px;
  }
  & li a {
    text-decoration: none;
    color: ${(p) => `${p.theme.colors.textBase}`};
  }
  &.expanded ul {
    display: block;
  }
  &.expanded {
    ${`${MenuVertical}`}
  }
`;
export const Item = styled.div`
  display: flex;
  align-items: center;
`;
export const Line = styled.div`
  display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
`;
