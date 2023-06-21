import { useNavigate } from 'react-router-dom';
import { isAuthenticated, login } from '../utils/auth';
import { useEffect } from 'react';

function Login() {
	const navigate = useNavigate();

	useEffect(() => {
		const redirectIfNotLoggedIn = async () => {
			const authStatus = await isAuthenticated();
			if (authStatus) {
				navigate('/account/workouts');
			}
		};
		redirectIfNotLoggedIn();
	}, []);

	let submitFormHandler = async (e: any) => {
		e.preventDefault();
		const response = await login(e.target.email.value, e.target.password.value);
		const responseText = await response.text();
	};

	return (
		<form onSubmit={(e) => submitFormHandler(e)}>
			<label htmlFor="email">Email:</label>
			<input name="email" type="email" required />
			<label htmlFor="password">Password:</label>
			<input name="password" type="password" required />
			<button type="submit">Login</button>
		</form>
	);
}

export default Login;
