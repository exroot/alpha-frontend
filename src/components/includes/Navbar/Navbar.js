import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem } from 'react-materialize';
import './Navbar.css';

const navbar = (props) => {
    return (
        <Navbar brand={<a href="/"><i className="medium material-icons">speaker_notes</i><span className="Wordplay">My</span>Notes</a>} alignLinks="right">
            <NavItem>
                <Link to="/notes">
                    Notes
                </Link>
            </NavItem>
            <NavItem>
                 <Link to="/signin">
                    Sign in
                </Link>
            </NavItem>
        </Navbar>
    );
}

export default navbar;