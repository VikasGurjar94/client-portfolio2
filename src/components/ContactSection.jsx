import React from 'react';
import content from '../data/content.json';

const ContactSection = () => {
  const styles = {
    container: {
      marginTop: '60px'
    },
    title: {
      fontSize: '2rem',
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: '40px'
    },
    separator: {
      border: 0,
      borderTop: '1px solid var(--border-color)',
      margin: '0 auto 40px auto',
      width: '100%'
    },
    info: {
      marginBottom: '20px'
    }
  };

  return (
    <div style={styles.container}>
      <hr style={styles.separator} />
      <h2 style={styles.title}>{content.contact.title}</h2>
      
      <p style={styles.info}>{content.contact.address}</p>
      <p style={styles.info}>{content.contact.email}</p>
      <p style={styles.info}>
        LinkedIn: <a href={content.contact.linkedin.url}>{content.contact.linkedin.text}</a>
      </p>
    </div>
  );
};

export default ContactSection;
