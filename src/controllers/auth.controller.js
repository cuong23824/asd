import bcrypt from 'bcryptjs';
import { User } from '../models/user.model.js';

/*
 * ----------------------------------------------------------------------
 * -------------------------------- REGISTER -------------------------------
 * ----------------------------------------------------------------------
 * */

export const register = (req, res) => {
  res.render('auth/register/register');
};

export const post_register = async (req, res) => {
  const data = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, salt);
    /*Gán lại password */
    data.password = hashedPassword;
    const user = new User(data);

    await user.save();
    res.status(200).send({ message: 'successful register' });
  } catch (error) {
    res.send(error);
  }
};

/*
 * ----------------------------------------------------------------------
 * -------------------------------- LOGIN -------------------------------
 * ----------------------------------------------------------------------
 * */
export const login = (req, res) => {
  res.render('auth/login/login');
};

export const post_login = async (req, res) => {
  const data = req.body;

  try {
    res.status(200).send({ message: 'login successfully' });
  } catch (error) {
    res.send(error);
  }
};

export const recover_password = (req, res) => {
  res.render('auth/recover-password/recover-password');
};
