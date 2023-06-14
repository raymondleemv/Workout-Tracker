import express from 'express';
import * as database from '../database/exercise.database';

const router = express.Router();

router.post('/add', async (req, res) => {
	try {
		await database.addExercise(req.body);
	} catch (e) {
		res.status(400).send(e);
	}
	res.send('add exercise successful');
});

router.post('/get', async (req, res) => {
	try {
		await database.getExercisesByUserId(req.body);
	} catch (e) {
		res.status(400).send(e);
	}
	res.send('get exercises successful');
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

export default router;
