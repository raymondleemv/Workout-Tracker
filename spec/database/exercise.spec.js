const databaseConfig = require('../../database/config.database');
const database = require('../../database/exercise.database');
const Exercise = require('../../models/Exercise.model');

databaseConfig();

describe('database - addExercise', () => {
	it('should add an exercise to the database', async () => {
		const document = await database.addExercise({
			name: 'testing',
			exercise_type: 'testing',
		});
		const response = await Exercise.exists({ _id: document._id });
		expect(response).not.toBe(null);
		await database.deleteExercise({ _id: document._id });
	});

	it('should not add an exercise to the database if name is not provided', async () => {
		await expectAsync(
			database.addExercise({
				exercise_type: 'testing',
			})
		).toBeRejected();
	});

	it('should not add an exercise to the database if name is not provided', async () => {
		await expectAsync(
			database.addExercise({
				name: 'testing',
			})
		).toBeRejected();
	});
});
