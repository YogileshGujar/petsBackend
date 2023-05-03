import mongoose from "mongoose";

let allpetsSchema = new mongoose.Schema({
 type:{
    type:String,
    required:true
 },
 name:{
    type:String,
    required:true
 },
 bread:{
    type:String,
    required:true
 },
 age:{
    type:Number,
    required:true
 }

})

let AllPets = mongoose.model('allpets',allpetsSchema);
export {AllPets};