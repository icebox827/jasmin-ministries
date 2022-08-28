import React from 'react';

function Footer() {
  return (
    <footer>
      <span className="copyright">
        &copy;
        {` ${(new Date()).getFullYear()} All rights reserved | Built with love by ` }
        <a href="https://denislafontant.com" target="_blank" rel="noopener noreferrer">Denis Lafontant</a>
      </span>
    </footer>
  );
}

export default Footer;
