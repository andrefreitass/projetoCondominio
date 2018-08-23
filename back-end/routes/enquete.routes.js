var express = require('express');
var router = express.Router();

var enqueteRouter = require('../controllers/enquete.controller');

router.get('/', enqueteRouter.getEnquete);
router.get('/:id', enqueteRouter.buscaEnqueteId);
router.post('/', enqueteRouter.inserirEnquete);
router.put('/:id', enqueteRouter.atualizarEnquete);
router.delete('/:id', enqueteRouter.excluirEnquete);

module.exports = router;