import "./App.css";
import EditModal from "./EditModal";
import Header from "./Header";
import Modal from "./Modal";
import TaskCardGrid from "./TaskCardGrid";
import Toolbar from "./Toolbar.js";
import { useState } from "react";
import TaskList from "./TaskList";
import NewTaskModal from "./NewTaskModal";
import { createTask, deleteTask, getTasks, updateTask } from "./api";

function App() {
	// the task that's currently being edited
	const [editTask, setEditTask] = useState(null);
	const [newTask, setNewTask] = useState(false);

	// the current task view mode
	const [gridViewMode, setGridViewMode] = useState(true);

	const [tasks, setTasks] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(undefined);

	// load tasks from the API
	const loadAPITasks = () => {
		setLoading(true);
		getTasks(50, 0)
			.then((tasks) => setTasks(tasks))
			.catch((error) => setError(error.message))
			.finally(setLoading(false));
	};
	useState(() => {
		if (loading) return;
		loadAPITasks();
	}, []);

	// show modal if editTask isn't null
	let completed = 0;
	for (const task of tasks) {
		if (task.completed) completed++;
	}

	return (
		<main>
			{/* Show modal if editTask isn't null */}
			<EditModal
				editTask={editTask}
				onClose={() => {
					setEditTask(null);
				}}
				onSubmit={(newTask) => {
					updateTask(newTask)
					let count = 0;
					for (const task of tasks) {
						if (task.id == editTask.id) {
							tasks[count] = newTask;
						}
						count++;
					}
					setTasks([...tasks]);
				}}
				onDelete={() => {
					deleteTask(editTask.id)
					let count = 0;
					for (const task of tasks) {
						if (task.id == editTask.id) {
							tasks.splice(count, 1);
						}
						count++;
					}
					setTasks([...tasks]);
				}}
			/>
			<NewTaskModal
				visible={newTask}
				onClose={() => setNewTask(false)}
				onSubmit={(newValue) => {
					createTask(newValue)
						.then((newTask) => {
							tasks.push(newTask);
							setTasks([...tasks]);
						})
						.catch((error) => console.log(error.message));
				}}
			/>
			{/* Header */}
			<Header onClick={() => setNewTask(true)} />

			{/* Toolbar */}
			<section className="toolbar">
				<Toolbar
					currentMode={gridViewMode}
					onViewToggle={(state) => setGridViewMode(state)}
					total={tasks.length}
					completed={completed}
				/>
			</section>

			{/* List */}
			<ul className="list">
				{loading ? (
					<h3 className="display-small empty-text">Loading...</h3>
				) : error ? (
					<h3 className="display-small empty-text">API Error: {error}</h3>
				) : 0 >= tasks.length ? (
					<h3 className="display-small empty-text">Add a task to begin</h3>
				) : gridViewMode ? (
					<TaskCardGrid
						tasks={tasks}
						onTaskEdit={(toEditTask) => setEditTask(toEditTask)}
						onTasksChange={(newTasks) => setTasks([...newTasks])}
					></TaskCardGrid>
				) : (
					<TaskList
						tasks={tasks}
						onTaskEdit={(toEditTask) => setEditTask(toEditTask)}
						onTasksChange={(newTasks) => setTasks([...newTasks])}
					/>
				)}
			</ul>
		</main>
	);
}

export default App;
