const app = require("express")()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")


const PostRoutes = require("./routes/PostsRoutes")
const UsersRoutes = require("./routes/UsersRoutes")



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


app.use(bodyParser.json())
app.use("/posts/", PostRoutes);
app.use("/users/", UsersRoutes);

app.get("/", (req, res)=>{
    res.json("Works :)")
})