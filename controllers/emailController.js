
import Email from "../models/emails.js";


export const allemails=async (req,res)=>{
    res.json({message:"success"});
}

export const emailController=(req,res)=>{
    try {
     const email= new Email(req.body);
     email.save();
     res.status(200).json({message:" email is saved  successfully"});
    } catch (error) {
         res.status(500).json({message:error.message});        
    }  
}

export const getEmails= async (req,res)=>{
    try {
        let emails;
        if(false){
        
        }else{
          emails=await Email.find({type:req.params.type});
        }
       return res.json({emails});
    } catch (error) {
        console.log(error);
      res.status(500).json({message:error.message})   
    }
}

export const draftEmails = async (req,res)=>{
  try {
    try {
      const email= new Email(req.body);
      email.save();
      res.status(200).json({message:"email is saved in draft successfully"});
     } catch (error) {
          res.status(500).json({message:error.message});        
     }  
  } catch (error) {
    console.log(error);
    res.status(500).json({message:error.message});
  }
}