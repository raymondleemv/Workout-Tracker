import { Schema, model, Types } from 'mongoose';

interface IWorkoutItem {
	_id: Types.ObjectId;
	weight: Number;
	reps: Number;
	workout: Types.ObjectId;
	exercise: Types.ObjectId;
}

const workoutItemSchema = new Schema<IWorkoutItem>(
	{
		weight: {
			type: Number,
		},
		reps: {
			type: Number,
		},
		workout: {
			type: Schema.Types.ObjectId,
			ref: 'Workout',
		},
		exercise: {
			type: Schema.Types.ObjectId,
			ref: 'Exercise',
		},
	},
	{ collection: 'Workouts' }
);

const WorkoutItem = model('WorkoutItem', workoutItemSchema);

export default WorkoutItem;
