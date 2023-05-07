import styled from "styled-components";
import { device } from "../../../global/utils/device";

export const GroupTiles = styled.div`
  &.horizontal {
    width: 1300px;
    zoom: 0.7;
  }
  flex-wrap: wrap;
  display: flex;
  justify-content: flex-start;
  row-gap: 32px;
  column-gap: 32px;
  & .reverse {
    width: auto;
  }
  @media screen and (${device.tablet}) {
    display: flex;
    width: 100%;

    & .reverse {
      flex-wrap: wrap;
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }
  }
`;
export const MyWalletContainer = styled.div`
  padding: 24px;
  @media screen and (${device.mobile}) {
    box-shadow: none!important;
    background: transparent!important;
  }
`;
export const Content = styled.div`
  & > div:empty {
    min-height: 414px;
  }
  @media screen and (${device.mobile}) {
    min-height: 100px;
  }
`;
export const ItemCrypto = styled.div`
  display: flex;
  align-items: center;
  @media screen and (${device.mobile}) {
  }
`;
export const ItemHolding = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > div {
    margin: 0;
  }
  @media screen and (${device.mobile}) {
  }
`;
export const ItemChange = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
`;
export const Actions = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
