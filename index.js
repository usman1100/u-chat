const app = require("express")()
const mongoose = require("mongoose")


const port = process.env.PORT || 2021



mongoose.connect("mongodb://localhost:27017/uchat", {
    useNewUrlParser:true,
    useUnifiedTopology: true
}, ()=>{
    console.log("DB connected");
    app.listen(port, ()=>{
        console.log("Started on http://localhost:" + port);
    })
})




app.get("/", (req, res)=>{
    res.json("Works :)")
})