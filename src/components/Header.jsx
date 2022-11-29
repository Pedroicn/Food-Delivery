import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  return (
    <header>
      <div>
        <GiHamburgerMenu size={30} />
      </div>
      <h1>
        Food Delivery
      </h1>
    </header>
  )
}

export default Header;
