import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
dotenv.config();
console.log("dfsfds")
const connect = async () => {
  try {
    
    await mongoose.connect(process.env.MONGO);
  console.log("connected");
} catch (error) {
    throw error;
  }
};

app.get("/",(req,res)=>{
    console.log("fdsf")
    res.send("sa");
})

mongoose.connection.on("disconnected",()=>{
    console.log("mongodb disconnected")
})
mongoose.connection.on("connected",()=>{
    console.log("mongodb connected")
})

app.listen(8000),() => {
    connect();
    console.log("connected backend");
  };
