const router = require('express').Router();

const { getFunkos, createFunko } = require('../controllers/funkos');

router.post('/', createFunko);
router.get('/', getFunkos);

module.exports = router;