const express =  require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

//Metodos HTTP: GET, POST, PUT, DELETE

//TIPOS DE PARAMETROS

//QUERY PARAMS: request.query (Filtros, ordenação, paginação..)
//ROUTE PARAMS: request.params (Identificar um recurso na alteração ou remoção);
//BODY:         request.body (Dados para criação ou alteração de um registro);

const app = express();

mongoose.connect('mongodb+srv://oministack:oministack@cluster0-evrlj.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,   
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);