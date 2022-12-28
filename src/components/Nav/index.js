import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {currentTab, handleTabChange} = props;

  captitalize(()=> {
    document.title = capitalizeFirstLetter(currentTab.name);
    },
    [currentTab]
  );

  return (
    <hav>
      
    </hav>
  )
};