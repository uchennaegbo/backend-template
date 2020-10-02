import express from 'express';
import { registerCandidate, getCandidate, getAllRefereesByCanEmail } from '../../controllers/candidate';
import { onboardCandidateSchema } from '../../middlewares/validationSchema/candidate';

import validatePayload from '../../middlewares';

const router = express.Router();

router.post(
  '/register',
  validatePayload(onboardCandidateSchema),
  registerCandidate
);

router.get('/get-candidate/:id', getCandidate);
router.get('/search', getAllRefereesByCanEmail);


export default router;
