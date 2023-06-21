import express from 'express';
import * as database from '../database/user.database';

const router = express.Router();

router.post('/add', async (req, res) => {
	try {
		await database.addUser(req.body);
	} catch (e) {
		res.status(400).send(e);
	}
	res.send('add user successful');
});

router.post('/get', async (req, res) => {
	try {
		await database.getUserByUserId(req.body);
	} catch (e) {
		res.status(400).send(e);
	}
	res.send('get user successful');
});

router.post('/edit', async (req, res) => {
	try {
		await database.editUser(req.body);
	} catch (e) {
		res.status(400).send(e);
	}
	res.send('edit user successful');
});

router.post('/delete', async (req, res) => {
	try {
		await database.deleteUser(req.body);
	} catch (e) {
		res.status(400).send(e);
	}
	res.send('delete user successful');
});

export default router;
