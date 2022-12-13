import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './LandingPage.js';
import LiveMarkets from './LiveMarkets.js';
import {Route, Routes} from 'react-router-dom';
import axios from 'axios';
import HorseLookup from './HorseLookup.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horses: [],
      queriedHorseData: [],
      queriedHorse: null
    };
  }
  
  handleHorseQueryInput = async (e) => {
    await this.setState({
      queriedHorse: parseInt(e.target.value)
    });
    console.log('queriedHorse State: ', this.state.queriedHorse);
  };

  getHorse = async() => {
    try {
      console.log(this.state.queriedHorse);
      let horseURL = `${process.env.REACT_APP_SERVER_URL}/horse?horse=${this.state.queriedHorse}`;
      let horseData = await axios.get(horseURL);
      console.log('horseData', horseData.data);
      this.setState({queriedHorseData: horseData.data});
    } catch(err) {
      console.log(err.message);
    }
  };
  handleHorseQuerySubmit = async (e) => {
    e.preventDefault();
    await this.getHorse(this.state.queriedHorse);
    console.log(this.state.horses);
  };

  render () {
    return (
      <>
        <Header/>
        <div className='all-content-container'>
          <Routes>
            <Route exact path="/" element={<LandingPage/>}/>
            <Route exact path="/markets" element={<LiveMarkets/>}/>
            <Route exact path="/horse" element={<HorseLookup handleHorseQuerySubmit={this.handleHorseQuerySubmit} horse={this.state.queriedHorseData} queriedHorse={this.state.queriedHorse} handleHorseQueryInput={this.handleHorseQueryInput}/>}/>
            <Route exact path="*" />
          </Routes>
          {/* {this.props.auth0.isAuthenticated ? <h1>Welcome Back!</h1> : <LandingPage/> } */}
        </div>
        <Footer/>
      </>
    );
  }
}

export default App;
