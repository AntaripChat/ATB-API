const express = require('express');
const app = express();
const apiRoute = require('./src/routes/index');

app.use('/api',apiRoute);

app.get('/',(req,res)=>{
    res.status(200).send({
        msg:"Hello"
    })
});

app.listen(6000,()=> {
    console.log('App running');
});