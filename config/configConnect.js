const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('admin_dev', 'root', 'thn060898', {
    host: 'localhost',
    dialect: 'mysql'
  });


const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

  module.exports = connection