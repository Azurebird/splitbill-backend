import express from 'express';
import loginProfile from './actions/login';

const router = express.Router();

/**
 * Creates a new profile
 */
router.post('/login', loginProfile);

export default router;
