import { useNavigate } from 'react-router-dom';
import { isAuthenticated, login } from '../utils/auth';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
		if (response.status === 200) {
			navigate('/account/workouts');
		}
		const responseText = await response.text();
	};

	return (
		<>
			<form onSubmit={(e) => submitFormHandler(e)}>
				<div className="form__field">
					<label htmlFor="email">Email:</label>
					<input name="email" type="email" required />
				</div>
				<div className="form__field">
					<label htmlFor="password">Password:</label>
					<input name="password" type="password" required />
				</div>
				<button type="submit">Login</button>
			</form>
			<p>
				Dont have an account yet? <Link to="/signup">Sign up</Link>
			</p>
		</>
	);
}

export default Login;
