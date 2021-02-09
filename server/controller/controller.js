var Userdb = require('../model/model');

// create and save in here
exports.create = function(req, res) {
// validation Request
    if(!req.body){
        res.status(400).send({ message:"data tidak kosong"})
        return;
    }
    // new User
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })
    // save databases
    user
        .save(user)
        .then(data =>{
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Ada Eror di PEMBUATAN DATA"
            });
        });
}


// mencari sebuah data all user and single user
exports.find = function(req, res) {

}


// update data 
exports.update = function(req,res) {

}

// delete dta
exports.delete = function(req, res) {

}