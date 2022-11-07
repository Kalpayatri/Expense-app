const mongoose=require('mongoose')

const configureDB=()=>{
    mongoose.connect('mongodb://localhost:27017/oct2022')
    .then(()=>{
        console.log('connected to db')
    })
    .catch((err)=>{
        console.log('err connecting to db')
    })
}

module.exports=configureDB
