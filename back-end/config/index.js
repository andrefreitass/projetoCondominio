var express = require('express');
var morgan = require('morgan');
var cors = require('cors');
var jwt = require('jsonwebtoken');
var app = express();

var { mongoose } = require('./database');


// Settings
app.set('port', process.env.PORT || 3000);


// Middlewares
app.use(morgan('dev'));
app.use(express.json()); //antigo body-parser
app.use(cors({origin: 'http://localhost:4200'}));

var  tokenSecurity  = require('./TokenSecurity');


//==== TESTES DE JWT =======
//authentication
app.post('/api/login', (req, res, next) => {

    if(req.body.nome === 'teste' && req.body.nome === 'teste'){
      //auth ok
      const id = 1; //esse id viria do banco de dados
      var token = jwt.sign({ id }, "chaveDeCodificação", {
        expiresIn: 300 // expires in 5min
      });

     return res.status(200).send({ auth: true, token: token, message: 'Usuário validado com sucesso.' });
    } else {
      res.status(500).send('Login inválido!');
    }

  })

//Validando TOKEN
  function verifyJWT(req, res, next){
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, teste, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
  }

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