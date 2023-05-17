const express = require('express');
const database = require('../database/exercise.database');

const router = express.Router();

router.get('/add', async (req, res) => {
	try {
		await database.addExercise(req.body);
	} catch (e) {
		res.status(400).send(e);
	}
	res.send('add exercise successful');
});

module.exports = router;
