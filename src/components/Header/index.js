import React from "react";
import HeaderNav from "../Nav";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <>
      <section>
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
      </section>
    </> 
  )
}
export default Header;