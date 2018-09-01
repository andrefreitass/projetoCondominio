var express = require('express');
var router = express.Router();

var funcionarioRouter = require('../controllers/funcionario.controller');

router.get('/', funcionarioRouter.getFuncionario);
router.get('/:id', funcionarioRouter.buscaFuncionarioId);
router.post('/', funcionarioRouter.inserirFuncionario);
router.put('/:id', funcionarioRouter.atualizarFuncionario);
router.delete('/:id', funcionarioRouter.excluirFuncionario);

module.exports = router;