import React from 'react';
import subpagesData from '../data/subpages.json';

const Research = () => {
  return (
    <div style={{ marginBottom: '40px' }}>
      <hr style={{ margin: '0 auto 40px auto', borderTop: '1px solid var(--border-color)' }} />
      <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{subpagesData.research.title}</h2>
      
      <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', marginTop: '30px' }}>Current Projects</h3>
      <div style={{ paddingLeft: '0', marginBottom: '20px' }}>
        {subpagesData.research.currentProjects.map((p, i) => (
          <p key={i} style={{ marginBottom: '15px' }}>{p}</p>
        ))}
      </div>

      <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', marginTop: '30px' }}>Past Projects/ Thesis</h3>
      <div style={{ paddingLeft: '0' }}>
        {subpagesData.research.pastProjects.map((p, i) => (
          <p key={i} style={{ marginBottom: '15px' }}>{p}</p>
        ))}
      </div>
    </div>
  );
};

export default Research;
