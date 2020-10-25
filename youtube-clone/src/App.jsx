import React from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";

const App = (props) => (
  <div id="app">
    <Header></Header>
    <LandingPage></LandingPage>
    <Footer></Footer>
  </div>
);

export default App;
