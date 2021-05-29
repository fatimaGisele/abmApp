const {Router} = require('express');
const { addTo, substractFrom } = require('../controllers/expenseController');
const router = Router();

/* expense controller page. */


router.put('/:id',addTo);
router.put('/:id', substractFrom);


module.exports = router;