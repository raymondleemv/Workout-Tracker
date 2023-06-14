import express from 'express';
import databaseConfig from '../database/config.database';
import exerciseRoutes from '../routes/exercises.route';
import userRoutes from '../routes/users.route';
import workoutRoutes from '../routes/workouts.route';
import workoutItemRoutes from '../routes/workoutItems.route';
import passport from 'passport';
import authRoutes from '../routes/auth.route';
import MongoStore from 'connect-mongo';
import cors from 'cors';
import session from 'express-session';

const app = express();

app.use(express.json());
app.use(
	cors({
		origin: 'http://localhost:3000',
		credentials: true,
	})
);

databaseConfig();

app.use(
	session({
		secret: process.env.SESSION_SECRET!,
		resave: false,
		saveUninitialized: false,
		store: MongoStore.create({
			mongoUrl: process.env.MONGODB_URI,
		}),
	})
);
app.use(passport.authenticate('session'));
app.use('/api/auth', authRoutes);
app.use('/api/exercises', exerciseRoutes);
app.use('/api/users', userRoutes);
app.use('/api/workouts', workoutRoutes);
app.use('/api/workout-items', workoutItemRoutes);

app.listen(3002, () => {
	console.log('app listenting on port 3002.');
});
