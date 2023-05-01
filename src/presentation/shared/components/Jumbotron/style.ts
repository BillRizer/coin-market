import styled from "styled-components";

export const Container = styled.div`
  margin-left: 26px;
`;
export const Legend = styled.div`
  font-weight: bold;
  color: ${(p) => `${p.theme.colors.primary.base}`};
  font-size: ${(p) => `${p.theme.fonts.p.size}`};
`;
export const Title = styled.div`
  font-weight: bold;
  color: ${(p) => `${p.theme.colors.textBase}`};
  font-size: ${(p) => `${p.theme.fonts.h4.size}`};
`;
export const Text = styled.div`
  font-weight: normal;
  color: ${(p) => `${p.theme.colors.textBase}`};
  font-size: ${(p) => `${p.theme.fonts.label.size}`};
  letter-spacing: ${(p) => `${p.theme.fonts.label.LetterSpacing}`};
`;
