import React, { useState } from "react";
import { Container, Row, Button, Card } from 'react-bootstrap';

function DeployedPorjects() {
  const [deployed] = useState([
    {
      name: 'Deep Thoughts',
      description: 'This is a social media site.',
      gitub: 'https://github.com/kabradshaw1/deep-thoughts',
      tech: 'This site uses MERN and GraphQL',
      deployed: 'https://gentle-shore-15053.herokuapp.com/'
    },
    {
      name: 'Photo Port',
      description: 'This project is a portfolio for photographs.',
      gitub: 'https://github.com/kabradshaw1/photo-port',
      tech: 'This site uses React',
      deployed: 'https://kabradshaw1.github.io/photo-port/'
    },
    {
      name: 'Just Tech News',
      description: 'This is a blog site.  This project uses an express server and MySQL database and demonstrates MVC and ORM.',
      gitub: 'https://github.com/kabradshaw1/just-tech-news',
      tech: 'ORM, MySQL, SQL, MVC, Restful API, Express.js',
      deployed: 'https://still-ocean-01779.herokuapp.com/'
    },
    {
      name: 'Book Search Engine',
      description: 'This app uses the Google Books API.',
      gitub: 'https://github.com/kabradshaw1/Book-Search-Engine',
      tech: 'This site uses the MERN stack and GraphQL',
      deployed: 'https://quiet-chamber-36592.herokuapp.com/'
    },
    
  ])
  return (
    <Container fluid>
      <h2>Deployed Projects</h2>
      <p>These projects include tutorials were most of the code was provided with an explanation of how it all worked.  Some of these projects were challenges where I wrote the majority of the code.  I spent a lot of time with all of these projects.  I still have plenty of projects left that I need to deploy here.</p>
      <Row xs={1} md={4}>
        {deployed.map((project)=> (
          <Card className='m-1 bg-secondary'>
            <Card.Body>
                <Card.Title><h3>{project.name}</h3></Card.Title>
                <Card.Text>
                  <Card.Subtitle>
                    Discription
                  </Card.Subtitle>
                  <Card.Text>{project.description}</Card.Text>
                  <Card.Subtitle>Technologies and Concepts</Card.Subtitle>
                  <Card.Text>{project.tech}</Card.Text>
                </Card.Text>
                <Button variant='primary' className='me-1' href={project.deployed}>Deployed Site</Button>
                <Button variant='primary' href={project.github}>GitHub Repository</Button>        
              </Card.Body>
          </Card>
        ))}
      </Row>  
  </Container>
  )
}

export default DeployedPorjects;