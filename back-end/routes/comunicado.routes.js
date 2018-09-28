var express = require('express');
var router = express.Router();

var comunicadoRouter = require('../controllers/comunicado.controller');


router.get('/por-inicio/:dataInicio', comunicadoRouter.buscaComunicadoDataInicio);
router.get('/por-fim/:dataFim', comunicadoRouter.buscaComunicadoDataFim) 
router.get('/', comunicadoRouter.getComunicado);
router.get('/:id', comunicadoRouter.buscaComunicadoId);
router.post('/', comunicadoRouter.inserirComunicado);
router.put('/:id', comunicadoRouter.atualizarComunicado);
router.delete('/:id', comunicadoRouter.excluirComunicado);

module.exports = router;