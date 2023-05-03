import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 152px;
`;
export const ImageWrap = styled.div`
  width: 32px;
  height: 32px;
  overflow: hidden;
  border-radius: 100%;
  margin-right: 10px;
  & img {
    width: 100%;
  }
`;
export const Text = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 110px;
  height: 1.2em;
  white-space: nowrap;
`;
