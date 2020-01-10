const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const uploadRouter = require('./routes/upload');
const userRouter = require('./routes/user');
const productRouter= require('./routes/products');
const justforuRouter=require('./routes/justforyou');
const cors = require('cors')

var path = require('path');


mongoose.connect(process.env.DB,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true})
.then((db) =>
{
console.log("Sucessfully connected mongodb server");
})

const app = express();
app.options('*',cors());


app.use(express.json());
app.use(express.static(path.resolve('./public/uploads')));
app.use('/user',userRouter);
app.use('/upload', uploadRouter);
app.use('/product',productRouter);
app.use('/justforu',justforuRouter);

app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`);
});

