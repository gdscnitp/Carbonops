import mongoose from 'mongoose';
const { Schema } = mongoose;
import { isEmail,isStrongPassword,isURL} from 'validator';

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
    socialMedia:{
        type: String,
        required: true,
        trim: true,
        validate: [ isURL, 'Invalid Url' ]
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


export default mongoose.models.inidividual || mongoose.model('individual',individualSchema)