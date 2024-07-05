const express = require("express");
const app = express();
require("dotenv").config();
const dbconnection = require("./config/dbconfig");
dbconnection.dbconfig();
const userRoutes = require("./Routes/Userroutes");
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use("/", userRoutes);
app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}`);
});

// app.get("/",(req,res)=>{res.send("hello world")});
