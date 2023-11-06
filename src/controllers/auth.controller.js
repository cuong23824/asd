import bcrypt from 'bcryptjs';
import { User } from '../models/user.model.js';
import { transport } from '../mails/gmail.js';
import fs from 'fs'

/*Register*/
export const register = (req, res) => {
  res.render('auth/register/register');
};

export const post_register = async (req, res) => {
  const data = req.body;
  console.log(data);

  try {
    if (req.file) {
      console.log(req.file);
      const img = fs.readFileSync(req.file.path);

      data.avatar = {
        contentType: req.file.mimetype,
        data: img.toString("base64")
      }

    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, salt);
    /*Gán lại password */
    data.password = hashedPassword;

    console.log(data);
    const user = new User(data);

    /*Send email*/
    // transport.sendMail({
    //   from: 'Cuong',
    //   to: data.email,
    //   subject: 'Dang ki tai khoan thanh cong',
    //   html: `<h1>Dang ki thanh cong</h1>`,
    // });

    await user.save();
    res.status(200).send({ message: 'successful register' });
  } catch (error) {
    res.send(error);
  }
};

/*Login*/
export const login = (req, res) => {
  res.render('auth/login/login');
};

export const post_login = async (req, res) => {
  const requestPassword = req.body.password;
  const requestEmail = req.body.email;

  /*Tim email*/
  const matchUser = await User.findOne({ email: requestEmail });
  if (!matchUser) {
    return res.status(200).send({ message: 'Email or password is not correct' });
  }

  /*So sanh password*/
  const match = await bcrypt.compare(requestPassword, matchUser.password);
  if (!match) {
    return res.status(404).send({ message: 'login failed' });
  } else {
    /*Lưu user vào session*/
    req.session.auth = {
      full_name: matchUser.full_name,
      email: matchUser.email,
    };
    return res.status(200).send({ message: 'login successfully' });
  }
};

export const recover_password = (req, res) => {
  res.render('auth/recover-password/recover-password');
};
