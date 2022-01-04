import mongoose from 'mongoose';
const { Schema } = mongoose;
import { isEmail,isStrongPassword,isURL} from 'validator';
import bcrypt from 'bcryptjs'
const SALT_WORK_FACTOR = 10;

const individualSchema = new Schema({
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



export default mongoose.models.Inidividual || mongoose.model('Individual',individualSchema)