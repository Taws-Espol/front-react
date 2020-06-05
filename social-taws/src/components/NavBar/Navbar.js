import React from 'react';
import {Link} from 'react-router-dom';
import "./NavBar.css"
const NavBar = () =>{
    return(
        <>
            <nav className="navbar bg-blue">
                <a className="taws-nav" href=" ">Taws</a>
                <Link to="/login" className="btn btn-link btn-logout">Logout</Link>
            </nav>
        </>
    );
}

export default NavBar;