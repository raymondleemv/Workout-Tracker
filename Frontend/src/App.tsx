import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
	return (
		<div className="App">
			<h1>Workout Tracker</h1>
			<h2>Signup</h2>
			<Signup />
			<h2>Login</h2>
			<Login />
		</div>
	);
}

export default App;
