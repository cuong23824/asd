import express from 'express';

export const home_router = express.Router();
home_router.get('/', (req, res) => {
  res.render('home/home');
});
