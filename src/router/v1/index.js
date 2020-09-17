import express from 'express';

import refereeRoutes from './refereeRoutes';
import candidateRoutes from './candidateRoutes';

const router = express.Router();

router.use('/referee', refereeRoutes);
router.use('/candidate', candidateRoutes);

export default router;
