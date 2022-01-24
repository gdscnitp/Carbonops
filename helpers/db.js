import mongoose from 'mongoose';

var connectionAttempt = 0;
function connectMongoDb(){
   // console.log(process.env.MONGO_URL)
    mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/environmental-aawareness-app",
   
    (err)=> {
        if (err){
           
            console.log(err);
            return;
        }
        console.log("Database successfully connected✅");
        }
    );

}

function initDB(){
    //check if connection has already been established
    connectMongoDb();
    if (mongoose.connections[0].readyState)
    {
        console.log('Already connected')
        return
    }
  
    //initial connection error handling
    mongoose.connection.on('error', function (err){
        console.trace("Mongodb connection failed❌",err);

        if (connectionAttempt == process.env.DB_CONNECTION_RETTEMPT_LIMIT_NODE){
            console.log("REATTEMPT LIMIT REACHED/!");             
        }else{
            connectionAttempt++;
            connectMongoDb();
        }
    });

    mongoose.connection.on("connected",function(success){
        console.log("Successfully opened mongodb connection👍");
        connectionAttempt=0;
    });

    
}

export default initDB

