const express = require("express");
const PORT = process.env.PORT || 4001;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const app = express();
mongoose.connect("mongodb://localhost:27017").then((data)=>{
    console.log("Connected to db");
})
.catch((error)=>{
    console.log("Error occured",error);
})

app.listen(PORT,()=>{
    console.log(`Listening at ${PORT}`);
})