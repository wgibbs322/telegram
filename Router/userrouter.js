import express from 'express';
import { createUser, getUsers } from '../controllers/UserController.js';

const router = express.Router();

router.post('/create', createUser);
router.get('/get', getUsers);

export default router;