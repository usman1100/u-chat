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


Router.get("/specific/:ID", async (req, res)=>{

    let ID = req.params.ID;
    try {
        const data = await User.find({_id:ID});
        return res.json(data);


    } catch (error) {
        return res.json(error)
    }
})

Router.get("/search/:username", async (req, res)=>{

    let username = req.params.username;
    let matches = []
    try {
        const data = await User.find();

        data.forEach(e=>{
            if(String(e.username).includes(username))
                matches.push(e);
        })


        
        return res.json(matches);

    } catch (error) {
        return res.json(error)
    }
})



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