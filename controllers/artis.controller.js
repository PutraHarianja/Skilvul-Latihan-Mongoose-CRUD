const ArtisModel = require('../models/artis.model')


class ArtisController {

    static async createNewArtis(req, res){
        // get 'name' from req body.
        // create a new artis object.
        // save to db.

        try {
            const body = req.body

            const name = body.name;
            const artis = new ArtisModel({name: name})

            const saved = await artis.save()
            res.status(201).send(saved);

        } catch (error) {
            res.status(500).send({err : error})
        }
    }

    static async getAllArtis(req, res){
        res.send("success ini controller all Artis")
    }

    static async getArtisbyID(req, res){
        res.send("success ini controller Artis by ID")
    }

    static async updateArtisbyID(req, res){
        res.send("success ini controller update Artis")
    }

    static async deleteArtisbyID(req, res){
        res.send("success ini controller delete Artis")
    }

}

module.exports = ArtisController