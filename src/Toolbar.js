import React from 'react';
import './Toolbar.css';
import {Icon} from'./material/Icon.js'
import { IconButton } from './material/IconButton';

function Toolbar(
    {
        currentMode,
        onViewToggle
    }
){
    return(
        <div class="toolbar">
        <div id="task-counter">
            0/0 Tasks Completed
        </div>
        <div class="view-buttons">
            <IconButton className={currentMode == true ? 'view-button selected' : 'view-button'} icon='view_cozy' onClick={() => onViewToggle(true)}/>
            <IconButton className={!currentMode ? 'view-button selected' : 'view-button'} icon='lists' onClick={() => onViewToggle(false)}/>
        </div>
        </div>
    )
}

export default Toolbar;