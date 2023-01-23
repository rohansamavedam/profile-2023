import { Text } from '@nextui-org/react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import React from 'react';

export default function NavBar() {
    const activeStyle = { textGradient: "45deg, #009FFF -20%, #ec2F4B 100%" }

    return (
        <div className='navbar'>
            <div className='navbarComponent'>
                <div className='navLink'>
                    <NavLink to="/">
                        <Text size="$lg" css={activeStyle}>Home</Text>
                    </NavLink>
                </div>
                <div className='navLink'>
                    <NavLink to="/work" >
                        <Text size="$lg">Work</Text>
                    </NavLink>
                </div>
                <div className='navLink'>
                    <NavLink to="/projects">
                        <Text size="$lg">Projects</Text>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}