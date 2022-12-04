import React from 'react';
import {Card, Accordion} from 'react-bootstrap';
import '../css/Horse.css';
//Remove JSON and replace with pulls from state via API calls
import horses from '../data/horseDB.json';

class Horse extends React.Component {
  render() {
    //Add code to render Card component dynamically based on user input
    let horseCards = horses.map((horse, i) => (
      <Card key={i}>
        <Card.Img variant='top' src={horse.img_url}/>
        <Card.Body>
          <Card.Title>{horse.name}</Card.Title>
          <Card.Subtitle>{`${horse.gen} ${horse.bloodline} ${horse.breed_type.charAt(0).toUpperCase()}${horse.breed_type.slice(1)}`}</Card.Subtitle>
          <Card.Text>Win: {horse.race_statistic.win_rate}%</Card.Text>
          <Card.Text>Place: {(((horse.race_statistic.second_place_finishes + horse.race_statistic.first_place_finishes) / horse.race_statistic.number_of_races)*100).toFixed(2)}%</Card.Text>
          <Card.Text>Show: {(((horse.race_statistic.third_place_finishes + horse.race_statistic.first_place_finishes + horse.race_statistic.second_place_finishes) / horse.race_statistic.number_of_races)*100).toFixed(2)}%</Card.Text>
          <Card.Text>Total Races: {horse.race_statistic.number_of_races}</Card.Text>
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
    ));

    return(
      <>
        <div className='display-area'>
          {horseCards}
        </div>
      </>
    );
  }
}

export default Horse;
