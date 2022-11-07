const mongoose= require('mongoose')
const isEmail=require('validator/lib/isEmail')

const Schema= mongoose.Schema
const userSchema= new Schema({
    email:{
        type: String,
        required:true,
        unique:true,
        validate:{
            validator: function(value){
                return isEmail(value)

            },
            mesaage: function(){
                return 'invalid Email format'
            }

            }
        },
    password:{
        type:String,
        required:[true,'email is required'],
        minlength:6,
        maxlength:64
       
    }
})

const User=mongoose.model('User',userSchema)

module.exports= User

