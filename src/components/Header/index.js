import React from "react";
import HeaderNav from "../Nav";
import { Container, Col, Row } from 'react-bootstrap'
function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <>
      <Container fluid>
        <Row  className='text-light bg-dark align-items-center'>
          <Col >
            <h1>Kyle's Portfolio</h1>
          </Col>
          <Col >
            <HeaderNav currentTab={currentTab} handleTabChange={handleTabChange} />
          </Col>
        </Row>
      </Container>
    
      <Container fluid >
        <h2>Welcome</h2>
        <p>I hope to return to this portfolio soon to further decorate</p>
      </Container>
    </>
  )
}
export default Header;