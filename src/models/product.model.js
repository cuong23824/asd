import mongoose from 'mongoose';

const product_schema = new mongoose.Schema({
  product_name: String,
  quantity: String,
});

export const Product = mongoose.model('Product', product_schema);
