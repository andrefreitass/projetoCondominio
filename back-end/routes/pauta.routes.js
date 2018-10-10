var express = require('express');
var router = express.Router();

var pautaRouter = require('../controllers/pauta.controller');

router.get('/por-inicio/:dataInicio', pautaRouter.buscaPautaDataInicio);
router.get('/por-fim/:dataFim', pautaRouter.buscaPautaDataFim) 
router.get('/', pautaRouter.getPauta);
router.get('/:id', pautaRouter.buscaPautaId);
router.post('/', pautaRouter.inserirPauta);
router.put('/:id', pautaRouter.atualizarPauta);
router.delete('/:id', pautaRouter.excluirPauta);

module.exports = router;