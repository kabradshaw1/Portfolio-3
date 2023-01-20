import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer className='bg-primary'>
      <h2>Made by Kyle Bradshaw</h2>
      <p>
        <ul>
          <a href="https://github.com/kabradshaw1">
            <li >
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/kyle-bradshaw-15950988/">
            <li >
              <AiOutlineLinkedin />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;