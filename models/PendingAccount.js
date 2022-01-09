const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const {isEmail,isStrongPassword} = require("validator");
const SALT_WORK_FACTOR = 10;

const pendingAccountSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique:true,
        trim:true,
        validate: [ isEmail, 'Please provide a valid email ID' ]
    },
    password:{
        type: String,
        required: true,
        validate: [ isStrongPassword, 'Please provide a strong password' ]
    },
    contact:{
        type: Number,
        required: true,
        
    },
    dob:{
        type: Date,
        trim: true,
    },
    organisationId:{
        type:String,
        trim: true,
    },

})

function getPendingAccs () {
    
    const iSchema = pendingAccountSchema;
    
    if (mongoose.models && mongoose.models.PendingAcc) return mongoose.models.PendingAcc
   
    return mongoose.model('PendingAcc', iSchema)
  }
  const PendAcc= getPendingAccs()
  module.exports= PendAcc;
  console.log(PendAcc)

