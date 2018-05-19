const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Friends',(err)=>{
    if(!err){
        console.log('MongoDB connected successfully....');
    }else{
        console.log('Err in connection:'+JSON.stringify(err,undefined,2));
    }

})


module.exports = mongoose;