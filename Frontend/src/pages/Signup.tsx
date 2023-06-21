import { useNavigate } from 'react-router';
import { signup } from '../utils/auth';
export default function Signup() {
	const navigate = useNavigate();
	let submitFormHandler = async (e: any) => {
		e.preventDefault();
		const response = await signup(
			e.target.email.value,
			e.target.password.value
		);
		navigate('/login');
		// const responseText = await response.text();
	};
	return (
		<form onSubmit={(e) => submitFormHandler(e)}>
			<div className="form__field">
				<label htmlFor="email">Email:</label>
				<input name="email" type="email" required />
			</div>
			<div className="form__field">
				<label htmlFor="password">Password:</label>
				<input name="password" type="password" required />
			</div>
			<button type="submit">Sign up</button>
		</form>
	);
}
