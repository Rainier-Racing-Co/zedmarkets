import React from 'react';
import '../css/Footer.css';

class Footer extends React.Component {
  render() {
    return(
      <>
        <footer>{`© 2022 Rainier Racing Co., LLC ${String.fromCharCode(183)} All rights reserved.`}</footer>
      </>
    );
  }
}

export default Footer;
