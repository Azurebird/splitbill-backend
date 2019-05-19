import express from 'express';
import getGroups from './controller/get.controller';
import createGroup from './controller/create.controller';
import getExpensesController from './controller/get-expenses.controller';
import verifyToken from '../auth/actions/verifyToken';

const router = express.Router();

router.get('/', verifyToken, getGroups);

router.get('/:groupId/expenses', verifyToken, getExpensesController);

router.post('/', verifyToken, createGroup);

export default router;
