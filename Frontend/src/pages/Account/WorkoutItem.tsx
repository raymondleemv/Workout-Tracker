import { useEffect, useState } from 'react';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { Status } from '../../utils/helper';
import WorkoutItemAddEditForm from './WorkoutItemAddEditForm';
import {
	TWorkoutItem,
	deleteWorkoutItem,
	getWorkoutItemsByWorkoutId,
} from '../../utils/database/workoutItem.database';

function WorkoutItem() {
	const [workoutItems, setWorkoutItems] = useState<TWorkoutItem[]>([]);
	const [status, setStatus] = useState<Status>(new Status(''));
	const { workoutDate } = useParams();
	const location = useLocation();

	useEffect(() => {
		const getWorkoutItems = async () => {
			const response = await getWorkoutItemsByWorkoutId(
				location.state?.workout._id
			);
			const data: TWorkoutItem[] = await response.json();
			setWorkoutItems(data);
		};
		getWorkoutItems();
	}, [status]);

	const handleDeleteWorkoutClick = async (workoutItem: TWorkoutItem) => {
		const response = await deleteWorkoutItem(workoutItem);
		if (response.status === 200) {
			setStatus(new Status(`The workout item has been deleted`));
		} else {
			const responseText = await response.text();
			setStatus(new Status(responseText));
		}
	};

	const workoutTable = (
		<table>
			<thead>
				<tr>
					<th>Exercise</th>
					<th>Weight</th>
					<th>Reps</th>
				</tr>
			</thead>
			<tbody>
				{workoutItems.map((workoutItem) => (
					<tr>
						<td>{workoutItem.exercise?.name}</td>
						<td>{workoutItem.weight}</td>
						<td>{workoutItem.reps}</td>
						<td>
							<Link
								to="edit"
								state={{
									workout: location.state?.workout,
									workoutItem: workoutItem,
								}}
							>
								Edit
							</Link>
						</td>
						<td>
							<button onClick={() => handleDeleteWorkoutClick(workoutItem)}>
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
			<p>{status.message}</p>
			<Link to="/account/workouts">Back to workouts</Link>
			<Link to="add" state={{ workout: location.state?.workout }}>
				Add Workout Item
			</Link>
			{workoutTable}
		</>
	);

	return (
		<>
			<h1>Workout Items on {`${workoutDate}`}</h1>
			<Routes>
				<Route
					path="add"
					element={<WorkoutItemAddEditForm add={true} setStatus={setStatus} />}
				></Route>
				<Route
					path="edit"
					element={<WorkoutItemAddEditForm add={false} setStatus={setStatus} />}
				></Route>
				<Route path="*" element={workoutView} />
			</Routes>
		</>
	);
}

export default WorkoutItem;
