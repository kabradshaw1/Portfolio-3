
import React, {useState} from "react";
import { Container, Row, Button, Card } from 'react-bootstrap';
import National from '../../assets/img/screen_shots/National-Parks.PNG'
import Fitness from '../../assets/img/screen_shots/Fitness.PNG'

function FeaturedProjects() {
  const [featured] = useState([
    {
      name: 'National Parks Search Engine',
      description: 'This project serves to provide access to the APIs provided by nps.gov.  There is still a little work I would like to do for this project.',
      tech: 'MERN, NoSQL, GraphQL, API, React, MangoDB, Express.js',
      gitub: 'https://github.com/kabradshaw1/National-Parks',
      deployed: 'https://evening-reaches-42082.herokuapp.com/',
      screenshot: 'National'
    },
    {
      name: 'Fitness Tracker',
      description: 'This project displays fitness measurements such as daily max heart rate on a bar graph.  It has an Express.js server that allows you to store the data in a MySQL database.  It also demonstrates MVC and ORM.',
      Tech: 'ORM, MySQL, SQL, MVC, Restful API, Express.js',
      github: 'https://github.com/kabradshaw1/Fitness-Tracker',
      deployed: 'https://secure-gorge-89550.herokuapp.com/',
      screenshot: 'Fitness'
    },
    {
      name: '',
      description: '',
      Tech: '',
      github: '',
      deployed: '',
      screenshot: ''
    },
  ])
  return (
    <>
    
    <Container>
      <h2>Featured Projects</h2>
      <Row>
          {featured.map((project)=> (
            <Card className='card'>
              <Card.Img variant='top' src={project.screenshot} ></Card.Img>
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>
                  {project.description}
                </Card.Text>
                <Button variant='primary' href='https://evening-reaches-42082.herokuapp.com/'>Deployed Site</Button>
                <Button variant='primary' href='https://github.com/kabradshaw1/National-Parks'>GitHub Repository</Button>        
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