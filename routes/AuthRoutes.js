const Router = require("express").Router();
const User = require("../models/User")



Router.post("/signin", async  (req, res)=>{

    const {username, pass} = req.body;
    console.log(req.body);
    const data = await User.findOne({username:username});

    if(data != null){
        if (pass === data.password){
            return res.send("logged in")
        }
        else
            res.send("wrong password " + data.password)
    }
    else
        return res.json("user not found").status(404)
})

module.exports = Router;