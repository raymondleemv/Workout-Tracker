import express from 'express';
import * as database from '../database/workoutItem.database';
import { WorkoutItem } from '../models/WorkoutItem.model';

const router = express.Router();

router.post('/add', async (req, res) => {
	const workoutItem = new WorkoutItem({
		weight: req.body.weight,
		reps: req.body.reps,
		workout: req.body.workout,
		exercise: req.body.exerciseID,
	});
	try {
		await database.addWorkoutItem(workoutItem);
	} catch (e) {
		res.status(400).send(e);
	}
	res.send('add workoutItem successful');
});

router.post('/getWorkoutItemsByWorkoutId', async (req, res) => {
	try {
		const workoutItems = await database.getWorkoutItemsByWorkoutId(
			req.body._id
		);
		res.send(workoutItems);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.post('/edit', async (req, res) => {
	const workoutItem = new WorkoutItem({
		_id: req.body._id,
		weight: req.body.weight,
		reps: req.body.reps,
		workout: req.body.workout,
		exercise: req.body.exerciseID,
	});
	try {
		await database.editWorkoutItem(workoutItem);
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
