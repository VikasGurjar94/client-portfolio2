import React from 'react';
import subpagesData from '../data/subpages.json';

const Publications = () => {
  return (
    <div style={{ marginBottom: '40px' }}>
      <hr style={{ margin: '0 auto 40px auto', borderTop: '1px solid var(--border-color)' }} />
      <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{subpagesData.publications.title}</h2>
      
      <ol style={{ paddingLeft: '20px', marginTop: '20px', listStyleType: 'decimal' }}>
        {subpagesData.publications.items.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default Publications;
