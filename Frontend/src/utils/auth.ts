// Configure backend server url depending on environment vairable
let backendServerUrl: string;
if (import.meta.env.VITE_DEPLOY === 'true') {
	backendServerUrl = '';
} else if (import.meta.env.PROD) {
	backendServerUrl = '';
} else {
	backendServerUrl = 'http://localhost:3002';
}

// Did not factor fetch in signup() and login() for flexibility:
// signup() might have more inputs in the future
async function signup(email: string, password: string) {
	const data = {
		email: email,
		password: password,
	};
	const response = await fetch(backendServerUrl + '/api/auth/signup', {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	return response;
}

async function login(email: string, password: string) {
	const data = {
		email: email,
		password: password,
	};
	const response = await fetch(backendServerUrl + '/api/auth/login', {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	return response;
}

export { signup, login };
