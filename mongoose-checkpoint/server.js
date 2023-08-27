const express = require ("express");
const connectdb = require("./config/connect");
const appRouter = require("./routes/appRouter");
const app = express()
const port = 4500;

//link with our DB
connectdb()


// partie routes
app.use(express.json())
app.use('api/',appRouter)



app.listen(port,(err)=>{
    err?console.log(err):console.log(`Our server is running on http://localhost:${port}`);
})