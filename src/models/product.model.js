import mongoose from 'mongoose';

const product_schema = new mongoose.Schema({
  full_name: {
    type: String,
  },
  email: {
    type: String,
  },

  password: {
    type: String,
  },
  avatar: {
    data: String,
    contentType: String
  },
});

export const Product = mongoose.model('Product', product_schema);
