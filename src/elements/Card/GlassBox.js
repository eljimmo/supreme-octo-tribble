import React from 'react';
import './GlassBox.css'; // Import the CSS file for styling

const GlassBox = ({ children }) => {
  return (
    <div className="glass-box">
      {children}
    </div>
  );
};

export default GlassBox;
