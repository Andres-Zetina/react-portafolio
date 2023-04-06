import React from 'react';


export default function Footer() {
  return (
    <footer className="footer">
      <style type='text/css'>{footerCss}</style>
    <a href="https://www.linkedin.com/in/andres-zetina-350662261/">LinkedIn</a>
    <a href="https://github.com/Andres-Zetina">GitHub</a>
  </footer>
  );
}

const footerCss = ` .footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.2);
}

.footer a {
  text-decoration: none;
  font-size: 18px;
}

.footer a:hover {
}`