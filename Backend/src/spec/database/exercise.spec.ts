import databaseConfig from '../../database/config.database';
import * as database from '../../database/exercise.database';
import { Exercise } from '../../models/Exercise.model';
import { Types } from 'mongoose';

databaseConfig();

describe('database - addExercise', () => {
	let toBeDeletedExerciseID: Types.ObjectId;

	afterEach(async () => {
		await database.deleteExercise(toBeDeletedExerciseID);
	});

	it('Test to pass - should add an exercise to the database', async () => {
		const exercise = new Exercise({
			name: 'testing',
			exercise_type: 'testing',
		});
		const document = await database.addExercise(exercise);
		const response = await Exercise.exists({ _id: document._id });
		expect(response).not.toBe(null);
		toBeDeletedExerciseID = exercise._id;
	});

	it('Test to fail - should not add an exercise to the database if name is not provided', async () => {
		const exercise = new Exercise({
			exercise_type: 'testing',
		});
		await expectAsync(database.addExercise(exercise)).toBeRejected();
		toBeDeletedExerciseID = exercise._id;
	});

	it('Test to fail - should not add an exercise to the database if exercise type is not provided', async () => {
		const exercise = new Exercise({
			name: 'testing',
		});
		await expectAsync(database.addExercise(exercise)).toBeRejected();
		toBeDeletedExerciseID = exercise._id;
	});

	it('Test to fail - should not add an exercise to the database if name and exercise type are not provided', async () => {
		const exercise = new Exercise({});
		await expectAsync(database.addExercise(exercise)).toBeRejected();
		toBeDeletedExerciseID = exercise._id;
	});

	it('Test to fail - should not add an exercise to the database if the type of name cannot be cast to string', async () => {
		const exercise = new Exercise({
			name: {},
			exercise_type: 'testing',
		});
		await expectAsync(database.addExercise(exercise)).toBeRejected();
		toBeDeletedExerciseID = exercise._id;
	});

	it('Test to fail - should not add an exercise to the database if the type of name cannot be cast to string', async () => {
		const exercise = new Exercise({
			name: null,
			exercise_type: 'testing',
		});
		await expectAsync(database.addExercise(exercise)).toBeRejected();
		toBeDeletedExerciseID = exercise._id;
	});

	it('Test to fail - should not add an exercise to the database if the type of name cannot be cast to string', async () => {
		const exercise = new Exercise({
			name: undefined,
			exercise_type: 'testing',
		});
		await expectAsync(database.addExercise(exercise)).toBeRejected();
		toBeDeletedExerciseID = exercise._id;
	});
});
