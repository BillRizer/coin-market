import styled from "styled-components";

export const SpaceStyled = styled.div<{
  size?: string;
}>`
  height: ${({ size }) => size};
  width: 100%;
`;
