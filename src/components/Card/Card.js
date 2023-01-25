import './Card.css'
import React from 'react';

export default function Card(props) {
    const { project } = props;
    return (
        <div className='card'>
            <img src={ project.imageSrcOne } />
            <div className='overlay'>

            </div>  
        </div>
    )
}