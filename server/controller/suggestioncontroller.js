const Suggestion= require("../models/suggestion");
const getsuggestions=async(req,res)=>{
    try{
        const suggestions = await Suggestion.find();
        res.json(suggestions);
    }catch(err){
        res.status(500).json(err);
    }
}
module.exports={
    getsuggestions
}