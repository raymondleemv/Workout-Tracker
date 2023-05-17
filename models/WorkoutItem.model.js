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
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Workout',
		},
		exercise: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Exercise',
		},
	},
	{ collection: 'Workouts' }
);

const WorkoutItem = mongoose.model('WorkoutItem', Schema);

module.exports = WorkoutItem;
