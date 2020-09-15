import express from 'express';
import { personalReferee, lastEmployer } from '../../controllers/referee';

const router = express.Router();

router.get('/entry', personalReferee);
router.get('/experienced', lastEmployer);

export default router;
