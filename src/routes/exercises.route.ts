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

export default router;
