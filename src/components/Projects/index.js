import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import FeaturedProjects from '../FeaturedProjects'
import DeployedPorjects from '../DeployedProjects'
import OtherProjects from '../OtherProjects'

function Projects() {


  return (
    <>
    <Container fluid>
      <FeaturedProjects/>
      <DeployedPorjects/>
      <OtherProjects/>
    </Container>
    </>
  )
}

export default Projects