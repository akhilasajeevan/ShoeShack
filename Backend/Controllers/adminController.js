const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const adminModel = require('../Model/adminModel');
const secretKey = 'your_secret_key';
const Usermodel = require('../Model/Usermodel')
const Product = require('../Model/productaddModel')


const adminLogin=async(req,res)=>{

try{
    const {adminUsername,adminPassword}=req.body;

    const admin=await adminModel.findOne({username:adminUsername});
    if(admin){
const isPasswordValid=await bcrypt.compare(adminPassword,admin.Password)
if(isPasswordValid){

const token=jwt.sign({id:admin._id},secretKey,{expiresIn:'1h'})
return res.json({
    message:"Login Successfull",
    success:true,
    token,
    username:admin,Emailaddress,
    Phonenumber:admin.Phonenumber
});
}else{

    return res.json({message:"incorrect password",success:false});
}
    }else{

    return res.json({message:"User not found",success:false});
    }
}catch(error){
    console.log("Error in admin login",error)
 return res.status(500).json({message:"an error occured",success:false});
}
};
module.exports={
    adminLogin
};

 
// module.exports.userList=async(req,res)=>{
// try{
// const userlist=await Usermodel.find();
// if(userlist){

//   res.json({ status : true,userlist})
// }


// }
// catch(error){
//   console.log(error);
// }

// }


module.exports.userList = async (req, res) => {
  try {
    const userlist = await Usermodel.find();
    res.json({ status: true, userlist });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'An error occurred', success: false });
  }
};




module.exports.productadd = async (req, res) => {
    try {
      const { productName, description, price, category } = req.body;
  
      if (!req.file) {
        return res.status(400).json({ message: 'Image file is required', success: false });
      }
  
      const newProduct = new Product({
        productName,
        description,
        price: parseFloat(price.slice(1)),
        category,
        imageUrl: `/uploads/${req.file.filename}`,
      });
  
      await newProduct.save();
  
      return res.json({ message: 'Product added successfully', success: true });
    } catch (error) {
      console.error('Error adding product:', error);
      return res.status(500).json({ message: 'An error occurred', success: false });
    }
  };
  


  module.exports.productlist=async(req,res)=>{
try{
const productlist=await productaddModel.find();
if(productlist){

res.json({status:true.productlist})

}

}
catch{


  console.log(error);
}

  }