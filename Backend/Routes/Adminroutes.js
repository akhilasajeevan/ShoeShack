// const express=require("express");
// const router=express.Router();
// const {productadd,adminLogin,userList,productlist}=require('../Controllers/adminController');
// const upload=require('../Middleware/Multer');


// router.post('/adminlogin',adminLogin);
// router.get('/users',userList);

// router.post('/productadd',upload.single('imagefile'),productadd);
// router.get('/productlist',productlist);
// userList

// module.exports=router;
const express = require("express");
const router = express.Router();
const { productadd, adminLogin, userList, productlist } = require('../Controllers/adminController');
const upload = require('../Middleware/Multer');

router.post('/adminlogin', adminLogin);
router.get('/users', userList);
router.post('/productadd', upload.single('imagefile'), productadd);
router.get('/productlist', productlist);

module.exports = router;
