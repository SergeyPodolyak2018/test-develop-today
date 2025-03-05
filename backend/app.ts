import express from 'express';
import cors from 'cors';
import { createServer } from 'node:http';
import { BASE_URI,UI_URI } from './const';
import  recipesRouter from './src/routes/recipes';


const corsOptions = {
  origin: UI_URI,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();
const server = createServer(app);
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('public'));

app.use(`${BASE_URI}/recipes`, recipesRouter);




export default server;