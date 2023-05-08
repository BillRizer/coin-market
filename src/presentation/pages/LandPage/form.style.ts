import styled from "styled-components";
import { device } from "../../../global/utils/device";
import BannerBg from "../../../assets/img/form-footer-bg.png";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary.w400};
  background-image: url(${BannerBg});
  padding: 120px 10%;
  color: ${({ theme }) => theme.colors.white};
`;
export const Left = styled.div``;
export const Right = styled.div``;
