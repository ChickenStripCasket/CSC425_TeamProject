import React from 'react';
import './Toolbar.css';

function Toolbar(){
    return(
        <body>
            <ul class="toolbar">
                <li>Completed</li>
                <li><img src="/card-icon.png" alt="Card View" class="toolbar-icon"></img></li>
                <li><img src="/list-icon.png" alt="List View" class="toolbar-icon"></img></li>
            </ul>
        </body>
    )
}

export default Toolbar;