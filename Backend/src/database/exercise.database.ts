import { Exercise, IExercise } from '../models/Exercise.model';
import { Types } from 'mongoose';

async function addExercise(data: IExercise): Promise<IExercise> {
	return await Exercise.create(data);
}

async function getExercisesByUserId(userID: String) {
	return await Exercise.find({ user: userID });
}

async function editExercise(exercise: any) {
	return await Exercise.findOneAndUpdate({ _id: exercise._id }, exercise);
}

async function deleteExercise(exerciseID: Types.ObjectId) {
	return await Exercise.deleteOne({ _id: exerciseID });
}

async function getExerciseTypes(userID: string) {
	return await Exercise.find({ user: userID }).distinct('exercise_type');
}

async function getExercisesByExerciseType(
	userID: string,
	exercise_type: string
) {
	return await Exercise.find({
		user: userID,
		exercise_type: exercise_type,
	});
}

export {
	addExercise,
	getExercisesByUserId,
	editExercise,
	deleteExercise,
	getExerciseTypes,
	getExercisesByExerciseType,
};
