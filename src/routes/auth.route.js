import express from 'express';
import { post_register, register, login, recover_password, post_login } from '../controllers/auth.controller.js';

export const router = express.Router();

router.get('/register', register);
router.post('/register', post_register);

router.get('/login', login);
router.post('/login', post_login);

router.get('/recover-password', recover_password);

router.get('/profile', (req, res) => {
  res.render('profile/profile');
});
