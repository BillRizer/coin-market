import styled, { css } from "styled-components";
import { theme } from "../../../../global/styles/theme-base";

interface Props {
  color: string;
  size: string;
}

const primaryColorStyle = css`
  background-color: ${theme.colors.primary.base};
  color: ${theme.colors.white};
  &:hover {
    background-color: ${theme.colors.primary.w400};
  }
`;
const secondaryColorStyle = css`
  background-color: ${theme.colors.secondary.base};
  color: ${theme.colors.white};
  &:hover {
    background-color: ${theme.colors.secondary.w400};
  }
`;
const tertiaryColorStyle = css`
  background-color: ${theme.colors.tertiary.w700};
  color: ${theme.colors.white};
  &:hover {
    background-color: ${theme.colors.tertiary.w600};
  }
`;
const buttonColorStyles = css<Props>`
  ${({ color }) => {
    switch (color) {
      case "primary":
        return primaryColorStyle;
      case "tertiary":
        return tertiaryColorStyle;
      case "secondary":
        return secondaryColorStyle;
      default:
        return ``;
    }
  }}
`;

const buttonSizeStyles = css<Props>`
  ${({ size }) =>
    size === "small"
      ? `
      padding: 7px 16px;
      `
      : size === "medium"
      ? `
      font-size: 17px;
      padding: 10px 24px;
      `
      : `
      font-size: 24px;
      padding: 10px 24px;
    `}
  font-size: 16px;
  border-radius: 100px;
`;
export const Button = styled.button`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: normal;
  outline: none;
  transition: background-color 0.3s ease;

  ${buttonColorStyles}
  ${buttonSizeStyles}

  display: flex;
  align-items: center;
  justify-content: center;
  .icon {
    margin-right: 8px;
  }
`;

