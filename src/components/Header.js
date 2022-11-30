import React from 'react';
import { Nav, Image } from 'react-bootstrap';
import hawkuImg from '../assets/img/Hawku.png';
// import banner from '../assets/img/Rainier Racing Splash Page.png';
import rrc from '../assets/img/RR Logo.png';
import '../css/Header.css';


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
        <Nav activeKey="/home" as="ul">
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/markets">Live Markets</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://rainierracingco.com">Rainier Racing Co.</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://www.hawku.com/c/zed_run/zed_horse?selected_mode=list&selected_tab=listings">Hawku</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://zed.run">ZED Run</Nav.Link>
          </Nav.Item>
        </Nav>
      </>
    );
  };
};

export default Header;
