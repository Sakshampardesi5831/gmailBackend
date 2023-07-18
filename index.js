// require("dotenv").config("./.env");
// const express=require("express");
// const app=express();
// app.listen(process.env.PORT,()=>console.log(`Server is running at ${process.env.PORT}`));
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import logger from 'morgan'
import ConnectionToDb from './models/database.js'
import router from './routes/route.js';
dotenv.config({path:"./.env"});
const app=express();
 
app.use(logger("tiny"));
app.use(cors({origin:true,credentials:true}));

//body parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/",router);

ConnectionToDb();

app.listen(process.env.PORT,()=>console.log(`SERVER IS RUNNING AT ${process.env.PORT}`));
