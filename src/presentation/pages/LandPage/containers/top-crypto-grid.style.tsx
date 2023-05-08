import styled from "styled-components";
import { device } from "../../../../global/utils/device";

export const Content = styled.div`
  width: 100%;
  margin: 0 !important;
`;
export const Line = styled.div`
  @media screen and (${device.mobile}) {
    grid-template-columns: 1fr;
    grid-template-rows: 64px 35px 64px;

    & .text-label {
      font-size: 12px;
    }
  }
`;
export const ItemCrypto = styled.div`
  display: flex;
  align-items: center;
  @media screen and (${device.mobile}) {
    padding-left: 32px;
    padding-right: 32px;
    & .text-label {
      font-size: 12px;
    }
  }
`;
export const ItemPrice = styled.div`
  @media screen and (${device.mobile}) {
    display: flex;
    justify-content: space-between;
    padding: 0 32px;
  }
`;
export const ItemChange = styled.div`
  @media screen and (${device.mobile}) {
    display: flex;
    justify-content: space-between;
    padding: 0 32px;
    margin-bottom: 10px;
  }
`;
export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
