import React from 'react';
import socialLogos from '../images/Group 34.svg';

function Footer() {
  return (
    <div id='footer'>
      <div>
        <h1>Lynn Hardin</h1>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Podcast</a></li>
        </ul>
        <ul>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Newsletter</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <img src={socialLogos} />
      </div>
    </div>
  );
}

export default Footer;
