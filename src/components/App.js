import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './LandingPage.js';
import LiveMarkets from './LiveMarkets.js';
import {Route, Routes} from 'react-router-dom';


class App extends React.Component {
  render () {
    return (
      <>
        <Header/>
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route exact path="/markets" element={<LiveMarkets/>}/>
          <Route exact path="*" />
        </Routes>
        {/* {this.props.auth0.isAuthenticated ? <h1>Welcome Back!</h1> : <LandingPage/> } */}
        <Footer/>
      </>
    );
  }
}

export default App;
