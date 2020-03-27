const express = require('express');
const cripto = require('crypto');
const connection = require('./database/connections');

const ongs_controller = require('./controllers/ong_controller');
const incident_controller = require('./controllers/incident_controller');
const profille_controller = require('./controllers/profille_controller');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

    routes.post('/session', sessionController.create);

   routes.post('/ongs', ongs_controller.create);
   routes.get('/ongs', ongs_controller.list);

   routes.post('/incidents', incident_controller.create);
   routes.get('/incidents', incident_controller.list);
   routes.delete('/incidents/:id', incident_controller.delet);

   routes.get('/profille', profille_controller.list);
module.exports = routes;




// routes.post('/users', (request,response) => {

//     usado pelo query 
//     const params = request.query;

//     usado pelo params
//     const route = request.params;

//     usado pelo body
//     const body = request.body;
//     console.log(body);

//     const data = request.body;

//     console.log(data);

//     return response.json({
//         evento: 'testa da semana oministek',
//         aluno: 'joão vitor zucchinli ghislandi'
//     });
// });
