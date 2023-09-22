import React from 'react';
import './Toolbar.css';
import {Icon} from'./material/Icon.js'

function Toolbar(){
    return(
        <div class="toolbar">
        <div id="task-counter">
            0/0 Tasks Completed
        </div>
        <div class="view-buttons">
            <button id="card-view-button" class="view-button"><Icon icon="view_cozy"/></button>
            <button id="list-view-button" class="view-button"><Icon icon="lists"/></button>
        </div>
        </div>
    )
}

export default Toolbar;