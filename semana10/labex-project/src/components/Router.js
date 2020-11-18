import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from '../screens/HomePage'
import ApplicationFormPage from '../screens/ApplicationFormPage'
import ListTripsPage from '../screens/ListTripsPage'
import LoginPage from '../screens/LoginPage'
import Header from './Header';
import Footer from './Footer';
import SignUpPage from '../screens/SignUpPage'
import AddNewTrip from '../screens/AddNewTrip';
import TripDetailsPage from '../screens/TripDetailsPage';

function Router() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
            <HomePage />
            <Footer />            
          </Route>

          <Route exact path="/application-form">
            <Header />
            <ApplicationFormPage />
            <Footer />
          </Route>

          <Route exact path="/list">
            <Header />
            <ListTripsPage />
            <Footer />
          </Route>

          <Route exact path="/login">
            <Header />
            <LoginPage />
            <Footer />
          </Route>

          <Route exact path="/signup">
            <Header />
            <SignUpPage />
            <Footer />
          </Route>

          <Route exact path="/add-trip">
            <Header />
            <AddNewTrip />
            <Footer />
          </Route>

          <Route exact path="/trip-details">
            <Header />
            <TripDetailsPage />
            <Footer />
          </Route>
          
        </Switch>
      </BrowserRouter>
    );
  }
  
  export default Router;