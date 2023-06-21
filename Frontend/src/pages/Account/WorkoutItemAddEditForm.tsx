import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Status } from '../../utils/helper';
import {
	TExercise,
	getExerciseTypes,
	getExercisesByExerciseType,
} from '../../utils/database/exercise.database';
import {
	TWorkoutItem,
	addWorkoutItem,
	editWorkoutItem,
} from '../../utils/database/workoutItem.database';

interface IProps {
	add: boolean;
	setStatus: (status: Status) => void;
}

function WorkoutAddEditForm(props: IProps) {
	const navigate = useNavigate();
	const location = useLocation();
	const [status, setStatus] = useState<Status>(new Status(''));
	const [exerciseTypes, setExerciseTypes] = useState<string[]>([]);
	const [exercises, setExercises] = useState<TExercise[]>([]);
	const [selectedExerciseType, setSelectedExerciseType] = useState<string>('');

	const getExerciseTypeOptions = async () => {
		const response = await getExerciseTypes();
		if (response.status === 200) {
			const data = await response.json();
			setExerciseTypes(data);
			setSelectedExerciseType(data[0]);
		} else {
			const responseText = await response.text();
			setStatus(new Status(responseText));
		}
	};

	const getExercisesOptions = async () => {
		const response = await getExercisesByExerciseType(selectedExerciseType);
		if (response.status === 200) {
			const data = await response.json();
			setExercises(data);
		} else {
			const responseText = await response.text();
			setStatus(new Status(responseText));
		}
	};

	useEffect(() => {
		if (exerciseTypes.length === 0) getExerciseTypeOptions();
		getExercisesOptions();
	}, [selectedExerciseType]);

	const submitFormHandler = async (e: any) => {
		e.preventDefault();
		let response;
		if (props.add) {
			response = await addWorkoutItem(
				e.target.weight.value,
				e.target.reps.value,
				location.state.workout._id,
				e.target.exercise.value
			);
		} else {
			let data: TWorkoutItem = {
				_id: location.state.workoutItem._id,
				weight: e.target.weight.value,
				reps: e.target.reps.value,
				workout: location.state.workout._id,
				exerciseID: e.target.exercise.value,
			};
			response = await editWorkoutItem(data);
		}
		if (response.status === 200) {
			props.setStatus(
				new Status(
					`The workout item has been ${props.add ? 'added' : 'updated'}`
				)
			);
			navigate(`/account/workouts/${location.state.workout.date}`, {
				state: location.state,
			});
		} else {
			const responseText = await response.text();
			setStatus(new Status(responseText));
		}
	};
	return (
		<>
			<p>{status.message}</p>
			<Link
				to={`/account/workouts/${location.state?.workout?.date}`}
				state={location.state}
			>
				Back
			</Link>
			<form onSubmit={(e) => submitFormHandler(e)}>
				<div className="form__field">
					<label htmlFor="exercise_type">Exercise Type:</label>
					<select
						name="exercise_type"
						onChange={(e) => {
							setSelectedExerciseType(e.target.value);
						}}
					>
						{exerciseTypes.map((exerciseType) => (
							<option value={exerciseType}>{exerciseType}</option>
						))}
					</select>
				</div>
				<div className="form__field">
					<label htmlFor="exercise">Exercise:</label>
					<select name="exercise">
						{exercises.map((exercise) => (
							<option value={exercise._id}>{exercise.name}</option>
						))}
					</select>
				</div>
				<div className="form__field">
					<label htmlFor="weight">Weight:</label>
					<input
						name="weight"
						type="number"
						defaultValue={location.state?.workoutItem?.weight}
						required
					/>
				</div>
				<div className="form__field">
					<label htmlFor="reps">Reps:</label>
					<input
						name="reps"
						type="number"
						defaultValue={location.state?.workoutItem?.reps}
						required
					/>
				</div>
				<button type="submit">{props.add ? 'Add' : 'Edit'} Workout Item</button>
			</form>
		</>
	);
}

export default WorkoutAddEditForm;
