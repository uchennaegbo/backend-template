import express from 'express';
import { registerCandidate ,getCandidate} from '../../controllers/candidate';
import { onboardCandidateSchema } from '../../middlewares/validationSchema/candidate';

import validatePayload from '../../middlewares';

const router = express.Router();

router.post(
  '/register',
  validatePayload(onboardCandidateSchema),
  registerCandidate
);

router.get(
    '/getCandidate/:id',
    getCandidate
  );

export default router;
