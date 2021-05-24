const User = require('../models/user');
const {hash, unHash} = require('./../utils/bcrypt');
const {createToken} = require('./../services/auth');


const createUser = async(req, res) =>{
    try {
        const {name, mail, password} = req.body;  
        let user = await User.findOne({where : {mail: mail}});
        if(user !== null) return  res.status(404).json({message: 'mail en uso'});
        user = new User(req.body);
        user.password = hash(password);
        await user.create(req.body);
        res.sendStatus(201).json({message: 'usuario creado'});
    } catch (error) {
        console.error(error);
        res.sendStatus(500).json({message: 'ocurrio un error'});
    }
   
    
}

const loginUser = async(req, res) =>{
    try {
        let user = await User.findOne({where : {mail: req.body.mail}});
        if(user){
            const isValidPassword = unHash(req.body.password, user.password);

            const jwtObject = { //recordar guardarlo en el local storage c/ el front!!!!
                userID: user.userID,
                mail,
            };

            const jwt = createToken(jwtObject);

            if(!isValidPassword) return res.status(404).json({message:'usuario y/o contraseña incorrectos'});
            res.json({message:'inicio de sesion correcto'});
        }
        res.sendStatus(404).json({message:'usuario y/o contraseña incorrectos'});
    } catch (error) {
        console.error(error);
        res.sendStatus(500).json({message:'ocurrio un error'});
    }
}

module.exports = {createUser, loginUser};