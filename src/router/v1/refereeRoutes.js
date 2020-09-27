import express from 'express';
import {
  getRefereeByCandidateId,
  registerExperienceReferees,
  registerPersonalReferees,
  updatPersonalRefereeInfo,
} from '../../controllers/referee';
import {
  onboardExpRefereeSchema,
  onboardRefereeSchema,
} from '../../middlewares/validationSchema/referee';
import validatePayload from '../../middlewares/validationSchema/validation';

const router = express.Router();

router.post(
  '/entry',
  validatePayload(onboardRefereeSchema),
  registerPersonalReferees
);
router.post(
  '/experienced',
  validatePayload(onboardExpRefereeSchema),
  registerExperienceReferees
);
router.put('/update/:id', updatPersonalRefereeInfo);
router.get('/get-referee/:candidateId/:id', getRefereeByCandidateId);

export default router;
