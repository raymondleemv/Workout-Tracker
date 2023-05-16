const mongoose = require('mongoose');

const Schema = new mongoose.Schema(
	{
		weight: {
			type: Number,
		},
		reps: {
			type: Number,
		},
		workout: {
			type: Schema.Types.ObejctId,
			ref: 'Workout',
		},
		exercise: {
			type: Schema.Types.ObejctId,
			ref: 'Exercise',
		},
	},
	{ collection: 'Workouts' }
);

const WorkoutItem = mongoose.model('WorkoutItem', Schema);

export default WorkoutItem;
