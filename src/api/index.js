import Task from "./classes/Task";

const apiUrl = "http://localhost:8000/api/v1"; // the API's URL

const defaultHeaders = {
	"Content-Type": "application/json",
};

// userid stuff
const ownerIdLocalStorageKey = "ownerId";
let cachedOwnerId;
const getOwnerId = () => {
	return new Promise((resolve, reject) => {
		try {
			// if it's already cached, simply return it
			if (cachedOwnerId) return resolve(cachedOwnerId);

			// check local storage for the id
			const inStorage = localStorage.getItem(ownerIdLocalStorageKey);
			if (inStorage == null) {
				// get it from the API
				fetch(`${apiUrl}/users`, {
					method: "POST",
					headers: defaultHeaders,
				})
					.then((response) => response.json())
					.then((json) => {
						const id = json.data.id;
						// save in localstorage
						localStorage.setItem(ownerIdLocalStorageKey, id);
						cachedOwnerId = id;
						resolve(id);
					})
					.catch((error) => reject(error));
			} else {
				cachedOwnerId = Number(inStorage);
				resolve(cachedOwnerId);
			}
		} catch (error) {
			reject(error);
		}
	});
};

// getting tasks
export const buildTask = (rawTask) => {
	return new Task(
		rawTask.id,
		rawTask.title,
		rawTask.description,
		new Date(rawTask.dueDate),
		rawTask.completed
	);
};

export const getTask = (taskId) => {
	return new Promise(async (resolve, reject) => {
		try {
			fetch(`${apiUrl}/task?id=${taskId}&ownerId=${await getOwnerId()}`, {
				method: "GET",
			})
				.then((response) => response.json())
				.then((json) => {
					const error = json.error;
					if (error) {
						reject(new Error(error));
					} else {
						resolve(buildTask(json.data));
					}
				})
				.catch((error) => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};

export const getTasks = (limit, offset) => {
	return new Promise(async (resolve, reject) => {
		try {
			fetch(
				`${apiUrl}/tasks?limit=${limit}&offset=${offset}&ownerId=${await getOwnerId()}`,
				{
					method: "GET",
				}
			)
				.then((response) => response.json())
				.then((json) => {
					const error = json.error;
					if (error) {
						reject(new Error(error));
					} else {
						const tasks = [];
						for (const rawTask of json.data) {
							tasks.push(buildTask(rawTask));
						}
						resolve(tasks);
					}
				})
				.catch((error) => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};

// adding a task
/**
 * Inserts a new task into the database.
 *
 * @param {Task} task
 * @returns {Promise<Task>} A promise that resolves when the task is created.
 */
export const createTask = (task) => {
	return new Promise(async (resolve, reject) => {
		try {
			fetch(`${apiUrl}/task?ownerId=${await getOwnerId()}`, {
				method: "POST",
				headers: defaultHeaders,
				body: JSON.stringify({
					title: task.title,
					description: task.description,
					dueDate: task.dueDate.toISOString(),
					completed: task.completed,
				}),
			})
				.then((response) => response.json())
				.then((json) => {
					const error = json.error;
					if (error) {
						reject(new Error(error));
					} else {
						resolve(buildTask(json.data));
					}
				})
				.catch((error) => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};

/**
 * Updates an existing task in the database.
 *
 * @param {Task} task
 * @returns {Promise<boolean>} A promise that resolves when the task is updated.
 */
export const updateTask = (task) => {
	return new Promise(async (resolve, reject) => {
		try {
			fetch(`${apiUrl}/task?ownerId=${await getOwnerId()}`, {
				method: "PUT",
				headers: defaultHeaders,
				body: JSON.stringify({
					id: task.id,
					title: task.title,
					description: task.description,
					dueDate: task.dueDate.toISOString(),
					completed: task.completed,
				}),
			})
				.then((response) => resolve(response.ok))
				.catch((error) => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};

/**
 * Deletes the taskw ith the provided id.
 *
 * @param {number} taskId The ID of the task to delete.
 * @returns {Promise<boolean>} A promise that resolves when the task is deleted.
 */
export const deleteTask = (taskId) => {
	return new Promise(async (resolve, reject) => {
		try {
			fetch(`${apiUrl}/task?id=${taskId}&ownerId=${await getOwnerId()}`, {
				method: "DELETE",
			})
				.then((response) => resolve(response.ok))
				.catch((error) => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};
