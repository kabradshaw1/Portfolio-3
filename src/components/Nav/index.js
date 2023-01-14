import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import { Container, Nav, Navbar, NavDropdown } from react-bootstrap

function Nav(props) {
  const {currentTab, handleTabChange} = props;

  captitalize(()=> {
    document.title = capitalizeFirstLetter(currentTab.name);
    },
    [currentTab]
  );

  return (
    <Navbar bg ='light' expand='lg'>
      
    </Navbar>
  )
};

export default Nav;