var express = require('express');
var router = express.Router();

const articlRepo = require('../respositories/article')
/* GET users listing. */

router.get('/', async function(eq, res, next) {
  res.send(await articlRepo.getAllartcile())
});
router.get('/:id', async function(eq, res, next) {
  res.send(await articlRepo.get)
});

module.exports = router;