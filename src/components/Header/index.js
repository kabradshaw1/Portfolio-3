import React from "react";
import HeaderNav from "../Nav";
import { Container, Col } from 'react-bootstrap'
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
    <Container className='jumbotron text-light bg-dark'>
      <h1>Kyle's Portfolio</h1>
      <HeaderNav
          currentTab={currentTab}
          handleTabChange={handleTabChange}
      />
    </Container>
    </>
  )
}
export default Header;