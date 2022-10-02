import mongoose from 'mongoose';

const dbConnect = async() => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI as string);
        console.log(`db connected at ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default dbConnect;
