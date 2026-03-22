import React from 'react';
import subpagesData from '../data/subpages.json';

const PreviousAffiliations = () => {
  return (
    <div style={{ marginBottom: '40px' }}>
      <hr style={{ margin: '0 auto 40px auto', borderTop: '1px solid var(--border-color)' }} />
      <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{subpagesData.affiliations.title}</h2>
      
      <div style={{ paddingLeft: '0', marginTop: '20px' }}>
        {subpagesData.affiliations.items.map((item, index) => (
          <p key={index} style={{ marginBottom: '15px' }}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default PreviousAffiliations;
