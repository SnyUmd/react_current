import connectDB from "@/utils/database"
import { ItemModel } from "@/utils/schemaModels"


//************************************************************************** */
const createItem = async(req, res) => {
    try{
        // console.log(`=========================`)
        outLog(`<><><><><><><><><><><><><><>`)
        // console.log(`DB Access : ${await connectDB().toString()}`)
        await connectDB()
        outLog(`<><><><><><><><><><><><><><>`)
        // console.log(`=========================`)
        console.log(req.body)
        // console.log(`\n`)
        outLog(`<><><><><><><><><><><><><><>`)
        await ItemModel.create(req.body)
        return res.status(200).json({message: "アイテム作成成功"})
    }catch(err){
        return res.status(400).json({message: "アイテム作成失敗"})
    }
}

//************************************************************************** */
const outLog = (mess: string) =>{
    console.log(mess)
}


export default createItem

// mongodb+srv://root:<password>@cluster0.cqdnb95.mongodb.net/?retryWrites=true&w=majority