const {Router} = require('express');
const router = Router();
const { create,deleteFrom, all, find } = require('../controllers/homeExpense');


router.post('/', create);
router.get('/', all);
router.get('/:id', find);
router.delete('/id', deleteFrom);

module.exports = router;