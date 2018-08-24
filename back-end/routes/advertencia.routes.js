var express = require('express');
var router = express.Router();

var advertenciaRouter = require('../controllers/advertencia.controller');

router.get('/', advertenciaRouter.getAdvertencia);
router.get('/:id', advertenciaRouter.buscaAdvertenciaId);
router.post('/', advertenciaRouter.inserirAdvertencia);
router.put('/:id', advertenciaRouter.atualizarAdvertencia);
router.delete('/:id', advertenciaRouter.excluirAdvertencia);

module.exports = router;