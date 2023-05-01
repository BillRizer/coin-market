import styled from "styled-components";
import { device } from "../../../global/utils/device";

export const GroupTiles = styled.div`
  &.horizontal{
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
