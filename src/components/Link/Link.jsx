import React from 'react';


const Link = ({route}) => {

    return (
        <li className='mr-10 text-lg font-semibold hover:bg-purple-800'>
       
            <a href={route.path}>{route.name}</a>      
        </li>
    );
    };

export default Link;