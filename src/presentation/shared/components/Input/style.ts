import styled from "styled-components";
interface PropsInputElement {
  haveIcon: boolean;
}

export const Icon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 41px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  &  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: ${(props) => props.theme.colors.secondary.w300};
  }
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  position: relative;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color:${(props) => props.theme.colors.secondary.base}
`;

export const InputElement = styled.input<PropsInputElement>`
  padding: 14px;
  border: 1px solid ${(props) => props.theme.colors.secondary.w300};
  border-radius: 4px;
  font-size: 16px;
  color: ${(props) => props.theme.colors.textBase};
  font-weight: normal;
  ${({ haveIcon }) => haveIcon && `padding-left:41px;`}
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.secondary.base};
    transition: border-color 1s;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.textBase};
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;
