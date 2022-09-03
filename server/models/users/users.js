// Sample Model Creation

const Sequelize = require('sequelize');
const sequelize = require('../../helpers/database');

const Users = sequelize.define('users', {
    userId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
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
    title: {
        type: Sequelize.JSON,
        allowNull: false,
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    middleName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    gender: {
        type: Sequelize.JSON,
        allowNull: false,
    },
    dateOfBirth: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    nationality: {
        type: Sequelize.JSON,
        allowNull: false,
    },
    organization: {
        type: Sequelize.JSON,
        allowNull: false,
    },
    department: {
        type: Sequelize.JSON,
        allowNull: false,
    },
    section: {
        type: Sequelize.JSON,
        allowNull: false,
    },
    position: {
        type: Sequelize.JSON,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    mobile: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    groups: {
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

module.exports = Users;