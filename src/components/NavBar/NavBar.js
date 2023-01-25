import { Text } from '@nextui-org/react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import React from 'react';

export default function NavBar() {
    return (
        <div className='navbar'>
            <div className='navbarComponent'>
                <div className='navLink'>
                    <NavLink to="/">
                        <Text size="$md" >Home</Text>
                    </NavLink>
                </div>
                <div className='navLink'>
                    <NavLink to="/work">
                        <Text size="$md" >Work</Text>
                    </NavLink>
                </div>
                <div className='navLink'>
                    <NavLink to="/projects">
                        <Text size="$md">Projects</Text>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}