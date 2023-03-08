// HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (  
    <div>
      <h1>Welcome to the Home Page!</h1>
      <Link to="/login"><button>Go to Login</button></Link>
    </div>
  );
};

export default HomePage;
