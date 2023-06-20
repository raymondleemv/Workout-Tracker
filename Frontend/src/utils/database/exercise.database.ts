import { backendServerUrl } from '../connection';

export type TExercise = {
	_id?: string;
	name: string;
	exercise_type: string;
};

const backendAuthRoutesUrl = backendServerUrl + '/api/exercises';
async function fetchBackendExerciseRoutes(
	endpoint: string,
	method: 'GET' | 'POST',
	data?: TExercise | { _id: string }
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

async function addExercise(name: string, exercise_type: string) {
	const data: TExercise = {
		name: name,
		exercise_type: exercise_type,
	};
	const response = await fetchBackendExerciseRoutes('/add', 'POST', data);
	return response;
}

async function getExercisesByUserId() {
	const response = await fetchBackendExerciseRoutes(
		'/getExercisesByUserId',
		'GET'
	);
	return response;
}

async function editExercise(exercise: TExercise) {
	const response = await fetchBackendExerciseRoutes('/edit', 'POST', exercise);
	return response;
}

async function deleteExercise(id: string) {
	const data = {
		_id: id,
	};
	const response = await fetchBackendExerciseRoutes('/delete', 'POST', data);
	return response;
}

export { addExercise, getExercisesByUserId, editExercise, deleteExercise };
