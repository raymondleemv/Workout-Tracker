import express from 'express';
import * as database from '../database/workout.database';

const router = express.Router();

router.post('/add', async (req, res) => {
	try {
		await database.addWorkout(req.body);
	} catch (e) {
		res.status(400).send(e);
	}
	res.send('add workout successful');
});

router.post('/get', async (req, res) => {
	try {
		await database.getWorkoutsByUserId(req.body);
	} catch (e) {
		res.status(400).send(e);
	}
	res.send('get workouts successful');
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
