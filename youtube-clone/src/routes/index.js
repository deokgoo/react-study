import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import VideoDetailPage from '../pages/VideoDetailPage';
import Header from '../components/header';
import LoginPage from "../pages/LoginPage";
import CallBack from "../pages/CallBack";

const Root = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/detail" component={VideoDetailPage} />
          <Route path="/signin-callback" render={() => (
            <CallBack><h1>Test Something</h1></CallBack>
          )} />
          <Redirect path="*" to="/" />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default Root;