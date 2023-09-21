import React from 'react'
import'./header.css'


function Header () {

    return (
        <div >
        <header className="header">
            <h1>Tasks</h1>
            <button className="newbtn">New +</button>
        </header>
        </div>

    );

}

export default Header;