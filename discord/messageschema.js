const mongoose =require('mongoose');


const messageSchema=mongoose.Schema({
    title:String,
    description:String,
    type:String,
});

var Messages= mongoose.model('messages',messageSchema)
module.exports=Messages;