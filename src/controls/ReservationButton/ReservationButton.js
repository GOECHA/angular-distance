import React, { Component } from 'react'
// import PropTypes from "prop-types"
import './ReservationButton.css'
// import { Link } from 'react-router-dom';
// import 
class ReservationButton extends Component {
  render () {

  return (
       <button className="reservation-button" input='Reserve' >{this.props.text}</button>
  )
 }
}
export default  ReservationButton;

