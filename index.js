const app = require("express")()

const port = process.env.PORT || 2021

app.listen(port, ()=>{
    console.log("Started on http://localhost:" + port);
})


app.get("/", (req, res)=>{
    res.json("Works :)")
})