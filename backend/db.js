const mongoose=require('mongoose');
//MONGODB=mongodb://localhost:27017/employee
mongoose.connect(process.env.MONGODB,{
    useNewUrlParser:true,
    
    useUnifiedTopology:true,
    
}).then(()=>{
    console.log('connection successfull')
}).catch((err)=>console.log(err.message));