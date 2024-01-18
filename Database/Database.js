import mongoose from "mongoose";
export const connection = async ()=>{
  
    var clusterUrl ="mongodb+srv://rajat:rajat123@cluster0.b2fwpva.mongodb.net/";
    try{
    
        await mongoose.connect(clusterUrl);
        console.log("database connected succesasfully");
    }
     catch(error)
     {
       console.log("Error while connecting to database ", error);
     }
  }