const express = require('express')
const mongoose= require('mongoose');
const Messages =require ('./messageschema');

const Discord =require('discord.js')
require('dotenv').config()

const client = new Discord.Client();


const app = express();
const port = process.env.PORT || 9000
app.use(express.json());


const connection_url ='mongodb+srv://admin:kDH966XyNDVup5qX@cluster0.tzswv.mongodb.net/sources?retryWrites=true&w=majority'
mongoose.connect(connection_url,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})

client.once('ready',()=>{
    console.log('Ready');
});

client.on('message', message => {
	Messages.create({
        title:"amazon internship",
        description:message.content,
        type:"internship",
    },(err,data)=>{
        if(err){
            console.log("error")
        }
        else{
            console.log(data)
        }
    })
});

client.login(process.env.BOT_TOKEN);

app.listen(port,()=>console.log(`Listening to localhost:${port}`))