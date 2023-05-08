import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 180px;
  position: relative;
`;
export const ImageWrap = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.textBase};
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
  cursor: pointer;
  margin-right: 10px!important;
`;
export const Icon = styled.img`
  &.open {
    transform: rotate(180deg);
  }
`;
export const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  top: 55px;
  background: #fff;
  padding-right: 24px;
  padding-left: 24px;
  z-index: 999;
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 16px;
  border-radius: 8px;

  &::before {
    content: "";
    position: absolute;
    width: 0px;
    height: 0px;
    top: -19px;
    right: 15px;
    border-bottom: 10px solid #fff;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-top: 10px solid transparent;
  }
`;
export const DropdownMenuItem = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  & img {
    margin-right: 16px;
  }
`;
