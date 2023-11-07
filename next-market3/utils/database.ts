// ati1s/database.]=

import mongoose from "mongoose"
import outLog from "@/utils/comon"

var dbName = `appDataBase`
var dbUser = `root`
var dbPass = `12345roOt`

var mongodbAddress = `mongodb+srv://${dbUser}:${dbPass}@cluster0.cqdnb95.mongodb.net/${dbName}?retryWrites=true&w=majority`

const connectDB = async() => {
    try{
        await mongoose.connect(mongodbAddress)
        outLog("-------------------------------");
        console.log(`success: Connected to MongoDB`)
        // return true
    }catch(err){
        outLog("-------------------------------");
        console.log(`Failure: Unconnected to MongoDB`)
        // throw new Error()
        // return false
    }
}
export default connectDB
