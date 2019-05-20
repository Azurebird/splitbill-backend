import Login from '../model/login.model';
import { BadRequestError } from '../../utils/errors';

export default async function doLogin({ email, password }) {
  const login = await Login.findOne({ email });

  if (!login || !login.isValidPassword(password)) {
    throw new BadRequestError('Invalid Credentials');
  }

  return { user: login.toAuthJSON() };
}
