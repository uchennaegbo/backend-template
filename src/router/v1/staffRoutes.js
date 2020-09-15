import express from 'express';
import { staff } from '../../controllers/staff';
import validatePayload from '../../middlewares';
const router = express.Router();

router.post('/new', validatePayload, staff);

export default router;
