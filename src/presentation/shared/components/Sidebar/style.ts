import styled from "styled-components";
import { mediaQ } from "../../../../global/utils/media-query";

export const Container = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  & .content {
    flex: 2;
  }
`;
export const Menu = styled.div`
  width: 86px;
  background: ${(p) => `${p.theme.colors.white}`};
  height: 100vh;
  display: none;

  /* @media screen and (${mediaQ("tablet","laptop")}) {
    display: block;
  } */
`;
export const Item = styled.div`
  padding: 12px;
  align-items: center;
  justify-content: center;
  display: flex;
`;
