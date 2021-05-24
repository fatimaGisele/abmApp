const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync();

const hash = (password) => bcrypt.hashSync(password, salt);

const unHash = (password, hashedPassword) => {
    bcrypt.compareSync(password, hashedPassword);
}

module.exports = {hash, unHash}