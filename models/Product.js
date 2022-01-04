import mongoose from 'mongoose';
const { Schema } = mongoose;
const {ObjectId} = mongoose.Schema.Types;
import {isURL} from 'validator';

const productSchema = new Schema({
    organisationId:{
        type: ObjectId,
        ref: 'organisation'
    },
    productName:{
        type:String,
        required:true,
        trim: true,
    },
    price:{
        type:Number,
        required:true,      

    },
    description:{
        type:String,
        required:true,
        trim: true,
    },
    productImage:{
        type:String,
        required:true,
        trim: true,
    },
    rating:{
        type:Number,
        required:true,
        enum: [1,2,3,4,5]
    },
    stockUnits:{
        type:Number,

    },
    isRecyclable:{
        type:Boolean,
        required: true,
    },
    productUrl:{
        type:String,
        trim: true,
        validate: [ isURL, 'Please provide a valid Url' ]
    },
},{
    timestamps:true
})

export default mongoose.models.product || mongoose.model('product',productSchema)