import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
`;

export const StyledSelect = styled.select`
  padding: 14px;
  border: 1px solid ${(props) => props.theme.colors.secondary.w300};
  border-radius: 4px;
  font-size: 16px;
  color: ${(props) => props.theme.colors.textBase};
  background: ${(props) => props.theme.colors.white};
  font-weight: normal;
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.secondary.base};
    transition: border-color 1s;
  }
`;
