const mongoose = require('mongoose')

let crudSchema= new mongoose.Schema({
    name:{
        type:'String',
       
    },
    age:{
        type:'Number',
       
    },
    email:{
        type:'String',
       
    },
  
})

module.exports=mongoose.model('store', crudSchema)