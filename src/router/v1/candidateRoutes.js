import express from 'express';
import { registerCandidate } from '../../controllers/candidate';
import validatePayload from '../../middlewares';
const router = express.Router();

router.post('/register', validatePayload, registerCandidate);

export default router;
