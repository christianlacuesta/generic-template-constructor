// Sample Model Creation

const Sequelize = require('sequelize');
const sequelize = require('../../helpers/database');

const Objects = sequelize.define('objects', {
    objectId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    label: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    label2: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    config: {
        type: Sequelize.JSON,
        allowNull: true,
    },
    createdById: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    createdByName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    updatedById: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    updatedByName: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Objects;