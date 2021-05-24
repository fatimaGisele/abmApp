var {Router} = require('express');
const { loginUser, createUser} = require('../controllers/auth');
const {validateUser, validLogin} = require('../middleware/actions/user');
var router = Router();

/*home page. */

router.post('/',validateUser, createUser);
router.post('/login', validLogin, loginUser);

module.exports = router;
