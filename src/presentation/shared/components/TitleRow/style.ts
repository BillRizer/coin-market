import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
