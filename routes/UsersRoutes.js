const Router = require("express").Router();
const User = require("../models/User")


Router.post("/new", async (req, res)=>{
    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;

    let newUser = User({
        username, 
        email, 
        password
    });

    try {
        const data = await newUser.save();
        res.json(data)
    } catch (error) {
        res.json(error)
    }

    

    
})

Router.get("/all", async (req, res)=>{
    try {
        const data = await User.find();
        res.json(data)
    } catch (error) {
        res.json(error)
    }
})



module.exports = Router;