import express from 'express';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import { User } from '../models/User.model';

const router = express.Router();

passport.use(
	new LocalStrategy({ usernameField: 'email' }, async function verify(
		username,
		password,
		cb
	) {
		try {
			console.log('local strategy');
			const user = await User.findOne({ email: username });
			if (!user) {
				return cb(null, false, { message: 'No user with that email' });
			}
			const authenticated = await bcrypt.compare(password, user.password);
			if (authenticated) {
				return cb(null, user);
			} else {
				return cb(null, false, { message: 'Incorrect Passowrd' });
			}
		} catch (e) {
			return cb(e);
		}
	})
);

passport.serializeUser(function (user: any, cb) {
	cb(null, { id: user._id, email: user.email });
});

passport.deserializeUser(function (user: any, cb) {
	return cb(null, user);
});

router.post(
	'/login',
	passport.authenticate('local', {
		successReturnToOrRedirect: '/api/auth/login-success',
		failureRedirect: '/api/auth/login-failed',
		failureMessage: true,
	})
);

router.get('/login-success', (req, res) => {
	res.send('login successful');
});

router.get('/login-failed', (req, res) => {
	res.status(400).send('login failed');
});

router.get('/logout', function (req, res) {
	req.logout(function (err) {
		if (err) {
			return res.status(400).send(err);
		}
		return res.send('You have successfully logged out.');
	});
});

router.post('/signup', async function (req, res) {
	const hashedPassword = await bcrypt.hash(req.body.password, 10);
	try {
		await User.create({
			email: req.body.email,
			password: hashedPassword,
		});
	} catch (e) {
		return res.status(400).send(`Error: ${e}`);
	}
	return res.send('User created successfully');
});

let ensureLoggedIn = (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
): void => {
	if (!req.isAuthenticated()) {
		res.status(400).send('Not Authorized. Please log in first.');
		return;
	}
	next();
};

router.get('/status', ensureLoggedIn, (req, res) => {
	res.send('Authorized');
});

export default router;
export { ensureLoggedIn };
