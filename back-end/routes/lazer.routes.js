var express = require('express');
var router = express.Router();

var lazer = require('../controllers/lazer.controller');

router.get('/', lazer.getArraylazer);
router.post('/', lazer.createLazer);
router.get('/:id', lazer.getLazer);
router.put('/:id', lazer.editLazer);
router.delete('/:id', lazer.deleteLazer);

module.exports = router;