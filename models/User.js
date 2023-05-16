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
		exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }],
		workouts: [{ type: Schema.Types.ObjectId, ref: 'Workout' }],
	},
	{ collection: 'users' }
);

const User = mongoose.model('User', Schema);

export default User;
