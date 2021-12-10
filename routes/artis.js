const express = require('express')

const ArtisController = require("../controllers/artis.controller")

const router = express.Router()

router.post('/', ArtisController.createNewArtis)
router.get('/', ArtisController.getAllArtis)
router.get('/:id', ArtisController.getArtisbyID)
router.put('/:id', ArtisController.updateArtisbyID)
router.delete('/id', ArtisController.deleteArtisbyID)

module.exports = router