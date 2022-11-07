const mongoose= require('mongoose')

const Schema=mongoose.Schema
const expenseSchema=new Schema({
    name:{
        type:String,
        required:[true, 'name is required']

    },
    amount:{
        type:Number,
        default:0,
        required:true,
        min:0
    },
    categoryId:{
        type:Schema.Types.ObjectId,
        ref:'Category',
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }

})

const Expense=mongoose.model('Expense',expenseSchema)

module.exports=Expense