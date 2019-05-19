import express from 'express';
import getGroups from './controller/get.controller';
import createGroup from './controller/create.controller';
import getGroupHistory from './controller/get-history.controller';
import verifyToken from '../auth/actions/verifyToken';

const router = express.Router();

router.get('/', verifyToken, getGroups);

router.get('/:groupId', verifyToken, getGroupHistory);

router.post('/', createGroup);

export default router;
