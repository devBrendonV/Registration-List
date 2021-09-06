const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    nome:{type:String,required:true},
    email:{type:String,required:true},
    idade:{type:Number,required:true},
    description:{type: String,required:true},
    edit:{type:Boolean,default:false},
    done: {type: Boolean,required:true,default:false},
    creaedAt:{type: Date,default:Date.now}
})

module.exports=restful.model('Todo',todoSchema)