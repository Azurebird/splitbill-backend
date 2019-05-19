import { buildResponse, buildErrorResponse } from '../../utils/api-response';
import getHistoryAction from '../actions/get-history.action';

export default async function getGroups(req, res) {
  try {
    const { groupId } = req.body;
    const { history } = await getHistoryAction({ groupId });
    return buildResponse(res, { history });
  } catch (error) {
    return buildErrorResponse(res, error);
  }
}
