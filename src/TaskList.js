import "./TaskList.css";
import TaskListComponent from "./TaskListComponent";
import { updateTask } from "./api";

export default function TaskList({ tasks, onTaskEdit, onTasksChange }) {
	return (
		<ul className="list-element-list">
			{tasks.map((task, n) => {
				return (
					<TaskListComponent
						key={n}
						task={task}
						onClick={(event) => {
							if (event.defaultPrevented) return;
							event.preventDefault();

							if (onTaskEdit) onTaskEdit(task);
						}}
						onTaskChange={(newTask) => {
							tasks[n] = newTask;
							// call api
							updateTask(newTask);
							if (onTasksChange) onTasksChange(tasks);
						}}
					/>
				);
			})}
		</ul>
	);
}
