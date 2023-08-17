import express from 'express';
import  {createIssue,getIssues,getIssueCompleted,getIssuePending,getIssueProgress,getIssueByName} from '../Controllers/IssueController.js';

const router = express.Router();

router.post('/',createIssue);
router.get('/',getIssues);
router.get('/completed',getIssueCompleted);
router.get('/pending',getIssuePending);
router.get('/progress',getIssueProgress);
router.get('/:assignee',getIssueByName);

export default router;
