import { Schema, model, Types, Document } from 'mongoose';

interface IWorkoutItem extends Document {
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
	{ collection: 'WorkoutItems' }
);

const WorkoutItem = model('WorkoutItem', workoutItemSchema);

export { WorkoutItem, IWorkoutItem };
