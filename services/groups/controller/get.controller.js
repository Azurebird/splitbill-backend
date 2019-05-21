import { buildResponse, buildErrorResponse } from '../../utils/api-response';
import getGroupsAction from '../actions/get.action';

export default async function getGroups(req, res) {
  try {
    const { userId } = req.user;
    const { groups } = await getGroupsAction({ userId });
    return buildResponse(res, { groups });
  } catch (error) {
    return buildErrorResponse(res, error);
  }
}
