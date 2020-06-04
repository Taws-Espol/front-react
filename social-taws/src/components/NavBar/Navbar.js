import React from 'react';
import "./NavBar.css"
const NavBar = () =>{
    return(
        <>
            <nav className="navbar bg-blue">
                <a className="taws-nav" href=" ">Taws</a>
                <button type="button" className="btn btn-link taws-nav text-left">Logout</button>
            </nav>
        </>
    );
}

export default NavBar;