import React from 'react';
import {Form, Button, Card} from 'react-bootstrap';

class HorseLookup extends React.Component {
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
                <Card.Subtitle>{`${this.props.horse.gen} ${this.props.horse.bloodline} `}</Card.Subtitle>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          }
        </div>
      </>
    );
  }
}

export default HorseLookup;
