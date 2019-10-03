const express = require('express'); // ajudará na definições de rotas
const multer = require('multer'); // auxlio de upload de arquivos.
const uploadConfig = require('./config/upload'); // configurações de upload

/**
 * Importações dos controllers.
 */
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const BookingController = require('./controllers/BookingController');
const DashboardController = require('./controllers/DashboardController');

const routes = express.Router();
const upload = multer(uploadConfig); // registra configurações de upload

// req.query acessar query params filtros
// req.params acessar route params para edição e delete
// req.body acessar corpo da requisição (para criação, edição)

/**
 * Definições de rotas
 */
routes.post('/sessions', SessionController.store);
routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.post('/spots/:spot_id/bookings', BookingController.store);

routes.get('/dashboard', DashboardController.show);

module.exports = routes;
