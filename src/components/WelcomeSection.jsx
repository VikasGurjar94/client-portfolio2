import React from 'react';
import { Link } from 'react-router-dom';
import content from '../data/content.json';

const  WelcomeSection = () => {
  const styles = {
    container: {
      marginBottom: '40px'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: '20px'
    },
    separator: {
      border: 0,
      borderTop: '1px solid var(--border-color)',
      margin: '0 auto 40px auto',
      width: '100%'
    },
    grid: {
      display: 'flex',
      flexDirection: 'row',
      gap: '40px',
      alignItems: 'flex-start',
    },
    leftColumn: {
      flex: '0 0 30%',
    },
    rightColumn: {
      flex: '0 0 70%',
    },
    image: {
      width: '100%',
      height: 'auto',
      display: 'block'
    },
    linkList: {
      listStyleType: 'disc',
      paddingLeft: '20px',
      marginBottom: '20px'
    },
    linkItem: {
      marginBottom: '10px'
    },
    cvContainer: {
      marginTop: '20px'
    },
    downloadBtn: {
      display: 'inline-block',
      backgroundColor: 'var(--btn-color)',
      color: '#fff',
      padding: '8px 16px',
      textDecoration: 'none',
      border: 'none',
      cursor: 'pointer',
      marginLeft: '15px',
      fontSize: '0.9rem',
      fontWeight: '600'
    }
  };
  
  // Use local profile image downloaded by the fetch script
  const profileImageUrl = "/hero.png";

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{content.welcomeTitle}</h1>
      <hr style={styles.separator} />
      
      <div style={styles.grid} className="welcome-grid">
        <div style={styles.leftColumn}>
          {/* Profile Image */}
          <img 
            src={profileImageUrl}
            alt="Aditi Kathpalia Profile" 
            style={styles.image} 
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src="https://via.placeholder.com/300x300.png?text=Profile";
            }}
          />
        </div>
        
        <div style={styles.rightColumn}>
          {content.introParagraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
          
          <ul style={styles.linkList}>
            {content.links.map((link, index) => (
              <li key={index} style={styles.linkItem}>
                {link.url.startsWith('/') ? (
                  <Link to={link.url}>{link.title}</Link>
                ) : (
                  <a href={link.url}>{link.title}</a>
                )}
              </li>
            ))}
          </ul>
          
          <div style={styles.cvContainer}>
            <a href={content.cv.url} style={{textDecoration: 'underline'}}>
              {content.cv.text}
            </a>
            <a href={content.cv.url} style={styles.downloadBtn}>
              {content.cv.buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
