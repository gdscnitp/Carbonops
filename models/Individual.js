
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
                validator: function(val) {
                    // not working --- return /d{6}/.test(val);
                    return val.toString().length === 6
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
       // required: true,
        trim: true,
        validate: [ isURL, 'Invalid Facebook Url' ]
    },
    
    profileImage:{
        type: String,
        //required: true,
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
    
    const iSchema = individualSchema;
    
    if (mongoose.models && mongoose.models.Individual) return mongoose.models.Individual
   
    return mongoose.model('Individual', iSchema)
  }
  const Indiv= getDemo()
  module.exports= Indiv;
  
