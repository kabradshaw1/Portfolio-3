import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Nav(props) {
  const {currentTab, handleTabChange} = props;

  useEffect(()=> {
    document.title = capitalizeFirstLetter(currentTab.name);
    },
    [currentTab]
  );

  return (
    <div></div>
  )
};

export default Nav;