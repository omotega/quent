import mongoose from 'mongoose';
import { Icomment } from '../utils/interface'

const commentSchema = new mongoose.Schema({
    post:{type:String},
    post_id:{type:mongoose.Schema.Types.ObjectId,ref:'Post'},
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    likes:{types:Number,default:0},
    comment:{type:String,default:0},
},{
    timestamps:true,
})

export default mongoose.model<Icomment>('Comment',commentSchema);