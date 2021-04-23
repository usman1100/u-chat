const Router = require("express").Router();


Router.get("/all",  (req, res)=>{
    res.json("all posts")
})


module.exports = Router;