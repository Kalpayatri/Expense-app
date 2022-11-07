const mongoose=require('mongoose')

const Schema=mongoose.Schema
const budgetSchema=new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    amount:{
        type:Number,
        default:0,
        required:true,
        min:0
    }
})

const Budget=mongoose.model('Budget',budgetSchema)

module.exports=Budget