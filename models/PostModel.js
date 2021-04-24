const mongoose = require("mongoose")

const PostSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },

    body:{
        type:String,
        required:true
    },

    datePosted:{
        type:Date,
        default:Date.now()
    },

    postedBy:{
        type:String,
        required:true
    }
    

    
})




module.exports = mongoose.model("Post", PostSchema);