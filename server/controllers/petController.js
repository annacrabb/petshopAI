const Pet = require('../models/petModel')
const Sponsor = require('../models/sponsorModel')
const mongoose = require('mongoose')

// get all pets CHANGE TO MAKE TIERS. await Pet.find({cost: 10})
const getPets = async (req, res) => {
    const pets = await Pet.find({}).sort({ createdAt: -1 })
    console.log('list of pets:', pets)
    res.status(200).json(pets)
}
// use this set up to pull tiers differently
const getPetsOne = async (req, res) => {
    const petsOne = await Pet.find({ cost: 10 }).sort({ createdAt: -1 })

    res.status(200).json(petsOne)
}

// get all sponsors
const getSponsors = async (req, res) => {
    const sponsors = await Sponsor.find({}).sort({ createdAt: -1 })

    res.status(200).json(sponsors)
}

// get a single pet
const getPet = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such pet'})
    }
    const pet = await Pet.findById(id)

    if (!pet) {
        return res.status(404).json({ error: 'No such pet' })
    }
res.status(200).json(pet)
}

// create a new pet
const createPet = async (req, res) => {
    const { petName, petType, picture, desc, cost } = req.body

    console.log('Received data:', req.body)

    let emptyFields = []

    if (!petName) {
        emptyFields.push('petName')
    }
    if (!petType) {
        emptyFields.push('petType')
    }
    if (!picture) {
        emptyFields.push('picture')
    }
    if (!desc) {
        emptyFields.push('desc')
    }
    if (!cost) {
        emptyFields.push('cost')
    }

    if(emptyFields.length > 0){
        console.log('Empty fields:', emptyFields)
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }


    try {
        const pet = await Pet.create({ petName, petType, picture, desc, cost })
        res.status(200).json(pet)
    } catch (error) {
        console.error('Error creating pet:', error.message)
        res.status(400).json({ error: error.message })
    }
}

// create a new sponsor
const createSponsor = async (req, res) => {
    const { sponsorName } = req.body
    try {
        const sponsor = await Sponsor.create({ sponsorName })
        res.status(200).json(sponsor)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// update a pet
const updatePet = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).jason({error: 'No such pet'})
    }

    const pet = await Pet.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!pet) {
        return res.status(400).json({error: 'No such pet'})
    }

    res.status(200).json(pet)
}


module.exports = {
    createPet,
    createSponsor,
    getPets,
    getPet,
    getSponsors,
    updatePet
}