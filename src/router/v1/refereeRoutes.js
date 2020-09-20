import express from 'express';
import {
  registerExperienceReferees,
  registerPersonalReferees,
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

export default router;
