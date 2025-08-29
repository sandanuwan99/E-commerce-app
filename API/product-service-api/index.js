const express = require("express");
const mongoos = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const serverPort = process.env.SERVER_PORT | 3000;
//==================
const CategoryRoute = require("./rout/CategoryRoute");
//==================

try{
    mongoos.connect(`${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
    app.listen(serverPort,()=>{
        console.log(`server started at ${serverPort}`);
    });
}catch(e){
    console.log(e);
}
app.get('/test-api',(req,res)=>{
    return res.json({message:"hello world"});
})


//http://localhost:3000/api/v1/categories/create-catogory (POST)
//==================
app.use('/api/v1/categories',CategoryRoute);
//==================