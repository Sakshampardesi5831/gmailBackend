import mongoose from "mongoose";

 const ConnectionToDb = () => {
  try {
    /*var database=  mongoose.connect("mongodb://localhost/gmailClone").then(function(){
        console.log("database is connected !!!");
    })*/
    var database=mongoose.connect(process.env.MONGODB_URI).then(function(){
      console.log("database is connected");
    })
  } catch (error) {
    console.log(`Error in database ${error.message}`);
  }
};

export default ConnectionToDb
