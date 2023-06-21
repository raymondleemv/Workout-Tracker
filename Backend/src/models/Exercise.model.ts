import { Schema, model, Types, Document } from 'mongoose';

interface IExercise extends Document {
	name: string;
	exercise_type: string;
	user?: Types.ObjectId;
}

const exerciseSchema = new Schema<IExercise>(
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
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{ collection: 'exercises', strict: 'throw' }
);

const Exercise = model('Exercise', exerciseSchema);

export { Exercise, IExercise };
