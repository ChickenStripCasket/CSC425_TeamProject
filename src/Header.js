import React from 'react'
import'./header.css'
import { FilledButton } from './material/FilledButton';


function Header () {

    return (
        <div >
        <header className="header">
            <h1>Tasks</h1>
            <FilledButton label="New" icon="add"/>
        </header>
        </div>

    );

}

export default Header;