// Sample MySql Db Connection

const Sequelize = require('sequelize');
const sequelize = new Sequelize('systemfactory', 'root', 'Solomon33', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;