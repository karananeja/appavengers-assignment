import React from 'react';
import '../css/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <nav className='navbar__nav'>
        <ul className='navbar__ul'>
          <li className='navbar__li'>Connect</li>
          <li className='navbar__li'>View</li>
          <li className='navbar__li'>Help</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
