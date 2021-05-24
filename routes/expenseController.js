const {Router} = require('express');
const { create,deleteFrom, all, addTo, substractFrom, find } = require('../controllers/expenseController');
const router = Router();

/* expense controller page. */

router.post('/', create);
router.get('/', all);
router.get('/:id', find);
router.put('/:id',addTo);
router.put('/:id', substractFrom);
router.delete('/id', deleteFrom);


module.exports = router;