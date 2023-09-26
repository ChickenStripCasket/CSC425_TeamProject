import React from 'react'
import'./header.css'
import { FilledButton } from './material/FilledButton';


function Header () {

    return (
        <header className='header'>
            <h1 className='display-large'>Tasks</h1>
            <FilledButton label="New" icon="add"/>
        </header>
    );

}

export default Header;