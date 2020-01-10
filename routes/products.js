const express = require('express');
const router = express.Router();
const product = require('../model/product');
router.route('/')
.get((req,res,next)=>{
    product.find()
    .then((products)=>{
        res.json(products);
    }).catch(next);
})

.post((req,res,next)=>{
    product.create(req.body)
.then((products)=>{
    res.json(products);
}).catch(next);
});

router.route('/:id')
.get((req,res,next)=>{
    product.findById(req.params.id)
    .then((products) =>{
    res.json(products);
}).catch(next);
})

.post((req,res)=>{
    res.send("Not Supported");
});

module.exports = router;
