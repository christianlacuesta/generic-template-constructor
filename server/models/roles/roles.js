// Sample Model Creation

const Sequelize = require('sequelize');
const sequelize = require('../../helpers/database');

const Roles = sequelize.define('roles', {
    roleId: {
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

module.exports = Roles;