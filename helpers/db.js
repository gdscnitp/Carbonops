import mongoose from 'mongoose';

function initDB(){
    //check if connection has already been established
    if (mongoose.connections[0].readyState)
    {
        console.log('Already connceted')
        return
    }
    mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/envappDB",{
        useNewUrlParser:true
    })

    mongoose.connection.on('connected', ()=>console.log('connected to Mongo DB'))
    mongoose.connection.on('error', (err)=>console.log(err))

}

export default initDB

