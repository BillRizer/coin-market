import styled, { css } from "styled-components";
import BannerBg from "../../../../assets/img/banner-bg-min.png";

export const BannerWrapper = styled.div`
  height: 750px;
  background-image: url(${BannerBg});
  background-repeat: no-repeat;
  background-position: bottom;
  margin-bottom: 100px;
  overflow: hidden;
  background-position-y: calc(100% - 24px);
`;
export const Image = styled.img`
  max-height: 499px;
  transition: "opacity 1s ease-in-out";
  margin-left: 47%;
`;
