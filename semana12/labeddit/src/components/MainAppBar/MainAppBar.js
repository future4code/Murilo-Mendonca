import React from "react";
import { goToFeedPage, goToLoginPage } from "../../routes/Coordinator";
import { useHistory } from "react-router-dom";

import {
  AppBarStyled,
  ButtonStyled,
  ToolBarStyled,
} from "../MainAppBar/styles.js";

import { Route } from "react-router-dom";

const MainAppBar = () => {
  const history = useHistory();

  const handleLogout = () => {
    const token = localStorage.getItem("token");

    if (token) {
      localStorage.removeItem("token");
    }

    goToLoginPage(history);
  };

  return (
    <AppBarStyled>
      <ToolBarStyled>
        <ButtonStyled onClick={() => goToFeedPage(history)}>
          Labeddit
        </ButtonStyled>

        <Route exact path={"/login"}>
          <ButtonStyled onClick={() => goToLoginPage(history)}>
            LOGIN
          </ButtonStyled>
        </Route>
        <Route exact path={["/", "/posts", "/posts/:id"]}>
          <ButtonStyled onClick={handleLogout}>LOGOUT</ButtonStyled>
        </Route>
      </ToolBarStyled>
    </AppBarStyled>
  );
};

export default MainAppBar;
