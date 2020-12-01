import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FeedPage from '../screens/FeedPage'
import LoginPage from '../screens/LoginPage'
import PostPage from '../screens/PostPage'
import SignUpPage from '../screens/SignUpPage'
import ErrorPage from '../screens/ErrorPage'

function Router() {

    return (

        <BrowserRouter>
            <Switch>
                <Route exact path={["/feed", "/"]}>
                    <FeedPage />
                </Route>

                <Route exact path="/login">
                    <LoginPage />
                </Route>

                <Route exact path="/signup">
                    <SignUpPage />
                </Route>

                <Route exact path="/post-details">
                    <PostPage />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>

    )
}

export default Router;