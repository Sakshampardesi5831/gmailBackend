import express from 'express';
import {emailController} from '../controllers/emailController.js'
import { allemails } from '../controllers/emailController.js';
import { getEmails } from '../controllers/emailController.js';
import { draftEmails } from '../controllers/emailController.js';
import { movetoBin } from '../controllers/emailController.js';
import { starredEmail } from '../controllers/emailController.js';
import { deleteEmails } from '../controllers/emailController.js';
const router=express.Router();


router.get("/allemails",allemails);

// POST /save 
router.post("/save",emailController);

// GET /emails/:type 
router.get("/emails/:type",getEmails);

// POST /save-draft/:draft

router.post("/save-draft",draftEmails);

// POST /bin 

router.post("/bin",movetoBin);

// POST /starred

router.post("/starred",starredEmail);

// DELETE /delete

router.delete("/delete",deleteEmails);
export default router;