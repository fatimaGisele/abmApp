const { Model, DataTypes } = require('sequelize');
const {sequelize} = require('../database/db');

class User extends Model {}
User.init({ 
  userID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mail: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password:{
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'user' });


module.exports = {User}