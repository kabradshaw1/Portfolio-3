import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import { Nav, Navbar, Container } from 'react-bootstrap';



function HeaderNav(props) {
  const {currentTab, handleTabChange} = props;

  useEffect(()=> {
    document.title = capitalizeFirstLetter(currentTab.name);
    },
    [currentTab]
  );

  return (
   <Nav defaultActiveKey='/home' as='ul'>
    <Nav.Item>
      <Nav.Link onClick={()=> handleTabChange('About')}>About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link onClick={()=> handleTabChange('Projects')}>Projects</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link onClick={()=> handleTabChange('Contact')}>Contact</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link onClick={()=> handleTabChange('Resume')}>Résumé</Nav.Link>
    </Nav.Item>
   </Nav>
   
  )
};

export default HeaderNav;