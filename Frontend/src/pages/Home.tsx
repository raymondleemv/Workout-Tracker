import Hamburger from '../components/Hamburger/HamburgerMenu';
import ExerciseAddEditForm from './Account/ExerciseAddEditForm';
import Login from './Login';
import Signup from './Signup';
function Home() {
	return (
		<>
			<h1>Workout Tracker</h1>
			<h2>Signup</h2>
			<Signup />
			<h2>Login</h2>
			<Login />
			<h2>Add Exercise</h2>
			<ExerciseAddEditForm />
			<Hamburger />
		</>
	);
}

export default Home;
