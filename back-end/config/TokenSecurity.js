var jwt = require('jsonwebtoken');
var tokenSecurity = {};

tokenSecurity.registrarToken = async() => {
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
}

//Validando TOKEN
tokenSecurity.validarJWT = async(req, res, next) => {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, "chaveDeCodificação", function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
  }

  module.exports = tokenSecurity;

/*

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
    
    jwt.verify(token, "chaveDeCodificação" , function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
  }


*/