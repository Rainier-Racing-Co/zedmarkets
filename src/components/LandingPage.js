import React from 'react';
import '../css/LandingPage.css';
import { Image, Button } from 'react-bootstrap';
import welcome from '../assets/img/Welcome.png';

class LandingPage extends React.Component {
  render() {
    return(
      <>
        <div id="welcome-div">
          <Image src={welcome} alt="welcome" id="welcomeImg"/>
        </div>
        <div id="login-div">
          <Button id="login-button" variant="primary">Login</Button>
        </div>
      </>
    );
  }
}

export default LandingPage;
