const Budget=require('../models/budgetModel')

const budgetCltr={}

budgetCltr.list=(req,res)=>{
    Budget.find()
    .then((budget)=>{
        res.json(budget)
    })
    .catch((err)=>{
        res.json(err)
    })
}

budgetCltr.create=(req,res)=>{
    const body= req.body
    const budget= new Budget(body)
    budget.save()
    .then((budget)=>{
        res.json(budget)
    })
    .catch((err)=>{
        res.json(err)
    })
}

budgetCltr.show=(req,res)=>{
    const id= req.params.id
    Budget.findById(id)
    .then((budget)=>{
        res.json(budget)
    })
    .catch((err)=>{
        res.json(err)
    })
}

budgetCltr.update=(req,res)=>{
    const body= req.body
    const id= req.params.id
    Budget.findByIdAndUpdate(id)
    .then((budget)=>{
        res.json(budget)
    })
    .catch((err)=>{
        res.json(err)
    })
}

budgetCltr.destroy=(req,res)=>{
    const id= req.params.id
    Budget.findByIdAndUpdate(id, {isDeleted: true})
    .then((budget)=>{
        res.json(budget)
    })
    .catch((err)=>{
        res.json(err)
    })
}


module.exports=budgetCltr