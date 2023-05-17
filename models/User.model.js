const mongoose = require('mongoose');

const Schema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' }],
		workouts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Workout' }],
	},
	{ collection: 'users' }
);

const User = mongoose.model('User', Schema);

module.exports = User;
