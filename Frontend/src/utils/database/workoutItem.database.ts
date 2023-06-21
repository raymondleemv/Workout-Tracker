import { backendServerUrl } from '../connection';
import { TExercise } from './exercise.database';

export type TWorkoutItem = {
	_id?: string;
	weight: number;
	reps: number;
	workout: string;
	exerciseID: string;
	exercise?: TExercise;
};

const backendWorkoutItemRoutesUrl = backendServerUrl + '/api/workout-items';
async function fetchBackendWorkoutItemRoutes(
	endpoint: string,
	method: 'GET' | 'POST',
	data?: TWorkoutItem | { _id: string }
) {
	const response = await fetch(backendWorkoutItemRoutesUrl + endpoint, {
		method: method,
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	return response;
}

async function addWorkoutItem(
	weight: number,
	reps: number,
	workout: string,
	exercise: string
) {
	const data: TWorkoutItem = {
		weight: weight,
		reps: reps,
		workout: workout,
		exerciseID: exercise,
	};
	const response = await fetchBackendWorkoutItemRoutes('/add', 'POST', data);
	return response;
}

async function getWorkoutItemsByWorkoutId(workoutID: string) {
	const response = await fetchBackendWorkoutItemRoutes(
		'/getWorkoutItemsByWorkoutId',
		'POST',
		{ _id: workoutID }
	);
	return response;
}

async function editWorkoutItem(workoutItem: TWorkoutItem) {
	const response = await fetchBackendWorkoutItemRoutes(
		'/edit',
		'POST',
		workoutItem
	);
	return response;
}

async function deleteWorkoutItem(workoutItem: TWorkoutItem) {
	const response = await fetchBackendWorkoutItemRoutes(
		'/delete',
		'POST',
		workoutItem
	);
	return response;
}

export {
	addWorkoutItem,
	getWorkoutItemsByWorkoutId,
	editWorkoutItem,
	deleteWorkoutItem,
};
