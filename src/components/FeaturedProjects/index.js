
import React, {useState} from "react";
import { Container, Row, Button, Card } from 'react-bootstrap';

function FeaturedProjects() {
  const [featured] = useState([
    {
      name: 'National Parks Search Engine',
      description: 'This project serves to provide access to the APIs provided by nps.gov.  There is still a little work I would like to do for this project.',
      tech: 'MERN, NoSQL, GraphQL, API, React, MangoDB, Express.js',
      gitub: 'https://github.com/kabradshaw1/National-Parks',
      deployed: 'https://evening-reaches-42082.herokuapp.com/',
      screenshot: 'National-Parks'
    },
    {
      name: 'Fitness Tracker',
      description: 'This project displays fitness measurements such as daily max heart rate on a bar graph.  It has an Express.js server that allows you to store the data in a MySQL database.  It also demonstrates MVC and ORM.',
      tech: 'ORM, MySQL, SQL, MVC, Restful API, Express.js',
      github: 'https://github.com/kabradshaw1/Fitness-Tracker',
      deployed: 'https://secure-gorge-89550.herokuapp.com/',
      screenshot: 'Fitness'
    },
    // {
    //   name: '',
    //   description: '',
    //   Tech: '',
    //   github: '',
    //   deployed: '',
    //   screenshot: ''
    // },
  ])
  return (
    <>
    
    <Container>
      <h2>Featured Projects</h2>
      <Row>
          {featured.map((project)=> (
            <Card className='card'>
              <Card.Img variant='top' src={require('../../assets/img/screen_shots/' + project.screenshot + '.PNG')} ></Card.Img>
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
    </>
  )
}

export default FeaturedProjects;