const User= require('../models/userModel')
const bcryptjs=require('bcryptjs')
const jwt= require('jsonwebtoken')
const userController={}

userController.register=(req,res)=>{
    const body= req.body
    const user= new User(body)
    console.log(user)
    bcryptjs.genSalt()
    .then((salt)=>{
        bcryptjs.hash(user.password,salt)
        .then((encrypted)=>{
            user.password= encrypted
            user.save()
            .then((user)=>{
                res.json(user)
            })
            .catch((err)=>{
                res.json(err)
            })
         })
    })

}


userController.login=(req,res)=>{
    const body= req.body
    User.findOne({ email: body.email })
    .then((user)=>{
        if(!user){
            res.json({ errors : 'invalid email or password'})
        }else{
            bcryptjs.compare(body.password, user.password)
            .then((match)=>{
                if(match){
                    const tokenData={
                        _id: user._id,
                        email: user.email,
                    }
                    const token=jwt.sign(tokenData,'real123',{ expiresIn: '100d'})
                    res.json({ token : `Bearer ${token}`})
                }else{
                    res.json({ errors: 'invalid email or password'})
                }
            })
        }
    })
   
}



userController.account=(req,res)=>{
    res.json(req.user)
}



userController.list=(req,res)=>{
    User.find()
    .then((users)=>{
        res.json(users)

    })
    .catch((err)=>{
        res.json(err)
    })

}

userController.create=(req,res)=>{
    const body= req.body
    const user= new User(body)
    user.save()
    .then((user)=>{
        res.json(user)

    })
    .catch((err)=>{
        res.json(err)
    })

}

userController.show=(req,res)=>{
    const id= req.params.id
    User.findById(id)
    .then((user)=>{
        res.json(user)

    })
    .catch((err)=>{
        res.json(err)
    })

}

userController.update=(req,res)=>{
    const body= req.body
    const id= req.params.id
    User.findByIdAndUpdate(id)
    .then((user)=>{
        res.json(user)

    })
    .catch((err)=>{
        res.json(err)
    })

}

userController.destroy=(req,res)=>{
    const id= req.params.id
    User.findByIdAndUpdate(id, {isDeleted: true})
    .then((user)=>{
        res.json(user)

    })
    .catch((err)=>{
        res.json(err)
    })

}


module.exports=userController