import mongoose from 'mongoose';
const { Schema } = mongoose;
import { isEmail,isStrongPassword,isURL} from 'validator';

const organisationSchema = new Schema({
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
    wasteRequirements:{
        type:Mixed,
        trim: true,
    },
    dealsProducts:{
        type:Boolean,
    },
    linkedin:{
        type:String,
        trim: true,
        validate: [ isURL, 'Please provide a valid linkedin Url' ]
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

export default mongoose.models.organisation || mongoose.model('organisation',organisationSchema)