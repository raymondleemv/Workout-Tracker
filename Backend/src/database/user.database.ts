import { User, IUser } from '../models/User.model';
import { Types } from 'mongoose';

async function addUser(data: IUser): Promise<IUser> {
	return await User.create(data);
}

async function getUserByUserId(userID: String) {
	return await User.find({ user: userID });
}

async function editUser(user: any) {
	return await User.findOneAndUpdate({ _id: user._id }, user);
}

async function deleteUser(userID: Types.ObjectId) {
	return await User.deleteOne({ _id: userID });
}

export { addUser, getUserByUserId, editUser, deleteUser };
