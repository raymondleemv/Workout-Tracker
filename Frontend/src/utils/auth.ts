import { backendServerUrl } from './connection';

type SignupData = {
	email: string;
	password: string;
};

type LoginData = {
	email: string;
	password: string;
};

const backendAuthRoutesUrl = backendServerUrl + '/api/auth';
async function fetchBackendAuthRoutes(
	endpoint: string,
	data: SignupData | LoginData
) {
	const response = await fetch(backendAuthRoutesUrl + endpoint, {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	return response;
}

async function signup(email: string, password: string) {
	const data: SignupData = {
		email: email,
		password: password,
	};
	const response = await fetchBackendAuthRoutes('/signup', data);
	return response;
}

async function login(email: string, password: string) {
	const data: LoginData = {
		email: email,
		password: password,
	};
	const response = await fetchBackendAuthRoutes('/login', data);
	return response;
}

export { signup, login };
