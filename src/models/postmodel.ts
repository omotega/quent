import mongoose from 'mongoose';
import { Ipost  } from '../utils/interface';

const postSchema = new mongoose.Schema({
    post:{type: String},
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    likes:{type:Number,default:0},
    comment:{type:Number,default:0},
    image:{type:String},
    content:{type:String},
},{
    timestamps:true,
})

export default mongoose.model<Ipost>('Post',postSchema);