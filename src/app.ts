import express from 'express';
import dotenv from 'dotenv';

import  dbConnect  from './config/db';
import userRouter from './routes/userroutes';


dotenv.config();
const port = process.env.PORT || 9200;

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/',(req,res) => {
    res.send('welcome to quent');
})

app.use('/api/v1/users',userRouter);

dbConnect();
app.listen(port, () => console.log(`port running on port ${port}`));