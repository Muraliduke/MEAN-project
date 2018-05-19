const mongoose = require('mongoose');

var User = mongoose.model('users',{
    name: {type: String},
    college: {type: String},
    location: {type: String},
    department: {type: String},
    purpose: {type: String}
});

module.exports = {User: User}