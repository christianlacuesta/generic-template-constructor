// Sample Model Creation

const Sequelize = require('sequelize');
const sequelize = require('../../helpers/database');

const UserSessions = sequelize.define('usersessions', {
    userSessionId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userId: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    idNo: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    staffId: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    transaction: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    appState: {
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

module.exports = UserSessions;