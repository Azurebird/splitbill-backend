import { buildResponse, buildErrorResponse } from '../../utils/api-response';
import createAction from '../actions/create.action';

export default async function getGroups(req, res) {
  try {
    const { profileId, name } = req.body;
    const groups = await createAction({ profileId, name });
    return buildResponse(res, groups);
  } catch (error) {
    return buildErrorResponse(res, error);
  }
}
