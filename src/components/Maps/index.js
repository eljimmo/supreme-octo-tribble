import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from '@iconify/react';
import homeIcon from '@iconify-icons/mdi-light/home'; // Correct icon import
import './style.css';
const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, California.',
  lat: 37.42216,
  lng: -122.08427,
};

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={homeIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

const Map = () => {
  return (
    <div className="google-map">
              <h2 className="map-h2">Current Shipment Movement</h2>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyB0y9dT1T3Lrx3lr7e2sylM5eE0wYjtGo4' }}
        defaultCenter={location}
        defaultZoom={17}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;