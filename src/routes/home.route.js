import express from 'express';
import { addProduct } from '../controllers/product.controller.js';

export const home_router = express.Router();
home_router.get('/', (req, res) => {
  res.render('home/home');
});

home_router.get('/product', (req, res) => {
  res.send('hello');
});

home_router.post('/product', addProduct);