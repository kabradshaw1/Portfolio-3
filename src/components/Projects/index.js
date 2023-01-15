
import React from "react";
import { Container, Button, Card } from 'react-bootstrap';
import National from '../../assets/img/screen_shots/National-Parks.PNG'

function Projects() {
  return (
    <Container>
      <h2>Work</h2>
        {/* final group project */}
        <Card>
          <Card.img variant='top' src={National}></Card.img>
          <Card.Body>
            <Card.Title>National Park Search</Card.Title>
            <Card.Text>
              This project serves to provide access to the APIs provided by nps.gov.  There is still a little work I would like to do for this project.
            </Card.Text>
            <Button variant='primary' href='https://evening-reaches-42082.herokuapp.com/'>Deployed Site</Button>
            <Button variant='primary' href='https://github.com/kabradshaw1/National-Parks'>GitHub Repository</Button>        
          </Card.Body>
        </Card>
    
    </Container>  
  )
}

export default Projects;