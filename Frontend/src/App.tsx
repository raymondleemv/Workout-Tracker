import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account/Account';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/*" element={<Home />}></Route>
				<Route path="/account/*" element={<Account />}>
					<Route path="*" element={<Account />} />
				</Route>
				{/* <Route path="/login" element={<Login />}></Route>
				<Route path="/signup" element={<Signup />}></Route> */}
			</Routes>
		</div>
	);
}

export default App;
