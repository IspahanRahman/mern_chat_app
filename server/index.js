const express =require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const userRoutes=require('./routes/userRoutes')
const app=express()
require("dotenv").config()


app.use(cors())
app.use(express.json())

app.use('/api/auth',userRoutes)
const URI=process.env.MONGO_URL
mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Db connection Successful")

}).catch((e)=>{
    console.log(e)
})

const server=app.listen(process.env.PORT,()=>{
    console.log(`Server Started on Port ${process.env.PORT}`)
})