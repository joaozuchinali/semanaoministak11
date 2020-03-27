const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen('3333');
// get busca informações do back end
//  post, criar uma nova informação
// put altera
//  delete deleta

// tipos de parâmetros
// Query: parâmetros nomeados e enviados na rota após o símbolo de interrogação (filtros paginação)
// app.get('/users?evento=testa...', (request,response) => {
//     const params = request.params;

//     console.log(params);

//     return response.json({
//         evento: 'testa da semana oministek',
//         aluno: 'joão vitor zucchinli ghislandi'
//     });
// });

// Route Params: parametros utilizados para indentificar recursos
// app.get('/users/id:1', (request,response) => {
//     return response.json({
//         evento: 'testa da semana oministek',
//         aluno: 'joão vitor zucchinli ghislandi'
//     });
// });
// 

// Request Body: corpo da requisição utilizado para criar ou modificar recursos

// SQL's da vida: MySQL, SQLite, etc..
// NoSQL: MongoDB, CounchDB, etc..

// isse define o caminho do arquivo


