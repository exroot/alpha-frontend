import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-materialize';
import './Navbar.css';


const navbar = (props) => {
    const items = props.isAuth ? { Notes: "/notes", Logout: "/logout" } : { Login: "/login" };
    const NavItems = (items) => {
        let navItems = [];
        for (const key in items) {
            if (items[key] === '/logout') {
               const logout = <Link key={ key } onClick={ props.logoutHandler } to={ props.redirect } >{ key }</Link>;
                navItems.push(logout);
            }
            else {
                navItems.push(<Link key={ key } to={items[key]}>{ key }</Link>);
            }
        }
        return navItems;
    }
    return (
        <Navbar brand={<a href="/"><i className="medium material-icons">speaker_notes</i><span className="Wordplay">My</span>Notes</a>} alignLinks="right">
            { NavItems(items) }
        </Navbar>
    );
}

export default navbar;