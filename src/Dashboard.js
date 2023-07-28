import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <center>
        <h3>This is Dashboard</h3>
        <Link to = '/'>Home</Link>{'   '}
        <Link to = '/about'>About</Link>

      </center>
    </div>
  )
}

export default Dashboard
