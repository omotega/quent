import express from 'express';
import dotenv from 'dotenv';

import { CustomRequest } from './utils/interface'
import  dbConnect  from './config/db';
import userRouter from './routes/userroutes';
import adminRouter from './routes/adminroutes';


dotenv.config();
const port = process.env.PORT || 9200;

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

declare global {
    namespace Express {
        interface Request extends CustomRequest {}
    }
}

app.get('/',(req,res) => {
    res.send('welcome to quent');
})

app.use('/api/v1/users',userRouter);
app.use('/api/v1/admin',adminRouter);

dbConnect();
app.listen(port, () => console.log(`port running on port ${port}`));