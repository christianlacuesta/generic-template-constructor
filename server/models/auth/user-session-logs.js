const Sequelize = require('sequelize');
const sequelize = require('../../helpers/database');

const UserSessionLogs = sequelize.define('usersessionlogs', {
    userSessionLogId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userSessionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    transaction: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    mode: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    organization: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    system: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    interface: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    step: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    form: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    activeStep: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    record: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    formMode: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    clientIpAddress: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    roleType: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    accessType: {
        type: Sequelize.JSON,
        allowNull: false,

    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    loginAt: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    logoutAt: {
        type: Sequelize.DATE,
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
    },
});

module.exports = UserSessionLogs;