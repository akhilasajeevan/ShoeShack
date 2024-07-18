const express=require("express")
const { signup,login,getProductById,products } = require("../Controllers/Usercontroller")
const router=express.Router()




router.post("/signup",signup)
router.post("/login", login);
router.get("/products",products)

router.get("/products/:id",getProductById)
router.post('/signup',signup)

module.exports=router
