const jwt = require('jsonwebtoken')
const User = require('../app/models/userModel')
const router = require('../config/routes')

const authenticateUser = (req, res, next) => {
    const token = req.header('Authorization').split(' ')[1]
    // console.log(token)
    // next()

    router.post("/login", async function (req, res) {
        try {
            const result = await User.findOne({
                email: req.body.email,
                password: req.body.password
            })
            if (result) {
                res.send(result)
            } else {
                res.status(500).json("Error")
            }
        } catch (error) {
            res.status(500).json(error)
        }
    
    })
    
    router.post("/register", async function (req, res) {
        try {
           const newuser= new User(req.body)
           await newuser.save()
           res.send('User Registered Successfully')
        } catch (error) {
            res.status(500).json(error)
        }
    
    })

    let tokenData
    try {
        tokenData = jwt.verify(token,'')
        User.findById(tokenData._id)
            .then((user) => {
                req.user = user
                next()

            })
            .catch((err) => {
                req.json(err)
            })

    } catch (e) {
        res.json(e.message)

    }

}






module.exports = {
    authenticateUser,
    router
   
}