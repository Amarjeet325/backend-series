import dotenv, { config } from "dotenv"
import connectDB from "./db/index.js"

dotenv .config({
    path:"./env"
})
connectDB()
.then(()=>{
   app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server is running at: ${process.env.PORT }`)
   })

})


.catch((Error)=>{
    console.log("MOngoDB connection Failed",Error)
})
