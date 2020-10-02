import express from 'express';
import {
  getReferee,
  registerExperienceReferees,
  registerPersonalReferees,
  updateWorkRefereeInfo,
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

router.put('/update/experience/:id', updateWorkRefereeInfo);

router.get('/get-referee/:candidateId/:id', getReferee);

export default router;
