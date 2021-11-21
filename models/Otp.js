import mongoose from 'mongoose';
const { Schema } = mongoose;


const otpSchema = new Schema({
    userId:{
        type: String,
        required: true,
        trim: true,
        
    },
    otpNum:{
        type:Number,
        required:true,
    },
    isOffline:{
        type:Boolean,
        required:true,
        default:false
    },
},{
    timestamps:true
})

export default mongoose.models.otp || mongoose.model('otp',otpSchema)