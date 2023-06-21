import express from 'express';
import * as database from '../database/workout.database';
import { Workout } from '../models/Workout.model';

const router = express.Router();

router.post('/add', async (req, res) => {
	const user: any = req.user;
	const workout = new Workout({
		date: req.body.date,
		user: user.id,
	});
	try {
		await database.addWorkout(workout);
	} catch (e) {
		res.status(400).send(e);
	}
	res.send('add workout successful');
});

router.get('/getWorkoutsByUserId', async (req, res) => {
	const user: any = req.user;
	try {
		const workouts = await database.getWorkoutsByUserId(user.id);
		res.send(workouts);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.post('/edit', async (req, res) => {
	try {
		await database.editWorkout(req.body);
	} catch (e) {
		res.status(400).send(e);
	}
	res.send('edit workout successful');
});

router.post('/delete', async (req, res) => {
	try {
		await database.deleteWorkout(req.body);
	} catch (e) {
		res.status(400).send(e);
	}
	res.send('delete workout successful');
});

export default router;
