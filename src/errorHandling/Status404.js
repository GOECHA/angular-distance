import React from 'react';
import Status from './Status';
import './Status404.css';
// import logo from '../images/nymin-logo.png';
import { Link } from 'react-router-dom';
import jupiter from '../assets/hd2-jupiter.png'

const Status404 = () => {
    return (
      <Status code={404}>
        <div className='error-wrapper'>
          <div className="st404-title">
          <h2 >404</h2>
          </div>
          <div className='st404logo-wrapper'>
          <Link to="/" >
           <img className="stat-4040-logo" src={jupiter} alt='Not Found logo'/>
          </Link>
          </div>
          <div className="st404title-2">
          <h2>The planets are </h2>
          </div>
          <div className="st404title-3">
          <h2>out of line</h2>
          </div>
          <div className="st404title-4">
            <h5>Let's find another <br/> route . . .</h5>
          </div>
        </div>
      </Status>
    );
  };

export default Status404;