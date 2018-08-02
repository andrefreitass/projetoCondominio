var express = require('express');
var router = express.Router();

var lazerRouter = require('../controllers/lazer.controller');

router.get('/', lazerRouter.getArraylazer);
router.post('/', lazerRouter.createLazer);
router.get('/:id', lazerRouter.getLazer);
router.put('/:id', lazerRouter.editLazer);
router.delete('/:id', lazerRouter.deleteLazer);

module.exports = router;