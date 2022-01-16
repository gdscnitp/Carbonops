const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const {isEmail,isStrongPassword} = require("validator");
const SALT_WORK_FACTOR = 10;

const verifiedAccountSchema = new mongoose.Schema({
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
    isOrganisation:{
        type:Boolean,
        required: true
    }

})

verifiedAccountSchema.pre('save', async function save(next) {
    if (!this.isModified('password')) return next();
    try {
      const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
      this.password = await bcrypt.hash(this.password, salt);
      return next();
    } catch (err) {
      return next(err);
    }
    
});

function getVerAccs () {
    
    const iSchema = verifiedAccountSchema;
    
    if (mongoose.models && mongoose.models.VerifiedAccount) return mongoose.models.VerifiedAccount
   
    return mongoose.model('VerifiedAccount', iSchema)
  }
  const VerAcc= getVerAccs()
  module.exports= VerAcc;
  //console.log(VerAcc)

