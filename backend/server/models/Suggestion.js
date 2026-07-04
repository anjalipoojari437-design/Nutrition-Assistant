const mongoose=require("mongoose");

const suggestionSchema=new mongoose.Schema(
{
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    disease:String,
    suggestion:String
},
{timestamps:true}
);

module.exports=mongoose.model("Suggestion",suggestionSchema);