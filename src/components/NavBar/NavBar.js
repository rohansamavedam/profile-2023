import React from 'react'
import { Text } from '@nextui-org/react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

import userData from '../../data/UserData'

export default function NavBar() {
    const lastUpdated = userData.lastUpdated.date
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
                <div className='lastUpdated'>
                    <Text size="$sm" >(Last updated: {lastUpdated})</Text>
                </div>
            </div>
        </div>
    )
}