import { buildResponse, buildErrorResponse } from '../../utils/api-response';
import getExpensesAction from '../actions/get-expenses.action';

export default async function getExpensesController(req, res) {
  try {
    const { groupId } = req.body;
    const { history } = await getExpensesAction({ groupId });
    return buildResponse(res, { history });
  } catch (error) {
    return buildErrorResponse(res, error);
  }
}
