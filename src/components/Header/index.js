import React from "react";
import HeaderNav from "../Nav";
import { Container, Col, Row } from 'react-bootstrap'
{/* <section>
        <header className="">
          <div>
            <h1>Kyle's Portfolio</h1>
          </div>
          <div>
            <HeaderNav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></HeaderNav>
          </div>
        </header>
      </section>
      <section className="">
        <h2>Welcome</h2>
        <p>
          This portfolio is still under construction.  I hope to have it finished by January 20, 2023.
        </p>
      </section> */}
function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <>
      <Container fluid>
        <Row className='text-light bg-dark'>
          <Col xs={6} lg='5'>
            <h1>Kyle's Portfolio</h1>
          </Col>
          <Col xs={6}>
            <HeaderNav className='' currentTab={currentTab} handleTabChange={handleTabChange}/>
          </Col>
        </Row>
      </Container>
    
      <Container fluid>
        <h2>Welcome</h2>
        <p>I'm currently learning more about Bootstrap, so this application is currently a work in progress.  Please check back soon if you are here, and it doesn't look finished.</p>
      </Container>
    </>
  )
}
export default Header;