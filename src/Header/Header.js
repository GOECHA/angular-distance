import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css"


const Header = () => {
  return (
      <Link to="/">
        <h1 className="angular-distance-header">Angular Distance</h1>
      </Link>
  )
}

export default  Header;