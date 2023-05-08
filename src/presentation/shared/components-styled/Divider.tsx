import styled from "styled-components";

export const DividerStyled = styled.div<{
  marginTop?: string;
  marginBottom?: string;
}>`
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary.w200};
  ${({ marginTop }) => `margin-top:  ${marginTop}`};
  ${({ marginBottom }) => `margin-bottom:  ${marginBottom}`};
`;
