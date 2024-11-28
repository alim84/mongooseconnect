const mongoose= require('mongoose')


const mongooseconnect=async()=>{

 try{
    await   mongoose.connect("mongodb+srv://alimscohfw:alimscohfw@cluster0.yfgu72u.mongodb.net/alimscohfw?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Connected")
 }catch(error){
    console.log("Broken")
    process.exit(1)
 }
}

module.exports=mongooseconnect

