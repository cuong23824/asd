import express from 'express';
import session from 'express-session';
import 'dotenv/config';
import { Database } from './src/db/connect.js';
import { auth_router } from './src/routes/auth.route.js';
import { home_router } from './src/routes/home.route.js';
import { product_router } from './src/routes/product.route.js';
import { checkout_router } from './src/routes/checkout.route.js';

const app = express();
const port = 3000;
const connect = new Database();

app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 60000, // milisecond
      secure: false
    }
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*Router*/
app.use(auth_router);
app.use(home_router);
app.use(product_router);
app.use(checkout_router);

/*Ejs*/
app.set('view engine', 'ejs');

/*Set style*/
app.use(express.static('public'));


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});





