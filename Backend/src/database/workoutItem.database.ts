import { WorkoutItem, IWorkoutItem } from '../models/WorkoutItem.model';
import { Types } from 'mongoose';

async function addWorkoutItem(data: IWorkoutItem): Promise<IWorkoutItem> {
	return await WorkoutItem.create(data);
}

async function getWorkoutItemsByWorkoutId(workoutID: String) {
	return await WorkoutItem.find({ workoutItem: workoutID });
}

async function editWorkoutItem(workoutItem: any) {
	return await WorkoutItem.findOneAndUpdate(
		{ _id: workoutItem._id },
		workoutItem
	);
}

async function deleteWorkoutItem(workoutItemID: Types.ObjectId) {
	return await WorkoutItem.deleteOne({ _id: workoutItemID });
}

export {
	addWorkoutItem,
	getWorkoutItemsByWorkoutId,
	editWorkoutItem,
	deleteWorkoutItem,
};
