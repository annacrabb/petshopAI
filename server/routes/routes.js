const express = require('express');
const {
    createPet,
    createSponsor,
    getPet,
    // getPets,
    getPetsOne,
    getPetsTwo,
    getPetsThree,
    getSponsors,
    updatePet
} = require('../controllers/petController')

const router = express.Router();

//GET all pets
// router.get('/sponsor', getPets)

router.get('/sponsor/tierOne', getPetsOne)
router.get('/sponsor/tierTwo', getPetsTwo)
router.get('/sponsor/tierThree', getPetsThree)

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



module.exports = router;