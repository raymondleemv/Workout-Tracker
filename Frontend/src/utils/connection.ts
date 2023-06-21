// Configure backend server url depending on environment vairable
let backendServerUrl: string;
if (import.meta.env.VITE_DEPLOY === 'true') {
	backendServerUrl = 'https://workout-tracker-backend-js.vercel.app';
} else if (import.meta.env.PROD) {
	backendServerUrl = 'https://workout-tracker-backend-js.vercel.app';
} else {
	backendServerUrl = 'http://localhost:3002';
}

export { backendServerUrl };
