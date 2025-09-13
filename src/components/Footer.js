import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>© {currentYear} Diogo Bertoncini. Desenvolvido com React.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
