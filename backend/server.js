const express = require("express")
const PORT = 3000
const app = express()
app.use(express.json())


const globalError = require("./middlewares/globalErrorHandler")
app.use(globalError)

app.listen(PORT,()=>{
    console.log(`Server Connected at port no. ${PORT}`)
})