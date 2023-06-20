import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
	TWorkout,
	addWorkout,
	editWorkout,
	getWorkoutsByUserId,
} from '../../utils/database/workout.database';
import { useState } from 'react';
import { Status } from '../../utils/helper';

interface IProps {
	add: boolean;
	setStatus: (status: Status) => void;
}

function WorkoutAddEditForm(props: IProps) {
	const navigate = useNavigate();
	const location = useLocation();
	const [status, setStatus] = useState<Status>(new Status(''));

	const submitFormHandler = async (e: any) => {
		e.preventDefault();
		let response;
		if (props.add) {
			response = await addWorkout(e.target.date.value);
		} else {
			let data: TWorkout = {
				_id: location.state.workout._id,
				date: e.target.date.value,
			};
			response = await editWorkout(data);
		}
		if (response.status === 200) {
			props.setStatus(
				new Status(`The workout has been ${props.add ? 'added' : 'updated'}`)
			);
			navigate('/account/workouts');
		} else {
			const responseText = await response.text();
			setStatus(new Status(responseText));
		}
	};
	return (
		<>
			<p>{status.message}</p>
			<Link to="/account/workouts">Back</Link>
			<form onSubmit={(e) => submitFormHandler(e)}>
				<label htmlFor="date">Name:</label>
				<input
					name="date"
					type="date"
					defaultValue={location.state?.workout.date}
					required
				/>
				<button type="submit">{props.add ? 'Add' : 'Edit'} Workout</button>
			</form>
		</>
	);
}

export default WorkoutAddEditForm;
