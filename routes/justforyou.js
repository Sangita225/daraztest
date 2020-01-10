const express = require('express');
const router = express.Router();
const foryou = require('../model/justforu');
router.route('/')
.get((req,res,next)=>{
    foryou.find()
    .then((justforyou)=>{
        res.json(justforyou);
    }).catch(next);
})

.post((req,res,next)=>{
    foryou.create(req.body)
.then((justforyou)=>{
    res.json(justforyou);
}).catch(next);
});

router.route('/:id')
.get((req,res,next)=>{
    foryou.findById(req.params.id)
    .then((justforyou) =>{
    res.json(justforyou);
}).catch(next);
})

.post((req,res)=>{
    res.send("Not Supported");
});

module.exports = router;
