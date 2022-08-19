require('dotenv').config()
import "reflect-metadata"
import express from 'express'

import "./database/connect";

import routes from "./routes";

import workers from "./workers";

const app =  express();

app.use(express.json());

app.use(routes);

const job = workers();

app.listen(3000, ()=> console.log("Server started at http://localhost:3000"))