var Login = require('../models/login.models')
var loginCrtl = {};

loginCrtl.inserirLogin = async ( req, res ) => {
    var login = new Login ({
        login: req.body.login,
        senha: req.body.senha
    });
    await login.save();
    res.json({
        'status': 'Novo login cadastrado.' 
    });
}

loginCrtl.buscarLogin = async ( req, res ) => {
    let { login, senha } = req.query;
    let loginBd = await Login.findOne({
        login: { login },
        senha: { senha }
    });
    res.json( loginBd );
}

module.exports = loginCrtl;