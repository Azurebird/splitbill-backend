import mongoose, { Schema } from 'mongoose';
import shortid from 'shortid';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import env from '../../../server/config/environment';

const LoginSchema = new Schema(
  {
    loginId: { type: String, default: shortid.generate },
    userId: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    passwordHash: { type: String, required: true }
  },
  { timestamps: true }
);

function isValidPassword(password) {
  return bcrypt.compareSync(password, this.passwordHash);
}

function generateJWT() {
  return jwt.sign(
    {
      userId: this.userId
    },
    env.jwt.secret
  );
}

function toAuthJSON() {
  return {
    token: this.generateJWT()
  };
}

LoginSchema.methods = {
  isValidPassword,
  generateJWT,
  toAuthJSON
};

const Login = mongoose.model('login', LoginSchema);

export default Login;
