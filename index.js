const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/productmodel');
const productRoute = require('./routes/productRoute');


const app = express()

//middleware
app.use(express.json());


//Routes
app.use("/api",productRoute);




mongoose.connect("mongodb+srv://tharmasukij1215:VFJfMDIprh05xV8F@backenddb.w32rd.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(()=> {
    console.log("Connected to database!");
    app.listen(3000, ()=>{
        console.log('Server is running on port 3000')
    });
})
.catch(()=>{
    console.log("Connection failed!");
})

