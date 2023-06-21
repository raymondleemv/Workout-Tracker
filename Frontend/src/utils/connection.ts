// Configure backend server url depending on environment vairable
let backendServerUrl: string;
if (import.meta.env.VITE_DEPLOY === 'true') {
	backendServerUrl = '';
} else if (import.meta.env.PROD) {
	backendServerUrl = '';
} else {
	backendServerUrl = 'http://localhost:3002';
}

export { backendServerUrl };
