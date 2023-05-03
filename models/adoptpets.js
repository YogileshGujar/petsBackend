import mongoose from "mongoose";

let adoptpetsSchema = new mongoose.Schema({
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

let Adoptpets = mongoose.model('adoptpets',adoptpetsSchema);
export {Adoptpets};