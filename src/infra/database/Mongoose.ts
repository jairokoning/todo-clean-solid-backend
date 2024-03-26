import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const todoSchema = new mongoose.Schema({
  id: { type: String, default: uuidv4 },
  title: String,
  deadline: Date,
  done: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now }
});

const userSchema = new mongoose.Schema({
  id: { type: String, default: uuidv4 },
  name: String,
  username: { type: String, unique: true },
  pro: { type: Boolean, default: false },
  todos: [todoSchema]
});

const UserModelSchema = mongoose.model('User', userSchema);

export default UserModelSchema;
