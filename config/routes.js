const express=require('express')
const budgetCltr = require('../app/controllers/budgetController')
const categoryCltr = require('../app/controllers/budgetController')
const expenseCltr = require('../app/controllers/expenseController')
const router=express.Router()
const userController=require('../app/controllers/userController')
const {authenticateUser}= require('../middlewares/authentication')

router.post('/users/register', userController.register)
router.post('/users/login',userController.login)
router.get('/users/account', authenticateUser, userController.account)

router.get('/api/users',userController.list)
router.post('/api/users',userController.create)
router.get('/api/users/:id',userController.show)
router.put('/api/users/:id',userController.update)
router.delete('/api/users/:id',userController.destroy)


router.get('/api/expenses', expenseCltr.list)
router.post('/api/expenses', expenseCltr.create)
router.get('/api/expenses/:id', expenseCltr.show)
router.put('/api/expenses/:id', expenseCltr.update)
router.delete('/api/expenses/:id', expenseCltr.destroy)

router.get('/api/categories', categoryCltr.list)
router.post('/api/categories', categoryCltr.create)
router.get('/api/categories/:id', categoryCltr.show)
router.put('/api/categories/:id', categoryCltr.update)
router.delete('/api/categories/:id', categoryCltr.destroy)

router.get('/api/budget',budgetCltr.list)
router.post('/api/budget',budgetCltr.create)
router.get('/api/budget/:id',budgetCltr.show)
router.put('/api/budget/:id',budgetCltr.update)
router.delete('/api/budget/:id',budgetCltr.destroy)





module.exports=router