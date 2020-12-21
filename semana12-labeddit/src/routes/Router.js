import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import DetailsFeedPage from "../screens/DetailsFeedPage/DetailsFeedPage";
import ErrorPage from "../screens/ErrorPage/ErrorPage";
import FeedPage from "../screens/FeedPage/FeedPage";
import LoginPage from "../screens/LoginPage/LoginPage";
import SignUpPage from "../screens/SignUpPage/SignUpPage";
import MainAppBar from "../components/MainAppBar/MainAppBar";

const Router = () => {
  return (
    <BrowserRouter>
      <MainAppBar />
      <Switch>
        <Route exact path={"/login"}>
          <LoginPage />
        </Route>
        <Route exact path={"/signup"}>
          <SignUpPage />
        </Route>
        <Route exact path={["/posts", "/"]}>
          <FeedPage />
        </Route>
        <Route exact path={"/posts/:postId"}>
          <DetailsFeedPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
