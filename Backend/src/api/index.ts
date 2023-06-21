import express from 'express';
import databaseConfig from '../database/config.database';
import exerciseRoutes from '../routes/exercises.route';
import userRoutes from '../routes/users.route';
import workoutRoutes from '../routes/workouts.route';
import workoutItemRoutes from '../routes/workoutItems.route';
import passport from 'passport';
import authRoutes, { ensureLoggedIn } from '../routes/auth.route';
import MongoStore from 'connect-mongo';
import cors from 'cors';
import session from 'express-session';

const app = express();

app.use(express.json());
app.use(
	cors({
		origin:
			process.env.PRODUCTION === 'true'
				? [
						'https://workout-tracker.raymondleemv.com',
						'https://workout-tracker-git-development-raymondleemv.vercel.app',
				  ]
				: 'http://localhost:5173',
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
app.get('/api', (req, res) => {
	res.send('hello world');
});
app.use('/api/auth', authRoutes);
app.get('/api/testing', (req, res) => {
	res.send('hello world');
});

app.use(ensureLoggedIn);
app.use('/api/exercises', exerciseRoutes);
app.use('/api/users', userRoutes);
app.use('/api/workouts', workoutRoutes);
app.use('/api/workout-items', workoutItemRoutes);

app.listen(3002, () => {
	console.log('app listenting on port 3002.');
});

export default app;
