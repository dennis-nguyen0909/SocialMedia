const router =require("express").Router()
const User= require("../models/User")
const bcrypt = require('bcrypt');

// ===Register===
router.post("/register", async (req,res) =>{
    try{
        // Generate new Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(req.body.password, salt);
        // Create new User
        const newUser=  new User({
            username:req.body.username,
            email:req.body.email,
            password: hashedPassword,
        })
        // Save User and return Respond
        const user = await newUser.save();
        res.status(200).json(user)
    }
    catch(err){
        res.status(500).json(err)
    }
})
// ===Login===

router.post("/login", async (req,res)=>{
    try {
        const user = await User.findOne({ email:req.body.email})

        !user && res.status(404).json("Tài khoản không tồn tại")

        const validPassword = await bcrypt.compare(req.body.password, user.password)

        !validPassword && res.status(400).json("Sai mật khẩu")

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports=router