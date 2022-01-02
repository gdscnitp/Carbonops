import mongoose from 'mongoose';

function initDB(){
    //check if connection has already been established
    if (mongoose.connections[0].readyState)
    {
        console.log('Already connceted')
        return
    }
  
    //initial connection error handling
    mongoose.connection.on('error', function (err){
        console.trace("Mongodb connection failed❌",err);

        if (connectionAttempt == config.DB_CONNECTION_RETTEMPT_LIMIT_NODE){
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

    function connectMongoDb(){
        console.log(config.MONGO_URL)
        mongoose.connect(config.MONGO_URL,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex:true,
            useFindAndModify:false,
        },
        (err)=> {
            if (err){
                // logger.error({
                //     r: "mongodb",
                //     msg: "mongodb_connection_error",
                //     body:err,
                // });
                console.log(err);
                return;
            }

            // logger.info({
            //     r:"mongodb",
            //     msg:"Database_successfully_connected",
            //     body:"success",
            // });
            console.log("Database successfully connected✅");
            }
        );

    }

}

export default initDB

