import express from 'express';
import getGroups from './controller/get.controller';
import createGroup from './controller/create.controller';

const router = express.Router();

/**
 * Tries to log in an user
 */
router.get('/:profileId', getGroups);

router.post('/', createGroup);

export default router;
