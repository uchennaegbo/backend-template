import express from 'express';
import {
  registerPersonalReferees,
  registerWorkReferees,
  } from '../../controllers/referee';
import { onboardRefereeSchema } from '../../middlewares/validationSchema/referee';
import validatePayload from '../../middlewares/validationSchema/validation';

const router = express.Router();

router.post(
  '/entry/:id',
  validatePayload(onboardRefereeSchema),
  registerPersonalReferees
);
// router.post(
//   '/experienced',
//   validatePayload(onboardRefereeSchema),
//   registerWorkReferees
// );

export default router;
