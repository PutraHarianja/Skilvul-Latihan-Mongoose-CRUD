const ArtisModel = require('../models/artis.model')


class ArtisController {

    static async createNewArtis(req, res) {
        // get 'name' from req body.
        // create a new artis object.
        // save to db.

        try {
            const existedArtis = await ArtisModel.findOne({
                name: req.body.name
            })

            if (existedArtis) {
                res.status(400).send({
                    message: 'user already exist'
                })
            } else {
                const name = req.body.name;
                const artis = new ArtisModel({ name: name })

                const saved = await artis.save()
                res.status(201).send({
                    message: 'user created',
                    saved
                });
            }

        } catch (error) {
            res.status(500).send({ err: error })
        }
    }

    static async getAllArtis(req, res) {
        ArtisModel.find({}, (error, artises) => {
            if (error)
                return res.send(error);

            res.json(artises)
        })
    }

    static async getArtisbyID(req, res) {
        ArtisModel.findById({
            _id : req.params.id
        }, (error, result) => {
            if (error){
                return res.send({
                    message: 'no data found'
                });
            }else{
                res.status(200).send({
                    message: 'showing data',
                    result
                })
            }
        })
    }

    static async updateArtisbyID(req, res) {
        ArtisModel.findByIdAndUpdate({
            _id : req.params.id
        }, {
            name: req.body.name
        },(error, result) => {
            if (error){
                return res.send({
                    message: 'no data found, cannot updated'
                });
            }else{
                res.status(200).send({
                    message: 'update data success',
                    result
                })
            }
        })
    }

    static async deleteArtisbyID(req, res) {
        ArtisModel.deleteOne({
            _id: req.params.id
        },(error, result) => {
            if(error) {
                res.status(400).send({
                    message : 'error, no id found, cannon delete'
                })
            }else {
                res.status(200).send({
                    message: 'delete successfully'
                })
            }
        })
    }

}

module.exports = ArtisController