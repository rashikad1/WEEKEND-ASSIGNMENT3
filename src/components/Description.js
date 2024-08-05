import React from 'react';
import '../css/Description.css';


const Description = ({product,navigateTo}) => {
  return (
    <div className="description-container">
      <div className="header">
        <h1>B.planet</h1>
        <div className="contact-us" onClick={() => navigateTo('profile')}>
          <button>Contact us</button>
        </div>
      </div>
      <div className="description-content">
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} />
        <div className="care-guide">
          <h3>Plant Care Guide</h3>
          <p><strong>Water:</strong> {product.water}</p>
          <p><strong>Light:</strong> {product.light}</p>
          <p><strong>Tips:</strong> {product.tips}</p>
        </div>
        <div className="description-text">
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>
        <button onClick={() => navigateTo('home')}>Back to Home</button>
      </div>
    </div>
  );
};

export default Description;
