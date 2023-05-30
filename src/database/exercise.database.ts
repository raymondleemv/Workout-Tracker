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

export { addExercise, getExercisesByUserId, editExercise, deleteExercise };
