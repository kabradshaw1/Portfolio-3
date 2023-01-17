import React from "react";
import profileImage from "../../assets/img/profile/profile.jpg";
import { Container, Card } from 'react-bootstrap'

function About() {
  return (
    <Container id='about-me'>
      <Card className='card'>
        <Card.Img variant='top' src={profileImage}/>
        <Card.Text>
          Hello, my name is Kyle. I'm a full stack web developer. I'm currently seeking my first full time position 
          as a web developer.   I recently completed a six month coding bootcamp at UNC learning a verity of front
          and back end technologies.  I've also worked as an engineer for power and communications, working with 
          electrical and structural engineering.  Please take a look at my resume if you would like to learn more.
        </Card.Text>
      </Card>
    </Container>
  );
}

export default About;