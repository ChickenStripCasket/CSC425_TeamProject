import React from "react";
import "./Toolbar.css";
import { IconButton } from "./material/IconButton";

function Toolbar({ currentMode, onViewToggle, completed, total }) {
	return (
		<div className="toolbar">
			<div id="task-counter">
				{completed}/{total} completed
			</div>
			<div className="view-buttons">
				<IconButton
					className={
						currentMode == true ? "view-button selected" : "view-button"
					}
					icon="view_cozy"
					onClick={() => onViewToggle(true)}
				/>
				<IconButton
					className={!currentMode ? "view-button selected" : "view-button"}
					icon="lists"
					onClick={() => onViewToggle(false)}
				/>
			</div>
		</div>
	);
}

export default Toolbar;
