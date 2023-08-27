//connect to database mongoose
const mongoose = require ('mongoose')


const connectdb =async () =>{
    try {
        await mongoose.connect("",{ useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to the DB')
    } catch (error) {
        console.log(err)
    }
};

module.exports = connectdb;