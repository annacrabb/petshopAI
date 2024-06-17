const express = require('express');
const {
    createPet,
    createSponsor,
    getPet,
    getPets,
    getSponsors,
    updatePet
} = require('../controllers/petController')

const router = express.Router();

//GET all pets
router.get('/sponsor', getPets)

//GET all sponsors
router.get('/acknowledgements', getSponsors)

//GET a single pet
router.get('/sponsor/:id', getPet)

//POST a new pet
router.post('/sponsor', createPet)

//POST a new sponsor
router.post('/acknowledgements', createSponsor)

//UPDATE an animal
router.patch('/sponsor/:id', updatePet)

router.get('./signup', () => {});
router.get('./login', () => {});
router.get('./sponsor', () => {});


module.exports = router;