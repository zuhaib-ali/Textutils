import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={props.mode.color === "white" ? "navbar navbar-expand-lg navbar-dark bg-dark" : "navbar navbar-expand-lg bg-light"}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about' className="nav-link active" aria-current="page">About</Link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="form-check form-switch p-2">            
            <label className="form-check-label" for="flexSwitchCheckDefault" style={{color:`${props.mode.color}`}}>{props.mode.color === "white" ? "Light" : "Dark"}</label>
            <input className="form-check-input" type="checkbox" onClick={props.darkModeHandler} role="switch" id="flexSwitchCheckDefault"/>            
        </div>
    </nav>
  )
}

Navbar.propTypes = {
    title:PropTypes.string
}

Navbar.defaultProps = {
    title: "TEXT UTILS"
}