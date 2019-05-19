import { buildResponse, buildErrorResponse } from '../../utils/api-response';
import createAction from '../actions/create.action';

export default async function getGroups(req, res) {
  try {
    const { profileId } = req.user;
    const { name } = req.body;
    const { group } = await createAction({ profileId, name });
    return buildResponse(res, { group });
  } catch (error) {
    return buildErrorResponse(res, error);
  }
}
