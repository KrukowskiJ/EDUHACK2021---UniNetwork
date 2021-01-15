import React from 'react';
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div className='container'>
      <h1>temp menu</h1>
      <Link to='projects'>Projects</Link> {" "}
      <Link to='matches'>matches</Link> {" "}
      <Link to='profile'>profile</Link> {" "}
    </div>
  );
}

