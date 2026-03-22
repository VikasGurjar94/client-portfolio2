import React from 'react';
import { Link } from 'react-router-dom';
import content from '../data/content.json';

const Header = () => {
  const styles = {
    header: {
      textAlign: 'center',
      padding: '40px 20px',
      marginBottom: '20px'
    },
    title: {
      fontSize: '1.75rem',
      fontWeight: '700',
      color: 'var(--primary-color)',
      textDecoration: 'none'
    }
  };

  return (
    <header style={styles.header}>
      <Link to="/" style={styles.title}>{content.siteTitle}</Link>
    </header>
  );
};

export default Header;
