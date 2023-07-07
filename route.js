const express = require ('express');

const router = express.Router();

router.get('/');
router.get('/a');
router.get('/b');
router.get('/c');
router.get('/d');

module.exports = router;