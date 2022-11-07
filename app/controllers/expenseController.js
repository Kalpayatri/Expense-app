const Expense=require('../models/expenseModel')
const expenseCltr={}

expenseCltr.list=(req,res)=>{
    Expense.find()
    .then((expenses)=>{
        res.json(expenses)
    })
    .catch((err)=>{
        res.json(err)
    })
}

expenseCltr.create=(req,res)=>{
    const body= req.body
    const expense= new Expense(body)
    expense.save()
    .then((expense)=>{
        re.json(expense)
    })
    .catch((err)=>{
        res.json(err)
    })
}

expenseCltr.show=(req,res)=>{
    const id= req.params.id
    Expense.findById(id)
    .then((expense)=>{
        re.json(expense)
    })
    .catch((err)=>{
        res.json(err)
    })
}

expenseCltr.update=(req,res)=>{
    const body= req.body
    const id= req.params.id
    Expense.findByIdAndUpdate(id)
    .then((expense)=>{
        re.json(expense)
    })
    .catch((err)=>{
        res.json(err)
    })
}

expenseCltr.destroy=(req,res)=>{
    const id= req.params.id
    Expense.findByIdAndUpdate(id, {isDeleted: true})
    .then((expense)=>{
        re.json(expense)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports=expenseCltr