import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// if the css overriding the bootstrap didn't work just make Navbar.scss then return it to .css :/
import "./Navbar.css"

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark w-100">
                <div className="container">
                    <Link className="navbar-brand text-white fs-3" to="">START REACT</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-4">
                                <Link className="nav-link text-white fw-bold" to="portfolio">PORTFOLIO</Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link className="nav-link text-white fw-bold" to="about">ABOUT</Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link className="nav-link text-white fw-bold" to="contact">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </div> 
            </nav>
        )
    }
}
