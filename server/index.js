import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import * as doteenv from 'dotenv';
doteenv.config()

import Routines from "./routes/Routines.js"

const app = express();

mongoose.set('strictQuery', false);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// MongoDB connection
const PORT = process.env.PORT || 5000;

app.use('/routines', Routines);

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error));