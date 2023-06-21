import express from 'express';
import * as database from '../database/exercise.database';
import { Exercise } from '../models/Exercise.model';

const router = express.Router();

router.post('/add', async (req, res) => {
	const user: any = req.user;
	const exercise = new Exercise({
		name: req.body.name,
		exercise_type: req.body.exercise_type,
		user: user.id,
	});
	try {
		await database.addExercise(exercise);
	} catch (e) {
		res.status(400).send(e);
	}
	res.send('add exercise successful');
});

router.get('/getExercisesByUserId', async (req, res) => {
	const user: any = req.user;
	try {
		const exercises = await database.getExercisesByUserId(user.id);
		res.send(exercises);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.post('/edit', async (req, res) => {
	try {
		await database.editExercise(req.body);
	} catch (e) {
		res.status(400).send(e);
	}
	res.send('edit exercise successful');
});

router.post('/delete', async (req, res) => {
	try {
		await database.deleteExercise(req.body);
	} catch (e) {
		res.status(400).send(e);
	}
	res.send('delete exercise successful');
});

router.get('/getExerciseTypes', async (req, res) => {
	const user: any = req.user;
	try {
		const exerciseTypes = await database.getExerciseTypes(user.id);
		res.send(exerciseTypes);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.post('/getExercisesByExerciseType', async (req, res) => {
	const user: any = req.user;
	try {
		const exerciseTypes = await database.getExercisesByExerciseType(
			user.id,
			req.body.exercise_type
		);
		res.send(exerciseTypes);
	} catch (e) {
		res.status(400).send(e);
	}
});

export default router;
