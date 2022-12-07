import React from 'react';
import {Form, Button} from 'react-bootstrap';
// import {Button} from 'react-bootstrap';

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
      </>
    );
  }
}

export default HorseLookup;
