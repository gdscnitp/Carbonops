import mongoose from 'mongoose';
const { Schema } = mongoose;
const {ObjectId} = mongoose.Schema.Types;

const scoreSchema = new Schema({
    individualId:{
        type: ObjectId,
        ref: 'inidividual'
    },
},{
    timestamps:true
})

export default mongoose.models.score || mongoose.model('score',scoreSchema)