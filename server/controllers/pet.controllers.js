const Pet = require('../models/pet.model'); 

module.exports = {
    //Create
    createPet: (req, res) => {
        console.log(req.body);
        Pet.create(req.body)
        .then((newPet) => {
            console.log(newPet);
            res.json(newPet);
        })
        .catch((err) => {
            res.status(400).json({message: 'something went wrong with create', error: err.errors})
        })
    },
    //Read
    getPets: (req, res) => {
        Pet.find({})
            .then((pets) => {
                console.log(pets);
                res.json(pets);
            })
            .catch((err) => {
                res.status(400).json({message: 'something went wrong with get all', error: err.errors})
            })
    },

    getOnePet: (req, res) => {
        Pet.findOne({_id: req.params.id})
            .then((pet) =>{
                console.log(pet);
                res.json(pet);
            })
            .catch((err) =>{
                res.status(400).json({message: 'something went wrong with get one', error: err.errors})
            })
    },

    //Update
    updatePet: (req,res) =>{
        Pet.updateOne({_id:req.params.id}, req.body, {new:true, runValidators: true})
            .then((pet) => {
                console.log(pet);
                res.json(pet);
            })
            .catch((err) => {
                res.status(400).json({message: 'something went wrong with update', error: err.errors})
            })
    },


    //Delete
    deletePet: (req, res) => {
        Pet.deleteOne({_id: req.params.id})
            .then((pet) =>{
                console.log(pet);
                res.json(pet);
            })
            .catch((err) => {
                res.status(400).json({message: 'something went wrong with delete', error: err.errors})
            })
    }

}