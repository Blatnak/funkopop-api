const router = require('express').Router();

const { getFunkos, createFunko } = require('../controllers/funkos');

router.post('/create-funko', createFunko);
router.get('/', getFunkos);

module.exports = router;