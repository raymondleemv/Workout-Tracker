import { useEffect, useState } from 'react';
import {
	deleteExercise,
	getExercisesByUserId,
} from '../../utils/database/exercise.database';
import { TExercise } from '../../utils/database/exercise.database';
import { Link, Route, Routes } from 'react-router-dom';
import ExerciseAddEditForm from './ExerciseAddEditForm';

function Exercise() {
	const [exercises, setExercises] = useState<TExercise[]>([]);
	const [status, setStatus] = useState<string>('');

	useEffect(() => {
		const getExercises = async () => {
			const response = await getExercisesByUserId();
			const data: TExercise[] = await response.json();
			setExercises(data);
		};
		getExercises();
	}, [status]);

	const handleDeleteExerciseClick = async (exercise: TExercise) => {
		const response = await deleteExercise(exercise._id!);
		if (response.status === 200) {
			setStatus(`The ${exercise.name} exercise has been deleted`);
		} else {
			const responseText = await response.text();
			setStatus(responseText);
		}
	};

	const exerciseTable = (
		<table>
			<thead>
				<tr>
					<th>Exercise</th>
					<th>Exercise Type</th>
				</tr>
			</thead>
			<tbody>
				{exercises.map((exercise) => (
					<tr>
						<td>{exercise.name}</td>
						<td>{exercise.exercise_type}</td>
						<td>
							<Link to="edit" state={{ exercise: exercise }}>
								Edit
							</Link>
						</td>
						<td>
							<button onClick={() => handleDeleteExerciseClick(exercise)}>
								Delete
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);

	const exerciseView = (
		<>
			<p>{status}</p>
			<Link to="add">Add Exercise</Link>
			{exerciseTable}
		</>
	);

	return (
		<>
			<h1>Exercises</h1>
			<Routes>
				<Route
					path="add"
					element={<ExerciseAddEditForm add={true} setStatus={setStatus} />}
				></Route>
				<Route
					path="edit"
					element={<ExerciseAddEditForm add={false} setStatus={setStatus} />}
				></Route>
				<Route path="*" element={exerciseView} />
			</Routes>
		</>
	);
}

export default Exercise;
