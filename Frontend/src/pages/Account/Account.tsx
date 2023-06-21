import { useEffect } from 'react';
import { isAuthenticated } from '../../utils/auth';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Exercise from './Exercise';
import Workout from './Workout';

function Account() {
	const navigate = useNavigate();
	useEffect(() => {
		const redirectIfNotLoggedIn = async () => {
			const authStatus = await isAuthenticated();
			if (!authStatus) {
				navigate('/login');
			}
		};
		redirectIfNotLoggedIn();
	}, []);
	return (
		<>
			<Header showHamburger={true} />
			<main>
				<Routes>
					<Route path="exercises/*" element={<Exercise />}></Route>
					<Route path="workouts/*" element={<Workout />}></Route>
				</Routes>
			</main>
		</>
	);
}

export default Account;
