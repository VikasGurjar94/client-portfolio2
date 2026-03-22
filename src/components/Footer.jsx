import React from 'react';
import content from '../data/content.json';

const Footer = () => {
  const styles = {
    footer: {
      marginTop: '80px',
      padding: '20px 0',
      fontSize: '14px',
      color: 'var(--secondary-color)'
    },
    link: {
      color: 'var(--secondary-color)',
      textDecoration: 'none'
    }
  };

  return (
    <footer style={styles.footer}>
      <strong>{content.footer.text1}</strong>
      <a href="https://wordpress.com" style={styles.link}>{content.footer.text2}</a>
    </footer>
  );
};

export default Footer;
