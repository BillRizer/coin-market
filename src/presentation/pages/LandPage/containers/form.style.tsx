import styled from "styled-components";
import BannerBg from "../../../../assets/img/form-footer-bg.png";
import { device } from "../../../../global/utils/device";

export const Bg = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.w400};
  background-image: url(${BannerBg});
  background: linear-gradient(
    97.85deg,
    ${({ theme }) => theme.colors.primary.base} -5.87%,
    ${({ theme }) => theme.colors.primary.w700} 118.06%
  );
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 100px 32px;
  column-gap: 18%;
  position: relative;
  * {
    color: ${({ theme }) => theme.colors.white};
  }
  @media screen and (${device.tablet}) {
    column-gap: 0px;
    padding: 60px 0;
  }
  @media screen and (${device.mobile}) {
    grid-template-columns: 1fr;
    padding-left: 24px;
    padding-right: 24px;
  }
`;
export const Left = styled.div`
  .text-label {
    color: ${({ theme }) => theme.colors.white};
  }
`;
export const Right = styled.div`
  input {
    color: ${({ theme }) => theme.colors.textBase};
  }
`;
export const Error = styled.div`
  width: 100%;
  font-size: 14px;
  text-align: center;
  padding: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
`;
