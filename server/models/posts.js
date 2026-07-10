const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    username:{
        type:String,
        required:true
    },
    profileImage:{
        type:String,
        default:""
    },
    postImage:{
        type:String,
        default:""
    },
    caption:{
        type:String,
        required:true
    },
    likes:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ]
    ,
    comments:[{
        username:String,
        text:String
    }]
}, {
    timestamps:true
})
module.exports = mongoose.model("post",postSchema);