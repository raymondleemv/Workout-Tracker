import express from 'express';
import databaseConfig from '../database/config.database';
import exerciseRoutes from '../routes/exercises.route';
import userRoutes from '../routes/users.route';
import workoutRoutes from '../routes/workouts.route';
import workoutItemRoutes from '../routes/workoutItems.route';

const app = express();

databaseConfig();

app.use('/api/exercises', exerciseRoutes);
app.use('/api/users', userRoutes);
app.use('/api/workouts', workoutRoutes);
app.use('/api/workout-items', workoutItemRoutes);

app.listen(3002, () => {
	console.log('app listenting on port 3002.');
});
