import React, { Component } from 'react';
import { Card, CardDeck, ListGroup, ListGroupItem } from 'react-bootstrap';

export default class Container extends React.Component {
  render() {
    return (
      <CardDeck>
        <Card border="info" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
             Card text test
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Card footer test price</small>
          </Card.Footer>
        </Card>
        
      </CardDeck>
    );
  }
}