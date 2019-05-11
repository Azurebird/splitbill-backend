import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose, { Schema } from 'mongoose';
import shortid from 'shortid';
import env from '../../../server/config/environment';

const ProfileSchema = new Schema(
  {
    profileId: { type: String, default: shortid.generate },
    email: { type: String, required: true, unique: true },
    hashPassword: { type: String, required: true }
  },
  { timestamps: true }
);

function isValidPassword(password) {
  return bcrypt.compareSync(password, this.hashPassword);
}

function generateJWT() {
  return jwt.sign(
    {
      email: this.email
    },
    env.jwt.secret
  );
}

function toAuthJSON() {
  return {
    email: this.email,
    token: this.generateJWT()
  };
}

ProfileSchema.methods = {
  isValidPassword,
  generateJWT,
  toAuthJSON
};

const Profile = mongoose.model('profile', ProfileSchema);

export default Profile;
