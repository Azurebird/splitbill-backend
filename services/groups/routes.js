import express from 'express';
import getGroups from './controller/get.controller';
import createGroup from './controller/create.controller';
import verifyToken from '../auth/actions/verifyToken';

const router = express.Router();

/**
 * Tries to log in an user
 */
router.get('/', verifyToken, getGroups);

router.post('/', createGroup);

export default router;
