import createLogin from '../../auth/components/create-login.component';
import User from '../model/user.model';
import { BadRequestError } from '../../utils/errors';

export default async function create({ email, password }) {
  const user = await User.findOne({ email });
  if (user) {
    throw new BadRequestError('User already exists');
  }

  const { userId } = await User.create({ email });
  const { login } = await createLogin({ userId, email, password });
  return { user: login };
}
