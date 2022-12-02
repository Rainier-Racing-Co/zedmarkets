import React from 'react';
import { Nav } from 'react-bootstrap';
import '../css/NavBar.css';
import { NavLink } from 'react-router-dom';

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
      </>
    );
  }
}

export default NavBar;
