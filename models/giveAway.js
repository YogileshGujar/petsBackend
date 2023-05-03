import mongoose from "mongoose";

let givAwaypetsSchema = new mongoose.Schema({
 type:{
    type:String,
    required:true
 },
 breedtype:{
   type:String,
   required:true
 },
 name:{
    type:String,
     trim:true,
    required:true
 },
 email:{
    type:String,
    required:true,
    trim:true,
 },
 phone:{
   type:Number,
   required:true,
   trim:true,
   unique:true
 }

})

let GiveAwaypets = mongoose.model('giveAwaypets',givAwaypetsSchema);
export {GiveAwaypets};