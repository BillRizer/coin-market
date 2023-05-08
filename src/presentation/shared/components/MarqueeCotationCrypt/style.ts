import styled, { css, keyframes } from "styled-components";

const move = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const Container = styled.div`
  font-size: ${(p) => p.theme.fonts.smallLabel.size};
  letter-spacing: ${(p) => p.theme.fonts.smallLabel.LetterSpacing};

  padding: 5px;
  overflow: hidden;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  height: 16px;

  &.full {
    border-top: 1px solid ${(p) => p.theme.colors.secondary.w200};
    box-shadow: rgba(77, 77, 77, 0.1) 0px 4px 8px;
    padding: 3px;
  }
  &.compact {
    width: 400px;
  }
`;
export const Text = styled.div`
  color: ${(p) => `${p.theme.colors.textBase}`};
  display: inline-block;
  white-space: nowrap;
  animation: ${move} 15s linear infinite;
  display: flex;
`;
export const Item = styled.div`
  margin-right: 10px;
  display: flex;
  & > div {
    margin-left: 5px;
  }
`;
