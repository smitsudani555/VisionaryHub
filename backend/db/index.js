const mongoose = require("mongoose")
const DB_NAME = require("../constant.js")

const connectDb = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        
    }
    catch(error){
        console.log("Mongo db connection faied : ",error);
        process.exit(1);
        
    }
}

module.exports = connectDb