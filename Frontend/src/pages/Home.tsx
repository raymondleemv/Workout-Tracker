import { Link } from 'react-router-dom';

function Home() {
	return (
		<>
			<h1>Workout Tracker</h1>
			<p>Start tracking your workout progress today</p>
			<Link to="login">Login</Link>
		</>
	);
}

export default Home;
