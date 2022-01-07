const mongoose = require("mongoose");

const {isURL} = require("validator");

const productSchema = new mongoose.Schema({
    organisationId:{
        type: mongoose.Schema.Types.ObjectId,
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
        validate: [ isURL, 'Please provide a valid Url' ]
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

function getDemo () {
  
    const iSchema = productSchema;
  
    if (mongoose.models && mongoose.models.product) return mongoose.models.product
   
    return mongoose.model('product', iSchema)
  }
  const proSc= getDemo()
  module.exports= proSc;
  console.log(proSc)
