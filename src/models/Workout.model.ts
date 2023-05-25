import { Schema, model, Types } from 'mongoose';

interface IWorkout {
	_id: Types.ObjectId;
	date: string;
	workout_items: Array<Types.ObjectId>;
	user: Types.ObjectId;
}

const workoutSchema = new Schema<IWorkout>(
	{
		date: {
			type: String,
			required: true,
		},
		workout_items: [{ type: Schema.Types.ObjectId, ref: 'WorkoutItem' }],
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{ collection: 'Workouts' }
);

const Workout = model('Workout', workoutSchema);

export default Workout;
