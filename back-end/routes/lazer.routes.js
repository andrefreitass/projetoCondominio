var express = require('express');
var router = express.Router();

var lazerRouter = require('../controllers/lazer.controller');

router.get('/', lazerRouter.getLazer);
router.get('/:id', lazerRouter.buscaLazerId);
router.post('/', lazerRouter.inserirLazer);
router.put('/:id', lazerRouter.atualizarLazer);
router.delete('/:id', lazerRouter.excluirLazer);

module.exports = router;