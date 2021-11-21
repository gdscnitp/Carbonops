import mongoose from 'mongoose';
const { Schema } = mongoose;


const regEventSchema = new Schema({
    individualId:{
        type: ObjectId,
        ref: 'individual'
    },
    eventId:{
        type: ObjectId,
        ref: 'event'
    },
    name:{
        
        ref: individualSchema.name,
        
    },
    mailId:{
        ref:individualSchema.email

    },
    phoneNumber:{
        ref:individualSchema.contact
    }
},{
    timestamps:true
})

export default mongoose.models.registeredevent || mongoose.model('registeredevent',regEventSchema)