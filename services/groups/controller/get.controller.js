import { buildResponse, buildErrorResponse } from '../../utils/api-response';
import getGroupsAction from '../actions/get-groups.action';

export default async function getGroups(req, res) {
  try {
    const { profileId } = req.user;
    const groups = await getGroupsAction({ profileId });
    return buildResponse(res, groups);
  } catch (error) {
    return buildErrorResponse(res, error);
  }
}
