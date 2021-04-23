const Router = require("express").Router();
const User = require("../models/User")



Router.post("/signin", async  (req, res)=>{

    const {username, pass} = req.body;
    const data = await User.findOne({username:username});

    if(data != null){
        if (pass === data.password){
            return res.render("home", user=data)
        }
        else
            res.json("wrong password")
    }
    else
        return res.json("user not found").status(404)
})

module.exports = Router;