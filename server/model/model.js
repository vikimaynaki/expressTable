const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        uniqued: true
    },
    gender: String,
    status: String
})

const UserDb = mongoose.model('userDb', schema);

module.exports = UserDb;
