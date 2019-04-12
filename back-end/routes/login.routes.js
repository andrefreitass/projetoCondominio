var express = require('express');
var router = express.Router();

var loginRouter = require('../controllers/login.controller');

router.post( '/', loginRouter.inserirLogin );
router.post( '/logar', loginRouter.buscarLogin );

module.exports = router;