import {Router} from 'express'
import multer from 'multer'

import uploadConfig from './config/upload.js'


import SessionController from './controllers/SessionController'
import HouseController from './controllers/HouseController'

const routes = new Router()
const upload = multer(uploadConfig)

routes.post('/sessions', SessionController.store)

// upload.single envia 1 imagem
// upload.array envia mais de 1 imagem
routes.post('/houses', upload.single('thumbnail'),  HouseController.store)

export default routes
