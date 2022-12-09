import React from 'react';
import {Form, Button, Card} from 'react-bootstrap';

class HorseLookup extends React.Component {
  openHawkuLink = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  render(){

    return(
      <>
        <div className="horse-test">
          <Form onSubmit={this.props.handleHorseQuerySubmit}>
            <Form.Label>Enter Horse ID</Form.Label>
            <Form.Control name="horseID" type="number" placeholder='Enter Horse ID' onChange={this.props.handleHorseQueryInput}/>
            <Button type="submit">Get Horse</Button>
          </Form>
        </div>
        <div id="queriedHorseDiv">
          {this.props.horse.nft_id === this.props.queriedHorse && 
            <Card key={this.props.horse.nft_id}>
              <Card.Img variant='top' src={this.props.horse.img_url}/>
              <Card.Body>
                <Card.Title>{this.props.horse.name}</Card.Title>
                <Card.Subtitle>{`${this.props.horse.gen} ${this.props.horse.bloodline} ${this.props.horse.breed_type.charAt(0).toUpperCase() + this.props.horse.breed_type.slice(1)}`}</Card.Subtitle>
                <Card.Text>Win: {this.props.horse.race_statistic.win_rate}%</Card.Text>
                <Card.Text>Place: {(((this.props.horse.race_statistic.second_place_finishes + this.props.horse.race_statistic.first_place_finishes) / this.props.horse.race_statistic.number_of_races)*100).toFixed(2)}%</Card.Text>
                <Card.Text>Show: {(((this.props.horse.race_statistic.third_place_finishes + this.props.horse.race_statistic.first_place_finishes + this.props.horse.race_statistic.second_place_finishes) / this.props.horse.race_statistic.number_of_races)*100).toFixed(2)}%</Card.Text>
                <Card.Text>Total Races: {this.props.horse.race_statistic.number_of_races}</Card.Text>
                <Card.Text>Estimated Market Value</Card.Text>
                <Button id='buyOnHawku' onClick={() => this.openHawkuLink(`https://www.hawku.com/details/zed_run/zed_horse/${this.props.horse.nft_id}?ref=rainier`)}>Buy on Hawku</Button>
              </Card.Body>
            </Card>
          }
        </div>
      </>
    );
  }
}

export default HorseLookup;
