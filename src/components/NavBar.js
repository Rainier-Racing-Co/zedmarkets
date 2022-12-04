import React from 'react';
import { Nav } from 'react-bootstrap';
import navItems from '../data/nav.json';
import '../css/NavBar.css';

class NavBar extends React.Component {
  render() {
    let navbar = navItems.map((item, idx) => (
      <a key={idx} href={item.url}>{item.display_name}</a>
    ));

    return(
      <>
        <Nav activeKey="/" as="ul">
          {navbar}
        </Nav>
      </>
    );
  }
}

export default NavBar;
