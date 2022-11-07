const Category= require('../models/categoryModel')

const categoryCltr={}

categoryCltr.list=(req,res)=>{
    Category.find()
    .then((categories)=>{
        res.json(categories)
    })
    .catch((err)=>{
        res.json(err)
    })
}

categoryCltr.create=(req,res)=>{
    const body= req.body
    const category= new Category(body)
    category.save()
    .then((category)=>{
        res.json(category)
    })
    .catch((err)=>{
        res.json(err)
    })

}

categoryCltr.show=(req,res)=>{
    const id= req.params.id
    Category.findById(id)
    .then((category)=>{
        res.json(category)
    })
    .catch((err)=>{
        res.json(err)
    })

}

categoryCltr.update=(req,res)=>{
    const body= req.body
    const id= req.params.id
    Category.findByIdAndUpdate(id)
    .then((category)=>{
        res.json(category)
    })
    .catch((err)=>{
        res.json(err)
    })

}

categoryCltr.destroy=(req,res)=>{
    const id= req.params.id
    Category.findByIdAndUpdate(id, {isDeleted: true})
    .then((category)=>{
        res.json(category)
    })
    .catch((err)=>{
        res.json(err)
    })

}

module.exports=categoryCltr