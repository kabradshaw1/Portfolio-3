import React from "react";
import { Container } from 'react-bootstrap'
import FeaturedProjects from '../FeaturedProjects'
import DeployedPorjects from '../DeployedProjects'

function Projects() {


  return (
    <>
    <Container fluid>
      <FeaturedProjects/>
      <DeployedPorjects/>
    </Container>
    </>
  )
}

export default Projects