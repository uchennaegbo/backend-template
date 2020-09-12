import express from 'express';
import { personalReferee, lastEmployer } from '../../controllers/references';

const router = express.Router();

router.get('/', (req, res) => res.send('roles routes'));

export default router;
