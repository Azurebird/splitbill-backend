import jwt from 'jsonwebtoken';
import env from '../../../server/config/environment';
import { buildResponse, buildErrorResponse } from '../../utils/api-response';

export default async function verifyToken(req, res, next) {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return buildResponse(res, {}, 401);
    }

    const authSplit = authorization.split(' ');
    const authType = authSplit[0];
    const authToken = authSplit[1];
    if (authType === 'Bearer') {
      const response = await jwt.verify(authToken, env.jwt.secret);
      req.user = response;
    }
    return next();
  } catch (error) {
    error.statusCode = 401;
    error.message = 'Unauthorized';
    return buildErrorResponse(res, error);
  }
}
