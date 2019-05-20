import bcrypt from 'bcrypt';
import Login from '../model/login.model';
import { BadRequestError } from '../../utils/errors';

export default async function createLogin({ userId, email, password }) {
  let login = await Login.findOne({ userId });
  if (login) {
    throw new BadRequestError('User already exists');
  }

  login = await Login.create({
    userId,
    email,
    passwordHash: bcrypt.hashSync(password, 10)
  });

  return { login: login.toAuthJSON() };
}
