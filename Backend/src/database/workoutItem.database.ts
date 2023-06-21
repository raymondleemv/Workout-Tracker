// import mongoose from 'mongoose';
// import { Workout } from '../models/Workout.model';
import { WorkoutItem, IWorkoutItem } from '../models/WorkoutItem.model';

async function addWorkoutItem(data: IWorkoutItem): Promise<IWorkoutItem> {
	const workoutItem = await WorkoutItem.create(data);
	// const workout = await Workout.findOne({ _id: data.workout });
	// workout?.workout_items.push(data._id);
	// await workout?.save();
	// console.log(workout);
	return workoutItem;
}

async function getWorkoutItemsByWorkoutId(workoutID: String) {
	return await WorkoutItem.find({ workout: workoutID })
		.populate('exercise')
		.exec();
}

async function editWorkoutItem(data: IWorkoutItem) {
	console.log(data);
	const workoutItem = await WorkoutItem.findOneAndUpdate(
		{ _id: data._id },
		data
	);
	console.log(workoutItem);
}

async function deleteWorkoutItem(data: IWorkoutItem) {
	const workoutItem = await WorkoutItem.deleteOne({ _id: data._id });
	// const workout = await Workout.findOne({ _id: data.workout });
	// const removeIndex = workout?.workout_items.indexOf(
	// 	new mongoose.Types.ObjectId(data.workout)
	// );
	// console.log(removeIndex);
	// console.log(workout?.workout_items);
	// workout?.workout_items.splice(removeIndex!, 1);
	// console.log(workout?.workout_items);
	// await workout?.save();
	// console.log(workout);
	return workoutItem;
}

export {
	addWorkoutItem,
	getWorkoutItemsByWorkoutId,
	editWorkoutItem,
	deleteWorkoutItem,
};
