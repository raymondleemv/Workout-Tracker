import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
	TExercise,
	addExercise,
	editExercise,
	getExercisesByUserId,
} from '../../utils/database/exercise.database';
import { useState } from 'react';

interface IProps {
	add: boolean;
	setStatus: (status: string) => void;
}

function ExerciseAddEditForm(props: IProps) {
	const navigate = useNavigate();
	const location = useLocation();
	const [status, setStatus] = useState<string>('');

	const submitFormHandler = async (e: any) => {
		e.preventDefault();
		let response;
		if (props.add) {
			response = await addExercise(
				e.target.name.value,
				e.target.exercise_type.value
			);
		} else {
			let data: TExercise = {
				_id: location.state.exercise._id,
				name: e.target.name.value,
				exercise_type: e.target.exercise_type.value,
			};
			response = await editExercise(data);
		}
		if (response.status === 200) {
			props.setStatus(
				`The ${e.target.name.value} exercise has been ${
					props.add ? 'added' : 'updated'
				}`
			);
			navigate('/account/exercises');
		} else {
			const responseText = await response.text();
			setStatus(responseText);
		}
	};
	return (
		<>
			<p>{status}</p>
			<Link to="/account/exercises">Back</Link>
			<form onSubmit={(e) => submitFormHandler(e)}>
				<label htmlFor="name">Name:</label>
				<input
					name="name"
					defaultValue={location.state?.exercise.name}
					required
				/>
				<label htmlFor="exercise_type">Exercise Type:</label>
				<input
					name="exercise_type"
					defaultValue={location.state?.exercise.exercise_type}
					required
				/>
				<button type="submit">{props.add ? 'Add' : 'Edit'} Exercise</button>
			</form>
		</>
	);
}

export default ExerciseAddEditForm;
