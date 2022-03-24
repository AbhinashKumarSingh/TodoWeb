const express=require("express")
const app=express();
const dotenv=require("dotenv")
const router=require("./routes/index")
const cors=require("cors")
app.use(express.json());
app.use(cors())
app.use("/",router);
dotenv.config()
//  app.post("/",(req,res)=>{
//      console.log(req.body)
//      res.send("Hello")
//  })
//console.log(process.env.MONGODB)

require("./db")
app.listen(5000,()=>{
    console.log("server is running")
})