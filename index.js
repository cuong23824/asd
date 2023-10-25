import express from 'express';
import { Database } from './src/db/connect.js';
import { router } from './src/routes/auth.route.js';
import { home_router } from './src/routes/home.route.js';
import { product_router } from './src/routes/product.route.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const connect = new Database();

app.use(router);
app.use(home_router);
app.use(product_router);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

/*ejs*/
app.set('view engine', 'ejs');
/*Set style*/
app.use(express.static('public'));
