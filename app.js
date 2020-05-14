const express = require("express");
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
require('dotenv/config');


bodyParser.urlencoded({ extended: false })

app.use(bodyParser.json());


//import Routes
const postsRoute = require("./routes/posts");

app.use("/posts",postsRoute);

//Routes
app.get("/",(req,res)=>res.send("we are on home"))

//connect to DB
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify: true },()=>{
    console.log("connect to DB!")
})

app.listen(3000, ()=>{
    console.log("workingnpm ")
});

