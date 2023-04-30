import styled from "styled-components";


export const Close = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  color: ${(props) => props.theme.colors.textBase};
`;

export const Screen = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
`;

export const Modal = styled.div`
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  z-index: 99;
  padding: 32px;
  border-radius: 4px;
  position: relative;
  max-width: calc(448px - 64px);
  width: 100%;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.textBase};
  opacity: 0.9;
`;
