const mongoose= require("mongoose")

const testSchema= new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
    },
    contact:{
        type: Number
    }
})

function getDemo () {
    // Create your Schema
    const iSchema = testSchema;
    // Check to see if the model has been registered with mongoose
    // if it exists return that model
    if (mongoose.models && mongoose.models.Test) return mongoose.models.Test
    // if no current model exists register and return new model
    return mongoose.model('Test', iSchema)
  }
  const Indiv= getDemo()
  module.exports= Indiv;
  //console.log(Indiv)

//module.exports=mongoose.model('Test',testSchema)