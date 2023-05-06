import styled from "styled-components";
import { device } from "../../../../../global/utils/device";
import { mediaQ } from "../../../../../global/utils/_media-query";
import { convertPxToRem } from "../../../../../global/utils/parse";

export const Container = styled.div`
  height: 112px;
  display: flex;
  overflow: hidden;
  border-radius: 8px;
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
  max-width: 50%;
  width: 100%;
  display: grid;
  padding: 16px;
  height: 100%;
  grid-template:
        "t" 1fr
        "d" 1fr
        "l" 1fr / 1fr;
  grid-template-areas: "t" "d" "l";
  
  @media screen and (${device.mobile}) {
    grid-template-rows: 18px 30px 1fr ;
    padding: 8px;
    grid-template-columns: 1fr;
    grid-template-areas: "t" "d";
    max-width: 100%;
    height: auto;
  }
`;

export const Title = styled.div`
  font-size: 14px;
  
  grid-area: t;
  @media screen and (${device.mobile}) {
    font-size: 12px;
  }
`;
export const Description = styled.div`
  display: flex;
  align-items: center;
  grid-area: d;
  font-size: 12px !important;
  line-height: 14px !important;
`;

export const Link = styled.div`
  grid-area: l;
  align-self: end;
  font-size: 12px;
`;

export const Right = styled.div<{
  backgroundImage?: string;
  backgroundColor?: string;
}>`
  background-image: url(${(p) => (p.backgroundImage ? p.backgroundImage : "")});
  background-color: ${(p) => (p.backgroundColor ? p.backgroundColor : "")};
  width: 100%;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: contain;
  @media screen and (${device.mobile}) {
    height: 100%;
    width: 100%;
  }
`;
