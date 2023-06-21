import { backendServerUrl } from '../connection';

export type TWorkout = {
	_id?: string;
	date: string;
};

const backendAuthRoutesUrl = backendServerUrl + '/api/workouts';
async function fetchBackendWorkoutRoutes(
	endpoint: string,
	method: 'GET' | 'POST',
	data?: TWorkout | { _id: string }
) {
	const response = await fetch(backendAuthRoutesUrl + endpoint, {
		method: method,
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	return response;
}

async function addWorkout(date: string) {
	const data: TWorkout = {
		date: date,
	};
	const response = await fetchBackendWorkoutRoutes('/add', 'POST', data);
	return response;
}

async function getWorkoutsByUserId() {
	const response = await fetchBackendWorkoutRoutes(
		'/getWorkoutsByUserId',
		'GET'
	);
	return response;
}

async function editWorkout(exercise: TWorkout) {
	const response = await fetchBackendWorkoutRoutes('/edit', 'POST', exercise);
	return response;
}

async function deleteWorkout(id: string) {
	const data = {
		_id: id,
	};
	const response = await fetchBackendWorkoutRoutes('/delete', 'POST', data);
	return response;
}

export { addWorkout, getWorkoutsByUserId, editWorkout, deleteWorkout };
