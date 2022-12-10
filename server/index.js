import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import Routines from "./routes/Routines.js"

const app = express();

mongoose.set('strictQuery', false);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// MongoDB connection
const CONNECTION_URL = "mongodb+srv://kemalsezgen:kemal123@cluster0.vebhkyf.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

app.use('/routines', Routines);

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error));