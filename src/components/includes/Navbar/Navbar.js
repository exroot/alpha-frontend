import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import './Navbar.css';

const navbar = (props) => {
    return (
        <Navbar brand={<a href="/"><i className="medium material-icons">speaker_notes</i><span className="Wordplay">My</span>Notes</a>} alignLinks="right">
            <NavItem href="">
                Login
            </NavItem>
            <NavItem href="components.html">
                Sign Up
            </NavItem>
        </Navbar>
    );
}

export default navbar;