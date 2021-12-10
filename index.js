const dotenv = require('dotenv')
dotenv.config()

const express = require('express')

const router = require('./routes')
const db = require('./helpers/db')


const port = process.env.PORT || 3000
const url = process.env.MONGO_URI
const dbOptions = {
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS
}

async function main() {

    try {
        await db.openDBConnection(url, dbOptions)

        const app = express()
        app.use(router)

        app.listen(port, () => {
            console.log('server is listening on', port)
        })
    } catch (error) {
        console.log(error)
    }

}

main()
