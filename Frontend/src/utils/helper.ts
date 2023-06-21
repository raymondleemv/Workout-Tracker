class Status {
	// Add random key so that component rerenders even with the same status messages
	key: number;
	message: string;
	constructor(message: string) {
		this.message = message;
		this.key = Math.floor(Math.random() * 100000);
	}
}

export { Status };
