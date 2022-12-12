import React from 'react';
import cn from './NavButton.module.css'
import {NavLink} from "react-router-dom";

const NavButton = ({to, label}) => {
    return (
        <NavLink to={to} className={({isActive}) => isActive ? (cn.navLink + ' ' + cn.activeLink) : cn.navLink}
        >
            {label}
        </NavLink>
    );
};

export default NavButton;
