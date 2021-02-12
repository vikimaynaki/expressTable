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
    if(req.query.id){
        const id = req.query.id
            
        Userdb.findById(id)
        .then(data => {
            if(!data){
                res.status(404).send({message: "not found user witih id" + id})
            }else {
                res.send(data)
            }
        }) 
        .catch(err =>{
            res.status(500).send({message:err.message || "eror retriving user with id" + id})
        })
    }else{
    // find data all users
    Userdb.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({ message:err.message || "erorr nothing find item"})
        })
}
}


// update data 
exports.update = function(req,res) {
if(!req.body){
    return res
    .status(400).send({message: " data to update canot be emtpy"})
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data => {
        if(!data){
            res.status(400).send({message: `cannnot update with ${id},maybe user not found `})
        }else{
            res.send(data)
        }
    })
    .catch(err => {
        res.status(500).send({message: "eror update user information"})
    })
}

// delete dta
exports.delete = function(req, res) {
    const id = req.params.id;
    Userdb.findByIdAndDelete(id)
    .then(data => {
        if(!data) {
            res.status(404).send({message: `cannot delete with id ${id} maybe is data wrong`})
        }else{
            res.send({
                message: "sukses delete"               
            })
        }
    })
    .catch(err => {
        res.status(500).send({message:`cannot delete user with id ${id}`
    });
    });
}