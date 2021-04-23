const Router = require("express").Router();


Router.get("/all",  (req, res)=>{
    res.json("all posts")
})


Router.get("/specific/:PostID", (req, res) => {
    res.json({"PostID":req.params.PostID})
})

module.exports = Router;