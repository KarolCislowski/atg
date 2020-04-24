import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

export const Start = ({ start, index, game }) => (
  <Card>
    <Accordion.Toggle as={Button} variant="outline" eventKey={game + start + index} block>
      <Row>
        <Col>{start.number} {start.horse.name}</Col>
        <Col>{start.driver.firstName} {start.driver.lastName}</Col>
      </Row>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey={game + start + index}>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>Trainer: {start.horse.trainer.firstName} {start.horse.trainer.lastName}</ListGroup.Item>
          <ListGroup.Item>Father: {start.horse.pedigree.father.name}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
)