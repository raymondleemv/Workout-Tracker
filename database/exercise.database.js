const Exercise = require('../models/Exercise.model');

async function addExercise(data) {
	return await Exercise.create(data);
}

async function getExercisesByUserId(userID) {
	return await Exercise.find({ user: userID });
}

async function editExercise(exercise) {
	return await Exercise.findOneAndUpdate({ _id: exercise._id }, exercise);
}

async function deleteExercise(exerciseID) {
	return await Exercise.deleteOne({ _id: exerciseID });
}

module.exports = {
	addExercise,
	getExercisesByUserId,
	editExercise,
	deleteExercise,
};
