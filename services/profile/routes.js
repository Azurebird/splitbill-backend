import express from 'express';
import createUser from './controller/create.controller';

const router = express.Router();

router.post('/', createUser);

export default router;
