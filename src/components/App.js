import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import '../css/App.css';
import LandingPage from './LandingPage.js';

class App extends React.Component {
  render () {
    return (
      <>
        <Header/>
        <LandingPage/>
        <Footer/>
      </>
    );
  }
}

export default App;
