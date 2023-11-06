import express from 'express';
import 'dotenv/config';
import { Database } from './src/db/connect.js';
import { home_router } from './src/routes/home.route.js';

const app = express();
const port = 3000;
const connect = new Database();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*Router*/
app.use(home_router);


/*Ejs*/
app.set('view engine', 'ejs');

/*Set style*/
app.use(express.static('public'));


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});





