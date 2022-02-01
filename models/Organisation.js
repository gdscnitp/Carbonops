const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const {isEmail,isStrongPassword,isURL} = require("validator");

const SALT_WORK_FACTOR = 10;

const organisationSchema = new mongoose.Schema({
    organisationId:{
        type:String,
        required:true,
        trim: true,
    },
    organisationName:{
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
    password:{
        type: String,
        required: true,
        trim: true,
        validate: [ isStrongPassword, 'Please provide a strong password' ]
    },
    contact:{
        type: Number,
        required: true,
    },
    location:[{
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
    wasteRequirements:{
        type:mongoose.Schema.Types.Mixed,
        trim: true,
    },
    dealsProducts:{
        type:Boolean,
    },
    linkedin:{
        type:String,
        trim: true,
        validate: [ isURL, 'Please provide a valid linkedin Url' ],
        required: true
    },
    website:{
        type:String,
        required: true,
        trim: true,
        validate: [ isURL, 'Please provide a valid Url' ]
    },
    type:{
        type:String,
        required: true,
        trim: true,
        enum: ["Cooperatives","Self help groups","Private"]
    },

},{
    timestamps:true
})

// organisationSchema.pre('save', async function save(next) {
//     if (!this.isModified('password')) return next();
//     try {
//       const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
//       this.password = await bcrypt.hash(this.password, salt);
//       return next();
//     } catch (err) {
//       return next(err);
//     }
// });


function getDemo () {
    
    const iSchema = organisationSchema;
   
    if (mongoose.models && mongoose.models.organisation) return mongoose.models.organisation
   
    return mongoose.model('organisation', iSchema)
  }
  const Org= getDemo()
  module.exports= Org;
  

