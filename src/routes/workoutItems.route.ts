import express from 'express';
import * as database from '../database/workoutItem.database';

const router = express.Router();

router.post('/add', async (req, res) => {
	try {
		await database.addWorkoutItem(req.body);
	} catch (e) {
		res.status(400).send(e);
	}
	res.send('add workoutItem successful');
});

router.post('/get', async (req, res) => {
	try {
		await database.getWorkoutItemsByWorkoutId(req.body);
	} catch (e) {
		res.status(400).send(e);
	}
	res.send('get workoutItems successful');
});

router.post('/edit', async (req, res) => {
	try {
		await database.editWorkoutItem(req.body);
	} catch (e) {
		res.status(400).send(e);
	}
	res.send('edit workoutItem successful');
});

router.post('/delete', async (req, res) => {
	try {
		await database.deleteWorkoutItem(req.body);
	} catch (e) {
		res.status(400).send(e);
	}
	res.send('delete workoutItem successful');
});

export default router;
