import React from 'react';
import { Nav } from 'react-bootstrap';
import '../css/NavBar.css';

class NavBar extends React.Component {
  render() {
    return(
      <>
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
  }
}

export default NavBar;
