const person = require('../model/person')
const personSchema = require('../model/person')

//route create one person

exports.createPerson = async (req,res)=>{
    try {
 const NewPerson = new personSchema(req.body)
 await NewPerson.save()
 res.status(200).send({msg:'you did it , the person is added',NewPerson})  
    } catch (err){
      res.status (500).send('the person cannot be added')
      console.log(err)  
    }
}

//create many records of persons
exports.createManyPersons =async (req,res)=>{
    try {
        const arrayOfPeople = req.body
        const NewPersons= await personSchema.create(arrayOfPeople)
        res.status(200).send({msg:'you did it , the persons are added',NewPersons})
    } catch (err) {
        res.status(500).send('cannot add persons')
        console.log(err)
    }
}


//Search the Database for people

exports.findPeople = async(req,res)=>{try {
    const people = await personSchema.find()
    res.status(200).send(people)
} catch (err) {
    res.status(500).sen("cannot get people")
    console.log (err)
}
   }

//find person using food

exports.findUsingFood = async(req,res)=>{try {
    const food = req.params
    const personFood = await personSchema.findOne(food)
    res.status(200).send(personFood)
} catch (err) {
    res.status(500).sen("cannot get the person with the food set")
    console.log (err)
}
   }

// find a person using an id

exports.findPersonById = async (req, res) => {
    try {

        const { id } = req.params
        const personById = await personSchema.findById(id)
        res.status(200).send(personById)

    } catch (err) {
        res.status(500).send("cannot get person by id")
        console.log(err);
    }
}

//find and update using classic method

exports.classicUpdateFood = async (req,res) => {
    try {

        const { id } = req.params
        const personById = await personSchema.findById(id)
        const newfood = req.body.favoriteFoods

        person.favoriteFoods.push(newfood)

        await personById.save();
        res.status(200).send(personById)

    } catch (err) {
        res.status(500).send("problem in updating food : classic method")
        console.log(err);
    }
}


//find and update using findOneandUpdate
exports.UpdateFood = async (req,res) => {
    try {

        const { name } = req.params
        await personSchema.findOneAndUpdate(name,{$set:{...req.body}})
    
        res.status(200).send('the person hzd been updated')

    } catch (err) {
        res.status(500).send("problem in updating")
        console.log(err);
    }
}



//remove a person using findbyIdAndRemove

exports.deletePerson = async (req, res) => {
    try {
      const {id} = req.params
      await personSchema.findByIdAndRemove(id)
      res.status(200).send("the person has been successfully deleted")
  
  
    } catch (err) {
      res.status(500).send("can't remove")
      console.log(err);
    }
  }



 