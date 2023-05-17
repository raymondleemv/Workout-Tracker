const express = require('express');
const databaseConfig = require('../database/config.database');
const exerciseRoutes = require('../routes/exercises.route');

const app = express();

databaseConfig();

app.use('/api/exercises', exerciseRoutes);

app.listen(3002, () => {
	console.log('app listenting on port 3002.');
});
