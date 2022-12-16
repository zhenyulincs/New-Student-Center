import { Navbar } from "react-bootstrap";
import logo from "../../../assets/logo.jpg"
import React from 'react'

function Logo() {
    return (
        <Navbar.Brand href="./">
            <img src={logo} className="navbar-logo-size" />
        </Navbar.Brand>
    )

}
export default Logo