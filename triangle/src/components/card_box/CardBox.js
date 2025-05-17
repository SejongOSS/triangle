import React from 'react';
import './CardBox.css';

const CardBox = ({ logo, alt, onClick }) => (
  <div className="card-box" onClick={onClick}>
    <img src={logo} alt={alt} />
  </div>
);

export default CardBox;
