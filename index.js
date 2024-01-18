import express from 'express';
import mongoose from 'mongoose';
import { addMenu } from './controller/menu.js';
import { connection } from './Database/Database.js';
import { addMenuItem , getMenu } from './controller/menuItemControllers.js';
import router from './routes/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',router);



app.listen(3000, () => {
  console.log("Server started at port ", 3000);
})

connection();
//addMenuItem();
