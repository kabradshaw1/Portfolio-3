import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

function Footer() {
  return (
    <footer className='bg-primary' >
      <Container fluid >
        <Row className="align-items-center">
          <Col>
          <h2>Made by Kyle Bradshaw</h2>
          </Col>
          <Col>
            <p>
              <ul>
                <Row className='display-3'>
                  <Col >
                    <a  href="https://github.com/kabradshaw1">
                      <li className='text-dark'>
                        <VscGithubAlt />
                      </li>
                    </a>
                  </Col>
                  <Col>
                    <a  href="https://www.linkedin.com/in/kyle-bradshaw-15950988/">
                      <li className='text-dark'>
                        <AiOutlineLinkedin />
                      </li>
                    </a>
                  </Col>
                </Row>
              </ul>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;