import mongoose, { Schema } from 'mongoose';
import shortid from 'shortid';

const UserSchema = new Schema(
  {
    userId: { type: String, default: shortid.generate },
    email: { type: String, required: true, unique: true }
  },
  { timestamps: true }
);

const User = mongoose.model('user', UserSchema);

export default User;
