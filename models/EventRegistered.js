const mongoose = require("mongoose");
// var {Indiv} = require("./Individual")
const {isEmail} = require("validator");

const regEventSchema = new mongoose.Schema({
    individualId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Individual'
    },
    eventId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'event'
    },
    name:{
        type:String,
        required:true,
        trim:true,
    },
    mailId:{
        type: String,
        required: true,
        unique:true,
        trim:true,
        validate: [ isEmail, 'Please provide a valid email ID' ]
    },
    phoneNumber:{
        type: Number,
        required: true,        
    },
},{
    timestamps:true
})

function getDemo () {
    
    const iSchema = regEventSchema;
    
    if (mongoose.models && mongoose.models.eventreg) return mongoose.models.eventreg
    
    return mongoose.model('eventreg', iSchema)
  }
  const EventRegSc= getDemo()
  module.exports= EventRegSc;
  console.log(EventRegSc)
