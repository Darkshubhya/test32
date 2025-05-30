import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  position: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);

export default User;
