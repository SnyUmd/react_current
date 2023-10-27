import connectDB from "@/utils/database"

const createItem = (req, res) => {
    console.log(`=========================`)
    console.log(`DB Access : ${connectDB()}`)
    console.log(`=========================`)
    console.log(req.body)
    return res.status(200).json({message: "アイテム作成"})
}

export default createItem

// mongodb+srv://root:<password>@cluster0.cqdnb95.mongodb.net/?retryWrites=true&w=majority