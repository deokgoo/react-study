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

const Root = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/detail" component={VideoDetailPage} />
          <Redirect path="*" to="/" />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default Root;