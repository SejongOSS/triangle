import React from 'react';

const CardBox = ({ logo, alt, onClick }) => (
  <div
    style={{
      width: 200,
      height: 200,
      background: '#222',
      borderRadius: 12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
      margin: '0 16px'
    }}
    onClick={onClick}
  >
    <img src={logo} alt={alt} style={{ maxWidth: 100, maxHeight: 100 }} />
  </div>
);

export default CardBox;
