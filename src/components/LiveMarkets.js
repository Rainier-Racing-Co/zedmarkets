import React from 'react';
import '../css/LiveMarkets.css';
import Horse from './Horse.js';

class LiveMarkets extends React.Component {
  render() {
    return(
      <>
        <div className="markets-headline">
          <h1 id="markets-title">Live Markets Page</h1>
        </div>
        <button onClick={this.props.handleMarketQuery}>Get Market Data</button>
        <div className='chart'>
          <img src="https://via.placeholder.com/600x400?text=Chart+of+Market+Data" className="price-chart"/>
        </div>
        <Horse/>
      </>
    );
  }
}

export default LiveMarkets;
