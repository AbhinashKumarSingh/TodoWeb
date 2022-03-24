const express=require("express");
const User=require("../models/Schema")
const router=express.Router();
 router.post("/create",async(req,res)=>{

    
        console.log(req.body)
        const {avatar,performance}=req.body;
      //   if(!avatar || !performance){
      //       const result={message:"Invalid data",
      //   status:401};
      //   return result;
      //   }
        const user=new User({avatar:avatar,performance:performance})
        const result=await user.save();

        
       return  res.send(result)
     
 })

 router.put("/update-user/:id",async(req,res)=>{
    //console.log(req.body)
       const result=await User.findByIdAndUpdate(req.params.id)
        result.avatar=req.body.avatar;
        result.performance=req.body.performance
        const result1=await result.save()
        //console.log(result1)
        res.send(result1)
 })
 router.get("/edit-user/:id",async(req,res)=>{
    console.log(req.params.id)
       const result=await User.findByIdAndUpdate(req.params.id, {
         
        })
       
        console.log(result)
        res.send(result)
 })
 router.get("/get",async(req,res)=>{
     const result=await User.find({})
     //console.log(result)
     res.send(result)
 })
 router.delete("/delete-user/:id",async(req,res)=>{
    console.log(req.params.id)
       const result=await User.findByIdAndRemove(req.params.id, {
          
        })
        
        console.log(result)
        res.send(result)
 })


 module.exports =router;