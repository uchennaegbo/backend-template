import express from 'express';
import { staff } from '../../controllers/staff';
const router = express.Router();

router.get('/new', staff);

export default router;
