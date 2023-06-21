import { Link, Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import Login from './Login';
import Signup from './Signup';

function Home() {
	const homeView = (
		<>
			<p>
				Tired of losing track of your workout progress and not knowing how much
				you have progressed?
			</p>
			<p>Start tracking your workout progress today!</p>
			<Link to="login">Login</Link>
		</>
	);
	return (
		<>
			<Header showHamburger={false} />
			<main>
				<Routes>
					<Route path="login" element={<Login />}></Route>
					<Route path="signup" element={<Signup />}></Route>
					<Route index element={homeView}></Route>
				</Routes>
			</main>
		</>
	);
}

export default Home;
