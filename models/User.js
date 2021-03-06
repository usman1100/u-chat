const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    referralsLeft:{
        type:Number,
        default:2
    },

    referred:{
        type:Array,
        default:[]
    }

    
})




module.exports = mongoose.model("User", UserSchema);