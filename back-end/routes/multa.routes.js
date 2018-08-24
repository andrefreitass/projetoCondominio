var express = require('express');
var router = express.Router();

var multaRouter = require('../controllers/multa.controller');

router.get('/', multaRouter.getMulta);
router.get('/:id', multaRouter.buscaMultaId);
router.post('/', multaRouter.inserirMulta);
router.put('/:id', multaRouter.atualizarMulta);
router.delete('/:id', multaRouter.excluirMulta);

module.exports = router;