const schema = require('../schemas/user');

const validateUser = (req, res, next) =>{
    const {error, value} = schema.createUser.validate(req.body);
    error ? res.status(422).json({message: 'datos incorrectos'}) : next();
}

const validLogin = (req, res, next) => {
    const {error, value} = schema.loginUser.validate(req.body);
    error ? res.status(422).json({message: 'datos incorrectos'}) : next();
}

module.exports = {validateUser, validLogin};