import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import { config } from 'dotenv';

config();

import postRoutes from './routes/posts.js'

const app = express();
const PORT = process.env.PORT || 5000;
const CONNECTION_URI = process.env.MONGO_URI;

app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

app.use('/posts', postRoutes);


mongoose.connect(CONNECTION_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`)))
.catch((error) => console.error(error));

