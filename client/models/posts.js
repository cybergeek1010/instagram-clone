const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
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
    likes:{
        type:Number,
        default:0
    }
}, {
    timestamps:true
})
module.exports = mongoose.model("post",postSchema);