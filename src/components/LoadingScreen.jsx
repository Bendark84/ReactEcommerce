import React from 'react';
import { Spinner } from 'react-bootstrap';
import '../styles/loadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="overlay">
      <Spinner animation="border" variant="success" />
    </div>
  );
};

export default LoadingScreen;
