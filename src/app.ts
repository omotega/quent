import express from 'express';
import dotenv from 'dotenv';

import  dbConnect  from './config/db';


dotenv.config();
const port = process.env.PORT || 9200;

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

dbConnect();
app.listen(port, () => console.log(`port running on port ${port}`));