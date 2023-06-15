import { login } from '../utils/auth';

function Login() {
	let submitFormHandler = async (e: any) => {
		e.preventDefault();
		const response = await login(e.target.email.value, e.target.password.value);
		const responseText = await response.text();
		console.log(responseText);
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
