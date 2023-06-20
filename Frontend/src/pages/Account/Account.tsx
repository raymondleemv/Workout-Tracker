import { useEffect } from 'react';
import { isAuthenticated } from '../../utils/auth';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Exercise from './Exercise';

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
			<Routes>
				<Route path="exercises/*" element={<Exercise />}></Route>
			</Routes>
		</>
	);
}

export default Account;
