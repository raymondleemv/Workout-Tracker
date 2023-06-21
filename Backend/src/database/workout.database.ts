import { Workout, IWorkout } from '../models/Workout.model';
import { Types } from 'mongoose';

async function addWorkout(data: IWorkout): Promise<IWorkout> {
	return await Workout.create(data);
}

async function getWorkoutsByUserId(userID: String) {
	return await Workout.find({ user: userID });
}

async function editWorkout(workout: any) {
	console.log(workout);
	const doc = await Workout.findOneAndUpdate({ _id: workout._id }, workout);
	console.log(doc);
}

async function deleteWorkout(workoutID: Types.ObjectId) {
	return await Workout.deleteOne({ _id: workoutID });
}

export { addWorkout, getWorkoutsByUserId, editWorkout, deleteWorkout };
