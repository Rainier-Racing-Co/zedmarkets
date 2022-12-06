import React from 'react';
// import {Form, Button} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class HorseLookup extends React.Component {
  render(){
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
      </>
    );
  }
}

export default HorseLookup;
