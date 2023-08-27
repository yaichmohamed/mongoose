const express = require ('express');
const { createPerson, createManyPersons, findPeople, findUsingFood, findPersonById, classicUpdateFood, deletePerson, UpdateFood } = require('../controllers/person');

//creations des routes
const appRouter = express.Router();

appRouter.post('createPerson',createPerson);
appRouter.post('createManyPersons',createManyPersons);
appRouter.get('findPeople',findPeople);
appRouter.get('findUsingFood/:food',findUsingFood);
appRouter.get('findpersonById/:id',findPersonById);
appRouter.put('classicUpdateFood/:id',classicUpdateFood);
appRouter.put('UpdateFood/:name',UpdateFood);
appRouter.delete('deletePerson/:id',deletePerson);


module.exports=appRouter