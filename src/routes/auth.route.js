import express from 'express';
import { login, post_login, post_register, recover_password, register } from "../controllers/auth.controller.js";
import { check } from "express-validator";
import { guest } from "../middleware/auth.middleware.js";
import multer from "multer";

export const auth_router = express.Router();

export const validateRegister = () => {
  return [
    check("email", "Vui lòng nhập email").not().isEmpty(),
    check("email", "Vui lòng nhập đúng email").isEmail(),
    check("full_name", "Vui lòng nhập họ và tên").not().isEmpty(),
    check("full_name", "Tối thiểu 6 ký tự").isLength({ min: 6 }),
    check("password", "Vui lòng nhập mật khẩu").not().isEmpty(),
  ];
};

// /*Them middleware*/
auth_router.use("/register", guest);
auth_router.use("/login", guest);

//Tao thu muc luu file
const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, "public/uploads");
  },
  filename: function(req, file, callback) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
    callback(null, file.fieldname + "-" + uniqueSuffix);
  },
});

/*Tao bien uploadFile*/
const uploadFile = multer({ storage: storage });

auth_router.get('/register',register);
auth_router.post('/register', uploadFile.single("avatar"), post_register);

auth_router.get('/login', login);
auth_router.post('/login', post_login);

auth_router.get('/recover-password', recover_password);

auth_router.get('/profile', (req, res) => {
  res.render('profile/profile');
});
