import React from 'react';
import './styles.css';
import Navbar from '../../components/Navbar';



function Overlay() {
  return (
    <>
          <div className="overlay">
            {/* Your overlay content */}
            <div className="overlay-content">
              {/* Add your content here */}
              <p>This is an overlay!</p>
              {/* <Navbar/> */}
            </div>
          </div>
    </>
  );
}

export default Overlay;
