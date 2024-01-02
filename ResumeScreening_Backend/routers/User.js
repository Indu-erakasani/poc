import express from 'express';
import path from 'path';
import { isAuthenticated } from '../middleware/auth.js';
import cors from 'cors';


import {
    candidateform,
    handleSubmission,
   
   
} from '../controllers/User.js';

const router = express.Router();


router.route("/candidateform").post(candidateform);
router.post('/handleSubmission', isAuthenticated, handleSubmission);
// router.route('/handleSubmission').post(isAuthenticated, handleSubmission);

// router.post('/handleSubmission', handleSubmission);

router.use(cors());


export default router;