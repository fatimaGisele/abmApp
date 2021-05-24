
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('challenge', 'root', '', {
    host: 'localhost',
    dialect:  'mysql'
  });


  sequelize.sync({force: true}).then(()=>{
    console.log('tablas sincronizadas');
  })

  const dbConnection = async() => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }


  module.exports = {dbConnection, sequelize}