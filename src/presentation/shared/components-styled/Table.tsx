import styled from "styled-components";

export const TableStyled = styled.table`
  font-size: 16px;
  column-span: 0;
  column-width: 0;
  border-collapse:collapse;
  color:${(props) => props.theme.colors.secondary.base};
  width: 100%;
  tr:nth-child(even) {
    background-color:${(props) => props.theme.colors.secondary.w100};
  }
  td {
    padding: 24px;
  }
  td.inline {
    display: flex;
    align-items: center;
  }
  td.inline.icon > div{
    margin-right: 10px;
  }
  td.mini{
    width: 20px;
  }
`;
