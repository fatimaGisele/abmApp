const { Model, DataTypes } = require('sequelize');
const {sequelize} = require('../database/db');

class Expense extends Model {}
Expense.init({ 
  expenseID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  concept: {
    type: DataTypes.STRING,
    allowNull: false  
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, { sequelize, modelName: 'expense' });



module.exports = {Expense}