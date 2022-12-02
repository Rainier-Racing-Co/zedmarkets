import React from 'react';
import {Card, Accordion} from 'react-bootstrap';
//Remove image after testing
import Midnightmane from '../assets/img/Midnightmane.png';
import '../css/Horse.css';

class Horse extends React.Component {
  render() {
    //Add code to render Card component dynamically based on user input
    return(
      <>
        <div className='display-area'>
          <Card>
            <Card.Img variant='top' src={Midnightmane}/>
            <Card.Body>
              <Card.Title>Midnightmane</Card.Title>
              <Card.Subtitle>Z10 Buterin Genesis</Card.Subtitle>
              <Card.Text>Win%</Card.Text>
              <Card.Text>Place%</Card.Text>
              <Card.Text>Show%</Card.Text>
              <Card.Text>Total Races</Card.Text>
              <Card.Text>Estimated Market Value</Card.Text>
              <Accordion>
                <Accordion.Item className="races-by-distance">
                  <Accordion.Header>Similar Horses Sold</Accordion.Header>
                </Accordion.Item>
                <Accordion.Body>
                  <img className='placement-distribution' src="https://via.placeholder.com/100x100?text=Horse+Image+&+Sale+Price"/>
                </Accordion.Body>
              </Accordion>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}

export default Horse;
