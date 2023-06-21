import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import {
	TWorkout,
	deleteWorkout,
	getWorkoutsByUserId,
} from '../../utils/database/workout.database';
import WorkoutAddEditForm from './WorkoutAddEditForm';
import { Status } from '../../utils/helper';
import WorkoutItem from './WorkoutItem';

function Workout() {
	const [workouts, setWorkouts] = useState<TWorkout[]>([]);
	const [status, setStatus] = useState<Status>(new Status(''));

	useEffect(() => {
		const getWorkouts = async () => {
			const response = await getWorkoutsByUserId();
			const data: TWorkout[] = await response.json();
			setWorkouts(data);
		};
		getWorkouts();
	}, [status]);

	const handleDeleteWorkoutClick = async (workout: TWorkout) => {
		const response = await deleteWorkout(workout._id!);
		if (response.status === 200) {
			setStatus(new Status(`The workout on ${workout.date} has been deleted`));
		} else {
			const responseText = await response.text();
			setStatus(new Status(responseText));
		}
	};

	const workoutTable = (
		<table>
			<thead>
				<tr>
					<th>Workout Date</th>
					<th></th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{workouts.map((workout) => (
					<tr>
						<td>
							<Link to={`${workout.date}`} state={{ workout: workout }}>
								{workout.date}
							</Link>
						</td>
						<td>
							<Link to="edit" state={{ workout: workout }}>
								Edit
							</Link>
						</td>
						<td>
							<button onClick={() => handleDeleteWorkoutClick(workout)}>
								Delete
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);

	const workoutView = (
		<>
			<h1>Workouts</h1>
			{status.message && <p>{status.message}</p>}
			<Link to="add">Add Workout</Link>
			{workoutTable}
		</>
	);

	return (
		<>
			<Routes>
				<Route
					path="add"
					element={<WorkoutAddEditForm add={true} setStatus={setStatus} />}
				></Route>
				<Route
					path="edit"
					element={<WorkoutAddEditForm add={false} setStatus={setStatus} />}
				></Route>
				<Route path=":workoutDate/*" element={<WorkoutItem />}></Route>
				<Route index element={workoutView} />
			</Routes>
		</>
	);
}

export default Workout;
