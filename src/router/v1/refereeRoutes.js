import express from 'express';
import { personalReferee, lastEmployer, registerReferee } from '../../controllers/referee';
import { addReferee } from '../../middlewares/validationSchema/referee';
import validatePayload from '../../middlewares/validationSchema/validation';

const router = express.Router();

router.post('/register-ref', validatePayload(addReferee), registerReferee);
// router.post('/entry', personalReferee);
// router.post('/experienced', lastEmployer);

export default router;
