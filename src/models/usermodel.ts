import mongoose from 'mongoose';
import { Iuser } from '../utils/interface'

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    address:{type:String},
    photo:{type:String},
    role:{type:String,enum:['admin','landlord','user'],default:'user'},
},{
    timestamps: true,
})

export default mongoose.model<Iuser>('User',userSchema);