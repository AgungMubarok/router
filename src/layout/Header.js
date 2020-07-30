import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import "./header.css"
import '../pages/Home';
import '../pages/ListJob';

const Header = () => {
    return (
        <Navbar className="navbarr">
            <Navbar.Brand><Link to="/">
                <img
                    src="https://impactbyte.com/static/brand/impactbyte_horizontal_color-trans.svg"
                    width="25%"
                    height="25%"
                    className="d-inline-block align-top"
                    alt="Impact Byte Logo"
                /></Link>
            </Navbar.Brand>
            <Navbar.Brand><Link to="/ListJob" className="asdug">
            <svg width="32" height="32" viewBox="0 0 32 32">
                <path fill="#231F1F" d="M24.762 21.83L32 29.19c-.774 1.19-1.504 1.93-2.77 2.81l-7.158-7.28c-2.322 1.87-5.257 2.987-8.45 2.987C6.1 27.707 0 21.504 0 13.853 0 6.203 6.1 0 13.623 0c7.524 0 13.624 6.202 13.624 13.853 0 2.97-.92 5.723-2.485 7.978zm-11.14 1.544c5.167 0 9.356-4.263 9.356-9.522 0-5.26-4.19-9.522-9.356-9.522-5.167 0-9.355 4.263-9.355 9.522 0 5.26 4.188 9.522 9.355 9.522z"></path>
            </svg> Search Jobs</Link>
            </Navbar.Brand>
        </Navbar>
    );
}

export default Header;