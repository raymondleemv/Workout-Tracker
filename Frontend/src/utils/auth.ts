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
	method: 'GET' | 'POST',
	endpoint: string,
	data?: SignupData | LoginData
) {
	const response = await fetch(backendAuthRoutesUrl + endpoint, {
		method: method,
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
	const response = await fetchBackendAuthRoutes('POST', '/signup', data);
	return response;
}

async function login(email: string, password: string) {
	const data: LoginData = {
		email: email,
		password: password,
	};
	const response = await fetchBackendAuthRoutes('POST', '/login', data);
	return response;
}

async function isAuthenticated() {
	const response = await fetchBackendAuthRoutes('GET', '/status');
	return response.status === 200 ? true : false;
}

export { signup, login, isAuthenticated };
