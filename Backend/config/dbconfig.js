const mongoose=require("mongoose")
module.exports={dbconfig:async()=>{
    try{await mongoose.connect("mongodb://localhost:27017/ShoeShack").then(()=>{console.log("database connected successfully")})}
    catch(Error){console.log(Error)}
}}