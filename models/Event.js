const mongoose = require("mongoose");

const {isURL} = require("validator");

const eventSchema = new mongoose.Schema({
    eventName:{
        type:String,
        required:true,
        trim:true,
    },
    eventType:{
        type:String,
        required: true,
        trim: true,
        enum: ["Online","Environmental Tasks","Carbon Score","Offline"]
    },
    eventDetails:[{
        date_time:{
            type: Date,
            required: true,
            trim: true,
        },
       
        duration:{
            type:Number,
            required:true,
        },
        poster:{
            type:String,
            required:true,
            trim: true,
            validate: [ isURL, 'Please provide a valid Url' ]
        },

    }],
    targetAudience:{
        type:String,
        required:true,
        trim: true,
    },
    eventDescription:{
        type:String,
        required:true,
        trim: true,
    },
    participantsLimit:{
        type:Number,
        required:true,
    },
    isOffline:{
        type:Boolean,
        required:true,
        // validator: function(v){
        //     if (v != true) {
        //         return "Online event"
        //     }
        // }, 
    },
    location:{
        type:String,
        required: false,
        trim: true,
    },
    enquiryDetails:{
        type:mongoose.Schema.Types.Mixed,
        required:true,
    },
    organiserId:{
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'onOrgModel'
    },
    onOrgModel:{
        type: String,
        required: true,
        enum: ['individual','organisation']
    }

},{
    timestamps:true
})

//console.log(eventSchema)


eventSchema.pre('save', function(next)
{
    if(this.isOffline===true)
    {
        //if this code block is true then the location should not be empty
        if(!this.location){
            console.log("Reqiuired field violation");
            return Promise.reject("Location is required for Offline event");
            // return res.status(500).json({msg:"Location field is mandatory for offline events"});
        } 

    }else
    {
        next();
    }
})

function getDemo () {
    
    const iSchema = eventSchema;
    
    if (mongoose.models && mongoose.models.event) return mongoose.models.event
    
    return mongoose.model('event', iSchema)
  }
  const EventSc= getDemo()
  module.exports= EventSc;
  console.log(EventSc)
