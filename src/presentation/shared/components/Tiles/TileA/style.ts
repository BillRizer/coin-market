import styled from "styled-components";
import { device } from "../../../../../global/utils/device";
import { mediaQ } from "../../../../../global/utils/media-query";
import { convertPxToRem } from "../../../../../global/utils/parse";

export const Container = styled.div`
  background: #ffffff;
  display: flex;
  height: 112px;
  @media screen and (${device.tablet}) {
    max-height: 64px;
  }
  @media screen and (${device.mobile}) {
    max-height: 48px;
  }
 
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Right = styled.div<{ backgroundColor?: string }>`
  display: flex;
  flex: 1;
  background-color: ${(p) =>
    p.backgroundColor ? p.backgroundColor : p.theme.colors.primary.w100};
  align-items: center;
  justify-content: center;
  @media screen and (${device.tablet}) {
    h3 {
      font-size: ${convertPxToRem(24)};
    }
  }
  @media screen and (${device.mobile}) {
    h3 {
      font-size: ${convertPxToRem(16)};
    }
  }
`;

export const Thumb = styled.div<{ backgroundColor?: string }>`
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 100%;
  background-color: ${(p) =>
    p.backgroundColor ? p.backgroundColor : p.theme.colors.primary.w100};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 16px 0 24px;
  @media screen and (${device.tablet}) {
    width: 48px;
    height: 48px;
  }
  @media screen and (${device.mobile}) {
    width: 32px;
    height: 32px;
    margin: 8px 8px 8px 16px;
  }
  
  @media screen and (${device.laptop}) {
  background-color: blue;
  }
  @media screen and (${device.tablet}) {
  background-color: green;
  }
  @media screen and (${device.mobile}) {
  background-color: red;
  }
  
 
  img {
    width: 50%;
    height: 50%;
  }
`;
