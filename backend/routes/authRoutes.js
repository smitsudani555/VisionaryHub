const express = require("express")
const router = express.Router();

const User = require("../models/User.model.js")
const bcrypt = require("bcryptjs")


router.post("/signup",async(req,res) => {
    const {username, email, password} = req.body

    try{
        const existinguser = await User.findOne({ email });
        if(existinguser){
            return res.status(400).json({ message: "User already exists "})

        }

        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new User({ username, email, password:hashedPassword})
        await newUser.save();

        res.status(201)
        .json({message : "User registered successfully "})

    }
    catch(error){
        res.status(500)
        .json({message: "Server error"})
    }
})

router.post("/login",async(req,res) => {
    const {email,password} = req.body;

    try{
        const user = await User.findOne({ email })

        if(!user){
            return res.status(400)
            .json({message: "User not found "})
        }

        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400)
            .json({message: "Invalis Credentials"})

        }

        res.status(200)
        .json({message: "Login successfull", user})
    }
    catch(erroe){
        res.status(500)
        .json({message: "Server Error"})
    }
})

module.exports = router