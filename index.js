import express from "express";
import BodyParser from "body-parser";
import routes from "./src/routes/hireDevRoutes";
import cors from "cors";
import {connectDB} from './dbAuth'
import mongoose from "mongoose";
require('dotenv').config();
const PORT = 4000;

const app = express();

//connection to DB
connectDB();

//bodyparser setup
app.use(
  BodyParser.urlencoded({
    extended: true,
  })  
);  
app.use(BodyParser.json());

//Allowing cross origin requests
app.use(cors());

//serving static files
app.use(express.static("public/images"));

//connecting the app to our routes
routes(app);

mongoose.connection.once('open', ()=>{
  console.log('Connected to mongoose');
  app.listen(PORT, ()=>{
    console.log(`Server running on Port ${PORT}`)
  } )
} )

