var express = require('express');
var morgan = require('morgan')
var cors = require('cors')
var app = express();

var { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);


// Middlewares
app.use(morgan('dev'));
app.use(express.json()); //antigo body-parser
app.use(cors({origin: 'http://localhost:4200'}));

// Routes
app.use('/api/lazer', require('../routes/lazer.routes'));


// Iniciando o servidor 
app.listen(app.get('port'), () =>{
    console.log('Servidor escutando na porta 3000');
})