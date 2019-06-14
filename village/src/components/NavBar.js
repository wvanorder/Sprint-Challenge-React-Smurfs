import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = props => {

    return(
    <div className='nav-bar'>
        <NavLink to="/" className="title"> Smurfville, USA</NavLink>
        <NavLink to="/form" className="link">Add a Smurf to the Party!</NavLink>
    </div>
    )
};

export default NavBar;