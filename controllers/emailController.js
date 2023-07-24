
import Email from "../models/emails.js";


export const allemails=async (req,res)=>{
    res.json({message:"success"});
};

export const emailController= async (req,res)=>{
    try {
     const email= new Email(req.body);
     await email.save();
     res.status(200).json({message:"email is saved  successfully"});
    } catch (error) {
         res.status(500).json({message:error.message});        
    }  
};

export const getEmails= async (req,res)=>{
    try {
        let emails;
        if(req.params.type==='bin'){
            emails=await Email.find({bin:true});
        }else if(req.params.type==="allmail"){
           emails=await Email.find({});
        }else if(req.params.type==="starred"){
            emails=await Email.find({starred:true,bin:false});
        }else{
          emails=await Email.find({type:req.params.type});
        }
       return res.json({emails});
    } catch (error) {
        console.log(error);
      res.status(500).json({message:error.message})   
    }
};

export const draftEmails = async (req,res)=>{
    try {
      const emails= new Email(req.body);
      await emails.save();
      res.status(200).json({message:"Draft saved successfully"});
     } catch (error) {
          res.status(500).json({message:error.message});        
     }  
};

export const movetoBin=async (req,res)=>{
      try {
        await Email.updateMany({_id:{$in:req.body}},{$set:{bin:true,starred:false,type:''}});
        return res.status(200).json("email is deleted SuccessFully"); 
      } catch (error) {
        console.log(error);
        res.status(500).json({error});
      }
};

export const starredEmail=async (req,res)=>{
  try {
    await Email.updateOne({_id:req.body.id},{$set:{starred:req.body.value}});
    return res.status(200).json("email is starred marked");
  } catch (error) {
    console.log(error);
     res.status(500).json(error);
  }
}

export const deleteEmails=async (req,res)=>{
    try {
       await Email.deleteMany({_id:{$in:req.body}});
       res.status(200).json("Email delete SuccessFully");
    } catch (error) {
       console.log(error);
       res.status(500).json(error)
    }

  }