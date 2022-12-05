import React from 'react';
import '../css/LiveMarkets.css';
import Horse from './Horse.js';
import {Button} from 'react-bootstrap';

class LiveMarkets extends React.Component {
  render() {
    return(
      <>
        <div className="horse-test">
          {/* <Form onSubmit={this.props.getHorse}>
            <Form.Label>Enter Horse ID</Form.Label>
            <Form.Control name="horseID" type="number" placeholder='Enter Horse ID'/>
            <Button type="submit">Get Horse</Button>
          </Form> */}
          <Button onClick={this.props.getHorse}>Get Horse</Button>
        </div>
        <div className="markets-headline">
          <h1 id="markets-title">Live Markets Page</h1>
        </div>
        <div className='chart'>
          <img src="https://via.placeholder.com/600x400?text=Chart+of+Market+Data" className="price-chart"/>
        </div>
        <Horse/>
      </>
    );
  }
}

export default LiveMarkets;
