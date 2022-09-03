const Sequelize = require('sequelize');
const sequelize = require('../helpers/database');

const UserSessionForms = sequelize.define('usersessionforms', {
    userSessionFormId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    stepMode: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    stepId: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    sessionId: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    objectId: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    objectParentId: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    level: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    itemId: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    interfaceId: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    systemId: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    organizationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    label: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    value: {
        type: Sequelize.JSON,
        allowNull: true,
    },
    type: {
        type: Sequelize.JSON,
        allowNull: false,
    },
    comment: {
        type: Sequelize.JSON,
        allowNull: true,
    },
    commentType: {
        type: Sequelize.JSON,
        allowNull: true,
    },
    choices: {
        type: Sequelize.JSON,
        allowNull: true,
    },
    isMultiple: {
        type: Sequelize.JSON,
        allowNull: true,
    },
    defaultSelected: {
        type: Sequelize.JSON,
        allowNull: true,
    },
    isSelected: {
        type: Sequelize.JSON,
        allowNull: true,
    },
    isRequired: {
        type: Sequelize.JSON,
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
    },
});

module.exports = UserSessionForms;