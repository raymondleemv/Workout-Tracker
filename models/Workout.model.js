const mongoose = require('mongoose');

const Schema = new mongoose.Schema(
	{
		date: {
			type: String,
			required: true,
		},
		workout_items: [
			{ type: mongoose.Schema.Types.ObjectId, ref: 'WorkoutItem' },
		],
		user: {
			type: Schema.Types.ObejctId,
			ref: 'User',
		},
	},
	{ collection: 'Workouts' }
);

const Workout = mongoose.model('Workout', Schema);

module.exports = Workout;
