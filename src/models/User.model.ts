import { Schema, model, Types, Document } from 'mongoose';

interface IUser extends Document {
	email: string;
	password: string;
	exercises: Array<Types.ObjectId>;
	workouts: Array<Types.ObjectId>;
}

const userSchema = new Schema<IUser>(
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

const User = model('User', userSchema);

export { User, IUser };
