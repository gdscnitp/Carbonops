const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
        trim: true,
        
    },
    otpNum:{
        type:Number,
        required:true,
    },
    isUsed:{
        type:Boolean,
        required:true,
        default:false
    },
},{
    timestamps:true
})

function getDemo () {
   
    const iSchema = otpSchema;
    
    if (mongoose.models && mongoose.models.otp) return mongoose.models.otp
    
    return mongoose.model('otp', iSchema)
  }
  const Otpwd= getDemo()
  module.exports= Otpwd;