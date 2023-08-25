import express from 'express';
import  {createIssue,getIssues,getIssueByEmail,deleteissue,getIssueById,updateIssue,getIssueByCode} from '../Controllers/IssueController.js';

const router = express.Router();

router.post('/',createIssue);
router.get('/:id',getIssueById);
router.put('/:id',updateIssue);
router.get('/createdby/:createdby',getIssueByCode);
router.get('/assignee/:email',getIssueByEmail);
router.get('/',getIssues);
router.delete('/:id',deleteissue);

export default router;
