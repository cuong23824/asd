import mongoose from 'mongoose';

const user_schema = new mongoose.Schema({
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

export const User = mongoose.model('User', user_schema);
