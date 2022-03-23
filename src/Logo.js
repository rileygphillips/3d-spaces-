import React from 'react';
import logo from './3dSpacesLogo.png'; // Tell webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" width={350} height={250}/>;
}

export default Header;