//import mongoose from 'mongoose';
//const { Schema } = mongoose;
//import { isEmail,isStrongPassword,isURL} from 'validator';
//import bcrypt from 'bcryptjs'

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const {isEmail,isStrongPassword,isURL} = require("validator");
const SALT_WORK_FACTOR = 10;

const individualSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
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
    address:[{
        area:{
            type:String,
            required: true,
            trim: true,
        },
        city:{
            type:String,
            required: true,
            trim: true,
        },
        state:{
            type:String,
            required: true,
            trim: true,
        },
        pincode:{
            type:Number,
            required: true,
            
            validate: {
                validator: function(v) {
                    return /d{6}/.test(v);
                },
                message: 'not a valid 6 digit pincode'
            }
        },
        nation:{
            type:String,
            required: true,
        }        
    }],
    dob:{
        type: Date,
        required: true,
        trim: true,

    },
    occupation:{
        type: String,
        required: true,
        trim: true,
    },
    linkedin:{
        type: String,
        required: true,
        trim: true,
        validate: [ isURL, 'Invalid Linkedin Url' ]
    },
    facebook:{
        type: String,
        required: true,
        trim: true,
        validate: [ isURL, 'Invalid Facebook Url' ]
    },
    
    profileImage:{
        type: String,
        required: true,
        trim: true,
        validate: [ isURL, 'Invalid Url' ]
    
    },
},{
    timestamps:true
})

individualSchema.pre('save', async function save(next) {
    if (!this.isModified('password')) return next();
    try {
      const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
      this.password = await bcrypt.hash(this.password, salt);
      return next();
    } catch (err) {
      return next(err);
    }
});



function getDemo () {
    // Create your Schema
    const iSchema = individualSchema;
    // Check to see if the model has been registered with mongoose
    // if it exists return that model
    if (mongoose.models && mongoose.models.Individual) return mongoose.models.Individual
    // if no current model exists register and return new model
    return mongoose.model('Individual', iSchema)
  }
  const Indiv= getDemo()
  module.exports= Indiv;
  console.log(Indiv)
//var Individual;
// function modelAlreadyDeclared() {
//     try {
//       mongoose.model('Individual',individualSchema)  // it throws an error if the model is still not defined
//       return true
//     } catch (e) {
//       return false
//     }
//   }
// if (! modelAlreadyDeclared()) {
//      mongoose.model('Individual', individualSchema)
//   }
  
  
//export const User = mongoose.models.User || mongoose.model('User', user);
//export default mongoose.models.Inidividual //|| mongoose.model('Individual',individualSchema)
//module.exports=mongoose.models.Inidividual || mongoose.model("Individual",individualSchema)
