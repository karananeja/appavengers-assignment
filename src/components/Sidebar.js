import React from 'react';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import StarIcon from '@mui/icons-material/Star';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import '../css/Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__category sidebar__icon'>
        <FlashOnIcon />
        New Connection
      </div>
      <div className='sidebar__line'></div>
      <div className='sidebar__category'>
        <StarIcon />
        Favorites
      </div>
      <div className='sidebar__line'></div>
      <div className='sidebar__category'>
        <RotateLeftIcon />
        Recents
      </div>
    </div>
  );
}

export default Sidebar;
