import connectDB from "@/utils/database"


//************************************************************************** */
const createItem = (req, res) => {
    // console.log(`=========================`)
    outLog(`<><><><><><><><><><><><><><>`)
    console.log(`DB Access : ${connectDB()}`)
    outLog(`<><><><><><><><><><><><><><>`)
    // console.log(`=========================`)
    console.log(req.body)
    return res.status(200).json({message: "アイテム作成"})
}

//************************************************************************** */
const outLog = (mess: string) =>{
    console.log(mess)
}

export default createItem

// mongodb+srv://root:<password>@cluster0.cqdnb95.mongodb.net/?retryWrites=true&w=majority