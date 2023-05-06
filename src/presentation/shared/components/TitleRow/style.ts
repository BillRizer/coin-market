import styled from "styled-components";
import { device } from "../../../../global/utils/device";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid ${(p) => p.theme.colors.secondary.w200};
  padding-bottom: 22px;
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media screen and (${device.mobile}) {
    border-bottom: none;
    padding-bottom: 16px;
  }
  h4 {
    margin: 0 0 0 16px;
  }
`;
