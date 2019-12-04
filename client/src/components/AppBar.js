import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import "../index.css"

function AppBar(props) {
  console.log(props.props)
  return (
    <Navbar bg="dark" variant="dark" className = "Nav">
    <span className="title"> {props.props}</span>
  
      
    
  </Navbar>
  )
}

export default AppBar
