const express = require('express'); // ajudará na definições de rotas
const mongoose = require('mongoose'); // ajudará na definições de banco de dados.
const cors = require('cors'); // ajudará na definições de banco de dados.
const path = require('path');

const routes = require('./routes'); // importa rotas
const app = express(); // roda a aplicação

// Conecta com o banco criado.
mongoose.connect('mongodb+srv://frankedeveloper:frankedeveloper@omnistack-artek.mongodb.net/semana09?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

app.use(cors());
app.use(express.json()); // fala pro express ler json
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes); // utiliza as rotas

app.listen(3333); // escuta aplicação em localhost:3333
