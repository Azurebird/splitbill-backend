import { buildResponse, buildErrorResponse } from '../../utils/api-response';
import createAction from '../actions/create.action';

export default async function create(req, res) {
  try {
    const { credentials } = req.body;
    const { email, password } = credentials;
    const { user } = await createAction({ email, password });
    return buildResponse(res, { user });
  } catch (error) {
    return buildErrorResponse(res, error);
  }
}
