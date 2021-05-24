const schema = require('../schemas/validateId');
const { decodeToken } = require('./../../services/auth');

const validateId = (req, res, next) => {
    try {
        const {authorization} = req.headers;
        const {userID} = decodeToken(authorization);
        req.id = userID;
        next();    
    } catch (error) {
        console.error(error);
        res.status(401).json({message:'usuario no autorizado'});
    }
}

module.exports = {validateId};