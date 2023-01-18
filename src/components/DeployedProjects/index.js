import React, { useState } from "react";
import { Container, Row, Button, Card } from 'react-bootstrap';

function DeployedPorjects() {
  const [deployed] = useState([
    {
      name: 'Deep Thoughts',
      description: 'This is a social media site. This site uses MERN stack.',
      gitub: 'https://github.com/kabradshaw1/deep-thoughts',
      tech: '',
      deployed: 'https://gentle-shore-15053.herokuapp.com/'
    },
    {
      name: 'Photo Port',
      description: 'This project is a portfolio for photographs.  This project has a React frontend only.',
      gitub: 'https://github.com/kabradshaw1/photo-port',
      tech: '',
      deployed: 'https://kabradshaw1.github.io/photo-port/'
    },
    {
      name: 'Just Tech News',
      description: 'This is a blog site.  This project uses an express server and MySQL database and demonstrates MVC and ORM.',
      gitub: 'https://github.com/kabradshaw1/just-tech-news',
      tech: '',
      deployed: 'https://still-ocean-01779.herokuapp.com/'
    },
    
  ])
  return (
    <Container>
    <h2>Deployed Projects</h2>
    <Row>
        {deployed.map((project)=> (
          <Card className='card'>
            <Card.Body>
              <Card.Title><h3>{project.name}</h3></Card.Title>
              <Card.Text>
                <h4>Discription</h4> <br/>
                {project.description} <br/>
                <h4>Technologies and Concepts</h4> <br/>
                {project.tech}
              </Card.Text>
              <Button variant='primary' href={project.deployed}>Deployed Site</Button>
              <Button variant='primary' href={project.github}>GitHub Repository</Button>        
            </Card.Body>
          </Card>
        )
       )}
    </Row>  
  </Container>
  )
}

export default DeployedPorjects;