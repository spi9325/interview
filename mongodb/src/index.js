import express from "express"
import { bookModel, userModel } from "./db.js";
import mongoose from "mongoose";
// edit your password==================================
 mongoose.connect("mongodb+srv://sanket:sanketdada@cluster0.uxuoysb.mongodb.net/test")
const app = express();

app.use(express.json());



app.post("/addbook",async(req,res)=>{
    const { bname, uid } = req.body;
    const r = await bookModel.create({ bname, uid });
    res.send(r)
})

app.post("/add",async(req,res)=>{
    await userModel.create({
        name:req.body.name,
        age:req.body.age
    })
    res.send("done")
})
app.post("/delete",async(req,res)=>{})
app.post("/update",async(req,res)=>{})
app.post("/get",async(req,res)=>{
    const r = await userModel.find({
        _id: req.body.userid
    })
    res.send(r)
})
app.post("/specific",async(req,res)=>{
    const age = req.body.age
    const name = req.body.name
    const r = await userModel.aggregate([{$group:{_id:"$age",names:{$name:"$name"}}}])
    res.send(r)
})
app.post("/aggrigation",async(req,res)=>{
    // const age = req.body.age
    // const name = req.body.name
    const r = await userModel.aggregate([
        // we filter data using match then that filter data used to sort by age and project for selecting specific data

        {$match:{age:{$gt:20}}},
        // we are sort age by decending order
        {$sort:{age:-1,name:1}},
        // we only get age ex 1 true  0 false
        {$project:{age:1}}
        

    ])
    res.send(r)
})
app.post("/operator",async(req,res)=>{
   
    const r = await userModel.aggregate([
        
        {$match:{
            $and:[
                {age:{$gt:20}},
                {age:{$lt:23}}
            ]
        }},
                

    ])
    res.send(r)
})

app.post("/lookup",async(req,res)=>{
    const r= await bookModel.aggregate([
        {
            $lookup:{
                from:"users",
                localField:"uid",
                foreignField:"_id",
                as:"purchas"
            }
        },
        {
            $unwind:"$purchas" // data array th pahije ka obj madi default array obj = unwind
        }
    ])
    res.send(r)
})

app.listen(8080)