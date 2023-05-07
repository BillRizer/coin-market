import styled from "styled-components";
import { device } from "../../../../../global/utils/device";

export const Container = styled.div`
  height: 112px;
  display: flex;
  /* background: #ffffff;
  display: flex;
  
*/
  @media screen and (${device.mobile}) {
    height: 142px;
    flex-direction: column;
  }
  .crypticon {
    margin-right: 8px;
  }
`;

export const Left = styled.div`
  max-width: 93px;
  display: grid;
  padding: 8px;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 20px 1fr 1fr;
  grid-template-areas: "t" "c" "a";
  @media screen and (${device.mobile}) {
    grid-template-rows: 20px 20px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "t t" "c a";
    max-width: 100%;
    height: auto;
  }
`;
export const LineCrypto = styled.div`
  display: flex;
  align-items: center;
  grid-area: c;

  @media screen and (${device.mobile}) {
    .crypticon {
      height: 16px;
    }
    .text-label {
      font-size: 12px;
    }
  }
`;
export const Title = styled.div`
  font-size: 12px;
  grid-area: t;
`;
export const Amount = styled.div`
  display: flex;
  align-items: center;
  grid-area: a;
  font-size: 14px;
`;

export const Right = styled.div<{ backgroundColor?: string }>`
  overflow: hidden;
  width: 100%;
  position: relative;
  & > div {
    position: absolute!important;
    right: -5px;
    top: 0;
  }
  @media screen and (${device.mobile}) {
    height: 100%;
    width: 100%;
  }
`;
