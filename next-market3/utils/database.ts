// ati1s/database.]=

import mongoose from "mongoose"

var dbName = `appDataBase`
var dbUser = `root`
var dbPass = `12345roOt`

var mongodbAddress = `mongodb+srv://${dbUser}:${dbPass}@cluster0.cqdnb95.mongodb.net/${dbName}?retryWrites=true&w=majority`
// var mongodbAddress = `mongodb+srv://root:12345roOt@cluster0.cqdnb95.mongodb.net/${dbName}?retryWrites=true&w=majority`
// var mongodbAddress = `mongodb+srv://root:@cluster0.cqdnb95.mongodb.net/?retryWrites=true&w=majority`

const connectDB = async() => {
    try{
        // mongoose.connect("mongodb+srv://root:12345roOt@cluster0.cqdnb95.mongodb.net/appDataBase?retryWrites=true&w=majority")
        await mongoose.connect(mongodbAddress)
        console.log(`success: Connected to MongoDB`)
        // return true
    }catch(err){
        console.log(`Failure: Unconnected to MongoDB`)
        // throw new Error()
        // return false
    }
}
export default connectDB
