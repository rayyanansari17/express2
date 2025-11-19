import express from "express"
import env from "dotenv"
env.config()

const app = express()
const port = process.env.PORT

app.get("/home",(req,res)=>{
    try {
        res.status(200).json({msg :"Hello Everyone"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error})
    }
})

app.listen(port,()=>{
    console.log(`server start hogaya  http://localhost:${port}`);
})