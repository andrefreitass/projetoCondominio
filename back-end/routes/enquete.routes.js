var express = require('express');
var router = express.Router();

var enquete = require('../controllers/enquete.controller');

router.get('/', enquete.getArrayEnquete);
router.post('/', enquete.createEnquete);
router.get('/:id', enquete.getEnquete);
router.put('/:id', enquete.editEnquete);
router.delete('/:id', enquete.deleteEnquete);

module.exports = router;