import React from 'react';
import { Nav } from 'react-bootstrap';
import '../css/NavBar.css';
import { NavLink, Route, Routes} from 'react-router-dom';
import LiveMarkets from './LiveMarkets.js';
// import LandingPage from './LandingPage';
// import App from './App';

class NavBar extends React.Component {
  render() {
    return(
      <>
        <Nav activeKey="/" as="ul">
          <Nav.Item>
            <NavLink to="/">Home</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/markets">Live Markets</NavLink>
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
        <Routes>
          <Route exact path="/markets" element={<LiveMarkets/>}/>
          <Route exact path="*" />
        </Routes>
      </>
    );
  }
}

export default NavBar;
