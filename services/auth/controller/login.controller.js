import { buildResponse, buildErrorResponse } from '../../utils/api-response';
import doLogin from '../actions/login.action';

export default async function login(req, res) {
  try {
    const { credentials } = req.body;
    const { email, password } = credentials;
    const { user } = await doLogin({ email, password });
    return buildResponse(res, { user });
  } catch (error) {
    return buildErrorResponse(res, error);
  }
}
