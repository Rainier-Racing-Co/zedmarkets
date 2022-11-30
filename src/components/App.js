import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import '../css/App.css';

class App extends React.Component {
  render () {
    return (
      <>
        <Header/>
        <Footer/>
      </>
    );
  }
};

export default App;
