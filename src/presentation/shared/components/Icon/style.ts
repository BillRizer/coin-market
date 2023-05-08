import styled from "styled-components";
interface Props{
    cursorPointer:boolean;
}
export const Icon = styled.div<Props>`
display: flex;
   
    /* &.small{
        width: 14px;
        height: 14px;
        font-size: 14px;
    }
    &.medium{
        width: 15px;
        height: 15px;
        font-size: 15px;
    }
    &.big{
        width: 24px;
        height: 24px;
        font-size: 32px;
    }
    &.large{
        width: 32px;
        height: 32px;
        font-size: 32px;
    } */
    ${(props) => props.cursorPointer ? `cursor:pointer;`:''}
    &.disabled {
    cursor: not-allowed!important;
    opacity: 0.8;
  }
`