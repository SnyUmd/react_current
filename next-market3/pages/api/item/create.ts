import connectDB from "@/utils/database"
import { ItemModel } from "@/utils/schemaModels"
import outLog from "@/utils/comon"


//************************************************************************** */
const createItem = async(req, res) => {
    try{
        await connectDB()
        outLog("-------------------------------");
        console.log(req.body)
        await ItemModel.create(req.body)
        return res.status(200).json({message: "アイテム作成成功"})
    }catch(err){
        return res.status(400).json({message: "アイテム作成失敗"})
    }
}




export default createItem

// mongodb+srv://root:<password>@cluster0.cqdnb95.mongodb.net/?retryWrites=true&w=majority