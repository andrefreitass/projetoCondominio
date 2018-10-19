var express = require('express');
var morgan = require('morgan');
var cors = require('cors');
var jwt = require('jsonwebtoken');
var app = express();

var { mongoose } = require('./database');
var  security  = require('./TokenSecurity');

// Settings
app.set('port', process.env.PORT || 3000);


// Middlewares
app.use(morgan('dev'));
app.use(express.json()); //antigo body-parser
app.use(cors({origin: 'http://localhost:4200'}));


//==== TESTES DE JWT =======
//authentication
app.post('/api/login', security.validarUsuario, (req, res, next) => {
 
    //auth ok
    const id = 1; //esse id viria do banco de dados
    var token = jwt.sign({ id }, "chaveDeCodificação", {
      expiresIn: 300 // expires in 5min
    });

   return res.status(200).send({ auth: true, token: token, message: 'Usuário validado com sucesso.' });

});


//==== FIM DOS TESTES JWT ======

// Routes
app.use('/api/lazer', require('../routes/lazer.routes'));
app.use('/api/comunicado', require('../routes/comunicado.routes'));
app.use('/api/enquete', require('../routes/enquete.routes'));
app.use('/api/pauta', require('../routes/pauta.routes'));
app.use('/api/multa', require('../routes/multa.routes'));
app.use('/api/advertencia', require('../routes/advertencia.routes'));
app.use('/api/funcionario', require('../routes/funcionario.routes'));


// Iniciando o servidor 
app.listen(app.get('port'), () =>{
    console.log('Servidor escutando na porta 3000');
})