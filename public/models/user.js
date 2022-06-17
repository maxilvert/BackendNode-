const { DataTypes } = require('sequelize')
const DB = require('../../db.config')
//Defines the user model
const User = DB.define('User', {
    id: {
        type: DataTypes.BIGINT(),
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING(200),
        validate: {
            isEmail: true
        },
        defaultValue: '',
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING(35),
        defaultValue: '',
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING(35),
        defaultValue: '',
        allowNull: false
    },
    role: {
        type: DataTypes.STRING(10),
        defaultValue: '',
        allowNull: false
    },
    password: {
        type: DataTypes.CHAR(64),
        is: /^[0-9a-f]{64}$/i, //constraint for the password
        defaultValue: '',
        allowNull: false
    },
    parain: {
        type: DataTypes.STRING(200),
        validate: {
            isEmail: true
        },
        defaultValue: '',
        allowNull: true,
        unique: false
    }


}, { paranoid: true }) //soft delete

module.exports = User;