import { Workout, IWorkout } from '../models/Workout.model';
import { Types } from 'mongoose';

async function addWorkout(data: IWorkout): Promise<IWorkout> {
	return await Workout.create(data);
}

async function getWorkoutsByUserId(workoutID: String) {
	return await Workout.find({ workout: workoutID });
}

async function editWorkout(workout: any) {
	return await Workout.findOneAndUpdate({ _id: workout._id }, workout);
}

async function deleteWorkout(workoutID: Types.ObjectId) {
	return await Workout.deleteOne({ _id: workoutID });
}

export { addWorkout, getWorkoutsByUserId, editWorkout, deleteWorkout };
