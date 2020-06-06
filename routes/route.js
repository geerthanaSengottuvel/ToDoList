
const express=require('express');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const listRouter=express.Router();
listRouter.use(bodyparser.json());
const List =require('../models/todolist');

listRouter.route('/')
.get((req,res)=>{
    List.find({})
    .then((list)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json')
        res.json(list);
    })
    .catch((err)=>{
        console.log(err);
    })
})
.post((req,res)=>{
    List.create(req.body)
    .then((list)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json')
        res.json(list);
    })
    .catch((err)=>{
        console.log(err);
    })
});

listRouter.route('/:Id')
.put((req,res)=>{
    List.findByIdAndUpdate(req.params.Id,
    {
        $set:req.body
    },
    {
        new:true
    }
    )
    .then((list)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json')
        res.json(list);
    })
    .catch((err)=>{
        console.log(err);
    })
})
.delete((req,res)=>{
    List.findByIdAndRemove(req.params.Id)
    .then((list)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json')
        res.json(list);
    })
    .catch((err)=>{
        console.log(err);
    })
})

module.exports=listRouter;