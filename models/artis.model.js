const mongoose = require('mongoose')

const opts = {
    timestamps: true
}

const artisSchema = new mongoose.Schema(
    {
        name: {

        }
    }, opts)

const ArtisModel = mongoose.model("Artis", artisSchema)
module.exports = ArtisModel

