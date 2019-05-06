import express from 'express';
import loginProfile from './actions/login';
import createProfile from './actions/create';

const router = express.Router();

router.post('/', createProfile);

/**
 * Tries to log in an user
 */
router.post('/login', loginProfile);

export default router;
