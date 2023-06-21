import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

function init() {
	mongoose
		.connect(process.env.MONGODB_URI!)
		.then(() => console.log('connected'))
		.catch((err: any) => console.log(err));
}

export default init;
