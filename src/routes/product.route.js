import express from 'express';

export const product_router = express.Router();
product_router.get('/product', (req, res) => {
  res.render('product/product');
});
