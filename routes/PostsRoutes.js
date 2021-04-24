const Router = require("express").Router();
const Post = require("../models/PostModel")


Router.get("/all", async  (req, res)=>{
    try
    {
        const data = await Post.find();
        return res.json(data);
    }

    catch(err){
        return res.json(err).status(501);
    }
})


Router.get("/specific/:PostID", (req, res) => {
    res.json({"PostID":req.params.PostID})
})

Router.get("/create", (req, res)=>{
    if(req.session.user){
        return res.render("newPost");
    }

    return res.json("You are not logged in").status(401);
})


Router.post("/create/new", async (req, res)=>{

    if(!req.session.user){
        return res.json("You are not logged in").status(401);
    }

    const {title, body} = req.body;
    const postedBy = req.session.user.username;


    const newPost = Post({
        title:title,
        body:body,
        postedBy:postedBy
    })

    try{
        const data = await newPost.save();
        return res.json("Success");
    }

    catch(err){
        return res.json(err).status(501);
    }


})


module.exports = Router;