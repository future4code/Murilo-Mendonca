//Material UI imports
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

export const AppBarStyled = styled.div`
  background-color: #f8f9fa;
`;

export const ButtonStyled = styled(Button)`
  color: #f8f9fa;
  background-color: #343a40;
  padding: 10px;
  border-radius: 10px;
  outline: none;

  &:hover {
    background-color: #f8f9fa;
    color: #212529;
  }
`;

export const ToolBarStyled = styled(ToolBar)`
  display: flex;
  justify-content: space-around;
`;
