import express from 'express';
import {
  getReferee,
  registerExperienceReferees,
  registerPersonalReferees,
  updateWorkRefereeInfo,
  updatPersonalRefereeInfo,
} from '../../controllers/referee';

import {
  lastEmployer,
  onboardExpRefereeSchema,
  onboardRefereeSchema,
  personal,
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

router.put('/update/:id', validatePayload(personal), updatPersonalRefereeInfo);

router.put(
  '/update/experience/:id',
  validatePayload(lastEmployer),
  updateWorkRefereeInfo
);

router.get('/get-referee/:candidateId/:id', getReferee);

export default router;
