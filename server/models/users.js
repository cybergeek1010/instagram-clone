const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            requied:true,
        },
        profileImage:{
            type:String,
            default:"https://i.pravatar.cc/150"
        }

    },
    {
        timestamps:true
    }
)
module.exports = mongoose.model("User",userSchema);