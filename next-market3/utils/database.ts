// ati1s/database.]=

import mongoose from "mongoose"

var dbName = `appDataBase`
// var mongodbAddress = `mongodb+srv://root:12345roOt@cluster0.cqdnb95.mongodb.net/${dbName}?retryWrites=true&w=majority`
var mongodbAddress = `mongodb+srv://root:@cluster0.cqdnb95.mongodb.net/?retryWrites=true&w=majority`

const connectDB = () => {
    try{
        // mongoose.connect("mongodb+srv://root:12345roOt@cluster0.cqdnb95.mongodb.net/appDataBase?retryWrites=true&w=majority")
        mongoose.connect(mongodbAddress)
        console.log(`success: Connected to MongoDB`)
        return true
    }catch(err){
        console.log(`Failure: Unconnected to MongoDB`)
        throw new Error()
        return false
    }
}
export default connectDB
