import mongoose from "mongoose";

const EmailSchema= new mongoose.Schema({
    to:{
        type:String,
        required:true,
    },
      from:{
        type:String,
        required:true,
    },
    subject:String,
    body:String,
    date:{
        type:String,
        // required:true,
    },
    image:String,
    username:{
        type:String,
        // required:true,
    },
    starred:{
        type:Boolean,
        // required:true,
        default:false,
    },
    bin:{
        type:Boolean,
        // required:true,
        default:false
    },
   type:{
      type:String,
      required:true,
   }
})

const mail=mongoose.model("emails",EmailSchema);

export default mail;