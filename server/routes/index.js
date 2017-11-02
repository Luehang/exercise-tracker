import express from 'express';
const router = express();
import basicController from '../controllers/basicController';
import userController from '../controllers/userController';

router.get('/');

router.post('/new-user');

module.exports = router;
