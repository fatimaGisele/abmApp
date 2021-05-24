const {User} = require('../models/user');
const {Expense} = require('../models/expense');


User.hasMany(Expense, {foreignKey:'userID'});

Expense.belongsTo(User);

