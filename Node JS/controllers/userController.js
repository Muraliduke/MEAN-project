const express = require('express');

var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {User} = require('../models/user');

router.get('/',(req,res)=>{

     User.find((err,docs)=>{
         if(!err){
             res.send(docs);
         }
         else{
            console.log('Err in connection of users:'+JSON.stringify(err,undefined,2));
         }
     })
})

router.post('/',(req,res)=>{
    var adduser = new User({
        name: req.body.name,
        college: req.body.college,
        location: req.body.location,
        department: req.body.department,
        purpose: req.body.purpose
    })

    adduser.save((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
           console.log('Err in saving of users:'+JSON.stringify(err,undefined,2));
        }
    })
})


router.get('/:id',(req,res)=>{

    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No record with given id: $(req.params.id)`);
    }

    User.findById(req.params.id,(err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
           console.log('Err in connection of user id:'+JSON.stringify(err,undefined,2));
        }
    })
})

router.put('/:id',(req,res)=>{

 

    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No record with given id: $(req.params.id)`);
    }

    var updateUser = {name: req.body.name,
        college: req.body.college,
        location: req.body.location,
        department: req.body.department,
        purpose: req.body.purpose}

    User.findByIdAndUpdate(req.params.id,{$get : updateUser},{new : true},(err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
           console.log('Err in connection of user id:'+JSON.stringify(err,undefined,2));
        }
    })
})


router.delete('/:id',(req,res)=>{

 

    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No record with given id: $(req.params.id)`);
    }


    User.findByIdAndRemove(req.params.id,(err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
           console.log('Err in connection of user id:'+JSON.stringify(err,undefined,2));
        }
    })
})

module.exports = router;