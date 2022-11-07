const express=require('express')
const configureDB = require('./config/database')
const router=require('./config/routes')
const cors= require('cors')
const app=express()
const port=3055

configureDB()
app.use(express.json())
app.use(cors())
app.use(router)

app.listen(port,()=>{
    console.log('server running on port',port)
})

