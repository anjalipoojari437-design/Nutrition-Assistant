const mongoose = require("mongoose");

const healthDataSchema = new mongoose.Schema(
{
userId:{
type:mongoose.Schema.Types.ObjectId,
ref:"User",
required:true,
},

age:{
type:Number,
required:true,
},

gender:{
type:String,
required:true,
},

height:{
type:Number,
required:true,
},

weight:{
type:Number,
required:true,
},

activity:{
type:String,
required:true,
},

goal:{
type:String,
required:true,
},

bmi:{
type:Number,
required:true,
},
},
{
timestamps:true,
}
);

module.exports=mongoose.model("HealthData",healthDataSchema);