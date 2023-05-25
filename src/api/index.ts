import express from 'express';
import databaseConfig from '../database/config.database';
import exerciseRoutes from '../routes/exercises.route';

const app = express();

databaseConfig();

app.use('/api/exercises', exerciseRoutes);

app.listen(3002, () => {
	console.log('app listenting on port 3002.');
});
