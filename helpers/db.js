const mongoose = require('mongoose')

async function openDBConnection(url, options) {
    return mongoose.connect(url, options)
}

module.exports = {
    openDBConnection
}