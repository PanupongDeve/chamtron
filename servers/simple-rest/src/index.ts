import 'dotenv/config'
import express, { Request, Response} from 'express'
const compression = require('compression')
import helmet from "helmet";
import bodyParser from 'body-parser'
const cors = require('cors')

import { cloudFireStoreManger } from './libs/cloudfirestore/CloudForeStoreManger';
import { usersController } from './controllers/v1/users'


cloudFireStoreManger.connect(() => {
    console.log('Connect Cloud firestore successful!')
    const app = express();

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use(compression())
    app.use(helmet())
    app.use(cors())
    app.use(usersController)

    const PORT = process.env.SERVER_PORT || 3000

    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
})

