import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer className='bg-primary'>
      <h2>Made by Kyle Bradshaw</h2>
      <p>
        <ul className='Row'>
          <a className='Col' href="https://github.com/kabradshaw1">
            <li className='text-dark'>
              <VscGithubAlt />
            </li>
          </a>
          <a className='Col' href="https://www.linkedin.com/in/kyle-bradshaw-15950988/">
            <li className='text-dark'>
              <AiOutlineLinkedin />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;