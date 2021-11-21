import mongoose from 'mongoose';
const { Schema } = mongoose;
const {ObjectId} = mongoose.Schema.Types;
import {isURL} from 'validator';

const eventSchema = new Schema({
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
        validator: function(v){
            if (v != true) {
                return "Online event"
            }
        },
        location:{
            type:String,
            required:true,
            trim: true,
        }
        
    },
    enquiryDetails:{
        type:Mixed,
        required:true,
    },
    organiserId:{
        type: ObjectId,
        ref: 'organisation'
    },

},{
    timestamps:true
})

export default mongoose.models.event || mongoose.model('event',eventSchema)