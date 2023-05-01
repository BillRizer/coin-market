import styled, { css } from "styled-components";
import { device } from "../../../../../global/utils/device";
export const Navigation = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 64px;
  width: 100%;
  background-color: ${(p)=>`${p.theme.colors.white}`};
  
`;
export const Brand = styled.div`
  text-decoration: none;
  color: black;
  font-size: 1.3rem;
  margin-left: 1rem;
  margin-right: 41px;
`;
export const Hamburger = styled.button`
  background-color: transparent;
  border: 0;
  height: 40px;
  width: 40px;
  padding: 0.5rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-50%);
  display: block;

  @media screen and (${device.tablet}) {
    display: none;
  }
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
    border-top: 1px solid ${(p)=>`${p.theme.colors.secondary.w200}`} ;
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
    display: none;
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
  @media screen and (${device.tablet}) {
    & ul {
      display: flex;
    }
  }
`;
export const Item = styled.div`
  display: none;
  align-items: center;
  @media screen and (${device.tablet}) {
    display: flex;
  }
`;
