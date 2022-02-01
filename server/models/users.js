//Creating a Database Schema for Users
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String, required: true, unique: true, index: true, dropDups: true,
  },
  number: {type: Number, required: true, unique: true, length: 10},
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

export default User;