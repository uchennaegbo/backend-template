import express from 'express';

import refereeRoutes from './refereeRoutes';
import staffRoutes from './staffRoutes';

const router = express.Router();

router.use('/referee', refereeRoutes);
router.use('/staff', staffRoutes);

export default router;
