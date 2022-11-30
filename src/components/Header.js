import React from 'react';
import { Image } from 'react-bootstrap';
import hawkuImg from '../assets/img/Hawku.png';
import rrc from '../assets/img/RR Logo.png';
import '../css/Header.css';
import NavBar from './NavBar.js';


class Header extends React.Component {
  render() {
    return(
      <>
        <header>
          <h1>ZEDMarkets.io</h1>
          <div id='banner-div'>
            <div id='rrc-div'>
              <h3>Brought to you by Rainier Racing Co.</h3>
              <Image src={rrc} alt="Rainier Racing Co." thumbnail='true' />
            </div>
            <div id='hawku-div'>
              <h3>Data powered by Hawku</h3>
              <Image src={hawkuImg} alt="Hawku Logo" thumbnail="true"/>
            </div>
          </div>
        </header>
        <NavBar/>
      </>
    );
  }
}

export default Header;
