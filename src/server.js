const express = require('express'); // ajudará na definições de rotas
const mongoose = require('mongoose'); // ajudará na definições de banco de dados.
const cors = require('cors'); // ajudará na definições de banco de dados.
const path = require('path');

const socketio = require('socket.io');
const http = require('http');

const routes = require('./routes'); // importa rotas
const app = express(); // roda a aplicação
const server = http.Server(app);
const io = socketio(server);
// Conecta com o banco criado.
mongoose.connect('mongodb+srv://frankedeveloper:frankedeveloper@omnistack-artek.mongodb.net/semana09?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const connectedUsers = {};

io.on('connection', socket => {
    const { user_id } = socket.handshake.query;
    connectedUsers[user_id] = socket.id;
});

app.use((req, res, next) => {
    req.io = io;
    req.connected = connectedUsers;

    return next();
});

app.use(cors());
app.use(express.json()); // fala pro express ler json
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes); // utiliza as rotas

server.listen(3333); // escuta aplicação em localhost:3333
