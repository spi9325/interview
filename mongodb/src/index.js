import express from "express"
import { userModel } from "./db.js";
import mongoose from "mongoose";
// edit your password==================================
 mongoose.connect("mongodb+srv://sanket:yourpassword@cluster0.uxuoysb.mongodb.net/test")
const app = express();

app.use(express.json());



app.post("/add",async(req,res)=>{
    await userModel.create({
        name:"sanket"
    })
    res.send("done")
})
app.post("/delete",async(req,res)=>{})
app.post("/update",async(req,res)=>{})
app.get("/get",async(req,res)=>{
    const r = await userModel.find({
        _id:"6919d1ec3a8b2ad728809a28"
    })
    res.send(r)
})

app.listen(3000)