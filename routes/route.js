import express from 'express';
import {emailController} from '../controllers/emailController.js'
import { allemails } from '../controllers/emailController.js';
import { getEmails } from '../controllers/emailController.js';
import { draftEmails } from '../controllers/emailController.js';
const router=express.Router();


router.get("/allemails",allemails);

// POST /save 
router.post("/save",emailController);

// GET /emails/:type 
router.get("/emails/:type",getEmails);

// POST /save-draft/:draft

router.post("/save-draft",draftEmails);

export default router;