const mongoose = require ('mongoose')

//creating a person schema

const personSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:Number,
    favoriteFoods:[String]
})

module.exports=mongoose.model('personne',personSchema)