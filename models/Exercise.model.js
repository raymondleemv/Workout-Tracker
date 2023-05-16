const mongoose = require('mongoose');

const Schema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		exercise_type: {
			type: String,
			required: true,
		},
		user: {
			type: Schema.Types.ObejctId,
			ref: 'User',
		},
	},
	{ collection: 'exercises' }
);

const Exercise = mongoose.model('Exercise', Schema);

export default Exercise;
