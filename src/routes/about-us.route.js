import express from 'express';

export const about_us_router = express.Router();
about_us_router.get('/about-us', (req, res) => {
  res.render('about-us/about-us');
});
